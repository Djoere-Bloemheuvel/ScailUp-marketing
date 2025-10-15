import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const PartnershipSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
      {/* Full-width Cinematographic Container */}
      <div className="relative w-full h-[77vh] overflow-hidden">
        
        {/* PERSISTENT Background Paint - Never disappears */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: '#1a1a1a',
            backgroundImage: "url('/partnership-optimized.webp')",
            backgroundSize: 'cover', 
            backgroundPosition: 'center 60%', 
            backgroundRepeat: 'no-repeat',
            contain: 'paint',
            imageRendering: 'high-quality'
          }}
        >
          {/* High-quality overlay - paint-through when loaded */}
          <img 
            src="/partnership-optimized.webp" 
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            width="1600"
            height="900"
            style={{
              filter: 'brightness(1.0) contrast(1.1)',
              imageRendering: 'high-quality',
              objectPosition: 'center 60%',
              opacity: '0',
              transition: 'opacity 0.3s ease-out'
            }}
            onLoad={(e) => {
              (e.target as HTMLImageElement).style.opacity = '0.9';
            }}
          />
          
          {/* Simplified Overlay - Hero style */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Content Overlay - Hero-geïnspireerd */}
        <div className="relative w-full h-full flex items-center justify-start z-10">
          <div className="relative max-w-6xl text-left px-6 lg:px-8 content-container ml-0 lg:ml-4 xl:ml-6" style={{ minPadding: '2rem' }}>
            
            {/* Hero-style Typography */}
            <div className="max-w-5xl">
              {/* Main Headline - Clean Typography zoals Hero */}
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white mb-6"
                style={{ 
                  fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  letterSpacing: '-0.045em',
                  lineHeight: '0.85',
                  textRendering: 'optimizeLegibility', 
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                <div className="space-y-2">
                  <div style={{ fontWeight: '300' }}>
                    Partnership voor
                  </div>
                  <div style={{ fontWeight: '400' }}>
                    echte groei.
                  </div>
                </div>
              </h1>
              
              {/* Subline - Hero stijl */}
              <div className="mb-8">
                <p 
                  className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed"
                  style={{ 
                    fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontWeight: '300',
                    lineHeight: '1.6'
                  }}
                >
                  De kern begint bij onze krachtige AI-engines. Als partner bouwen we hierop door met <span className="text-gray-200" style={{ fontWeight: '400' }}>AI-gedreven systemen</span> die strategie en technologie verbinden, <span className="text-gray-200" style={{ fontWeight: '400' }}>oneindig schaalbaar en klaar voor de toekomst.</span>
                </p>
              </div>
              
              {/* CTA Buttons Container */}
              <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-start w-full">
                
                {/* Primary CTA Button - Clean */}
                <div className="relative group flex-1 sm:flex-initial">
                  
                  {/* Smooth pill-shaped button */}
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = '/contact';
                      }
                    }}
                    className="relative inline-flex items-center justify-center text-sm sm:text-sm md:text-sm lg:text-base xl:text-lg text-white font-medium rounded-full transition-all duration-400 group-hover:shadow-2xl w-full sm:w-auto sm:min-w-[200px] py-2 px-4 sm:py-3 sm:px-6"
                    style={{ 
                      background: 'rgba(0, 0, 0, 0.8)',
                      fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontWeight: '500',
                      backdropFilter: 'blur(16px) saturate(160%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                      border: '2px solid transparent',
                      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                      boxShadow: 'none',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {/* Button content */}
                    <span className="relative z-10 mr-1 sm:mr-2">Laten we samen bouwen</span>
                    <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-400" />
                  </button>
                </div>

                {/* Secondary CTA Button - Subtle */}
                <div className="relative group flex-1 sm:flex-initial">
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = '/partnership';
                      }
                    }}
                    className="relative inline-flex items-center justify-center text-sm sm:text-sm md:text-sm lg:text-base xl:text-lg text-gray-300 hover:text-white font-medium rounded-full border border-gray-600 hover:border-gray-400 backdrop-blur-sm hover:shadow-lg transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] py-2 px-4 sm:py-3 sm:px-6"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontWeight: '400',
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    <span className="relative z-10 mr-1 sm:mr-2">Ontdek ons partnership model</span>
                    <ChevronRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Subtle fade to black at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />
    </section>
  );
};

export default PartnershipSection;