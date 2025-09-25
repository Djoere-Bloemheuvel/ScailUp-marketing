import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSalesEngineSection = () => {
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
      title: "Automatische Leadgeneratie",
      content: "AI-gedreven prospecting systemen die automatisch hoogwaardige leads identificeren en benaderen via LinkedIn, email en multi-channel campaigns. Volledige pipeline automation voor consistente leadflow."
    },
    {
      title: "Smart AI Follow-ups", 
      content: "Intelligente follow-up sequences die zich aanpassen aan prospect gedrag. AI analyseert engagement patterns en optimaliseert timing, messaging en kanaal keuze voor maximale conversie rates."
    },
    {
      title: "Personalised Proposals",
      content: "Automatische proposal generatie op basis van prospect data en requirements. AI creëert gepersonaliseerde offertes, presentaties en contracten die perfect aansluiten bij client behoeften."
    },
    {
      title: "AI-First CRM",
      content: "Next-generation CRM dat draait op AI insights. Voorspellende analytics, automatische lead scoring, opportunity forecasting en intelligent account management in één platform."
    }
  ];

  return (
    <section className="relative w-full h-screen bg-black flex flex-col overflow-hidden">
      

      {/* SALES ENGINE title section */}
      <div className="relative pt-16 pb-8 px-16 z-10">
        
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
              Sales Engine
            </div>
            <div style={{ fontWeight: '400', whiteSpace: 'nowrap' }}>
              Meer leads. Minder handwerk.
            </div>
          </div>
        </h1>
      </div>

      {/* Sales Engine Accordion */}
      <div className="relative flex-1 max-w-5xl ml-auto mr-12 px-16 w-2/3 overflow-y-auto z-10">
        {salesEngineServices.map((service, index) => {
          const isOpen = openItem === index;
          
          return (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 text-left flex justify-between items-center group hover:bg-white/5 transition-all duration-300 rounded-lg px-2 -mx-2"
              >
                <h2 
                  className="text-xl md:text-2xl lg:text-3xl text-white"
                  style={{
                    fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontWeight: '300',
                    letterSpacing: '-0.025em',
                    textRendering: 'optimizeLegibility',
                    WebkitFontSmoothing: 'antialiased'
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
                        className="text-base md:text-lg leading-relaxed max-w-3xl text-white/90"
                        style={{
                          fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          fontWeight: '300',
                          lineHeight: '1.7',
                          letterSpacing: '-0.015em',
                          textRendering: 'optimizeLegibility',
                          WebkitFontSmoothing: 'antialiased'
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
      
    </section>
  );
};

export default ServicesSalesEngineSection;