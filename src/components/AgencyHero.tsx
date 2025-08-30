import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AgencyAnimatedHeadline from './AgencyAnimatedHeadline';
import AgencyROICalculator from './AgencyROICalculator';

const AgencyHero = () => {
  const handlePartnershipClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/kenniscentrum';
    }
  };

  const handleCasesClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/kenniscentrum';
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-0 overflow-hidden">
      
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Agency-themed backlights - closer positioning on mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-70 xs:opacity-75 sm:opacity-70 md:opacity-65 lg:opacity-60 will-change-transform">
        <div className="absolute top-[25%] xs:top-[27%] sm:top-1/4 left-1/2 w-[350px] h-[200px] xs:w-[400px] xs:h-[225px] sm:w-[400px] sm:h-[200px] md:w-[500px] md:h-[250px] lg:w-[700px] lg:h-[350px] xl:w-[800px] xl:h-[400px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl xs:blur-2xl sm:blur-3xl will-change-transform" style={{ transform: 'translate3d(-50%, -25%, 0)' }}></div>
        <div className="absolute bottom-[30%] xs:bottom-[32%] sm:bottom-1/3 right-[15%] xs:right-[17%] sm:right-1/4 w-[300px] h-[300px] xs:w-[330px] xs:h-[330px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl xs:blur-2xl sm:blur-3xl will-change-transform" style={{ transform: 'translate3d(25%, 0, 0)' }}></div>
        <div className="absolute top-[50%] xs:top-[52%] sm:top-1/2 left-[20%] xs:left-[22%] sm:left-1/4 w-[250px] h-[150px] xs:w-[280px] xs:h-[170px] sm:w-[260px] sm:h-[160px] md:w-[320px] md:h-[200px] lg:w-[450px] lg:h-[270px] xl:w-[500px] xl:h-[300px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl xs:blur-2xl sm:blur-3xl opacity-80 will-change-transform"></div>
      </div>
      
      {/* Agency-specific animation styles */}
      <style>{`
        @keyframes agency-flow {
          0%, 100% { transform: translateX(-30%) scale(1) rotate(0deg); opacity: 0.2; }
          50% { transform: translateX(30%) scale(1.1) rotate(2deg); opacity: 0.4; }
        }
        
        @keyframes partnership-drift {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-40px) rotate(1deg) scale(1.05); }
          75% { transform: translateY(40px) rotate(-1deg) scale(0.95); }
        }
        
        @keyframes scale-glow {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); opacity: 0.3; }
          25% { transform: translateX(80px) translateY(-50px) scale(1.3); opacity: 0.5; }
          50% { transform: translateX(160px) translateY(0) scale(0.8); opacity: 0.2; }
          75% { transform: translateX(80px) translateY(50px) scale(1.2); opacity: 0.4; }
        }
      `}</style>
      
      {/* Optimized ambient lights with agency theme */}
      <div className="absolute inset-0 opacity-20 sm:opacity-25 md:opacity-30 will-change-transform">
        {/* Partnership connection lines - agency growth inspired */}
        <div 
          className="absolute top-1/4 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-full blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '0s', 
            animation: 'agency-flow 22s ease-in-out infinite, pulse-glow 16s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/3 right-0 w-3/4 h-12 sm:h-18 md:h-24 bg-gradient-to-l from-transparent via-blue-500/25 to-transparent rounded-full blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '8s', 
            animation: 'agency-flow 20s ease-in-out infinite reverse, pulse-glow 13s ease-in-out infinite'
          }} 
        />
        
        {/* Network nodes - representing agency connections */}
        <div 
          className="absolute top-1/2 left-1/4 w-40 h-24 sm:w-60 sm:h-36 md:w-80 md:h-48 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-lg sm:rounded-xl md:rounded-2xl blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '4s', 
            animation: 'partnership-drift 28s ease-in-out infinite, fade-pulse 15s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-48 h-16 sm:w-72 sm:h-24 md:w-96 md:h-32 bg-gradient-to-l from-blue-500/20 to-cyan-500/15 rounded-lg sm:rounded-xl blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '12s', 
            animation: 'partnership-drift 25s ease-in-out infinite reverse, fade-pulse 18s ease-in-out infinite'
          }} 
        />
        
        {/* Growth indicator particles */}
        <div 
          className="absolute top-1/3 right-1/4 w-12 h-8 sm:w-18 sm:h-12 md:w-24 md:h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/25 rounded-md sm:rounded-lg blur-xl sm:blur-2xl" 
          style={{ 
            animationDelay: '6s', 
            animation: 'scale-glow 35s ease-in-out infinite, quick-pulse 9s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/2 left-1/3 w-16 h-10 sm:w-24 sm:h-15 md:w-32 md:h-20 bg-gradient-to-br from-blue-500/25 to-purple-500/20 rounded-md sm:rounded-lg blur-xl sm:blur-2xl" 
          style={{ 
            animationDelay: '14s', 
            animation: 'scale-glow 32s ease-in-out infinite reverse, quick-pulse 11s ease-in-out infinite'
          }} 
        />
      </div>
      
      {/* Subtle fade to black at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 sm:h-44 lg:h-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.15) 45%, rgba(0, 0, 0, 0.35) 65%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.85) 95%, rgba(0, 0, 0, 1) 100%)'
        }}
      />
        
      {/* Content Container - Centered Layout like main Hero */}
      <div className="relative max-w-5xl mx-auto z-30 text-center px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Subtle background glow for content area */}
          <div className="absolute inset-0 rounded-3xl opacity-5 pointer-events-none" 
               style={{
                 background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                 filter: 'blur(40px)'
               }} />
          
          {/* Animated Headline */}
          <div className="mb-2">
            <AgencyAnimatedHeadline />
          </div>

          {/* Subtitle */}
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 xs:mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-2 xs:px-4">
            <span className="bg-gradient-to-r from-premium-silver/90 via-white to-premium-silver/90 bg-clip-text text-transparent">
              Agents & automations die jouw bedrijf
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-white font-medium bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              daadwerkelijk transformeren.
            </span>
          </p>

          {/* CTA Buttons - Agency themed to match hero */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* Primary CTA - Matches agency background colors */}
            <Button
              className="group relative px-6 xs:px-7 sm:px-8 py-3 xs:py-4 text-white text-base xs:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden border-0 w-full xs:w-auto sm:w-auto max-w-xs sm:max-w-none"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(168, 85, 247, 0.8) 50%, rgba(6, 182, 212, 0.7) 100%)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = '/contact';
                }
              }}
            >
              <span className="flex items-center space-x-2">
                <span>Start je transformatie</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>

            {/* Secondary CTA - Subtle with agency colors */}
            <Button
              variant="outline"
              className="group relative px-6 xs:px-7 sm:px-8 py-3 xs:py-4 text-white text-base xs:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 border-0 w-full xs:w-auto sm:w-auto max-w-xs sm:max-w-none"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
              }}
              onClick={handleCasesClick}
            >
              <span className="flex items-center space-x-2">
                <span>Bekijk cases</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Agency-themed floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Network connection dots */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-purple-400/60 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-blue-400/50 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-pink-400/40 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-500/60 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 right-12 w-3 h-3 bg-cyan-500/50 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-500/45 rounded-full opacity-45 animate-pulse" style={{ animationDelay: '5s' }} />
      </div>
        
    </section>
  );
};

export default AgencyHero;