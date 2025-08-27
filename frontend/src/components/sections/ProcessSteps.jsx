import React from 'react';
import { ClipboardList, Target, Bell, Star, CheckCircle, ArrowDown } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      id: 1,
      icon: ClipboardList,
      title: "Quick Onboarding",
      description: "Answer a few easy questions about your goals, habits, and lifestyle. In just minutes, our AI analyzes your responses and builds your unique wellness profile—like a blueprint designed just for you.",
      color: "cyan",
      screenContent: {
        title: "Quick Onboarding",
        description: "Complete a brief assessment about your wellness goals, current habits, and lifestyle preferences."
      }
    },
    {
      id: 2,
      icon: Target,
      title: "Personalized Plan",
      description: "Unlock a custom plan built on the Wellness Diamond framework. Every day, you’ll get small, doable activities across motion, nutrition, sleep, and mindfulness that are all tailored to fit your life.",
      color: "green",
      screenContent: {
        title: "Personalized Plan",
        description: "Receive your custom wellness plan based on the Wellness Diamond framework."
      }
    },
    {
      id: 3,
      icon: Bell,
      title: "Daily Nudges",
      description: "No more generic reminders. Our AI learns your rhythm and gives you the right nudge at the right moment with gentle prompts that keep you on track without getting in the way.",
      color: "blue",
      screenContent: {
        title: "Daily Nudges",
        description: "Get gentle, intelligent reminders throughout your day."
      }
    },
    {
      id: 4,
      icon: Star,
      title: "Earn Points",
      description: "Every step counts. Complete activities to earn points, hit milestones, and unlock achievements while tracking your growth across all four dimensions of wellness.",
      color: "purple",
      screenContent: {
        title: "Earn Points",
        description: "Complete activities to earn points and unlock achievements."
      }
    },
    {
      id: 5,
      icon: CheckCircle,
      title: "Build Habits",
      description: "Day by day, those small actions add up. Watch your habits compound into lasting, science-backed transformation that doesn’t just stick but becomes who you are.",
      color: "orange",
      screenContent: {
        title: "Build Habits",
        description: "Watch as tiny activities compound into lasting habits."
      }
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: {
        icon: 'from-cyan-500 to-cyan-600',
        screen: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30'
      },
      green: {
        icon: 'from-green-500 to-green-600',
        screen: 'from-green-500/20 to-green-600/20 border-green-500/30'
      },
      blue: {
        icon: 'from-blue-500 to-blue-600',
        screen: 'from-blue-500/20 to-blue-600/20 border-blue-500/30'
      },
      purple: {
        icon: 'from-purple-500 to-purple-600',
        screen: 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
      },
      orange: {
        icon: 'from-orange-500 to-orange-600',
        screen: 'from-orange-500/20 to-orange-600/20 border-orange-500/30'
      }
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section className="process-steps py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="section-header text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            5 Simple Steps to Transform Your Wellness
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our proven process makes building healthy habits effortless and enjoyable
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const colors = getColorClasses(step.color);
            const isReverse = index % 2 === 1;
            
            return (
              <div key={step.id} className="mb-16 last:mb-0">
                <div className={`step-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Step Content */}
                  <div className={`step-content ${isReverse ? 'lg:col-start-2' : ''}`}>
                    <div className="step-text">
                      <div className="step-header flex items-center gap-4 mb-6">
                        <div className={`step-icon w-16 h-16 bg-gradient-to-r ${colors.icon} rounded-2xl flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="step-badge bg-white/10 border border-white/20 rounded-full px-4 py-2">
                          <span className="text-white text-sm font-medium">Step {step.id}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Step Visual */}
                  <div className={`step-visual flex justify-center ${isReverse ? 'lg:col-start-1' : ''}`}>
                    <div className="step-phone relative">
                      <div className="phone-screen w-80 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 shadow-2xl">
                        <div className={`screen-content h-full bg-gradient-to-b ${colors.screen} border rounded-2xl p-6 flex flex-col justify-center items-center text-center`}>
                          <div className="screen-icon mb-6">
                            <IconComponent className="w-12 h-12 text-white" />
                          </div>
                          <h4 className="text-white text-xl font-bold mb-4">{step.screenContent.title}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{step.screenContent.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step Arrow */}
                {index < steps.length - 1 && (
                  <div className="step-arrow flex justify-center mt-12">
                    <ArrowDown className="w-8 h-8 text-gray-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

