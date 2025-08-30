import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const HeroSection = () => {
  const [currentHabitIndex, setCurrentHabitIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const dailyHabits = [
    'Drinking Water',
    'Intermittent Fasting', 
    'Meditating',
    'Nutritious Meals',
    'Quality Sleep',
    'Walking',
    'Yoga & Stretching'
  ];

  const slides = [
    { src: '/images/drinkingwater.jpg', name: 'Drinking Water' },
    { src: '/images/fasting.jpg', name: 'Intermittent Fasting' },
    { src: '/images/meditation.jpg', name: 'Meditating' },
    { src: '/images/nutritiousmeal.jpg', name: 'Nutritious Meals' },
    { src: '/images/sleep.jpg', name: 'Quality Sleep' },
    { src: '/images/walking.jpg', name: 'Walking' },
    { src: '/images/yoga.jpg', name: 'Yoga & Stretching' }
  ];

  // Auto-rotate habits and slides
  useEffect(() => {
    const habitInterval = setInterval(() => {
      setCurrentHabitIndex((prev) => (prev + 1) % dailyHabits.length);
    }, 2000);

    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => {
      clearInterval(habitInterval);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section className="hero-fullpage-slideshow relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="slideshow-container absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 bg-black/60 z-10"></div>

      {/* Floating Particles */}
      <div className="floating-particles absolute inset-0 z-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content mt-24 relative z-30 text-center">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* <span className="beta-badge inline-block bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 text-cyan-400 text-sm font-medium mb-6">
            📱 Mobile App Beta
          </span> */}
          
          <h1 className="hero-title text-5xl md:text-7xl font-black leading-tight mb-6">
            Democratizing<br />
            <span className="gradient-text-turquoise">
              Wellness for ALL
            </span>
            <br />
            using science and AI
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
            Transform your health with personalized, AI-powered wellness coaching.
            Build sustainable habits through tiny daily activities backed by science.
          </p>
          
          <div className="current-habit mb-8">
            <span className="habit-label text-gray-400 text-lg">Habits you'll master: </span>
            <span className="habit-name text-cyan-400 text-lg font-semibold">
              {dailyHabits[currentHabitIndex]}
            </span>
          </div>
          
          <div className="hero-actions flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* <Button className="btn-primary-hero bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Join the Beta App by Invite
            </Button> */}
            <Button className="btn-secondary-hero bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Demo ▶
            </Button>
          </div>
          
          {/* <p className="trust-indicator text-gray-400 text-sm">
            Trusted by industry leaders and experts.
          </p> */}
        </div>
      </div>

      {/* Slideshow Navigation */}
      <div className="slideshow-navigation absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="habit-dots flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`habit-dot w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlideIndex 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setCurrentSlideIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Gradient Transition */}
      <div className="gradient-transition absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
    </section>
  );
};

export default HeroSection;

