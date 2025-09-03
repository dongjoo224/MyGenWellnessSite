import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

// NOTE: Auth0 SDK will be loaded via a CDN script tag in the HTML.
// The @auth0/auth0-react library is not compatible with a single-file build in this environment.
// This code has been refactored to use the Auth0 SPA JS SDK directly.

// A simple Button component to replace the external import
const Button = ({ onClick, children, className, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

// The main application component that renders the content based on auth state.
const App = () => {
  const { isAuthenticated, user, isLoading, login, logout } = useAuth();
  const [message, setMessage] = useState('');
  const [showBypassMessage, setShowBypassMessage] = useState(false);

  // IMPORTANT: Replace these with your own Auth0 domain and client ID from the dashboard.
  const auth0Config = {
    domain: "dev-2g5s4ibcdxvbsbmh.us.auth0.com",
    clientId: "qEzAPfVH9sRVRQOQ9WGTtnjosjeneK04",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  };

  const handleBypassLogin = () => {
    setShowBypassMessage(true);
    // Redirect to home page after a short delay
    setTimeout(() => {
      window.location.href = '/home';
    }, 1000);
  };

  const continueToHome = () => {
    window.location.href = '/home';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-cyan-500 border-r-cyan-500 border-b-cyan-500 border-l-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="flex flex-col items-center w-full max-w-md">
        {/* Your logo and branding */}
        <div className="mt-8 mb-8">
          <a href="#" className="logo-minimal flex justify-center">
            <img src="/images/mygen_wellness_logo.png" alt="MyGen Wellness Logo" className="h-9 mr-2"/>
          </a>
        </div>
        
        {/* Main login/profile container */}
        <div className="login-container bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 w-full max-w-md">
          {isAuthenticated ? (
            // Display user profile if authenticated
            <div className="profile-section text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome, {user.given_name || user.name || 'User'}!</h1>
              <p className="text-gray-400 mb-6">You are now logged in.</p>
              
              <div className="flex justify-center mb-4">
                <img src={user.picture || 'https://placehold.co/96x96/60A5FA/ffffff?text=User'} alt="User Profile" className="rounded-full w-24 h-24 border-4 border-cyan-500"/>
              </div>

              <div className="text-left p-4 bg-gray-800 rounded-xl text-sm">
                <p className="text-gray-400"><strong>Email:</strong> {user.email}</p>
              </div>

              <Button 
                onClick={continueToHome}
                className="mt-6 w-full bg-cyan-500 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Continue to Site
              </Button>

              <Button 
                onClick={logout}
                className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Log Out
              </Button>
            </div>
          ) : (
            // Display login options if not authenticated
            <div className="login-section">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-gray-400">Sign in to your MyGen Wellness account</p>
              </div>

              <Button 
                onClick={handleBypassLogin}
                className="login-btn w-full mb-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Bypass login for limited access
              </Button>
              
              <p className="text-center text-gray-400 mb-4">- OR -</p>

              <Button 
                onClick={login}
                className="email-btn w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Log in with Auth0
              </Button>

              {message && <p className="mt-4 text-center text-sm text-gray-400">{message}</p>}
              {showBypassMessage && (
                <p className="mt-4 text-center text-sm text-cyan-400">
                  Bypass mode enabled. You have limited access.
                </p>
              )}
            </div>
          )}
          
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

export default App;
