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
  Sparkles
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: 'Smart Video Generation',
      description: 'AI analyzes your content and creates professional videos with perfect pacing and transitions.',
      color: 'indigo'
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Apply your brand colors, fonts, and style guidelines automatically to every video.',
      color: 'purple'
    },
    {
      icon: Music,
      title: 'AI Music & Sound',
      description: 'Automatically select and sync background music that matches your video\'s mood and pace.',
      color: 'pink'
    },
    {
      icon: Type,
      title: 'Dynamic Text Effects',
      description: 'Animated titles, captions, and text overlays that enhance your message.',
      color: 'blue'
    },
    {
      icon: Layers,
      title: 'Multi-Layer Editing',
      description: 'Advanced compositing with multiple video layers, effects, and transitions.',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Real-time Preview',
      description: 'See your changes instantly with our lightning-fast preview engine.',
      color: 'yellow'
    },
    {
      icon: Download,
      title: 'Export Anywhere',
      description: 'Download in any format or resolution, optimized for any platform.',
      color: 'red'
    },
    {
      icon: Share2,
      title: 'One-Click Sharing',
      description: 'Share directly to social media platforms with optimized formats and sizes.',
      color: 'teal'
    }
  ];

  const colorClasses = {
    indigo: 'bg-indigo-100 text-indigo-600',
    purple: 'bg-purple-100 text-purple-600',
    pink: 'bg-pink-100 text-pink-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    red: 'bg-red-100 text-red-600',
    teal: 'bg-teal-100 text-teal-600'
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Create
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Professional Videos
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-12 h-12 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
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