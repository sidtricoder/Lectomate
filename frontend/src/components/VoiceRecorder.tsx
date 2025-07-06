import {
  Card,
  Stack,
  Group,
  Button,
  Text,
  Alert,
  Progress,
  Center,
  Divider,
  ActionIcon,
} from '@mantine/core'
import { Dropzone } from '@mantine/dropzone'
import {
  IconMicrophone,
  IconPlayerStop,
  IconPlayerPlay,
  IconUpload,
  IconX,
  IconCheck,
  IconTrash,
  IconDownload,
} from '@tabler/icons-react'
import { useState, useRef, useEffect } from 'react'

interface VoiceRecorderProps {
  onVoiceReady: (audioBlob: Blob, audioUrl: string) => void
  onVoiceRemove: () => void
}

function VoiceRecorder({ onVoiceReady, onVoiceRemove }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioUrl, setAudioUrl] = useState<string>('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [recordingStatus, setRecordingStatus] = useState<'idle' | 'recording' | 'recorded' | 'uploaded'>('idle')

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const timerRef = useRef<number | null>(null)

  // Clean up resources on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl)
      }
    }
  }, [audioUrl])

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      
      const chunks: BlobPart[] = []
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      }
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' })
        const url = URL.createObjectURL(blob)
        setAudioUrl(url)
        setRecordingStatus('recorded')
        onVoiceReady(blob, url)
      }
      
      mediaRecorder.start()
      setIsRecording(true)
      setRecordingTime(0)
      setRecordingStatus('recording')
      
      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)
      
    } catch (error) {
      console.error('Error accessing microphone:', error)
      alert('Could not access microphone. Please check permissions.')
    }
  }

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }

  // Play/pause audio
  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  // Handle file upload
  const handleFileUpload = (files: File[]) => {
    const file = files[0]
    setUploadedFile(file)
    
    const url = URL.createObjectURL(file)
    setAudioUrl(url)
    setRecordingStatus('uploaded')
    onVoiceReady(file, url)
  }

  // Remove audio
  const removeAudio = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
    }
    setAudioUrl('')
    setUploadedFile(null)
    setRecordingStatus('idle')
    setIsPlaying(false)
    onVoiceRemove()
  }

  // Format time for display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <Card padding="xl" radius="md" withBorder>
      <Stack gap="lg">
        <div>
          <Text fw={500} size="lg" mb="xs">
            Step 2: Voice Sample
          </Text>
          <Text size="sm" c="dimmed">
            Record your voice or upload an audio file for AI voice cloning (10-30 seconds recommended)
          </Text>
        </div>

        {/* Recording Section */}
        <div>
          <Text fw={500} mb="md" size="md">
            🎙️ Record Your Voice
          </Text>
          
          {recordingStatus === 'idle' && (
            <Group justify="center">
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: 'red', to: 'pink' }}
                leftSection={<IconMicrophone size={20} />}
                onClick={startRecording}
              >
                Start Recording
              </Button>
            </Group>
          )}

          {recordingStatus === 'recording' && (
            <Stack gap="md">
              <Center>
                <Group gap="lg">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div 
                      style={{ 
                        width: '12px', 
                        height: '12px', 
                        backgroundColor: 'red', 
                        borderRadius: '50%',
                        animation: 'pulse 1s infinite'
                      }} 
                    />
                    <Text fw={500} c="red">Recording: {formatTime(recordingTime)}</Text>
                  </div>
                  <Button
                    variant="filled"
                    color="red"
                    leftSection={<IconPlayerStop size={16} />}
                    onClick={stopRecording}
                  >
                    Stop Recording
                  </Button>
                </Group>
              </Center>
              <Progress value={Math.min((recordingTime / 30) * 100, 100)} color="red" />
              <Text size="xs" c="dimmed" ta="center">
                {recordingTime >= 30 ? 'Great length!' : `${30 - recordingTime}s remaining for optimal length`}
              </Text>
            </Stack>
          )}

          {recordingStatus === 'recorded' && (
            <Alert
              icon={<IconCheck size={16} />}
              title="Voice Recorded Successfully!"
              color="green"
              variant="light"
            >
              <Group justify="space-between" mt="md">
                <Group gap="xs">
                  <ActionIcon 
                    variant="light" 
                    color="blue" 
                    onClick={togglePlayback}
                  >
                    {isPlaying ? <IconPlayerStop size={16} /> : <IconPlayerPlay size={16} />}
                  </ActionIcon>
                  <Text size="sm">
                    Recording ({formatTime(recordingTime)})
                  </Text>
                </Group>
                <ActionIcon 
                  variant="light" 
                  color="red" 
                  onClick={removeAudio}
                >
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            </Alert>
          )}
        </div>

        {/* Divider */}
        <Divider label="OR" labelPosition="center" />

        {/* Upload Section */}
        <div>
          <Text fw={500} mb="md" size="md">
            📁 Upload Audio File
          </Text>
          
          {recordingStatus === 'idle' && (
            <Dropzone
              onDrop={handleFileUpload}
              onReject={(files) => console.log('rejected files', files)}
              maxSize={10 * 1024 ** 2} // 10MB
              accept={['audio/mp3', 'audio/wav', 'audio/mpeg', 'audio/m4a', 'audio/ogg']}
              multiple={false}
            >
              <Group justify="center" gap="xl" mih={120} style={{ pointerEvents: 'none' }}>
                <Dropzone.Accept>
                  <IconUpload
                    size={42}
                    color="var(--mantine-color-blue-6)"
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size={42}
                    color="var(--mantine-color-red-6)"
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconDownload
                    size={42}
                    color="var(--mantine-color-dimmed)"
                    stroke={1.5}
                  />
                </Dropzone.Idle>

                <div>
                  <Text size="lg" inline>
                    Drop audio file here or click to select
                  </Text>
                  <Text size="sm" c="dimmed" inline mt={7}>
                    Support MP3, WAV, M4A files (Max 10MB)
                  </Text>
                </div>
              </Group>
            </Dropzone>
          )}

          {recordingStatus === 'uploaded' && uploadedFile && (
            <Alert
              icon={<IconCheck size={16} />}
              title="Audio File Uploaded Successfully!"
              color="green"
              variant="light"
            >
              <Group justify="space-between" mt="md">
                <Group gap="xs">
                  <ActionIcon 
                    variant="light" 
                    color="blue" 
                    onClick={togglePlayback}
                  >
                    {isPlaying ? <IconPlayerStop size={16} /> : <IconPlayerPlay size={16} />}
                  </ActionIcon>
                  <Text size="sm">
                    {uploadedFile.name} ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                  </Text>
                </Group>
                <ActionIcon 
                  variant="light" 
                  color="red" 
                  onClick={removeAudio}
                >
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            </Alert>
          )}
        </div>

        {/* Hidden audio element for playback */}
        {audioUrl && (
          <audio
            ref={audioRef}
            src={audioUrl}
            onEnded={() => setIsPlaying(false)}
            style={{ display: 'none' }}
          />
        )}
      </Stack>

      {/* Add CSS for pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </Card>
  )
}

export default VoiceRecorder
