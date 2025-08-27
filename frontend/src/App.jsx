import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Media from './pages/Media';
import Login from './pages/Login';
import Chatbot from './components/common/Chatbot';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isLogin = location.pathname === '/';
  return (
    <div className="App min-h-screen bg-black text-white">
      {!isLogin && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/home" element={<Home />} />
        <Route path="/science" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Science Page - Coming Soon</h1></div>} />
        <Route path="/community" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Community Page - Coming Soon</h1></div>} />
        <Route path="/media" element={<Media />} />
        {/* <Route path="/media" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Media Page - Coming Soon</h1></div>} /> */}
        <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Contact Page - Coming Soon</h1></div>} />
        <Route path="/privacy" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Privacy Page - Coming Soon</h1></div>} />
        <Route path="/terms" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Terms Page - Coming Soon</h1></div>} />
      </Routes>
      {!isLogin && <Footer />}
      {location.pathname !== '/' && <Chatbot />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;