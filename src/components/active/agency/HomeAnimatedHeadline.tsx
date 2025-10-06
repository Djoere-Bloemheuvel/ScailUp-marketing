const HomeAnimatedHeadline = () => {
  return (
    <div className="relative px-6 sm:px-6 max-w-5xl mx-auto">
      <div className="text-left" style={{ 
        '@media (min-width: 1680px)': { 
          marginLeft: '-2rem' 
        }
      }}>
        <style jsx>{`
          /* Ultra-stable responsive title scaling - smooth calculations */
          .title-responsive {
            font-size: clamp(3rem, 5vw + 1rem, 6rem);
            line-height: 0.85;
            will-change: transform;
            transform: translateZ(0);
            /* Prevent any layout jumping */
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
          }
          
          /* Fine-tuned breakpoint adjustments */
          @media (min-width: 768px) {
            .title-responsive {
              font-size: clamp(3.25rem, 4.5vw + 1.2rem, 6rem);
            }
          }
          @media (min-width: 1024px) {
            .title-responsive {
              font-size: clamp(4.5rem, 3vw + 2rem, 6rem);
            }
          }
          @media (min-width: 1280px) {
            .title-responsive {
              font-size: 6rem;
            }
          }
          
          @media (min-width: 1680px) {
            .title-container {
              margin-left: -2rem;
            }
          }
          @media (min-width: 1920px) {
            .title-container {
              margin-left: -3rem;
            }
          }
          @media (min-width: 2560px) {
            .title-container {
              margin-left: -4rem;
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

        {/* Hero Tagline - Exact same style as headline but smaller */}
        <div className="mt-3 sm:mt-4 md:mt-6">
          <p 
            className="text-lg sm:text-xl md:text-2xl text-white font-light"
            style={{ 
              fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '-0.045em',
              lineHeight: '0.85',
              textRendering: 'optimizeLegibility', 
              WebkitFontSmoothing: 'antialiased',
              whiteSpace: 'nowrap',
              color: '#ffffff'
            }}
          >
            De partner voor AI-software, growth marketing en geautomatiseerde lead generatie.
          </p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default HomeAnimatedHeadline;