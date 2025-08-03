
import React from 'react';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Ultra-deep cinematic base */}
      <div className="absolute inset-0" style={{ background: '#060606' }}></div>
      
      {/* Depth gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/30 via-transparent to-black"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/10 to-black"></div>
      
      {/* AI Digital Face - Right Side Positioning */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 opacity-40 md:opacity-50">
        <div className="relative w-96 h-[28rem] md:w-[28rem] md:h-[36rem] lg:w-[32rem] lg:h-[42rem]">
          {/* Face base structure with fragmenting effect */}
          <div className="absolute inset-0 overflow-hidden">
            
            {/* Main face silhouette - subtle base */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-64 md:w-56 md:h-80 lg:w-64 lg:h-96 bg-gradient-to-br from-gray-800/15 via-gray-700/10 to-gray-900/20 rounded-t-full animate-cinematic-face-pulse backdrop-blur-sm">
              
              {/* Face features - eyes area */}
              <div className="absolute top-16 md:top-20 lg:top-24 left-1/2 transform -translate-x-1/2 flex space-x-8 md:space-x-12 lg:space-x-16">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400/50 rounded-full animate-cinematic-eye-glow blur-sm"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400/50 rounded-full animate-cinematic-eye-glow blur-sm" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Nose bridge - subtle line */}
              <div className="absolute top-28 md:top-36 lg:top-44 left-1/2 transform -translate-x-1/2 w-px h-6 md:h-8 lg:h-12 bg-gradient-to-b from-transparent via-gray-400/25 to-transparent animate-cinematic-pulse-slow"></div>
              
              {/* Mouth area - horizontal hint */}
              <div className="absolute top-40 md:top-52 lg:top-64 left-1/2 transform -translate-x-1/2 w-6 md:w-8 lg:w-12 h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent animate-cinematic-pulse-medium"></div>
            </div>
            
            {/* Digital fragmentation blocks - scattered around face */}
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={`fragment-${i}`}
                className="absolute bg-gradient-to-br from-cyan-400/15 via-gray-600/10 to-violet-400/8 animate-cinematic-fragment-float rounded-sm"
                style={{
                  width: `${8 + (i % 4) * 6}px`,
                  height: `${6 + (i % 3) * 5}px`,
                  left: `${10 + (i % 9) * 10}%`,
                  top: `${5 + (i % 8) * 11}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${12 + (i % 4) * 3}s`,
                  transform: `rotate(${i * 11}deg)`,
                }}
              />
            ))}
            
            {/* Matrix-style floating blocks - inspired by uploaded image */}
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={`matrix-${i}`}
                className="absolute animate-cinematic-matrix-float"
                style={{
                  width: `${12 + (i % 3) * 8}px`,
                  height: `${12 + (i % 3) * 8}px`,
                  left: `${15 + (i % 6) * 12}%`,
                  top: `${10 + (i % 7) * 10}%`,
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${15 + (i % 3) * 5}s`,
                  background: i % 4 === 0 ? 'rgba(34, 211, 238, 0.12)' :
                              i % 4 === 1 ? 'rgba(147, 51, 234, 0.10)' :
                              i % 4 === 2 ? 'rgba(236, 72, 153, 0.08)' :
                              'rgba(16, 185, 129, 0.09)',
                }}
              />
            ))}
            
            {/* Holographic scan lines across face */}
            <div className="absolute inset-0 opacity-30 overflow-hidden">
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-cinematic-face-scan" style={{ top: '15%' }}></div>
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent animate-cinematic-face-scan" style={{ top: '35%', animationDelay: '3s' }}></div>
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-400/28 to-transparent animate-cinematic-face-scan" style={{ top: '55%', animationDelay: '6s' }}></div>
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-emerald-400/22 to-transparent animate-cinematic-face-scan" style={{ top: '75%', animationDelay: '9s' }}></div>
            </div>
            
            {/* Data formation effect - pixelated overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/[0.008] to-transparent animate-cinematic-data-formation"></div>
          </div>
          
          {/* Face emergence glow aura */}
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-violet-500/3 to-transparent blur-3xl animate-cinematic-face-aura"></div>
        </div>
      </div>

      {/* Central processing core - left-center for depth */}
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 opacity-60">
        <div className="relative w-64 h-40 md:w-80 md:h-48 lg:w-96 lg:h-56">
          {/* Main processor unit */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-32 md:w-72 md:h-40 lg:w-80 lg:h-44 bg-gradient-to-br from-gray-800/25 via-gray-700/20 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-600/15 animate-cinematic-core-pulse">
            
            {/* Circuit pathways - inspired by digital brain */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-cinematic-pulse-fast"></div>
              <div className="absolute top-8 left-6 right-6 h-px bg-gradient-to-r from-transparent via-violet-400/35 to-transparent animate-cinematic-pulse-medium" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-8 left-4 right-4 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent animate-cinematic-pulse-slow" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-4 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent animate-cinematic-pulse-fast" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Vertical connections */}
              <div className="absolute left-12 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-cinematic-pulse-medium"></div>
              <div className="absolute right-12 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-violet-400/30 to-transparent animate-cinematic-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
            </div>
            
            {/* Central AI core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-white/8 via-gray-400/4 to-transparent rounded-lg animate-cinematic-core-pulse">
              <div className="absolute inset-1 bg-gradient-to-br from-cyan-400/15 via-violet-400/8 to-transparent rounded-lg blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/60 rounded-full animate-cinematic-core-pulse"></div>
            </div>
          </div>
          
          {/* Surrounding energy ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 animate-cinematic-ring-pulse opacity-30">
            <div className="w-full h-full rounded-full border border-gray-500/12 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-gradient-to-b from-cyan-400/50 to-transparent transform -translate-x-1/2 blur-sm"></div>
              <div className="absolute bottom-0 left-1/2 w-0.5 h-3 bg-gradient-to-t from-violet-400/40 to-transparent transform -translate-x-1/2 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Atmospheric lighting effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-radial from-cyan-500/2 via-violet-500/1 to-transparent opacity-70 animate-cinematic-ambient-pulse"></div>
      <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-pink-500/1.5 via-emerald-500/0.8 to-transparent opacity-50 animate-cinematic-ambient-pulse" style={{ animationDelay: '8s' }}></div>
      
      {/* Tech shimmer scanlines - vertical */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-cinematic-shimmer-vertical left-1/4"></div>
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent animate-cinematic-shimmer-vertical-delayed right-1/3"></div>
      </div>
      
      {/* Background pulse ring - behind CTAs */}
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] opacity-15">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-cinematic-cta-pulse blur-2xl"></div>
      </div>
      
      {/* Subtle depth particles for premium feel */}
      <div className="absolute inset-0 opacity-8 hidden md:block">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`depth-particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full animate-cinematic-depth-float"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${15 + (i * 10)}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${18 + (i % 2) * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Premium vignette for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"></div>
      
      {/* Bottom seamless transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-gray-950/30 to-transparent"></div>
    </div>
  );
};

export default CinematicBackground;
