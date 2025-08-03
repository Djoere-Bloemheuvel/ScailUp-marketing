
import React from 'react';

const AmbientLighting = () => {
  return (
    <>
      {/* Ambient Corner Lighting Effects - Behind all content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-left ambient glow - More Blue-toned and Reduced Intensity */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full opacity-50 md:opacity-60 ambient-glow-blue"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.20) 0%, rgba(37, 99, 235, 0.15) 30%, rgba(29, 78, 216, 0.10) 50%, rgba(30, 64, 175, 0.05) 70%, transparent 85%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Bottom-right ambient glow - More Blue-Purple blend and Reduced */}
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full opacity-40 md:opacity-50 ambient-glow-purple"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.18) 0%, rgba(59, 130, 246, 0.13) 35%, rgba(37, 99, 235, 0.08) 55%, rgba(29, 78, 216, 0.04) 75%, transparent 90%)',
            filter: 'blur(90px)',
          }}
        />
        
        {/* Additional accent glow - Blue blend (center-right) - Reduced */}
        <div 
          className="absolute top-1/3 -right-1/6 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full opacity-35 md:opacity-45 ambient-glow-blend"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(96, 165, 250, 0.10) 40%, rgba(37, 99, 235, 0.06) 60%, rgba(29, 78, 216, 0.03) 80%, transparent 95%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Subtle grain texture layer */}
        <div 
          className="absolute inset-0 opacity-[0.015] ambient-grain"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 2%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.06) 0%, transparent 2%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 1.5%),
              radial-gradient(circle at 60% 90%, rgba(255, 255, 255, 0.03) 0%, transparent 1.5%),
              radial-gradient(circle at 90% 60%, rgba(255, 255, 255, 0.04) 0%, transparent 1%),
              radial-gradient(circle at 10% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 1%)
            `,
            backgroundSize: '400px 400px, 300px 300px, 500px 500px, 350px 350px, 450px 450px, 280px 280px',
          }}
        />

        {/* Starfield particle layer - More blue-toned */}
        <div 
          className="absolute inset-0 opacity-[0.02] ambient-starfield"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.6), transparent),
              radial-gradient(1px 1px at 40% 70%, rgba(59, 130, 246, 0.5), transparent),
              radial-gradient(1px 1px at 60% 20%, rgba(96, 165, 250, 0.4), transparent),
              radial-gradient(1px 1px at 80% 80%, rgba(37, 99, 235, 0.3), transparent),
              radial-gradient(1px 1px at 10% 60%, rgba(29, 78, 216, 0.2), transparent),
              radial-gradient(1px 1px at 90% 40%, rgba(255, 255, 255, 0.4), transparent)
            `,
            backgroundSize: '550px 550px, 350px 350px, 450px 450px, 500px 500px, 400px 400px, 600px 600px',
          }}
        />
      </div>

      {/* Ambient Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ambient-glow-blue {
            0%, 100% { 
              opacity: 0.50;
              transform: scale(1) rotate(0deg);
              filter: blur(80px);
            }
            33% { 
              opacity: 0.65;
              transform: scale(1.05) rotate(1deg);
              filter: blur(82px);
            }
            66% { 
              opacity: 0.45;
              transform: scale(0.98) rotate(-0.5deg);
              filter: blur(78px);
            }
          }

          @keyframes ambient-glow-purple {
            0%, 100% { 
              opacity: 0.40;
              transform: scale(1) rotate(0deg);
              filter: blur(90px);
            }
            50% { 
              opacity: 0.55;
              transform: scale(1.06) rotate(-1.5deg);
              filter: blur(92px);
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
              transform: scale(1.03) rotate(0.5deg);
              filter: blur(72px);
            }
            80% { 
              opacity: 0.30;
              transform: scale(0.99) rotate(-1deg);
              filter: blur(68px);
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
              transform: rotate(0.3deg);
            }
          }

          .ambient-glow-blue {
            animation: ambient-glow-blue 16s ease-in-out infinite;
            will-change: transform, opacity, filter;
          }

          .ambient-glow-purple {
            animation: ambient-glow-purple 18s ease-in-out infinite;
            animation-delay: -6s;
            will-change: transform, opacity, filter;
          }

          .ambient-glow-blend {
            animation: ambient-glow-blend 14s ease-in-out infinite;
            animation-delay: -9s;
            will-change: transform, opacity, filter;
          }

          .ambient-grain {
            animation: ambient-grain 28s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .ambient-starfield {
            animation: ambient-starfield 35s ease-in-out infinite;
            will-change: transform, opacity;
          }

          /* Mobile optimizations - Even more reduced */}
          @media (max-width: 768px) {
            .ambient-glow-blue,
            .ambient-glow-purple,
            .ambient-glow-blend {
              animation-duration: 22s;
            }
            
            .ambient-glow-blue {
              opacity: 0.30 !important;
            }
            
            .ambient-glow-purple {
              opacity: 0.25 !important;
            }
            
            .ambient-glow-blend {
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

          /* Reduced motion preferences */}
          @media (prefers-reduced-motion: reduce) {
            .ambient-glow-blue,
            .ambient-glow-purple,
            .ambient-glow-blend,
            .ambient-grain,
            .ambient-starfield {
              animation: none;
            }
          }

          /* Performance hint for browsers */
          .ambient-glow-blue,
          .ambient-glow-purple,
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
