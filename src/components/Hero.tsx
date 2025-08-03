
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
      {/* Luxe geometrische animatie achtergrond */}
      <div className="absolute inset-0 opacity-[0.15]">
        {/* Bewegende hexagons */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute border border-premium-silver/10 premium-hex-float"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Vloeiende data streams */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] premium-data-stream"
              style={{
                width: '200px',
                background: `linear-gradient(90deg, transparent, rgba(192, 192, 192, ${0.3 + Math.random() * 0.4}), transparent)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${8 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>

        {/* Subtiele premium grid */}
        <div 
          className="absolute inset-0 premium-grid-animation"
          style={{
            backgroundImage: `
              linear-gradient(rgba(192, 192, 192, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(192, 192, 192, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Luxe particle systeem */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-premium-silver/30 rounded-full premium-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${20 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      {/* Premium glow effecten */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-premium-silver/8 via-premium-silver/3 to-transparent rounded-full blur-3xl premium-glow-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-white/5 via-white/2 to-transparent rounded-full blur-3xl premium-glow-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-premium-silver/4 via-transparent to-transparent rounded-full blur-3xl premium-glow-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Subtiele circuit patroon */}
      <div className="absolute inset-0 opacity-[0.08] premium-circuit-flow">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(192, 192, 192, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(45deg, transparent 48%, rgba(192, 192, 192, 0.05) 50%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(192, 192, 192, 0.05) 50%, transparent 52%)
            `,
            backgroundSize: '120px 120px, 80px 80px, 40px 40px, 60px 60px'
          }}
        />
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
