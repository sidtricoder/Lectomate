import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { UploadSection } from '../components';

const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = React.useState<{
    document: File | null;
    audio: File | null;
  }>({
    document: null,
    audio: null,
  });

  const handleFileUpload = (type: 'document' | 'audio', file: File) => {
    setUploadedFiles(prev => ({
      ...prev,
      [type]: file,
    }));
  };

  const handleStartProcessing = async () => {
    if (!uploadedFiles.document || !uploadedFiles.audio) {
      alert('Please upload both a document and audio file before processing.');
      return;
    }

    // Navigate to processing page with file data
    navigate('/processing', { 
      state: { 
        uploadedFiles 
      } 
    });
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
              Upload Your Content
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Upload your document and audio files to start creating your AI-powered lecture
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <UploadSection 
              uploadedFiles={uploadedFiles}
              onFileUpload={handleFileUpload}
              onStartProcessing={handleStartProcessing}
              isProcessing={false}
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
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <span className="ml-3 text-blue-600 font-semibold">Upload Files</span>
              </div>
              
              <div className="w-16 h-1 bg-gray-300 rounded"></div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-semibold">
                  2
                </div>
                <span className="ml-3 text-gray-500">Processing</span>
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
        </main>
      </div>
    </div>
  );
};

export default UploadPage;
