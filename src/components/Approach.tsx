
import AppleTimeline from './AppleTimeline';
import AppleNebulaBackground from './AppleNebulaBackground';

const Approach = () => {
  return (
    <section className="relative py-20 lg:py-28 px-4 overflow-hidden bg-black">
      {/* Enhanced nebula background */}
      <AppleNebulaBackground />
      
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

      {/* Enhanced ambient glow at bottom for seamless transition to WorkMethodology */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[600px] h-64 pointer-events-none z-30">
        {/* Primary enhanced glow layer with higher opacity and sharper blur */}
        <div className="w-full h-full bg-gradient-to-t from-transparent via-cyan-400/20 to-transparent blur-[40px] opacity-90" />
        
        {/* Secondary glow layer for depth */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-transparent via-purple-500/15 to-transparent blur-[50px] opacity-80" />
        
        {/* Additional sharp accent layer for visibility */}
        <div className="absolute inset-0 w-3/4 h-3/4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-transparent via-blue-400/12 to-transparent blur-[30px] opacity-95" />
        
        {/* Soft outer glow for seamless blending */}
        <div className="absolute inset-0 w-[120%] h-[120%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-transparent via-cyan-300/8 to-transparent blur-[70px] opacity-70" />
      </div>
    </section>
  );
};

export default Approach;
