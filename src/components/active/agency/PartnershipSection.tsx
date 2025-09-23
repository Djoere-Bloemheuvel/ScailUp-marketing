import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const PartnershipSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
      
      {/* CSS Styles - Hero-geïnspireerd */}
      <style jsx>{`
        /* Responsive CTA scaling - exact kopie van Hero */
        .cta-responsive {
          font-size: 0.875rem; /* text-sm */
          padding: 0.5rem 1rem; /* py-2 px-4 */
        }
        
        @media (min-width: 640px) {
          .cta-responsive {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          }
        }
        
        @media (min-width: 768px) {
          .cta-responsive {
            font-size: 0.875rem;
            padding: 0.5rem 1.125rem;
          }
        }
        
        @media (min-width: 900px) {
          .cta-responsive {
            font-size: 0.95rem;
            padding: 0.625rem 1.25rem;
          }
        }
        
        @media (min-width: 1000px) {
          .cta-responsive {
            font-size: 1rem;
            padding: 0.625rem 1.375rem;
          }
        }
        
        @media (min-width: 1024px) {
          .cta-responsive {
            font-size: 1.05rem;
            padding: 0.625rem 1.5rem;
          }
        }
        
        @media (min-width: 1200px) {
          .cta-responsive {
            font-size: 1.125rem;
            padding: 0.75rem 2rem;
          }
        }
        
        /* Icon responsive scaling */
        .icon-responsive {
          width: 0.75rem;
          height: 0.75rem;
        }
        
        @media (min-width: 768px) {
          .icon-responsive {
            width: 0.875rem;
            height: 0.875rem;
          }
        }
        
        @media (min-width: 900px) {
          .icon-responsive {
            width: 1rem;
            height: 1rem;
          }
        }
        
        @media (min-width: 1000px) {
          .icon-responsive {
            width: 1.125rem;
            height: 1.125rem;
          }
        }
        
        @media (min-width: 1024px) {
          .icon-responsive {
            width: 1.25rem;
            height: 1.25rem;
          }
        }
        
        /* Text margin responsive scaling */
        .text-margin-responsive {
          margin-right: 0.25rem;
        }
        
        @media (min-width: 768px) {
          .text-margin-responsive {
            margin-right: 0.375rem;
          }
        }
        
        @media (min-width: 900px) {
          .text-margin-responsive {
            margin-right: 0.5rem;
          }
        }
        
        @media (min-width: 1000px) {
          .text-margin-responsive {
            margin-right: 0.625rem;
          }
        }
        
        @media (min-width: 1024px) {
          .text-margin-responsive {
            margin-right: 0.75rem;
          }
        }
        
        /* Title responsive scaling - Hero style */
        .title-responsive {
          font-size: 3rem; /* text-5xl */
          line-height: 0.85;
        }
        
        @media (min-width: 768px) {
          .title-responsive {
            font-size: 3.25rem;
            line-height: 0.85;
          }
        }
        
        @media (min-width: 900px) {
          .title-responsive {
            font-size: 3.5rem;
            line-height: 0.85;
          }
        }
        
        @media (min-width: 1000px) {
          .title-responsive {
            font-size: 4.25rem;
            line-height: 0.85;
          }
        }
        
        @media (min-width: 1024px) {
          .title-responsive {
            font-size: 4.5rem;
            line-height: 0.85;
          }
        }
        
        @media (min-width: 1280px) {
          .title-responsive {
            font-size: 6rem;
            line-height: 0.85;
          }
        }
        
        @media (min-width: 1680px) {
          .title-responsive {
            font-size: 7rem;
            line-height: 0.85;
          }
        }
        
        @media (min-width: 1920px) {
          .title-responsive {
            font-size: 8rem;
            line-height: 0.85;
          }
        }
        
        @media (min-width: 2560px) {
          .title-responsive {
            font-size: 9rem;
            line-height: 0.85;
          }
        }
        
        /* Safe padding for large screens - no negative margins */
        @media (min-width: 1680px) {
          .content-container {
            padding-left: 3rem;
          }
        }
        
        @media (min-width: 1920px) {
          .content-container {
            padding-left: 4rem;
          }
        }
        
        @media (min-width: 2560px) {
          .content-container {
            padding-left: 6rem;
          }
        }
      `}</style>
      
      {/* Full-width Cinematographic Container */}
      <div className="relative w-full h-[77vh] overflow-hidden">
        
        {/* Background Visual */}
        <div className="absolute inset-0" style={{ backgroundColor: '#1a1a1a' }}>
          <img 
            src="/partnership-visual-new.png" 
            alt="Buildrs Premium Partnership"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
            width="1600"
            height="900"
            style={{
              filter: 'brightness(1.0) contrast(1.1)',
              imageRendering: 'high-quality',
              transform: 'translateZ(0)',
              objectPosition: 'center 60%',
              opacity: '0.8',
              willChange: 'transform'
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
                className="title-responsive text-white mb-6"
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