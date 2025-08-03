
import React from 'react';
import AICoreCenter from './AICoreCenter';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black" />

      {/* AI Core Center Component */}
      <AICoreCenter />

      {/* Ambient glow ring around text area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[70vh] sm:h-[65vh] md:h-[60vh] transform -translate-y-8 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20">
          {/* Ambient glow ring - positioned outward */}
          <div 
            className="absolute inset-0 rounded-3xl ambient-glow-ring"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 45%, rgba(34, 211, 238, 0.015) 60%, rgba(139, 92, 246, 0.01) 75%, transparent 85%)',
              transform: 'scale(1.15)',
              filter: 'blur(40px)'
            }}
          />
          
          {/* Secondary ambient ring */}
          <div 
            className="absolute inset-0 rounded-3xl ambient-glow-ring"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 50%, rgba(16, 185, 129, 0.008) 65%, rgba(236, 72, 153, 0.006) 80%, transparent 90%)',
              transform: 'scale(1.25)',
              filter: 'blur(60px)',
              animationDelay: '3s'
            }}
          />
        </div>
      </div>

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
          
          {/* Apple-style reflection effect underneath */}
          <div 
            className="absolute top-full left-0 right-0 h-32 sm:h-40 md:h-48 rounded-b-3xl apple-reflection"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.008) 30%, transparent 70%)',
              backdropFilter: 'blur(15px)',
              transform: 'scaleY(-0.3) translateY(-10px)',
              transformOrigin: 'top center',
              opacity: '0.6'
            }}
          />
        </div>
      </div>

      {/* Subtle abstract AI face on right edge - Hidden on mobile for performance */}
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-20 pointer-events-none">
        <div className="relative w-full h-full">
          {/* AI Face outline */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-64 rounded-full border border-cyan-400/10 ai-face-glow" />
          
          {/* Eyes */}
          <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-400/20 ai-eye-pulse" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-400/20 ai-eye-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Neural network lines */}
          <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent ai-neural-pulse" />
          <div className="absolute top-2/3 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-violet-400/10 to-transparent ai-neural-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Slow ambient animation - Rotating circuit elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/5 rounded-full ambient-rotate-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-violet-400/5 rounded-full ambient-rotate-reverse" />
        <div className="absolute top-1/2 left-1/6 w-16 h-16 border border-emerald-400/5 rounded-full ambient-rotate-slow" style={{ animationDelay: '10s' }} />
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

          @keyframes ambient-glow-ring {
            0%, 100% { 
              opacity: 0.6; 
              transform: scale(1.15) rotate(0deg); 
            }
            50% { 
              opacity: 1; 
              transform: scale(1.18) rotate(1deg); 
            }
          }

          @keyframes apple-reflection {
            0%, 100% { 
              opacity: 0.6; 
            }
            50% { 
              opacity: 0.4; 
            }
          }

          @keyframes ai-face-glow {
            0%, 100% { 
              opacity: 0.1; 
              box-shadow: 0 0 20px rgba(34, 211, 238, 0.05); 
            }
            50% { 
              opacity: 0.15; 
              box-shadow: 0 0 30px rgba(34, 211, 238, 0.08); 
            }
          }

          @keyframes ai-eye-pulse {
            0%, 100% { 
              opacity: 0.3; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.6; 
              transform: scale(1.2); 
            }
          }

          @keyframes ai-neural-pulse {
            0%, 100% { 
              opacity: 0.2; 
            }
            50% { 
              opacity: 0.5; 
            }
          }

          @keyframes ambient-rotate-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes ambient-rotate-reverse {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }

          .premium-glass-shimmer {
            animation: premium-glass-shimmer 15s ease-in-out infinite;
          }

          .ambient-glow-ring {
            animation: ambient-glow-ring 12s ease-in-out infinite;
          }

          .apple-reflection {
            animation: apple-reflection 8s ease-in-out infinite;
          }

          .ai-face-glow {
            animation: ai-face-glow 10s ease-in-out infinite;
          }

          .ai-eye-pulse {
            animation: ai-eye-pulse 4s ease-in-out infinite;
          }

          .ai-neural-pulse {
            animation: ai-neural-pulse 6s ease-in-out infinite;
          }

          .ambient-rotate-slow {
            animation: ambient-rotate-slow 60s linear infinite;
          }

          .ambient-rotate-reverse {
            animation: ambient-rotate-reverse 45s linear infinite;
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .ambient-glow-ring {
              animation-duration: 8s;
            }
            
            .apple-reflection {
              animation-duration: 6s;
            }
            
            .ambient-rotate-slow,
            .ambient-rotate-reverse {
              animation-duration: 40s;
            }
          }
        `
      }} />
    </div>
  );
};

export default CinematicBackground;
