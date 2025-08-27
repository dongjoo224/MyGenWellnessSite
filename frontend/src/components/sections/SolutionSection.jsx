import React from 'react';
import { Lightbulb, ShieldCheck, UserCheck, TrendingUp, Users } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="solution-narrative py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="narrative-content max-w-6xl mx-auto text-center">
          <div className="section-badge-light inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
            <Lightbulb className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">The Guiding Light</span>
          </div>
          
          <h2 className="narrative-title-light text-4xl md:text-6xl font-black leading-tight mb-8">
            What if wellness could be{' '}
            <span className="gradient-text-green bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              effortless
            </span>?
          </h2>
          
          <p className="narrative-description-light text-xl text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto">
            MyGen doesn't ask you to change everything. Instead, we take the latest science of wellness, aging, and habit-building, break it into tiny, personalized actions, and weave them seamlessly into your daily routine. Our AI encourages and reminds you every day, helping you shift habits and compound small wins into extraordinary results — no willpower required.
          </p>

          <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="benefit-card bg-green-500/5 border border-green-500/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/20 hover:transform hover:-translate-y-2">
              <div className="benefit-icon w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white text-xl font-semibold mb-4">Scientifically Validated</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every feature is backed by peer-reviewed research in behavioral psychology and wellness science.
              </p>
            </div>

            <div className="benefit-card bg-green-500/5 border border-green-500/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/20 hover:transform hover:-translate-y-2">
              <div className="benefit-icon w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white text-xl font-semibold mb-4">Personalized By AI</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                No two MyGen experiences are alike. Your AI coach learns your schedule, preferences, and even your mood patterns.
              </p>
            </div>
            
            <div className="benefit-card bg-green-500/5 border border-green-500/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/20 hover:transform hover:-translate-y-2">
              <div className="benefit-icon w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white text-xl font-semibold mb-4">Habit-Forming</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Forget dramatic overhauls. We focus on micro-changes that stick because they feel natural, not forced.
              </p>
            </div>
            
            <div className="benefit-card bg-green-500/5 border border-green-500/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/20 hover:transform hover:-translate-y-2">
              <div className="benefit-icon w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white text-xl font-semibold mb-4">Community-Driven</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connect with others on similar journeys. Share victories, learn from setbacks, grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

