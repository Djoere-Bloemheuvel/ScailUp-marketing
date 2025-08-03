
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-black via-premium-gray to-premium-gray-dark">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-premium-silver/20 bg-premium-gray/50 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-premium-silver mr-2" />
            <span className="text-premium-silver text-sm font-medium">Elite AI Engineering</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
          <span className="text-gradient">AI die</span>
          <br />
          <span className="text-white">werkt.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-premium-silver/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Wij bouwen AI-systemen die uw business daadwerkelijk transformeren.
          <br />
          Geen buzzwords. Geen quick fixes. Wel resultaten.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="group bg-white text-black hover:bg-premium-silver transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-lg"
          >
            Ontdek de mogelijkheden
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-premium-silver/30 text-premium-silver hover:bg-premium-silver/10 px-8 py-6 text-lg font-semibold rounded-lg"
          >
            Plan een AI Deepdive
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
