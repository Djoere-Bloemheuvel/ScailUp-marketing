
import { useEffect, useState } from 'react';

interface CinematicGlassmorphicBackgroundProps {
  activeStep: number;
  totalSteps: number;
}

/**
 * Ultra-Premium Glassmorphic Background Revolution
 * - Multi-layered prismatic glassmorphism
 * - Dynamic reflection pools
 * - Volumetric lighting effects
 * - Color-breathing animations
 */
const CinematicGlassmorphicBackground = ({ activeStep, totalSteps }: CinematicGlassmorphicBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dynamic color intensity based on active step
  const getStepColorIntensity = () => {
    const colorMap = [
      { primary: '59, 130, 246', secondary: '34, 211, 238' }, // Blue/Cyan
      { primary: '139, 92, 246', secondary: '168, 85, 247' }, // Purple/Violet
      { primary: '52, 211, 153', secondary: '20, 184, 166' }, // Emerald/Teal
      { primary: '249, 115, 22', secondary: '251, 146, 60' }  // Orange/Amber
    ];
    
    return colorMap[(activeStep - 1) % colorMap.length] || colorMap[0];
  };

  const stepColors = getStepColorIntensity();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Multi-layered Background Foundation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-black" />
      
      {/* Neural Network Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px',
          animation: 'neural-grid-drift 60s linear infinite'
        }} />
      </div>

      {/* Prismatic Light Reflections */}
      <div className="absolute inset-0">
        {/* Primary Reflection Pool */}
        <div 
          className="absolute w-[120%] h-[120%] -top-10 -left-10 opacity-[0.08] blur-3xl"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(${stepColors.primary}, 0.25) 0%, 
                rgba(${stepColors.secondary}, 0.15) 35%, 
                transparent 70%
              )
            `,
            animation: 'prismatic-drift-1 45s ease-in-out infinite',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        
        {/* Secondary Reflection Pool */}
        <div 
          className="absolute w-[100%] h-[100%] opacity-[0.06] blur-2xl"
          style={{
            background: `
              radial-gradient(ellipse 600px 300px at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(${stepColors.secondary}, 0.2) 0%, 
                rgba(${stepColors.primary}, 0.1) 50%, 
                transparent 80%
              )
            `,
            animation: 'prismatic-drift-2 35s ease-in-out infinite reverse',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        />

        {/* Chromatic Aberration Layers */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-screen"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 0, 100, 0.1) 0%, transparent 50%
              ),
              radial-gradient(circle at ${mousePosition.x + 2}% ${mousePosition.y + 2}%, 
                rgba(0, 255, 200, 0.08) 0%, transparent 50%
              ),
              radial-gradient(circle at ${mousePosition.x - 2}% ${mousePosition.y - 2}%, 
                rgba(100, 100, 255, 0.06) 0%, transparent 50%
              )
            `,
            animation: 'chromatic-shift 25s ease-in-out infinite'
          }}
        />
      </div>

      {/* Volumetric Lighting Shafts */}
      <div className="absolute inset-0 opacity-[0.04]">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-full blur-sm"
            style={{
              left: `${15 + i * 15}%`,
              background: `linear-gradient(180deg, transparent 0%, rgba(${stepColors.primary}, 0.3) 50%, transparent 100%)`,
              animation: `volumetric-shaft-${i % 3 + 1} ${20 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
              transform: `rotateZ(${i * 3}deg) translateX(${Math.sin(i) * 20}px)`
            }}
          />
        ))}
      </div>

      {/* Glass Container Layers with Advanced Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[95%] h-[85vh] max-w-7xl">
          
          {/* Primary Glass Layer - Ultra Premium */}
          <div 
            className={`absolute inset-0 rounded-[2rem] transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.08) 0%, 
                  rgba(255, 255, 255, 0.02) 25%,
                  rgba(${stepColors.primary}, 0.03) 50%,
                  rgba(255, 255, 255, 0.01) 75%,
                  rgba(${stepColors.secondary}, 0.02) 100%
                ),
                radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(${stepColors.primary}, 0.08) 0%, transparent 70%
                )
              `,
              backdropFilter: 'blur(40px) saturate(150%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: `
                0 32px 120px rgba(0, 0, 0, 0.4),
                0 16px 60px rgba(${stepColors.primary}, 0.15),
                0 8px 32px rgba(${stepColors.secondary}, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                inset 0 -1px 0 rgba(255, 255, 255, 0.08),
                inset 0 0 60px rgba(${stepColors.primary}, 0.05)
              `,
              animation: 'glass-breathe 8s ease-in-out infinite'
            }}
          />

          {/* Secondary Glass Layer - Depth Enhancement */}
          <div 
            className="absolute inset-4 rounded-[1.5rem] opacity-60"
            style={{
              background: `
                linear-gradient(45deg, 
                  rgba(${stepColors.secondary}, 0.04) 0%, 
                  transparent 50%, 
                  rgba(${stepColors.primary}, 0.03) 100%
                )
              `,
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              animation: 'glass-secondary-pulse 12s ease-in-out infinite',
              animationDelay: '-2s'
            }}
          />

          {/* Edge Lighting System */}
          <div 
            className="absolute inset-0 rounded-[2rem]"
            style={{
              background: 'transparent',
              boxShadow: `
                0 0 40px rgba(${stepColors.primary}, 0.4),
                0 0 80px rgba(${stepColors.secondary}, 0.2),
                inset 0 0 1px rgba(${stepColors.primary}, 0.6)
              `,
              animation: 'edge-lighting-pulse 6s ease-in-out infinite'
            }}
          />

          {/* Particle System Overlay */}
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(${i % 2 === 0 ? stepColors.primary : stepColors.secondary}, 0.8)`,
                  animation: `particle-float-${i % 4 + 1} ${15 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  boxShadow: `0 0 4px rgba(${i % 2 === 0 ? stepColors.primary : stepColors.secondary}, 0.6)`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Scan Lines */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div 
          className="absolute h-px w-full top-1/3"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${stepColors.primary}, 0.8), transparent)`,
            animation: 'scan-line-horizontal 30s linear infinite'
          }}
        />
        <div 
          className="absolute w-px h-full left-2/3"
          style={{
            background: `linear-gradient(180deg, transparent, rgba(${stepColors.secondary}, 0.6), transparent)`,
            animation: 'scan-line-vertical 25s linear infinite'
          }}
        />
      </div>

      {/* Animation Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes neural-grid-drift {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(-10px, 5px); }
            66% { transform: translate(5px, -8px); }
          }

          @keyframes prismatic-drift-1 {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.08; }
            33% { transform: scale(1.1) rotate(1deg); opacity: 0.12; }
            66% { transform: scale(0.9) rotate(-1deg); opacity: 0.06; }
          }

          @keyframes prismatic-drift-2 {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.06; }
            50% { transform: scale(1.15) rotate(2deg); opacity: 0.1; }
          }

          @keyframes chromatic-shift {
            0%, 100% { transform: translate(0, 0); filter: hue-rotate(0deg); }
            25% { transform: translate(2px, -2px); filter: hue-rotate(90deg); }
            50% { transform: translate(-1px, 3px); filter: hue-rotate(180deg); }
            75% { transform: translate(-2px, -1px); filter: hue-rotate(270deg); }
          }

          @keyframes volumetric-shaft-1 {
            0%, 100% { transform: rotateZ(0deg) translateX(0px); opacity: 0.04; }
            50% { transform: rotateZ(2deg) translateX(10px); opacity: 0.08; }
          }

          @keyframes volumetric-shaft-2 {
            0%, 100% { transform: rotateZ(0deg) translateX(0px); opacity: 0.03; }
            50% { transform: rotateZ(-1deg) translateX(-8px); opacity: 0.06; }
          }

          @keyframes volumetric-shaft-3 {
            0%, 100% { transform: rotateZ(0deg) translateX(0px); opacity: 0.05; }
            50% { transform: rotateZ(1.5deg) translateX(12px); opacity: 0.09; }
          }

          @keyframes glass-breathe {
            0%, 100% { 
              backdrop-filter: blur(40px) saturate(150%);
              border-color: rgba(255, 255, 255, 0.12);
            }
            50% { 
              backdrop-filter: blur(45px) saturate(180%);
              border-color: rgba(255, 255, 255, 0.18);
            }
          }

          @keyframes glass-secondary-pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.005); }
          }

          @keyframes edge-lighting-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }

          @keyframes particle-float-1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(10px, -15px) scale(1.2); }
            66% { transform: translate(-8px, 10px) scale(0.8); }
          }

          @keyframes particle-float-2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-12px, -8px) scale(1.3); }
          }

          @keyframes particle-float-3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(15px, 5px) scale(0.9); }
            75% { transform: translate(-5px, -12px) scale(1.1); }
          }

          @keyframes particle-float-4 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            40% { transform: translate(-10px, 8px) scale(1.4); }
            80% { transform: translate(8px, -6px) scale(0.7); }
          }

          @keyframes scan-line-horizontal {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(200%); opacity: 0; }
          }

          @keyframes scan-line-vertical {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(200%); opacity: 0; }
          }

          /* Mobile Optimizations */
          @media (max-width: 768px) {
            @keyframes neural-grid-drift { animation-duration: 30s; }
            @keyframes prismatic-drift-1 { animation-duration: 20s; }
            @keyframes prismatic-drift-2 { animation-duration: 15s; }
          }

          @media (prefers-reduced-motion: reduce) {
            * { animation-duration: 0.01ms !important; }
          }
        `
      }} />
    </div>
  );
};

export default CinematicGlassmorphicBackground;
