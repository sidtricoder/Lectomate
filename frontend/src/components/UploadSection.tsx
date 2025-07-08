import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload, File, Mic, Check, Play } from 'lucide-react';
import MicrophoneRecorder from './MicrophoneRecorder';

interface UploadSectionProps {
  uploadedFiles: {
    document: File | null;
    audio: File | null;
  };
  onFileUpload: (type: 'document' | 'audio', file: File) => void;
  onStartProcessing: () => void;
  isProcessing: boolean;
}

const UploadSection: React.FC<UploadSectionProps> = ({
  uploadedFiles,
  onFileUpload,
  onStartProcessing,
  isProcessing,
}) => {
  const [audioInputType, setAudioInputType] = useState<'file' | 'microphone'>('file');

  const documentDropzone = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileUpload('document', acceptedFiles[0]);
      }
    },
  });

  const audioDropzone = useDropzone({
    accept: {
      'audio/*': ['.mp3', '.wav', '.m4a', '.ogg'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileUpload('audio', acceptedFiles[0]);
      }
    },
  });

  const handleRecordingComplete = (audioBlob: Blob) => {
    // Convert blob to File object
    const audioFile = audioBlob as File;
    // Add file properties
    Object.defineProperty(audioFile, 'name', {
      value: 'recorded-audio.wav',
      writable: false
    });
    Object.defineProperty(audioFile, 'lastModified', {
      value: Date.now(),
      writable: false
    });
    onFileUpload('audio', audioFile);
  };

  return (
    <section className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Upload Your Content
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start by uploading your document (PDF/PowerPoint) and a voice sample. 
          Our AI will handle the rest!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Document Upload */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card">
            <div className="flex items-center mb-4">
              <File className="h-6 w-6 text-blue-600 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">Document</h4>
              {uploadedFiles.document && (
                <Check className="h-5 w-5 text-green-500 ml-auto" />
              )}
            </div>
            
            <div
              {...documentDropzone.getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer
                ${documentDropzone.isDragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : uploadedFiles.document 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                }`}
            >
              <input {...documentDropzone.getInputProps()} />
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              
              {uploadedFiles.document ? (
                <div>
                  <p className="text-green-600 font-medium mb-2">
                    ✓ {uploadedFiles.document.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(uploadedFiles.document.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-gray-600 mb-2">
                    {documentDropzone.isDragActive
                      ? 'Drop your document here'
                      : 'Drag & drop your document here, or click to browse'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports PDF, PPT, PPTX files
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Audio Upload */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="card">
            <div className="flex items-center mb-4">
              <Mic className="h-6 w-6 text-purple-600 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">Voice Sample</h4>
              {uploadedFiles.audio && (
                <Check className="h-5 w-5 text-green-500 ml-auto" />
              )}
            </div>

            {/* Audio Input Type Toggle */}
            <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setAudioInputType('file')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  audioInputType === 'file'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Upload File
              </button>
              <button
                onClick={() => setAudioInputType('microphone')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  audioInputType === 'microphone'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Record Audio
              </button>
            </div>
            
            {audioInputType === 'file' ? (
              <div
                {...audioDropzone.getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer
                  ${audioDropzone.isDragActive 
                    ? 'border-purple-500 bg-purple-50' 
                    : uploadedFiles.audio 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
                  }`}
              >
                <input {...audioDropzone.getInputProps()} />
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                
                {uploadedFiles.audio ? (
                  <div>
                    <p className="text-green-600 font-medium mb-2">
                      ✓ {uploadedFiles.audio.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {(uploadedFiles.audio.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-600 mb-2">
                      {audioDropzone.isDragActive
                        ? 'Drop your audio file here'
                        : 'Drag & drop your voice sample here, or click to browse'}
                    </p>
                    <p className="text-sm text-gray-500">
                      Supports MP3, WAV, M4A, OGG files (30s+ recommended)
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <MicrophoneRecorder
                onRecordingComplete={handleRecordingComplete}
                isDisabled={isProcessing}
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Start Processing Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <button
          onClick={onStartProcessing}
          disabled={!uploadedFiles.document || !uploadedFiles.audio || isProcessing}
          className={`btn-primary inline-flex items-center px-8 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
            ${(!uploadedFiles.document || !uploadedFiles.audio || isProcessing) 
              ? 'bg-gray-400 hover:bg-gray-400' 
              : ''
            }`}
        >
          <Play className="h-5 w-5 mr-2" />
          {isProcessing ? 'Processing...' : 'Generate Lecture Video'}
        </button>
        
        {(!uploadedFiles.document || !uploadedFiles.audio) && (
          <p className="text-sm text-gray-500 mt-2">
            Please upload both files to continue
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default UploadSection;
