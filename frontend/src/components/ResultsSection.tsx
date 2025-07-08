import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play, RefreshCw, Eye, FileText } from 'lucide-react';

interface ResultsSectionProps {
  videoUrl: string | null;
  scriptPreview: string | null;
  onReset: () => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({
  videoUrl,
  scriptPreview,
  onReset,
}) => {
  const [showFullScript, setShowFullScript] = React.useState(false);

  return (
    <section className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          🎉 Your Lecture Video is Ready!
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your AI-generated lecture video is complete with voiceover, animations, and engaging visuals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Video Preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card"
        >
          <div className="flex items-center mb-4">
            <Play className="h-6 w-6 text-blue-600 mr-2" />
            <h4 className="text-lg font-semibold text-gray-900">Video Preview</h4>
          </div>
          
          <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-70" />
              <p className="text-lg">Generated Lecture Video</p>
              <p className="text-sm opacity-70">Click play to preview</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button className="btn-primary flex-1 flex items-center justify-center">
              <Play className="h-4 w-4 mr-2" />
              Play Preview
            </button>
            <button className="btn-secondary flex items-center justify-center px-4">
              <Download className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Script Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-purple-600 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">Generated Script</h4>
            </div>
            <button
              onClick={() => setShowFullScript(!showFullScript)}
              className="text-purple-600 hover:text-purple-700 flex items-center text-sm"
            >
              <Eye className="h-4 w-4 mr-1" />
              {showFullScript ? 'Show Less' : 'View Full'}
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 max-h-80 overflow-y-auto">
            <p className="text-gray-700 text-sm leading-relaxed">
              {showFullScript 
                ? `${scriptPreview}\n\nThe quantum world operates under fundamentally different principles than our everyday experience. At the atomic scale, particles can exist in multiple states simultaneously - a phenomenon known as superposition. This principle is beautifully demonstrated in the famous double-slit experiment, where photons appear to pass through both slits at once until observed.\n\nOne of the most intriguing aspects of quantum mechanics is the concept of entanglement, where particles become correlated in such a way that the quantum state of one particle cannot be described independently of the others. Einstein famously called this "spooky action at a distance," though modern experiments have confirmed its reality.\n\nThe uncertainty principle, formulated by Werner Heisenberg, tells us that we cannot simultaneously know both the position and momentum of a particle with perfect accuracy. This isn't due to measurement limitations - it's a fundamental feature of reality at the quantum scale.\n\nAs we delve deeper into quantum mechanics, we'll explore how these principles have led to revolutionary technologies like quantum computing, quantum cryptography, and quantum sensing. These applications promise to transform fields from medicine to cybersecurity in the coming decades.`
                : scriptPreview
              }
            </p>
          </div>
          
          <div className="mt-4 flex space-x-3">
            <button className="btn-secondary flex-1 flex items-center justify-center">
              <Download className="h-4 w-4 mr-2" />
              Download Script
            </button>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-8 space-y-4"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary px-8 py-4 text-lg">
            <Download className="h-5 w-5 mr-2" />
            Download Complete Video
          </button>
          
          <button
            onClick={onReset}
            className="btn-secondary px-8 py-4 text-lg"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Create Another Lecture
          </button>
        </div>
        
        <p className="text-sm text-gray-500">
          Video format: MP4 • Resolution: 1920x1080 • Duration: Varies based on content
        </p>
      </motion.div>

      {/* Features Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h5 className="font-semibold text-gray-900 mb-2">AI-Generated Script</h5>
          <p className="text-sm text-gray-600">Engaging, student-friendly content crafted from your materials</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Play className="h-6 w-6 text-white" />
          </div>
          <h5 className="font-semibold text-gray-900 mb-2">Cloned Voice Narration</h5>
          <p className="text-sm text-gray-600">Your personal voice delivering the entire lecture</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Eye className="h-6 w-6 text-white" />
          </div>
          <h5 className="font-semibold text-gray-900 mb-2">Dynamic Animations</h5>
          <p className="text-sm text-gray-600">Manim-powered visualizations for complex concepts</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ResultsSection;
