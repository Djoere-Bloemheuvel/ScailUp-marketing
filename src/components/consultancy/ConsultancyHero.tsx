
import { ArrowRight, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CinematicBackground from '@/components/hero/CinematicBackground';

const ConsultancyHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Use the same cinematic background as other pages */}
      <CinematicBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center">
        {/* Premium consultancy icon with blue glow */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <Brain className="w-12 h-12 lg:w-16 lg:h-16 text-blue-300 drop-shadow-lg" />
            </div>
            
            {/* Blue glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/20 blur-xl opacity-60 animate-pulse" />
            
            {/* Additional diagram elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-blue-400/80 animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-purple-400/70 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-4 -left-3 w-2 h-2 rounded-full bg-indigo-400/60 animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
          Consultancy
        </h1>
        
        {/* Subtitle with gradient */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Denken in impact
          </span>
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-premium-silver/90 max-w-4xl mx-auto leading-relaxed font-light mb-12">
          Strategisch advies en technologische realisatie in één. Wij helpen je bij het definiëren van AI-kansen, het selecteren van de juiste tools en het succesvol implementeren van slimme automatiseringen.
        </p>
        
        {/* CTA Button with enhanced blue glow */}
        <div className="flex justify-center">
          <Button 
            className="group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-8 py-6 text-lg font-semibold rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
              boxShadow: `
                0 20px 60px rgba(0, 0, 0, 0.4), 
                inset 0 1px 0 rgba(255, 255, 255, 0.9),
                0 0 0 1px rgba(255, 255, 255, 0.1),
                0 0 20px rgba(59, 130, 246, 0.2),
                0 0 40px rgba(147, 51, 234, 0.1)
              `
            }}
          >
            <span className="relative z-10 flex items-center">
              Plan een strategiegesprek
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
            </span>
            
            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </Button>
        </div>
      </div>
      
      {/* Additional blue ambient lighting for consultancy theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-30 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.10) 35%, rgba(29, 78, 216, 0.05) 60%, transparent 85%)',
            filter: 'blur(80px)',
            animationDuration: '8s'
          }}
        />
        
        <div 
          className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full opacity-25 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(79, 70, 229, 0.08) 40%, rgba(67, 56, 202, 0.04) 70%, transparent 90%)',
            filter: 'blur(90px)',
            animationDuration: '10s',
            animationDelay: '-3s'
          }}
        />
      </div>
    </section>
  );
};

export default ConsultancyHero;
