import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Stack, 
  Group,
  Card,
  SimpleGrid,
  ThemeIcon,
  Center
} from '@mantine/core'
import { 
  IconUpload, 
  IconMicrophone, 
  IconVideo,
  IconBrain,
} from '@tabler/icons-react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import UploadPage from './pages/UploadPage'
import './App.css'

function HomePage() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/upload')
  }
  return (
    <Container size="lg" py="xl">
      {/* Hero Section */}
      <Center mb="xl">
        <Stack align="center" gap="md">
          <Text 
            size="3rem" 
            fw={900}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
            ta="center"
          >
            🎓 Lectomate
          </Text>
          <Text size="xl" c="dimmed" ta="center" maw={600}>
            Transform your PDFs and PowerPoints into engaging educational videos 
            with AI-generated scripts, animations, and your own voice!
          </Text>
          <Button 
            size="lg" 
            radius="xl"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            onClick={handleGetStarted}
          >
            Start Creating Your Lecture
          </Button>
        </Stack>
      </Center>

      {/* Features Section */}
      <Title order={2} ta="center" mb="xl" c="blue">
        How It Works
      </Title>
      
      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
        <Card padding="lg" radius="md" withBorder>
          <ThemeIcon 
            size="xl" 
            radius="md" 
            variant="gradient" 
            gradient={{ from: 'blue', to: 'cyan' }}
            mb="md"
          >
            <IconUpload size={24} />
          </ThemeIcon>
          <Text fw={500} size="lg" mb="xs">
            1. Upload Content
          </Text>
          <Text size="sm" c="dimmed">
            Upload your PDF textbook chapter or PowerPoint presentation
          </Text>
        </Card>

        <Card padding="lg" radius="md" withBorder>
          <ThemeIcon 
            size="xl" 
            radius="md" 
            variant="gradient" 
            gradient={{ from: 'grape', to: 'pink' }}
            mb="md"
          >
            <IconMicrophone size={24} />
          </ThemeIcon>
          <Text fw={500} size="lg" mb="xs">
            2. Record Voice
          </Text>
          <Text size="sm" c="dimmed">
            Provide a short voice sample for AI voice cloning
          </Text>
        </Card>

        <Card padding="lg" radius="md" withBorder>
          <ThemeIcon 
            size="xl" 
            radius="md" 
            variant="gradient" 
            gradient={{ from: 'teal', to: 'lime' }}
            mb="md"
          >
            <IconBrain size={24} />
          </ThemeIcon>
          <Text fw={500} size="lg" mb="xs">
            3. AI Processing
          </Text>
          <Text size="sm" c="dimmed">
            AI generates script, animations, and voice narration
          </Text>
        </Card>

        <Card padding="lg" radius="md" withBorder>
          <ThemeIcon 
            size="xl" 
            radius="md" 
            variant="gradient" 
            gradient={{ from: 'orange', to: 'red' }}
            mb="md"
          >
            <IconVideo size={24} />
          </ThemeIcon>
          <Text fw={500} size="lg" mb="xs">
            4. Get Video
          </Text>
          <Text size="sm" c="dimmed">
            Download your professional educational video
          </Text>
        </Card>
      </SimpleGrid>

      {/* Call to Action */}
      <Center mt="xl">
        <Group>
          <Button 
            size="lg" 
            variant="outline" 
            color="blue"
          >
            See Example
          </Button>
          <Button 
            size="lg"
            variant="gradient"
            gradient={{ from: 'blue', to: 'purple' }}
            onClick={handleGetStarted}
          >
            Get Started Now
          </Button>
        </Group>
      </Center>
    </Container>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  )
}

export default App
