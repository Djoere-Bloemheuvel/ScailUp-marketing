import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import AnimatedHeadline from './AnimatedHeadline';
import CinematicBackground from './hero/CinematicBackground';
import HeroLoadingAnimations from './hero/HeroLoadingAnimations';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger loading sequence
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-center px-4 py-12 bg-black overflow-hidden ${isLoading ? 'hero-loading' : 'hero-loaded'}`}>
      {/* Loading Animations */}
      <HeroLoadingAnimations />

      {/* Cinematic Background with AI Core - Pre-rendered */}
      <div className="hero-background absolute inset-0">
        <CinematicBackground />
      </div>

      {/* Content - Enhanced with loading choreography */}
      <div className="relative max-w-5xl mx-auto z-30 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Container with Loading States */}
          <div className="relative">
            {/* Main Content */}
            <div className="relative z-10">
              {/* Animated Headline with word-by-word loading */}
              <div className="hero-headline mb-2">
                <div className="inline-block">
                  <span className="word-1 inline-block opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">Wij</span>
                  <span className="word-2 inline-block opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight ml-4">bouwen</span>
                  <br className="hidden sm:block" />
                  <span className="word-3 inline-block opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-premium-silver to-white bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">AI-systemen</span>
                </div>
              </div>
              
              {/* Enhanced subtitle with loading state */}
              <p className="hero-subtitle opacity-0 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-premium-silver/90 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4">
                die uw business 
                <br className="hidden sm:block" />
                <span className="text-white font-medium bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">daadwerkelijk transformeren.</span>
              </p>
              
              <div className="hero-buttons opacity-0 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20">
                <Button 
                  className="hero-button-1 opacity-0 group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-700 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden premium-button-hover premium-scale-hover w-full sm:w-auto"
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
                  className="hero-button-2 opacity-0 relative text-premium-silver hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full border-premium-silver/40 hover:border-premium-silver/70 transition-all duration-700 premium-button-hover group overflow-hidden bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.12] w-full sm:w-auto"
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

            {/* Apple-style Reflection Effect with Loading State */}
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
                {/* Reflected Content - Mirrors the loading states */}
                <div className="hero-headline mb-2">
                  <div className="inline-block">
                    <span className="word-1 inline-block opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">Wij</span>
                    <span className="word-2 inline-block opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight ml-4">bouwen</span>
                    <br className="hidden sm:block" />
                    <span className="word-3 inline-block opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-premium-silver to-white bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">AI-systemen</span>
                  </div>
                </div>
                
                <p className="hero-subtitle opacity-0 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-premium-silver/90 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4">
                  die uw business 
                  <br className="hidden sm:block" />
                  <span className="text-white font-medium bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">daadwerkelijk transformeren.</span>
                </p>
                
                <div className="hero-buttons opacity-0 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20">
                  <Button 
                    className="hero-button-1 opacity-0 group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-700 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden premium-button-hover premium-scale-hover w-full sm:w-auto"
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
                    className="hero-button-2 opacity-0 relative text-premium-silver hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full border-premium-silver/40 hover:border-premium-silver/70 transition-all duration-700 premium-button-hover group overflow-hidden bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.12] w-full sm:w-auto"
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

      {/* Ambient Glow Effect - Delayed entrance */}
      <div className="hero-ambient-glow absolute inset-0 pointer-events-none opacity-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-blue-500/5 via-purple-500/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-premium-silver/50 to-transparent relative">
          <div className="w-[1px] h-4 sm:h-6 bg-premium-silver/80 premium-scroll-pulse absolute top-0"></div>
        </div>
      </div>
      
      {/* Existing animations styles preserved */}
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
