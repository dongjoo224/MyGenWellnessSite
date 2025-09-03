import React from 'react';
import { Users, Gem, Sparkles } from 'lucide-react';

const Community = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="hero-community min-h-[80vh] flex items-center relative pt-20 bg-gradient-radial from-blue-500/5 to-black">
        <div className="container mx-auto px-4">
          <div className="hero-content-centered text-center max-w-4xl mx-auto">
            <div className="beta-badge-minimal inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">The MyGen Collective</span>
            </div>
            <h1 className="hero-title-centered text-5xl md:text-6xl font-black leading-tight mb-6">
              Building Wellness, <span className="gradient-text-blue-green bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Together</span>
            </h1>
            <p className="hero-description-centered text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              MyGen is more than an app; it's a vibrant community where like-minded individuals unite to share their wellness journeys, knowledge, and technology. Welcome to Guild 2.0.
            </p>
            <div className="scroll-indicator-centered flex flex-col items-center gap-2 mt-12 animate-bounce">
              <div className="scroll-line w-px h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
              <div className="scroll-dot w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Guild 2.0 Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              What is <span className="gradient-text-teal bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Guild 2.0</span>?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Guild 2.0 represents a revolutionary model where community members are not just participants, but true owners. It's about collective growth, shared success, and leveraging cutting-edge technology for the benefit of all.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-4">Community-Driven Ownership</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                In the MyGen Guild 2.0 model, every member has a stake. This shared ownership fosters a deeper sense of belonging, commitment, and mutual support. We believe the best knowledge and technology emerge when a collective works together.
              </p>
              <h3 className="text-3xl font-bold mb-4">AI-Powered Knowledge Platform</h3>
              <p className="text-gray-300 leading-relaxed">
                Our technology is built on an advanced AI knowledge platform. This platform empowers the community by providing personalized insights, optimizing wellness protocols, and facilitating the sharing of valuable information among members.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Placeholder for a community diagram */}
              {/* <div className="w-full max-w-md h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-center p-4"> */}
                <img src="/images/Community_image.png" alt="Wellness Spending Bar Chart" className="w-full max-w-md rounded-lg shadow-lg" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Shares & Rewards Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Empowering Members with <span className="gradient-text-purple-pink bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Crypto Shares & Rewards</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            MyGen integrates innovative cryptographic elements to further enhance community ownership and engagement. Your wellness journey is now directly tied to tangible rewards and shared value.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Gem className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">MyGen Points & Rewards</h3>
              <p className="text-gray-300">Earn MyGen points for consistently engaging with your daily wellness protocols. These points are your reward for building healthy habits and contributing to your well-being.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center">
              <Sparkles className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Redeem for Crypto Shares</h3>
              <p className="text-gray-300">Your MyGen points can be redeemed for crypto shares, providing you with a direct stake in the MyGen ecosystem. These shares are 


backed by "shirox", a testament to their real-world value and stability.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center md:col-span-2">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Gift & Share Ownership</h3>
              <p className="text-gray-300">The Guild 2.0 model encourages true community. Members can even gift their crypto shares to fellow community members, fostering a powerful sense of mutual support, shared success, and collective ownership within the MyGen ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Guild CTA */}
      <section className="py-24 bg-gradient-to-t from-gray-900 to-black text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Join the <span className="gradient-text-gold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">MyGen Guild 2.0</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Become part of a revolutionary wellness movement. Experience the power of collective ownership, cutting-edge AI, and a supportive community dedicated to transforming lives.
          </p>
          {/* <button className="btn-primary-large bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            <span>Register for Our Waitlist</span>
            <span className="ml-2">→</span>
          </button> */}
        </div>
      </section>
    </main>
  );
};

export default Community;

