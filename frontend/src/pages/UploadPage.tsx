import {
  Container,
  Text,
  Button,
  Stack,
  Group,
  Card,
  Progress,
  Alert,
  Center,
  Stepper,
} from '@mantine/core'
import { Dropzone, PDF_MIME_TYPE } from '@mantine/dropzone'
import {
  IconUpload,
  IconX,
  IconDownload,
  IconMicrophone,
  IconFileTypePdf,
  IconPresentation,
  IconCheck,
  IconSend,
  IconVideo,
} from '@tabler/icons-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VoiceRecorder from '../components/VoiceRecorder'

function UploadPage() {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0)
  const [files, setFiles] = useState<File[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [voiceData, setVoiceData] = useState<{
    blob: Blob | null
    url: string
  }>({ blob: null, url: '' })

  // Handle file drop
  const handleDrop = (droppedFiles: File[]) => {
    setFiles(droppedFiles)
    setActiveStep(1) // Move to next step
  }

  // Handle file upload
  const handleUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setActiveStep(2) // Move to voice recording step
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  // Handle voice ready
  const handleVoiceReady = (audioBlob: Blob, audioUrl: string) => {
    setVoiceData({ blob: audioBlob, url: audioUrl })
  }

  // Handle voice remove
  const handleVoiceRemove = () => {
    setVoiceData({ blob: null, url: '' })
  }

  // Start final processing
  const startFinalProcessing = async () => {
    setActiveStep(3)
    
    // Simulate processing time
    setTimeout(() => {
      setActiveStep(4) // Final step
    }, 5000)
  }

  return (
    <Container size="md" py="xl">
      {/* Header */}
      <Center mb="xl">
        <Stack align="center" gap="md">
          <Text
            size="2.5rem"
            fw={700}
            variant="gradient"
            gradient={{ from: 'blue', to: 'purple', deg: 45 }}
            ta="center"
          >
            Create Your Lecture
          </Text>
          <Text size="lg" c="dimmed" ta="center" maw={500}>
            Upload your content and we'll transform it into an engaging video lecture
          </Text>
        </Stack>
      </Center>

      {/* Progress Stepper */}
      <Stepper active={activeStep} mb="xl">
        <Stepper.Step
          label="Upload Content"
          description="PDF or PowerPoint"
          icon={<IconUpload size={18} />}
        />
        <Stepper.Step
          label="Voice Sample"
          description="Record your voice"
          icon={<IconMicrophone size={18} />}
        />
        <Stepper.Step
          label="Processing"
          description="AI generation"
          icon={<IconCheck size={18} />}
        />
        <Stepper.Step
          label="Complete"
          description="Download video"
          icon={<IconVideo size={18} />}
        />
      </Stepper>

      {/* Step 1: File Upload */}
      {activeStep === 0 && (
        <Card 
          padding="xl" 
          radius="md" 
          withBorder
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          <Stack gap="lg">
            <div>
              <Text fw={500} size="lg" mb="xs">
                Step 1: Upload Your Content
              </Text>
              <Text size="sm" c="dimmed">
                Upload a PDF textbook chapter or PowerPoint presentation (Max 50MB)
              </Text>
            </div>

            <Dropzone
              onDrop={handleDrop}
              onReject={(files) => console.log('rejected files', files)}
              maxSize={50 * 1024 ** 2} // 50MB
              accept={[...PDF_MIME_TYPE, 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation']}
              multiple={false}
            >
              <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                <Dropzone.Accept>
                  <IconUpload
                    size={52}
                    color="var(--mantine-color-blue-6)"
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size={52}
                    color="var(--mantine-color-red-6)"
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconDownload
                    size={52}
                    color="var(--mantine-color-dimmed)"
                    stroke={1.5}
                  />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Drag files here or click to select
                  </Text>
                  <Text size="sm" c="dimmed" inline mt={7}>
                    Upload PDF or PowerPoint files
                  </Text>
                </div>
              </Group>
            </Dropzone>

            {files.length > 0 && (
              <Alert
                icon={<IconCheck size={16} />}
                title="File Ready!"
                color="green"
                variant="light"
              >
                <Group gap="xs">
                  {files[0].name.endsWith('.pdf') ? (
                    <IconFileTypePdf size={16} />
                  ) : (
                    <IconPresentation size={16} />
                  )}
                  <Text size="sm">{files[0].name}</Text>
                  <Text size="xs" c="dimmed">
                    ({(files[0].size / 1024 / 1024).toFixed(2)} MB)
                  </Text>
                </Group>
              </Alert>
            )}
          </Stack>
        </Card>
      )}

      {/* Step 2: Upload Progress */}
      {activeStep === 1 && (
        <Card 
          padding="xl" 
          radius="md" 
          withBorder
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          <Stack gap="lg">
            <div>
              <Text fw={500} size="lg" mb="xs">
                Processing Your File
              </Text>
              <Text size="sm" c="dimmed">
                We're analyzing your content and preparing it for processing...
              </Text>
            </div>

            {!isUploading ? (
              <Group justify="center">
                <Button
                  size="lg"
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan' }}
                  onClick={handleUpload}
                >
                  Start Processing
                </Button>
              </Group>
            ) : (
              <Stack gap="md">
                <Progress value={uploadProgress} size="xl" radius="xl" />
                <Text ta="center" size="sm" c="dimmed">
                  {uploadProgress}% - Analyzing content structure...
                </Text>
              </Stack>
            )}
          </Stack>
        </Card>
      )}

      {/* Step 3: Voice Recording */}
      {activeStep === 2 && (
        <>
          <VoiceRecorder 
            onVoiceReady={handleVoiceReady}
            onVoiceRemove={handleVoiceRemove}
          />
          
          {voiceData.blob && (
            <Center mt="lg">
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: 'green', to: 'teal' }}
                leftSection={<IconSend size={18} />}
                onClick={startFinalProcessing}
              >
                Generate Lecture Video
              </Button>
            </Center>
          )}
        </>
      )}

      {/* Step 4: Final Processing */}
      {activeStep === 3 && (
        <Card 
          padding="xl" 
          radius="md" 
          withBorder
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          <Stack gap="lg">
            <div>
              <Text fw={500} size="lg" mb="xs">
                🤖 AI is Creating Your Lecture
              </Text>
              <Text size="sm" c="dimmed">
                This may take a few minutes. We're generating your script, animations, and video...
              </Text>
            </div>

            <Stack gap="md">
              <Progress 
                value={100} 
                size="xl" 
                radius="xl"
                animated
                color="blue"
              />
              <Text ta="center" size="sm" c="dimmed">
                🧠 Analyzing content structure...
              </Text>
              <Text ta="center" size="sm" c="dimmed">
                📝 Generating engaging script...
              </Text>
              <Text ta="center" size="sm" c="dimmed">
                🎭 Creating Manim animations...
              </Text>
              <Text ta="center" size="sm" c="dimmed">
                🎤 Cloning your voice...
              </Text>
              <Text ta="center" size="sm" c="dimmed">
                🎬 Compiling final video...
              </Text>
            </Stack>
          </Stack>
        </Card>
      )}

      {/* Step 5: Complete */}
      {activeStep === 4 && (
        <Card 
          padding="xl" 
          radius="md" 
          withBorder
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          <Stack gap="lg">
            <Alert
              icon={<IconCheck size={16} />}
              title="🎉 Your Lecture Video is Ready!"
              color="green"
              variant="light"
            >
              Your AI-generated educational video has been created successfully!
            </Alert>

            <div>
              <Text fw={500} size="lg" mb="xs">
                Your Lecture Features:
              </Text>
              <Stack gap="xs">
                <Text size="sm">✅ AI-generated script from your content</Text>
                <Text size="sm">✅ Voice cloned from your sample</Text>
                <Text size="sm">✅ Manim animations for complex concepts</Text>
                <Text size="sm">✅ Professional video compilation</Text>
              </Stack>
            </div>

            <Group justify="center">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
              >
                Create Another Lecture
              </Button>
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: 'green', to: 'teal' }}
                leftSection={<IconDownload size={18} />}
              >
                Download Video
              </Button>
            </Group>
          </Stack>
        </Card>
      )}
    </Container>
  )
}

export default UploadPage
