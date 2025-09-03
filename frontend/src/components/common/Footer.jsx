import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-minimal bg-black/90 py-8">
      <div className="container mx-auto px-4">
        <div className="footer-content-minimal flex flex-col md:flex-row items-center justify-between">
          <div className="footer-logo-minimal flex items-center mb-4 md:mb-0">
            <img 
              src="/images/mygen_wellness_logo.png" 
              alt="MyGen Wellness Logo" 
              className="h-9 mr-2"
            />
            {/* // <div className="logo-icon-minimal w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold mr-2">
            //   M
            // </div>
            // <span className="logo-text-minimal text-white text-lg font-bold">MyGen Wellness</span> */}
          </div>
          
          <div className="footer-links-minimal flex space-x-6 mb-4 md:mb-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="footer-copyright">
            <p className="text-gray-400 text-sm">
              &copy; 2025 MyGen Wellness. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

