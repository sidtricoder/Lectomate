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
  Center,
  Box
} from '@mantine/core'
import { 
  IconUpload, 
  IconMicrophone, 
  IconVideo,
  IconBrain,
} from '@tabler/icons-react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import UploadPage from './pages/UploadPage'
import BackgroundWaves from './components/BackgroundWaves'
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
            style={{ 
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
            }}
          >
            🎓 Lectomate
          </Text>
          <Text size="xl" c="dimmed" ta="center" maw={600} style={{ color: 'rgba(255,255,255,0.9)' }}>
            Transform your PDFs and PowerPoints into engaging educational videos 
            with AI-generated scripts, animations, and your own voice!
          </Text>
          <Button 
            size="lg" 
            radius="xl"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            onClick={handleGetStarted}
            style={{ 
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            Start Creating Your Lecture
          </Button>
        </Stack>
      </Center>

      {/* Features Section */}
      <Title order={2} ta="center" mb="xl" style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
        How It Works
      </Title>
      
      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
        <Card 
          padding="lg" 
          radius="md" 
          withBorder
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          <ThemeIcon 
            size="xl" 
            radius="md" 
            variant="gradient" 
            gradient={{ from: 'blue', to: 'cyan' }}
            mb="md"
          >
            <IconUpload size={24} />
          </ThemeIcon>
          <Text fw={500} size="lg" mb="xs" style={{ color: 'white' }}>
            1. Upload Content
          </Text>
          <Text size="sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Upload your PDF textbook chapter or PowerPoint presentation
          </Text>
        </Card>

        <Card 
          padding="lg" 
          radius="md" 
          withBorder
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          <ThemeIcon 
            size="xl" 
            radius="md" 
            variant="gradient" 
            gradient={{ from: 'grape', to: 'pink' }}
            mb="md"
          >
            <IconMicrophone size={24} />
          </ThemeIcon>
          <Text fw={500} size="lg" mb="xs" style={{ color: 'white' }}>
            2. Record Voice
          </Text>
          <Text size="sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Provide a short voice sample for AI voice cloning
          </Text>
        </Card>

        <Card 
          padding="lg" 
          radius="md" 
          withBorder
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          <ThemeIcon 
            size="xl" 
            radius="md" 
            variant="gradient" 
            gradient={{ from: 'teal', to: 'lime' }}
            mb="md"
          >
            <IconBrain size={24} />
          </ThemeIcon>
          <Text fw={500} size="lg" mb="xs" style={{ color: 'white' }}>
            3. AI Processing
          </Text>
          <Text size="sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
            AI generates script, animations, and voice narration
          </Text>
        </Card>

        <Card 
          padding="lg" 
          radius="md" 
          withBorder
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          <ThemeIcon 
            size="xl" 
            radius="md" 
            variant="gradient" 
            gradient={{ from: 'orange', to: 'red' }}
            mb="md"
          >
            <IconVideo size={24} />
          </ThemeIcon>
          <Text fw={500} size="lg" mb="xs" style={{ color: 'white' }}>
            4. Get Video
          </Text>
          <Text size="sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
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
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white'
            }}
          >
            See Example
          </Button>
          <Button 
            size="lg"
            variant="gradient"
            gradient={{ from: 'blue', to: 'purple' }}
            onClick={handleGetStarted}
            style={{ 
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)'
            }}
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
    <>
      <BackgroundWaves />
      <Box style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
