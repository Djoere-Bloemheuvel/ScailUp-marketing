
import React from 'react';
import AICoreCenter from './AICoreCenter';
import AmbientLighting from './AmbientLighting';
import PremiumOrbs from './PremiumOrbs';

interface CinematicBackgroundProps {
  isInitialLoadComplete?: boolean;
  hideGlassContainer?: boolean;
}

const CinematicBackground = ({
  isInitialLoadComplete = false,
  hideGlassContainer = false
}: CinematicBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Darker background inspired by the uploaded image */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950" />

      {/* Ambient Lighting Layer - Behind all content */}
      <AmbientLighting />

      {/* Premium Orbs - Added to the background */}
      <PremiumOrbs />

      {/* AI Core Center Component */}
      <AICoreCenter />

      {/* Main content background boxes - Only show if hideGlassContainer is false */}
      {!hideGlassContainer && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[75vh] sm:h-[69vh] md:h-[64vh] lg:h-[67vh] xl:h-[72vh] transform -translate-y-4 sm:-translate-y-8 md:-translate-y-10 lg:-translate-y-12">
            {/* Glass container with darker emerald/teal colors */}
            <div className="absolute inset-0 rounded-3xl premium-glass-container-ambient" style={{
              background: `
                linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.008) 50%, rgba(255, 255, 255, 0.015) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(16, 185, 129, 0.008) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(20, 184, 166, 0.006) 0%, transparent 50%)
              `,
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              boxShadow: `
                0 32px 64px rgba(255, 255, 255, 0.008),
                0 16px 32px rgba(16, 185, 129, 0.015),
                0 8px 16px rgba(20, 184, 166, 0.012),
                inset 0 1px 0 rgba(255, 255, 255, 0.05),
                inset 0 -1px 0 rgba(255, 255, 255, 0.02),
                inset 0 0 100px rgba(16, 185, 129, 0.004),
                inset 0 0 80px rgba(20, 184, 166, 0.003)
              `,
              opacity: 1
            }} />
            
            {/* Colored edge lighting layers - darker emerald/teal colors */}
            <div className="absolute inset-0 rounded-3xl premium-edge-glow-emerald-ambient opacity-45" />
            <div className="absolute inset-0 rounded-3xl premium-edge-glow-teal opacity-40" />
            <div className="absolute inset-0 rounded-3xl premium-edge-glow-slate-ambient opacity-35" />
          </div>
        </div>
      )}

      {/* Updated animations with darker emerald/teal colors */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes premium-glass-shimmer-ambient {
            0%, 100% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.008) 50%, rgba(255, 255, 255, 0.015) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(16, 185, 129, 0.008) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(20, 184, 166, 0.006) 0%, transparent 50%);
            }
            33% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.025) 0%, rgba(16, 185, 129, 0.01) 50%, rgba(20, 184, 166, 0.012) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(16, 185, 129, 0.012) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(20, 184, 166, 0.008) 0%, transparent 50%);
            }
            66% { 
              background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.018) 0%, rgba(20, 184, 166, 0.008) 50%, rgba(71, 85, 105, 0.01) 100%),
                radial-gradient(ellipse 800px 400px at 0% 0%, rgba(16, 185, 129, 0.006) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 100% 100%, rgba(20, 184, 166, 0.01) 0%, transparent 50%);
            }
          }

          @keyframes premium-edge-glow-emerald-ambient {
            0%, 100% { 
              box-shadow: 
                0 0 30px rgba(16, 185, 129, 0.08),
                0 0 60px rgba(16, 185, 129, 0.04),
                inset 0 0 1px rgba(16, 185, 129, 0.12),
                inset 0 0 80px rgba(16, 185, 129, 0.006);
            }
            50% { 
              box-shadow: 
                0 0 45px rgba(16, 185, 129, 0.12),
                0 0 90px rgba(16, 185, 129, 0.06),
                inset 0 0 1px rgba(16, 185, 129, 0.18),
                inset 0 0 100px rgba(16, 185, 129, 0.008);
            }
          }

          @keyframes premium-edge-glow-teal {
            0%, 100% { 
              box-shadow: 
                0 0 35px rgba(20, 184, 166, 0.07),
                0 0 70px rgba(20, 184, 166, 0.035),
                inset 0 0 1px rgba(20, 184, 166, 0.1),
                inset 0 0 60px rgba(20, 184, 166, 0.005);
            }
            66% { 
              box-shadow: 
                0 0 50px rgba(20, 184, 166, 0.1),
                0 0 100px rgba(20, 184, 166, 0.05),
                inset 0 0 1px rgba(20, 184, 166, 0.15),
                inset 0 0 80px rgba(20, 184, 166, 0.007);
            }
          }

          @keyframes premium-edge-glow-slate-ambient {
            0%, 100% { 
              box-shadow: 
                0 0 35px rgba(71, 85, 105, 0.06),
                0 0 70px rgba(71, 85, 105, 0.03),
                inset 0 0 1px rgba(71, 85, 105, 0.08),
                inset 0 0 60px rgba(71, 85, 105, 0.003);
            }
            50% { 
              box-shadow: 
                0 0 50px rgba(71, 85, 105, 0.09),
                0 0 100px rgba(71, 85, 105, 0.045),
                inset 0 0 1px rgba(71, 85, 105, 0.12),
                inset 0 0 80px rgba(71, 85, 105, 0.005);
            }
          }

          @keyframes premium-ambient-diffusion-enhanced {
            0%, 100% { 
              background: radial-gradient(
                ellipse at center,
                rgba(16, 185, 129, 0.018) 0%,
                rgba(20, 184, 166, 0.012) 35%,
                rgba(71, 85, 105, 0.01) 70%,
                transparent 100%
              );
            }
            33% { 
              background: radial-gradient(
                ellipse at center,
                rgba(20, 184, 166, 0.02) 0%,
                rgba(71, 85, 105, 0.015) 35%,
                rgba(16, 185, 129, 0.012) 70%,
                transparent 100%
              );
            }
            66% { 
              background: radial-gradient(
                ellipse at center,
                rgba(71, 85, 105, 0.015) 0%,
                rgba(16, 185, 129, 0.013) 35%,
                rgba(20, 184, 166, 0.01) 70%,
                transparent 100%
              );
            }
          }

          .premium-glass-container-ambient {
            animation: premium-glass-shimmer-ambient 20s ease-in-out infinite;
          }

          .premium-edge-glow-emerald-ambient {
            animation: premium-edge-glow-emerald-ambient 14s ease-in-out infinite;
          }

          .premium-edge-glow-teal {
            animation: premium-edge-glow-teal 15s ease-in-out infinite;
            animation-delay: -5s;
          }

          .premium-edge-glow-slate-ambient {
            animation: premium-edge-glow-slate-ambient 16s ease-in-out infinite;
            animation-delay: -8s;
          }

          .premium-ambient-diffusion-enhanced {
            animation: premium-ambient-diffusion-enhanced 22s ease-in-out infinite;
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .premium-edge-glow-emerald-ambient,
            .premium-edge-glow-teal,
            .premium-edge-glow-slate-ambient {
              animation-duration: 25s;
            }
            
            .premium-edge-glow-teal {
              opacity: 0.25 !important;
            }
            
            .premium-edge-glow-slate-ambient {
              opacity: 0.2 !important;
            }
            
            .premium-ambient-diffusion-enhanced {
              animation-duration: 30s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .premium-glass-container-ambient,
            .premium-edge-glow-emerald-ambient,
            .premium-edge-glow-teal,
            .premium-edge-glow-slate-ambient,
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
