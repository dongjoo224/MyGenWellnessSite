import React from 'react';
import { AlertCircle } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ProblemSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section className="problem-narrative" ref={ref}>
      <div className="container">
        <div className="narrative-content text-center">
          <div className="section-badge-orange inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
            <AlertCircle className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">The Unseen Struggle</span>
          </div>
          
          <h2 className="narrative-title text-4xl md:text-6xl font-black leading-tight mb-8">
            Most wellness journeys of our generation end in{' '}
            <span className="gradient-text-orange">
              silent defeat
            </span>
          </h2>
          
          <p className="narrative-description text-xl text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto">
            Despite countless apps, programs, and good intentions, most people fail quietly, alone, and repeatedly — fueling the greatest financial crisis in personal wellness of our generation
          </p>
          
          <div className="struggle-stats grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="stat-item text-center">
              <div className="stat-number text-5xl md:text-6xl font-black text-orange-400 mb-4">
                {inView ? <CountUp end={70} duration={2} suffix="%" /> : "0%"}
              </div>
              <div className="stat-label text-gray-300 text-lg leading-relaxed">
                of deaths in the US are caused by chronic disease
              </div>
            </div>
            <div className="stat-item2 text-center">
              <div className="stat-number text-5xl md:text-6xl font-black text-orange-400 mb-4">
                {inView ? <CountUp end={5} duration={2} /> : "0"}
              </div>
              <div className="stat-label text-gray-300 text-lg leading-relaxed">
                trillion dollars a year are spent on wellness globally
              </div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number text-5xl md:text-6xl font-black text-orange-400 mb-4">
                {inView ? <CountUp end={97} duration={2} suffix="%" /> : "0%"}
              </div>
              <div className="stat-label text-gray-300 text-lg leading-relaxed">
                fail in trying to living a healthy lifestyle
              </div>
            </div>
          </div>
          
          <div className="struggle-visual">
            <div className="broken-cycle-minimal flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
              <div className="cycle-node flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <span className="text-white font-semibold">Set Goals</span>
              </div>
              
              <div className="cycle-connection hidden md:block">
                <div className="w-16 h-px bg-gradient-to-r from-orange-400 to-transparent"></div>
              </div>
              
              <div className="cycle-node flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📉</span>
                </div>
                <span className="text-white font-semibold">Lose Motivation</span>
              </div>
              
              <div className="cycle-connection hidden md:block">
                <div className="w-16 h-px bg-gradient-to-r from-orange-400 to-transparent"></div>
              </div>
              
              <div className="cycle-node flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">❌</span>
                </div>
                <span className="text-white font-semibold">Give Up</span>
              </div>
              
              <div className="cycle-connection hidden md:block">
                <div className="w-16 h-px bg-gradient-to-r from-orange-400 to-transparent"></div>
              </div>
              
              <div className="cycle-node flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <span className="text-white font-semibold">Try Again</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

