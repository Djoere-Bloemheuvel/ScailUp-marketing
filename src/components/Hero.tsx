import { Button } from '@/components/ui/button';
import { useProgressiveLoad } from '@/hooks/useProgressiveLoad';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedHeadline from './AnimatedHeadline';
import CinematicBackground from './hero/CinematicBackground';
import LazyAnimationProvider from './LazyAnimationProvider';

const Hero = () => {
  const backgroundLoaded = useProgressiveLoad(100);
  const navigate = useNavigate();

  // Memoized navigation handlers for better performance
  const handleDeepDiveClick = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  // Memoized button styles to prevent recalculation
  const primaryButtonStyle = useMemo(() => ({
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
    boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
  }), []);

  const secondaryButtonStyle = useMemo(() => ({
    boxShadow: '0 4px 24px rgba(192, 192, 192, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
  }), []);

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
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-premium-silver/90 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4">
                Wij bouwen AI-systemen die uw business
                <br className="hidden sm:block" />
                <span className="text-white font-medium bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">daadwerkelijk transformeren.</span>
              </p>

              {/* Buttons - Immediately visible with preload triggers */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20">
                <Button
                  className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-300 ease-out px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden premium-button-hover premium-scale-hover w-full sm:w-auto will-change-transform"
                  style={primaryButtonStyle}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Ontdek de mogelijkheden
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="relative text-premium-silver hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full border-premium-silver/40 hover:border-premium-silver/70 transition-all duration-300 ease-out premium-button-hover group overflow-hidden bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.12] w-full sm:w-auto will-change-transform"
                  style={secondaryButtonStyle}
                  onClick={handleDeepDiveClick}
                  data-contact-trigger="true"
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
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-premium-silver/90 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4">
                  Wij bouwen AI-systemen die uw business
                  <br className="hidden sm:block" />
                  <span className="text-white font-medium bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">daadwerkelijk transformeren.</span>
                </p>

                {/* Reflected Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20">
                  <Button
                    className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-300 ease-out px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden premium-button-hover premium-scale-hover w-full sm:w-auto will-change-transform"
                    style={primaryButtonStyle}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Ontdek de mogelijkheden
                      <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    className="relative text-premium-silver hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full border-premium-silver/40 hover:border-premium-silver/70 transition-all duration-300 ease-out premium-button-hover group overflow-hidden bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.12] w-full sm:w-auto will-change-transform"
                    style={secondaryButtonStyle}
                    data-contact-trigger="true"
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

      {/* Optimized animations with performance enhancements */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Enhanced scroll pulse with better easing */
          @keyframes premium-scroll-pulse {
            0%, 100% {
              opacity: 0.5;
              transform: translate3d(0, 0, 0) scale(1);
            }
            50% {
              opacity: 1;
              transform: translate3d(0, 12px, 0) scale(1.05);
            }
          }

          /* Smoother button hover with cubic-bezier easing */
          @keyframes premium-button-hover {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            100% { transform: translate3d(0, -2px, 0) scale(1.02); }
          }

          /* Enhanced scale hover with bounce effect */
          @keyframes premium-scale-hover {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            50% { transform: translate3d(0, 0, 0) scale(1.03); }
            100% { transform: translate3d(0, 0, 0) scale(1.02); }
          }

          /* Subtle glow animation for buttons */
          @keyframes premium-glow-pulse {
            0%, 100% {
              box-shadow:
                0 0 20px rgba(255, 255, 255, 0.1),
                0 0 40px rgba(255, 255, 255, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
            }
            50% {
              box-shadow:
                0 0 30px rgba(255, 255, 255, 0.2),
                0 0 60px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            }
          }

          /* Apply animations with performance optimizations */
          .premium-scroll-pulse {
            animation: premium-scroll-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            will-change: transform, opacity;
            backface-visibility: hidden;
          }

          .premium-button-hover:hover {
            animation: premium-button-hover 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .premium-scale-hover:hover {
            animation: premium-scale-hover 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          /* Enhanced button interactions */
          .premium-button-hover:active {
            transform: translate3d(0, 0, 0) scale(0.98);
            transition: transform 0.1s ease-out;
          }

          .premium-scale-hover:active {
            transform: translate3d(0, 0, 0) scale(0.98);
            transition: transform 0.1s ease-out;
          }

          /* Smooth icon animations */
          .premium-button-hover .lucide {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            will-change: transform;
          }

          /* Performance optimizations */
          .premium-button-hover,
          .premium-scale-hover {
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .premium-scroll-pulse,
            .premium-button-hover,
            .premium-scale-hover {
              animation: none;
            }

            .premium-button-hover:hover,
            .premium-scale-hover:hover {
              transform: none;
            }
          }
        `
      }} />

      {/* Load optimized animations for hero section */}
      <LazyAnimationProvider
        includeHeroAnimations={backgroundLoaded}
        includeHoverAnimations={true}
      />
    </section>
  );
};

export default Hero;
