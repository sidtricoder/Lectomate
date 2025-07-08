import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Content",
      description: "Start by uploading your document (PDF, Word, PowerPoint, or text file) and either upload an audio file or record your voice directly through your browser.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      color: "blue"
    },
    {
      number: "02",
      title: "AI Analysis & Processing",
      description: "Our advanced AI analyzes your document structure, extracts key concepts, and processes your voice sample to understand speech patterns and intonation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "purple"
    },
    {
      number: "03",
      title: "Script Generation",
      description: "Based on your content, our AI generates an engaging lecture script that flows naturally and includes explanations, examples, and transitions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "green"
    },
    {
      number: "04",
      title: "Animation Creation",
      description: "Using Manim, we create stunning mathematical visualizations, diagrams, and animations that bring your content to life with smooth transitions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10M7 4l-.268 13.416a1 1 0 00.998 1.084h8.54a1 1 0 00.998-1.084L17 4M7 4h10m-8 4v8m4-8v8" />
        </svg>
      ),
      color: "orange"
    },
    {
      number: "05",
      title: "Voice Synthesis",
      description: "Our AI clones your voice and generates natural-sounding narration that matches the lecture script with proper timing and emphasis.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      color: "red"
    },
    {
      number: "06",
      title: "Video Compilation",
      description: "Finally, we compile everything into a professional-quality MP4 video with synchronized audio, animations, and perfect timing ready for sharing.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      green: "bg-green-100 text-green-600 border-green-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      red: "bg-red-100 text-red-600 border-red-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600 border-gray-200";
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your documents into engaging lectures in just 6 simple steps using cutting-edge AI technology
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-16 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              >
                <div className="flex-1">
                  <div className="card">
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 ${getColorClasses(step.color)} rounded-full flex items-center justify-center mr-4 border-2`}>
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm font-bold text-gray-500">STEP {step.number}</span>
                        <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className={`w-32 h-32 ${getColorClasses(step.color)} rounded-full flex items-center justify-center border-4 shadow-lg`}>
                    <span className="text-4xl font-bold">{step.number}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Behind the Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="card mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">The Technology Behind the Magic</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">GPT-4 Integration</h3>
                <p className="text-gray-600">Advanced language model for content understanding and script generation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">E2 F5-TTS</h3>
                <p className="text-gray-600">State-of-the-art text-to-speech with voice cloning capabilities</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10M7 4l-.268 13.416a1 1 0 00.998 1.084h8.54a1 1 0 00.998-1.084L17 4M7 4h10m-8 4v8m4-8v8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Manim Engine</h3>
                <p className="text-gray-600">Mathematical animation library for creating stunning visualizations</p>
              </div>
            </div>
          </motion.div>

          {/* Processing Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Processing Times</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Short document (1-5 pages)</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">2-5 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Medium document (6-15 pages)</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">5-12 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Long document (16+ pages)</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">12-25 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Complex mathematical content</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">+30% time</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What You Get</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Professional MP4 video file</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Generated lecture script</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Synchronized animations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cloned voice narration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">4K video resolution</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="card text-center bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-100"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your first document into an engaging lecture in just a few minutes
            </p>
            <Link
              to="/upload"
              className="btn-primary inline-block text-lg px-8 py-4"
            >
              Create Your First Lecture
            </Link>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default HowItWorksPage;
