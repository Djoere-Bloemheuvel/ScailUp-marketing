
import React from 'react';
import AICoreCenter from './AICoreCenter';
import AmbientLighting from './AmbientLighting';

interface CinematicBackgroundProps {
  isInitialLoadComplete?: boolean;
}

const CinematicBackground = ({ isInitialLoadComplete = false }: CinematicBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Ambient Lighting Layer - Behind all content */}
      <AmbientLighting />

      {/* AI Core Center Component */}
      <AICoreCenter />

      {/* Main content background boxes - Enhanced with ambient glow reflection */}
      {/* Glass container with immediate entrance animation - Height increased by 5% and moved down */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[68vh] sm:h-[63vh] md:h-[58vh] lg:h-[61vh] xl:h-[65vh] transform -translate-y-4 sm:-translate-y-8 md:-translate-y-10 lg:-translate-y-12">
          {/* Enhanced glass container with immediate entrance animation */}
          <div 
            className="absolute inset-0 rounded-3xl premium-glass-container-ambient premium-glass-entrance"
            style={{
              background: `
                linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.02) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.008) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.006) 0%, transparent 50%)
              `,
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: `
                0 32px 64px rgba(255, 255, 255, 0.01),
                0 16px 32px rgba(34, 211, 238, 0.02),
                0 8px 16px rgba(139, 92, 246, 0.02),
                inset 0 1px 0 rgba(255, 255, 255, 0.08),
                inset 0 -1px 0 rgba(255, 255, 255, 0.03),
                inset 0 0 100px rgba(34, 211, 238, 0.005),
                inset 0 0 80px rgba(139, 92, 246, 0.003)
              `
            }}
          />
          
          {/* Colored edge lighting layers - Enhanced with ambient reflection */}
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-cyan-ambient opacity-60 premium-edge-entrance" />
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-emerald opacity-50 premium-edge-entrance-delayed-1" />
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-violet-ambient opacity-55 premium-edge-entrance-delayed-2" />
          
          {/* Ambient light diffusion - Enhanced */}
          <div className="absolute inset-0 rounded-3xl premium-ambient-diffusion-enhanced premium-ambient-entrance" />
        </div>
      </div>

      {/* Enhanced premium animation styles with immediate entrance animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Immediate entrance animations for glass container */
          @keyframes premium-glass-entrance {
            0% { 
              opacity: 0; 
              transform: scale(0.95) translateY(20px); 
              filter: blur(8px); 
            }
            100% { 
              opacity: 1; 
              transform: scale(1) translateY(0); 
              filter: blur(0px); 
            }
          }

          @keyframes premium-edge-entrance {
            0% { 
              opacity: 0; 
              transform: scale(0.98); 
            }
            100% { 
              opacity: 0.6; 
              transform: scale(1); 
            }
          }

          @keyframes premium-edge-entrance-delayed-1 {
            0% { 
              opacity: 0; 
              transform: scale(0.98); 
            }
            100% { 
              opacity: 0.5; 
              transform: scale(1); 
            }
          }

          @keyframes premium-edge-entrance-delayed-2 {
            0% { 
              opacity: 0; 
              transform: scale(0.98); 
            }
            100% { 
              opacity: 0.55; 
              transform: scale(1); 
            }
          }

          @keyframes premium-ambient-entrance {
            0% { 
              opacity: 0; 
              transform: scale(1.05); 
            }
            100% { 
              opacity: 1; 
              transform: scale(1); 
            }
          }

          /* Apply immediate entrance animations */
          .premium-glass-entrance {
            animation: premium-glass-entrance 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .premium-edge-entrance {
            animation: premium-edge-entrance 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: 0.2s;
          }

          .premium-edge-entrance-delayed-1 {
            animation: premium-edge-entrance-delayed-1 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: 0.4s;
          }

          .premium-edge-entrance-delayed-2 {
            animation: premium-edge-entrance-delayed-2 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: 0.6s;
          }

          .premium-ambient-entrance {
            animation: premium-ambient-entrance 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: 0.3s;
          }

          @keyframes premium-glass-shimmer-ambient {
            0%, 100% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.02) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.008) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.006) 0%, transparent 50%);
            }
            33% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(34, 211, 238, 0.01) 50%, rgba(139, 92, 246, 0.02) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.012) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.009) 0%, transparent 50%);
            }
            66% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.025) 0%, rgba(139, 92, 246, 0.008) 50%, rgba(20, 184, 166, 0.015) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.006) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.012) 0%, transparent 50%);
            }
          }

          @keyframes premium-edge-glow-cyan-ambient {
            0%, 100% { 
              box-shadow: 
                0 0 30px rgba(34, 211, 238, 0.1),
                0 0 60px rgba(34, 211, 238, 0.05),
                inset 0 0 1px rgba(34, 211, 238, 0.15),
                inset 0 0 80px rgba(34, 211, 238, 0.008);
            }
            50% { 
              box-shadow: 
                0 0 45px rgba(34, 211, 238, 0.15),
                0 0 90px rgba(34, 211, 238, 0.08),
                inset 0 0 1px rgba(34, 211, 238, 0.25),
                inset 0 0 100px rgba(34, 211, 238, 0.012);
            }
          }

          @keyframes premium-edge-glow-violet-ambient {
            0%, 100% { 
              box-shadow: 
                0 0 35px rgba(139, 92, 246, 0.09),
                0 0 70px rgba(139, 92, 246, 0.04),
                inset 0 0 1px rgba(139, 92, 246, 0.14),
                inset 0 0 60px rgba(139, 92, 246, 0.006);
            }
            66% { 
              box-shadow: 
                0 0 50px rgba(139, 92, 246, 0.14),
                0 0 100px rgba(139, 92, 246, 0.07),
                inset 0 0 1px rgba(139, 92, 246, 0.22),
                inset 0 0 80px rgba(139, 92, 246, 0.01);
            }
          }

          @keyframes premium-ambient-diffusion-enhanced {
            0%, 100% { 
              background: radial-gradient(
                ellipse at center,
                rgba(34, 211, 238, 0.025) 0%,
                rgba(16, 185, 129, 0.018) 35%,
                rgba(139, 92, 246, 0.015) 70%,
                transparent 100%
              );
            }
            33% { 
              background: radial-gradient(
                ellipse at center,
                rgba(16, 185, 129, 0.03) 0%,
                rgba(139, 92, 246, 0.022) 35%,
                rgba(34, 211, 238, 0.018) 70%,
                transparent 100%
              );
            }
            66% { 
              background: radial-gradient(
                ellipse at center,
                rgba(139, 92, 246, 0.025) 0%,
                rgba(34, 211, 238, 0.02) 35%,
                rgba(16, 185, 129, 0.015) 70%,
                transparent 100%
              );
            }
          }

          .premium-glass-container-ambient {
            animation: premium-glass-shimmer-ambient 20s ease-in-out infinite;
          }

          .premium-edge-glow-cyan-ambient {
            animation: premium-edge-glow-cyan-ambient 14s ease-in-out infinite;
          }

          .premium-edge-glow-emerald {
            animation: premium-edge-glow-emerald 15s ease-in-out infinite;
            animation-delay: -5s;
          }

          .premium-edge-glow-violet-ambient {
            animation: premium-edge-glow-violet-ambient 16s ease-in-out infinite;
            animation-delay: -8s;
          }

          .premium-ambient-diffusion-enhanced {
            animation: premium-ambient-diffusion-enhanced 22s ease-in-out infinite;
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .premium-glass-entrance,
            .premium-edge-entrance,
            .premium-edge-entrance-delayed-1,
            .premium-edge-entrance-delayed-2,
            .premium-ambient-entrance {
              animation-duration: 1s;
            }
            
            .premium-edge-glow-cyan-ambient,
            .premium-edge-glow-emerald,
            .premium-edge-glow-violet-ambient {
              animation-duration: 25s;
            }
            
            .premium-edge-glow-emerald {
              opacity: 0.3 !important;
            }
            
            .premium-edge-glow-violet-ambient {
              opacity: 0.35 !important;
            }
            
            .premium-ambient-diffusion-enhanced {
              animation-duration: 30s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .premium-glass-entrance,
            .premium-edge-entrance,
            .premium-edge-entrance-delayed-1,
            .premium-edge-entrance-delayed-2,
            .premium-ambient-entrance {
              animation: none;
              opacity: 1;
              transform: scale(1) translateY(0);
              filter: blur(0px);
            }
            
            .premium-glass-container-ambient,
            .premium-edge-glow-cyan-ambient,
            .premium-edge-glow-emerald,
            .premium-edge-glow-violet-ambient,
            .premium-ambient-diffusion-enhanced {
              animation: none;
            }
          }
        `
      }} />
    </div>
  );
};

export default CinematicBackground;
