import React from 'react';
import { ArrowRight } from 'lucide-react';

const SalesEngineSection = () => {
  return (
    <section className="relative w-full bg-black py-16 lg:py-20">
      
      {/* Ambient Blue Backlight */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
        {/* Blue glows positioned behind text (left side) */}
        <div className="absolute top-1/3 left-1/6 w-[30rem] h-[25rem] bg-gradient-radial from-blue-500/80 via-blue-500/35 to-transparent blur-2xl" />
        <div className="absolute bottom-1/4 left-1/8 w-[25rem] h-[20rem] bg-gradient-radial from-blue-400/75 via-blue-400/30 to-transparent blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-[35rem] h-[30rem] bg-gradient-radial from-blue-600/70 via-blue-600/25 to-transparent blur-2xl" style={{ transform: 'translateY(-50%)' }} />
      </div>
      
      {/* Split Layout Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          
          {/* Left Side - Content (50%) */}
          <div className="relative">
            <div className="max-w-xl">
              
              {/* Headline */}
              <h2 
                className="text-5xl lg:text-6xl xl:text-7xl text-white mb-8 text-left"
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
                  className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed text-left"
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
              <div className="mt-10 lg:mt-12 text-left">
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
          
          {/* Right Side - Visual (50%) */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
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
              
              {/* Subtle blue accent overlay for branding */}
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-transparent to-cyan-500/5 opacity-60" />
              
              {/* Premium border glow */}
              <div className="absolute inset-0 rounded-2xl border border-blue-400/20 shadow-xl shadow-blue-500/10" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Natural Fade to Black Effects */}
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.1) 85%, transparent 100%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.1) 85%, transparent 100%)'
        }}
      />
    </section>
  );
};

export default SalesEngineSection;