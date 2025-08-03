
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-32 px-4 bg-premium-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="border-gradient p-12 rounded-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Laat ons je <span className="text-gradient">AI potentieel</span> ontdekken
          </h2>
          
          <p className="text-premium-silver/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Een strategische verkenning van 60 minuten. 
            Geen sales pitch. Wel concrete inzichten en een maatwerkvoorstel.
          </p>

          <Button 
            className="group bg-white text-black hover:bg-premium-silver transition-all duration-300 px-12 py-6 text-xl font-semibold rounded-lg animate-glow"
          >
            Start met een AI-verkenning
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-premium-silver/60 text-sm mt-6">
            Investering: 60 minuten van uw tijd. ROI: onbetaalbaar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
