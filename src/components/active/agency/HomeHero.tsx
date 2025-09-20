import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HomeAnimatedHeadline from './HomeAnimatedHeadline';
import HomeROICalculator from './HomeROICalculator';

const HomeHero = () => {
  const handlePartnershipClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/kenniscentrum';
    }
  };

  const handleCasesClick = () => {
    if (typeof window !== 'undefined') {
      // Scroll to What is Buildrs section (dit kunnen we bouwen voor je)
      const targetSection = document.querySelector('#what-is-buildrs-section');
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      
      {/* Hero Background Image - Primary IMG with CSS fallback */}
      <div className="absolute inset-0 bg-black">
        <img 
          src="/hero-bg-buildrs-8k.jpg"
          alt="Buildrs Hero Background"
          className="absolute inset-0 w-full h-full object-cover hero-background-img"
          style={{
            objectPosition: 'center 23%',
            imageRendering: 'high-quality',
            transform: 'translateZ(0)'
          }}
          onError={(e) => {
            // Fallback to CSS background on error
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'block';
          }}
          loading="eager"
          fetchPriority="high"
        />
        {/* CSS Background Fallback */}
        <div 
          className="absolute inset-0 hero-background-fallback"
          style={{ display: 'none' }}
        />
      </div>
      
      {/* Enhanced gradient for better shadow overlay effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
      </div>
      
      {/* Responsive image positioning and CSS fallback */}
      <style>{`
        /* Primary IMG element responsive positioning */
        .hero-background-img {
          object-position: center 23%;
        }
        
        @media (min-width: 768px) {
          .hero-background-img {
            object-position: center 23%;
          }
        }
        
        @media (min-width: 1024px) {
          .hero-background-img {
            object-position: center 23%;
          }
        }
        
        @media (min-width: 1920px) {
          .hero-background-img {
            object-position: center 23%;
            filter: brightness(0.95);
          }
        }
        
        @media (min-width: 2560px) {
          .hero-background-img {
            object-size: 50% auto;
            object-position: center 23%;
            filter: brightness(0.85);
          }
        }
        
        /* CSS Background Fallback Styles */
        .hero-background-fallback {
          background-image: url(/hero-bg-buildrs-8k.jpg);
          background-size: cover;
          background-position: center 23%;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }
        
        @media (min-width: 768px) {
          .hero-background-fallback {
            background-position: center 23%;
          }
        }
        
        @media (min-width: 1024px) {
          .hero-background-fallback {
            background-position: center 23%;
          }
        }
        
        @media (min-width: 1920px) {
          .hero-background-fallback {
            background-position: center 23%;
            filter: brightness(0.95);
          }
        }
        
        @media (min-width: 2560px) {
          .hero-background-fallback {
            background-size: 50% auto;
            background-position: center 23%;
            filter: brightness(0.85);
          }
        }
        
        /* Responsive content positioning */
        .content-container {
          margin-top: 0vh;
        }
        
        @media (min-width: 768px) {
          .content-container {
            margin-top: -5vh;
          }
        }
        
        @media (min-width: 1024px) {
          .content-container {
            margin-top: -10vh;
          }
        }
        
        @media (min-width: 1920px) {
          .content-container {
            margin-top: -12vh;
          }
        }
        
        @media (min-width: 2560px) {
          .content-container {
            margin-top: -15vh;
          }
        }
        
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
      
      {/* Minimal accent lights to complement background */}
      <div className="absolute inset-0 opacity-5 will-change-transform">
        {/* Very subtle accent lighting */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-16 sm:w-72 sm:h-24 md:w-96 md:h-32 bg-gradient-to-l from-blue-500/20 to-cyan-500/15 rounded-lg sm:rounded-xl blur-3xl" 
          style={{ 
            animationDelay: '0s', 
            animation: 'partnership-drift 25s ease-in-out infinite, fade-pulse 18s ease-in-out infinite'
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
        
      {/* Content Container - Responsive positioning above BUILDRS logo */}
      <div className="relative max-w-6xl mx-auto z-30 text-center px-4 content-container">
        <motion.div 
          className="max-w-5xl mx-auto relative"
          style={{ minHeight: '280px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Subtle background glow for content area */}
          <div className="absolute inset-0 rounded-3xl opacity-5 pointer-events-none" 
               style={{
                 background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                 filter: 'blur(40px)'
               }} />
          
          {/* Animated Headline */}
          <motion.div 
            className="mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HomeAnimatedHeadline />
          </motion.div>

          {/* Subtitle - Direct aansluiting */}
          <motion.p 
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-4 leading-relaxed font-light px-2 xs:px-4 mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-premium-silver/90 via-white to-premium-silver/90 bg-clip-text text-transparent">
              AI-agents die jouw business écht vooruithelpen.
            </span>
          </motion.p>

          {/* Redesigned CTA Section */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            style={{ minHeight: '100px', willChange: 'transform, opacity' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          >
            {/* Primary CTA - Modern floating design */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 scale-110" style={{ background: 'linear-gradient(to right, #0066FF, #FF2E7E)' }}></div>
              
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                }}
                className="relative inline-flex items-center px-8 py-3 text-white font-medium rounded-full hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg border-0 w-full xs:w-auto"
                style={{ 
                  background: 'linear-gradient(to right, rgba(0, 102, 255, 0.2), rgba(255, 46, 126, 0.2))',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  boxShadow: '0 20px 40px -10px rgba(0, 102, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                }}
              >
                <span className="mr-3">Ontdek de mogelijkheden</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Secondary CTA - Modern outline design */}
            <div className="relative group">
              <button
                onClick={handleCasesClick}
                className="relative inline-flex items-center px-8 py-3 text-white font-medium rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg w-full xs:w-auto"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                }}
              >
                <span className="mr-3">Bekijk voorbeelden</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

        </motion.div>
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

export default HomeHero;