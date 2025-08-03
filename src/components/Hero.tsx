
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-black via-premium-gray to-premium-gray-dark overflow-hidden">
      {/* Apple-inspired subtle background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Subtle ambient lighting effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-premium-silver/5 via-premium-silver/2 to-transparent rounded-full blur-3xl apple-glow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-white/3 via-white/1 to-transparent rounded-full blur-3xl apple-glow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Apple-style product badge */}
        <div className={`mb-12 flex justify-center ${isLoaded ? 'apple-fade-in' : ''}`}>
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] apple-card-hover group cursor-pointer">
            <div className="relative mr-3">
              <Zap className="w-5 h-5 text-premium-silver-light group-hover:text-white transition-colors duration-500" />
            </div>
            <span className="text-premium-silver-light group-hover:text-white text-sm font-medium tracking-wide transition-colors duration-500">
              Gebouwd voor AI Intelligence
            </span>
          </div>
        </div>
        
        {/* Apple-inspired typography hierarchy */}
        <h1 className={`font-bold mb-8 tracking-tight leading-[0.9] ${isLoaded ? 'apple-fade-in apple-stagger-2' : ''}`}>
          <div className="text-6xl md:text-8xl lg:text-9xl text-white mb-4">
            AI die werkt.
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-premium-silver font-normal">
            Eindelijk.
          </div>
        </h1>
        
        {/* Apple-style subtitle */}
        <p className={`text-2xl md:text-3xl lg:text-4xl text-premium-silver/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light ${isLoaded ? 'apple-fade-in apple-stagger-3' : ''}`}>
          Wij bouwen AI-systemen die uw business 
          <br />
          <span className="text-white font-normal">daadwerkelijk transformeren.</span>
        </p>
        
        {/* Apple-style CTA buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 ${isLoaded ? 'apple-fade-in apple-stagger-4' : ''}`}>
          <Button 
            className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-700 px-10 py-6 text-xl font-semibold rounded-full overflow-hidden apple-button-hover apple-scale-hover"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}
          >
            <span className="relative z-10 flex items-center">
              Ontdek de mogelijkheden
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            className="relative text-premium-silver hover:text-white px-10 py-6 text-xl font-semibold rounded-full border-premium-silver/30 hover:border-premium-silver/60 transition-all duration-700 apple-button-hover group overflow-hidden bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08]"
          >
            <span className="relative z-10 flex items-center">
              Plan een deepdive
              <Sparkles className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Button>
        </div>

        {/* Apple-style feature highlight */}
        <div className={`text-center ${isLoaded ? 'apple-fade-in apple-stagger-5' : ''}`}>
          <p className="text-lg text-premium-silver/60 mb-2">Gebouwd voor Apple Intelligence</p>
          <p className="text-sm text-premium-silver/40 italic">Premium AI-engineering voor visionairs</p>
        </div>
      </div>

      {/* Apple-inspired scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-premium-silver/40 to-transparent">
          <div className="w-[1px] h-6 bg-premium-silver/60 apple-scroll-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
