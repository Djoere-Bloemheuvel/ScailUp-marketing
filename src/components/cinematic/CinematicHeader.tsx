
import { useState, useEffect } from 'react';
import { Play, Pause, Sparkles, Zap } from 'lucide-react';

interface CinematicHeaderProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  activeStep: number;
  totalSteps: number;
}

/**
 * Apple-Surpassing Cinematic Header
 * - Ultra-premium typography with text morphing
 * - Dynamic color orchestration
 * - Floating statistics with depth
 * - Interactive controls with magnetic effects
 */
const CinematicHeader = ({ isPlaying, onTogglePlay, activeStep, totalSteps }: CinematicHeaderProps) => {
  const [textMorphPhase, setTextMorphPhase] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Text morphing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTextMorphPhase(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dynamic color based on active step
  const getStepColors = () => {
    const colorMaps = [
      { primary: '59, 130, 246', secondary: '34, 211, 238' },
      { primary: '139, 92, 246', secondary: '168, 85, 247' },
      { primary: '52, 211, 153', secondary: '20, 184, 166' },
      { primary: '249, 115, 22', secondary: '251, 146, 60' }
    ];
    return colorMaps[(activeStep - 1) % colorMaps.length];
  };

  const stepColors = getStepColors();

  const morphingTexts = [
    "In drie heldere stappen van idee naar impact.",
    "Van gesprek tot werkende oplossing binnen weken.",
    "Innovatie die jouw bedrijf transformeert."
  ];

  return (
    <header className="text-center mb-32 lg:mb-40 relative">
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-[0.03] blur-3xl"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            background: `radial-gradient(circle, rgba(${stepColors.primary}, 0.4) 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            animation: 'header-orb-drift 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-[0.02] blur-2xl"
          style={{
            right: `${mousePosition.x * 0.3}%`,
            bottom: `${mousePosition.y * 0.3}%`,
            background: `radial-gradient(circle, rgba(${stepColors.secondary}, 0.3) 0%, transparent 70%)`,
            animation: 'header-orb-drift 15s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Status Indicator */}
        <div className="inline-flex items-center px-6 py-3 rounded-2xl backdrop-blur-sm mb-12 transition-all duration-700 hover:scale-105">
          <div 
            className="w-3 h-3 rounded-full mr-4 animate-pulse"
            style={{
              background: `radial-gradient(circle, rgba(${stepColors.primary}, 1) 0%, rgba(${stepColors.secondary}, 0.8) 70%)`,
              boxShadow: `0 0 15px rgba(${stepColors.primary}, 0.8)`
            }}
          />
          <span 
            className="font-medium tracking-wide text-lg"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(${stepColors.primary}, 0.8) 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Onze Revolutionary Werkwijze
          </span>
          <Sparkles className="w-5 h-5 ml-3 text-white/60" />
        </div>
        
        {/* Ultra-Large Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter mb-12 relative">
          <div className="block mb-4">
            <span 
              className="inline-block transition-all duration-1000"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(255,255,255,0.1)'
              }}
            >
              In drie heldere
            </span>
          </div>
          
          <div className="block mb-4">
            <span 
              className="inline-block transition-all duration-1000 relative"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255,255,255,1) 0%, 
                  rgba(${stepColors.primary}, 1) 30%, 
                  rgba(${stepColors.secondary}, 0.9) 70%, 
                  rgba(255,255,255,1) 100%
                )`,
                backgroundSize: '300% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'cinematic-text-flow 8s ease-in-out infinite'
              }}
            >
              stappen van idee
              
              {/* Floating accent particles */}
              <div className="absolute -top-4 -right-4 w-2 h-2 rounded-full opacity-60"
                style={{
                  background: `rgba(${stepColors.primary}, 0.8)`,
                  animation: 'text-particle-float-1 6s ease-in-out infinite',
                  boxShadow: `0 0 8px rgba(${stepColors.primary}, 0.6)`
                }}
              />
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 rounded-full opacity-40"
                style={{
                  background: `rgba(${stepColors.secondary}, 0.8)`,
                  animation: 'text-particle-float-2 5s ease-in-out infinite',
                  boxShadow: `0 0 6px rgba(${stepColors.secondary}, 0.6)`
                }}
              />
            </span>
          </div>
          
          <div className="block">
            <span 
              className="inline-block transition-all duration-1000"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              naar impact.
            </span>
          </div>

          {/* Background text shadow effect */}
          <div 
            className="absolute inset-0 -z-10 opacity-[0.02] blur-lg"
            style={{
              background: `linear-gradient(135deg, rgba(${stepColors.primary}, 1) 0%, rgba(${stepColors.secondary}, 1) 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            In drie heldere stappen van idee naar impact.
          </div>
        </h1>

        {/* Morphing Subtitle */}
        <div className="relative mb-16 h-20 flex items-center justify-center">
          <p 
            key={textMorphPhase}
            className="text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto font-light leading-relaxed tracking-wide absolute inset-0 flex items-center justify-center transition-all duration-1000"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              opacity: 1,
              transform: 'translateY(0px)',
              animation: 'subtitle-morph 12s ease-in-out infinite'
            }}
          >
            {morphingTexts[textMorphPhase]}
          </p>
        </div>

        {/* Interactive Control Panel */}
        <div className="flex items-center justify-center space-x-8 mb-20">
          {/* Play/Pause Control */}
          <button
            onClick={onTogglePlay}
            className="group relative inline-flex items-center px-10 py-5 rounded-2xl backdrop-blur-sm transition-all duration-700 hover:scale-105"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.06) 0%, 
                  rgba(${stepColors.primary}, 0.08) 50%, 
                  rgba(255, 255, 255, 0.04) 100%
                )
              `,
              border: `1px solid rgba(${stepColors.primary}, 0.2)`,
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(${stepColors.primary}, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 mr-4 text-white transition-all duration-300 group-hover:scale-110" />
            ) : (
              <Play className="w-6 h-6 mr-4 text-white transition-all duration-300 group-hover:scale-110" />
            )}
            <span className="text-white font-medium text-lg tracking-wide">
              {isPlaying ? 'Pauzeer Experience' : 'Start Interactive Journey'}
            </span>
            
            {/* Button glow effect */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              style={{
                background: `linear-gradient(135deg, rgba(${stepColors.primary}, 0.1) 0%, rgba(${stepColors.secondary}, 0.08) 100%)`,
                filter: 'blur(20px)'
              }}
            />
          </button>

          {/* Progress Indicator */}
          <div className="flex items-center space-x-4 px-6 py-3 rounded-xl backdrop-blur-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <Zap className="w-5 h-5 text-white/60" />
            <span className="text-white/60 text-sm font-medium">
              Stap {activeStep} van {totalSteps}
            </span>
            
            {/* Mini progress bar */}
            <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${(activeStep / totalSteps) * 100}%`,
                  background: `linear-gradient(90deg, rgba(${stepColors.primary}, 0.8) 0%, rgba(${stepColors.secondary}, 0.6) 100%)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Floating Statistics with 3D Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {[
            { value: "72h", label: "Eerste prototype klaar", delay: "0s" },
            { value: "100%", label: "Tevredenheidsgarantie", delay: "0.2s" },
            { value: "24/7", label: "Support na oplevering", delay: "0.4s" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer transition-all duration-700 hover:scale-110"
              style={{ animationDelay: stat.delay }}
            >
              <div 
                className="relative inline-block p-8 rounded-2xl backdrop-blur-sm mb-4 transition-all duration-700"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.04) 0%, 
                      rgba(${stepColors.primary}, 0.06) 50%, 
                      rgba(255, 255, 255, 0.02) 100%
                    )
                  `,
                  border: `1px solid rgba(${stepColors.primary}, 0.15)`,
                  boxShadow: `
                    0 20px 40px rgba(0, 0, 0, 0.2),
                    0 0 20px rgba(${stepColors.primary}, 0.1)
                  `,
                  transform: 'translateZ(0)'
                }}
              >
                <div 
                  className="text-6xl lg:text-7xl font-black mb-2 transition-all duration-700"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(255,255,255,1) 0%, 
                      rgba(${stepColors.primary}, 0.9) 50%, 
                      rgba(255,255,255,1) 100%
                    )`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: `0 0 30px rgba(${stepColors.primary}, 0.3)`
                  }}
                >
                  {stat.value}
                </div>
                
                {/* Floating particles around stats */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 4 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full opacity-40 group-hover:opacity-80"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        background: `rgba(${stepColors.primary}, 0.8)`,
                        animation: `stat-particle-${i % 3 + 1} ${3 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random()}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div 
                className="text-white/40 text-lg lg:text-xl font-light tracking-wide group-hover:text-white/70 transition-colors duration-700"
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes header-orb-drift {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            33% { transform: translate(-45%, -55%) scale(1.1); }
            66% { transform: translate(-55%, -45%) scale(0.9); }
          }

          @keyframes cinematic-text-flow {
            0%, 100% { background-position: 0% 0%; }
            50% { background-position: 100% 0%; }
          }

          @keyframes text-particle-float-1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
            33% { transform: translate(-8px, -10px) rotate(120deg); opacity: 1; }
            66% { transform: translate(4px, -6px) rotate(240deg); opacity: 0.8; }
          }

          @keyframes text-particle-float-2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
            50% { transform: translate(6px, -8px) rotate(180deg); opacity: 1; }
          }

          @keyframes subtitle-morph {
            0%, 33% { opacity: 1; transform: translateY(0px); }
            36% { opacity: 0; transform: translateY(-20px); }
            64% { opacity: 0; transform: translateY(20px); }
            67%, 100% { opacity: 1; transform: translateY(0px); }
          }

          @keyframes stat-particle-1 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
            50% { transform: translate(-6px, -8px) scale(1.5); opacity: 0.8; }
          }

          @keyframes stat-particle-2 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
            50% { transform: translate(8px, -4px) scale(1.2); opacity: 0.9; }
          }

          @keyframes stat-particle-3 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
            50% { transform: translate(-4px, 6px) scale(1.3); opacity: 0.7; }
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            @keyframes text-particle-float-1,
            @keyframes text-particle-float-2 {
              0%, 100% { transform: translate(0, 0); opacity: 0.3; }
              50% { transform: translate(-2px, -4px); opacity: 0.6; }
            }
          }
        `
      }} />
    </header>
  );
};

export default CinematicHeader;
