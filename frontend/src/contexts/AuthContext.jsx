import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [auth0Client, setAuth0Client] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Auth0 configuration
  const auth0Config = {
    domain: "dev-2g5s4ibcdxvbsbmh.us.auth0.com",
    clientId: "qEzAPfVH9sRVRQOQ9WGTtnjosjeneK04",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  };

  useEffect(() => {
    const initAuth0 = async () => {
      try {
        setIsLoading(true);
        
        // Check if Auth0 SDK is already loaded
        if (typeof window.auth0 === 'undefined' || typeof window.auth0.createAuth0Client === 'undefined') {
          // Load Auth0 SDK
          const script = document.createElement('script');
          script.src = "https://cdn.auth0.com/js/auth0-spa-js/2.0/auth0-spa-js.production.js";
          
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // Create Auth0 client
        const client = await window.auth0.createAuth0Client(auth0Config);
        setAuth0Client(client);

        // Handle redirect callback if present
        if (window.location.search.includes('code=')) {
          await client.handleRedirectCallback();
          window.history.replaceState({}, document.title, window.location.pathname);
        }

        // Check authentication status
        const isAuth = await client.isAuthenticated();
        setIsAuthenticated(isAuth);

        if (isAuth) {
          const userData = await client.getUser();
          setUser(userData);
        }

      } catch (error) {
        console.error('Auth0 initialization failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth0();
  }, []);

  const login = async () => {
    if (!auth0Client) return;
    
    try {
      await auth0Client.loginWithRedirect();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = async () => {
    if (!auth0Client) return;
    
    try {
      await auth0Client.logout({
        logoutParams: {
          returnTo: window.location.origin,
        },
      });
      // Clear local state
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const value = {
    auth0Client,
    isAuthenticated,
    user,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
