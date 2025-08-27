import React from 'react';
import { MapPin, Rocket } from 'lucide-react';
import ProcessSteps from '../components/sections/ProcessSteps.jsx';
import BenefitsSection from '../components/sections/BenefitsSection.jsx';

const HowItWorks = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="hero-how-it-works min-h-[80vh] flex items-center relative pt-20 bg-gradient-radial from-cyan-500/5 to-black">
        <div className="container mx-auto px-4">
          <div className="hero-content-centered text-center max-w-4xl mx-auto">
            {/* Beta badge */}
            <div className="beta-badge-minimal inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">The Path Unveiled</span>
            </div>
            
            {/* Main title */}
            <h1 className="hero-title-centered text-5xl md:text-6xl font-black leading-tight mb-6">
              Your journey to{' '}
              <span className="gradient-text-turquoise bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                lasting wellness
              </span>{' '}
              starts here
            </h1>
            
            {/* Subtitle */}
            <p className="hero-description-centered text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              MyGen's AI-powered approach transforms the overwhelming world of wellness into a personalized, step-by-step journey that actually works.
            </p>
            
            {/* Scroll indicator */}
            <div className="scroll-indicator-centered flex flex-col items-center gap-2 mt-12 animate-bounce">
              <div className="scroll-line w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"></div>
              <div className="scroll-dot w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <BenefitsSection />

      {/* Call to Action */}
      <section className="cta-how-it-works py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="cta-content text-center max-w-2xl mx-auto">
            <div className="section-badge-light inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Ready To Begin?</span>
            </div>
            
            <h2 className="cta-title text-4xl md:text-5xl font-black leading-tight mb-6">
              Your transformation{' '}
              <span className="gradient-text-turquoise bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                starts now
              </span>
            </h2>
            
            <p className="cta-description text-xl text-gray-300 leading-relaxed mb-12">
              Join the exclusive MyGen beta and experience the future of personalized wellness. Limited spots available.
            </p>
            
            <div className="cta-actions flex flex-col items-center gap-6">
              <button className="btn-primary-large bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                <span>Request Beta Access</span>
                <span className="ml-2">→</span>
              </button>
              
              <div className="cta-note flex items-center gap-2 text-gray-400 text-sm">
                <span>👥</span>
                <span>Join 1,000+ beta users already transforming their lives</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;

