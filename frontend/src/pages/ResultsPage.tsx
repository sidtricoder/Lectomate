import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultsSection } from '../components';

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoUrl, scriptPreview } = location.state || {};

  React.useEffect(() => {
    if (!videoUrl) {
      navigate('/upload');
    }
  }, [videoUrl, navigate]);

  const handleReset = () => {
    navigate('/upload');
  };

  const handleCreateAnother = () => {
    navigate('/upload');
  };

  if (!videoUrl) {
    return null;
  }

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
              Your Lecture is Ready! 🎉
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your AI-powered lecture video has been successfully generated
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ResultsSection 
              videoUrl={videoUrl}
              scriptPreview={scriptPreview}
              onReset={handleReset}
            />
          </motion.div>

          {/* Progress indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                  ✓
                </div>
                <span className="ml-3 text-green-600 font-semibold">Upload Files</span>
              </div>
              
              <div className="w-16 h-1 bg-green-600 rounded"></div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                  ✓
                </div>
                <span className="ml-3 text-green-600 font-semibold">Processing</span>
              </div>
              
              <div className="w-16 h-1 bg-green-600 rounded"></div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                  ✓
                </div>
                <span className="ml-3 text-green-600 font-semibold">Results</span>
              </div>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12 space-x-4"
          >
            <button
              onClick={handleCreateAnother}
              className="btn-primary"
            >
              Create Another Lecture
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary"
            >
              Back to Home
            </button>
          </motion.div>

          {/* Success features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-gray-600">Professional-grade video with smooth animations</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10M7 4l-.268 13.416a1 1 0 00.998 1.084h8.54a1 1 0 00.998-1.084L17 4M7 4h10m-8 4v8m4-8v8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-600">Content generated with advanced AI technology</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-gray-600">Generated in minutes, not hours</p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default ResultsPage;
