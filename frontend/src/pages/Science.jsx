import React from 'react';
import { FlaskConical, Brain, Heart, Leaf, Sun } from 'lucide-react';

const Science = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="hero-science min-h-[80vh] flex items-center relative pt-20 bg-gradient-radial from-purple-500/5 to-black">
        <div className="container mx-auto px-4">
          <div className="hero-content-centered text-center max-w-4xl mx-auto">
            <div className="beta-badge-minimal inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <FlaskConical className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">The MyGen Science</span>
            </div>
            <h1 className="hero-title-centered text-5xl md:text-6xl font-black leading-tight mb-6">
              Unlocking Your <span className="gradient-text-purple bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Biological Potential</span>
            </h1>
            <p className="hero-description-centered text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              At MyGen, we don't just guess; we build on a foundation of robust scientific research to help you thrive. Discover the powerful mechanisms behind our 5 Do's and their profound impact on your well-being.
            </p>
            <div className="scroll-indicator-centered flex flex-col items-center gap-2 mt-12 animate-bounce">
              <div className="scroll-line w-px h-8 bg-gradient-to-b from-purple-400 to-transparent"></div>
              <div className="scroll-dot w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              The <span className="gradient-text-red bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Wellness Gap</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Despite increasing awareness, chronic diseases are on the rise, and a truly healthy lifestyle remains elusive for many. MyGen aims to bridge this gap with actionable, science-backed habits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center">
              <img src="/images/chronic_disease_bar_chart.png" alt="Chronic Disease Bar Chart" className="w-full max-w-md rounded-lg shadow-lg" />
              <p className="text-sm text-gray-400 mt-4 text-center">Chronic Disease = Premature deaths. 70% of deaths in the US are caused by chronic disease, 90% of healthcare dollars in US spent on chronic disease, 60% of US adults have at least one chronic disease, 40% of US adults have 2 or more chronic diseases.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/chronic_disease_accelerating_bar_chart.png" alt="Chronic Disease Accelerating Bar Chart" className="w-full max-w-md rounded-lg shadow-lg" />
              <p className="text-sm text-gray-400 mt-4 text-center">Chronic Disease Accelerating. Old chart 157M in 2020, new number 176M – 156 adults and 20M children.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/wellness_spending_bar_chart.png" alt="Wellness Spending Bar Chart" className="w-full max-w-md rounded-lg shadow-lg" />
              <p className="text-sm text-gray-400 mt-4 text-center">Global Wellness Spending $5.5 Trillion/Year. Note: Global Health Care spending is $10 Trillion of which 75-90% is spent on chronic disease.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/healthy_lifestyle_pie_chart.png" alt="Healthy Lifestyle Pie Chart" className="w-full max-w-md rounded-lg shadow-lg" />
              <p className="text-sm text-gray-400 mt-4 text-center">Poor Report Card, only 2.7% Live Healthy Lifestyle. Note: Healthy Lifestyle as measured by four variables – not smoking, not obese, good nutrition and moderate exercise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Do's and Feel-Good Hormones */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            The Power of the <span className="gradient-text-green bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">5 Do's</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            MyGen's core philosophy revolves around the 


