import React from 'react';
import { ArrowRight } from 'lucide-react';

const SalesEngineSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <div className="relative w-full" style={{ height: '77vh' }}>
        
        {/* Background Image Container - Partnership Style */}
        <div className="absolute inset-0" style={{ backgroundColor: '#1a1a1a' }}>
          <img 
            src="/sales-engine-futuristic-monument.png"
            alt="Sales Engine Hero"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
            style={{
              filter: 'brightness(1.0) contrast(1.1)',
              imageRendering: 'high-quality',
              transform: 'translateZ(0)',
              objectPosition: 'center center',
              opacity: '0.8',
              willChange: 'transform'
            }}
          />
          
          {/* Simplified Overlay - Hero style */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>
        
        {/* Extremely Subtle Fade Effects */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/15 to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/15 to-transparent pointer-events-none z-20"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-start z-10">
          <div className="relative max-w-6xl text-left px-6 lg:px-8 ml-0 lg:ml-4 xl:ml-6">
            
            <div className="max-w-5xl">
              {/* Main Headline */}
              <h1 
                className="text-5xl lg:text-6xl xl:text-7xl text-white mb-6"
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
                    Automatische
                  </div>
                  <div style={{ fontWeight: '400' }}>
                    lead generatie.
                  </div>
                </div>
              </h1>
              
              {/* Subline */}
              <div className="mb-8">
                <p 
                  className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed"
                  style={{ 
                    fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontWeight: '300',
                    lineHeight: '1.6'
                  }}
                >
                  Van email outreach tot lead enrichment. <span className="text-gray-200" style={{ fontWeight: '400' }}>Volledig geautomatiseerd</span> en geïntegreerd met jouw bestaande tools, <span className="text-gray-200" style={{ fontWeight: '400' }}>klaar in 24 uur.</span>
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="mt-10 lg:mt-12">
                <div className="relative group inline-block">
                  <div className="absolute inset-0 rounded-full blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500 scale-110 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400"></div>
                  
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = '/lead-engine';
                      }
                    }}
                    className="relative inline-flex items-center justify-center text-sm lg:text-base text-white font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-400 group-hover:shadow-2xl px-6 py-3 lg:px-8 lg:py-4"
                    style={{ 
                      background: `
                        linear-gradient(135deg, rgba(96, 165, 250, 0.12) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(244, 114, 182, 0.12) 100%),
                        padding-box,
                        linear-gradient(to right, #60a5fa, #a855f7, #f472b6) border-box
                      `,
                      fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontWeight: '500',
                      backdropFilter: 'blur(16px) saturate(160%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                      border: '1.5px solid transparent',
                      boxShadow: `
                        0 8px 24px rgba(96, 165, 250, 0.12),
                        0 4px 12px rgba(168, 85, 247, 0.08),
                        0 2px 6px rgba(244, 114, 182, 0.06),
                        inset 0 1px 0 rgba(255, 255, 255, 0.12),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                      `,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    <span className="relative z-10 mr-2">Start Lead Engine</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-400" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesEngineSection;