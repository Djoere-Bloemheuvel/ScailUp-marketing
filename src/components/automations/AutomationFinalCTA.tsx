
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CinematicBackground from '@/components/hero/CinematicBackground';

const AutomationFinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Use the same cinematic background as the hero section */}
      <div className="absolute inset-0">
        <CinematicBackground />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="relative">
          {/* Premium glassmorphism container with enhanced glow - contains ALL content */}
          <div className="relative rounded-[24px] p-12 md:p-16 backdrop-blur-xl border border-white/[0.1] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent shadow-2xl">
            
            {/* Enhanced border glow effect with multiple layers */}
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-blue-500/12 via-purple-500/12 to-blue-500/12 blur-sm opacity-70" />
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-cyan-500/8 via-emerald-500/6 to-purple-500/10 blur-md opacity-50" />
            
            {/* Inner light reflections */}
            <div className="absolute inset-4 rounded-[20px] bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] pointer-events-none" />
            
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

              {/* Enhanced disclaimer text - now inside the container */}
              <p className="text-premium-silver/70 text-sm mt-8 italic font-light">
                Gratis kennismaking. Concrete inzichten. Geen verplichtingen.
              </p>
            </div>
            
            {/* Enhanced floating accent elements */}
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-br from-blue-400/60 to-transparent animate-pulse" />
            <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-gradient-to-br from-purple-400/60 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-4 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-400/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-4 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-emerald-400/50 to-transparent animate-pulse" style={{ animationDelay: '3s' }} />
          </div>

          {/* Enhanced floating shadow with multiple layers and improved depth */}
          <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue-500/25 via-purple-500/25 to-cyan-500/20 opacity-50 blur-3xl -z-10" 
               style={{ transform: 'translateY(20px) scale(1.1)' }} />
          <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/8 via-emerald-500/10 to-transparent opacity-70 blur-2xl -z-20" 
               style={{ transform: 'translateY(40px) scale(1.2)' }} />
          <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-purple-500/15 via-blue-500/15 to-transparent opacity-40 blur-4xl -z-30" 
               style={{ transform: 'translateY(60px) scale(1.3)' }} />
        </div>
      </div>
    </section>
  );
};

export default AutomationFinalCTA;
