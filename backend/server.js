const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;
const ASSISTANT_ID = 'asst_Xt1go553DiLSJCPO7UwxE4bC';

// Middleware
app.use(helmet());
app.use(cors({
  origin: '*', // Allow all origins for development
  credentials: true
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'MyGen Wellness API Server',
    version: '1.0.0',
    status: 'running'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Beta invitation endpoint
app.post('/api/beta-invitation', (req, res) => {
  const { email, name } = req.body;
  
  // In a real application, this would save to a database
  console.log('Beta invitation request:', { email, name, timestamp: new Date().toISOString() });
  
  res.json({
    success: true,
    message: 'Beta invitation request received! We\'ll be in touch soon.',
    data: {
      email,
      name,
      status: 'pending'
    }
  });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // In a real application, this would save to a database or send an email
  console.log('Contact form submission:', { name, email, message, timestamp: new Date().toISOString() });
  
  res.json({
    success: true,
    message: 'Thank you for your message! We\'ll get back to you soon.',
    data: {
      name,
      email,
      status: 'received'
    }
  });
});

// Chatbot endpoint (demo)
app.post('/api/chat', async (req, res) => {
  const { message, userId } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: 'OpenAI API key is not configured.'
    });
  }

  // NOTE: For a real application, you would typically store the
  // thread ID for each user in a database or session to maintain
  // a continuous conversation. For simplicity, this example creates
  // a new thread for every request.

  try {
    // 1. Create a new thread for the conversation.
    console.log("Creating new thread...");
    const threadRes = await fetch('https://api.openai.com/v1/threads', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      }
    });

    if (!threadRes.ok) {
      const errorData = await threadRes.json();
      throw new Error(`Failed to create thread: ${errorData.error.message}`);
    }
    const threadData = await threadRes.json();
    const threadId = threadData.id;
    console.log(`Thread created with ID: ${threadId}`);

    // 2. Add the user's message to the newly created thread.
    console.log("Adding user message to thread...");
    const messageRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({
        role: "user",
        content: message
      })
    });

    if (!messageRes.ok) {
      const errorData = await messageRes.json();
      throw new Error(`Failed to add message to thread: ${errorData.error.message}`);
    }
    await messageRes.json();
    console.log("User message added.");

    // 3. Create a Run to execute the assistant on the thread.
    console.log("Creating a run...");
    const runRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({
        assistant_id: ASSISTANT_ID
      })
    });

    if (!runRes.ok) {
      const errorData = await runRes.json();
      throw new Error(`Failed to create run: ${errorData.error.message}`);
    }
    const runData = await runRes.json();
    const runId = runData.id;
    console.log(`Run created with ID: ${runId}`);

    // 4. Poll the Run status until it's completed.
    // This is a simple polling loop. In production, you might want to
    // use a more robust strategy with exponential backoff.
    let runStatus = '';
    while (runStatus !== 'completed' && runStatus !== 'failed') {
      const statusRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v2'
        }
      });

      if (!statusRes.ok) {
        const errorData = await statusRes.json();
        throw new Error(`Failed to get run status: ${errorData.error.message}`);
      }
      const statusData = await statusRes.json();
      runStatus = statusData.status;

      console.log(`Run status: ${runStatus}`);

      // Wait a short time before polling again to avoid rate-limiting.
      if (runStatus !== 'completed' && runStatus !== 'failed') {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    if (runStatus === 'failed') {
      const statusRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v2'
        }
      });
      const errorData = await statusRes.json();
      throw new Error(`Run failed: ${JSON.stringify(errorData, null, 2)}`);
    }

    // 5. Retrieve all messages from the thread to get the assistant's response.
    console.log("Retrieving messages from thread...");
    const messagesRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages?order=desc`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'OpenAI-Beta': 'assistants=v2'
      }
    });

    if (!messagesRes.ok) {
      const errorData = await messagesRes.json();
      throw new Error(`Failed to retrieve messages: ${errorData.error.message}`);
    }
    const messagesData = await messagesRes.json();

    // The latest message in the thread is the assistant's response.
    const assistantMessage = messagesData.data.find(msg => msg.role === 'assistant');

    if (assistantMessage) {
      res.json({
        success: true,
        message: assistantMessage.content[0].text.value,
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'No assistant message found.',
        error: messagesData
      });
    }

  } catch (err) {
    console.error("Error contacting OpenAI API:", err);
    res.status(500).json({
      success: false,
      message: 'Error contacting OpenAI API',
      error: err.message
    });
  }
});




// app.post('/api/chat', async (req, res) => {
//   const { message, userId } = req.body;
//   const apiKey = process.env.OPENAI_API_KEY;
  
//   console.log("OpenAI API Key:", apiKey); 

//   try {
//     const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${apiKey}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           { role: "system", content: "You are ChatGPT, an AI assistant for wellness." },
//           { role: "user", content: message }
//         ]
//       })
//     });
//     console.log("TRYING")

//     const data = await openaiRes.json();

//     console.log("GOT DATA", data);
//     console.log("CHOICES", data.choices);

//     if (data.choices && data.choices.length > 0) {
//       res.json({
//         success: true,
//         message: data.choices[0].message.content,
//         timestamp: new Date().toISOString()
//       });
//     } else {
//       res.status(500).json({
//         success: false,
//         message: 'Failed to get response from OpenAI',
//         error: data
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: 'Error contacting OpenAI API',
//       error: err.message
//     });
//   }
// });
// app.post('/api/chat', (req, res) => {
//   const { message, userId } = req.body;
  
//   // Simple demo responses
//   const responses = [
//     "I'm just a demo for now, but soon I'll answer your wellness questions!",
//     "That's a great question! Our AI will be able to provide personalized wellness advice soon.",
//     "Thanks for trying out the chat feature! The full AI assistant is coming soon.",
//     "I appreciate your interest in MyGen Wellness! More features are on the way."
//   ];
  
//   const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
//   setTimeout(() => {
//     res.json({
//       success: true,
//       message: randomResponse,
//       timestamp: new Date().toISOString()
//     });
//   }, 500); // Simulate processing delay
// });

// User preferences endpoint (demo)
app.get('/api/user/:id/preferences', (req, res) => {
  const { id } = req.params;
  
  // Demo user preferences
  res.json({
    success: true,
    data: {
      userId: id,
      preferences: {
        notifications: true,
        reminderTime: '09:00',
        focusAreas: ['nutrition', 'exercise', 'sleep'],
        difficultyLevel: 'beginner'
      }
    }
  });
});

// Daily habits endpoint (demo)
app.get('/api/habits/daily', (req, res) => {
  const habits = [
    {
      id: 1,
      name: 'Drink 8oz water',
      category: 'hydration',
      completed: false,
      points: 10
    },
    {
      id: 2,
      name: '5-minute walk',
      category: 'movement',
      completed: false,
      points: 15
    },
    {
      id: 3,
      name: 'Deep breathing exercise',
      category: 'mindfulness',
      completed: false,
      points: 10
    },
    {
      id: 4,
      name: 'Gratitude note',
      category: 'mindfulness',
      completed: false,
      points: 5
    },
    {
      id: 5,
      name: 'Healthy snack',
      category: 'nutrition',
      completed: false,
      points: 10
    }
  ];
  
  res.json({
    success: true,
    data: {
      habits,
      totalPoints: habits.reduce((sum, habit) => sum + habit.points, 0),
      date: new Date().toISOString().split('T')[0]
    }
  });
});

// Complete habit endpoint
app.post('/api/habits/:id/complete', (req, res) => {
  const { id } = req.params;
  
  res.json({
    success: true,
    message: 'Habit completed successfully!',
    data: {
      habitId: parseInt(id),
      completed: true,
      pointsEarned: 10,
      timestamp: new Date().toISOString()
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
    path: req.originalUrl
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`MyGen Wellness API Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Server URL: http://localhost:${PORT}`);
});

module.exports = app;

