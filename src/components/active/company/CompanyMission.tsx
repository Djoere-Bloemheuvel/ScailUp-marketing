import React from 'react';
import { motion } from 'framer-motion';

const CompanyMission = () => {
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
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Blue Ambient Background - Full Width */}
      <div className="absolute inset-0 z-0">
        {/* Left Blue Cluster - Enhanced */}
        <div 
          className="absolute rounded-full blur-3xl opacity-60" 
          style={{
            top: '15%',
            left: '5%',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse 600px 400px, rgba(96, 165, 250, 0.4) 0%, transparent 70%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Center Blue Glow */}
        <div 
          className="absolute rounded-full blur-3xl opacity-30" 
          style={{
            top: '50%',
            left: '30%',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse 800px 500px, rgba(59, 130, 246, 0.3) 0%, transparent 80%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Right Side Accent */}
        <div 
          className="absolute rounded-full blur-2xl opacity-50" 
          style={{
            top: '70%',
            right: '10%',
            width: '400px',
            height: '300px',
            background: 'radial-gradient(ellipse 400px 300px, rgba(147, 197, 253, 0.4) 0%, transparent 70%)',
            mixBlendMode: 'screen'
          }}
        />
      </div>
      
      {/* Splitscreen Grid Container */}
      <div className="relative w-full min-h-screen grid grid-cols-1 lg:grid-cols-5 z-10">
        
        {/* Left Side - Content (60%) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-3 flex items-center justify-center py-20 lg:py-32 px-6 lg:px-16"
        >
          <div className="max-w-2xl">
            
            <motion.div variants={itemVariants} className="space-y-12">
              {/* Section Tag */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/10 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                  <span className="text-blue-400 text-sm font-medium tracking-wide uppercase">Onze Missie</span>
                </div>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h2 
                variants={itemVariants}
                className="text-white font-light tracking-tight"
                style={{ 
                  fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontSize: 'clamp(3rem, 5vw + 1rem, 5.5rem)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.045em',
                  WebkitFontSmoothing: 'antialiased',
                  textRendering: 'optimizeLegibility'
                }}
              >
                <div style={{ fontWeight: 300 }}>
                  Enterprise-level
                </div>
                <div style={{ fontWeight: 400 }}>
                  systemen voor iedereen
                </div>
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-xl lg:text-2xl text-gray-200 leading-relaxed"
                style={{
                  fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontWeight: '300',
                  lineHeight: '1.6'
                }}
              >
                Wij bouwen <span className="text-blue-400 font-medium">schaalbare software</span> die groeit met jouw ambities en meetbare groei levert binnen weken, niet maanden.
              </motion.p>
              
              {/* Enhanced Feature Points */}
              <motion.div variants={itemVariants} className="space-y-6">
                {[
                  'Schaalbare enterprise software voor elke onderneming',
                  'Meetbare groei binnen weken, niet maanden', 
                  'Software die meegroeit met jouw ambities'
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-400/20 border border-blue-400/40 flex items-center justify-center mt-1 group-hover:bg-blue-400/30 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
              
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right Side - Image (40%) */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-2 flex items-center justify-center py-20 lg:py-32 px-6 lg:px-12"
        >
          <div className="relative w-full max-w-lg">
            
            {/* Premium Image Container */}
            <div className="relative">
              
              {/* Main Image Container */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
                
                {/* Mission Visual Image */}
                <img 
                  src="/images/mission-visual.webp"
                  alt="Enterprise Systems Visualization"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  style={{
                    filter: 'brightness(0.9) contrast(1.15) saturate(1.05)'
                  }}
                />
                
                {/* Subtle Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-blue-400/10 rounded-3xl" />
                
              </div>
              
              {/* Floating Elements Around Image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-blue-400/10 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-20 rounded-2xl bg-blue-400/5 backdrop-blur-sm border border-blue-400/10 flex items-center justify-center">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
              
              {/* Soft Glow Behind Image */}
              <div className="absolute inset-0 -z-10 transform scale-110">
                <div className="w-full h-full rounded-3xl bg-blue-400/20 blur-xl"></div>
              </div>
              
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default CompanyMission;