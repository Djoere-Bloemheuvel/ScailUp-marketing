import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Users, Zap, TrendingUp, Target, Sparkles } from 'lucide-react';

const DreamScenarioSection = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    hours: 60,
    leads: 0,
    tools: 10,
    conversion: 15
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setAnimatedNumbers(prev => ({
          hours: prev.hours > 20 ? Math.max(20, prev.hours - 4) : 20,
          leads: prev.leads < 247 ? Math.min(247, prev.leads + 25) : 247,
          tools: prev.tools > 1 ? Math.max(1, prev.tools - 1) : 1,
          conversion: prev.conversion < 65 ? Math.min(65, prev.conversion + 5) : 65
        }));
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
             style={{
               background: `
                 radial-gradient(ellipse at top, #0a0a0a 0%, #000000 50%),
                 linear-gradient(180deg, #000000 0%, #0a0a0a 100%)
               `
             }}>
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} />
        
        {/* Ambient lighting */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20"
             style={{ 
               background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%)',
               filter: 'blur(40px)'
             }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20"
             style={{ 
               background: 'radial-gradient(circle, rgba(244, 114, 182, 0.4) 0%, transparent 70%)',
               filter: 'blur(40px)'
             }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Mini Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-sm tracking-[0.3em] text-white/60 font-light uppercase mb-2">
              HET VERSCHIL
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-blue-400 to-pink-400 mx-auto"></div>
          </motion.div>

          {/* Split Screen Visual Journey */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-6xl mx-auto mb-20"
          >
            {/* Main Container */}
            <div className="relative bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                
                {/* VANDAAG Side - Dark/Struggle */}
                <motion.div 
                  className="relative p-8 lg:p-12 flex flex-col justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(127, 29, 29, 0.2) 100%)'
                  }}
                >
                  {/* Chaos particles */}
                  <div className="absolute inset-0 opacity-30">
                    {[...Array(12)].map((_, i) => (
                      <div key={i}
                           className="absolute w-1 h-1 bg-red-400 rounded-full animate-ping"
                           style={{
                             top: `${Math.random() * 100}%`,
                             left: `${Math.random() * 100}%`,
                             animationDelay: `${Math.random() * 2}s`,
                             animationDuration: `${2 + Math.random() * 2}s`
                           }} />
                    ))}
                  </div>
                  
                  <div className="relative z-10 text-left">
                    <h3 className="text-2xl font-light text-white/80 mb-6 tracking-wide">VANDAAG</h3>
                    
                    <div className="space-y-4 text-white/90">
                      <motion.div 
                        className="flex items-center gap-3"
                        animate={{ x: isTransitioning ? [0, -5, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Clock className="w-5 h-5 text-red-400" />
                        <span className="text-lg">{animatedNumbers.hours} uur werk</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-3"
                        animate={{ x: isTransitioning ? [0, -5, 0] : 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <Users className="w-5 h-5 text-red-400" />
                        <span className="text-lg">{animatedNumbers.leads} warme leads</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-3"
                        animate={{ x: isTransitioning ? [0, -5, 0] : 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Target className="w-5 h-5 text-red-400" />
                        <span className="text-lg">{animatedNumbers.tools} losse tools</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-3"
                        animate={{ x: isTransitioning ? [0, -5, 0] : 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <TrendingUp className="w-5 h-5 text-red-400" />
                        <span className="text-lg">{animatedNumbers.conversion}% conversie</span>
                      </motion.div>
                    </div>
                    
                    <div className="mt-8 text-red-300/80 text-sm">
                      Chaos • Stress • Overweldigd
                    </div>
                  </div>
                </motion.div>

                {/* Center Arrow */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    animate={{ 
                      x: [0, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-16 h-16 rounded-full bg-black border-2 border-white/20 flex items-center justify-center backdrop-blur-sm"
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* MORGEN Side - Bright/Success */}
                <motion.div 
                  className="relative p-8 lg:p-12 flex flex-col justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(244, 114, 182, 0.1) 100%)'
                  }}
                >
                  {/* Success particles */}
                  <div className="absolute inset-0 opacity-40">
                    {[...Array(8)].map((_, i) => (
                      <motion.div key={i}
                           className="absolute w-1 h-1 bg-blue-400 rounded-full"
                           animate={{
                             y: [0, -20, 0],
                             opacity: [0.5, 1, 0.5]
                           }}
                           transition={{
                             duration: 3,
                             repeat: Infinity,
                             delay: i * 0.4
                           }}
                           style={{
                             top: `${20 + Math.random() * 60}%`,
                             left: `${20 + Math.random() * 60}%`
                           }} />
                    ))}
                  </div>
                  
                  <div className="relative z-10 text-left">
                    <h3 className="text-2xl font-light text-white mb-6 tracking-wide">MORGEN</h3>
                    
                    <div className="space-y-4 text-white">
                      <motion.div 
                        className="flex items-center gap-3"
                        animate={{ x: isTransitioning ? [0, 5, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Clock className="w-5 h-5 text-blue-400" />
                        <span className="text-lg font-medium">20 uur focus</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-3"
                        animate={{ x: isTransitioning ? [0, 5, 0] : 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <Users className="w-5 h-5 text-purple-400" />
                        <span className="text-lg font-medium">247 warme leads</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-3"
                        animate={{ x: isTransitioning ? [0, 5, 0] : 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Target className="w-5 h-5 text-pink-400" />
                        <span className="text-lg font-medium">1 AI systeem</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-3"
                        animate={{ x: isTransitioning ? [0, 5, 0] : 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-lg font-medium">65% conversie</span>
                      </motion.div>
                    </div>
                    
                    <div className="mt-8 text-blue-300/80 text-sm">
                      Rust • Groei • Geoptimaliseerd
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Transformation Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  letterSpacing: '-0.02em'
                }}>
              <span className="text-white/80">"14 dagen. Meer niet.</span><br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                Van overweldigd ondernemer naar AI-powered CEO."
              </span>
            </h3>
          </motion.div>

          {/* Glass Morphism Timeline Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {/* Week 1 Card */}
            <motion.div 
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden"
                   style={{
                     background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)'
                   }}>
                {/* Subtle glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, transparent 100%)',
                       borderRadius: '1rem'
                     }} />
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-400 font-bold text-lg">1</span>
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">Week 1: AI Setup</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Strategie, configuratie en eerste agents live
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Week 2 Card */}
            <motion.div 
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden"
                   style={{
                     background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)'
                   }}>
                {/* Subtle glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, transparent 100%)',
                       borderRadius: '1rem'
                     }} />
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-400 font-bold text-lg">2</span>
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">Week 2: Live & Learning</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Optimalisatie en eerste resultaten zichtbaar
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Week 3+ Card */}
            <motion.div 
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden"
                   style={{
                     background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)'
                   }}>
                {/* Subtle glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.05) 0%, transparent 100%)',
                       borderRadius: '1rem'
                     }} />
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-pink-400/20 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-5 h-5 text-pink-400" />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">Week 3+: Pure Groei</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Volledig geautomatiseerd systeem draait perfect
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-white/50 text-sm tracking-wide">
              Jouw transformatie begint vandaag. Live binnen 2 weken.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle fade to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />
    </section>
  );
};

export default DreamScenarioSection;