import React from 'react';
import { motion } from 'framer-motion';

const CompanyMethod = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  return (
    <div className="relative w-full py-32 overflow-hidden">
      {/* Pink Ambient Background */}
      <div className="absolute inset-0 z-0">
        {/* Left Pink Cluster */}
        <div 
          className="absolute rounded-full blur-3xl opacity-70" 
          style={{
            top: '15%',
            left: '15%',
            width: '380px',
            height: '280px',
            background: 'radial-gradient(ellipse 380px 280px, rgba(244, 114, 182, 0.6) 0%, transparent 70%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Right Pink Accent */}
        <div 
          className="absolute rounded-full blur-2xl opacity-60" 
          style={{
            top: '55%',
            right: '20%',
            width: '320px',
            height: '240px',
            background: 'radial-gradient(ellipse 320px 240px, rgba(219, 39, 119, 0.5) 0%, transparent 80%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Center Soft Pink Glow */}
        <div 
          className="absolute rounded-full blur-3xl opacity-40" 
          style={{
            top: '35%',
            left: '45%',
            width: '480px',
            height: '320px',
            background: 'radial-gradient(ellipse 480px 320px, rgba(244, 114, 182, 0.3) 0%, transparent 85%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Bottom Right Edge */}
        <div 
          className="absolute rounded-full blur-2xl opacity-50" 
          style={{
            bottom: '10%',
            right: '8%',
            width: '200px',
            height: '300px',
            background: 'radial-gradient(ellipse 200px 300px, rgba(244, 114, 182, 0.4) 0%, transparent 75%)',
            mixBlendMode: 'screen'
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Premium Glassmorphism Container */}
          <div className="relative overflow-hidden rounded-3xl backdrop-blur-2xl border border-white/20 transition-all duration-700 group hover:border-pink-400/30"
               style={{ 
                 background: 'rgba(255, 255, 255, 0.1)',
                 boxShadow: '0 40px 80px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
               }}>
            
            {/* Enhanced hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                 style={{
                   background: 'radial-gradient(800px circle at 50% 50%, rgba(244, 114, 182, 0.08), transparent 70%)'
                 }} />
            
            <div className="relative z-10 p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Premium Icon */}
                <motion.div variants={itemVariants} className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-3xl flex items-center justify-center relative overflow-hidden"
                         style={{
                           background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.3), rgba(219, 39, 119, 0.15))',
                           border: '2px solid rgba(244, 114, 182, 0.5)'
                         }}>
                      {/* Multiple inner glows */}
                      <div className="absolute inset-2 rounded-2xl"
                           style={{
                             background: 'radial-gradient(circle at 30% 30%, rgba(244, 114, 182, 0.2), transparent 70%)'
                           }} />
                      <div className="absolute inset-4 rounded-xl"
                           style={{
                             background: 'radial-gradient(circle at 70% 70%, rgba(251, 182, 206, 0.15), transparent 60%)'
                           }} />
                      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-16 h-16 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2a2 2 0 002-2v-6a2 2 0 00-2-2H9m0 0V5a2 2 0 012-2h2a2 2 0 012 2v0M7 5V3a2 2 0 012-2h6a2 2 0 012 2v2M7 21h10a2 2 0 002-2v-2a2 2 0 00-2-2H7a2 2 0 00-2 2v2a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right: Content */}
                <motion.div variants={itemVariants} className="space-y-8 order-1 lg:order-2">
                  <h2 
                    className="text-white font-light tracking-tight"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: 'clamp(2.5rem, 4vw + 1rem, 4.5rem)',
                      lineHeight: 0.9,
                      letterSpacing: '-0.045em',
                      WebkitFontSmoothing: 'antialiased',
                      textRendering: 'optimizeLegibility'
                    }}
                  >
                    Onze Methode
                  </h2>
                  
                  <p 
                    className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                    style={{
                      fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontWeight: '300',
                      lineHeight: '1.6'
                    }}
                  >
                    We beginnen met <span className="text-pink-400 font-medium">grondige systeemanalyse</span>, 
                    bouwen custom software voor jouw unieke processen, en zorgen voor snelle implementatie met meetbare impact. 
                    Groei begint direct, niet over maanden.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <p className="text-gray-300 text-lg">Diepgaande analyse van jouw huidige B2B processen</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <p className="text-gray-300 text-lg">Custom development voor jouw unieke business model</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <p className="text-gray-300 text-lg">Snelle implementatie met directe meetbare impact</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <p className="text-gray-300 text-lg">Continue optimalisatie gebaseerd op real-time data</p>
                    </div>
                  </div>
                </motion.div>
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyMethod;