
import React from 'react';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Ultra-deep cinematic base */}
      <div className="absolute inset-0" style={{ background: '#060606' }}></div>
      
      {/* Depth gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/30 via-transparent to-black"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/10 to-black"></div>
      
      {/* Central AI Core - The main showcase */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Core processor unit */}
        <div className="relative w-80 h-48 md:w-96 md:h-56 lg:w-[28rem] lg:h-64">
          {/* Main chip/processor body */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-40 md:w-80 md:h-48 bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-600/20 animate-cinematic-float-1">
            {/* Holographic glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.01] rounded-xl animate-cinematic-glass-shimmer"></div>
            
            {/* Circuit pathways */}
            <div className="absolute inset-0 opacity-70">
              {/* Horizontal circuit lines */}
              <div className="absolute top-6 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-cinematic-pulse-fast"></div>
              <div className="absolute top-12 left-6 right-6 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent animate-cinematic-pulse-medium" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-12 left-4 right-4 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent animate-cinematic-pulse-slow" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-6 left-8 right-8 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-cinematic-pulse-fast" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Vertical circuit connections */}
              <div className="absolute left-16 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-cinematic-pulse-medium"></div>
              <div className="absolute right-16 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-violet-400/40 to-transparent animate-cinematic-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
            </div>
            
            {/* Central processing core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/10 via-gray-400/5 to-transparent rounded-lg animate-cinematic-core-pulse">
              <div className="absolute inset-1 bg-gradient-to-br from-cyan-400/20 via-violet-400/10 to-transparent rounded-lg blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/80 rounded-full animate-cinematic-core-pulse"></div>
            </div>
            
            {/* Core glow emission */}
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-violet-500/5 to-transparent rounded-xl blur-md"></div>
          </div>
          
          {/* Rotating outer ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 animate-cinematic-ring-pulse">
            <div className="w-full h-full rounded-full border border-gray-500/15 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 w-1 h-6 bg-gradient-to-b from-cyan-400/70 to-transparent transform -translate-x-1/2 blur-sm"></div>
              <div className="absolute bottom-0 left-1/2 w-1 h-4 bg-gradient-to-t from-violet-400/50 to-transparent transform -translate-x-1/2 blur-sm"></div>
              <div className="absolute left-0 top-1/2 w-6 h-1 bg-gradient-to-r from-pink-400/60 to-transparent transform -translate-y-1/2 blur-sm"></div>
              <div className="absolute right-0 top-1/2 w-4 h-1 bg-gradient-to-l from-green-400/50 to-transparent transform -translate-y-1/2 blur-sm"></div>
            </div>
          </div>
          
          {/* Signal indicators */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80">
            <div className="absolute -top-2 left-1/2 w-2 h-2 bg-cyan-400/90 rounded-full transform -translate-x-1/2 blur-sm animate-cinematic-float-2"></div>
            <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-violet-400/90 rounded-full transform -translate-x-1/2 blur-sm animate-cinematic-float-3"></div>
            <div className="absolute -left-2 top-1/2 w-2 h-2 bg-pink-400/90 rounded-full transform -translate-y-1/2 blur-sm animate-cinematic-float-4"></div>
            <div className="absolute -right-2 top-1/2 w-2 h-2 bg-green-400/90 rounded-full transform -translate-y-1/2 blur-sm animate-cinematic-float-1"></div>
          </div>
        </div>
        
        {/* Bottom reflection - Apple style */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 h-32 md:w-96 md:h-40 lg:w-[28rem] lg:h-48 opacity-20">
          <div className="w-full h-full bg-gradient-to-b from-gray-700/30 via-gray-800/15 to-transparent rounded-t-xl blur-xl scale-y-[-1] scale-95"></div>
        </div>
      </div>
      
      {/* Ambient atmospheric lighting */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-radial from-cyan-500/3 via-violet-500/2 to-transparent opacity-80 animate-cinematic-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-gradient-radial from-pink-500/2 via-green-500/1 to-transparent opacity-60 animate-cinematic-pulse-medium" style={{ animationDelay: '5s' }}></div>
      
      {/* Scan line effects */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-cinematic-scan-horizontal top-1/3"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-cinematic-scan-horizontal-delayed top-2/3"></div>
      </div>
      
      {/* Subtle depth particles for atmosphere */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`depth-particle-${i}`}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-cinematic-depth-float"
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${10 + (i % 3)}s`,
            }}
          />
        ))}
      </div>
      
      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>
      
      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-gray-950/50 to-transparent"></div>
    </div>
  );
};

export default CinematicBackground;
