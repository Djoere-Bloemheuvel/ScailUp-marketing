
import React from 'react';

const AppleAICore = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space background */}
      <div className="absolute inset-0" style={{ background: '#060606' }}></div>
      
      {/* Subtle depth gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/20 via-transparent to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/5 to-black/40"></div>
      
      {/* Central AI Core */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Main processor core */}
        <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
          
          {/* Core processor hexagon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
            {/* Hexagonal core structure */}
            <div 
              className="w-full h-full bg-gradient-to-br from-white/10 via-gray-800/20 to-gray-900/30 backdrop-blur-sm border border-gray-600/15 relative overflow-hidden apple-core-entrance"
              style={{
                clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
                boxShadow: '0 0 60px rgba(34, 211, 238, 0.15), 0 0 120px rgba(147, 51, 234, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Glass overlay with shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.02] apple-glass-shimmer"></div>
              
              {/* Inner pulsing core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-radial from-cyan-400/30 via-violet-400/15 to-transparent rounded-full apple-core-pulse">
                <div className="absolute inset-2 bg-gradient-radial from-white/20 via-cyan-300/10 to-transparent rounded-full blur-sm"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/90 rounded-full apple-inner-pulse"></div>
              </div>
              
              {/* Circuit pathways inside hexagon */}
              <div className="absolute inset-0 opacity-60">
                {/* Horizontal circuits */}
                <div className="absolute top-1/3 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent apple-circuit-pulse"></div>
                <div className="absolute top-2/3 left-6 right-6 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent apple-circuit-pulse" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Vertical circuits */}
                <div className="absolute left-1/3 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-pink-400/45 to-transparent apple-circuit-pulse" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute right-1/3 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent apple-circuit-pulse" style={{ animationDelay: '2.2s' }}></div>
              </div>
            </div>
          </div>
          
          {/* Light rings - outer to inner */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] apple-ring-rotate-slow">
            <div className="w-full h-full rounded-full border border-gray-500/10 relative">
              <div className="absolute top-0 left-1/2 w-2 h-8 bg-gradient-to-b from-cyan-400/60 to-transparent transform -translate-x-1/2 blur-sm"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-6 bg-gradient-to-t from-violet-400/50 to-transparent transform -translate-x-1/2 blur-sm"></div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 apple-ring-rotate-medium">
            <div className="w-full h-full rounded-full border border-gray-500/8 relative">
              <div className="absolute left-0 top-1/2 w-8 h-2 bg-gradient-to-r from-pink-400/55 to-transparent transform -translate-y-1/2 blur-sm"></div>
              <div className="absolute right-0 top-1/2 w-6 h-2 bg-gradient-to-l from-emerald-400/45 to-transparent transform -translate-y-1/2 blur-sm"></div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 apple-ring-rotate-fast">
            <div className="w-full h-full rounded-full border border-gray-400/12 relative opacity-80">
              <div className="absolute top-0 right-0 w-1 h-4 bg-cyan-400/70 transform rotate-45 blur-sm"></div>
              <div className="absolute bottom-0 left-0 w-1 h-4 bg-violet-400/60 transform -rotate-45 blur-sm"></div>
            </div>
          </div>
          
          {/* Signal pulse indicators */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem]">
            <div className="absolute -top-1 left-1/2 w-3 h-3 bg-cyan-400/80 rounded-full transform -translate-x-1/2 blur-sm apple-signal-pulse"></div>
            <div className="absolute -bottom-1 left-1/2 w-3 h-3 bg-violet-400/80 rounded-full transform -translate-x-1/2 blur-sm apple-signal-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -left-1 top-1/2 w-3 h-3 bg-pink-400/80 rounded-full transform -translate-y-1/2 blur-sm apple-signal-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -right-1 top-1/2 w-3 h-3 bg-emerald-400/80 rounded-full transform -translate-y-1/2 blur-sm apple-signal-pulse" style={{ animationDelay: '3s' }}></div>
          </div>
          
          {/* Outward circuit pathways */}
          <div className="absolute inset-0 opacity-40">
            {/* Top pathway */}
            <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-t from-cyan-400/40 to-transparent transform -translate-x-1/2 apple-circuit-extend"></div>
            
            {/* Bottom pathway */}
            <div className="absolute bottom-0 left-1/2 w-px h-20 bg-gradient-to-b from-violet-400/35 to-transparent transform -translate-x-1/2 apple-circuit-extend" style={{ animationDelay: '1s' }}></div>
            
            {/* Left pathway */}
            <div className="absolute left-0 top-1/2 w-20 h-px bg-gradient-to-l from-pink-400/40 to-transparent transform -translate-y-1/2 apple-circuit-extend" style={{ animationDelay: '2s' }}></div>
            
            {/* Right pathway */}
            <div className="absolute right-0 top-1/2 w-20 h-px bg-gradient-to-r from-emerald-400/35 to-transparent transform -translate-y-1/2 apple-circuit-extend" style={{ animationDelay: '3s' }}></div>
          </div>
          
          {/* MacBook-style reflection - hidden on mobile */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-96 h-48 md:w-[28rem] md:h-56 lg:w-[32rem] lg:h-64 opacity-20 hidden md:block">
            <div 
              className="w-full h-full bg-gradient-to-b from-gray-700/25 via-gray-800/12 to-transparent rounded-t-3xl blur-2xl scale-y-[-1] scale-95"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
              }}
            ></div>
          </div>
        </div>
        
        {/* Ambient core glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] md:w-[40rem] md:h-[40rem] lg:w-[48rem] lg:h-[48rem] bg-gradient-radial from-cyan-500/8 via-violet-500/4 to-transparent opacity-80 apple-ambient-pulse"></div>
        
        {/* Top-down directional glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] bg-gradient-to-b from-white/[0.02] via-transparent to-transparent rounded-full opacity-60"></div>
      </div>
      
      {/* Scanline effects - occasional passes */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent apple-scanline-pass" style={{ top: '35%' }}></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent apple-scanline-pass" style={{ top: '65%', animationDelay: '8s' }}></div>
      </div>
      
      {/* Subtle depth particles - hidden on mobile */}
      <div className="absolute inset-0 opacity-8 hidden lg:block">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`depth-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full apple-depth-float"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${25 + (i * 10)}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${12 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>
      
      {/* Bottom fade for content transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-gray-950/60 to-transparent"></div>
    </div>
  );
};

export default AppleAICore;
