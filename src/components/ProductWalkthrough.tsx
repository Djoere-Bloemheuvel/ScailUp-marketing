import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Target, Calendar, ArrowRight, CheckCircle, Sparkles, Brain, Send, Eye, MessageCircle } from 'lucide-react';

const ProductWalkthrough = () => {
  const steps = [
    {
      id: 1,
      icon: Target,
      title: "Perfecte targeting",
      subtitle: "Vind je ideale klanten",
      description: "500.000+ verified decision makers. Elk bericht AI-gepersonaliseerd voor maximale relevantie. Geen spray & pray — alleen prospects die willen luisteren.",
      highlight: "98% data accuracy",
      metrics: "2 minuten setup",
      accentColor: "from-blue-500 to-blue-400"
    },
    {
      id: 2,
      icon: Brain,
      title: "Slimme outreach",
      subtitle: "AI Engine doet alles",
      description: "De Engine denkt, schrijft en verstuurt. Elke sequence geoptimaliseerd voor conversie. Jouw stem, AI-perfectie, nul handmatig werk.",
      highlight: "85% deliverability",
      metrics: "24/7 actief",
      accentColor: "from-blue-600 to-cyan-500"
    },
    {
      id: 3,
      icon: Calendar,
      title: "Instant meetings",
      subtitle: "Van reactie naar agenda",
      description: "Van prospect reactie naar geboekte meeting in seconden. Alles automatisch in je CRM, kalender en pipeline. Zero friction, maximaal resultaat.",
      highlight: "3% meeting rate",
      metrics: "Volledig geautomatiseerd",
      accentColor: "from-blue-400 to-blue-300"
    }
  ];

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Ambient Background Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="backlight backlight-left bg-scailup-blue"></div>
        <div className="backlight backlight-right bg-scailup-cyan"></div>
        <div className="backlight backlight-center bg-scailup-blue opacity-30"></div>
      </div>

      <div className="relative max-w-8xl mx-auto px-6 lg:px-12">
        {/* Premium Header */}
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Premium badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-blue-300" />
              <div className="absolute inset-0 blur-sm">
                <Sparkles className="w-5 h-5 text-blue-300" />
              </div>
            </div>
            <span className="text-blue-200 font-semibold text-sm tracking-wide uppercase">Zo werkt het</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Van targeting tot deal
            </span>
          </h2>
          
          <motion.p 
            className="text-xl lg:text-2xl xl:text-3xl text-blue-200/80 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            In 3 stappen. <span className="text-blue-300 font-medium">Volledig geautomatiseerd.</span>
            <br className="hidden sm:block" />
            <span className="text-white font-medium bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
              Resultaatgericht gebouwd.
            </span>
          </motion.p>
        </motion.div>

        {/* Premium Steps */}
        <div className="space-y-40 lg:space-y-48">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <motion.div
                key={step.id}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.3,
                  ease: [0.23, 1, 0.32, 1] 
                }}
              >
                {/* Premium Visual */}
                <div className="flex-1 relative">
                  <motion.div 
                    className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-blue-900/20 via-black/40 to-black/60 border border-blue-500/20 backdrop-blur-xl shadow-2xl"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                    }}
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Main visual area */}
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-400/20 flex items-center justify-center relative overflow-hidden">
                      {/* Dynamic background pattern */}
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/5"></div>
                        <div className="absolute inset-0" style={{
                          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
                                           radial-gradient(circle at 80% 70%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
                                           radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)`
                        }} />
                      </div>
                      
                      {/* Step-specific content */}
                      
                      {step.id === 1 && (
                        <div className="relative z-10 grid grid-cols-3 gap-6 w-full max-w-sm">
                          <motion.div 
                            className="p-4 rounded-xl bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                          >
                            <Target className="w-8 h-8 text-blue-300 mx-auto" />
                            <div className="mt-2 h-2 bg-blue-400/40 rounded-full"></div>
                          </motion.div>
                          <motion.div 
                            className="p-4 rounded-xl bg-blue-400/20 border border-blue-300/30 backdrop-blur-sm"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                          >
                            <Users className="w-8 h-8 text-blue-200 mx-auto" />
                            <div className="mt-2 h-2 bg-blue-300/40 rounded-full"></div>
                          </motion.div>
                          <motion.div 
                            className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                          >
                            <MessageCircle className="w-8 h-8 text-blue-400 mx-auto" />
                            <div className="mt-2 h-2 bg-blue-500/40 rounded-full"></div>
                          </motion.div>
                        </div>
                      )}

                      {step.id === 2 && (
                        <div className="relative z-10 flex items-center justify-center w-full">
                          <div className="flex items-center gap-8">
                            <motion.div 
                              className="p-6 rounded-2xl bg-blue-400/20 border border-blue-300/40 backdrop-blur-sm relative"
                              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Users className="w-10 h-10 text-blue-300" />
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                            </motion.div>
                            
                            <motion.div className="flex flex-col gap-2">
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center gap-3"
                                  animate={{ x: [0, 30, 60] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                >
                                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                  <ArrowRight className="w-4 h-4 text-blue-300" />
                                </motion.div>
                              ))}
                            </motion.div>
                            
                            <motion.div 
                              className="p-6 rounded-2xl bg-blue-500/20 border border-blue-400/40 backdrop-blur-sm relative"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            >
                              <Brain className="w-10 h-10 text-blue-400" />
                              <motion.div 
                                className="absolute inset-0 rounded-2xl border-2 border-blue-400/60"
                                animate={{ scale: [1, 1.2], opacity: [1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </motion.div>
                            
                            <motion.div className="flex flex-col gap-2">
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center gap-3"
                                  animate={{ x: [0, 30, 60] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 1 }}
                                >
                                  <ArrowRight className="w-4 h-4 text-blue-300" />
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                </motion.div>
                              ))}
                            </motion.div>
                            
                            <motion.div 
                              className="p-6 rounded-2xl bg-blue-600/20 border border-blue-500/40 backdrop-blur-sm relative"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                            >
                              <Send className="w-10 h-10 text-blue-500" />
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            </motion.div>
                          </div>
                        </div>
                      )}

                      {step.id === 3 && (
                        <div className="relative z-10 grid grid-cols-2 gap-8 w-full max-w-md">
                          <motion.div 
                            className="space-y-3"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <div className="p-4 rounded-xl bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                              <Calendar className="w-8 h-8 text-blue-300 mx-auto" />
                            </div>
                            {[...Array(3)].map((_, i) => (
                              <motion.div 
                                key={i}
                                className="h-3 bg-blue-400/30 rounded-full"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                              />
                            ))}
                          </motion.div>
                          
                          <motion.div 
                            className="space-y-3"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                          >
                            <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
                              <CheckCircle className="w-8 h-8 text-blue-400 mx-auto" />
                            </div>
                            {[...Array(3)].map((_, i) => (
                              <motion.div 
                                key={i}
                                className="h-3 bg-blue-500/30 rounded-full"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 + 1.5 }}
                              />
                            ))}
                          </motion.div>
                        </div>
                      )}
                      
                      {/* Sweeping animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                        animate={{ x: [-100, 500] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 2 }}
                      />
                    </div>

                    {/* Premium floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 opacity-80 rotate-12"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-60"></div>
                    <div className="absolute top-1/4 -left-6 w-4 h-4 rounded-lg bg-gradient-to-br from-blue-300 to-blue-400 opacity-40 rotate-45"></div>
                  </motion.div>
                </div>

                {/* Premium Content */}
                <div className="flex-1 space-y-8 max-w-2xl">
                  {/* Step indicator */}
                  <motion.div 
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/40 backdrop-blur-sm">
                      <span className="text-blue-300 font-bold text-xl">{step.id}</span>
                      <div className="absolute inset-0 rounded-2xl bg-blue-400/20 blur-xl"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-500/60 via-blue-400/40 to-transparent"></div>
                  </motion.div>

                  {/* Premium Typography */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.0, delay: index * 0.1 + 0.2, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                        {step.title}
                      </span>
                    </h3>
                    
                    <p className="text-lg lg:text-xl text-blue-200/70 font-light uppercase tracking-wider">
                      {step.subtitle}
                    </p>

                    <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Premium metrics */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300 font-semibold text-sm">
                        {step.highlight}
                      </span>
                    </div>
                    
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-blue-700/10 rounded-full border border-blue-600/30 backdrop-blur-sm">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-200 font-medium text-sm">
                        {step.metrics}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ultra Premium CTA */}
        <motion.div
          className="text-center mt-40 lg:mt-48"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-blue-900/20 via-black/40 to-black/60 border border-blue-500/20 backdrop-blur-xl overflow-hidden">
              {/* Premium background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-6 h-6 bg-blue-400/60 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-4 h-4 bg-blue-500/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10 space-y-8">
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Van targeting tot meeting.
                  </span>
                  <br />
                  <span className="text-blue-300 font-light">
                    In 48 uur.
                  </span>
                </h3>
                
                <p className="text-xl lg:text-2xl text-blue-200/70 font-light max-w-3xl mx-auto leading-relaxed">
                  Zie hoe 500+ bedrijven hun pipeline transformeren met onze Lead Engine
                </p>

                <motion.a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-12 lg:px-16 py-5 lg:py-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg lg:text-xl rounded-full overflow-hidden shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  
                  <span className="relative z-10 flex items-center gap-4">
                    Plan een demo
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/50 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductWalkthrough;