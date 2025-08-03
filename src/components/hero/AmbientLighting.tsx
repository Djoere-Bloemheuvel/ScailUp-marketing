
import React from 'react';

const AmbientLighting = () => {
  return (
    <>
      {/* Ambient Corner Lighting Effects - Only top corners, positioned far from container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-left ambient glow - Positioned far from container */}
        <div 
          className="absolute -top-1/3 -left-1/3 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-40 md:opacity-50 ambient-glow-top-left"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.20) 0%, rgba(37, 99, 235, 0.15) 30%, rgba(29, 78, 216, 0.08) 50%, rgba(30, 64, 175, 0.04) 70%, transparent 85%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* Top-right ambient glow - Positioned far from container */}
        <div 
          className="absolute -top-1/3 -right-1/3 w-80 h-80 sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full opacity-35 md:opacity-45 ambient-glow-top-right"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(79, 70, 229, 0.12) 35%, rgba(67, 56, 202, 0.06) 55%, rgba(55, 48, 163, 0.03) 75%, transparent 90%)',
            filter: 'blur(120px)',
          }}
        />

        {/* Subtle grain texture layer */}
        <div 
          className="absolute inset-0 opacity-[0.015] ambient-grain"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 2%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.06) 0%, transparent 2%),
              radial-gradient(circle at 40% 10%, rgba(255, 255, 255, 0.04) 0%, transparent 1.5%),
              radial-gradient(circle at 60% 15%, rgba(255, 255, 255, 0.03) 0%, transparent 1.5%),
              radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.04) 0%, transparent 1%),
              radial-gradient(circle at 10% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 1%)
            `,
            backgroundSize: '400px 400px, 300px 300px, 500px 500px, 350px 350px, 450px 450px, 280px 280px',
          }}
        />

        {/* Minimal starfield particle layer - only in top area */}
        <div 
          className="absolute inset-0 opacity-[0.02] ambient-starfield"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 20%, rgba(255, 255, 255, 0.6), transparent),
              radial-gradient(1px 1px at 40% 15%, rgba(255, 255, 255, 0.4), transparent),
              radial-gradient(1px 1px at 60% 10%, rgba(255, 255, 255, 0.5), transparent),
              radial-gradient(1px 1px at 80% 25%, rgba(255, 255, 255, 0.3), transparent),
              radial-gradient(1px 1px at 10% 30%, rgba(255, 255, 255, 0.2), transparent),
              radial-gradient(1px 1px at 90% 20%, rgba(255, 255, 255, 0.4), transparent)
            `,
            backgroundSize: '550px 550px, 350px 350px, 450px 450px, 500px 500px, 400px 400px, 600px 600px',
          }}
        />
      </div>

      {/* Clean Ambient Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ambient-glow-top-left {
            0%, 100% { 
              opacity: 0.40;
              transform: scale(1) rotate(0deg);
              filter: blur(100px);
            }
            50% { 
              opacity: 0.55;
              transform: scale(1.05) rotate(1deg);
              filter: blur(110px);
            }
          }

          @keyframes ambient-glow-top-right {
            0%, 100% { 
              opacity: 0.35;
              transform: scale(1) rotate(0deg);
              filter: blur(120px);
            }
            50% { 
              opacity: 0.50;
              transform: scale(1.08) rotate(-1deg);
              filter: blur(130px);
            }
          }

          @keyframes ambient-grain {
            0%, 100% { 
              opacity: 0.015;
              transform: translateX(0) translateY(0);
            }
            25% { 
              opacity: 0.018;
              transform: translateX(-1px) translateY(-0.5px);
            }
            50% { 
              opacity: 0.012;
              transform: translateX(0.5px) translateY(-1px);
            }
            75% { 
              opacity: 0.020;
              transform: translateX(-0.5px) translateY(0.5px);
            }
          }

          @keyframes ambient-starfield {
            0%, 100% { 
              opacity: 0.02;
              transform: rotate(0deg);
            }
            50% { 
              opacity: 0.015;
              transform: rotate(0.2deg);
            }
          }

          .ambient-glow-top-left {
            animation: ambient-glow-top-left 20s ease-in-out infinite;
            will-change: transform, opacity, filter;
          }

          .ambient-glow-top-right {
            animation: ambient-glow-top-right 22s ease-in-out infinite;
            animation-delay: -8s;
            will-change: transform, opacity, filter;
          }

          .ambient-grain {
            animation: ambient-grain 30s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .ambient-starfield {
            animation: ambient-starfield 35s ease-in-out infinite;
            will-change: transform, opacity;
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .ambient-glow-top-left,
            .ambient-glow-top-right {
              animation-duration: 25s;
            }
            
            .ambient-glow-top-left {
              opacity: 0.25 !important;
            }
            
            .ambient-glow-top-right {
              opacity: 0.20 !important;
            }

            .ambient-grain {
              opacity: 0.008 !important;
              animation-duration: 40s;
            }

            .ambient-starfield {
              opacity: 0.012 !important;
              animation-duration: 45s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .ambient-glow-top-left,
            .ambient-glow-top-right,
            .ambient-grain,
            .ambient-starfield {
              animation: none;
            }
          }

          /* Performance hint for browsers */
          .ambient-glow-top-left,
          .ambient-glow-top-right {
            transform: translateZ(0);
            backface-visibility: hidden;
          }
        `
      }} />
    </>
  );
};

export default AmbientLighting;
