import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedHeadline from './AnimatedHeadline';

const ScailUpHero = ({ isEmailPage = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleStrategicTalkClick = () => {
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
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0 overflow-hidden">
      
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Conditional Backlights */}
      {isEmailPage ? (
        /* Email-themed backlights - different positioning and colors */
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <div className="absolute top-1/4 left-1/2 w-[800px] h-[400px] bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/4"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl transform translate-x-1/4"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-gradient-to-r from-blue-400 to-blue-500 rounded-full blur-3xl opacity-70"></div>
        </div>
      ) : (
        /* Original backlights for main page */
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <div className="backlight backlight-left bg-scailup-blue"></div>
          <div className="backlight backlight-right bg-scailup-cyan"></div>
          <div className="backlight backlight-center bg-scailup-blue opacity-30"></div>
        </div>
      )}
      
      {/* Email-themed ambient lights with different feeling */}
      <div className="absolute inset-0 opacity-30">
        {isEmailPage ? (
          <>
            {/* Horizontal streak lights - email flow inspired */}
            <div 
              className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-scailup-blue/20 to-transparent rounded-full blur-3xl" 
              style={{ 
                animationDelay: '0s', 
                animation: 'horizontal-flow 20s ease-in-out infinite, pulse-glow 15s ease-in-out infinite'
              }} 
            />
            <div 
              className="absolute bottom-1/3 right-0 w-3/4 h-24 bg-gradient-to-l from-transparent via-scailup-cyan/25 to-transparent rounded-full blur-3xl" 
              style={{ 
                animationDelay: '7s', 
                animation: 'horizontal-flow-reverse 18s ease-in-out infinite, pulse-glow 12s ease-in-out infinite reverse'
              }} 
            />
            
            {/* Email envelope-like rectangular glows */}
            <div 
              className="absolute top-1/2 left-1/4 w-80 h-48 bg-scailup-blue/15 rounded-2xl blur-3xl" 
              style={{ 
                animationDelay: '3s', 
                animation: 'envelope-drift 25s ease-in-out infinite, fade-pulse 14s ease-in-out infinite'
              }} 
            />
            <div 
              className="absolute bottom-1/4 right-1/3 w-96 h-32 bg-scailup-cyan/20 rounded-xl blur-3xl" 
              style={{ 
                animationDelay: '10s', 
                animation: 'envelope-drift-reverse 22s ease-in-out infinite, fade-pulse 16s ease-in-out infinite'
              }} 
            />
            
            {/* Small message particle lights */}
            <div 
              className="absolute top-1/3 right-1/4 w-24 h-16 bg-scailup-blue/30 rounded-lg blur-2xl" 
              style={{ 
                animationDelay: '5s', 
                animation: 'message-float 30s ease-in-out infinite, quick-pulse 8s ease-in-out infinite'
              }} 
            />
            <div 
              className="absolute bottom-1/2 left-1/3 w-32 h-20 bg-scailup-cyan/25 rounded-lg blur-2xl" 
              style={{ 
                animationDelay: '12s', 
                animation: 'message-float-reverse 28s ease-in-out infinite, quick-pulse 10s ease-in-out infinite'
              }} 
            />
          </>
        ) : (
          <>
            {/* Original ambient lights for main page */}
            <div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-scailup-blue rounded-full blur-3xl" 
              style={{ 
                animationDelay: '0s', 
                animation: 'float-orbit 12s ease-in-out infinite, scale-pulse 8s ease-in-out infinite, wobble 18s ease-in-out infinite, glow-pulse 15s ease-in-out infinite'
              }} 
            />
            <div 
              className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-scailup-cyan rounded-full blur-3xl" 
              style={{ 
                animationDelay: '3s', 
                animation: 'float-smooth 14s ease-in-out infinite, scale-pulse 10s ease-in-out infinite, float-orbit 22s ease-in-out infinite reverse, wobble 28s ease-in-out infinite'
              }} 
            />
            <div 
              className="absolute top-1/2 right-1/2 w-80 h-80 bg-blue-500 rounded-full blur-3xl" 
              style={{ 
                animationDelay: '1.5s', 
                animation: 'wobble 16s ease-in-out infinite, scale-pulse 9s ease-in-out infinite, float-smooth 20s ease-in-out infinite reverse, glow-pulse 25s ease-in-out infinite reverse'
              }} 
            />
            
            {/* Additional dynamic glow particles */}
            <div 
              className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-500/40 rounded-full blur-3xl" 
              style={{ 
                animationDelay: '6s', 
                animation: 'float-orbit 24s ease-in-out infinite reverse, scale-pulse 11s ease-in-out infinite, sweep 30s ease-in-out infinite'
              }} 
            />
            
            <div 
              className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-400/35 rounded-full blur-3xl" 
              style={{ 
                animationDelay: '8s', 
                animation: 'wobble 26s ease-in-out infinite, float-smooth 13s ease-in-out infinite, glow-pulse 19s ease-in-out infinite'
              }} 
            />
          </>
        )}
      </div>
      
      {/* Email-specific animation styles */}
      {isEmailPage && (
        <style jsx>{`
          @keyframes horizontal-flow {
            0%, 100% { transform: translateX(-20%) scale(1); opacity: 0.2; }
            50% { transform: translateX(20%) scale(1.1); opacity: 0.4; }
          }
          
          @keyframes horizontal-flow-reverse {
            0%, 100% { transform: translateX(20%) scale(1); opacity: 0.25; }
            50% { transform: translateX(-20%) scale(1.05); opacity: 0.35; }
          }
          
          @keyframes envelope-drift {
            0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
            25% { transform: translateY(-30px) rotate(1deg) scale(1.05); }
            75% { transform: translateY(30px) rotate(-1deg) scale(0.95); }
          }
          
          @keyframes envelope-drift-reverse {
            0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
            33% { transform: translateY(40px) rotate(-2deg) scale(1.1); }
            66% { transform: translateY(-40px) rotate(2deg) scale(0.9); }
          }
          
          @keyframes message-float {
            0%, 100% { transform: translateX(0) translateY(0) scale(1); opacity: 0.3; }
            25% { transform: translateX(60px) translateY(-40px) scale(1.2); opacity: 0.4; }
            50% { transform: translateX(120px) translateY(0) scale(0.8); opacity: 0.2; }
            75% { transform: translateX(60px) translateY(40px) scale(1.1); opacity: 0.35; }
          }
          
          @keyframes message-float-reverse {
            0%, 100% { transform: translateX(0) translateY(0) scale(1); opacity: 0.25; }
            33% { transform: translateX(-80px) translateY(50px) scale(0.9); opacity: 0.4; }
            66% { transform: translateX(-40px) translateY(-30px) scale(1.15); opacity: 0.3; }
          }
          
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.35; }
          }
          
          @keyframes fade-pulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.25; }
          }
          
          @keyframes quick-pulse {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.05); }
          }
        `}</style>
      )}
      
      {/* Subtle fade to black at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 55%, rgba(0, 0, 0, 0.6) 100%)'
        }}
      />
        
      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto text-center z-20 px-4 sm:px-6 lg:px-8">
        
        {/* Email Page Split Layout */}
        {isEmailPage ? (
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Content */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.72, ease: "easeOut" }}
            >
              
              {/* Feature-Driven Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Alles wat outbound hoort te zijn.<br />
                <span className="font-bold text-white">In één platform.</span>
              </h1>

              {/* Product-focused Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Van data tot deals: schaalbaar, persoonlijk en<br />
                <span className="font-bold text-white">volledig geautomatiseerd.</span>
              </p>

              {/* CTA Button - Scroll to modules */}
              <div className="flex items-start">
                <button
                  onClick={() => {
                    const modulesSection = document.querySelector('#modules-section') || document.querySelector('[data-section="modules"]');
                    if (modulesSection) {
                      modulesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 group min-w-[220px]"
                >
                  <span className="flex items-center justify-center">
                    Ontdek de functies
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.72, delay: 0.2, ease: "easeOut" }}
            >
              {/* Platform Proof Points - Uniform Size */}
              <div className="space-y-3">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-20 flex flex-col justify-center">
                  <div className="text-2xl font-bold text-white mb-1">500k+</div>
                  <div className="text-white/80 text-sm font-medium leading-tight">decision makers in database</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-20 flex flex-col justify-center">
                  <div className="text-2xl font-bold text-white mb-1">85%</div>
                  <div className="text-white/80 text-sm font-medium leading-tight">inbox rate <span className="text-gray-400 text-xs">(geen spam)</span></div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-20 flex flex-col justify-center">
                  <div className="text-2xl font-bold text-white mb-1">12%</div>
                  <div className="text-white/80 text-sm font-medium leading-tight">response rate <span className="text-gray-400 text-xs">(boven industry avg.)</span></div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-20 flex flex-col justify-center">
                  <div className="text-2xl font-bold text-white mb-1">3%</div>
                  <div className="text-white/80 text-sm font-medium leading-tight">meeting rate <span className="text-gray-400 text-xs">(direct naar agenda)</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Regular Centered Layout for Main Page */
          <motion.div 
            className="mb-4 sm:mb-6 lg:mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, ease: "easeOut" }}
          >
            <AnimatedHeadline />
          </motion.div>
        )}
        
        {/* Subtitle and CTA Buttons - Only for regular page */}
        {!isEmailPage && (
          <>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.18, ease: "easeOut" }}
            >
              Wij transformeren jouw outbound met AI die<br />
              <span className="font-bold text-white">daadwerkelijk meetings boekt.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.36, ease: "easeOut" }}
            >
              <button
                onClick={handleStrategicTalkClick}
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 group min-w-[200px] sm:min-w-[220px]"
              >
                <span className="flex items-center justify-center">
                  <span className="hidden sm:inline">Ontdek de mogelijkheden</span>
                  <span className="sm:hidden">Ontdek mogelijkheden</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              
              <button
                onClick={handleCasesClick}
                className="w-full sm:w-auto relative bg-transparent border border-scailup-cyan/60 text-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-full min-w-[200px] sm:min-w-[220px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 203, 243, 0.15) 100%)',
                  boxShadow: '0 0 15px rgba(33, 203, 243, 0.4), 0 0 30px rgba(33, 150, 243, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Plan een deepdive
                  <ChevronRight className="ml-2 w-4 h-4" />
                </span>
              </button>
            </motion.div>
          </>
        )}
        
      </div>
      
      {/* Floating elements - Email-themed for email page, minimal for others */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isEmailPage ? (
          <>
            {/* Email-themed floating elements */}
            <div className="absolute top-1/4 left-10 w-3 h-3 bg-blue-400/60 rounded-sm opacity-40 animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/3 right-16 w-2 h-2 bg-cyan-400/50 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/4 w-4 h-3 bg-purple-400/40 rounded-sm opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-500/60 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute bottom-1/3 right-12 w-3 h-2 bg-cyan-500/50 rounded-sm opacity-35 animate-pulse" style={{ animationDelay: '4s' }} />
          </>
        ) : (
          <>
            {/* Original minimal floating elements */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-scailup-blue rounded-full opacity-30 animate-pulse" />
            <div className="absolute top-1/3 right-16 w-1 h-1 bg-scailup-cyan rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-scailup-blue rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
          </>
        )}
      </div>
        
    </section>
  );
};

export default ScailUpHero;