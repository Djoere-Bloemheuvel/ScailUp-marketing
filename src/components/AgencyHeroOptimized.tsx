import React, { Suspense, lazy } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

// Lazy load heavy dependencies only when needed
const LazyMotion = lazy(() => import('./LazyMotion'));
const AgencyAnimatedHeadline = lazy(() => import('./AgencyAnimatedHeadline'));

/**
 * Performance-optimized Agency Hero with:
 * - Lazy loading of Framer Motion
 * - Reduced bundle size
 * - Better hydration strategy
 * - Maintained visual fidelity
 */
const AgencyHeroOptimized = () => {
  const handleCasesClick = () => {
    if (typeof window !== 'undefined') {
      // Smooth scroll to next section
      const nextSection = document.querySelector('section:nth-of-type(2)');
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback to kenniscentrum if section not found
        window.location.href = '/kenniscentrum';
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-0 overflow-hidden">
      
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle Fade to Black at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20 pointer-events-none" />
      
      {/* Optimized backlights - using CSS transforms only */}
      <div className="absolute inset-0 overflow-hidden opacity-70 xs:opacity-75 sm:opacity-70 md:opacity-65 lg:opacity-60">
        <div className="absolute top-[25%] left-1/2 w-[350px] h-[200px] xs:w-[400px] xs:h-[225px] sm:w-[400px] sm:h-[200px] md:w-[500px] md:h-[250px] lg:w-[700px] lg:h-[350px] xl:w-[800px] xl:h-[400px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl xs:blur-2xl sm:blur-3xl transform -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-[30%] right-[15%] w-[300px] h-[300px] xs:w-[330px] xs:h-[330px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl xs:blur-2xl sm:blur-3xl transform translate-x-1/4" />
        <div className="absolute top-[50%] left-[20%] w-[250px] h-[150px] xs:w-[280px] xs:h-[170px] sm:w-[260px] sm:h-[160px] md:w-[320px] md:h-[200px] lg:w-[450px] lg:h-[270px] xl:w-[500px] xl:h-[300px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl xs:blur-2xl sm:blur-3xl opacity-80" />
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto z-30 text-center px-4">
        <div className="max-w-4xl mx-auto relative" style={{ minHeight: '400px' }}>
          
          {/* Headline - Lazy loaded with Suspense */}
          <div className="-mb-2" style={{ minHeight: '160px' }}>
            <Suspense fallback={
              <div className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold">
                Wij bouwen AI-oplossingen die écht werken.
              </div>
            }>
              <AgencyAnimatedHeadline />
            </Suspense>
          </div>

          {/* Subtitle */}
          <p 
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 xs:mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light px-2 xs:px-4"
            style={{ minHeight: '80px' }}
          >
            <span className="bg-gradient-to-r from-white/90 via-white to-white/90 bg-clip-text text-transparent">
              Agents & automations die jouw bedrijf
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-white font-medium bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              daadwerkelijk transformeren.
            </span>
          </p>

          {/* CTA Section - No motion for better performance */}
          <div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            style={{ minHeight: '100px' }}
          >
            {/* Primary CTA */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 scale-110" />
              
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                }}
                className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg border-0 w-full xs:w-auto"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                }}
              >
                <span className="mr-3">Start je transformatie</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Secondary CTA */}
            <div className="relative group">
              <button
                onClick={handleCasesClick}
                className="relative inline-flex items-center px-8 py-4 text-white font-medium rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg w-full xs:w-auto"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                }}
              >
                <span className="mr-3">Bekijk voorbeelden</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Trust indicator */}
          <p 
            className="text-white/50 text-sm text-center mt-1"
            style={{ minHeight: '20px' }}
          >
            Gratis strategiegesprek • Geen verplichtingen • Direct inzicht
          </p>
        </div>
      </div>
        
    </section>
  );
};

export default AgencyHeroOptimized;