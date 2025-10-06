import React from 'react';
import { motion } from 'framer-motion';

const CompanyStorySection = () => {
  const valueProps = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Schaalbare Systemen",
      description: "Van startup tot enterprise",
      detail: "Onze software groeit mee met jouw bedrijf. Begin klein, schaal groot - zonder technische beperkingen."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Snelle ROI",
      description: "Meetbare resultaten in weken",
      detail: "Geen maandenlange implementaties. Onze systemen leveren binnen 2-4 weken tastbare business impact."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Volledige Controle",
      description: "Jouw data, jouw eigendom",
      detail: "Behoud altijd controle over je systemen en data. Geen vendor lock-in, wel maximale flexibiliteit."
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-black">
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
                  lineHeight: '0.85',
                  textRendering: 'optimizeLegibility', 
                  WebkitFontSmoothing: 'antialiased',
                  color: '#ffffff'
                }}
              >
                De partner voor AI-software, growth marketing en geautomatiseerde workflows die écht werken.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
      
      {/* Onze Missie - Full Width Premium Section */}
      <div className="relative w-full py-32 overflow-hidden">
        {/* Blue Ambient Background */}
        <div className="absolute inset-0 z-0">
          {/* Left Blue Cluster */}
          <div 
            className="absolute rounded-full blur-3xl opacity-70" 
            style={{
              top: '20%',
              left: '10%',
              width: '400px',
              height: '300px',
              background: 'radial-gradient(ellipse 400px 300px, rgba(96, 165, 250, 0.6) 0%, transparent 70%)',
              mixBlendMode: 'screen'
            }}
          />
          
          {/* Right Blue Accent */}
          <div 
            className="absolute rounded-full blur-2xl opacity-60" 
            style={{
              top: '60%',
              right: '15%',
              width: '300px',
              height: '200px',
              background: 'radial-gradient(ellipse 300px 200px, rgba(59, 130, 246, 0.5) 0%, transparent 80%)',
              mixBlendMode: 'screen'
            }}
          />
          
          {/* Center Soft Glow */}
          <div 
            className="absolute rounded-full blur-3xl opacity-40" 
            style={{
              top: '40%',
              left: '40%',
              width: '500px',
              height: '300px',
              background: 'radial-gradient(ellipse 500px 300px, rgba(96, 165, 250, 0.3) 0%, transparent 85%)',
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
            <div className="relative overflow-hidden rounded-3xl backdrop-blur-2xl border border-white/20 transition-all duration-700 group hover:border-blue-400/30"
                 style={{ 
                   background: 'rgba(255, 255, 255, 0.1)',
                   boxShadow: '0 40px 80px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                 }}>
              
              {/* Enhanced hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                   style={{
                     background: 'radial-gradient(800px circle at 50% 50%, rgba(96, 165, 250, 0.08), transparent 70%)'
                   }} />
              
              <div className="relative z-10 p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Left: Content */}
                  <motion.div variants={itemVariants} className="space-y-8">
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
                      Onze Missie
                    </h2>
                    
                    <p 
                      className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                      style={{
                        fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        fontWeight: '300',
                        lineHeight: '1.6'
                      }}
                    >
                      Elke B2B onderneming verdient toegang tot <span className="text-blue-400 font-medium">enterprise-level systemen</span>. 
                      Wij bouwen schaalbare software die groeit met jouw ambities en meetbare groei levert binnen weken, niet maanden.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <p className="text-gray-300 text-lg">Schaalbare enterprise software voor elke onderneming</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <p className="text-gray-300 text-lg">Meetbare groei binnen weken, niet maanden</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <p className="text-gray-300 text-lg">Software die meegroeit met jouw ambities</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Right: Premium Icon */}
                  <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-3xl flex items-center justify-center relative overflow-hidden"
                           style={{
                             background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.15))',
                             border: '2px solid rgba(96, 165, 250, 0.5)'
                           }}>
                        {/* Multiple inner glows */}
                        <div className="absolute inset-2 rounded-2xl"
                             style={{
                               background: 'radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.2), transparent 70%)'
                             }} />
                        <div className="absolute inset-4 rounded-xl"
                             style={{
                               background: 'radial-gradient(circle at 70% 70%, rgba(147, 197, 253, 0.15), transparent 60%)'
                             }} />
                        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Onze Methode - Full Width Premium Section */}
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
      
      {/* Content Container for Value Propositions */}
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-32"
        >
          {/* Premium Value Propositions - Simplified */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto"
          >
            {valueProps.slice(0, 2).map((prop, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } 
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-700"
                style={{ 
                  background: '#000000',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                {/* Enhanced gradient glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                     style={{
                       background: index === 0 
                         ? 'radial-gradient(600px circle at 50% 50%, rgba(96, 165, 250, 0.08), transparent 60%)'
                         : index === 1 
                         ? 'radial-gradient(600px circle at 50% 50%, rgba(147, 51, 234, 0.08), transparent 60%)'
                         : 'radial-gradient(600px circle at 50% 50%, rgba(244, 114, 182, 0.08), transparent 60%)'
                     }} />
                
                <div className="relative z-10 p-10 text-center space-y-8">
                  {/* Premium Icon Container */}
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center relative overflow-hidden"
                         style={{
                           background: index === 0 
                             ? 'linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(59, 130, 246, 0.05))'
                             : index === 1 
                             ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(126, 34, 206, 0.05))'
                             : 'linear-gradient(135deg, rgba(244, 114, 182, 0.15), rgba(219, 39, 119, 0.05))',
                           border: `1px solid ${index === 0 ? 'rgba(96, 165, 250, 0.3)' : index === 1 ? 'rgba(147, 51, 234, 0.3)' : 'rgba(244, 114, 182, 0.3)'}`
                         }}>
                      {/* Subtle inner glow */}
                      <div className="absolute inset-1 rounded-xl"
                           style={{
                             background: index === 0 
                               ? 'radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.1), transparent 70%)'
                               : index === 1 
                               ? 'radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.1), transparent 70%)'
                               : 'radial-gradient(circle at 30% 30%, rgba(244, 114, 182, 0.1), transparent 70%)'
                           }} />
                      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                        {prop.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Title */}
                  <h3 className="text-2xl font-medium text-white group-hover:text-blue-50 transition-colors duration-500"
                      style={{
                        fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        fontWeight: '500',
                        letterSpacing: '-0.02em'
                      }}>
                    {prop.title}
                  </h3>
                  
                  {/* Premium Description */}
                  <p className="text-lg font-medium text-gray-300 group-hover:text-gray-200 transition-colors duration-500"
                     style={{
                       fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                       fontWeight: '400'
                     }}>
                    {prop.description}
                  </p>
                  
                  {/* Enhanced Detail */}
                  <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500"
                     style={{
                       fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                       fontWeight: '300'
                     }}>
                    {prop.detail}
                  </p>
                </div>

                {/* Premium shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 rounded-3xl"
                       style={{
                         background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.02) 50%, transparent 70%)',
                         transform: 'translateX(-100%)',
                         animation: 'shimmer 2s ease-in-out infinite'
                       }} />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Shimmer animation */}
          <style>{`
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}</style>
          
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStorySection;