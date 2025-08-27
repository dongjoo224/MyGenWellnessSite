const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

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
app.post('/api/chat', (req, res) => {
  const { message, userId } = req.body;
  
  // Simple demo responses
  const responses = [
    "I'm just a demo for now, but soon I'll answer your wellness questions!",
    "That's a great question! Our AI will be able to provide personalized wellness advice soon.",
    "Thanks for trying out the chat feature! The full AI assistant is coming soon.",
    "I appreciate your interest in MyGen Wellness! More features are on the way."
  ];
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  setTimeout(() => {
    res.json({
      success: true,
      message: randomResponse,
      timestamp: new Date().toISOString()
    });
  }, 500); // Simulate processing delay
});

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

