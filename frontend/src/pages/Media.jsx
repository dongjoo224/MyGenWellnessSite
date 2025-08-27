import React, { useState } from 'react';
import { MapPin, Rocket } from 'lucide-react';
// import ProcessSteps from '../sections/ProcessSteps.jsx';
// import BenefitsSection from '../sections/BenefitsSection.jsx';


const Media = () => {
  const [activeTab, setActiveTab] = useState('process');

  return (
    <div className="pt-30 p-20"> {/* <-- added top padding here */}
      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('LinkedIn')}
          className={`px-4 py-2 rounded ${activeTab === 'LinkedIn' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          LinkedIn
        </button>
        <button
          onClick={() => setActiveTab('Instagram')}
          className={`px-4 py-2 rounded ${activeTab === 'Instagram' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Instagram
        </button>
        <button
          onClick={() => setActiveTab('Twitter')}
          className={`px-4 py-2 rounded ${activeTab === 'Twitter' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Twitter
        </button>
      </div>

      {/* Tab content */}
      <div>
        {/* {activeTab === 'LinkedIn' && <ProcessSteps />} */}
        {/* {activeTab === 'Instagram' && <BenefitsSection />} */}
        {activeTab === 'LinkedIn' && (
          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-2">LinkedIn Tab</h2>
            <p>This a window that will show LinkedIn posts.</p>
          </div>
        )}
        {activeTab === 'Instagram' && (
          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-2">Instagram Tab</h2>
            <p>This a window that will show Instagram posts..</p>
          </div>
        )}
        {activeTab === 'Twitter' && (
          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-2">Twitter Tab</h2>
            <p>This a window that will show Twitter(?) posts.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;

