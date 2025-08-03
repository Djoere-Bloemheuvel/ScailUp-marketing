
import React from 'react';
import AICoreCenter from './AICoreCenter';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black" />

      {/* AI Core Center Component */}
      <AICoreCenter />

      {/* Main content background boxes - Enhanced with colored edge lighting */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="hero-glass-container relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[70vh] sm:h-[65vh] md:h-[60vh] transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
          {/* Enhanced glass container with colored edge lighting */}
          <div 
            className="absolute inset-0 rounded-3xl premium-glass-container"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: `
                0 32px 64px rgba(255, 255, 255, 0.01),
                0 16px 32px rgba(34, 211, 238, 0.02),
                0 8px 16px rgba(139, 92, 246, 0.02),
                inset 0 1px 0 rgba(255, 255, 255, 0.08),
                inset 0 -1px 0 rgba(255, 255, 255, 0.03)
              `
            }}
          />
          
          {/* Colored edge lighting layers */}
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-cyan opacity-60" />
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-emerald opacity-50" />
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-violet opacity-55" />
          
          {/* Ambient light diffusion */}
          <div className="absolute inset-0 rounded-3xl premium-ambient-diffusion" />
        </div>
      </div>

      {/* Premium animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes premium-glass-shimmer {
            0%, 100% { 
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.02) 100%);
            }
            50% { 
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(34, 211, 238, 0.01) 50%, rgba(139, 92, 246, 0.02) 100%);
            }
          }

          @keyframes premium-edge-glow-cyan {
            0%, 100% { 
              box-shadow: 
                0 0 30px rgba(34, 211, 238, 0.1),
                0 0 60px rgba(34, 211, 238, 0.05),
                inset 0 0 1px rgba(34, 211, 238, 0.15);
            }
            50% { 
              box-shadow: 
                0 0 45px rgba(34, 211, 238, 0.15),
                0 0 90px rgba(34, 211, 238, 0.08),
                inset 0 0 1px rgba(34, 211, 238, 0.25);
            }
          }

          @keyframes premium-edge-glow-emerald {
            0%, 100% { 
              box-shadow: 
                0 0 25px rgba(16, 185, 129, 0.08),
                0 0 50px rgba(16, 185, 129, 0.04),
                inset 0 0 1px rgba(16, 185, 129, 0.12);
            }
            33% { 
              box-shadow: 
                0 0 40px rgba(16, 185, 129, 0.12),
                0 0 80px rgba(16, 185, 129, 0.06),
                inset 0 0 1px rgba(16, 185, 129, 0.2);
            }
          }

          @keyframes premium-edge-glow-violet {
            0%, 100% { 
              box-shadow: 
                0 0 35px rgba(139, 92, 246, 0.09),
                0 0 70px rgba(139, 92, 246, 0.04),
                inset 0 0 1px rgba(139, 92, 246, 0.14);
            }
            66% { 
              box-shadow: 
                0 0 50px rgba(139, 92, 246, 0.14),
                0 0 100px rgba(139, 92, 246, 0.07),
                inset 0 0 1px rgba(139, 92, 246, 0.22);
            }
          }

          @keyframes premium-ambient-diffusion {
            0%, 100% { 
              background: radial-gradient(
                ellipse at center,
                rgba(34, 211, 238, 0.02) 0%,
                rgba(16, 185, 129, 0.015) 35%,
                rgba(139, 92, 246, 0.01) 70%,
                transparent 100%
              );
            }
            33% { 
              background: radial-gradient(
                ellipse at center,
                rgba(16, 185, 129, 0.025) 0%,
                rgba(139, 92, 246, 0.02) 35%,
                rgba(34, 211, 238, 0.015) 70%,
                transparent 100%
              );
            }
            66% { 
              background: radial-gradient(
                ellipse at center,
                rgba(139, 92, 246, 0.02) 0%,
                rgba(34, 211, 238, 0.018) 35%,
                rgba(16, 185, 129, 0.012) 70%,
                transparent 100%
              );
            }
          }

          .premium-glass-container {
            animation: premium-glass-shimmer 18s ease-in-out infinite;
          }

          .premium-edge-glow-cyan {
            animation: premium-edge-glow-cyan 12s ease-in-out infinite;
          }

          .premium-edge-glow-emerald {
            animation: premium-edge-glow-emerald 15s ease-in-out infinite;
            animation-delay: -5s;
          }

          .premium-edge-glow-violet {
            animation: premium-edge-glow-violet 14s ease-in-out infinite;
            animation-delay: -8s;
          }

          .premium-ambient-diffusion {
            animation: premium-ambient-diffusion 20s ease-in-out infinite;
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .premium-edge-glow-cyan,
            .premium-edge-glow-emerald,
            .premium-edge-glow-violet {
              animation-duration: 20s;
            }
            
            .premium-edge-glow-emerald {
              opacity: 0.3 !important;
            }
            
            .premium-edge-glow-violet {
              opacity: 0.35 !important;
            }
            
            .premium-ambient-diffusion {
              animation-duration: 25s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .premium-glass-container,
            .premium-edge-glow-cyan,
            .premium-edge-glow-emerald,
            .premium-edge-glow-violet,
            .premium-ambient-diffusion {
              animation: none;
            }
          }
        `
      }} />
    </div>
  );
};

export default CinematicBackground;
