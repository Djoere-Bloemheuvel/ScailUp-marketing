import { Button } from '@/components/ui/button';
import { useProgressiveLoad } from '@/hooks/useProgressiveLoad';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedHeadline from './AnimatedHeadline';
import CinematicBackground from './hero/CinematicBackground';

const Hero = () => {
  const backgroundLoaded = useProgressiveLoad(100); // Load background after 100ms

  const handleDeepDiveClick = () => {
    // Contact action placeholder
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center justify-center px-4 py-12 bg-black overflow-hidden">
      {/* Instant basic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Progressive Cinematic Background */}
      {backgroundLoaded && (
        <div className="absolute inset-0">
          <CinematicBackground />
        </div>
      )}

      {/* Content - Immediately visible without entrance animations */}
      <div className="relative max-w-5xl mx-auto z-30 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Container with Reflection */}
          <div className="relative">
            {/* Main Content - No entrance animations */}
            <div className="relative z-10">
              {/* Animated Headline - Keep word cycling animation */}
              <div className="mb-2">
                <AnimatedHeadline />
              </div>

              {/* Subtitle - Immediately visible */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-premium-silver/90 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4">
                Wij bouwen AI-systemen die uw business
                <br className="hidden sm:block" />
                <span className="text-white font-medium bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">daadwerkelijk transformeren.</span>
              </p>

              {/* Buttons - Immediately visible */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20">
                <Button
                  className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-300 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden premium-button-hover premium-scale-hover w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                    boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Ontdek de mogelijkheden
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="relative text-premium-silver hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full border-premium-silver/40 hover:border-premium-silver/70 transition-all duration-300 premium-button-hover group overflow-hidden bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.12] w-full sm:w-auto"
                  style={{
                    boxShadow: '0 4px 24px rgba(192, 192, 192, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                  onClick={handleDeepDiveClick}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Plan een deepdive
                    <Sparkles className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-200" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Apple-style Reflection Effect - Immediately visible */}
            <div className="absolute top-full left-0 right-0 h-[300px] sm:h-[400px] pointer-events-none overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 scale-y-[-1] origin-top"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, black 70%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)',
                  filter: 'blur(1px)',
                  transform: 'scaleY(-1) translateY(-20px)'
                }}
              >
                {/* Reflected Headline */}
                <div className="mb-2">
                  <AnimatedHeadline />
                </div>

                {/* Reflected Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-premium-silver/90 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4">
                  Wij bouwen AI-systemen die uw business
                  <br className="hidden sm:block" />
                  <span className="text-white font-medium bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">daadwerkelijk transformeren.</span>
                </p>

                {/* Reflected Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20">
                  <Button
                    className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-300 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden premium-button-hover premium-scale-hover w-full sm:w-auto"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                      boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Ontdek de mogelijkheden
                      <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    className="relative text-premium-silver hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full border-premium-silver/40 hover:border-premium-silver/70 transition-all duration-300 premium-button-hover group overflow-hidden bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.12] w-full sm:w-auto"
                    style={{
                      boxShadow: '0 4px 24px rgba(192, 192, 192, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Plan een deepdive
                      <Sparkles className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-200" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium scroll indicator - Immediately visible */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-premium-silver/50 to-transparent relative">
          <div className="w-[1px] h-4 sm:h-6 bg-premium-silver/80 premium-scroll-pulse absolute top-0"></div>
        </div>
      </div>

      {/* Contact Modal */}
      

      {/* Keep only hover and continuous animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes premium-scroll-pulse {
            0%, 100% { opacity: 0.5; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(12px); }
          }

          @keyframes premium-button-hover {
            0% { transform: scale(1) translateY(0); }
            100% { transform: scale(1.02) translateY(-2px); }
          }

          @keyframes premium-scale-hover {
            0% { transform: scale(1); }
            100% { transform: scale(1.02); }
          }

          .premium-scroll-pulse {
            animation: premium-scroll-pulse 3s ease-in-out infinite;
          }

          .premium-button-hover:hover {
            animation: premium-button-hover 0.3s ease-out forwards;
          }

          .premium-scale-hover:hover {
            animation: premium-scale-hover 0.2s ease-out forwards;
          }
        `
      }} />
    </section>
  );
};

export default Hero;
