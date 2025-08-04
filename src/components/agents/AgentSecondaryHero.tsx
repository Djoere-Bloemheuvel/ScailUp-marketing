
import { Zap, Brain, Cog } from 'lucide-react';

const AgentSecondaryHero = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Dark background with teal/green gradient - matching the first hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-teal-950/15 to-emerald-950/25" />
      
      {/* Ambient lighting effects with teal/green colors - more subtle */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-32 md:w-64 md:h-64 bg-teal-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-64 md:h-64 bg-emerald-500/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48 md:w-[500px] md:h-[300px] bg-blue-500/3 rounded-full blur-3xl" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-teal-400/40 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '5s'
        }} />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '4s'
        }} />
        <div className="absolute bottom-1/3 left-2/3 w-0.5 h-0.5 bg-blue-400/35 rounded-full animate-pulse" style={{
          animationDelay: '1s',
          animationDuration: '6s'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Waarom autonome AI-agenten?
          </h2>
        </div>

        {/* Three USP columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* USP 1 - Sneller schakelen */}
          <div className="text-center space-y-6">
            {/* Icon with glow effect */}
            <div className="flex justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-400/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-all duration-300" style={{
                boxShadow: '0 0 40px rgba(20, 184, 166, 0.2), inset 0 0 20px rgba(20, 184, 166, 0.1)'
              }}>
                <Zap className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-teal-300" style={{
                  filter: 'drop-shadow(0 0 10px rgba(20, 184, 166, 0.6))'
                }} />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                Sneller schakelen zonder menselijke tussenkomst
              </h3>
              <p className="text-sm md:text-base text-premium-silver/80 leading-relaxed max-w-sm mx-auto">
                Agents kunnen direct reageren op triggers en context.
              </p>
            </div>
          </div>

          {/* USP 2 - Altijd beschikbaar */}
          <div className="text-center space-y-6">
            {/* Icon with glow effect */}
            <div className="flex justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-all duration-300" style={{
                boxShadow: '0 0 40px rgba(16, 185, 129, 0.2), inset 0 0 20px rgba(16, 185, 129, 0.1)'
              }}>
                <Brain className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-emerald-300" style={{
                  filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.6))'
                }} />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                Altijd beschikbaar, altijd lerend
              </h3>
              <p className="text-sm md:text-base text-premium-silver/80 leading-relaxed max-w-sm mx-auto">
                Ze draaien 24/7 en passen zich aan op basis van data.
              </p>
            </div>
          </div>

          {/* USP 3 - Volledig aanpasbaar */}
          <div className="text-center space-y-6">
            {/* Icon with glow effect */}
            <div className="flex justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 border border-blue-400/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-all duration-300" style={{
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.2), inset 0 0 20px rgba(59, 130, 246, 0.1)'
              }}>
                <Cog className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-blue-300" style={{
                  filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))'
                }} />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                Volledig aanpasbaar aan jouw organisatie
              </h3>
              <p className="text-sm md:text-base text-premium-silver/80 leading-relaxed max-w-sm mx-auto">
                Gebouwd rondom jouw processen, systemen en use cases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSecondaryHero;
