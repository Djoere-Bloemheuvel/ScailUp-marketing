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
    <>
      <style jsx>{`
        /* Fijnere CTA responsive scaling voor <12 inch schermen */
        .cta-responsive {
          font-size: 0.875rem; /* text-sm */
          padding: 0.5rem 1rem; /* py-2 px-4 */
        }
        
        @media (min-width: 640px) {
          .cta-responsive {
            font-size: 0.875rem; /* blijft text-sm */
            padding: 0.5rem 1rem; /* py-2 px-4 */
          }
        }
        
        @media (min-width: 768px) {
          .cta-responsive {
            font-size: 0.875rem; /* blijft klein bij kleine title */
            padding: 0.5rem 1.125rem; /* py-2 px-4.5 */
          }
        }
        
        @media (min-width: 900px) {
          .cta-responsive {
            font-size: 0.95rem; /* tussen sm en base */
            padding: 0.625rem 1.25rem; /* py-2.5 px-5 */
          }
        }
        
        @media (min-width: 1000px) {
          .cta-responsive {
            font-size: 1rem; /* text-base */
            padding: 0.625rem 1.375rem; /* py-2.5 px-5.5 */
          }
        }
        
        @media (min-width: 1024px) {
          .cta-responsive {
            font-size: 1.05rem; /* tussen base en lg */
            padding: 0.625rem 1.5rem; /* py-2.5 px-6 */
          }
        }
        
        @media (min-width: 1200px) {
          .cta-responsive {
            font-size: 1.125rem; /* text-lg - desktop */
            padding: 0.75rem 2rem; /* py-3 px-8 */
          }
        }
        
        /* Icon responsive scaling */
        .icon-responsive {
          width: 0.75rem; /* w-3 */
          height: 0.75rem; /* h-3 */
        }
        
        @media (min-width: 640px) {
          .icon-responsive {
            width: 0.75rem; /* blijft w-3 */
            height: 0.75rem; /* h-3 */
          }
        }
        
        @media (min-width: 768px) {
          .icon-responsive {
            width: 0.875rem; /* tussen w-3 en w-4 */
            height: 0.875rem;
          }
        }
        
        @media (min-width: 900px) {
          .icon-responsive {
            width: 1rem; /* w-4 */
            height: 1rem; /* h-4 */
          }
        }
        
        @media (min-width: 1000px) {
          .icon-responsive {
            width: 1.125rem; /* tussen w-4 en w-5 */
            height: 1.125rem;
          }
        }
        
        @media (min-width: 1024px) {
          .icon-responsive {
            width: 1.25rem; /* w-5 */
            height: 1.25rem; /* h-5 */
          }
        }
        
        /* Text margin responsive scaling */
        .text-margin-responsive {
          margin-right: 0.25rem; /* mr-1 */
        }
        
        @media (min-width: 640px) {
          .text-margin-responsive {
            margin-right: 0.25rem; /* mr-1 */
          }
        }
        
        @media (min-width: 768px) {
          .text-margin-responsive {
            margin-right: 0.375rem; /* tussen mr-1 en mr-2 */
          }
        }
        
        @media (min-width: 900px) {
          .text-margin-responsive {
            margin-right: 0.5rem; /* mr-2 */
          }
        }
        
        @media (min-width: 1000px) {
          .text-margin-responsive {
            margin-right: 0.625rem; /* tussen mr-2 en mr-3 */
          }
        }
        
        @media (min-width: 1024px) {
          .text-margin-responsive {
            margin-right: 0.75rem; /* mr-3 */
          }
        }
      `}</style>
    <section className="relative w-full min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      
      {/* PERSISTENT Background Paint - Never disappears */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#000000',
          backgroundImage: 'url(/hero-bg-buildrs-8k.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 23%',
          backgroundRepeat: 'no-repeat',
          contain: 'paint',
          imageRendering: 'high-quality'
        }}
      >
        {/* High-quality overlay - paint-through when loaded */}
        <img 
          src="/hero-bg-buildrs-8k.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="1080"
          style={{
            objectPosition: 'center 23%',
            imageRendering: 'high-quality',
            opacity: '0',
            transition: 'opacity 0.3s ease-out'
          }}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          onLoad={(e) => {
            (e.target as HTMLImageElement).style.opacity = '0.9';
          }}
        />
      </div>
      
      {/* Enhanced gradient for better shadow overlay effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
      </div>
      
      {/* Clean responsive content positioning */}
      <style>{`
        
        /* Responsive content positioning */
        .content-container {
          margin-top: 5vh;
          padding-top: 2rem;
        }
        
        @media (min-width: 640px) {
          .content-container {
            margin-top: 0vh;
            padding-top: 1rem;
          }
        }
        
        @media (min-width: 768px) {
          .content-container {
            margin-top: -5vh;
            padding-top: 0;
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
      <div className="absolute inset-0 opacity-5" style={{ contain: 'paint' }}>
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
      <div className="relative max-w-6xl mx-auto z-30 text-center px-6 sm:px-4 content-container" style={{ marginTop: '-13vh' }}>
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


          {/* Redesigned CTA Section */}
          <motion.div 
            className="flex flex-row gap-2 sm:gap-4 lg:gap-6 justify-start items-center mt-2 sm:mt-4 md:mt-6 lg:mt-8"
            style={{ minHeight: '100px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          >
            <style jsx>{`
              @media (min-width: 1680px) {
                .cta-container {
                  margin-left: -2rem;
                }
              }
              @media (min-width: 1920px) {
                .cta-container {
                  margin-left: -3rem;
                }
              }
              @media (min-width: 2560px) {
                .cta-container {
                  margin-left: -4rem;
                }
              }
            `}</style>
            <div className="cta-container px-6 sm:px-6 flex flex-row gap-2 sm:gap-4 lg:gap-6 justify-start items-center w-full">
            {/* Primary CTA - Modern floating design */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300 scale-105" style={{ background: 'linear-gradient(to right, #0066FF, #FF2E7E)' }}></div>
              
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                }}
                className="relative inline-flex items-center justify-center cta-responsive text-white font-medium rounded-full hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex-1 min-w-0 w-[calc(45vw-0.5rem)] sm:w-[calc(40vw-1rem)] md:w-[calc(32vw-1rem)] lg:w-80 whitespace-nowrap"
                style={{ 
                  background: 'linear-gradient(to right, rgba(0, 102, 255, 0.2), rgba(255, 46, 126, 0.2))',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  boxShadow: '0 20px 40px -10px rgba(0, 102, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)' 
                }}
              >
                <span className="text-margin-responsive">Plan strategiesessie</span>
                <ArrowRight className="icon-responsive group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Secondary CTA - Modern outline design */}
            <div className="relative group">
              <button
                onClick={handleCasesClick}
                className="relative inline-flex items-center justify-center cta-responsive text-white font-medium rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex-1 min-w-0 w-[calc(45vw-0.5rem)] sm:w-[calc(40vw-1rem)] md:w-[calc(32vw-1rem)] lg:w-80 whitespace-nowrap"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                }}
              >
                <span className="text-margin-responsive">Bekijk voorbeelden</span>
                <ChevronRight className="icon-responsive group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
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
    </>
  );
};

export default HomeHero;