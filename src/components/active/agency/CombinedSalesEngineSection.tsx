import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CombinedSalesEngineSection = () => {
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
      title: "AUTOMATISCHE E-MAIL CAMPAGNES",
      content: "Van lead discovery tot eerste contact - volledig geautomatiseerd. AI identificeert hoogwaardige prospects, creëert gepersonaliseerde berichten en verstuurt optimaal getimede sequences. Maximale response rates zonder handmatig werk."
    },
    {
      title: "SMART LINKEDIN OUTREACH", 
      content: "LinkedIn outreach die aanvoelt als persoonlijk contact. AI analyseert profielen, bedrijfsinfo en recente activiteit om hyper-gepersonaliseerde berichten te craften. Hogere acceptance rates door relevante, waardevolle eerste indruk."
    },
    {
      title: "LEAD SCORING & ENRICHMENT",
      content: "Elke lead krijgt een intelligentie-score gebaseerd op 50+ datapunten. AI verrijkt profielen met bedrijfsinfo, contactgegevens en buying signals. Focus je tijd alleen op leads met hoogste conversie potentieel."
    },
    {
      title: "MULTI-CHANNEL FOLLOW-UPS",
      content: "Geen prospect valt door de mazen. AI orkestert intelligente follow-up sequences via email, LinkedIn en telefoon. Bepaalt automatisch het optimale kanaal en moment voor elke touchpoint - tot de deal gesloten is."
    }
  ];

  return (
    <section className="relative w-full min-h-[175vh] bg-black overflow-hidden">
      
      {/* Unified Ambient Background - covers entire 175vh */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Top area - Various blue tints ambient glow for accordion */}
        <div className="absolute top-1/6 right-1/6 w-[40rem] h-[35rem] bg-gradient-radial from-blue-500/35 via-blue-600/15 to-transparent blur-3xl opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[50rem] h-[40rem] bg-gradient-radial from-blue-400/30 via-blue-500/10 to-transparent blur-3xl opacity-45" />
        
        {/* Middle transition area - deeper blue tones */}
        <div className="absolute top-1/2 left-1/5 w-[35rem] h-[30rem] bg-gradient-radial from-blue-700/25 via-blue-600/8 to-transparent blur-3xl opacity-35" />
        <div className="absolute top-1/2 right-1/3 w-[45rem] h-[35rem] bg-gradient-radial from-blue-600/30 via-blue-500/12 to-transparent blur-3xl opacity-40" />
        
        {/* Bottom area - Rich blue ambient glow for feature content */}
        <div className="absolute bottom-1/4 left-1/6 w-[30rem] h-[25rem] bg-gradient-radial from-blue-600/50 via-blue-700/20 to-transparent blur-2xl opacity-25" />
        <div className="absolute bottom-1/6 left-1/8 w-[25rem] h-[20rem] bg-gradient-radial from-blue-500/45 via-blue-600/18 to-transparent blur-2xl opacity-25" />
        <div className="absolute bottom-1/3 left-1/4 w-[35rem] h-[30rem] bg-gradient-radial from-blue-800/40 via-blue-700/15 to-transparent blur-2xl opacity-20" />
        
        {/* Subtle side lighting - pure blue tones */}
        <div className="absolute top-1/2 left-0 w-[20rem] h-[120rem] bg-gradient-to-r from-blue-700/15 via-blue-600/8 to-transparent blur-2xl opacity-30" style={{ transform: 'translateY(-50%)' }} />
        <div className="absolute top-1/2 right-0 w-[20rem] h-[120rem] bg-gradient-to-l from-blue-800/12 via-blue-700/6 to-transparent blur-2xl opacity-25" style={{ transform: 'translateY(-50%)' }} />
        
        {/* Floating particles effect throughout - blue spectrum */}
        <div className="absolute top-1/8 right-1/4 w-2 h-2 bg-blue-400/50 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-500/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-blue-600/35 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '4.5s' }} />
        <div className="absolute bottom-1/4 left-1/6 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/6 right-1/3 w-1 h-1 bg-blue-600/40 rounded-full animate-pulse" style={{ animationDelay: '6s' }} />
      </div>

      {/* Top Half - Sales Engine Accordion */}
      <div className="relative min-h-[100vh] flex flex-col">
        {/* Sales Engine Title */}
        <div className="relative pt-16 pb-12 px-16 z-10">
          <h1 
            className="text-white relative z-10"
            style={{
              fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontSize: 'clamp(3rem, 5vw + 1rem, 6rem)',
              letterSpacing: '-0.045em',
              lineHeight: '0.85',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            <div className="space-y-1 sm:space-y-2 md:space-y-3">
              <div style={{ fontWeight: '300', whiteSpace: 'nowrap' }}>
                Lead Engine
              </div>
              <div style={{ fontWeight: '400', whiteSpace: 'nowrap' }}>
                Meer leads. Minder handwerk.
              </div>
            </div>
          </h1>
        </div>

        {/* Sales Engine Accordion */}
        <div className="relative flex-1 max-w-5xl ml-auto mr-12 px-16 w-2/3 z-10 pb-16">
          {salesEngineServices.map((service, index) => {
            const isOpen = openItem === index;
            
            return (
              <div key={index} className="border-b border-gray-600">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-4 text-left flex justify-between items-center group"
                >
                  <h2 
                    className="text-xl md:text-2xl lg:text-3xl font-medium text-white"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    {service.title}
                  </h2>
                  <div className="ml-6 flex-shrink-0">
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
                        className="w-6 h-6 text-white"
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
                        duration: 0.15, 
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 px-4">
                        <p 
                          className="text-base md:text-lg leading-relaxed max-w-3xl text-gray-300"
                          style={{
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            fontWeight: 300,
                            lineHeight: 1.7
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
      </div>

      {/* Bottom Half - Sales Feature Content */}
      <div className="relative h-[75vh] flex items-center">
        {/* Split Layout Container */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/lead-engine-portrait.png"
                  alt="Lead Engine Portrait"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                  loading="eager"
                  fetchpriority="high"
                  decoding="sync"
                  style={{
                    filter: 'brightness(1.1) contrast(1.2) saturate(1.1)',
                    imageRendering: 'high-quality',
                    transform: 'translateZ(0)',
                    willChange: 'transform'
                  }}
                />
                
                {/* Subtle blue accent overlay for branding */}
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-transparent to-cyan-500/5 opacity-60" />
                
                {/* Premium border glow */}
                <div className="absolute inset-0 rounded-2xl border border-blue-400/20 shadow-xl shadow-blue-500/10" />
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="relative">
              <div className="max-w-xl">
                
                {/* Headline */}
                <h2 
                  className="text-5xl lg:text-6xl xl:text-7xl text-white mb-8"
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
                
                {/* Content Text */}
                <div className="mb-8">
                  <p 
                    className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontWeight: '300',
                      lineHeight: '1.6'
                    }}
                  >
                    Automatische lead generatie tot nurturing en follow-up. <span className="text-gray-200" style={{ fontWeight: '400' }}>Automatische sales flows</span> die 24/7 werken, <span className="text-gray-200" style={{ fontWeight: '400' }}>meer conversie en hogere deal value.</span>
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="mt-10 lg:mt-12">
                  <div className="relative group inline-block">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500 scale-110 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
                    
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          window.location.href = '/contact';
                        }
                      }}
                      className="relative inline-flex items-center justify-center text-sm lg:text-base text-white font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-400 group-hover:shadow-2xl px-6 py-3 lg:px-8 lg:py-4"
                      style={{ 
                        background: `
                          linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(59, 130, 246, 0.12) 50%, rgba(37, 99, 235, 0.15) 100%),
                          padding-box,
                          linear-gradient(to right, #60a5fa, #3b82f6, #2563eb) border-box
                        `,
                        fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        fontWeight: '500',
                        backdropFilter: 'blur(16px) saturate(160%)',
                        WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                        border: '1.5px solid transparent',
                        boxShadow: `
                          0 8px 24px rgba(96, 165, 250, 0.15),
                          0 4px 12px rgba(59, 130, 246, 0.12),
                          0 2px 6px rgba(37, 99, 235, 0.08),
                          inset 0 1px 0 rgba(255, 255, 255, 0.12),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.1)
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
            </div>

          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlays for depth - only top */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-30"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)'
        }}
      />
      
      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.1) 85%, transparent 100%)'
        }}
      />
      
      {/* Subtle vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-15"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.3) 100%)'
        }}
      />
    </section>
  );
};

export default CombinedSalesEngineSection;