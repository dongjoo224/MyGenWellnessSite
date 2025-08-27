import React from 'react';
import { Compass, Lightbulb, CheckCircle, Pause, User } from 'lucide-react';

const WhyMyGenSection = () => {
  return (
    <section className="why-mygen py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="narrative-content max-w-6xl mx-auto text-center">
          <div className="section-badge-orange inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
            <Compass className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">The Journey Begins</span>
          </div>
          
          <h2 className="narrative-title text-4xl md:text-6xl font-black leading-tight mb-16">
            From First Step to Momentum:{' '}
            <span className="gradient-text-orange bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              <br />The MyGen Method
            </span>
          </h2>

          <div className="solution-principles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="principle-item flex flex-col items-center justify-center bg-orange-500/5 border border-orange-500/10 rounded-2xl p-8 transition-all duration-300 hover:bg-orange-500/10 hover:border-orange-500/20 hover:transform hover:-translate-y-2">
              <div className="principle-icon w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="principle-content text-center">
                <h4 className="text-white text-lg font-semibold mb-2">
                  <span className="principle-default">WHY</span>
                </h4>
                <p className="principle-hover text-gray-400 text-sm">Purpose, Mindset</p>
              </div>
            </div>
            
            <div className="principle-item flex flex-col items-center justify-center bg-orange-500/5 border border-orange-500/10 rounded-2xl p-8 transition-all duration-300 hover:bg-orange-500/10 hover:border-orange-500/20 hover:transform hover:-translate-y-2">
              <div className="principle-icon w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="principle-content text-center">
                <h4 className="text-white text-lg font-semibold mb-2">
                  <span className="principle-default">MORE</span>
                </h4>
                <p className="principle-hover text-gray-400 text-sm">Motion, Sleep, Hydration, Nutrition, Meditation</p>
              </div>
            </div>
            
            <div className="principle-item flex flex-col items-center justify-center bg-orange-500/5 border border-orange-500/10 rounded-2xl p-8 transition-all duration-300 hover:bg-orange-500/10 hover:border-orange-500/20 hover:transform hover:-translate-y-2">
              <div className="principle-icon w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Pause className="w-6 h-6 text-white" />
              </div>
              <div className="principle-content text-center">
                <h4 className="text-white text-lg font-semibold mb-2">
                  <span className="principle-default">LESS</span>
                </h4>
                <p className="principle-hover text-gray-400 text-sm">Smoking, Spirits, Sugars, Salt, Super Processed</p>
              </div>
            </div>

            <div className="principle-item flex flex-col items-center justify-center bg-orange-500/5 border border-orange-500/10 rounded-2xl p-8 transition-all duration-300 hover:bg-orange-500/10 hover:border-orange-500/20 hover:transform hover:-translate-y-2">
              <div className="principle-icon w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="principle-content text-center">
                <h4 className="text-white text-lg font-semibold mb-2">
                  <span className="principle-default">CONNECTIONS</span>
                </h4>
                <p className="principle-hover text-gray-400 text-sm">People, Nature, Arts, Music, Self</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMyGenSection;

