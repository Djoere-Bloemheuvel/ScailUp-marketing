
import { ArrowRight, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CinematicBackground from '@/components/hero/CinematicBackground';

const CustomSaaSHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-black">
      <CinematicBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-8 md:space-y-12">
          {/* Premium Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 backdrop-blur-sm">
              <Brain className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-premium-silver font-medium">Custom AI SaaS Ontwikkeling</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
              Custom AI SaaS
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-premium-silver/90 leading-relaxed max-w-4xl mx-auto">
              Gebouwd voor schaal
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-premium-silver/80 font-light leading-relaxed max-w-4xl mx-auto">
            Wij bouwen schaalbare AI-gedreven software-oplossingen, volledig afgestemd op jouw organisatie. Van prototype tot product – zonder afhankelijk te zijn van developers.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-12 py-6 text-lg font-semibold rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.4), 
                  inset 0 1px 0 rgba(255, 255, 255, 0.9),
                  0 0 0 1px rgba(255, 255, 255, 0.1),
                  0 0 20px rgba(147, 51, 234, 0.1),
                  0 0 40px rgba(79, 70, 229, 0.05)
                `
              }}
            >
              <span className="relative z-10 flex items-center">
                Plan een consult
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
              </span>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default CustomSaaSHero;
