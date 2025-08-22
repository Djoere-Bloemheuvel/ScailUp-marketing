import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedHeadline from './AnimatedHeadline';

const ScailUpHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleStrategicTalkClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };

  const handleCasesClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/cases';
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0 overflow-hidden">
      
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Dynamically animated ambient lights */}
      <div className="absolute inset-0 opacity-40">
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
      </div>
      
      {/* Subtle fade to black at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 55%, rgba(0, 0, 0, 0.6) 100%)'
        }}
      />
        
      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto text-center z-20 px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <motion.div 
          className="mb-4 sm:mb-6 lg:mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatedHeadline />
        </motion.div>
        
        {/* Subtitle */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Wij bouwen AI-systemen die uw business<br />
          <span className="font-bold text-white">daadwerkelijk transformeren.</span>
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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
        
      </div>
      
      {/* Minimal floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-scailup-blue rounded-full opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-16 w-1 h-1 bg-scailup-cyan rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-scailup-blue rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
        
    </section>
  );
};

export default ScailUpHero;