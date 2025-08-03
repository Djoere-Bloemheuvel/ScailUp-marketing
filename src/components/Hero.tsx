
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-black via-black to-premium-gray-dark overflow-hidden">
      {/* Subtiele matrix-style data cascade - minder elementen */}
      <div className="absolute inset-0 opacity-25">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute top-0 w-[1px] bg-gradient-to-b from-premium-silver/30 via-white/20 to-transparent matrix-cascade"
            style={{
              left: `${i * 8}%`,
              height: '100vh',
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              opacity: 0.15 + Math.random() * 0.2
            }}
          />
        ))}
      </div>

      {/* Minder geometrische vormen voor betere performance */}
      <div className="absolute inset-0 opacity-15">
        {/* Minder hexagons */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute border border-premium-silver/10 large-hex-movement"
            style={{
              width: `${150 + i * 100}px`,
              height: `${150 + i * 100}px`,
              left: `${25 + i * 20}%`,
              top: `${15 + i * 15}%`,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              animationDelay: `${i * 2}s`,
              animationDuration: `${25 + Math.random() * 15}s`
            }}
          />
        ))}

        {/* Minder cirkels */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full border border-white/5 large-circle-pulse"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              left: `${Math.random() * 60}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${i * 4}s`,
              animationDuration: `${20 + i * 5}s`
            }}
          />
        ))}
      </div>

      {/* Subtielere energie stralen */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`beam-${i}`}
            className="absolute energy-beam"
            style={{
              width: '2px',
              height: '100vh',
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(180deg, 
                transparent 0%, 
                rgba(192, 192, 192, ${0.3 + Math.random() * 0.2}) 30%, 
                rgba(255, 255, 255, ${0.4 + Math.random() * 0.2}) 50%, 
                rgba(192, 192, 192, ${0.3 + Math.random() * 0.2}) 70%, 
                transparent 100%)`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Subtielere holografische panelen */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`panel-${i}`}
            className="absolute holographic-panel"
            style={{
              width: `${300 + i * 150}px`,
              height: `${150 + i * 75}px`,
              left: `${Math.random() * 70}%`,
              top: `${Math.random() * 70}%`,
              background: `linear-gradient(135deg, 
                rgba(192, 192, 192, 0.04) 0%, 
                rgba(255, 255, 255, 0.08) 50%, 
                rgba(192, 192, 192, 0.04) 100%)`,
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(5px)',
              animationDelay: `${i * 3}s`,
              animationDuration: `${18 + i * 4}s`
            }}
          />
        ))}
      </div>

      {/* Subtielere tech grid */}
      <div className="absolute inset-0 opacity-8">
        <div 
          className="absolute inset-0 massive-tech-grid"
          style={{
            backgroundImage: `
              linear-gradient(rgba(192, 192, 192, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(192, 192, 192, 0.05) 1px, transparent 1px),
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '300px 300px, 300px 300px, 60px 60px, 60px 60px'
          }}
        />
      </div>

      {/* Subtielere lichtpulses */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-premium-silver/10 via-white/5 to-transparent rounded-full blur-3xl massive-light-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-white/8 via-premium-silver/4 to-transparent rounded-full blur-3xl massive-light-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Minder digitale deeltjes */}
      <div className="absolute inset-0 opacity-25">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute digital-particle"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: Math.random() > 0.5 ? 'rgba(192, 192, 192, 0.6)' : 'rgba(255, 255, 255, 0.4)',
              boxShadow: `0 0 ${8 + Math.random() * 12}px currentColor`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${20 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      {/* Content blijft hetzelfde */}
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
