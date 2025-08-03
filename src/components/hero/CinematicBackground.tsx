import React from 'react';
import AICoreCenter from './AICoreCenter';
import AmbientLighting from './AmbientLighting';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Ambient Lighting Layer - Above background, behind everything else */}
      <AmbientLighting />

      {/* AI Core Center Component - Above ambient lighting */}
      <div className="relative z-20">
        <AICoreCenter />
      </div>

      {/* Main content background boxes - Above AI core */}
      <div className="absolute inset-0 flex items-center justify-center z-25">
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[70vh] sm:h-[65vh] md:h-[60vh] transform -translate-y-8 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20">
          {/* Enhanced glass container with ambient glow reflection */}
          <div 
            className="absolute inset-0 rounded-3xl premium-glass-container-ambient"
            style={{
              background: `
                linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.04) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.015) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.012) 0%, transparent 50%)
              `,
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: `
                0 32px 64px rgba(255, 255, 255, 0.04),
                0 16px 32px rgba(34, 211, 238, 0.06),
                0 8px 16px rgba(139, 92, 246, 0.06),
                inset 0 1px 0 rgba(255, 255, 255, 0.15),
                inset 0 -1px 0 rgba(255, 255, 255, 0.06),
                inset 0 0 100px rgba(34, 211, 238, 0.012),
                inset 0 0 80px rgba(139, 92, 246, 0.008)
              `
            }}
          />
          
          {/* Colored edge lighting layers - Enhanced with ambient reflection */}
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-cyan-ambient opacity-80" />
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-emerald opacity-70" />
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-violet-ambient opacity-75" />
          
          {/* Ambient light diffusion - Enhanced */}
          <div className="absolute inset-0 rounded-3xl premium-ambient-diffusion-enhanced" />
        </div>
      </div>

      {/* Enhanced premium animation styles with ambient integration */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes premium-glass-shimmer-ambient {
            0%, 100% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.03) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.012) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.009) 0%, transparent 50%);
            }
            33% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(34, 211, 238, 0.015) 50%, rgba(139, 92, 246, 0.03) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.018) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.015) 0%, transparent 50%);
            }
            66% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(139, 92, 246, 0.012) 50%, rgba(20, 184, 166, 0.025) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(34, 211, 238, 0.009) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(139, 92, 246, 0.018) 0%, transparent 50%);
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
                rgba(34, 211, 238, 0.04) 0%,
                rgba(16, 185, 129, 0.03) 35%,
                rgba(139, 92, 246, 0.025) 70%,
                transparent 100%
              );
            }
            33% { 
              background: radial-gradient(
                ellipse at center,
                rgba(16, 185, 129, 0.05) 0%,
                rgba(139, 92, 246, 0.035) 35%,
                rgba(34, 211, 238, 0.03) 70%,
                transparent 100%
              );
            }
            66% { 
              background: radial-gradient(
                ellipse at center,
                rgba(139, 92, 246, 0.04) 0%,
                rgba(34, 211, 238, 0.032) 35%,
                rgba(16, 185, 129, 0.025) 70%,
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
