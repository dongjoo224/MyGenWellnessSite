import React from 'react';
import { User, Settings, Activity, Bell, Calendar, Trophy } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-cyan-500">
              <img 
                src={user?.picture || 'https://placehold.co/80x80/60A5FA/ffffff?text=User'} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, {user?.given_name || user?.name || 'User'}!
              </h1>
              <p className="text-gray-400 text-lg">
                Your personalized wellness dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
  <div className="grid md:grid-cols-5 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-semibold">Daily Streak</h3>
            </div>
            <p className="text-3xl font-bold text-cyan-400">7 Days</p>
            <p className="text-gray-400 text-sm">Keep it up!</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-lime-500/10 border border-green-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-semibold">Habits</h3>
            </div>
            <p className="text-3xl font-bold text-green-400">5/5</p>
            <p className="text-gray-400 text-sm">Today's goals</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl font-semibold">Reminders</h3>
            </div>
            <p className="text-3xl font-bold text-purple-400">3</p>
            <p className="text-gray-400 text-sm">Active</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-orange-400" />
              <h3 className="text-xl font-semibold">This Week</h3>
            </div>
            <p className="text-3xl font-bold text-orange-400">85%</p>
            <p className="text-gray-400 text-sm">Completion</p>
          </div>

          {/* Points Feature Card */}
          <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <h3 className="text-xl font-semibold">Points</h3>
            </div>
            <div className="mb-2">
              <span className="text-lg text-yellow-400 font-bold">Points Today:</span>
              <span className="text-2xl font-bold text-yellow-300 ml-2">12</span>
            </div>
            <div className="mb-2">
              <span className="text-lg text-yellow-400 font-bold">Total Points:</span>
              <span className="text-2xl font-bold text-yellow-300 ml-2">245</span>
            </div>
            <div>
              <span className="text-lg text-orange-400 font-bold">Backed by Shirox:</span>
              <span className="text-2xl font-bold text-orange-300 ml-2">$29</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">Your points are backed by Shirox and can be redeemed for rewards.</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Today's Habits */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-cyan-400" />
                Today's Habits
              </h2>
              <div className="space-y-4">
                {[
                  { name: 'Drink Water', completed: true, time: '8:00 AM' },
                  { name: 'Morning Meditation', completed: true, time: '8:30 AM' },
                  { name: 'Healthy Breakfast', completed: true, time: '9:00 AM' },
                  { name: 'Walk/Exercise', completed: false, time: '6:00 PM' },
                  { name: 'Evening Reflection', completed: false, time: '9:00 PM' }
                ].map((habit, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl ${
                      habit.completed 
                        ? 'bg-green-500/10 border border-green-500/20' 
                        : 'bg-gray-800/50 border border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        habit.completed ? 'bg-green-500' : 'bg-gray-600'
                      }`}>
                        {habit.completed && <span className="text-white text-sm">✓</span>}
                      </div>
                      <span className={habit.completed ? 'text-green-400' : 'text-white'}>
                        {habit.name}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">{habit.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile & Settings */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <User className="w-5 h-5 text-cyan-400" />
                Profile
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p className="text-white">{user?.name || 'Loading...'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">{user?.email || 'Loading...'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Member since</p>
                  <p className="text-white">September 2025</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Settings className="w-5 h-5 text-cyan-400" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <span className="text-white">Update Habits</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <span className="text-white">View Progress</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <span className="text-white">Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-4">
        </p>
        <p className="text-gray-400 text-sm mt-4">
        </p>
        <p className="text-gray-400 text-sm mt-4">
        </p>


        {/* Video Section
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-8">
            <span className="gradient-text-cyan bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Exclusive</span> Look Into How Our AI Wellness Coach Works
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
            Discover how MyGen's customized user pathway creates a transformative wellness experience for you. 
          </p>
        </div>
      </section> */}

        {/* Premium Features Notice */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-purple-400">🔒 Members-Only Dashboard</h3>
          <p className="text-gray-300 mb-6">
            This exclusive dashboard is only available to authenticated members. 
            Track your progress, manage habits, and access personalized insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">Personal Analytics</span>
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">Habit Tracking</span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Progress Reports</span>
            <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">Custom Reminders</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
