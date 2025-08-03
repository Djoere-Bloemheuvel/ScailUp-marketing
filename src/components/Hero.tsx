import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import AnimatedHeadline from './AnimatedHeadline';
import AppleAICore from './hero/AppleAICore';
import AppleAICoreAnimations from './hero/AppleAICoreAnimations';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-black overflow-hidden">
      {/* Apple-style AI Core Background */}
      <div className={`absolute inset-0 ${isLoaded ? 'apple-core-entrance' : ''}`}>
        <AppleAICore />
      </div>

      {/* Glassmorphism Glow Boxes */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        {/* Desktop: Two separate glow containers */}
        <div className="hidden sm:block">
          {/* Headline Glow Box */}
          <div 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-y-24 
              w-[900px] h-[200px] rounded-[40px] glassmorphism-glow-headline ${isLoaded ? 'glow-scale-in-delayed' : 'opacity-0'}`}
          />
          
          {/* CTA Buttons Glow Box */}
          <div 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-32 
              w-[700px] h-[120px] rounded-[30px] glassmorphism-glow-buttons ${isLoaded ? 'glow-scale-in-delayed-2' : 'opacity-0'}`}
          />
        </div>

        {/* Mobile: Single unified glow container */}
        <div 
          className={`sm:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-[350px] h-[500px] rounded-[40px] glassmorphism-glow-mobile ${isLoaded ? 'glow-scale-in' : 'opacity-0'}`}
        />
      </div>

      {/* Content - Keep existing text and buttons unchanged */}
      <div className="relative max-w-5xl mx-auto z-30 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Animated Headline */}
          <div className={`mb-2 ${isLoaded ? 'premium-fade-in premium-stagger-1' : ''}`}>
            <AnimatedHeadline />
          </div>
          
          {/* Enhanced subtitle with premium typography */}
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-premium-silver/90 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4 ${isLoaded ? 'premium-fade-in premium-stagger-2' : ''}`}>
            Wij bouwen AI-systemen die uw business 
            <br className="hidden sm:block" />
            <span className="text-white font-medium bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">daadwerkelijk transformeren.</span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20 ${isLoaded ? 'premium-fade-in premium-stagger-3' : ''}`}>
            <Button 
              className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-700 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden premium-button-hover premium-scale-hover w-full sm:w-auto glassmorphism-button-hover"
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
              className="relative text-premium-silver hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full border-premium-silver/40 hover:border-premium-silver/70 transition-all duration-700 premium-button-hover group overflow-hidden bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.12] w-full sm:w-auto glassmorphism-button-hover"
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

      {/* Premium scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-premium-silver/50 to-transparent relative">
          <div className="w-[1px] h-4 sm:h-6 bg-premium-silver/80 premium-scroll-pulse absolute top-0"></div>
        </div>
      </div>

      {/* Apple-style AI Core animations */}
      <AppleAICoreAnimations />
      
      {/* Glassmorphism and existing premium animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Glassmorphism Glow Containers */
          .glassmorphism-glow-headline {
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.08) 0%,
              rgba(255, 255, 255, 0.12) 50%,
              rgba(255, 255, 255, 0.06) 100%);
            border: 1px solid rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            box-shadow: 
              0 8px 32px rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }

          .glassmorphism-glow-buttons {
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.06) 0%,
              rgba(255, 255, 255, 0.10) 50%,
              rgba(255, 255, 255, 0.04) 100%);
            border: 1px solid rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(16px);
            box-shadow: 
              0 6px 24px rgba(255, 255, 255, 0.08),
              0 0 0 1px rgba(255, 255, 255, 0.03),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
          }

          .glassmorphism-glow-mobile {
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.07) 0%,
              rgba(255, 255, 255, 0.11) 50%,
              rgba(255, 255, 255, 0.05) 100%);
            border: 1px solid rgba(255, 255, 255, 0.13);
            backdrop-filter: blur(18px);
            box-shadow: 
              0 8px 32px rgba(255, 255, 255, 0.09),
              0 0 0 1px rgba(255, 255, 255, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.18);
          }

          /* Glow Scale-in Animations */
          @keyframes glow-scale-in {
            0% { 
              opacity: 0; 
              transform: translate(-50%, -50%) scale(0.85); 
              filter: blur(8px); 
            }
            100% { 
              opacity: 1; 
              transform: translate(-50%, -50%) scale(1); 
              filter: blur(0px); 
            }
          }

          @keyframes glow-scale-in-delayed {
            0% { 
              opacity: 0; 
              transform: translate(-50%, -50%) translate(0, -96px) scale(0.85); 
              filter: blur(8px); 
            }
            100% { 
              opacity: 1; 
              transform: translate(-50%, -50%) translate(0, -96px) scale(1); 
              filter: blur(0px); 
            }
          }

          @keyframes glow-scale-in-delayed-2 {
            0% { 
              opacity: 0; 
              transform: translate(-50%, -50%) translate(0, 128px) scale(0.85); 
              filter: blur(8px); 
            }
            100% { 
              opacity: 1; 
              transform: translate(-50%, -50%) translate(0, 128px) scale(1); 
              filter: blur(0px); 
            }
          }

          /* Hover Shimmer Effect */
          @keyframes glassmorphism-shimmer {
            0%, 100% { 
              background-position: -100% 0; 
            }
            50% { 
              background-position: 100% 0; 
            }
          }

          .glassmorphism-button-hover:hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
            background-size: 200% 100%;
            animation: glassmorphism-shimmer 1.5s ease-in-out;
            pointer-events: none;
            border-radius: inherit;
          }

          /* Apply Scale-in Animations */
          .glow-scale-in {
            animation: glow-scale-in 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .glow-scale-in-delayed {
            animation: glow-scale-in-delayed 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          }

          .glow-scale-in-delayed-2 {
            animation: glow-scale-in-delayed-2 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
          }

          /* Keep existing animations */
          @keyframes premium-fade-in {
            0% { opacity: 0; transform: translateY(40px) scale(0.98); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }

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

          .premium-fade-in {
            animation: premium-fade-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .premium-stagger-1 { animation-delay: 0.2s; }
          .premium-stagger-2 { animation-delay: 0.4s; }
          .premium-stagger-3 { animation-delay: 0.6s; }

          .premium-scroll-pulse {
            animation: premium-scroll-pulse 3s ease-in-out infinite;
          }

          .premium-button-hover:hover {
            animation: premium-button-hover 0.3s ease-out forwards;
          }

          .premium-scale-hover:hover {
            animation: premium-scale-hover 0.2s ease-out forwards;
          }

          /* Mobile Performance Optimization */
          @media (max-width: 768px) {
            .glassmorphism-glow-mobile {
              backdrop-filter: blur(12px);
            }
            
            .glow-scale-in {
              animation-duration: 1.2s;
            }
            
            .glassmorphism-button-hover:hover::before {
              display: none;
            }
          }
        `
      }} />
    </section>
  );
};

export default Hero;
