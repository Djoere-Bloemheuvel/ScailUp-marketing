
import { ArrowRight, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CinematicBackground from '@/components/hero/CinematicBackground';

const ConsultancyHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Use the same cinematic background as other pages */}
      <CinematicBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center z-10">
        {/* Service icon with consistent styling */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl flex items-center justify-center">
              <Brain className="w-12 h-12 lg:w-16 lg:h-16 text-blue-400 drop-shadow-lg" />
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl opacity-40" />
          </div>
        </div>

        {/* Main headline with consistent typography */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
          AI Consultancy
        </h1>
        
        {/* Subtitle with gradient - matching other pages */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Van strategie tot realisatie
          </span>
        </p>
        
        {/* Description with consistent styling */}
        <p className="text-lg md:text-xl lg:text-2xl text-premium-silver/90 max-w-4xl mx-auto leading-relaxed font-light mb-12">
          Strategisch advies en technologische realisatie in één. Wij helpen je bij het definiëren van AI-kansen, het selecteren van de juiste tools en het succesvol implementeren van slimme automatiseringen.
        </p>
        
        {/* CTA Button with consistent styling matching other pages */}
        <div className="flex justify-center">
          <Button 
            className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-8 py-6 text-lg font-semibold rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2"
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
              Plan een strategiegesprek
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
            </span>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyHero;
