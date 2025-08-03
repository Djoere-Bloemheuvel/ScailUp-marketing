
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import AnimatedHeadline from './AnimatedHeadline';
import AIRobotDevice from './hero/AIRobotDevice';
import AIDeviceEcosystem from './hero/AIDeviceEcosystem';
import HeroAnimations from './hero/HeroAnimations';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-black overflow-hidden">
      {/* Enhanced AI Ecosystem Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/20"></div>
        
        {/* Scanning sweeps that move across screen */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent scan-sweep-horizontal" />
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent scan-sweep-vertical" />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent scan-sweep-diagonal" />
        </div>

        {/* AI Devices */}
        <AIRobotDevice />
        <AIDeviceEcosystem />

        {/* Additional floating elements for ecosystem feel - Hidden on mobile */}
        <div className="hidden sm:block absolute top-32 left-1/3">
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-400/30 ai-ecosystem-float-particle" />
        </div>
        <div className="hidden sm:block absolute top-2/3 right-1/4">
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-400/30 ai-ecosystem-float-particle" style={{ animationDelay: '2s' }} />
        </div>
        <div className="hidden lg:block absolute bottom-1/3 left-1/4">
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-400/30 ai-ecosystem-float-particle" style={{ animationDelay: '4s' }} />
        </div>

        {/* Subtle scan lines that respond to mouse movement */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Content - Centered with new animated headline */}
      <div className="relative max-w-5xl mx-auto z-30 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Animated Headline */}
          <div className={`mb-2 ${isLoaded ? 'apple-fade-in apple-stagger-2' : ''}`}>
            <AnimatedHeadline />
          </div>
          
          {/* Apple-style subtitle - centered */}
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-premium-silver/80 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light px-4 ${isLoaded ? 'apple-fade-in apple-stagger-3' : ''}`}>
            Wij bouwen AI-systemen die uw business 
            <br className="hidden sm:block" />
            <span className="text-white font-normal">daadwerkelijk transformeren.</span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20 ${isLoaded ? 'apple-fade-in apple-stagger-4' : ''}`}>
            <Button 
              className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-700 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full overflow-hidden apple-button-hover apple-scale-hover w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
                Ontdek de mogelijkheden
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              className="relative text-premium-silver hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-semibold rounded-full border-premium-silver/30 hover:border-premium-silver/60 transition-all duration-700 apple-button-hover group overflow-hidden bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                Plan een deepdive
                <Sparkles className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Apple-inspired scroll indicator - Hidden on mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-premium-silver/40 to-transparent">
          <div className="w-[1px] h-4 sm:h-6 bg-premium-silver/60 apple-scroll-pulse"></div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <HeroAnimations />
    </section>
  );
};

export default Hero;
