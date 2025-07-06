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
            size="4rem" 
            fw={900}
            variant="gradient"
            gradient={{ from: '#3b82f6', to: '#06b6d4', deg: 45 }}
            ta="center"
            style={{ 
              textShadow: '0 4px 20px rgba(59, 130, 246, 0.5)',
              filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.4))',
              background: 'linear-gradient(45deg, #3b82f6, #06b6d4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            🎓 Lectomate
          </Text>
          <Text 
            size="xl" 
            ta="center" 
            maw={700}
            style={{ 
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              fontSize: '1.3rem',
              lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            Transform your PDFs and PowerPoints into engaging educational videos 
            with AI-generated scripts, animations, and your own voice!
          </Text>
          <Button 
            size="xl"
            variant="gradient"
            gradient={{ from: '#3b82f6', to: '#9333ea' }}
            onClick={handleGetStarted}
            style={{ 
              marginTop: '2rem',
              fontSize: '1.1rem',
              padding: '1rem 2.5rem',
              boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(59, 130, 246, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(59, 130, 246, 0.4)';
            }}
          >
            Start Creating Your Lecture
          </Button>
        </Stack>
      </Center>

      {/* Features Section */}
      <Title 
        order={2} 
        ta="center" 
        mb="xl"
        style={{ 
          color: 'white', 
          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          fontSize: '2.5rem',
          fontWeight: 800,
          background: 'linear-gradient(45deg, #ffffff, #e2e8f0)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        How It Works
      </Title>
      
      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="xl">
        <Card 
          padding="xl" 
          radius="xl" 
          withBorder
          style={{ 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)';
            e.currentTarget.style.border = '2px solid rgba(59, 130, 246, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0px) scale(1)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)';
            e.currentTarget.style.border = '2px solid rgba(59, 130, 246, 0.3)';
          }}
        >
          <ThemeIcon 
            size={60}
            radius="xl" 
            variant="gradient" 
            gradient={{ from: '#3b82f6', to: '#06b6d4' }}
            mb="lg"
            style={{
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
            }}
          >
            <IconUpload size={28} />
          </ThemeIcon>
          <Text fw={700} size="xl" mb="sm" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            1. Upload Content
          </Text>
          <Text size="md" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
            Upload your PDF textbook chapter or PowerPoint presentation
          </Text>
        </Card>

        <Card 
          padding="xl" 
          radius="xl" 
          withBorder
          style={{ 
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(244, 63, 94, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(147, 51, 234, 0.3)',
            boxShadow: '0 20px 60px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(147, 51, 234, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)';
            e.currentTarget.style.border = '2px solid rgba(147, 51, 234, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0px) scale(1)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)';
            e.currentTarget.style.border = '2px solid rgba(147, 51, 234, 0.3)';
          }}
        >
          <ThemeIcon 
            size={60}
            radius="xl" 
            variant="gradient" 
            gradient={{ from: '#9333ea', to: '#f43f5e' }}
            mb="lg"
            style={{
              boxShadow: '0 10px 30px rgba(147, 51, 234, 0.3)'
            }}
          >
            <IconMicrophone size={28} />
          </ThemeIcon>
          <Text fw={700} size="xl" mb="sm" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            2. Record Voice
          </Text>
          <Text size="md" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
            Provide a short voice sample for AI voice cloning
          </Text>
        </Card>

        <Card 
          padding="xl" 
          radius="xl" 
          withBorder
          style={{ 
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 20px 60px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(16, 185, 129, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)';
            e.currentTarget.style.border = '2px solid rgba(16, 185, 129, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0px) scale(1)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)';
            e.currentTarget.style.border = '2px solid rgba(16, 185, 129, 0.3)';
          }}
        >
          <ThemeIcon 
            size={60}
            radius="xl" 
            variant="gradient" 
            gradient={{ from: '#10b981', to: '#06b6d4' }}
            mb="lg"
            style={{
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
            }}
          >
            <IconBrain size={28} />
          </ThemeIcon>
          <Text fw={700} size="xl" mb="sm" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            3. AI Processing
          </Text>
          <Text size="md" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
            AI generates script, animations, and voice narration
          </Text>
        </Card>

        <Card 
          padding="xl" 
          radius="xl" 
          withBorder
          style={{ 
            background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.15) 0%, rgba(251, 146, 60, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(244, 63, 94, 0.3)',
            boxShadow: '0 20px 60px rgba(244, 63, 94, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(244, 63, 94, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)';
            e.currentTarget.style.border = '2px solid rgba(244, 63, 94, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0px) scale(1)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(244, 63, 94, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)';
            e.currentTarget.style.border = '2px solid rgba(244, 63, 94, 0.3)';
          }}
        >
          <ThemeIcon 
            size={60}
            radius="xl" 
            variant="gradient" 
            gradient={{ from: '#f43f5e', to: '#fb923c' }}
            mb="lg"
            style={{
              boxShadow: '0 10px 30px rgba(244, 63, 94, 0.3)'
            }}
          >
            <IconVideo size={28} />
          </ThemeIcon>
          <Text fw={700} size="xl" mb="sm" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            4. Get Video
          </Text>
          <Text size="md" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
            Download your professional educational video
          </Text>
        </Card>
      </SimpleGrid>

      {/* Call to Action */}
      <Center mt={80}>
        <Group gap="xl">
          <Button 
            size="xl" 
            variant="outline"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(255,255,255,0.3)',
              color: 'white',
              fontSize: '1rem',
              padding: '1rem 2rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(255,255,255,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)';
              e.currentTarget.style.border = '2px solid rgba(255,255,255,0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.border = '2px solid rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,255,255,0.1)';
            }}
          >
            See Example
          </Button>
          <Button 
            size="xl"
            variant="gradient"
            gradient={{ from: '#3b82f6', to: '#9333ea' }}
            onClick={handleGetStarted}
            style={{ 
              fontSize: '1rem',
              padding: '1rem 2rem',
              boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(59, 130, 246, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(59, 130, 246, 0.4)';
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
