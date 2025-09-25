import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CombinedMarketingSection = () => {
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
    <section className="relative w-full h-[175vh] bg-black overflow-hidden">
      
      {/* Unified Ambient Background - covers entire 150vh */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Top area - Purple/Pink ambient glow for accordion */}
        <div className="absolute top-1/6 right-1/6 w-[40rem] h-[35rem] bg-gradient-radial from-purple-500/50 via-purple-500/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-1/4 right-1/4 w-[50rem] h-[40rem] bg-gradient-radial from-pink-500/40 via-pink-400/15 to-transparent blur-3xl opacity-60" />
        
        {/* Middle transition area - blending colors */}
        <div className="absolute top-1/2 left-1/5 w-[35rem] h-[30rem] bg-gradient-radial from-blue-500/35 via-blue-400/12 to-transparent blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-1/3 w-[45rem] h-[35rem] bg-gradient-radial from-pink-500/45 via-pink-400/18 to-transparent blur-3xl opacity-55" />
        
        {/* Bottom area - Pink ambient glow for feature content */}
        <div className="absolute bottom-1/4 right-1/6 w-[30rem] h-[25rem] bg-gradient-radial from-pink-500/80 via-pink-500/35 to-transparent blur-2xl opacity-30" />
        <div className="absolute bottom-1/6 right-1/8 w-[25rem] h-[20rem] bg-gradient-radial from-pink-400/75 via-pink-400/30 to-transparent blur-2xl opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-[35rem] h-[30rem] bg-gradient-radial from-pink-600/70 via-pink-600/25 to-transparent blur-2xl opacity-30" />
        
        {/* Subtle side lighting */}
        <div className="absolute top-1/2 left-0 w-[20rem] h-[120rem] bg-gradient-to-r from-blue-600/15 via-blue-500/8 to-transparent blur-2xl opacity-30" style={{ transform: 'translateY(-50%)' }} />
        <div className="absolute top-1/2 right-0 w-[20rem] h-[120rem] bg-gradient-to-l from-purple-600/12 via-purple-500/6 to-transparent blur-2xl opacity-25" style={{ transform: 'translateY(-50%)' }} />
        
        {/* Floating particles effect throughout */}
        <div className="absolute top-1/8 right-1/4 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-blue-400/35 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-purple-300/40 rounded-full animate-pulse" style={{ animationDelay: '4.5s' }} />
        <div className="absolute bottom-1/4 left-1/6 w-2 h-2 bg-pink-300/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/6 right-1/3 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse" style={{ animationDelay: '6s' }} />
      </div>

      {/* Top Half - Marketing Engine Accordion */}
      <div className="relative h-[100vh] flex flex-col">
        {/* Marketing Engine Title */}
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
        <div className="relative flex-1 max-w-5xl ml-auto mr-12 px-16 w-2/3 overflow-y-auto z-10 pb-16">
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
      </div>

      {/* Bottom Half - Marketing Feature Content */}
      <div className="relative h-[75vh] flex items-center">
        {/* Split Layout Container */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/marketing-engine-tree-visual.webp"
                  alt="Marketing Engine Tree Visual"
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
                
                {/* Subtle pink accent overlay for branding */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-purple-500/5 opacity-60" />
                
                {/* Premium border glow */}
                <div className="absolute inset-0 rounded-2xl border border-pink-400/20 shadow-xl shadow-pink-500/10" />
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
                      De motor achter
                    </div>
                    <div style={{ fontWeight: '400' }}>
                      jouw marketing.
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
                    Van blog posts tot social media content. <span className="text-gray-200" style={{ fontWeight: '400' }}>10x sneller content</span> productie met AI-gedreven workflows, <span className="text-gray-200" style={{ fontWeight: '400' }}>Q1 2025 verwacht.</span>
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="mt-10 lg:mt-12">
                  <div className="relative group inline-block">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500 scale-110 bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500"></div>
                    
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          window.location.href = '/contact';
                        }
                      }}
                      className="relative inline-flex items-center justify-center text-sm lg:text-base text-white font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-400 group-hover:shadow-2xl px-6 py-3 lg:px-8 lg:py-4"
                      style={{ 
                        background: `
                          linear-gradient(135deg, rgba(244, 114, 182, 0.15) 0%, rgba(236, 72, 153, 0.12) 50%, rgba(219, 39, 119, 0.15) 100%),
                          padding-box,
                          linear-gradient(to right, #f472b6, #ec4899, #db2777) border-box
                        `,
                        fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        fontWeight: '500',
                        backdropFilter: 'blur(16px) saturate(160%)',
                        WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                        border: '1.5px solid transparent',
                        boxShadow: `
                          0 8px 24px rgba(244, 114, 182, 0.15),
                          0 4px 12px rgba(236, 72, 153, 0.12),
                          0 2px 6px rgba(219, 39, 119, 0.08),
                          inset 0 1px 0 rgba(255, 255, 255, 0.12),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                        `,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      <span className="relative z-10 mr-2">Meld je aan voor early access</span>
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

export default CombinedMarketingSection;