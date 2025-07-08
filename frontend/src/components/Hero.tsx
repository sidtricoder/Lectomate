import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Video, Brain, Mic } from 'lucide-react';

const Hero: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Script Generation',
      description: 'Convert any document into engaging lecture content'
    },
    {
      icon: Mic,
      title: 'Voice Cloning',
      description: 'Upload audio or record directly for personalized narration'
    },
    {
      icon: Video,
      title: 'Manim Animations',
      description: 'Auto-generate mathematical visualizations'
    },
    {
      icon: Zap,
      title: 'One-Click Export',
      description: 'Get your complete lecture video instantly'
    }
  ];

  return (
    <section className="text-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Content Into
          <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Engaging Lectures
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Upload a PDF or PowerPoint presentation along with a voice sample (upload a file or record directly), 
          and watch as AI creates a professional lecture video with your cloned voice, animations, and engaging visuals.
        </p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {features.map((feature, index) => {
            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500', 
              'from-green-500 to-emerald-500',
              'from-orange-500 to-red-500'
            ];
            
            return (
              <motion.div
                key={index}
                className="group perspective-1000 h-48"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="relative w-full h-full card-flip-container">
                  {/* Front of card - Icon and Title */}
                  <div className={`card-flip-front bg-gradient-to-br ${gradients[index]} text-white text-center flex flex-col items-center justify-center rounded-xl shadow-lg`}>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  {/* Back of card - Details */}
                  <div className={`card-flip-back bg-gradient-to-br ${gradients[index]} text-white text-center flex flex-col items-center justify-center p-4 rounded-xl shadow-lg`}>
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm opacity-90">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
