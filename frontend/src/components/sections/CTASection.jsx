import React from 'react';
import { Rocket } from 'lucide-react';
import { Button } from '../ui/button';

const CTASection = () => {
  const handleBetaInvitation = () => {
    // This would typically open a modal or redirect to a sign-up form
    alert('Beta invitation request submitted! We\'ll be in touch soon.');
  };

  return (
    <section className="cta-final py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="cta-content text-center max-w-4xl mx-auto">
          <div className="section-badge-light inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">The Invitation</span>
          </div>
          
          <h2 className="cta-title text-4xl md:text-6xl font-black leading-tight mb-8">
            Your wellness transformation{' '}
            <span className="gradient-text-turquoise bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              begins today
            </span>
          </h2>
          
          <p className="cta-description text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Join the exclusive MyGen beta community and be among the first to experience the future of personalized wellness. Transform your health with AI-powered coaching that actually works.
          </p>
          
          <div className="cta-actions flex flex-col items-center gap-6 mb-12">
            <Button 
              onClick={handleBetaInvitation}
              className="btn-primary-large bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Join the Beta App by Invite
            </Button>
            
            <div className="cta-note flex items-center gap-2 text-gray-400">
              <span className="text-cyan-400">👥</span>
              <span>Join 1,000+ beta users already transforming their lives</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

