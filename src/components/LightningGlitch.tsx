
import { useEffect, useState } from 'react';

interface LightningPath {
  id: string;
  path: string;
  delay: number;
  duration: number;
  intensity: 'small' | 'medium' | 'large';
}

const LightningGlitch = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentGlitch, setCurrentGlitch] = useState<number>(0);

  // Lightning path data for different strike patterns
  const lightningPaths: LightningPath[] = [
    {
      id: 'lightning-1',
      path: 'M 50 0 L 200 150 L 180 300 L 350 450 L 300 600 L 500 750 L 450 900',
      delay: 500,
      duration: 400,
      intensity: 'small'
    },
    {
      id: 'lightning-2', 
      path: 'M 800 0 L 650 200 L 700 400 L 500 600 L 550 800 L 350 1000',
      delay: 1800,
      duration: 600,
      intensity: 'medium'
    },
    {
      id: 'lightning-3',
      path: 'M 100 0 L 300 250 L 250 450 L 500 650 L 450 850 L 700 1000 M 400 300 L 600 450 L 550 600',
      delay: 3500,
      duration: 700,
      intensity: 'large'
    }
  ];

  useEffect(() => {
    const triggerGlitch = (glitchIndex: number) => {
      if (glitchIndex >= lightningPaths.length) return;
      
      const glitch = lightningPaths[glitchIndex];
      
      setTimeout(() => {
        setCurrentGlitch(glitchIndex);
        setIsActive(true);
        
        setTimeout(() => {
          setIsActive(false);
          // Trigger next glitch
          triggerGlitch(glitchIndex + 1);
        }, glitch.duration);
      }, glitch.delay);
    };

    // Start the glitch sequence
    triggerGlitch(0);
  }, []);

  const currentPath = lightningPaths[currentGlitch];

  return (
    <>
      {/* Glitch CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes lightning-strike {
            0% {
              opacity: 0;
              transform: scale(0.8) skewX(0deg);
              filter: blur(3px);
            }
            10% {
              opacity: 1;
              transform: scale(1.2) skewX(-2deg);
              filter: blur(0px);
            }
            25% {
              opacity: 0.8;
              transform: scale(1) skewX(1deg);
              filter: blur(1px);
            }
            50% {
              opacity: 1;
              transform: scale(1.3) skewX(-1deg);
              filter: blur(0px);
            }
            75% {
              opacity: 0.6;
              transform: scale(0.9) skewX(2deg);
              filter: blur(2px);
            }
            100% {
              opacity: 0;
              transform: scale(0.7) skewX(0deg);
              filter: blur(4px);
            }
          }

          @keyframes screen-tear {
            0% {
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
              transform: translateX(0px) skewX(0deg);
            }
            15% {
              clip-path: polygon(0% 0%, 95% 5%, 98% 95%, 3% 100%);
              transform: translateX(-5px) skewX(-2deg);
            }
            35% {
              clip-path: polygon(5% 0%, 100% 0%, 97% 100%, 0% 95%);
              transform: translateX(3px) skewX(1deg);
            }
            60% {
              clip-path: polygon(0% 5%, 98% 0%, 100% 98%, 2% 100%);
              transform: translateX(-2px) skewX(-1deg);
            }
            85% {
              clip-path: polygon(2% 0%, 100% 3%, 98% 100%, 0% 97%);
              transform: translateX(1px) skewX(0.5deg);
            }
            100% {
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
              transform: translateX(0px) skewX(0deg);
            }
          }

          @keyframes voltage-pulse {
            0%, 100% {
              opacity: 0;
              transform: scale(1);
              filter: brightness(1);
            }
            20% {
              opacity: 0.8;
              transform: scale(1.05);
              filter: brightness(2);
            }
            40% {
              opacity: 0.4;
              transform: scale(0.95);
              filter: brightness(0.8);
            }
            60% {
              opacity: 0.9;
              transform: scale(1.08);
              filter: brightness(2.5);
            }
            80% {
              opacity: 0.3;
              transform: scale(0.98);
              filter: brightness(1.2);
            }
          }

          @keyframes digital-fracture {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            10% {
              transform: translateY(-10px) scale(1.1);
              opacity: 0.8;
            }
            30% {
              transform: translateY(5px) scale(0.9);
              opacity: 1;
            }
            50% {
              transform: translateY(-3px) scale(1.05);
              opacity: 0.7;
            }
            70% {
              transform: translateY(2px) scale(0.95);
              opacity: 0.9;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
          }

          .lightning-active {
            animation: lightning-strike var(--duration) ease-out;
          }

          .screen-glitch {
            animation: screen-tear var(--duration) ease-out;
          }

          .voltage-effect {
            animation: voltage-pulse var(--duration) ease-out;
          }

          .fracture-effect {
            animation: digital-fracture var(--duration) ease-out;
          }
        `
      }} />

      {/* Lightning Glitch Container */}
      <div 
        className={`fixed inset-0 pointer-events-none z-20 ${isActive ? 'lightning-active' : ''}`}
        style={{
          '--duration': `${currentPath?.duration || 500}ms`
        } as React.CSSProperties}
      >
        {/* Main Lightning SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          style={{
            mixBlendMode: 'screen',
            filter: isActive ? 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))' : 'none'
          }}
        >
          <defs>
            {/* Lightning Gradient */}
            <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#c0c0c0" stopOpacity="1" />
              <stop offset="50%" stopColor="#00bfff" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#c0c0c0" stopOpacity="0.6" />
            </linearGradient>
            
            {/* Glow Filter */}
            <filter id="lightningGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Noise Filter */}
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
              <feDisplacementMap in="SourceGraphic" scale="8"/>
            </filter>
          </defs>

          {/* Main Lightning Path */}
          {isActive && currentPath && (
            <path
              d={currentPath.path}
              stroke="url(#lightningGradient)"
              strokeWidth={currentPath.intensity === 'large' ? '6' : currentPath.intensity === 'medium' ? '4' : '2'}
              fill="none"
              filter="url(#lightningGlow)"
              style={{
                strokeDasharray: '10 5',
                strokeDashoffset: isActive ? '0' : '100',
                transition: `stroke-dashoffset ${currentPath.duration}ms ease-out`
              }}
            />
          )}

          {/* Lightning Branches */}
          {isActive && (
            <>
              <path
                d="M 300 200 L 250 300 L 280 400"
                stroke="#ffffff"
                strokeWidth="1"
                fill="none"
                opacity="0.7"
                filter="url(#lightningGlow)"
              />
              <path
                d="M 600 300 L 650 400 L 620 500"
                stroke="#c0c0c0"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
                filter="url(#lightningGlow)"
              />
            </>
          )}
        </svg>

        {/* Screen Tear Effect */}
        <div
          className={`absolute inset-0 bg-white/5 ${isActive ? 'screen-glitch' : ''}`}
          style={{
            mixBlendMode: 'overlay',
            '--duration': `${currentPath?.duration || 500}ms`
          } as React.CSSProperties}
        />

        {/* Voltage Grid Overlay */}
        <div
          className={`absolute inset-0 ${isActive ? 'voltage-effect' : ''}`}
          style={{
            background: `
              linear-gradient(90deg, transparent 49%, rgba(255, 255, 255, 0.1) 50%, transparent 51%),
              linear-gradient(0deg, transparent 49%, rgba(192, 192, 192, 0.05) 50%, transparent 51%)
            `,
            backgroundSize: '50px 50px',
            mixBlendMode: 'lighten',
            '--duration': `${currentPath?.duration || 500}ms`
          } as React.CSSProperties}
        />

        {/* Digital Fracture Lines */}
        {isActive && (
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`fracture-${i}`}
                className="absolute fracture-effect"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 3) * 30}%`,
                  width: '2px',
                  height: `${50 + Math.random() * 100}px`,
                  background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.6), transparent)',
                  transform: `rotate(${-15 + Math.random() * 30}deg)`,
                  mixBlendMode: 'screen',
                  '--duration': `${currentPath?.duration || 500}ms`,
                  animationDelay: `${i * 50}ms`
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}

        {/* Glow Trail Effect */}
        {isActive && (
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at ${50 + Math.sin(Date.now() / 1000) * 20}% ${50 + Math.cos(Date.now() / 1000) * 20}%, 
                           rgba(255, 255, 255, 0.2) 0%, 
                           rgba(0, 191, 255, 0.1) 30%, 
                           transparent 70%)`,
              mixBlendMode: 'screen',
              animation: `voltage-pulse ${currentPath?.duration || 500}ms ease-out`
            }}
          />
        )}
      </div>
    </>
  );
};

export default LightningGlitch;
