
import React from 'react';
import AICoreCenter from './AICoreCenter';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Premium gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-black" />
      
      {/* Enhanced atmospheric layers */}
      <div className="absolute inset-0">
        {/* Primary atmospheric glow */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-96 bg-gradient-radial from-cyan-400/[0.02] via-violet-400/[0.01] to-transparent rounded-full blur-3xl premium-ambient-pulse" />
        
        {/* Secondary depth layer */}
        <div className="absolute top-1/3 right-1/4 w-[80%] h-80 bg-gradient-radial from-emerald-400/[0.015] via-pink-400/[0.008] to-transparent rounded-full blur-2xl premium-ambient-pulse" style={{ animationDelay: '5s' }} />
      </div>

      {/* AI Core Center Component */}
      <AICoreCenter />

      {/* Main content background boxes - Positioned higher with subtle glass effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[70vh] sm:h-[65vh] md:h-[60vh] transform -translate-y-8 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20">
          <div 
            className="absolute inset-0 rounded-3xl premium-glass-shimmer"
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
        </div>
      </div>

      {/* Subtle grid overlay for premium tech feel */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Premium animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes premium-ambient-pulse {
            0%, 100% { 
              opacity: 0.4; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.8; 
              transform: scale(1.02); 
            }
          }

          @keyframes premium-glass-shimmer {
            0%, 100% { 
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.02) 100%);
            }
            50% { 
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(34, 211, 238, 0.01) 50%, rgba(139, 92, 246, 0.02) 100%);
            }
          }

          .premium-ambient-pulse {
            animation: premium-ambient-pulse 8s ease-in-out infinite;
          }

          .premium-glass-shimmer {
            animation: premium-glass-shimmer 15s ease-in-out infinite;
          }
        `
      }} />
    </div>
  );
};

export default CinematicBackground;
