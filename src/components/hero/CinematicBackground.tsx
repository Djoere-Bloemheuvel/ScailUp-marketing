
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

      {/* Main content background boxes - Clean Apple Vision Pro style */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[70vh] sm:h-[65vh] md:h-[60vh] transform -translate-y-8 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20">
          
          {/* Clean glass container - Apple Vision Pro style */}
          <div 
            className="absolute inset-0 rounded-3xl clean-glass-container"
            style={{
              background: 'transparent',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `,
              zIndex: 2
            }}
          />

          {/* Subtle white inner glow */}
          <div 
            className="absolute inset-0 rounded-3xl clean-inner-glow"
            style={{
              background: 'transparent',
              boxShadow: `
                inset 0 0 40px rgba(255, 255, 255, 0.03),
                inset 0 1px 1px rgba(255, 255, 255, 0.08)
              `,
              zIndex: 3
            }}
          />

          {/* Very soft white/silver outline */}
          <div 
            className="absolute inset-0 rounded-3xl clean-outline"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              zIndex: 4
            }}
          />

          {/* Premium glass shine effect */}
          <div 
            className="absolute inset-0 rounded-3xl clean-glass-shine overflow-hidden"
            style={{ zIndex: 5 }}
          >
            <div 
              className="absolute top-0 left-0 w-full h-full clean-shine-animation"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.04) 50%, transparent 70%)',
                transform: 'translateX(-100%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Clean animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes clean-glass-shimmer {
            0%, 100% { 
              border-color: rgba(255, 255, 255, 0.08);
              box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }
            50% { 
              border-color: rgba(255, 255, 255, 0.12);
              box-shadow: 
                0 12px 48px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.15);
            }
          }

          @keyframes clean-inner-glow-pulse {
            0%, 100% { 
              box-shadow: 
                inset 0 0 40px rgba(255, 255, 255, 0.03),
                inset 0 1px 1px rgba(255, 255, 255, 0.08);
            }
            50% { 
              box-shadow: 
                inset 0 0 60px rgba(255, 255, 255, 0.05),
                inset 0 1px 1px rgba(255, 255, 255, 0.12);
            }
          }

          @keyframes clean-outline-pulse {
            0%, 100% { 
              border-color: rgba(255, 255, 255, 0.04);
            }
            50% { 
              border-color: rgba(255, 255, 255, 0.06);
            }
          }

          @keyframes clean-shine-sweep {
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

          .clean-glass-container {
            animation: clean-glass-shimmer 15s ease-in-out infinite;
            will-change: border-color, box-shadow;
          }

          .clean-inner-glow {
            animation: clean-inner-glow-pulse 12s ease-in-out infinite;
            will-change: box-shadow;
          }

          .clean-outline {
            animation: clean-outline-pulse 18s ease-in-out infinite;
            will-change: border-color;
          }

          .clean-shine-animation {
            animation: clean-shine-sweep 25s ease-in-out infinite;
            will-change: transform, opacity;
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .clean-glass-container,
            .clean-inner-glow,
            .clean-outline {
              animation-duration: 20s;
            }
            
            .clean-shine-animation {
              animation-duration: 30s;
            }
          }

          /* Reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .clean-glass-container,
            .clean-inner-glow,
            .clean-outline,
            .clean-shine-animation {
              animation: none;
            }
          }

          /* Performance optimizations */
          .clean-glass-container,
          .clean-inner-glow,
          .clean-outline {
            transform: translateZ(0);
            backface-visibility: hidden;
          }
        `
      }} />
    </div>
  );
};

export default CinematicBackground;
