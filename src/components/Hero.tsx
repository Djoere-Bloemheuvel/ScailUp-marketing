
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import AnimatedHeadline from './AnimatedHeadline';
import AIRobotDevice from './hero/AIRobotDevice';
import AIDeviceEcosystem from './hero/AIDeviceEcosystem';
import HeroAnimations from './hero/HeroAnimations';
import PremiumOrbs from './hero/PremiumOrbs';
import FloatingIcons from './hero/FloatingIcons';

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
      {/* Premium Layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient with more depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/60 to-black"></div>
        <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-transparent to-transparent"></div>
        
        {/* Premium orbs layer - deepest */}
        <PremiumOrbs />
        
        {/* Floating icons layer - middle */}
        <FloatingIcons />
        
        {/* Enhanced scanning sweeps */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-premium-silver/20 to-transparent premium-scan-sweep-horizontal" />
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-400/15 to-transparent premium-scan-sweep-vertical" />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent premium-scan-sweep-diagonal" />
        </div>

        {/* AI Devices - top layer */}
        <AIRobotDevice />
        <AIDeviceEcosystem />

        {/* Subtle mouse interaction layer */}
        <div 
          className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(192, 192, 192, 0.03) 0%, transparent 60%)`
          }}
        />

        {/* Premium ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-premium-silver/[0.02] premium-ambient-pulse" />
      </div>

      {/* Content - Enhanced with better spacing */}
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

      {/* Premium scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-premium-silver/50 to-transparent relative">
          <div className="w-[1px] h-4 sm:h-6 bg-premium-silver/80 premium-scroll-pulse absolute top-0"></div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <HeroAnimations />
    </section>
  );
};

export default Hero;
