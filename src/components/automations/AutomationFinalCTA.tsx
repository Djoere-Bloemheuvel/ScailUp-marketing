
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AutomationFinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Premium layered background matching hero style */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/10 to-purple-950/10" />
        
        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/8 via-blue-500/4 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        {/* Floating gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]" 
               style={{
                 background: `radial-gradient(ellipse 800px 600px at 50% 50%, 
                   rgba(59, 130, 246, 0.03) 0%, 
                   rgba(147, 51, 234, 0.02) 25%, 
                   transparent 50%)`
               }} />
        </div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="relative">
          {/* Premium glassmorphism container */}
          <div className="relative rounded-[32px] p-16 md:p-24 backdrop-blur-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent shadow-2xl">
            
            {/* Enhanced border glow effect */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-sm opacity-60" />
            <div className="absolute inset-[1px] rounded-[31px] bg-gradient-to-br from-premium-black/95 via-premium-black/90 to-premium-black/95" />
            
            <div className="relative z-10 space-y-12">
              {/* Premium headline with enhanced gradient */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-white">Slimmer werken </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  begint hier
                </span>
              </h2>
              
              {/* Enhanced subtitle */}
              <p className="text-xl md:text-2xl text-premium-silver/90 leading-relaxed font-light max-w-3xl mx-auto">
                Plan een gratis consult en ontdek welke processen we voor u kunnen automatiseren.
              </p>

              {/* Premium CTA button with enhanced effects */}
              <div className="pt-8">
                <Button 
                  className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-16 py-8 text-xl font-semibold rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
                    boxShadow: `
                      0 20px 60px rgba(0, 0, 0, 0.4), 
                      inset 0 1px 0 rgba(255, 255, 255, 0.9),
                      0 0 0 1px rgba(255, 255, 255, 0.1)
                    `
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Plan een consult
                    <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-3 transition-transform duration-300" />
                  </span>
                  
                  {/* Enhanced shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
                </Button>
              </div>

              {/* Enhanced disclaimer text */}
              <p className="text-premium-silver/70 text-base mt-12 italic font-light">
                Gratis kennismaking. Concrete inzichten. Geen verplichtingen.
              </p>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute top-8 right-8 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400/60 to-transparent animate-pulse" />
            <div className="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-gradient-to-br from-purple-400/60 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Enhanced floating shadow with multiple layers */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-40 blur-3xl -z-10" 
               style={{ transform: 'translateY(20px) scale(1.1)' }} />
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/5 to-transparent opacity-60 blur-2xl -z-20" 
               style={{ transform: 'translateY(40px) scale(1.2)' }} />
        </div>
      </div>
    </section>
  );
};

export default AutomationFinalCTA;
