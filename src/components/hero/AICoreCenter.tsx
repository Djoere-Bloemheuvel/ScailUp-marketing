
import React, { useEffect } from 'react';

const AICoreCenter = () => {
  useEffect(() => {
    // Import the animations CSS
    import('../../styles/animations.css');
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Main AI Core Container */}
      <div className="relative w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] gpu-accelerated">
        
        {/* Central AI Core Ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
          <div className="relative w-full h-full gpu-accelerated">
            {/* Core ring - main glow */}
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-emerald-400/25 blur-sm will-change-transform"
              style={{
                animation: 'ai-core-pulse 4s ease-in-out infinite',
                boxShadow: '0 0 60px rgba(34, 211, 238, 0.2), 0 0 120px rgba(139, 92, 246, 0.1)'
              }}
            />
            <div 
              className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400/40 via-white/10 to-violet-400/30 will-change-transform"
              style={{
                animation: 'ai-core-pulse 4s ease-in-out infinite',
                animationDelay: '1s'
              }}
            />
            
            {/* Inner core */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-white/80 via-cyan-400/60 to-violet-400/40 will-change-transform"
              style={{
                animation: 'ai-core-breathe 3s ease-in-out infinite',
                boxShadow: '0 0 40px rgba(255, 255, 255, 0.4), 0 0 80px rgba(34, 211, 238, 0.3)'
              }}
            />
            
            {/* Core accent ring */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full border border-cyan-400/20 will-change-transform"
              style={{
                animation: 'ai-core-pulse 4s ease-in-out infinite',
                animationDelay: '2s'
              }}
            />
          </div>
        </div>

        {/* Rotating Outer Rings - Optimized */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* First rotating ring */}
          <div 
            className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] will-change-transform"
            style={{
              animation: 'ai-ring-rotate 40s linear infinite'
            }}
          >
            <div 
              className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400/10 via-transparent via-transparent to-violet-400/15"
              style={{
                mask: 'linear-gradient(45deg, transparent 25%, black 40%, black 60%, transparent 75%)'
              }}
            />
          </div>
          
          {/* Second rotating ring */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[450px] sm:h-[450px] lg:w-[580px] lg:h-[580px] will-change-transform"
            style={{
              animation: 'ai-ring-rotate-reverse 35s linear infinite'
            }}
          >
            <div 
              className="w-full h-full rounded-full border border-transparent bg-gradient-to-r from-emerald-400/8 via-transparent via-transparent to-pink-400/12"
              style={{
                mask: 'linear-gradient(45deg, transparent 25%, black 40%, black 60%, transparent 75%)'
              }}
            />
          </div>
        </div>

        {/* Circuit Lines - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Top circuit line */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0.5 h-32 bg-gradient-to-t from-cyan-400/40 to-transparent will-change-opacity"
            style={{ animation: 'ai-circuit-pulse 5s ease-in-out infinite' }}
          />
          
          {/* Right circuit line */}
          <div 
            className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-violet-400/40 to-transparent will-change-opacity"
            style={{ animation: 'ai-circuit-pulse 5s ease-in-out infinite', animationDelay: '1s' }}
          />
          
          {/* Bottom circuit line */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0.5 h-32 bg-gradient-to-b from-emerald-400/40 to-transparent will-change-opacity"
            style={{ animation: 'ai-circuit-pulse 5s ease-in-out infinite', animationDelay: '2s' }}
          />
          
          {/* Left circuit line */}
          <div 
            className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-32 h-0.5 bg-gradient-to-l from-pink-400/40 to-transparent will-change-opacity"
            style={{ animation: 'ai-circuit-pulse 5s ease-in-out infinite', animationDelay: '3s' }}
          />
        </div>

        {/* Circuit Connection Points - Hidden on mobile */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Connection points at circuit line ends */}
          <div 
            className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400/60 will-change-transform"
            style={{ 
              animation: 'ai-signal-pulse 2s ease-in-out infinite',
              boxShadow: '0 0 20px currentColor, 0 0 40px currentColor'
            }}
          />
          <div 
            className="absolute top-1/2 -right-32 transform -translate-y-1/2 w-3 h-3 rounded-full bg-violet-400/60 will-change-transform"
            style={{ 
              animation: 'ai-signal-pulse 2s ease-in-out infinite',
              animationDelay: '1s',
              boxShadow: '0 0 20px currentColor, 0 0 40px currentColor'
            }}
          />
          <div 
            className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-400/60 will-change-transform"
            style={{ 
              animation: 'ai-signal-pulse 2s ease-in-out infinite',
              animationDelay: '2s',
              boxShadow: '0 0 20px currentColor, 0 0 40px currentColor'
            }}
          />
          <div 
            className="absolute top-1/2 -left-32 transform -translate-y-1/2 w-3 h-3 rounded-full bg-pink-400/60 will-change-transform"
            style={{ 
              animation: 'ai-signal-pulse 2s ease-in-out infinite',
              animationDelay: '3s',
              boxShadow: '0 0 20px currentColor, 0 0 40px currentColor'
            }}
          />
        </div>

        {/* Ambient Particles - Simplified for mobile */}
        <div className="absolute inset-0">
          {Array.from({ length: typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full blur-sm will-change-transform"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${25 + (i * 8)}%`,
                animation: `ai-particle-float ${8 + (i % 3) * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`
              }}
            />
          ))}
        </div>

        {/* Glossy Reflection Base - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[400px] h-32 lg:w-[600px] lg:h-48">
          <div 
            className="w-full h-full bg-gradient-to-t from-white/[0.03] via-white/[0.01] to-transparent rounded-full blur-2xl will-change-opacity"
            style={{ animation: 'ai-reflection-shimmer 12s ease-in-out infinite' }}
          />
        </div>
      </div>

      {/* Scan Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent top-1/3 will-change-transform"
          style={{ animation: 'ai-scan-horizontal 20s linear infinite' }}
        />
        <div 
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-violet-400/15 to-transparent bottom-1/3 will-change-transform"
          style={{ animation: 'ai-scan-horizontal-delayed 25s linear infinite' }}
        />
      </div>
    </div>
  );
};

export default AICoreCenter;
