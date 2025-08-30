import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleBypassLogin = () => {
    navigate('/home');
  };

  const handleEmailLogin = () => {
    if (email) {
      alert('Login logic goes here!');
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="mt-8 mb-8">
          <Link to="/" className="logo-minimal flex justify-center">
            <img 
              src="/src/public/images/mygen_wellness_logo.png" 
              alt="MyGen Wellness Logo" 
              className="h-9 mr-2"
            />
            {/* <span className="logo-text-minimal text-white text-xl font-bold">MyGen</span> */}
          </Link>
        </div>
        <div className="login-container bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 w-full max-w-md">
        
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to your MyGen Wellness account</p>
          </div>

          <Button 
            onClick={handleBypassLogin}
            className="login-btn w-full mb-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Bypass login for limited access
          </Button>

          <div className="email-section">
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-3">
              Enter email if you've joined us already:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent mb-4"
              placeholder="your@email.com"
            />
            <Button
              onClick={handleEmailLogin}
              className="email-btn w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Continue
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Request beta access
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

