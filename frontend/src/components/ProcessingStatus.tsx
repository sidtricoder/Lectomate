import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';

interface ProcessingStatusProps {
  currentStep: string;
  progress: number;
}

const ProcessingStatus: React.FC<ProcessingStatusProps> = ({
  currentStep,
  progress,
}) => {
  const steps = [
    'Analyzing document content...',
    'Parsing document content...',
    'Generating lecture script...',
    'Creating Manim animations...',
    'Cloning voice and generating audio...',
    'Compiling final video...',
    'Processing complete!',
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Creating Your Lecture Video
          </h3>
          <p className="text-gray-600">
            Our AI is working hard to transform your content. This may take a few minutes.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Current Step */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center space-x-3 mb-8"
        >
          {progress < 100 ? (
            <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
          ) : (
            <CheckCircle className="h-6 w-6 text-green-500" />
          )}
          <span className="text-lg font-medium text-gray-900">
            {currentStep}
          </span>
        </motion.div>

        {/* Steps List */}
        <div className="space-y-3">
          {steps.map((step, index) => {
            const stepProgress = ((index + 1) / steps.length) * 100;
            const isCompleted = progress >= stepProgress;
            const isCurrent = currentStep === step;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300
                  ${isCurrent 
                    ? 'bg-blue-50 border border-blue-200' 
                    : isCompleted 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium
                  ${isCurrent
                    ? 'bg-blue-500 text-white'
                    : isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`font-medium
                  ${isCurrent 
                    ? 'text-blue-700' 
                    : isCompleted 
                      ? 'text-green-700' 
                      : 'text-gray-600'
                  }`}
                >
                  {step}
                </span>
                {isCurrent && (
                  <Loader2 className="h-4 w-4 text-blue-600 animate-spin ml-auto" />
                )}
              </motion.div>
            );
          })}
        </div>

        {progress < 100 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Processing time varies based on document length and complexity.
              <br />
              Please don't close this window while processing.
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProcessingStatus;
