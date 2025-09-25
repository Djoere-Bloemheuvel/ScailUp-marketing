import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesMarketingEngineSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  const marketingEngineServices = [
    {
      title: "BRAND POSITIONING & STRATEGIE",
      content: "Van onzichtbaar naar onmisbaar. We ontwikkelen een brand positioning die jouw ideale klanten direct aanspreekt en onderscheidt van concurrenten. Complete brand strategie inclusief messaging framework en marktpositionering."
    },
    {
      title: "AI CONTENT & AUTOMATION",
      content: "Content die converteert, automatisch. AI-systemen die blogs, social posts, email campaigns en sales materials genereren op basis van jouw brand voice. Van ideë tot publicatie - volledig geautomatiseerd."
    },
    {
      title: "DIGITAL BRAND EXPERIENCE",
      content: "Elke touchpoint telt. Consistente, premium brand experience van website tot social media. Design systems, user journeys en conversion-optimized interfaces die jouw expertise perfect overbrengen."
    },
    {
      title: "PERFORMANCE & GROWTH TRACKING",
      content: "Data die beslissingen drijft. Real-time dashboards die ROI, lead quality, conversion rates en brand awareness tracken. Predictive analytics voor slimme marketing investeringen."
    }
  ];

  return (
    <section className={`relative w-full ${openItem !== null ? 'min-h-[100vh]' : 'h-[90vh]'} bg-black flex flex-col overflow-hidden`}>
      
      {/* Enhanced Ambient Background - extends beyond section */}
      <div className="absolute inset-0 overflow-visible z-0">
        {/* Primary purple/pink ambient glow */}
        <div className="absolute top-1/4 right-1/6 w-[40rem] h-[35rem] bg-gradient-radial from-purple-500/50 via-purple-500/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-1/3 right-1/4 w-[50rem] h-[40rem] bg-gradient-radial from-pink-500/40 via-pink-400/15 to-transparent blur-3xl opacity-60" />
        
        {/* Secondary accent glows */}
        <div className="absolute bottom-1/4 left-1/5 w-[35rem] h-[30rem] bg-gradient-radial from-blue-500/35 via-blue-400/12 to-transparent blur-3xl opacity-50" />
        <div className="absolute top-2/3 left-1/6 w-[25rem] h-[25rem] bg-gradient-radial from-cyan-400/30 via-cyan-300/8 to-transparent blur-2xl opacity-40" />
        
        {/* Extended glows that reach into next section */}
        <div className="absolute bottom-0 right-1/6 w-[40rem] h-[50rem] bg-gradient-radial from-pink-500/60 via-pink-400/20 to-transparent blur-3xl opacity-50" style={{ transform: 'translateY(30%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[40rem] bg-gradient-radial from-purple-400/40 via-purple-300/15 to-transparent blur-3xl opacity-40" style={{ transform: 'translateY(40%)' }} />
        
        {/* Subtle side lighting */}
        <div className="absolute top-1/2 left-0 w-[20rem] h-[60rem] bg-gradient-to-r from-blue-600/15 via-blue-500/8 to-transparent blur-2xl opacity-30" style={{ transform: 'translateY(-50%)' }} />
        <div className="absolute top-1/2 right-0 w-[20rem] h-[60rem] bg-gradient-to-l from-purple-600/12 via-purple-500/6 to-transparent blur-2xl opacity-25" style={{ transform: 'translateY(-50%)' }} />
        
        {/* Floating particles effect */}
        <div className="absolute top-1/5 right-1/4 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-blue-400/35 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-purple-300/40 rounded-full animate-pulse" style={{ animationDelay: '4.5s' }} />
        <div className="absolute bottom-1/5 left-1/6 w-2 h-2 bg-pink-300/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* MARKETING ENGINE title section */}
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
              Marketing Engine
            </div>
            <div style={{ fontWeight: '400', whiteSpace: 'nowrap' }}>
              Brand & Growth Accelerator
            </div>
          </div>
        </h1>
      </div>

      {/* Marketing Engine Accordion */}
      <div className="relative flex-1 max-w-5xl ml-auto mr-12 px-16 w-2/3 overflow-y-auto z-10">
        {marketingEngineServices.map((service, index) => {
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
                      duration: 0.12, 
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
      
      {/* Subtle gradient overlays for depth - only top */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-30"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)'
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

export default ServicesMarketingEngineSection;