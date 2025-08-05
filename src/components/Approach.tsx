
import AppleTimeline from './AppleTimeline';

const Approach = () => {
  return (
    <section className="relative py-20 lg:py-28 px-4 overflow-hidden bg-black">
      {/* Content container */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Apple-inspired header with refined typography - removed badge and "Onze Werkwijze" */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Hero title - Apple style with refined fonts */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
              Gebouwd op principes.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Gedreven door resultaat.
              </span>
            </h2>
          </div>
          
          {/* Subtitle with Apple typography */}
          <p className="text-white/55 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
            Dit zijn de vier principes waarmee we elk project tot een succes maken.
          </p>
        </div>

        {/* Refined Apple-style vertical timeline */}
        <AppleTimeline />

        {/* Removed bottom CTA section */}
      </div>
    </section>
  );
};

export default Approach;
