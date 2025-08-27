import React from 'react';
import HeroSection from '../components/sections/HeroSection.jsx';
import ProblemSection from '../components/sections/ProblemSection.jsx';
import SolutionSection from '../components/sections/SolutionSection.jsx';
// import WhyMyGenSection from '../components/sections/WhyMyGenSection.jsx';
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx';
import CTASection from '../components/sections/CTASection.jsx';

const Home = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      {/* <WhyMyGenSection /> */}
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Home;

