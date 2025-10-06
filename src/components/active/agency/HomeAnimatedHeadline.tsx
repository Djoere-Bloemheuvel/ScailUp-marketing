const HomeAnimatedHeadline = () => {
  return (
    <div className="relative px-6 sm:px-6 max-w-5xl mx-auto">
      <div className="text-left title-container" style={{ 
        marginLeft: '-0.5rem'
      }}>
        <style jsx>{`
          /* Mobile-first responsive title scaling - desktop preserved */
          .title-responsive {
            font-size: clamp(2.75rem, 4.5vw + 0.9rem, 5.5rem);
            line-height: 0.85;
            will-change: transform;
            transform: translateZ(0);
            /* Prevent any layout jumping */
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
          }
          
          /* Mobile-only refinements */
          @media (max-width: 639px) {
            .title-responsive {
              font-size: clamp(2.2rem, 8vw + 0.5rem, 2.8rem);
              line-height: 0.9;
              contain: layout style paint;
            }
          }
          
          /* Extra small mobile */
          @media (max-width: 479px) {
            .title-responsive {
              font-size: clamp(2rem, 9vw + 0.3rem, 2.6rem);
              line-height: 0.95;
              letter-spacing: -0.035em;
            }
          }
          
          /* Fine-tuned breakpoint adjustments */
          @media (min-width: 768px) {
            .title-responsive {
              font-size: clamp(3rem, 4vw + 1.1rem, 5.5rem);
            }
          }
          @media (min-width: 1024px) {
            .title-responsive {
              font-size: clamp(4.25rem, 2.8vw + 1.8rem, 5.5rem);
            }
          }
          @media (min-width: 1280px) {
            .title-responsive {
              font-size: 5.5rem;
            }
          }
          @media (min-width: 1680px) {
            .title-responsive {
              font-size: 6.5rem;
            }
          }
          
          @media (min-width: 768px) {
            .title-container {
              margin-left: -0.5rem;
            }
          }
          @media (min-width: 1680px) {
            .title-container {
              margin-left: -0.5rem;
            }
          }
          @media (min-width: 1920px) {
            .title-container {
              margin-left: -1rem;
            }
          }
          @media (min-width: 2560px) {
            .title-container {
              margin-left: -1.5rem;
            }
          }
        `}</style>
        <div className="title-container">
        
        {/* Main Headline - Clean Typography */}
        <h1 
          className="text-5xl sm:text-5xl title-responsive text-white"
          style={{ 
            fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '-0.045em',
            lineHeight: '0.85',
            textRendering: 'optimizeLegibility', 
            WebkitFontSmoothing: 'antialiased',
            whiteSpace: 'nowrap'
          }}
        >
          <div className="space-y-1 sm:space-y-2 md:space-y-3">
            <div style={{ fontWeight: '300', whiteSpace: 'nowrap' }}>
              Wij bouwen de systemen
            </div>
            <div style={{ fontWeight: '400', whiteSpace: 'nowrap' }}>
              achter jouw B2B groei.
            </div>
          </div>
        </h1>

        {/* Hero Tagline - Mobile-optimized 2 lines */}
        <div className="mt-3 sm:mt-4 md:mt-6">
          <style jsx>{`
            /* Desktop-first tagline - preserve original sizing */
            .tagline-responsive {
              font-size: 1.125rem; /* text-lg */
              line-height: 1.3;
              letter-spacing: -0.045em;
            }
            
            /* Mobile-only optimizations */
            @media (max-width: 639px) {
              .tagline-responsive {
                font-size: clamp(0.9rem, 4vw + 0.2rem, 1rem);
                line-height: 1.4;
                letter-spacing: -0.02em;
                contain: layout style;
              }
            }
            
            @media (max-width: 479px) {
              .tagline-responsive {
                font-size: clamp(0.85rem, 4.5vw + 0.1rem, 0.95rem);
                line-height: 1.45;
                letter-spacing: -0.015em;
              }
            }
            
            @media (min-width: 640px) {
              .tagline-responsive {
                font-size: 1.25rem; /* text-xl */
              }
            }
            
            @media (min-width: 768px) {
              .tagline-responsive {
                font-size: 1.5rem; /* text-2xl */
              }
            }
          `}</style>
          <p 
            className="tagline-responsive text-white font-light"
            style={{ 
              fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '300',
              textRendering: 'optimizeLegibility', 
              WebkitFontSmoothing: 'antialiased',
              color: '#ffffff'
            }}
          >
            <span className="block sm:inline">De partner voor AI-software, growth marketing</span>
            <span className="block sm:inline"> en geautomatiseerde lead generatie.</span>
          </p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default HomeAnimatedHeadline;