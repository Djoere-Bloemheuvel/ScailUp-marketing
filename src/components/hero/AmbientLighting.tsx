
import React from 'react';

const AmbientLighting = () => {
  return (
    <>
      {/* Ambient Corner Lighting Effects - Behind glass container but above background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
        {/* Top-left ambient glow - Cyan/Blue - More visible */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-80 md:opacity-90 ambient-glow-cyan"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(34, 211, 238, 0.25) 30%, rgba(14, 165, 233, 0.15) 50%, rgba(6, 182, 212, 0.08) 70%, transparent 85%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Bottom-right ambient glow - Purple/Violet - More visible */}
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full opacity-75 md:opacity-85 ambient-glow-violet"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(147, 51, 234, 0.22) 35%, rgba(109, 40, 217, 0.12) 55%, rgba(124, 58, 237, 0.06) 75%, transparent 90%)',
            filter: 'blur(70px)',
          }}
        />
        
        {/* Additional accent glow - Teal (center-right) - More visible */}
        <div 
          className="absolute top-1/3 -right-1/6 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full opacity-65 md:opacity-75 ambient-glow-teal"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, rgba(13, 148, 136, 0.18) 40%, rgba(15, 118, 110, 0.1) 60%, rgba(17, 94, 89, 0.05) 80%, transparent 95%)',
            filter: 'blur(55px)',
          }}
        />

        {/* Additional mid-left glow - Emerald for balance */}
        <div 
          className="absolute top-2/3 -left-1/8 w-72 h-72 sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] rounded-full opacity-60 md:opacity-70 ambient-glow-emerald"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.15) 40%, rgba(6, 120, 95, 0.08) 65%, rgba(4, 105, 86, 0.04) 80%, transparent 95%)',
            filter: 'blur(65px)',
          }}
        />

        {/* Subtle grain texture layer */}
        <div 
          className="absolute inset-0 opacity-[0.06] ambient-grain"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.25) 0%, transparent 2%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 2%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.15) 0%, transparent 1.5%),
              radial-gradient(circle at 60% 90%, rgba(255, 255, 255, 0.12) 0%, transparent 1.5%),
              radial-gradient(circle at 90% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 1%),
              radial-gradient(circle at 10% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 1%)
            `,
            backgroundSize: '400px 400px, 300px 300px, 500px 500px, 350px 350px, 450px 450px, 280px 280px',
          }}
        />

        {/* Starfield particle layer */}
        <div 
          className="absolute inset-0 opacity-[0.08] ambient-starfield"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 1), transparent),
              radial-gradient(1px 1px at 40% 70%, rgba(34, 211, 238, 0.9), transparent),
              radial-gradient(1px 1px at 60% 20%, rgba(255, 255, 255, 0.8), transparent),
              radial-gradient(1px 1px at 80% 80%, rgba(139, 92, 246, 0.7), transparent),
              radial-gradient(1px 1px at 10% 60%, rgba(20, 184, 166, 0.6), transparent),
              radial-gradient(1px 1px at 90% 40%, rgba(255, 255, 255, 0.9), transparent)
            `,
            backgroundSize: '550px 550px, 350px 350px, 450px 450px, 500px 500px, 400px 400px, 600px 600px',
          }}
        />
      </div>

      {/* Ambient Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ambient-glow-cyan {
            0%, 100% { 
              opacity: 0.7;
              transform: scale(1) rotate(0deg);
              filter: blur(60px);
            }
            33% { 
              opacity: 0.9;
              transform: scale(1.1) rotate(2deg);
              filter: blur(65px);
            }
            66% { 
              opacity: 0.6;
              transform: scale(0.95) rotate(-1deg);
              filter: blur(55px);
            }
          }

          @keyframes ambient-glow-violet {
            0%, 100% { 
              opacity: 0.65;
              transform: scale(1) rotate(0deg);
              filter: blur(70px);
            }
            50% { 
              opacity: 0.85;
              transform: scale(1.15) rotate(-3deg);
              filter: blur(75px);
            }
          }

          @keyframes ambient-glow-teal {
            0%, 100% { 
              opacity: 0.55;
              transform: scale(1) rotate(0deg);
              filter: blur(55px);
            }
            40% { 
              opacity: 0.75;
              transform: scale(1.08) rotate(1deg);
              filter: blur(60px);
            }
            80% { 
              opacity: 0.5;
              transform: scale(0.98) rotate(-2deg);
              filter: blur(50px);
            }
          }

          @keyframes ambient-glow-emerald {
            0%, 100% { 
              opacity: 0.5;
              transform: scale(1) rotate(0deg);
              filter: blur(65px);
            }
            60% { 
              opacity: 0.7;
              transform: scale(1.05) rotate(-1deg);
              filter: blur(70px);
            }
          }

          @keyframes ambient-grain {
            0%, 100% { 
              opacity: 0.05;
              transform: translateX(0) translateY(0);
            }
            25% { 
              opacity: 0.06;
              transform: translateX(-2px) translateY(-1px);
            }
            50% { 
              opacity: 0.04;
              transform: translateX(1px) translateY(-2px);
            }
            75% { 
              opacity: 0.07;
              transform: translateX(-1px) translateY(1px);
            }
          }

          @keyframes ambient-starfield {
            0%, 100% { 
              opacity: 0.07;
              transform: rotate(0deg);
            }
            50% { 
              opacity: 0.05;
              transform: rotate(0.5deg);
            }
          }

          .ambient-glow-cyan {
            animation: ambient-glow-cyan 14s ease-in-out infinite;
            will-change: transform, opacity, filter;
          }

          .ambient-glow-violet {
            animation: ambient-glow-violet 16s ease-in-out infinite;
            animation-delay: -5s;
            will-change: transform, opacity, filter;
          }

          .ambient-glow-teal {
            animation: ambient-glow-teal 12s ease-in-out infinite;
            animation-delay: -8s;
            will-change: transform, opacity, filter;
          }

          .ambient-glow-emerald {
            animation: ambient-glow-emerald 18s ease-in-out infinite;
            animation-delay: -12s;
            will-change: transform, opacity, filter;
          }

          .ambient-grain {
            animation: ambient-grain 25s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .ambient-starfield {
            animation: ambient-starfield 30s ease-in-out infinite;
            will-change: transform, opacity;
          }

          /* Mobile optimizations - Keep effects visible */
          @media (max-width: 768px) {
            .ambient-glow-cyan,
            .ambient-glow-violet,
            .ambient-glow-teal,
            .ambient-glow-emerald {
              animation-duration: 20s;
            }
            
            .ambient-glow-cyan {
              opacity: 0.6 !important;
            }
            
            .ambient-glow-violet {
              opacity: 0.55 !important;
            }
            
            .ambient-glow-teal {
              opacity: 0.45 !important;
            }

            .ambient-glow-emerald {
              opacity: 0.4 !important;
            }

            .ambient-grain {
              opacity: 0.04 !important;
              animation-duration: 35s;
            }

            .ambient-starfield {
              opacity: 0.05 !important;
              animation-duration: 40s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .ambient-glow-cyan,
            .ambient-glow-violet,
            .ambient-glow-teal,
            .ambient-glow-emerald,
            .ambient-grain,
            .ambient-starfield {
              animation: none;
            }
          }

          /* Performance hint for browsers */
          .ambient-glow-cyan,
          .ambient-glow-violet,
          .ambient-glow-teal,
          .ambient-glow-emerald {
            transform: translateZ(0);
            backface-visibility: hidden;
          }
        `
      }} />
    </>
  );
};

export default AmbientLighting;
