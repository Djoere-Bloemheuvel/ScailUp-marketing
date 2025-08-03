
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-32 px-4 bg-premium-black relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-premium-silver/8 via-premium-silver/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-premium-gray/10 via-transparent to-premium-gray/10"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="relative premium-card rounded-3xl p-12 md:p-16 apple-fade-in">
          {/* Premium border glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-premium-silver/10 via-transparent to-premium-silver/10 blur-sm"></div>
          <div className="absolute inset-[1px] rounded-[23px] bg-black"></div>
          
          <div className="relative z-10">
            {/* Floating icons */}
            <div className="absolute -top-3 left-6 opacity-40">
              <Sparkles className="w-5 h-5 text-premium-silver floating" />
            </div>
            <div className="absolute -top-2 right-8 opacity-30">
              <Zap className="w-4 h-4 text-premium-silver floating" style={{animationDelay: '1s'}} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 apple-fade-in apple-stagger-2">
              Laat ons je <span className="text-gradient-premium">AI potentieel</span> ontdekken
            </h2>
            
            <p className="text-premium-silver/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light apple-fade-in apple-stagger-3">
              Een strategische verkenning van 60 minuten. 
              <br />
              <span className="text-white font-normal">Geen sales pitch. Wel concrete inzichten en een maatwerkvoorstel.</span>
            </p>

            <div className="apple-fade-in apple-stagger-4">
              <Button 
                className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-300 px-12 py-8 text-xl font-semibold rounded-xl overflow-hidden transform hover:scale-105 hover:-translate-y-1 shadow-xl apple-button-hover"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}
              >
                <span className="relative z-10 flex items-center">
                  Start met een AI-verkenning
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Premium shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </div>

            <p className="text-premium-silver/60 text-base mt-6 italic apple-fade-in apple-stagger-5">
              Investering: 60 minuten van uw tijd. ROI: onbetaalbaar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
