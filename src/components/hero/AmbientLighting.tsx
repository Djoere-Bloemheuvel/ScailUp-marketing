
import React from 'react';

const AmbientLighting = () => {
  return (
    <>
      {/* Ambient Corner Lighting Effects - Behind all content but above background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Top-left ambient glow - Cyan/Blue */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-40 md:opacity-50 ambient-glow-cyan"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, rgba(34, 211, 238, 0.1) 30%, rgba(14, 165, 233, 0.05) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Bottom-right ambient glow - Purple/Violet */}
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full opacity-35 md:opacity-45 ambient-glow-violet"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(147, 51, 234, 0.08) 35%, rgba(109, 40, 217, 0.04) 55%, transparent 75%)',
            filter: 'blur(90px)',
          }}
        />
        
        {/* Additional accent glow - Teal (center-right) */}
        <div 
          className="absolute top-1/3 -right-1/6 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full opacity-25 md:opacity-35 ambient-glow-teal"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, rgba(13, 148, 136, 0.06) 40%, rgba(15, 118, 110, 0.03) 60%, transparent 80%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Subtle grain texture layer */}
        <div 
          className="absolute inset-0 opacity-[0.03] ambient-grain"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 2%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.12) 0%, transparent 2%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.08) 0%, transparent 1.5%),
              radial-gradient(circle at 60% 90%, rgba(255, 255, 255, 0.06) 0%, transparent 1.5%),
              radial-gradient(circle at 90% 60%, rgba(255, 255, 255, 0.07) 0%, transparent 1%),
              radial-gradient(circle at 10% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 1%)
            `,
            backgroundSize: '400px 400px, 300px 300px, 500px 500px, 350px 350px, 450px 450px, 280px 280px',
          }}
        />

        {/* Starfield particle layer */}
        <div 
          className="absolute inset-0 opacity-[0.04] ambient-starfield"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 1), transparent),
              radial-gradient(1px 1px at 40% 70%, rgba(34, 211, 238, 0.8), transparent),
              radial-gradient(1px 1px at 60% 20%, rgba(255, 255, 255, 0.7), transparent),
              radial-gradient(1px 1px at 80% 80%, rgba(139, 92, 246, 0.6), transparent),
              radial-gradient(1px 1px at 10% 60%, rgba(20, 184, 166, 0.5), transparent),
              radial-gradient(1px 1px at 90% 40%, rgba(255, 255, 255, 0.8), transparent)
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
              opacity: 0.30;
              transform: scale(1) rotate(0deg);
              filter: blur(80px);
            }
            33% { 
              opacity: 0.45;
              transform: scale(1.08) rotate(2deg);
              filter: blur(85px);
            }
            66% { 
              opacity: 0.25;
              transform: scale(0.95) rotate(-1deg);
              filter: blur(75px);
            }
          }

          @keyframes ambient-glow-violet {
            0%, 100% { 
              opacity: 0.25;
              transform: scale(1) rotate(0deg);
              filter: blur(90px);
            }
            50% { 
              opacity: 0.40;
              transform: scale(1.12) rotate(-3deg);
              filter: blur(95px);
            }
          }

          @keyframes ambient-glow-teal {
            0%, 100% { 
              opacity: 0.20;
              transform: scale(1) rotate(0deg);
              filter: blur(70px);
            }
            40% { 
              opacity: 0.30;
              transform: scale(1.05) rotate(1deg);
              filter: blur(75px);
            }
            80% { 
              opacity: 0.15;
              transform: scale(0.98) rotate(-2deg);
              filter: blur(65px);
            }
          }

          @keyframes ambient-grain {
            0%, 100% { 
              opacity: 0.02;
              transform: translateX(0) translateY(0);
            }
            25% { 
              opacity: 0.025;
              transform: translateX(-2px) translateY(-1px);
            }
            50% { 
              opacity: 0.015;
              transform: translateX(1px) translateY(-2px);
            }
            75% { 
              opacity: 0.03;
              transform: translateX(-1px) translateY(1px);
            }
          }

          @keyframes ambient-starfield {
            0%, 100% { 
              opacity: 0.03;
              transform: rotate(0deg);
            }
            50% { 
              opacity: 0.02;
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

          .ambient-grain {
            animation: ambient-grain 25s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .ambient-starfield {
            animation: ambient-starfield 30s ease-in-out infinite;
            will-change: transform, opacity;
          }

          /* Mobile optimizations - Reduce complexity and animation frequency */
          @media (max-width: 768px) {
            .ambient-glow-cyan,
            .ambient-glow-violet,
            .ambient-glow-teal {
              animation-duration: 20s;
            }
            
            .ambient-glow-cyan {
              opacity: 0.15 !important;
            }
            
            .ambient-glow-violet {
              opacity: 0.12 !important;
            }
            
            .ambient-glow-teal {
              opacity: 0.10 !important;
            }

            .ambient-grain {
              opacity: 0.01 !important;
              animation-duration: 35s;
            }

            .ambient-starfield {
              opacity: 0.015 !important;
              animation-duration: 40s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .ambient-glow-cyan,
            .ambient-glow-violet,
            .ambient-glow-teal,
            .ambient-grain,
            .ambient-starfield {
              animation: none;
            }
          }

          /* Performance hint for browsers */
          .ambient-glow-cyan,
          .ambient-glow-violet,
          .ambient-glow-teal {
            transform: translateZ(0);
            backface-visibility: hidden;
          }
        `
      }} />
    </>
  );
};

export default AmbientLighting;
