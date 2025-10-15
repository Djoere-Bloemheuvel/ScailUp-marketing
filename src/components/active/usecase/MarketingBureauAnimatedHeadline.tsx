const MarketingBureauAnimatedHeadline = () => {
  return (
    <div className="relative px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-left title-container" style={{ 
        marginLeft: '-0.5rem'
      }}>
        <style jsx>{`
          /* Mobile-first responsive title scaling - desktop preserved */
          .title-responsive {
            font-size: clamp(2rem, 3.5vw + 0.6rem, 4rem);
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
              font-size: clamp(2.5rem, 3.5vw + 0.9rem, 4.5rem);
            }
          }
          @media (min-width: 1024px) {
            .title-responsive {
              font-size: clamp(3.5rem, 2.5vw + 1.5rem, 4.5rem);
            }
          }
          @media (min-width: 1280px) {
            .title-responsive {
              font-size: 4.5rem;
            }
          }
          @media (min-width: 1680px) {
            .title-responsive {
              font-size: 5rem;
            }
          }
          
          /* Mobile container positioning - less left offset, meer ruimte aan onderkant */
          .title-container {
            margin-left: 0rem; /* No left offset on mobile */
            padding-bottom: 0.75rem; /* Extra ruimte aan onderkant om cutoffs te voorkomen */
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
            WebkitFontSmoothing: 'antialiased'
          }}
        >
          <div className="space-y-1 sm:space-y-2 md:space-y-3">
            <div style={{ fontWeight: '300' }}>
              Wij bouwen de systemen achter
            </div>
            <div style={{ fontWeight: '400', whiteSpace: 'nowrap' }}>
              de groei van marketingbureaus.
            </div>
          </div>
        </h1>


        </div>
      </div>
    </div>
  );
};

export default MarketingBureauAnimatedHeadline;