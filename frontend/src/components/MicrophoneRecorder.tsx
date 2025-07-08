import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Square, Play, Pause, RotateCcw, Check } from 'lucide-react';

interface MicrophoneRecorderProps {
  onRecordingComplete: (audioBlob: Blob) => void;
  isDisabled?: boolean;
}

const MicrophoneRecorder: React.FC<MicrophoneRecorderProps> = ({
  onRecordingComplete,
  isDisabled = false,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [hasRecording, setHasRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
      streamRef.current = stream;
      return stream;
    } catch (error) {
      console.error('Microphone permission denied:', error);
      setHasPermission(false);
      return null;
    }
  };

  const startRecording = async () => {
    const stream = streamRef.current || await requestMicrophonePermission();
    
    if (!stream) {
      alert('Microphone access is required to record audio.');
      return;
    }

    chunksRef.current = [];
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(chunksRef.current, { type: 'audio/wav' });
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      setHasRecording(true);
      onRecordingComplete(audioBlob);
    };

    mediaRecorder.start();
    setIsRecording(true);
    setRecordingTime(0);

    timerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const resetRecording = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setHasRecording(false);
    setRecordingTime(0);
    setIsPlaying(false);
  };

  const playRecording = () => {
    if (audioRef.current && audioUrl) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pausePlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (hasPermission === false) {
    return (
      <div className="p-6 border-2 border-dashed border-red-300 rounded-lg bg-red-50">
        <div className="text-center">
          <MicOff className="h-12 w-12 text-red-400 mx-auto mb-4" />
          <p className="text-red-600 font-medium mb-2">Microphone Access Required</p>
          <p className="text-sm text-red-500 mb-4">
            Please allow microphone access to record audio
          </p>
          <button
            onClick={requestMicrophonePermission}
            className="btn-primary text-sm"
          >
            Grant Permission
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Recording Controls */}
      <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            {!isRecording && !hasRecording && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startRecording}
                disabled={isDisabled}
                className="w-16 h-16 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mic className="h-8 w-8" />
              </motion.button>
            )}

            {isRecording && (
              <>
                {!isPaused ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={pauseRecording}
                    className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Pause className="h-6 w-6" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resumeRecording}
                    className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Mic className="h-6 w-6" />
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={stopRecording}
                  className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Square className="h-6 w-6" />
                </motion.button>
              </>
            )}

            {hasRecording && !isRecording && (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={isPlaying ? pausePlayback : playRecording}
                  className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetRecording}
                  className="w-12 h-12 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <RotateCcw className="h-6 w-6" />
                </motion.button>
              </>
            )}
          </div>

          {/* Status and Timer */}
          <div className="space-y-2">
            {isRecording && (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-mono font-bold text-gray-700">
                  {formatTime(recordingTime)}
                </span>
                <span className="text-sm text-gray-500">
                  {isPaused ? '(Paused)' : '(Recording)'}
                </span>
              </div>
            )}

            {hasRecording && !isRecording && (
              <div className="flex items-center justify-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-green-600 font-medium">
                  Recording completed ({formatTime(recordingTime)})
                </span>
              </div>
            )}

            {!isRecording && !hasRecording && (
              <p className="text-gray-600">
                Click the microphone to start recording your voice
              </p>
            )}
          </div>

          {/* Minimum recording time hint */}
          {!hasRecording && (
            <p className="text-xs text-gray-500 mt-2">
              Recommended: 30 seconds or more for better voice cloning
            </p>
          )}
        </div>
      </div>

      {/* Hidden audio element for playback */}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />
      )}
    </div>
  );
};

export default MicrophoneRecorder;
