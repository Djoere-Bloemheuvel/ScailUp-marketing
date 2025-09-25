import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      
      {/* PERSISTENT Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#000000',
          contain: 'paint',
        }}
      >
        {/* Enhanced gradient for better depth */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
        </div>
      </div>
      
      {/* Subtle ambient lights */}
      <div className="absolute inset-0 opacity-10" style={{ contain: 'paint' }}>
        {/* Very subtle accent lighting */}
        <div 
          className="absolute top-1/3 left-1/4 w-96 h-32 bg-gradient-to-r from-blue-500/30 to-cyan-500/20 rounded-lg blur-3xl" 
          style={{ 
            animation: 'float 20s ease-in-out infinite',
          }} 
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-28 bg-gradient-to-l from-purple-500/25 to-pink-500/15 rounded-lg blur-3xl" 
          style={{ 
            animation: 'float 25s ease-in-out infinite reverse',
          }} 
        />
      </div>
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto z-30 text-left px-6 sm:px-4">
        <motion.div 
          className="max-w-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Large SERVICES Title */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 
              className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem] text-white font-normal leading-none tracking-tight"
              style={{
                fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', 'Arial Nova', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                fontWeight: 400,
                letterSpacing: '-0.03em',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              SERVICES
            </h1>
          </motion.div>

          {/* Optional subtitle */}
          <motion.div
            className="mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl"
              style={{
                fontFamily: "'Neue Haas Grotesk Display Pro', 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                fontWeight: 300,
                lineHeight: 1.6
              }}
            >
              Van AI agents tot volledige platform development. <span className="text-gray-200 font-medium">Custom workflows</span> die jouw business naar het volgende niveau tillen.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating elements for depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Network connection dots */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-blue-400/40 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-purple-400/50 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-pink-500/40 rounded-full opacity-45 animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 right-12 w-3 h-3 bg-blue-500/35 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.05); }
          50% { transform: translateY(-10px) translateX(-15px) scale(0.95); }
          75% { transform: translateY(-30px) translateX(5px) scale(1.02); }
        }
      `}</style>
        
    </section>
  );
};

export default ServicesHero;