
import React from 'react';

const AmbientLighting = () => {
  return (
    <>
      {/* Ambient Corner Lighting Effects - Updated with darker emerald/teal colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-left ambient glow - Darker Emerald */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-45 md:opacity-55 ambient-glow-emerald"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(5, 150, 105, 0.12) 30%, rgba(4, 120, 87, 0.06) 50%, rgba(6, 78, 59, 0.03) 70%, transparent 85%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Bottom-right ambient glow - Darker Teal */}
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full opacity-40 md:opacity-50 ambient-glow-teal"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(15, 118, 110, 0.10) 35%, rgba(8, 145, 178, 0.05) 55%, rgba(14, 116, 144, 0.02) 75%, transparent 90%)',
            filter: 'blur(90px)',
          }}
        />
        
        {/* Additional accent glow - Darker Slate/Teal blend */}
        <div 
          className="absolute top-1/3 -right-1/6 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full opacity-35 md:opacity-45 ambient-glow-blend"
          style={{
            background: 'radial-gradient(circle, rgba(71, 85, 105, 0.12) 0%, rgba(20, 184, 166, 0.08) 40%, rgba(15, 118, 110, 0.04) 60%, rgba(8, 145, 178, 0.02) 80%, transparent 95%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Subtle grain texture layer with darker tones */}
        <div 
          className="absolute inset-0 opacity-[0.015] ambient-grain"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 2%),
              radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.05) 0%, transparent 2%),
              radial-gradient(circle at 40% 40%, rgba(71, 85, 105, 0.04) 0%, transparent 1.5%),
              radial-gradient(circle at 60% 90%, rgba(255, 255, 255, 0.02) 0%, transparent 1.5%),
              radial-gradient(circle at 90% 60%, rgba(16, 185, 129, 0.03) 0%, transparent 1%),
              radial-gradient(circle at 10% 30%, rgba(20, 184, 166, 0.02) 0%, transparent 1%)
            `,
            backgroundSize: '400px 400px, 300px 300px, 500px 500px, 350px 350px, 450px 450px, 280px 280px',
          }}
        />

        {/* Starfield particle layer with darker green/teal tints */}
        <div 
          className="absolute inset-0 opacity-[0.02] ambient-starfield"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 30%, rgba(16, 185, 129, 0.4), transparent),
              radial-gradient(1px 1px at 40% 70%, rgba(20, 184, 166, 0.3), transparent),
              radial-gradient(1px 1px at 60% 20%, rgba(255, 255, 255, 0.25), transparent),
              radial-gradient(1px 1px at 80% 80%, rgba(71, 85, 105, 0.2), transparent),
              radial-gradient(1px 1px at 10% 60%, rgba(16, 185, 129, 0.15), transparent),
              radial-gradient(1px 1px at 90% 40%, rgba(20, 184, 166, 0.3), transparent)
            `,
            backgroundSize: '550px 550px, 350px 350px, 450px 450px, 500px 500px, 400px 400px, 600px 600px',
          }}
        />
      </div>

      {/* Ambient Animation Styles updated for darker colors */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ambient-glow-emerald {
            0%, 100% { 
              opacity: 0.45;
              transform: scale(1) rotate(0deg);
              filter: blur(80px);
            }
            33% { 
              opacity: 0.60;
              transform: scale(1.08) rotate(2deg);
              filter: blur(85px);
            }
            66% { 
              opacity: 0.35;
              transform: scale(0.95) rotate(-1deg);
              filter: blur(75px);
            }
          }

          @keyframes ambient-glow-teal {
            0%, 100% { 
              opacity: 0.40;
              transform: scale(1) rotate(0deg);
              filter: blur(90px);
            }
            50% { 
              opacity: 0.55;
              transform: scale(1.12) rotate(-3deg);
              filter: blur(95px);
            }
          }

          @keyframes ambient-glow-blend {
            0%, 100% { 
              opacity: 0.35;
              transform: scale(1) rotate(0deg);
              filter: blur(70px);
            }
            40% { 
              opacity: 0.50;
              transform: scale(1.05) rotate(1deg);
              filter: blur(75px);
            }
            80% { 
              opacity: 0.25;
              transform: scale(0.98) rotate(-2deg);
              filter: blur(65px);
            }
          }

          @keyframes ambient-grain {
            0%, 100% { 
              opacity: 0.015;
              transform: translateX(0) translateY(0);
            }
            25% { 
              opacity: 0.020;
              transform: translateX(-2px) translateY(-1px);
            }
            50% { 
              opacity: 0.010;
              transform: translateX(1px) translateY(-2px);
            }
            75% { 
              opacity: 0.025;
              transform: translateX(-1px) translateY(1px);
            }
          }

          @keyframes ambient-starfield {
            0%, 100% { 
              opacity: 0.02;
              transform: rotate(0deg);
            }
            50% { 
              opacity: 0.015;
              transform: rotate(0.5deg);
            }
          }

          .ambient-glow-emerald {
            animation: ambient-glow-emerald 14s ease-in-out infinite;
            will-change: transform, opacity, filter;
          }

          .ambient-glow-teal {
            animation: ambient-glow-teal 16s ease-in-out infinite;
            animation-delay: -5s;
            will-change: transform, opacity, filter;
          }

          .ambient-glow-blend {
            animation: ambient-glow-blend 12s ease-in-out infinite;
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

          /* Mobile optimizations - Further reduce complexity for darker theme */
          @media (max-width: 768px) {
            .ambient-glow-emerald,
            .ambient-glow-teal,
            .ambient-glow-blend {
              animation-duration: 20s;
            }
            
            .ambient-glow-emerald {
              opacity: 0.25 !important;
            }
            
            .ambient-glow-teal {
              opacity: 0.20 !important;
            }
            
            .ambient-glow-blend {
              opacity: 0.18 !important;
            }

            .ambient-grain {
              opacity: 0.008 !important;
              animation-duration: 35s;
            }

            .ambient-starfield {
              opacity: 0.01 !important;
              animation-duration: 40s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .ambient-glow-emerald,
            .ambient-glow-teal,
            .ambient-glow-blend,
            .ambient-grain,
            .ambient-starfield {
              animation: none;
            }
          }

          /* Performance hint for browsers */
          .ambient-glow-emerald,
          .ambient-glow-teal,
          .ambient-glow-blend {
            transform: translateZ(0);
            backface-visibility: hidden;
          }
        `
      }} />
    </>
  );
};

export default AmbientLighting;
