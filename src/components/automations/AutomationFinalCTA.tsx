
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CinematicBackground from '@/components/hero/CinematicBackground';

const AutomationFinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Darker background overlay */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Use the same cinematic background as the hero section */}
      <div className="absolute inset-0">
        <CinematicBackground />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Single premium glassmorphism container */}
        <div className="relative rounded-[24px] p-12 md:p-16 backdrop-blur-xl border border-white/[0.15] bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] shadow-2xl">
          
          {/* Single enhanced glow effect */}
          <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 blur-lg opacity-60 -z-10" />
          
          {/* Content */}
          <div className="relative z-10 space-y-8">
            {/* Premium headline with enhanced gradient */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-white">Slimmer werken </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                begint hier
              </span>
            </h2>
            
            {/* Enhanced subtitle */}
            <p className="text-lg md:text-xl text-premium-silver/90 leading-relaxed font-light max-w-2xl mx-auto">
              Plan een gratis consult en ontdek welke processen we voor u kunnen automatiseren.
            </p>

            {/* Premium CTA button with enhanced effects */}
            <div className="pt-6">
              <Button 
                className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-12 py-6 text-lg font-semibold rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.4), 
                    inset 0 1px 0 rgba(255, 255, 255, 0.9),
                    0 0 0 1px rgba(255, 255, 255, 0.1),
                    0 0 20px rgba(59, 130, 246, 0.1),
                    0 0 40px rgba(147, 51, 234, 0.05)
                  `
                }}
              >
                <span className="relative z-10 flex items-center">
                  Plan een consult
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
                </span>
                
                {/* Enhanced shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                {/* Subtle inner glow */}
                <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
              </Button>
            </div>

            {/* Enhanced disclaimer text */}
            <p className="text-premium-silver/70 text-sm mt-8 italic font-light">
              Gratis kennismaking. Concrete inzichten. Geen verplichtingen.
            </p>
          </div>
          
          {/* Subtle floating accent elements */}
          <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-gradient-to-br from-blue-400/40 to-transparent animate-pulse" />
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-purple-400/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Single enhanced floating shadow */}
        <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/15 opacity-40 blur-3xl -z-20" 
             style={{ transform: 'translateY(20px) scale(1.1)' }} />
      </div>
    </section>
  );
};

export default AutomationFinalCTA;
