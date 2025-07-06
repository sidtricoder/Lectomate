import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import './index.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dropzone/styles.css'
import App from './App.tsx'

// Custom theme for Lectomate - vibrant and educational
const theme = {
  primaryColor: 'blue',
  colors: {
    // Custom color palette for educational platform
    brand: [
      '#e7f5ff',
      '#d0ebff', 
      '#a5d8ff',
      '#74c0fc',
      '#4dabf7',
      '#339af0',
      '#228be6',
      '#1c7ed6',
      '#1971c2',
      '#1864ab'
    ] as const,
    success: [
      '#f3f9f0',
      '#e8f5e8',
      '#d3f9d8',
      '#b2f2bb',
      '#8ce99a',
      '#69db7c',
      '#51cf66',
      '#40c057',
      '#37b24d',
      '#2f9e44'
    ] as const
  },
  components: {
    Button: {
      defaultProps: {
        size: 'md',
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        shadow: 'sm',
      },
    },
  },
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Notifications />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
