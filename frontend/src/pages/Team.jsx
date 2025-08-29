import React from 'react';
import { Users, Linkedin, Heart, Code, Stethoscope } from 'lucide-react';

const Team = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="hero-team min-h-[80vh] flex items-center relative pt-20 bg-gradient-radial from-indigo-500/5 to-black">
        <div className="container mx-auto px-4">
          <div className="hero-content-centered text-center max-w-4xl mx-auto">
            <div className="beta-badge-minimal inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-indigo-400" />
              <span className="text-indigo-400 text-sm font-medium">Meet the MyGen Team</span>
            </div>
            <h1 className="hero-title-centered text-5xl md:text-6xl font-black leading-tight mb-6">
              The Minds Behind <span className="gradient-text-indigo bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">MyGen Wellness</span>
            </h1>
            <p className="hero-description-centered text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              Meet the visionary leaders, dedicated professionals, and vibrant community that make MyGen Wellness possible. Together, we're revolutionizing how the world approaches health and wellness.
            </p>
            <div className="scroll-indicator-centered flex flex-col items-center gap-2 mt-12 animate-bounce">
              <div className="scroll-line w-px h-8 bg-gradient-to-b from-indigo-400 to-transparent"></div>
              <div className="scroll-dot w-2 h-2 bg-indigo-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Our <span className="gradient-text-gold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              The visionary co-founders who are driving the MyGen mission forward, combining decades of experience in technology, healthcare, and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Charles Kwon */}
            <div className="team-member-card bg-gray-900 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-6">
                <img 
                  src="/src/assets/images/Charles_Kwon_Headshot.jpg" 
                  alt="Charles Kwon" 
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-500/20"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Charles Kwon</h3>
              <p className="text-indigo-400 font-semibold mb-4">Co-Founder & CEO</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Charles brings a unique blend of entrepreneurial vision and deep technical expertise to MyGen Wellness. With a passion for leveraging technology to solve real-world health challenges, he leads the strategic direction and product innovation that makes MyGen's personalized wellness approach possible.
              </p>
              <a 
                href="https://www.linkedin.com/in/charles-kwon-86035/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Robert L. Grossman */}
            <div className="team-member-card bg-gray-900 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-6">
                <img 
                  src="/src/assets/images/Robert_Headshot.jpg" 
                  alt="Robert L. Grossman" 
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-500/20"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Robert L. Grossman</h3>
              <p className="text-indigo-400 font-semibold mb-4">Co-Founder & CTO</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Robert is a renowned expert in data science and AI applications in healthcare. His extensive background in machine learning and data analytics drives MyGen's sophisticated AI-powered personalization engine, ensuring that every user receives scientifically-backed, tailored wellness recommendations.
              </p>
              <a 
                href="https://www.linkedin.com/in/robertgrossman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Team Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Our <span className="gradient-text-cyan bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Behind our leadership is a world-class team of specialists who bring deep expertise in artificial intelligence, machine learning, and healthcare to make MyGen's vision a reality.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="team-category-card bg-gray-900 rounded-lg p-8 text-center shadow-lg">
              <Code className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">AI Engineers</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team of AI engineers develops cutting-edge algorithms that power MyGen's personalized recommendations, ensuring each user receives tailored wellness guidance based on their unique needs and preferences.
              </p>
            </div>
            
            <div className="team-category-card bg-gray-900 rounded-lg p-8 text-center shadow-lg">
              <Users className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Machine Learning Scientists</h3>
              <p className="text-gray-300 leading-relaxed">
                Our machine learning scientists continuously refine and improve MyGen's predictive models, analyzing patterns in user behavior and outcomes to enhance the effectiveness of our wellness interventions.
              </p>
            </div>
            
            <div className="team-category-card bg-gray-900 rounded-lg p-8 text-center shadow-lg">
              <Stethoscope className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Healthcare Professionals</h3>
              <p className="text-gray-300 leading-relaxed">
                Our healthcare professionals ensure that all MyGen recommendations are grounded in evidence-based medicine and best practices, providing the scientific rigor that makes our platform trustworthy and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Team Section */}
      <section className="py-24 bg-gradient-to-t from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            <span className="gradient-text-pink bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">You</span> Are Part of Our Team
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            At MyGen, we believe that our community members are not just users—they are integral members of our team. Through Guild 2.0, every community member becomes an owner, contributor, and vital part of the MyGen ecosystem.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="community-highlight bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-lg p-8 mb-8">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">The MyGen Community</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Our community members are the heart and soul of MyGen Wellness. They provide invaluable feedback, share their wellness journeys, support fellow members, and help shape the future of our platform. As owners in Guild 2.0, they have a direct stake in MyGen's success and contribute to the collective knowledge that makes our AI smarter and more effective.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="community-role bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 text-pink-300">Community Contributors</h4>
                <p className="text-gray-300">
                  Every member contributes valuable data and insights that help improve MyGen's recommendations for everyone in the community.
                </p>
              </div>
              <div className="community-role bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 text-purple-300">Wellness Advocates</h4>
                <p className="text-gray-300">
                  Community members serve as wellness advocates, sharing their success stories and supporting others on their health journeys.
                </p>
              </div>
            </div>
          </div>
          
          {/* <div className="mt-12">
            <button className="btn-primary-large bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              <span>Join Our Team</span>
              <span className="ml-2">→</span>
            </button>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default Team;
