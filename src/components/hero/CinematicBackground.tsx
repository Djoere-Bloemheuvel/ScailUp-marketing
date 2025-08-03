
import React from 'react';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Premium gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-black" />
      
      {/* Enhanced atmospheric layers */}
      <div className="absolute inset-0">
        {/* Primary atmospheric glow */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-96 bg-gradient-radial from-premium-silver/[0.03] via-premium-silver/[0.01] to-transparent rounded-full blur-3xl premium-ambient-pulse" />
        
        {/* Secondary depth layer */}
        <div className="absolute top-1/3 right-1/4 w-[80%] h-80 bg-gradient-radial from-blue-500/[0.02] via-purple-500/[0.01] to-transparent rounded-full blur-2xl premium-ambient-pulse" style={{ animationDelay: '5s' }} />
        
        {/* Tertiary accent layer */}
        <div className="absolute bottom-1/3 left-1/4 w-[70%] h-72 bg-gradient-radial from-cyan-400/[0.015] to-transparent rounded-full blur-2xl premium-ambient-pulse" style={{ animationDelay: '10s' }} />
      </div>

      {/* Main content background boxes - Made higher and re-added animations */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Primary content box - Positioned higher and with animations */}
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[70vh] sm:h-[65vh] md:h-[60vh] transform -translate-y-8 sm:-translate-y-12 md:-translate-y-16 lg:-translate-y-20">
          <div 
            className="absolute inset-0 rounded-3xl premium-ambient-pulse premium-glass-shimmer"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.03) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: `
                0 32px 64px rgba(255, 255, 255, 0.02),
                0 16px 32px rgba(255, 255, 255, 0.03),
                0 8px 16px rgba(255, 255, 255, 0.04),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(255, 255, 255, 0.05)
              `
            }}
          />
          
          {/* Secondary inner glow box - Also positioned higher with animations */}
          <div 
            className="absolute inset-4 sm:inset-6 md:inset-8 rounded-2xl premium-ambient-pulse premium-glass-shimmer"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 50%, rgba(255, 255, 255, 0.015) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: `
                0 16px 32px rgba(255, 255, 255, 0.015),
                inset 0 1px 0 rgba(255, 255, 255, 0.08)
              `,
              animationDelay: '3s'
            }}
          />
        </div>
      </div>

      {/* Premium scan effects - Adjusted for higher positioned boxes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal scan sweep */}
        <div 
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-premium-silver/30 to-transparent premium-scan-sweep-horizontal"
        />
        
        {/* Vertical scan sweep */}
        <div 
          className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-premium-silver/25 to-transparent premium-scan-sweep-vertical"
        />
        
        {/* Diagonal accent sweep */}
        <div 
          className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent premium-scan-sweep-diagonal"
        />
      </div>

      {/* Enhanced particle system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-premium-silver/40 rounded-full premium-particle-trail blur-sm"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 5)}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + (i % 4)}s`
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay for premium tech feel */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Re-added premium animation styles */}
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
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.03) 100%);
            }
            50% { 
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.04) 100%);
            }
          }

          @keyframes premium-scan-sweep-horizontal {
            0% { 
              transform: translateX(-100%); 
              opacity: 0; 
            }
            50% { 
              opacity: 1; 
            }
            100% { 
              transform: translateX(200%); 
              opacity: 0; 
            }
          }

          @keyframes premium-scan-sweep-vertical {
            0% { 
              transform: translateY(-100%); 
              opacity: 0; 
            }
            50% { 
              opacity: 1; 
            }
            100% { 
              transform: translateY(200%); 
              opacity: 0; 
            }
          }

          @keyframes premium-scan-sweep-diagonal {
            0% { 
              transform: rotate(45deg) translateX(-100%); 
              opacity: 0; 
            }
            50% { 
              opacity: 1; 
            }
            100% { 
              transform: rotate(45deg) translateX(200%); 
              opacity: 0; 
            }
          }

          @keyframes premium-particle-trail {
            0%, 100% { 
              opacity: 0.2; 
              transform: translateY(0) scale(0.8); 
            }
            50% { 
              opacity: 0.8; 
              transform: translateY(-20px) scale(1.2); 
            }
          }

          .premium-ambient-pulse {
            animation: premium-ambient-pulse 8s ease-in-out infinite;
          }

          .premium-glass-shimmer {
            animation: premium-glass-shimmer 12s ease-in-out infinite;
          }

          .premium-scan-sweep-horizontal {
            animation: premium-scan-sweep-horizontal 15s linear infinite;
          }

          .premium-scan-sweep-vertical {
            animation: premium-scan-sweep-vertical 18s linear infinite;
          }

          .premium-scan-sweep-diagonal {
            animation: premium-scan-sweep-diagonal 22s linear infinite;
          }

          .premium-particle-trail {
            animation: premium-particle-trail 6s ease-in-out infinite;
          }
        `
      }} />
    </div>
  );
};

export default CinematicBackground;
