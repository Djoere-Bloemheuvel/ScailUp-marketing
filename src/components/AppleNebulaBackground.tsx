
import { useEffect, useRef } from 'react';

const AppleNebulaBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating stardust particles
    const createStarDust = (size: string, position: { x: string; y: string }, opacity: number, duration: number, color: string) => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full blur-[0.5px]';
      particle.style.width = size;
      particle.style.height = size;
      particle.style.left = position.x;
      particle.style.top = position.y;
      particle.style.background = color;
      particle.style.animation = `nebulaFloat ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * duration}s`;
      particle.style.opacity = opacity.toString();
      container.appendChild(particle);
      return particle;
    };

    // Create nebula-like particles
    const particles = [
      // Micro stardust
      createStarDust('1px', { x: '15%', y: '25%' }, 0.6, 12, 'rgba(255,255,255,0.8)'),
      createStarDust('1px', { x: '85%', y: '15%' }, 0.4, 15, 'rgba(59,130,246,0.6)'),
      createStarDust('1px', { x: '25%', y: '75%' }, 0.7, 10, 'rgba(255,255,255,0.9)'),
      createStarDust('1px', { x: '75%', y: '85%' }, 0.3, 18, 'rgba(147,51,234,0.5)'),
      createStarDust('1px', { x: '45%', y: '35%' }, 0.5, 14, 'rgba(236,72,153,0.4)'),
      createStarDust('1px', { x: '65%', y: '55%' }, 0.8, 11, 'rgba(255,255,255,0.7)'),
      createStarDust('1px', { x: '10%', y: '60%' }, 0.4, 16, 'rgba(6,182,212,0.6)'),
      createStarDust('1px', { x: '90%', y: '40%' }, 0.6, 13, 'rgba(255,255,255,0.5)'),
      
      // Larger nebula dots
      createStarDust('2px', { x: '30%', y: '20%' }, 0.2, 20, 'rgba(59,130,246,0.3)'),
      createStarDust('2px', { x: '70%', y: '70%' }, 0.15, 22, 'rgba(147,51,234,0.25)'),
      createStarDust('2px', { x: '50%', y: '90%' }, 0.25, 17, 'rgba(236,72,153,0.2)'),
    ];

    return () => {
      particles.forEach(particle => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Stardust container */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none opacity-40" />
      
      {/* Subtle gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 pointer-events-none" />
      
      {/* Ambient nebula clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-blue-500/10 to-transparent"
          style={{
            top: '10%',
            left: '20%',
            animation: 'nebulaCloud 25s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-purple-500/8 to-transparent"
          style={{
            top: '60%',
            right: '15%',
            animation: 'nebulaCloud 30s ease-in-out infinite reverse',
            animationDelay: '10s'
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-pink-500/6 to-transparent"
          style={{
            bottom: '20%',
            left: '60%',
            animation: 'nebulaCloud 35s ease-in-out infinite',
            animationDelay: '15s'
          }}
        />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes nebulaFloat {
            0%, 100% { 
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0.3;
            }
            33% { 
              transform: translateY(-10px) translateX(5px) scale(1.1);
              opacity: 0.8;
            }
            66% { 
              transform: translateY(-5px) translateX(-8px) scale(0.9);
              opacity: 0.6;
            }
          }
          
          @keyframes nebulaCloud {
            0%, 100% { 
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0.2;
            }
            50% { 
              transform: translateY(-20px) translateX(15px) scale(1.1);
              opacity: 0.15;
            }
          }
        `
      }} />
    </>
  );
};

export default AppleNebulaBackground;
