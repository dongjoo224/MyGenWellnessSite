import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="font-[Urbanist] header-minimal fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="nav-wrapper-minimal flex items-center justify-between py-4">
          {/* Logo and brand name */}
          <Link to="/" className="logo-minimal flex items-center">
            <img 
              src="/images/mygen_wellness_logo.png" 
              alt="MyGen Wellness Logo" 
              className="h-9 mr-2"
            />
            {/* <span className="logo-text-minimal text-white text-xl font-bold"></span> */}
          </Link>
          
          {/* Desktop navigation menu */}
          <nav className="nav-menu-minimal hidden md:flex items-center space-x-8">
            <Link to="/home" className="nav-link-minimal text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/how-it-works" className="nav-link-minimal text-white hover:text-cyan-400 transition-colors">
              How It Works
            </Link>
            <Link to="/science" className="nav-link-minimal text-white hover:text-cyan-400 transition-colors">
              Science
            </Link>
            <Link to="/community" className="nav-link-minimal text-white hover:text-cyan-400 transition-colors">
              Community
            </Link>
            <Link to="/media" className="nav-link-minimal text-white hover:text-cyan-400 transition-colors">
              Media
            </Link>
            <Link to="/team" className="nav-link-minimal text-white hover:text-cyan-400 transition-colors">
              Team
            </Link>
            <Link to="/dashboard" className="nav-link-minimal text-white hover:text-purple-400 transition-colors font-semibold">
              Dashboard
            </Link>
            {/* <Link to="/contact" className="nav-link-minimal text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link> */}
            
            {/* Logout button */}
            <button 
              onClick={handleLogout}
              className="nav-link-minimal text-white hover:text-red-400 transition-colors flex items-center gap-2"
              title="Logout"
            >
              <LogOut size={18} />
              Logout
            </button>
          </nav>
          
          {/* Mobile menu toggle button */}
          <button 
            className="mobile-menu-toggle-minimal md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-black/90 rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="nav-link-minimal text-white hover:text-cyan-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/how-it-works" 
                className="nav-link-minimal text-white hover:text-cyan-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                How It Works
              </Link>
              <Link 
                to="/science" 
                className="nav-link-minimal text-white hover:text-cyan-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Science
              </Link>
              <Link 
                to="/community" 
                className="nav-link-minimal text-white hover:text-cyan-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Community
              </Link>
              <Link 
                to="/about" 
                className="nav-link-minimal text-white hover:text-cyan-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/dashboard" 
                className="nav-link-minimal text-white hover:text-purple-400 transition-colors font-semibold"
                onClick={toggleMobileMenu}
              >
                Dashboard
              </Link>
              {/* <Link 
                to="/contact" 
                className="nav-link-minimal text-white hover:text-cyan-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link> */}
              
              {/* Mobile logout button */}
              <button 
                onClick={() => {
                  toggleMobileMenu();
                  handleLogout();
                }}
                className="nav-link-minimal text-white hover:text-red-400 transition-colors flex items-center gap-2 text-left"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

