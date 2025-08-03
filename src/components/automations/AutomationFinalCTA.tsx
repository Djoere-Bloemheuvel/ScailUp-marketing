
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AutomationFinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/10 to-premium-black" />
      
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-premium-silver/6 via-premium-silver/2 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="relative premium-card rounded-3xl p-12 md:p-16">
          {/* Premium border glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-premium-silver/8 via-transparent to-premium-silver/8 blur-sm"></div>
          <div className="absolute inset-[1px] rounded-[23px] bg-black"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Slimmer werken <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">begint hier</span>
            </h2>
            
            <p className="text-premium-silver/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Plan een gratis consult en ontdek welke processen we voor u kunnen automatiseren.
            </p>

            <div>
              <Button 
                className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-300 px-12 py-6 text-lg font-semibold rounded-xl overflow-hidden transform hover:scale-105 hover:-translate-y-1 shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}
              >
                <span className="relative z-10 flex items-center">
                  Plan een consult
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Premium shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </div>

            <p className="text-premium-silver/60 text-sm mt-8 italic">
              Gratis kennismaking. Concrete inzichten. Geen verplichtingen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFinalCTA;
