import React from 'react';
import { motion } from 'framer-motion';

const CompanyHero = () => {
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
    <section className="relative w-full py-20 lg:py-32 xl:py-40 overflow-hidden bg-black h-[75vh] flex items-center">
      {/* Platform Section Ambient Background - Exact Copy */}
      <div className="absolute inset-0 z-0" style={{ contain: 'paint' }}>
        {/* Top-Left Concentrated Cluster - Lead Engine Blue */}
        <div 
          className="absolute rounded-full blur-3xl opacity-85" 
          style={{
            top: '15%',
            left: '15%',
            width: '384px',
            height: '256px',
            background: 'radial-gradient(ellipse 400px 200px, rgba(96, 165, 250, 0.8) 0%, transparent 60%)',
            mixBlendMode: 'screen'
          }}
        />
        
        <div 
          className="absolute rounded-full blur-2xl opacity-75" 
          style={{
            top: '18%',
            left: '12%',
            width: '256px',
            height: '384px',
            background: 'radial-gradient(ellipse 200px 300px, rgba(96, 165, 250, 0.6) 0%, transparent 70%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Top-Right Sparse - Marketing Engine Pink */}
        <div 
          className="absolute rounded-full blur-3xl opacity-70" 
          style={{
            top: '35%',
            right: '20%',
            width: '320px',
            height: '192px',
            background: 'radial-gradient(ellipse 350px 150px, rgba(244, 114, 182, 0.7) 0%, transparent 80%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Bottom Center Large Soft Glow */}
        <div 
          className="absolute rounded-full blur-3xl opacity-80" 
          style={{
            bottom: '15%',
            left: '35%',
            width: '500px',
            height: '300px',
            background: 'radial-gradient(ellipse 500px 300px at 30% 70%, rgba(96, 165, 250, 0.5) 0%, rgba(244, 114, 182, 0.4) 50%, transparent 85%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Mid-Right Edge Lighting - Vertical Streak */}
        <div 
          className="absolute rounded-full blur-2xl opacity-90" 
          style={{
            top: '45%',
            right: '5%',
            width: '128px',
            height: '320px',
            background: 'radial-gradient(ellipse 100px 400px, rgba(244, 114, 182, 0.8) 0%, transparent 75%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Subtle Corner Accents */}
        <div 
          className="absolute rounded-full blur-2xl opacity-75" 
          style={{
            top: '12%',
            right: '8%',
            width: '192px',
            height: '192px',
            background: 'radial-gradient(circle at 20% 80%, rgba(244, 114, 182, 0.6) 0%, transparent 70%)',
            mixBlendMode: 'screen'
          }}
        />
        
        <div 
          className="absolute rounded-full blur-3xl opacity-95" 
          style={{
            bottom: '8%',
            left: '10%',
            width: '224px',
            height: '128px',
            background: 'radial-gradient(ellipse 280px 120px, rgba(96, 165, 250, 0.7) 0%, transparent 65%)',
            mixBlendMode: 'screen'
          }}
        />
      </div>
      
      {/* Content Container - Landingspagina Style */}
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-40"
        >
          
          {/* Header Section - Landingspagina Style */}
          <div className="max-w-6xl mx-auto">
            <motion.div 
              variants={itemVariants}
              className="text-left"
            >
              {/* WIJ ZIJN BUILDRS */}
              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <p 
                  className="text-lg md:text-xl text-blue-400 font-medium tracking-wide uppercase"
                  style={{
                    fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    letterSpacing: '0.1em',
                    fontWeight: '500'
                  }}
                >
                  WIJ ZIJN BUILDRS
                </p>
              </motion.div>

              <h1 
                className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
                style={{
                  fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  letterSpacing: '-0.045em',
                  lineHeight: '0.85',
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                <div style={{ fontWeight: 300 }}>
                  Wij bouwen de systemen
                </div>
                <div style={{ fontWeight: 400 }}>
                  achter succesvolle B2B bedrijven.
                </div>
              </h1>
            </motion.div>
            {/* Hero Tagline - Exact same style as landingspagina */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 sm:mt-8 md:mt-12 text-left"
            >
              <p 
                className="text-lg sm:text-xl md:text-2xl text-white font-light"
                style={{ 
                  fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontWeight: '300',
                  letterSpacing: '-0.045em',
                  lineHeight: '1.3',
                  textRendering: 'optimizeLegibility', 
                  WebkitFontSmoothing: 'antialiased',
                  color: '#ffffff'
                }}
              >
                Vanuit jarenlange frustratie met inefficiënte processen, bouwden we Buildrs: de partner voor AI-software, growth marketing en geautomatiseerde workflows die daadwerkelijk resultaat opleveren. Geen standaardoplossingen, maar systemen die perfect aansluiten bij jouw bedrijf.
              </p>
            </motion.div>

            {/* Persoonlijke context */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 sm:mt-10 md:mt-12 text-left"
            >
              <p 
                className="text-base sm:text-lg text-gray-300 font-light max-w-4xl"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: '300',
                  lineHeight: '1.6',
                  textRendering: 'optimizeLegibility', 
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                Opgericht in 2024 door Djoere Bloemheuvel, combineren we diepgaande technische expertise met een hands-on mentaliteit. We geloven in transparantie, snelle implementatie en het eigenaarschap dat bij jou blijft. Elke workflow die we bouwen, is ontworpen om jouw bedrijf vooruit te helpen – niet om je afhankelijk te maken.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CompanyHero;