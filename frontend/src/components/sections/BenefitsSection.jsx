import React from 'react';
import { CheckCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    "No overwhelming changes - just tiny, manageable activities",
    "AI adapts to your schedule and preferences", 
    "Science-backed approach proven to create lasting habits",
    "Holistic wellness across all life dimensions",
    "Community support and social features",
    "Progress tracking and personalized insights"
  ];

  const activities = [
    { name: "Drink 8oz water", completed: true },
    { name: "5-minute walk", completed: true },
    { name: "Deep breathing", completed: true },
    { name: "Gratitude note", completed: true },
    { name: "Healthy snack", completed: false }
  ];

  return (
    <section className="benefits py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="benefits-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side: Text content */}
          <div className="benefits-text">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Why Our Approach{' '}
              <span className="gradient-text bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Actually Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Unlike traditional wellness apps that overwhelm you with drastic changes, MyGen focuses on tiny, sustainable activities that compound into lasting transformation.
            </p>
            
            <div className="benefits-list space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item flex items-start gap-4">
                  <CheckCircle className="benefit-icon w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side: App mockup */}
          <div className="benefits-visual flex justify-center">
            <div className="benefits-phone relative">
              <div className="phone-screen w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 shadow-2xl">
                <div className="screen-gradient h-full bg-gradient-to-b from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-6">
                  <div className="app-interface">
                    <div className="app-header flex justify-between items-center mb-8">
                      <h4 className="text-white text-xl font-bold">Today's Activities</h4>
                      <span className="completion-badge bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1 text-green-400 text-sm font-medium">
                        4/5 Complete
                      </span>
                    </div>
                    
                    <div className="activity-list space-y-4">
                      {activities.map((activity, index) => (
                        <div 
                          key={index}
                          className={`activity-item flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                            activity.completed 
                              ? 'bg-green-500/10 border border-green-500/20' 
                              : 'bg-gray-700/50 border border-gray-600/50'
                          }`}
                        >
                          <CheckCircle 
                            className={`w-6 h-6 ${
                              activity.completed ? 'text-green-400' : 'text-gray-500'
                            }`} 
                          />
                          <span 
                            className={`${
                              activity.completed ? 'text-white' : 'text-gray-400'
                            }`}
                          >
                            {activity.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="progress-section mt-8 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                      <div className="progress-header flex justify-between items-center mb-3">
                        <span className="text-white font-semibold">Daily Progress</span>
                        <span className="text-cyan-400 font-bold">80%</span>
                      </div>
                      <div className="progress-bar w-full bg-gray-700 rounded-full h-3">
                        <div className="progress-fill w-4/5 bg-gradient-to-r from-cyan-400 to-teal-400 h-3 rounded-full transition-all duration-500"></div>
                      </div>
                    </div>
                    
                    <div className="streak-info mt-6 text-center">
                      <div className="text-2xl mb-2">🔥</div>
                      <div className="text-white font-semibold">7 Day Streak!</div>
                      <div className="text-gray-400 text-sm">Keep it up!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

