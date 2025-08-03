
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
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[70vh] sm:h-[65vh] md:h-[60vh] transform -translate-y-8 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20">
          
          {/* Layered Ambient Glow Behind Glass Container */}
          <div className="absolute inset-0 -inset-x-24 -inset-y-20 md:-inset-x-32 md:-inset-y-24 lg:-inset-x-40 lg:-inset-y-32">
            {/* Primary Cyan Glow Layer */}
            <div className="absolute inset-0 rounded-full cyber-glow-primary opacity-60" />
            
            {/* Secondary Violet Glow Layer */}
            <div className="absolute inset-0 rounded-full cyber-glow-secondary opacity-50" />
            
            {/* Tertiary Electric Blue Accent Layer */}
            <div className="absolute inset-0 rounded-full cyber-glow-tertiary opacity-40" />
            
            {/* Ambient Diffusion Layer */}
            <div className="absolute inset-0 rounded-full cyber-ambient-cloud opacity-70" />
          </div>

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
          /* Cyber Ambient Glow Layers */
          @keyframes cyber-glow-primary-pulse {
            0%, 100% { 
              opacity: 0.6;
              transform: scale(1);
              background: radial-gradient(
                ellipse 120% 80% at center,
                rgba(34, 211, 238, 0.15) 0%,
                rgba(34, 211, 238, 0.08) 40%,
                rgba(34, 211, 238, 0.03) 70%,
                transparent 100%
              );
              filter: blur(40px);
            }
            50% { 
              opacity: 0.8;
              transform: scale(1.05);
              background: radial-gradient(
                ellipse 125% 85% at center,
                rgba(34, 211, 238, 0.2) 0%,
                rgba(34, 211, 238, 0.12) 40%,
                rgba(34, 211, 238, 0.05) 70%,
                transparent 100%
              );
              filter: blur(50px);
            }
          }

          @keyframes cyber-glow-secondary-pulse {
            0%, 100% { 
              opacity: 0.5;
              transform: scale(1.1) rotate(0deg);
              background: radial-gradient(
                ellipse 110% 90% at center,
                rgba(139, 92, 246, 0.12) 0%,
                rgba(139, 92, 246, 0.06) 50%,
                rgba(139, 92, 246, 0.02) 80%,
                transparent 100%
              );
              filter: blur(60px);
            }
            50% { 
              opacity: 0.7;
              transform: scale(1.15) rotate(2deg);
              background: radial-gradient(
                ellipse 115% 95% at center,
                rgba(139, 92, 246, 0.16) 0%,
                rgba(139, 92, 246, 0.09) 50%,
                rgba(139, 92, 246, 0.04) 80%,
                transparent 100%
              );
              filter: blur(70px);
            }
          }

          @keyframes cyber-glow-tertiary-pulse {
            0%, 100% { 
              opacity: 0.4;
              transform: scale(0.9) rotate(180deg);
              background: radial-gradient(
                ellipse 100% 70% at center,
                rgba(59, 130, 246, 0.1) 0%,
                rgba(59, 130, 246, 0.05) 60%,
                rgba(59, 130, 246, 0.02) 85%,
                transparent 100%
              );
              filter: blur(80px);
            }
            50% { 
              opacity: 0.6;
              transform: scale(0.95) rotate(182deg);
              background: radial-gradient(
                ellipse 105% 75% at center,
                rgba(59, 130, 246, 0.14) 0%,
                rgba(59, 130, 246, 0.08) 60%,
                rgba(59, 130, 246, 0.03) 85%,
                transparent 100%
              );
              filter: blur(90px);
            }
          }

          @keyframes cyber-ambient-cloud-pulse {
            0%, 100% { 
              opacity: 0.7;
              transform: scale(1.2);
              background: radial-gradient(
                ellipse 140% 100% at center,
                rgba(34, 211, 238, 0.04) 0%,
                rgba(139, 92, 246, 0.03) 30%,
                rgba(59, 130, 246, 0.02) 60%,
                rgba(34, 211, 238, 0.01) 80%,
                transparent 100%
              );
              filter: blur(120px);
            }
            33% { 
              opacity: 0.9;
              transform: scale(1.25);
              background: radial-gradient(
                ellipse 145% 105% at center,
                rgba(139, 92, 246, 0.05) 0%,
                rgba(59, 130, 246, 0.04) 30%,
                rgba(34, 211, 238, 0.03) 60%,
                rgba(139, 92, 246, 0.02) 80%,
                transparent 100%
              );
              filter: blur(130px);
            }
            66% { 
              opacity: 0.8;
              transform: scale(1.22);
              background: radial-gradient(
                ellipse 142% 102% at center,
                rgba(59, 130, 246, 0.04) 0%,
                rgba(34, 211, 238, 0.035) 30%,
                rgba(139, 92, 246, 0.025) 60%,
                rgba(59, 130, 246, 0.015) 80%,
                transparent 100%
              );
              filter: blur(125px);
            }
          }

          /* Apply Cyber Glow Animations */
          .cyber-glow-primary {
            animation: cyber-glow-primary-pulse 18s ease-in-out infinite;
          }

          .cyber-glow-secondary {
            animation: cyber-glow-secondary-pulse 22s ease-in-out infinite;
            animation-delay: -7s;
          }

          .cyber-glow-tertiary {
            animation: cyber-glow-tertiary-pulse 25s ease-in-out infinite;
            animation-delay: -12s;
          }

          .cyber-ambient-cloud {
            animation: cyber-ambient-cloud-pulse 30s ease-in-out infinite;
            animation-delay: -5s;
          }

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
            /* Static glow layers for mobile - no animation */
            .cyber-glow-primary {
              animation: none;
              opacity: 0.4 !important;
              transform: scale(1) !important;
              background: radial-gradient(
                ellipse 110% 70% at center,
                rgba(34, 211, 238, 0.1) 0%,
                rgba(34, 211, 238, 0.05) 50%,
                transparent 80%
              ) !important;
              filter: blur(30px) !important;
            }

            .cyber-glow-secondary {
              animation: none;
              opacity: 0.3 !important;
              transform: scale(1.05) !important;
              background: radial-gradient(
                ellipse 100% 80% at center,
                rgba(139, 92, 246, 0.08) 0%,
                rgba(139, 92, 246, 0.04) 60%,
                transparent 90%
              ) !important;
              filter: blur(40px) !important;
            }

            .cyber-glow-tertiary {
              animation: none;
              opacity: 0.25 !important;
              transform: scale(0.9) !important;
              background: radial-gradient(
                ellipse 90% 60% at center,
                rgba(59, 130, 246, 0.06) 0%,
                rgba(59, 130, 246, 0.03) 70%,
                transparent 95%
              ) !important;
              filter: blur(50px) !important;
            }

            .cyber-ambient-cloud {
              animation: none;
              opacity: 0.5 !important;
              transform: scale(1.1) !important;
              background: radial-gradient(
                ellipse 120% 90% at center,
                rgba(34, 211, 238, 0.03) 0%,
                rgba(139, 92, 246, 0.02) 40%,
                rgba(59, 130, 246, 0.015) 70%,
                transparent 100%
              ) !important;
              filter: blur(60px) !important;
            }
            
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
            .premium-ambient-diffusion,
            .cyber-glow-primary,
            .cyber-glow-secondary,
            .cyber-glow-tertiary,
            .cyber-ambient-cloud {
              animation: none;
            }
          }
        `
      }} />
    </div>
  );
};

export default CinematicBackground;
