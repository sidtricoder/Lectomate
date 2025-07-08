import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProcessingStatus } from '../components';

const ProcessingPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { uploadedFiles } = location.state || {};

  const [processingStatus, setProcessingStatus] = React.useState<{
    isProcessing: boolean;
    currentStep: string;
    progress: number;
  }>({
    isProcessing: true,
    currentStep: 'Initializing...',
    progress: 0,
  });

  React.useEffect(() => {
    if (!uploadedFiles) {
      navigate('/upload');
      return;
    }

    const processFiles = async () => {
      setProcessingStatus({
        isProcessing: true,
        currentStep: 'Analyzing document content...',
        progress: 10,
      });

      // Simulate processing steps
      const steps = [
        { step: 'Parsing document content...', progress: 20 },
        { step: 'Generating lecture script...', progress: 40 },
        { step: 'Creating Manim animations...', progress: 60 },
        { step: 'Cloning voice and generating audio...', progress: 80 },
        { step: 'Compiling final video...', progress: 95 },
        { step: 'Processing complete!', progress: 100 },
      ];

      for (const { step, progress } of steps) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setProcessingStatus(prev => ({
          ...prev,
          currentStep: step,
          progress,
        }));
      }

      // Navigate to results page
      setTimeout(() => {
        navigate('/results', {
          state: {
            videoUrl: 'https://example.com/generated-lecture.mp4',
            scriptPreview: 'Welcome to today\'s lecture on quantum mechanics. In this comprehensive overview, we\'ll explore the fundamental principles that govern the behavior of matter and energy at the atomic and subatomic level...',
          }
        });
      }, 1000);
    };

    processFiles();
  }, [uploadedFiles, navigate]);

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
              Processing Your Content
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI is working hard to create your personalized lecture video
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ProcessingStatus 
              currentStep={processingStatus.currentStep}
              progress={processingStatus.progress}
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
              
              <div className="w-16 h-1 bg-blue-600 rounded"></div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <span className="ml-3 text-blue-600 font-semibold">Processing</span>
              </div>
              
              <div className="w-16 h-1 bg-gray-300 rounded"></div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-semibold">
                  3
                </div>
                <span className="ml-3 text-gray-500">Results</span>
              </div>
            </div>
          </motion.div>

          {/* Processing visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600 text-sm">Analyzing document structure and content</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Content Generation</h3>
              <p className="text-gray-600 text-sm">Creating engaging lecture script and visuals</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Video Production</h3>
              <p className="text-gray-600 text-sm">Compiling final video with voice synthesis</p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default ProcessingPage;
