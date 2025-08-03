
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AutomationFinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-premium-black">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-premium-silver/4 via-premium-silver/1 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-premium-gray/5 to-premium-black/80"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        <div className="relative">
          {/* Main content container with subtle glow */}
          <div className="relative bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl p-16 md:p-20">
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-premium-silver/5 via-transparent to-premium-silver/5 blur-sm"></div>
            <div className="absolute inset-[1px] rounded-[23px] bg-black/40 backdrop-blur-sm"></div>
            
            <div className="relative z-10">
              {/* Main headline */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]">
                Laat AI het werk doen.
              </h2>
              
              {/* Subline */}
              <p className="text-xl md:text-2xl lg:text-3xl text-premium-silver/90 mb-16 leading-relaxed font-light max-w-4xl mx-auto">
                Uw processen slimmer, sneller en schaalbaarder – <br className="hidden sm:block" />
                <span className="text-white font-medium">zonder code.</span>
              </p>

              {/* CTA Button */}
              <div className="mb-12">
                <Button 
                  className="group relative bg-white text-black hover:bg-premium-silver-light transition-all duration-500 px-12 py-8 text-xl font-semibold rounded-full overflow-hidden transform hover:scale-105 hover:-translate-y-1 shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, rgba(255, 255, 255, 0.95) 100%)',
                    boxShadow: '0 12px 40px rgba(255, 255, 255, 0.08), 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Plan gratis AI-consult
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  
                  {/* Premium shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>

              {/* Subtekst */}
              <p className="text-premium-silver/60 text-lg italic font-light">
                *Geen verkooppraat. Alleen inzichten en impact.*
              </p>
            </div>
          </div>

          {/* Apple-style reflection effect */}
          <div className="absolute top-full left-0 right-0 h-[200px] pointer-events-none overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10 scale-y-[-1] origin-top"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, black 70%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.05) 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.05) 70%, transparent 100%)',
                filter: 'blur(2px)',
                transform: 'scaleY(-1) translateY(-40px)'
              }}
            >
              {/* Reflected content */}
              <div className="bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl p-16 md:p-20">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]">
                  Laat AI het werk doen.
                </h2>
                
                <p className="text-xl md:text-2xl lg:text-3xl text-premium-silver/90 mb-16 leading-relaxed font-light max-w-4xl mx-auto">
                  Uw processen slimmer, sneller en schaalbaarder – <br className="hidden sm:block" />
                  <span className="text-white font-medium">zonder code.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFinalCTA;
