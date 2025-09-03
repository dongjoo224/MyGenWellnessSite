import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

const Media = () => {
  const [activeTab, setActiveTab] = useState('LinkedIn'); // Default to LinkedIn

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="hero-media min-h-[60vh] flex items-center relative pt-20 bg-gradient-radial from-blue-500/5 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="beta-badge-minimal inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Share2 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Connect with MyGen</span>
          </div>
          <h1 className="hero-title-centered text-5xl md:text-6xl font-black leading-tight mb-6">
            Join Our <span className="gradient-text-blue bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Social Journey</span>
          </h1>
          <p className="hero-description-centered text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            Follow MyGen Wellness across our social media platforms for the latest insights, updates, and community engagement. Your wellness journey is better together!
          </p>
        </div>
      </section>

      {/* Social Media Tabs Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          {/* Tab Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveTab('LinkedIn')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300
                ${activeTab === 'LinkedIn'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}
              `}
            >
              LinkedIn
            </button>
            <button
              onClick={() => setActiveTab('Instagram')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300
                ${activeTab === 'Instagram'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}
              `}
            >
              Instagram
            </button>
            <button
              onClick={() => setActiveTab('Twitter')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300
                ${activeTab === 'Twitter'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}
              `}
            >
              Twitter
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'LinkedIn' && (
              <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center gradient-text-blue bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">LinkedIn Posts</h2>
                <iframe src='https://widgets.sociablekit.com/linkedin-page-posts/iframe/25594960' frameBorder='0' width='100%' height='800px' className="rounded-lg"></iframe>
              </div>
            )}
            {activeTab === 'Instagram' && (
              <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center gradient-text-pink bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Instagram Feed</h2>
                <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/25594957' frameBorder='0' width='100%' height='800px' className="rounded-lg"></iframe>
              </div>
            )}
            {activeTab === 'Twitter' && (
              <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center gradient-text-cyan bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Twitter Feed</h2>
                <p className="text-gray-300 text-center">Twitter embed goes here. (Note: SociableKIT might require a different embed code for Twitter or a paid plan.)</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Media;

