import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Zap, Wand2, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-900/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/20">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Video Generation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Create Stunning
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Videos in Minutes
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Transform your ideas into professional videos with our AI-powered platform. 
            No editing skills required – just describe your vision and watch it come to life.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <motion.button 
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Start Creating</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              className="group bg-transparent text-gray-300 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Wand2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </motion.button>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-md">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mb-3 mx-auto border border-purple-500/20">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-sm text-gray-400">Lightning Fast</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pink-900/30 rounded-xl flex items-center justify-center mb-3 mx-auto border border-pink-500/20">
                <Sparkles className="w-6 h-6 text-pink-400" />
              </div>
              <p className="text-sm text-gray-400">AI-Powered</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-3 mx-auto border border-blue-500/20">
                <Wand2 className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400">No Skills Needed</p>
            </div>
          </div>
        </motion.div>

        {/* Right Video Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl">
            {/* Video Container */}
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
              {/* Placeholder Video - Replace with actual video */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/20">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white/80 text-lg font-medium">Watch VideoGen in Action</p>
                  <p className="text-white/60 text-sm mt-2">See how AI creates stunning videos</p>
                </div>
              </div>
              
              {/* Video overlay effects */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                ● LIVE DEMO
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-xs">Generating video...</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">2.5M+</div>
                <div className="text-gray-400 text-sm">Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5min</div>
                <div className="text-gray-400 text-sm">Avg. Time</div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;