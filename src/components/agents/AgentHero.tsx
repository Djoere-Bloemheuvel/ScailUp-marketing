
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
        </div>
      </div>
    </section>
  );
};

export default AgentHero;
