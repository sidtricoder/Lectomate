import { Box } from '@mantine/core'

function BackgroundWaves() {
  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse at top left, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(244, 63, 94, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a1b3a 25%, #2d1b69 50%, #1e293b 75%, #0f172a 100%)
        `,
      }}
    >
      {/* Floating particles */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(2px 2px at 20px 30px, rgba(147, 51, 234, 0.8), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(59, 130, 246, 0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(16, 185, 129, 0.8), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(244, 63, 94, 0.8), transparent),
            radial-gradient(2px 2px at 160px 30px, rgba(147, 51, 234, 0.8), transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px',
          animation: 'float 20s ease-in-out infinite',
        }}
      />

      {/* Animated SVG waves */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1440 800" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(244, 63, 94, 0.2)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
            <stop offset="100%" stopColor="rgba(244, 63, 94, 0.2)" />
          </linearGradient>
        </defs>

        {/* Wave Layer 1 */}
        <path 
          d="M0,800 C120,750 240,700 360,720 C480,740 600,800 720,780 C840,760 960,680 1080,700 C1200,720 1320,800 1440,760 L1440,800 Z" 
          fill="url(#gradient1)"
          style={{
            animation: 'wave1 8s ease-in-out infinite',
            transformOrigin: 'center',
          }}
        />

        {/* Wave Layer 2 */}
        <path 
          d="M0,800 C150,730 300,660 450,680 C600,700 750,770 900,750 C1050,730 1200,660 1350,680 C1440,690 1440,800 1440,800 Z" 
          fill="url(#gradient2)"
          style={{
            animation: 'wave2 10s ease-in-out infinite reverse',
            transformOrigin: 'center',
          }}
        />

        {/* Wave Layer 3 */}
        <path 
          d="M0,800 C100,780 200,760 300,770 C400,780 500,800 600,790 C700,780 800,760 900,770 C1000,780 1100,800 1200,790 C1300,780 1400,760 1440,770 L1440,800 Z" 
          fill="url(#gradient3)"
          style={{
            animation: 'wave3 12s ease-in-out infinite',
            transformOrigin: 'center',
          }}
        />
      </svg>
      
      {/* Inline styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(1deg); }
          66% { transform: translateY(-20px) rotate(-1deg); }
        }

        @keyframes wave1 {
          0%, 100% { 
            d: path("M0,800 C120,750 240,700 360,720 C480,740 600,800 720,780 C840,760 960,680 1080,700 C1200,720 1320,800 1440,760 L1440,800 Z");
          }
          50% { 
            d: path("M0,800 C120,780 240,760 360,750 C480,740 600,720 720,730 C840,740 960,780 1080,770 C1200,760 1320,740 1440,750 L1440,800 Z");
          }
        }

        @keyframes wave2 {
          0%, 100% { 
            d: path("M0,800 C150,730 300,660 450,680 C600,700 750,770 900,750 C1050,730 1200,660 1350,680 C1440,690 1440,800 1440,800 Z");
          }
          50% { 
            d: path("M0,800 C150,760 300,720 450,710 C600,700 750,730 900,720 C1050,710 1200,750 1350,740 C1440,730 1440,800 1440,800 Z");
          }
        }

        @keyframes wave3 {
          0%, 100% { 
            d: path("M0,800 C100,780 200,760 300,770 C400,780 500,800 600,790 C700,780 800,760 900,770 C1000,780 1100,800 1200,790 C1300,780 1400,760 1440,770 L1440,800 Z");
          }
          50% { 
            d: path("M0,800 C100,790 200,780 300,785 C400,790 500,810 600,800 C700,790 800,770 900,780 C1000,790 1100,810 1200,800 C1300,790 1400,770 1440,780 L1440,800 Z");
          }
        }
      `}</style>
    </Box>
  )
}

export default BackgroundWaves
