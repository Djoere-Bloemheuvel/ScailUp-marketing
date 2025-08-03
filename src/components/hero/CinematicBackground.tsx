
import React from 'react';
import AICoreCenter from './AICoreCenter';
import AmbientLighting from './AmbientLighting';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Ambient Lighting Layer - Behind all content */}
      <AmbientLighting />

      {/* AI Core Center Component */}
      <AICoreCenter />

      {/* Main content background boxes - Enhanced with premium glass effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[70vh] sm:h-[65vh] md:h-[60vh] transform -translate-y-8 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20">
          
          {/* Ambient halo - Behind the container */}
          <div 
            className="absolute inset-0 rounded-3xl premium-ambient-halo"
            style={{
              background: 'radial-gradient(ellipse 110% 110% at center, rgba(59, 130, 246, 0.08) 0%, rgba(37, 99, 235, 0.04) 40%, rgba(99, 102, 241, 0.02) 70%, transparent 100%)',
              filter: 'blur(40px)',
              transform: 'scale(1.1)',
              zIndex: 1
            }}
          />

          {/* Enhanced glass container with premium effects */}
          <div 
            className="absolute inset-0 rounded-3xl premium-glass-container-enhanced"
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
              `,
              zIndex: 2
            }}
          />

          {/* Inner glow edge */}
          <div 
            className="absolute inset-0 rounded-3xl premium-inner-glow"
            style={{
              background: 'transparent',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(99, 102, 241, 0.12) 100%)',
              backgroundClip: 'border-box',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              padding: '1px',
              zIndex: 3
            }}
          />

          {/* Outer glow edge */}
          <div 
            className="absolute inset-0 rounded-3xl premium-outer-glow"
            style={{
              background: 'transparent',
              boxShadow: `
                0 0 20px rgba(59, 130, 246, 0.15),
                0 0 40px rgba(59, 130, 246, 0.08),
                0 0 60px rgba(99, 102, 241, 0.06),
                inset 0 0 1px rgba(255, 255, 255, 0.1)
              `,
              zIndex: 4
            }}
          />

          {/* Glass shine movement overlay */}
          <div 
            className="absolute inset-0 rounded-3xl premium-glass-shine overflow-hidden"
            style={{ zIndex: 5 }}
          >
            <div 
              className="absolute top-0 left-0 w-full h-full premium-shine-animation"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.08) 50%, transparent 70%)',
                transform: 'translateX(-100%)',
              }}
            />
          </div>
          
          {/* Colored edge lighting layers - Enhanced with ambient reflection */}
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-cyan-ambient opacity-60" style={{ zIndex: 6 }} />
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-emerald opacity-50" style={{ zIndex: 7 }} />
          <div className="absolute inset-0 rounded-3xl premium-edge-glow-violet-ambient opacity-55" style={{ zIndex: 8 }} />
          
          {/* Ambient light diffusion - Enhanced */}
          <div className="absolute inset-0 rounded-3xl premium-ambient-diffusion-enhanced" style={{ zIndex: 9 }} />
        </div>
      </div>

      {/* Enhanced premium animation styles with glass effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
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

          @keyframes premium-ambient-halo-pulse {
            0%, 100% { 
              opacity: 0.8;
              transform: scale(1.1);
            }
            50% { 
              opacity: 1;
              transform: scale(1.15);
            }
          }

          @keyframes premium-inner-glow-pulse {
            0%, 100% { 
              opacity: 0.7;
            }
            50% { 
              opacity: 1;
            }
          }

          @keyframes premium-outer-glow-pulse {
            0%, 100% { 
              opacity: 0.6;
              box-shadow: 
                0 0 20px rgba(59, 130, 246, 0.15),
                0 0 40px rgba(59, 130, 246, 0.08),
                0 0 60px rgba(99, 102, 241, 0.06),
                inset 0 0 1px rgba(255, 255, 255, 0.1);
            }
            50% { 
              opacity: 0.9;
              box-shadow: 
                0 0 30px rgba(59, 130, 246, 0.25),
                0 0 60px rgba(59, 130, 246, 0.12),
                0 0 90px rgba(99, 102, 241, 0.08),
                inset 0 0 1px rgba(255, 255, 255, 0.15);
            }
          }

          @keyframes premium-shine-sweep {
            0% { 
              transform: translateX(-100%) translateY(-100%) rotate(45deg);
              opacity: 0;
            }
            5% { 
              opacity: 1;
            }
            95% { 
              opacity: 1;
            }
            100% { 
              transform: translateX(200%) translateY(200%) rotate(45deg);
              opacity: 0;
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

          .premium-glass-container-enhanced {
            animation: premium-glass-shimmer-ambient 20s ease-in-out infinite;
            will-change: background;
          }

          .premium-ambient-halo {
            animation: premium-ambient-halo-pulse 18s ease-in-out infinite;
            will-change: transform, opacity;
          }

          .premium-inner-glow {
            animation: premium-inner-glow-pulse 12s ease-in-out infinite;
            will-change: opacity;
          }

          .premium-outer-glow {
            animation: premium-outer-glow-pulse 15s ease-in-out infinite;
            will-change: box-shadow, opacity;
          }

          .premium-shine-animation {
            animation: premium-shine-sweep 20s ease-in-out infinite;
            will-change: transform, opacity;
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

            .premium-ambient-halo {
              animation-duration: 25s;
            }

            .premium-shine-animation {
              animation-duration: 30s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .premium-glass-container-enhanced,
            .premium-ambient-halo,
            .premium-inner-glow,
            .premium-outer-glow,
            .premium-shine-animation,
            .premium-edge-glow-cyan-ambient,
            .premium-edge-glow-emerald,
            .premium-edge-glow-violet-ambient,
            .premium-ambient-diffusion-enhanced {
              animation: none;
            }
          }

          /* Performance optimizations */
          .premium-glass-container-enhanced,
          .premium-ambient-halo,
          .premium-inner-glow,
          .premium-outer-glow {
            transform: translateZ(0);
            backface-visibility: hidden;
          }
        `
      }} />
    </div>
  );
};

export default CinematicBackground;
