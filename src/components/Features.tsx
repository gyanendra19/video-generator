import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Palette, 
  Music, 
  Type, 
  Download, 
  Share2,
  Layers,
  Clock,
  Sparkles,
  Zap,
  Brain,
  Wand2
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Script Generation',
      description: 'Generate compelling video scripts from just a topic or brief description using advanced AI.',
      color: 'purple'
    },
    {
      icon: Video,
      title: 'Smart Scene Creation',
      description: 'AI automatically creates scenes, transitions, and visual compositions for professional results.',
      color: 'pink'
    },
    {
      icon: Palette,
      title: 'Dynamic Styling',
      description: 'Apply brand colors, fonts, and visual themes automatically across your entire video.',
      color: 'blue'
    },
    {
      icon: Music,
      title: 'AI Audio Sync',
      description: 'Intelligent music selection and audio synchronization that matches your video\'s mood.',
      color: 'green'
    },
    {
      icon: Type,
      title: 'Animated Typography',
      description: 'Beautiful text animations, captions, and titles that enhance your message.',
      color: 'yellow'
    },
    {
      icon: Layers,
      title: 'Multi-Layer Editing',
      description: 'Advanced compositing with multiple video layers, effects, and professional transitions.',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Real-time Preview',
      description: 'See your changes instantly with our lightning-fast preview and rendering engine.',
      color: 'indigo'
    },
    {
      icon: Share2,
      title: 'One-Click Export',
      description: 'Export and share directly to social platforms with optimized formats and sizes.',
      color: 'teal'
    }
  ];

  const colorClasses = {
    purple: 'bg-purple-900/30 text-purple-400 border-purple-500/20',
    pink: 'bg-pink-900/30 text-pink-400 border-pink-500/20',
    blue: 'bg-blue-900/30 text-blue-400 border-blue-500/20',
    green: 'bg-green-900/30 text-green-400 border-green-500/20',
    yellow: 'bg-yellow-900/30 text-yellow-400 border-yellow-500/20',
    red: 'bg-red-900/30 text-red-400 border-red-500/20',
    indigo: 'bg-indigo-900/30 text-indigo-400 border-indigo-500/20',
    teal: 'bg-teal-900/30 text-teal-400 border-teal-500/20'
  };

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-900/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Create
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Videos
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools makes video creation effortless, 
            whether you're a beginner or a professional content creator.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`w-12 h-12 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border`}>
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;