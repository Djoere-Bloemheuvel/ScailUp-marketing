const HomeAnimatedHeadline = () => {
  return (
    <div className="relative px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-left" style={{ 
        '@media (min-width: 1680px)': { 
          marginLeft: '-2rem' 
        }
      }}>
        <style jsx>{`
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white"
          style={{ 
            fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '-0.045em',
            lineHeight: '0.9',
            textRendering: 'optimizeLegibility', 
            WebkitFontSmoothing: 'antialiased'
          }}
        >
          <div className="space-y-2 sm:space-y-3">
            <div style={{ fontWeight: '300' }}>
              Wij bouwen de systemen
            </div>
            <div style={{ fontWeight: '400' }}>
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