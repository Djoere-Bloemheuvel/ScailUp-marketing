const HomeAnimatedHeadline = () => {
  return (
    <div className="relative px-6 sm:px-6 max-w-5xl mx-auto">
      <div className="text-left" style={{ 
        '@media (min-width: 1680px)': { 
          marginLeft: '-2rem' 
        }
      }}>
        <style jsx>{`
          /* Custom responsive title scaling - veel geleidelijker en langer groot blijven */
          @media (min-width: 768px) {
            .title-responsive {
              font-size: 3.25rem; /* tussen text-5xl en text-6xl */
              line-height: 0.85;
            }
          }
          @media (min-width: 900px) {
            .title-responsive {
              font-size: 3.5rem; /* tussen text-5xl en text-6xl */
              line-height: 0.85;
            }
          }
          @media (min-width: 1000px) {
            .title-responsive {
              font-size: 4.25rem; /* tussen text-6xl en text-7xl */
              line-height: 0.85;
            }
          }
          @media (min-width: 1024px) {
            .title-responsive {
              font-size: 4.5rem; /* text-7xl equivalent - originele laptop grootte */
              line-height: 0.85;
            }
          }
          @media (min-width: 1280px) {
            .title-responsive {
              font-size: 6rem; /* text-8xl equivalent - originele desktop grootte */
              line-height: 0.85;
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
              achter jouw groei.
            </div>
          </div>
        </h1>

        </div>
      </div>
    </div>
  );
};

export default HomeAnimatedHeadline;