import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '../ui/button';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your MyGen AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "I'm just a demo for now, but soon I'll answer your wellness questions!",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 700);
  };

  return (
    <>
      {/* Chat Sidebar */}
      <div className={`ai-chat-sidebar fixed top-0 right-0 w-80 h-full bg-gray-900 border-l-2 border-orange-500 shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="ai-chat-header bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold text-lg p-4 flex items-center justify-between border-b border-orange-400">
          <span>AI Chatbot</span>
          <button 
            onClick={toggleSidebar}
            className="ai-chat-close text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            title="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="ai-chat-messages flex-1 p-4 overflow-y-auto bg-gray-900 text-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`ai-chat-message mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isBot
                    ? 'bg-orange-500/20 text-orange-100 ai-chat-message-bot'
                    : 'bg-gray-700 text-white ai-chat-message-user'
                }`}
              >
                <span className="text-sm">{message.text}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className="ai-chat-input-area flex border-t border-orange-400 bg-gray-900 p-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-gray-800 border border-orange-400 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mr-3 text-sm"
            placeholder="Type your message..."
            autoComplete="off"
          />
          <Button
            type="submit"
            className="ai-chat-send bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white border-none rounded-full px-6 py-2 font-semibold cursor-pointer transition-all duration-200"
          >
            Send
          </Button>
        </form>
      </div>

      {/* Open Chat Button */}
      <button
        onClick={toggleSidebar}
        className={`ai-chat-open-btn fixed right-9 bottom-9 z-40 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white border-none rounded-full w-15 h-15 flex items-center justify-center text-2xl shadow-lg hover:shadow-orange-500/25 cursor-pointer transition-all duration-200 transform hover:scale-105 ${isOpen ? 'hidden' : 'flex'}`}
        title="Chat with AI"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Custom styles for mobile */}
      <style jsx>{`
        @media (max-width: 600px) {
          .ai-chat-sidebar {
            width: 100vw;
            min-width: 0;
            border-left: none;
            border-top: 2px solid #f97316;
            top: auto;
            bottom: 0;
            height: 60vh;
            border-radius: 1.2rem 1.2rem 0 0;
            box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.18);
          }
          .ai-chat-open-btn {
            right: 1rem;
            bottom: 1rem;
            width: 48px;
            height: 48px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Chatbot;

