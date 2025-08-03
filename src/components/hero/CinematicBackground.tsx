
import React from 'react';
import { Brain, Cpu, Network, Target, Zap, Bot, Shield, Sparkles } from 'lucide-react';

const CinematicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient layers - Apple-style elegance */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-purple-950/20 to-indigo-950/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-black"></div>
      
      {/* Brand-consistent ambient glow layers */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-cinematic-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-500/4 rounded-full blur-3xl animate-cinematic-pulse-medium" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl animate-cinematic-pulse-fast" style={{ animationDelay: '6s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-green-400/2 rounded-full blur-3xl animate-cinematic-pulse-slow" style={{ animationDelay: '9s' }}></div>

      {/* Abstract AI Icons - Inspired by Services section */}
      
      {/* Brain - Top Left (Cyaan accent like "Snelheid") */}
      <div className="absolute top-20 left-16 opacity-40 cinematic-entrance hidden md:block">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-md border border-cyan-400/20 animate-cinematic-float-1 flex items-center justify-center">
            <Brain className="w-8 h-8 text-cyan-400/80" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-transparent animate-cinematic-glass-shimmer"></div>
        </div>
      </div>

      {/* CPU - Top Right (Paars accent like "Ownership") */}
      <div className="absolute top-32 right-20 opacity-35 cinematic-entrance" style={{ animationDelay: '0.5s' }}>
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/12 to-purple-600/6 backdrop-blur-md border border-purple-400/25 animate-cinematic-float-2 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-purple-400/85" />
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/8 to-transparent animate-cinematic-glass-shimmer" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Network - Middle Left (Blauw accent) */}
      <div className="absolute top-1/2 left-12 opacity-30 cinematic-entrance hidden sm:block" style={{ animationDelay: '1s' }}>
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-md border border-blue-400/20 animate-cinematic-float-3 flex items-center justify-center">
            <Network className="w-5 h-5 text-blue-400/80" />
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/6 to-transparent animate-cinematic-glass-shimmer" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Target - Center Right (Roze/oranje like hover effects) */}
      <div className="absolute top-1/3 right-16 opacity-25 cinematic-entrance" style={{ animationDelay: '1.5s' }}>
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-500/8 to-orange-500/6 backdrop-blur-md border border-pink-400/15 animate-cinematic-float-4 flex items-center justify-center">
            <Target className="w-4 h-4 text-pink-400/75" />
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-400/5 to-transparent animate-cinematic-glass-shimmer" style={{ animationDelay: '6s' }}></div>
        </div>
      </div>

      {/* Zap - Bottom Left (Cyaan like "Snelheid") */}
      <div className="absolute bottom-32 left-20 opacity-35 cinematic-entrance hidden md:block" style={{ animationDelay: '2s' }}>
        <div className="relative w-18 h-18">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/12 to-cyan-600/7 backdrop-blur-md border border-cyan-400/25 animate-cinematic-float-1 flex items-center justify-center">
            <Zap className="w-7 h-7 text-cyan-400/85" />
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/8 to-transparent animate-cinematic-glass-shimmer" style={{ animationDelay: '8s' }}></div>
        </div>
      </div>

      {/* Bot - Bottom Right (Lichtgroen like ROI icon) */}
      <div className="absolute bottom-24 right-12 opacity-30 cinematic-entrance" style={{ animationDelay: '2.5s' }}>
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-400/10 to-green-500/6 backdrop-blur-md border border-green-400/20 animate-cinematic-float-2 flex items-center justify-center">
            <Bot className="w-5 h-5 text-green-400/80" />
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-400/6 to-transparent animate-cinematic-glass-shimmer" style={{ animationDelay: '10s' }}></div>
        </div>
      </div>

      {/* Shield - Middle Right (Paars accent) */}
      <div className="absolute top-2/3 right-24 opacity-25 cinematic-entrance hidden lg:block" style={{ animationDelay: '3s' }}>
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/8 to-purple-600/5 backdrop-blur-md border border-purple-400/18 animate-cinematic-float-3 flex items-center justify-center">
            <Shield className="w-4 h-4 text-purple-400/75" />
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-400/5 to-transparent animate-cinematic-glass-shimmer" style={{ animationDelay: '12s' }}></div>
        </div>
      </div>

      {/* Sparkles - Top Center Background (Roze accent) */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 opacity-20 cinematic-entrance hidden sm:block" style={{ animationDelay: '3.5s' }}>
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-500/6 to-orange-500/4 backdrop-blur-md border border-pink-400/12 animate-cinematic-float-4 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-pink-400/70" />
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-400/4 to-transparent animate-cinematic-glass-shimmer" style={{ animationDelay: '14s' }}></div>
        </div>
      </div>

      {/* Geometric connection lines - very subtle */}
      <svg className="absolute inset-0 w-full h-full opacity-10 hidden lg:block" viewBox="0 0 1200 800">
        <path 
          d="M100,150 Q300,120 500,140 T900,130" 
          stroke="url(#connectionGradient1)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-cinematic-path-draw"
        />
        <path 
          d="M200,600 Q500,570 800,590 T1100,580" 
          stroke="url(#connectionGradient2)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-cinematic-path-draw"
          style={{ animationDelay: '3s' }}
        />
        
        <defs>
          <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.2)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </linearGradient>
          <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.15)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Depth particles - brand colors */}
      <div className="absolute inset-0 opacity-15 hidden md:block">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`brand-particle-${i}`}
            className={`absolute w-1 h-1 rounded-full animate-cinematic-depth-float ${
              i % 4 === 0 ? 'bg-cyan-400/30' : 
              i % 4 === 1 ? 'bg-purple-400/30' : 
              i % 4 === 2 ? 'bg-pink-400/30' : 
              'bg-green-400/30'
            }`}
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${10 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Apple-style glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/[0.008] to-transparent animate-cinematic-glass-shimmer"></div>
      
      {/* Subtle brand-colored scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-cinematic-scan-horizontal top-1/4"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/12 to-transparent animate-cinematic-scan-horizontal-delayed top-3/4"></div>
      </div>

      {/* Apple-style vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>
    </div>
  );
};

export default CinematicBackground;
