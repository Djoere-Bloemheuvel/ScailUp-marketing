const HomeAnimatedHeadline = () => {
  return (
    <div className="relative px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-left title-container" style={{ 
        marginLeft: '-0.5rem'
      }}>
        <style jsx>{`
          /* Mobile-first responsive title scaling - desktop preserved */
          .title-responsive {
            font-size: clamp(2.5rem, 4vw + 0.8rem, 5rem);
            line-height: 0.85;
            will-change: transform;
            transform: translateZ(0);
            /* Prevent any layout jumping */
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
          }
          
          /* Mobile-only refinements - veel groter voor betere leesbaarheid, fix cutoffs */
          @media (max-width: 639px) {
            .title-responsive {
              font-size: clamp(2.2rem, 7vw + 0.7rem, 3rem) !important; /* Nog groter! */
              line-height: 1.05; /* Strakker voor betere impact */
              contain: layout style paint;
              letter-spacing: -0.03em;
              text-align: left !important;
              color: #ffffff !important;
              word-wrap: break-word;
              overflow-wrap: break-word;
              hyphens: auto;
              max-width: 100%;
              padding: 0.25rem 0 0.5rem 0; /* Extra padding om cutoffs te voorkomen */
              font-weight: 350 !important; /* Iets zwaarder voor betere leesbaarheid */
            }
            
            .title-container {
              padding-bottom: 0.5rem !important; /* Minder ruimte onder titel voor compactere look */
            }
          }
          
          /* Extra small mobile - ook veel groter */
          @media (max-width: 479px) {
            .title-responsive {
              font-size: clamp(2rem, 6.5vw + 0.5rem, 2.6rem) !important; /* Groter! */
              line-height: 1.05;
              letter-spacing: -0.025em;
              text-align: left !important;
              color: #ffffff !important;
              font-weight: 350 !important;
            }
          }
          
          /* Ultra small phones - ook flink groter */
          @media (max-width: 374px) {
            .title-responsive {
              font-size: clamp(1.8rem, 6vw + 0.4rem, 2.2rem) !important; /* Veel groter! */
              line-height: 1.1;
              letter-spacing: -0.02em;
              text-align: left !important;
              color: #ffffff !important;
              font-weight: 350 !important;
            }
          }
          
          /* Fine-tuned breakpoint adjustments */
          @media (min-width: 768px) {
            .title-responsive {
              font-size: clamp(3rem, 4vw + 1.2rem, 5.5rem);
            }
          }
          @media (min-width: 1024px) {
            .title-responsive {
              font-size: clamp(4rem, 3vw + 2rem, 5.5rem);
            }
          }
          @media (min-width: 1280px) {
            .title-responsive {
              font-size: 5.5rem;
            }
          }
          @media (min-width: 1680px) {
            .title-responsive {
              font-size: 6rem;
            }
          }
          
          /* Mobile container positioning - less left offset, meer ruimte aan onderkant */
          .title-container {
            margin-left: 0rem; /* No left offset on mobile */
            padding-bottom: 0.75rem; /* Extra ruimte aan onderkant om cutoffs te voorkomen */
            padding-top: 1rem; /* Move content down slightly */
          }
          
          @media (min-width: 768px) {
            .title-container {
              margin-left: -1.5rem;
            }
          }
          @media (min-width: 1680px) {
            .title-container {
              margin-left: -2rem;
            }
          }
          @media (min-width: 1920px) {
            .title-container {
              margin-left: -2.5rem;
            }
          }
          @media (min-width: 2560px) {
            .title-container {
              margin-left: -3rem;
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
            WebkitFontSmoothing: 'antialiased'
          }}
        >
          <div className="space-y-1 sm:space-y-2 md:space-y-3">
            <div style={{ fontWeight: '300', whiteSpace: 'nowrap' }}>
              Wij bouwen de systemen achter
            </div>
            <div style={{ fontWeight: '400', whiteSpace: 'nowrap' }}>
              de groei van B2B bedrijven.
            </div>
          </div>
        </h1>

        {/* Hero Tagline - Mobile-optimized 2 lines, dichter bij titel */}
        <div className="mt-2 sm:mt-3 md:mt-4">
          <style jsx>{`
            /* Desktop-first tagline - preserve original sizing */
            .tagline-responsive {
              font-size: 1.125rem; /* text-lg */
              line-height: 1.3;
              letter-spacing: -0.045em;
            }
            
            /* Mobile-only optimizations - veel groter en left aligned */
            @media (max-width: 639px) {
              .tagline-responsive {
                font-size: clamp(1rem, 4vw + 0.2rem, 1.3rem) !important; /* Groter! */
                line-height: 1.35;
                letter-spacing: -0.01em;
                contain: layout style;
                text-align: left !important;
                font-weight: 300 !important;
              }
            }
            
            @media (max-width: 479px) {
              .tagline-responsive {
                font-size: clamp(0.9rem, 3.5vw + 0.15rem, 1.2rem) !important; /* Groter! */
                line-height: 1.4;
                letter-spacing: -0.005em;
                text-align: left !important;
                font-weight: 300 !important;
              }
            }
            
            @media (max-width: 374px) {
              .tagline-responsive {
                font-size: clamp(0.8rem, 3.2vw + 0.1rem, 1rem) !important; /* Groter! */
                line-height: 1.45;
                letter-spacing: 0em;
                text-align: left !important;
                font-weight: 300 !important;
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