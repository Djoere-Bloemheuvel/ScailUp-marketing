import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
      
      {/* Agency-themed backlights - performance optimized */}
      <div className="absolute inset-0 overflow-hidden opacity-50 sm:opacity-60 will-change-transform">
        <div className="absolute top-1/4 left-1/2 w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl sm:blur-3xl will-change-transform" style={{ transform: 'translate3d(-50%, -25%, 0)' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl sm:blur-3xl will-change-transform" style={{ transform: 'translate3d(25%, 0, 0)' }}></div>
        <div className="absolute top-1/2 left-1/4 w-[200px] h-[120px] sm:w-[300px] sm:h-[180px] md:w-[400px] md:h-[240px] lg:w-[500px] lg:h-[300px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl sm:blur-3xl opacity-70 will-change-transform"></div>
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
        
      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto text-center z-20 px-2 sm:px-4 md:px-6 lg:px-8">
        
        {/* Agency Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
          >
            
            {/* Business Impact Headline */}
            <h1 className="font-light text-white mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              <span className="lg:hidden">
                {/* Mobile/Tablet */}
                <span className="text-2xl sm:text-3xl md:text-4xl leading-tight">
                  Automatiseer je complexe
                </span><br />
                <span className="font-bold text-white text-2xl sm:text-3xl md:text-4xl">business processen.</span>
              </span>
              <span className="hidden lg:block text-6xl xl:text-7xl">
                {/* Desktop */}
                Automatiseer je complexe<br />
                business<br />
                <span className="font-bold text-white">processen.</span>
              </span>
            </h1>

            {/* Business Value Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Verhoog efficiency met 200-400%. Bespaar 15-30 uur per week.<br />
              <span className="font-bold text-white">Speciaal ontwikkeld voor jouw unieke situatie.</span>
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => {
                  const servicesSection = document.querySelector('#services-section') || document.querySelector('[data-section="services"]');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base font-semibold rounded-full transition-all duration-300 group max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-none lg:min-w-[220px]"
              >
                <span className="flex items-center justify-center">
                  Plan een gesprek
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Side - Agency Stats */}
          <motion.div
            className="order-2 lg:order-2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Business Results */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1 lg:space-y-2.5 xl:space-y-3 lg:gap-0 max-w-md mx-auto lg:max-w-none">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-3 xl:p-4 h-16 sm:h-18 lg:h-16 xl:h-20 flex flex-col justify-center">
                <div className="text-lg sm:text-xl lg:text-lg xl:text-2xl font-bold text-white mb-0.5 xl:mb-1">200-400%</div>
                <div className="text-white/80 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium leading-tight">efficiency verbetering</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-3 xl:p-4 h-16 sm:h-18 lg:h-16 xl:h-20 flex flex-col justify-center">
                <div className="text-lg sm:text-xl lg:text-lg xl:text-2xl font-bold text-white mb-0.5 xl:mb-1">15-30h</div>
                <div className="text-white/80 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium leading-tight">tijd besparing per week</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-3 xl:p-4 h-16 sm:h-18 lg:h-16 xl:h-20 flex flex-col justify-center">
                <div className="text-lg sm:text-xl lg:text-lg xl:text-2xl font-bold text-white mb-0.5 xl:mb-1">4-6 weken</div>
                <div className="text-white/80 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium leading-tight">van idee naar resultaat</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-3 xl:p-4 h-16 sm:h-18 lg:h-16 xl:h-20 flex flex-col justify-center">
                <div className="text-lg sm:text-xl lg:text-lg xl:text-2xl font-bold text-white mb-0.5 xl:mb-1">ROI</div>
                <div className="text-white/80 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium leading-tight">binnen 3 maanden</div>
              </div>
            </div>
          </motion.div>
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