5 Do's, simple yet profound actions that directly stimulate your body's natural production of 'feel-good' hormones. Every time you engage in these habits, you get a powerful chunk of these vital neurochemicals.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Dopamine</h3>
              <p className="text-gray-300">The reward chemical. Linked to pleasure, motivation, and learning. MyGen habits provide consistent, healthy dopamine boosts.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Heart className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Oxytocin</h3>
              <p className="text-gray-300">The love hormone. Fosters bonding, trust, and social connection. Our community-driven approach enhances oxytocin release.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Leaf className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Serotonin</h3>
              <p className="text-gray-300">The mood stabilizer. Contributes to feelings of well-being and happiness. Regular healthy habits support serotonin balance.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Sun className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Endorphins</h3>
              <p className="text-gray-300">The pain-relievers. Produced during physical activity, creating feelings of euphoria and reducing stress.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center">
              <FlaskConical className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Endocannabinoids</h3>
              <p className="text-gray-300">The bliss molecules. Contribute to feelings of calm, contentment, and overall balance, often stimulated by mindful practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact: Short-term, Mid-term, Long-term */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            A Journey of Transformation: <span className="gradient-text-blue bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Immediate to Lasting Change</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            The MyGen approach delivers benefits across all time horizons, from instant mood boosts to profound, life-altering transformations.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">Short-Term Effects</h3>
              <p className="text-gray-300 leading-relaxed">
                Experience an immediate surge of positive feelings and energy. Our 5 Do\'s instantly trigger the release of feel-good hormones, leading to improved mood, reduced stress, and enhanced focus within minutes of practice.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4 text-cyan-300">Mid-Term Effects</h3>
              <p className="text-gray-300 leading-relaxed">
                Within weeks to months, you\'ll notice a significant, tangible difference in your mental and physical well-being. This includes sustained energy levels, better sleep quality, clearer thinking, and a noticeable reduction in everyday aches and pains.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Long-Term Effects</h3>
              <p className="text-gray-300 leading-relaxed">
                Consistent application of MyGen habits leads to profound, lasting changes. This includes reversing biological age, significantly reducing the risk of chronic diseases, increasing overall longevity, and cultivating a deep sense of sustained happiness and vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MyGen Research & Video Insights */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            MyGen Research: <span className="gradient-text-green bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Insights & Action</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Dive deeper into the science behind MyGen Wellness with our exclusive podcast and see the principles in action through our insightful video exploring the profound impact of tiny wellness activities, the concept of a wellness digital twin, and groundbreaking research on racket sports as a longevity gold standard..
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Video Section */}
            <div className="bg-gray-900 rounded-lg p-8 shadow-lg flex flex-col">
              <p className="italic text-base text-orange-300 mb-2">If you have 7 minutes, start with this video!</p>
              <h3 className="text-2xl font-bold mb-4">See MyGen in Action</h3>
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-800 w-full mb-4">
                <video 
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                >
                  <source src="/audios/Racket_Sports_Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-sm text-gray-400 text-left flex-grow">
                Discover how MyGen transforms wellness through science-backed micro-habits. This video provides a visual overview of our approach, demonstrating the simplicity and effectiveness of integrating tiny wellness activities into your daily life for long-term health benefits.
              </p>
            </div>

            {/* Podcast Section */}
            <div className="bg-gray-900 rounded-lg p-8 shadow-lg flex flex-col">
              <p className="italic text-base text-orange-300 mb-2">If you have 30 minutes, listen to this podcast!</p>
              <h3 className="text-2xl font-bold mb-4">Your Digital Twin: Hacking Longevity with Racket Sports and Precision Wellness</h3>
              <audio controls className="w-full mb-4">
                <source src="/audios/Racket_Sports_Podcast.m4a" type="audio/mp4" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-gray-400 text-center flex-grow">
                This podcast presents a framework for generating synthetic wellness and aging data, highlighting how lifestyle factors—especially racket sports like tennis and pickleball—extend longevity. It integrates “Tiny Wellness Activities” and “Do Less” risk behaviors with biomarkers of aging, social connection, and purpose, drawing on Blue Zones research and longitudinal studies to enable precision longevity planning and evidence-based public health guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Science of Habit Building */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            The Art & Science of <span className="gradient-text-orange bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Effortless Habit Building</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            MyGen leverages cutting-edge behavioral science to make healthy habits stick. We understand that true change comes from making desired actions incredibly easy, small, and seamlessly integrated into your existing daily routines.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-4">Make it Easy & Small</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The biggest barrier to habit formation is often perceived difficulty. MyGen breaks down complex wellness goals into micro-activities that are so small and easy, you can't say no. This reduces friction and builds momentum.
              </p>
              <h3 className="text-3xl font-bold mb-4">Anchor to Existing Routines</h3>
              <p className="text-gray-300 leading-relaxed">
                We utilize the power of 


habit stacking, anchoring new desired behaviors to habits you already perform daily. This creates natural triggers and makes the new habit feel like a seamless extension of your routine, rather than an added chore.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/images/Habit_stacking.png" alt="Wellness Spending Bar Chart" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-8">
            See MyGen in <span className="gradient-text-cyan bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Action</span>
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 mx-auto max-w-3xl">
            <video 
              className="w-full h-auto"
              controls
              preload="metadata"
            >
              <source src="/audios/MyGen_Science_Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Discover how MyGen transforms wellness through science-backed micro-habits
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 bg-gradient-to-t from-gray-900 to-black text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Your <span className="gradient-text-gold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Personalized Scientific Journey</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            MyGen is more than an app; it's your personal guide, rooted in the latest scientific understanding of human biology and behavior. We empower you to harness your body's innate capabilities, build lasting habits, and unlock a future of vibrant health and well-being.
          </p>
          {/* <button className="btn-primary-large bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            <span>Register for Our Waitlist</span>
            <span className="ml-2">→</span>
          </button> */}
        </div>
      </section>
    </main>
  );
};

export default Science;

