import React from 'react';
import { motion } from 'framer-motion';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Content Analysis",
      description: "Our advanced AI analyzes your documents to understand context, structure, and key concepts automatically.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Voice Cloning & Synthesis",
      description: "Upload a voice sample or record directly, and our AI will clone your voice for narration with natural intonation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Mathematical Animations",
      description: "Powered by Manim, create stunning mathematical visualizations and animations automatically from your content.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Multi-Format Support",
      description: "Upload PDFs, Word documents, PowerPoint presentations, or plain text files - we handle them all.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "orange"
    },
    {
      title: "Professional Video Output",
      description: "Generate high-quality MP4 videos ready for sharing on any platform or in any classroom.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: "red"
    },
    {
      title: "Real-time Progress Tracking",
      description: "Monitor the generation process with detailed progress updates and estimated completion times.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
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
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the cutting-edge capabilities that make Lectomate the ultimate AI-powered lecture generation platform
            </p>
          </motion.div>

          {/* Main Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group perspective-1000 h-64"
              >
                <div className="relative w-full h-full card-flip-container">
                  {/* Front of card - Icon and Title */}
                  <div className="card-flip-front card text-center flex flex-col items-center justify-center">
                    <div className={`w-20 h-20 ${getColorClasses(feature.color)} rounded-full flex items-center justify-center mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  {/* Back of card - Details */}
                  <div className="card-flip-back card text-center flex flex-col items-center justify-center p-6">
                    <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-full flex items-center justify-center mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4K</div>
                <div className="text-gray-800 font-semibold">Video Resolution</div>
                <div className="text-gray-600 text-sm">Ultra HD quality output</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">48kHz</div>
                <div className="text-gray-800 font-semibold">Audio Quality</div>
                <div className="text-gray-600 text-sm">Professional audio sampling</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-800 font-semibold">Languages</div>
                <div className="text-gray-600 text-sm">Multilingual support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-gray-800 font-semibold">Uptime</div>
                <div className="text-gray-600 text-sm">Reliable cloud processing</div>
              </div>
            </div>
          </motion.div>

          {/* Supported Formats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Supported Input Formats</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xs">PDF</span>
                  </div>
                  <span className="text-gray-700">PDF Documents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">DOC</span>
                  </div>
                  <span className="text-gray-700">Microsoft Word</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-xs">PPT</span>
                  </div>
                  <span className="text-gray-700">PowerPoint Presentations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-xs">TXT</span>
                  </div>
                  <span className="text-gray-700">Plain Text Files</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xs">MIC</span>
                  </div>
                  <span className="text-gray-700">Live Microphone Recording</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Audio Input Options</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xs">MP3</span>
                  </div>
                  <span className="text-gray-700">MP3 Audio Files</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">WAV</span>
                  </div>
                  <span className="text-gray-700">WAV Audio Files</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xs">M4A</span>
                  </div>
                  <span className="text-gray-700">M4A Audio Files</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xs">REC</span>
                  </div>
                  <span className="text-gray-700">Direct Recording (Browser)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-xs">OGG</span>
                  </div>
                  <span className="text-gray-700">OGG Audio Files</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="card text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Premium Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Branding</h3>
                <p className="text-gray-600">Add your logo, colors, and branding to generated videos</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
                <p className="text-gray-600">Enterprise-grade security and privacy protection</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Priority Processing</h3>
                <p className="text-gray-600">Faster generation times with dedicated resources</p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default FeaturesPage;
