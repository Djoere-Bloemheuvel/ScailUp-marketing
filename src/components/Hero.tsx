
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-black via-premium-gray to-premium-gray-dark overflow-hidden particle-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-premium-silver/20 to-transparent rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-premium-silver/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className={`mb-12 flex justify-center ${isLoaded ? 'fade-in-up' : ''}`}>
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-morphism premium-glow group cursor-pointer">
            <div className="relative mr-3">
              <Zap className="w-5 h-5 text-premium-silver group-hover:text-white transition-colors duration-300" />
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-premium-silver opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-premium-silver group-hover:text-white text-sm font-medium tracking-wide transition-colors duration-300">
              Elite AI Engineering
            </span>
          </div>
        </div>
        
        <h1 className={`text-7xl md:text-9xl lg:text-[12rem] font-bold mb-12 tracking-tight leading-none ${isLoaded ? 'fade-in-up stagger-2' : ''}`}>
          <span className="text-gradient-premium block">AI die</span>
          <span className="text-shimmer block mt-4">werkt.</span>
        </h1>
        
        <p className={`text-2xl md:text-3xl text-premium-silver/90 mb-16 max-w-4xl mx-auto leading-relaxed font-light ${isLoaded ? 'fade-in-up stagger-3' : ''}`}>
          Wij bouwen AI-systemen die uw business daadwerkelijk transformeren.
          <br />
          <span className="text-white font-normal">Geen buzzwords. Geen quick fixes. Wel resultaten.</span>
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isLoaded ? 'fade-in-up stagger-4' : ''}`}>
          <Button 
            className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-10 py-8 text-xl font-semibold rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}
          >
            <span className="relative z-10 flex items-center">
              Ontdek de mogelijkheden
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
          
          <Button 
            variant="outline" 
            className="relative premium-card text-premium-silver hover:text-white px-10 py-8 text-xl font-semibold rounded-2xl border-premium-silver/20 hover:border-premium-silver/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Plan een AI Deepdive
              <Sparkles className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-premium-silver/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </div>

        {/* Floating elements for extra luxury */}
        <div className={`absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-premium-silver/20 to-transparent blur-2xl floating ${isLoaded ? 'fade-in-up stagger-5' : ''}`}></div>
        <div className={`absolute -bottom-20 -right-20 w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl floating ${isLoaded ? 'fade-in-up stagger-5' : ''}`} style={{animationDelay: '3s'}}></div>
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-[2px] h-12 bg-gradient-to-b from-premium-silver to-transparent">
          <div className="w-[2px] h-4 bg-premium-silver animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
