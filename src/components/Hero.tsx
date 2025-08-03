
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedHeadline from './AnimatedHeadline';
import CinematicBackground from './hero/CinematicBackground';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [headlineComplete, setHeadlineComplete] = useState(false);

  useEffect(() => {
    // Start the cinematic loading sequence
    const initSequence = async () => {
      // Background loads first (400ms)
      await new Promise(resolve => setTimeout(resolve, 400));
      
      // Then glass container and headline (800ms)
      setIsLoading(false);
      
      // Signal headline to start glitch animations after fade-in completes
      setTimeout(() => {
        setHeadlineComplete(true);
      }, 800);
    };

    initSequence();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-black overflow-hidden">
      {/* Cinematic Background with staggered fade-in */}
      <div className="absolute inset-0">
        <CinematicBackground />
      </div>

      {/* Premium corner particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left corner particle */}
        <div 
          className={`absolute top-8 left-8 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400/60 to-violet-400/60 transition-opacity duration-800 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transitionDelay: '200ms',
            animation: isLoading ? 'none' : 'cornerParticlePulse 4s ease-in-out infinite'
          }}
        />
        
        {/* Bottom-right corner particle */}
        <div 
          className={`absolute bottom-8 right-8 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400/50 to-cyan-400/50 transition-opacity duration-800 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transitionDelay: '300ms',
            animation: isLoading ? 'none' : 'cornerParticlePulse 5s ease-in-out infinite 1s'
          }}
        />
        
        {/* Additional accent particles - Hidden on mobile */}
        <div 
          className={`absolute top-1/4 right-16 w-1 h-1 rounded-full bg-white/40 hidden sm:block transition-opacity duration-800 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transitionDelay: '400ms',
            animation: isLoading ? 'none' : 'cornerParticlePulse 6s ease-in-out infinite 2s'
          }}
        />
      </div>

      {/* Content - Cinematic fade-in sequence */}
      <div className="relative max-w-5xl mx-auto z-30 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Container with Glass Effect and Cinematic Animation */}
          <div className="relative">
            {/* Main Content - Cinematic entrance */}
            <div 
              className={`relative z-10 transition-all duration-800 ease-out ${
                isLoading 
                  ? 'opacity-0 scale-[0.98] translate-y-2' 
                  : 'opacity-100 scale-100 translate-y-0'
              }`}
              style={{ 
                willChange: 'transform, opacity',
                transitionDelay: '400ms'
              }}
            >
              {/* Animated Headline - Triggers glitch after load */}
              <div className="mb-2">
                <AnimatedHeadline startAnimation={headlineComplete} />
              </div>
              
              {/* Subtitle - Fades with container */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-premium-silver/90 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4">
                Wij bouwen AI-systemen die uw business 
                <br className="hidden sm:block" />
                <span className="text-white font-medium bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">daadwerkelijk transformeren.</span>
              </p>
              
              {/* Buttons - Slide up with delay */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20 transition-all duration-600 ease-out ${
                  isLoading 
                    ? 'opacity-0 translate-y-3' 
                    : 'opacity-100 translate-y-0'
                }`}
                style={{
                  transitionDelay: '600ms'
                }}
              >
                <Button 
                  className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-700 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden premium-button-hover premium-scale-hover w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                    boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Ontdek de mogelijkheden
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="relative text-premium-silver hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full border-premium-silver/40 hover:border-premium-silver/70 transition-all duration-700 premium-button-hover group overflow-hidden bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.12] w-full sm:w-auto"
                  style={{
                    boxShadow: '0 4px 24px rgba(192, 192, 192, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Plan een deepdive
                    <Sparkles className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Diagonal Light Sweep Effect */}
            {!isLoading && (
              <div 
                className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl opacity-30"
                style={{
                  animation: 'diagonalLightSweep 1000ms ease-out 1200ms forwards'
                }}
              >
                <div 
                  className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -rotate-45 origin-center"
                  style={{
                    top: '-50%',
                    left: '-50%',
                    width: '200%'
                  }}
                />
              </div>
            )}

            {/* Apple-style Reflection Effect - Fades with main content */}
            <div 
              className={`absolute top-full left-0 right-0 h-[300px] sm:h-[400px] pointer-events-none overflow-hidden transition-opacity duration-800 ease-out ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
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
                {/* Reflected content */}
                <div className="mb-2">
                  <AnimatedHeadline startAnimation={false} />
                </div>
                
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-premium-silver/90 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4">
                  Wij bouwen AI-systemen die uw business 
                  <br className="hidden sm:block" />
                  <span className="text-white font-medium bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">daadwerkelijk transformeren.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20">
                  {/* Reflected buttons - same as above */}
                  <Button 
                    className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-700 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden premium-button-hover premium-scale-hover w-full sm:w-auto"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                      boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Ontdek de mogelijkheden
                      <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="relative text-premium-silver hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full border-premium-silver/40 hover:border-premium-silver/70 transition-all duration-700 premium-button-hover group overflow-hidden bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.12] w-full sm:w-auto"
                    style={{
                      boxShadow: '0 4px 24px rgba(192, 192, 192, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Plan een deepdive
                      <Sparkles className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium scroll indicator - Fades in last */}
      <div 
        className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block transition-opacity duration-400 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-premium-silver/50 to-transparent relative">
          <div className="w-[1px] h-4 sm:h-6 bg-premium-silver/80 premium-scroll-pulse absolute top-0"></div>
        </div>
      </div>
      
      {/* Cinematic animations and existing hover animations */}
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

          @keyframes cornerParticlePulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }

          @keyframes diagonalLightSweep {
            0% { 
              transform: translateX(-200%) translateY(-100%); 
              opacity: 0; 
            }
            10% { 
              opacity: 0.6; 
            }
            90% { 
              opacity: 0.3; 
            }
            100% { 
              transform: translateX(200%) translateY(100%); 
              opacity: 0; 
            }
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

          /* Mobile optimizations - Skip scale animations */
          @media (max-width: 768px) {
            .scale-effect {
              transform: none !important;
            }
          }

          /* Performance optimizations */
          @media (prefers-reduced-motion: reduce) {
            .premium-scroll-pulse,
            .premium-button-hover,
            .premium-scale-hover {
              animation: none;
            }
          }
        `
      }} />
    </section>
  );
};

export default Hero;
