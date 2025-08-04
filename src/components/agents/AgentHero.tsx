
import { ArrowRight, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CinematicBackground from '@/components/hero/CinematicBackground';

const AgentHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Cinematic Background */}
      <CinematicBackground />
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headlines */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Autonomous AI Agents
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-premium-silver/90 leading-relaxed tracking-wide">
              Slimme assistenten. Volledig zelfstandig.
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-premium-silver/80 max-w-3xl mx-auto leading-relaxed font-light">
            Onze AI Agents voeren zelfstandig taken uit, communiceren met systemen én mensen, en automatiseren repetitieve workflows zonder handmatige input.
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
            </Button>
          </div>

          {/* AI Agent Visual Icon */}
          <div className="pt-12">
            <div className="relative w-24 h-24 mx-auto">
              {/* Multi-layered glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl animate-pulse opacity-60" />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-blue-400/40 to-purple-400/40 blur-lg animate-pulse opacity-70" style={{ animationDelay: '1s' }} />
              
              {/* Icon container */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-900/60 to-blue-950/40 border border-blue-400/30 backdrop-blur-xl flex items-center justify-center">
                <Bot className="w-12 h-12 text-blue-300 drop-shadow-lg" />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400/60 to-purple-400/60 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-br from-purple-400/60 to-blue-400/60 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentHero;
