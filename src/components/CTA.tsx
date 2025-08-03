
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-40 px-4 bg-premium-black relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-premium-silver/10 via-premium-silver/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-premium-gray/20 via-transparent to-premium-gray/20"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className={`relative premium-card rounded-[2.5rem] p-16 md:p-20 ${isVisible ? 'scale-in' : ''}`}>
          {/* Premium border glow effect */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-premium-silver/20 via-transparent to-premium-silver/20 blur-sm"></div>
          <div className="absolute inset-[2px] rounded-[2.4rem] bg-black"></div>
          
          <div className="relative z-10">
            {/* Floating icons */}
            <div className="absolute -top-4 left-8 opacity-60">
              <Sparkles className="w-6 h-6 text-premium-silver floating" />
            </div>
            <div className="absolute -top-2 right-12 opacity-40">
              <Zap className="w-5 h-5 text-premium-silver floating" style={{animationDelay: '1s'}} />
            </div>
            
            <h2 className={`text-5xl md:text-8xl font-bold text-white mb-12 ${isVisible ? 'fade-in-up stagger-2' : ''}`}>
              Laat ons je <span className="text-gradient-premium">AI potentieel</span> ontdekken
            </h2>
            
            <p className={`text-premium-silver/90 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-light ${isVisible ? 'fade-in-up stagger-3' : ''}`}>
              Een strategische verkenning van 60 minuten. 
              <br />
              <span className="text-white font-normal">Geen sales pitch. Wel concrete inzichten en een maatwerkvoorstel.</span>
            </p>

            <div className={`${isVisible ? 'fade-in-up stagger-4' : ''}`}>
              <Button 
                className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-16 py-10 text-2xl font-semibold rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 0 30px rgba(192, 192, 192, 0.3)'
                }}
              >
                <span className="relative z-10 flex items-center">
                  Start met een AI-verkenning
                  <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-3 transition-transform duration-300" />
                </span>
                
                {/* Premium shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Subtle glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{
                       background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
                       filter: 'blur(10px)'
                     }}>
                </div>
              </Button>
            </div>

            <p className={`text-premium-silver/60 text-lg mt-8 italic ${isVisible ? 'fade-in-up stagger-5' : ''}`}>
              Investering: 60 minuten van uw tijd. ROI: onbetaalbaar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
