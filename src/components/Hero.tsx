
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
      {/* Cinematische matrix-style data cascade */}
      <div className="absolute inset-0 opacity-60">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute top-0 w-[2px] bg-gradient-to-b from-premium-silver via-white to-transparent matrix-cascade"
            style={{
              left: `${i * 4}%`,
              height: '100vh',
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      {/* Grote bewegende geometrische vormen */}
      <div className="absolute inset-0 opacity-30">
        {/* Grote hexagons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute border-2 border-premium-silver/20 large-hex-movement"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              left: `${20 + i * 10}%`,
              top: `${10 + i * 8}%`,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}

        {/* Grote cirkels met pulse */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full border border-white/10 large-circle-pulse"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 3}s`
            }}
          />
        ))}
      </div>

      {/* Grote energie stralen */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`beam-${i}`}
            className="absolute energy-beam"
            style={{
              width: '4px',
              height: '100vh',
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(180deg, 
                transparent 0%, 
                rgba(192, 192, 192, ${0.6 + Math.random() * 0.4}) 20%, 
                rgba(255, 255, 255, ${0.8 + Math.random() * 0.2}) 50%, 
                rgba(192, 192, 192, ${0.6 + Math.random() * 0.4}) 80%, 
                transparent 100%)`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Grote holografische panelen */}
      <div className="absolute inset-0 opacity-25">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`panel-${i}`}
            className="absolute holographic-panel"
            style={{
              width: `${400 + i * 100}px`,
              height: `${200 + i * 50}px`,
              left: `${Math.random() * 60}%`,
              top: `${Math.random() * 70}%`,
              background: `linear-gradient(135deg, 
                rgba(192, 192, 192, 0.08) 0%, 
                rgba(255, 255, 255, 0.15) 50%, 
                rgba(192, 192, 192, 0.08) 100%)`,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${12 + i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Massive tech grid met beweging */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 massive-tech-grid"
          style={{
            backgroundImage: `
              linear-gradient(rgba(192, 192, 192, 0.15) 2px, transparent 2px),
              linear-gradient(90deg, rgba(192, 192, 192, 0.15) 2px, transparent 2px),
              linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px, 200px 200px, 40px 40px, 40px 40px'
          }}
        />
      </div>

      {/* Grote lichtpulsen */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-premium-silver/20 via-white/10 to-transparent rounded-full blur-3xl massive-light-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-white/15 via-premium-silver/8 to-transparent rounded-full blur-3xl massive-light-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-premium-silver/10 via-transparent to-transparent rounded-full blur-3xl massive-light-pulse" style={{animationDelay: '8s'}}></div>
      </div>

      {/* Grote digitale deeltjes */}
      <div className="absolute inset-0 opacity-50">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute digital-particle"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: Math.random() > 0.5 ? '#C0C0C0' : '#FFFFFF',
              boxShadow: `0 0 ${10 + Math.random() * 20}px currentColor`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${15 + Math.random() * 10}s`
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
