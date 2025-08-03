
import React from 'react';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-purple-950/20 to-indigo-950/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-black"></div>
      
      {/* Deep ambient glow layers */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-cinematic-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-600/4 rounded-full blur-3xl animate-cinematic-pulse-medium" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-indigo-600/3 rounded-full blur-3xl animate-cinematic-pulse-fast" style={{ animationDelay: '6s' }}></div>
      
      {/* Geometric orb elements */}
      <div className="absolute top-20 right-20 opacity-30">
        <div className="relative w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/8 to-transparent border border-white/10 animate-cinematic-float-1"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/4 to-transparent animate-cinematic-float-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/20 rounded-full animate-cinematic-core-pulse"></div>
        </div>
      </div>

      <div className="absolute bottom-32 left-16 opacity-25 hidden md:block">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/10 to-transparent border border-purple-400/15 animate-cinematic-float-3"></div>
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-400/5 to-transparent animate-cinematic-float-4"></div>
        </div>
      </div>

      {/* Geometric line elements */}
      <svg className="absolute inset-0 w-full h-full opacity-15 hidden lg:block" viewBox="0 0 1200 800">
        {/* Subtle geometric paths */}
        <path 
          d="M0,200 Q300,150 600,180 T1200,160" 
          stroke="url(#lineGradient1)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-cinematic-path-draw"
        />
        <path 
          d="M0,600 Q400,550 800,580 T1200,560" 
          stroke="url(#lineGradient2)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-cinematic-path-draw"
          style={{ animationDelay: '2s' }}
        />
        <circle 
          cx="200" 
          cy="300" 
          r="80" 
          stroke="url(#circleGradient)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-cinematic-ring-pulse"
        />
        <circle 
          cx="900" 
          cy="500" 
          r="60" 
          stroke="url(#circleGradient)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-cinematic-ring-pulse"
          style={{ animationDelay: '4s' }}
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
          <radialGradient id="circleGradient">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>
        </defs>
      </svg>

      {/* Depth particles - very subtle */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`depth-particle-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-cinematic-depth-float"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${15 + (i * 6)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Glass overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.01] to-transparent animate-cinematic-glass-shimmer"></div>
      
      {/* Subtle scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-cinematic-scan-horizontal top-1/3"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/15 to-transparent animate-cinematic-scan-horizontal-delayed top-2/3"></div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"></div>
    </div>
  );
};

export default CinematicBackground;
