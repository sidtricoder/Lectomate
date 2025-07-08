import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero } from '../components';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/upload"
              className="btn-primary inline-block text-lg px-8 py-4"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <Link to="/upload" className="group perspective-1000 h-48">
              <div className="relative w-full h-full card-flip-container">
                {/* Front of card - Icon and Title */}
                <div className="card-flip-front bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 text-white text-center flex flex-col items-center justify-center rounded-xl shadow-lg">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Upload Content</h3>
                </div>
                {/* Back of card - Details */}
                <div className="card-flip-back bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 text-white text-center flex flex-col items-center justify-center p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Upload Content</h3>
                  <p className="text-blue-100">Upload your documents and audio files to get started</p>
                </div>
              </div>
            </Link>

            <Link to="/how-it-works" className="group perspective-1000 h-48">
              <div className="relative w-full h-full card-flip-container">
                {/* Front of card - Icon and Title */}
                <div className="card-flip-front bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 text-white text-center flex flex-col items-center justify-center rounded-xl shadow-lg">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">AI Processing</h3>
                </div>
                {/* Back of card - Details */}
                <div className="card-flip-back bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 text-white text-center flex flex-col items-center justify-center p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
                  <p className="text-pink-100">Our AI analyzes and generates engaging lecture content</p>
                </div>
              </div>
            </Link>

            <Link to="/features" className="group perspective-1000 h-48">
              <div className="relative w-full h-full card-flip-container">
                {/* Front of card - Icon and Title */}
                <div className="card-flip-front bg-gradient-to-br from-green-400 via-emerald-400 to-teal-500 text-white text-center flex flex-col items-center justify-center rounded-xl shadow-lg">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Download Video</h3>
                </div>
                {/* Back of card - Details */}
                <div className="card-flip-back bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 text-white text-center flex flex-col items-center justify-center p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Download Video</h3>
                  <p className="text-green-100">Get your professional lecture video with animations</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
