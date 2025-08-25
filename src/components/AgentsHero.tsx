import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cog, Zap, Clock, TrendingUp, Users } from 'lucide-react';

const AgentsHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToWalkthrough = () => {
    const walkthroughSection = document.querySelector('#agents-walkthrough');
    if (walkthroughSection) {
      walkthroughSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };

  const stats = [
    { value: "98%", label: "tijdbesparing", description: "bij RPA implementatie" },
    { value: "30 dagen", label: "tot ROI", description: "gemiddelde implementatie" },
    { value: "49%", label: "NL gebruikt AI", description: "#1 in Europa" },
    { value: "24/7", label: "beschikbaar", description: "automatische workflows" }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-0 overflow-hidden">
      
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Agents-themed backlights - responsive sizing */}
      <div className="absolute inset-0 overflow-hidden opacity-50 sm:opacity-60">
        <div className="absolute top-1/4 left-1/2 w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-purple-600 rounded-full blur-2xl sm:blur-3xl transform translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/4 w-[200px] h-[120px] sm:w-[300px] sm:h-[180px] md:w-[400px] md:h-[240px] lg:w-[500px] lg:h-[300px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl sm:blur-3xl opacity-80"></div>
      </div>
      
      {/* Agents-themed ambient lights - Fully Responsive */}
      <div className="absolute inset-0 opacity-20 sm:opacity-25 md:opacity-30">
        {/* Flowing automation streams */}
        <div 
          className="absolute top-1/4 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-r from-transparent via-blue-500/15 to-purple-600/20 rounded-full blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '0s', 
            animation: 'horizontal-flow 20s ease-in-out infinite, pulse-glow 15s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/3 right-0 w-3/4 h-12 sm:h-18 md:h-24 bg-gradient-to-l from-transparent via-purple-600/25 to-blue-500/15 rounded-full blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '7s', 
            animation: 'horizontal-flow-reverse 18s ease-in-out infinite, pulse-glow 12s ease-in-out infinite reverse'
          }} 
        />
        
        {/* AI processing node-like glows */}
        <div 
          className="absolute top-1/2 left-1/4 w-40 h-24 sm:w-60 sm:h-36 md:w-80 md:h-48 bg-gradient-to-br from-blue-500/10 to-purple-600/15 rounded-lg sm:rounded-xl md:rounded-2xl blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '3s', 
            animation: 'envelope-drift 25s ease-in-out infinite, fade-pulse 14s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-48 h-16 sm:w-72 sm:h-24 md:w-96 md:h-32 bg-gradient-to-tl from-purple-600/20 to-blue-500/10 rounded-lg sm:rounded-xl blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '10s', 
            animation: 'envelope-drift-reverse 22s ease-in-out infinite, fade-pulse 16s ease-in-out infinite'
          }} 
        />
        
        {/* Small agent particle lights */}
        <div 
          className="absolute top-1/3 right-1/4 w-12 h-8 sm:w-18 sm:h-12 md:w-24 md:h-16 bg-gradient-to-r from-blue-500/25 to-purple-600/30 rounded-md sm:rounded-lg blur-xl sm:blur-2xl" 
          style={{ 
            animationDelay: '5s', 
            animation: 'message-float 30s ease-in-out infinite, quick-pulse 8s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/2 left-1/3 w-16 h-10 sm:w-24 sm:h-15 md:w-32 md:h-20 bg-gradient-to-l from-purple-600/25 to-blue-500/20 rounded-md sm:rounded-lg blur-xl sm:blur-2xl" 
          style={{ 
            animationDelay: '12s', 
            animation: 'message-float-reverse 28s ease-in-out infinite, quick-pulse 10s ease-in-out infinite'
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
      <div className="relative w-full text-center z-20 px-2 sm:px-4 md:px-6 lg:px-8">
        
        {/* Split Layout - Similar to Email Page */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Content */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, ease: "easeOut" }}
          >
            
            {/* Feature-Driven Headline - Optimized for all screens */}
            <h1 className="font-light text-white mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              <span className="lg:hidden">
                {/* Mobile/Tablet: 3 lines */}
                <span className="text-2xl sm:text-3xl md:text-4xl leading-tight">
                  Werk minder.<br />
                  Verdien meer.<br />
                  <span className="font-bold text-white">AI doet de rest.</span>
                </span>
              </span>
              <span className="hidden lg:block text-6xl xl:text-7xl">
                {/* Desktop split-screen: 3 lines */}
                Werk minder.<br />
                Verdien meer.<br />
                <span className="font-bold text-white">AI doet de rest.</span>
              </span>
            </h1>

            {/* Product-focused Subtitle - Better Responsive */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              <span className="font-semibold text-white">Agents & Automations</span><br />
              Slim, Onzichtbaar en Onmisbaar<br />
              <span className="font-semibold text-white">Eindelijk tijd voor wat echt belangrijk is.</span>
            </p>

            {/* CTA Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToWalkthrough}
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base font-semibold rounded-full transition-all duration-300 group max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-none lg:min-w-[220px]"
              >
                <span className="flex items-center justify-center">
                  Zie hoe het werkt
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              
              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base font-semibold rounded-full transition-all duration-300 max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-none lg:min-w-[220px]"
              >
                Gratis automatisering audit
              </button>
            </div>
          </motion.div>

          {/* Right Side - Stats - Fully Responsive */}
          <motion.div
            className="order-2 lg:order-2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, delay: 0.2, ease: "easeOut" }}
          >
            {/* Automation Proof Points - Responsive Scaling */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1 lg:space-y-2.5 xl:space-y-3 lg:gap-0 max-w-md mx-auto lg:max-w-none">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-3 xl:p-4 h-16 sm:h-18 lg:h-16 xl:h-20 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div className="text-lg sm:text-xl lg:text-lg xl:text-2xl font-bold text-white mb-0.5 xl:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium leading-tight">
                    {stat.label} <span className="text-gray-400 text-xs">({stat.description})</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentsHero;