import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SalesEngineSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  const salesEngineServices = [
    {
      title: "AUTOMATISCHE LEAD GENERATIE",
      content: "Van prospecting tot eerste contact. AI vindt en benadert jouw ideale klanten automatisch met gepersonaliseerde berichten die converteren."
    },
    {
      title: "LINKEDIN AUTOMATION",
      content: "Geautomatiseerde LinkedIn outreach en follow-up berichten. Persoonlijke connectie-verzoeken en berichten die leads warm houden en naar gesprekken leiden."
    },
    {
      title: "SALES PIPELINE AUTOMATION",
      content: "Van lead tot deal - alles geautomatiseerd. CRM updates, taak scheduling en opportunity tracking zonder handmatig werk."
    },
    {
      title: "PERFORMANCE OPTIMIZATION",
      content: "Real-time analytics die laten zien wat werkt. A/B testing van berichten en automatische optimalisatie voor betere conversie rates."
    }
  ];

  return (
    <section className="relative w-full bg-black py-12 lg:py-16">
      
      {/* Ambient Blue Backlight */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
        {/* Blue glows positioned behind text (left side) */}
        <div className="absolute top-1/3 left-1/6 w-[30rem] h-[25rem] bg-gradient-radial from-blue-500/80 via-blue-500/35 to-transparent blur-2xl" />
        <div className="absolute bottom-1/4 left-1/8 w-[25rem] h-[20rem] bg-gradient-radial from-blue-400/75 via-blue-400/30 to-transparent blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-[35rem] h-[30rem] bg-gradient-radial from-blue-600/70 via-blue-600/25 to-transparent blur-2xl" style={{ transform: 'translateY(-50%)' }} />
      </div>
      
      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 xl:gap-40 items-start">
          
          {/* Left Side - Compact Accordion */}
          <div className="relative">
            {/* Headline above accordion */}
            <h2 
              className="text-4xl lg:text-5xl xl:text-6xl text-white mb-8"
              style={{ 
                fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                letterSpacing: '-0.045em',
                lineHeight: '0.9',
                textRendering: 'optimizeLegibility', 
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              <div className="space-y-2">
                <div style={{ fontWeight: '300' }}>
                  Automatische
                </div>
                <div style={{ fontWeight: '400' }}>
                  lead generatie.
                </div>
              </div>
            </h2>

            <div className="space-y-1">
              {salesEngineServices.map((service, index) => {
                const isOpen = openItem === index;
                
                return (
                  <div key={index} className="border-b border-gray-700/50 last:border-b-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full py-3 text-left flex justify-between items-center group"
                    >
                      <h3 
                        className="text-lg md:text-xl font-medium text-white pr-4"
                        style={{
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                          fontWeight: 500
                        }}
                      >
                        {service.title}
                      </h3>
                      <div className="flex-shrink-0">
                        <motion.div
                          animate={{ 
                            rotate: isOpen ? 180 : 0
                          }}
                          transition={{ 
                            duration: 0.15, 
                            ease: [0.4, 0, 0.2, 1]
                          }}
                        >
                          <ChevronDown 
                            className="w-5 h-5 text-gray-400"
                          />
                        </motion.div>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ 
                            opacity: 0, 
                            height: 0
                          }}
                          animate={{ 
                            opacity: 1, 
                            height: "auto"
                          }}
                          exit={{ 
                            opacity: 0, 
                            height: 0
                          }}
                          transition={{ 
                            duration: 0.12, 
                            ease: [0.4, 0, 0.2, 1]
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 pr-8">
                            <p 
                              className="text-sm md:text-base leading-relaxed text-gray-300"
                              style={{
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                                fontWeight: 300,
                                lineHeight: 1.6
                              }}
                            >
                              {service.content}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <div className="relative group inline-block">
                <div className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500 scale-110 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
                
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = '/contact';
                    }
                  }}
                  className="relative inline-flex items-center justify-center text-sm lg:text-base text-white font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-400 group-hover:shadow-xl px-6 py-3"
                  style={{ 
                    background: `
                      linear-gradient(135deg, rgba(96, 165, 250, 0.12) 0%, rgba(59, 130, 246, 0.09) 50%, rgba(37, 99, 235, 0.12) 100%),
                      padding-box,
                      linear-gradient(to right, #60a5fa, #3b82f6, #2563eb) border-box
                    `,
                    fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontWeight: '500',
                    backdropFilter: 'blur(12px) saturate(140%)',
                    WebkitBackdropFilter: 'blur(12px) saturate(140%)',
                    border: '1px solid transparent',
                    boxShadow: `
                      0 6px 20px rgba(96, 165, 250, 0.12),
                      0 3px 10px rgba(59, 130, 246, 0.09),
                      inset 0 1px 0 rgba(255, 255, 255, 0.08)
                    `,
                    letterSpacing: '-0.01em'
                  }}
                >
                  <span className="relative z-10 mr-2">Start jouw Lead Engine</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-400" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Side - Visual */}
          <div className="relative">
            <div className="relative mb-8">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/lead-engine-portrait.png"
                  alt="Lead Engine Portrait"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  style={{
                    filter: 'brightness(1.1) contrast(1.2) saturate(1.1)',
                    imageRendering: 'high-quality',
                    transform: 'translateZ(0)',
                    willChange: 'transform'
                  }}
                />
                
                {/* Subtle blue accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/8 via-transparent to-cyan-500/4 opacity-60" />
                
                {/* Premium border glow */}
                <div className="absolute inset-0 rounded-xl border border-blue-400/15 shadow-lg shadow-blue-500/8" />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Natural Fade Effects */}
      <div 
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.6) 40%, transparent 100%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.6) 40%, transparent 100%)'
        }}
      />
    </section>
  );
};

export default SalesEngineSection;