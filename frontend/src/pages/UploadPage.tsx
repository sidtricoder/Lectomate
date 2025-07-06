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
} from '@tabler/icons-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UploadPage() {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0)
  const [files, setFiles] = useState<File[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

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
      </Stepper>

      {/* Step 1: File Upload */}
      {activeStep === 0 && (
        <Card padding="xl" radius="md" withBorder>
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
        <Card padding="xl" radius="md" withBorder>
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

      {/* Step 3: Voice Recording (Preview) */}
      {activeStep === 2 && (
        <Card padding="xl" radius="md" withBorder>
          <Stack gap="lg">
            <Alert
              icon={<IconCheck size={16} />}
              title="Content Processed Successfully!"
              color="green"
              variant="light"
            >
              Your file has been analyzed and is ready for voice recording.
            </Alert>

            <div>
              <Text fw={500} size="lg" mb="xs">
                Next: Record Your Voice Sample
              </Text>
              <Text size="sm" c="dimmed">
                This feature will be available in the next step. We'll implement voice recording next!
              </Text>
            </div>

            <Group justify="center">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
              <Button
                variant="gradient"
                gradient={{ from: 'blue', to: 'purple' }}
                disabled
              >
                Continue to Voice Recording (Coming Soon)
              </Button>
            </Group>
          </Stack>
        </Card>
      )}
    </Container>
  )
}

export default UploadPage
