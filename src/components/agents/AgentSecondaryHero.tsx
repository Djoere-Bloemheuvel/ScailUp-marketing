
import { Brain, Zap, Shield } from 'lucide-react';

const AgentSecondaryHero = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Pure black background with very subtle teal/green accents */}
      <div className="absolute inset-0 bg-premium-black" />
      
      {/* Top corner glows - subtle teal/green */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-teal-500/8 via-teal-500/3 to-transparent blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-emerald-500/8 via-emerald-500/3 to-transparent blur-3xl" />
      
      {/* Behind text glow - very subtle */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-teal-500/4 via-emerald-500/2 to-transparent blur-3xl" />
      
      {/* Very subtle ambient lighting effects with teal/green colors - much more subtle */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-32 md:w-64 md:h-64 bg-teal-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-64 md:h-64 bg-emerald-500/3 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48 md:w-[500px] md:h-[300px] bg-teal-500/2 rounded-full blur-3xl" />

      {/* Even more subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-teal-400/20 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '5s'
        }} />
        <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-emerald-400/15 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '4s'
        }} />
        <div className="absolute bottom-1/3 left-2/3 w-0.5 h-0.5 bg-teal-400/18 rounded-full animate-pulse" style={{
          animationDelay: '1s',
          animationDuration: '6s'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with subtle text glow */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="relative">
            {/* Text background glow */}
            <div className="absolute inset-0 bg-gradient-radial from-teal-500/6 via-emerald-500/3 to-transparent blur-2xl scale-110" />
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
              Autonoom. Intelligent. <span className="text-teal-300">Onmisbaar.</span>
            </h2>
          </div>
          <div className="relative">
            {/* Subtitle background glow */}
            <div className="absolute inset-0 bg-gradient-radial from-emerald-500/4 via-teal-500/2 to-transparent blur-2xl scale-105" />
            <p className="relative text-lg md:text-xl lg:text-2xl text-premium-silver/80 leading-relaxed max-w-4xl mx-auto">
              Onze AI Agents voeren zelfstandig taken uit, communiceren met systemen én mensen,
              <br className="hidden md:block" />
              en automatiseren repetitieve workflows zonder handmatige input.
            </p>
          </div>
        </div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {/* Card 1 - Zelfstandig beslissen */}
          <div className="group">
            <div className="relative p-8 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm border border-teal-400/10 hover:border-teal-400/20 transition-all duration-300 hover:transform hover:scale-105">
              {/* Very subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/2 to-emerald-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-400/20 backdrop-blur-sm flex items-center justify-center">
                    <Brain className="w-8 h-8 md:w-10 md:h-10 text-teal-300" style={{
                      filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.4))'
                    }} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Zelfstandig beslissen
                  </h3>
                  <p className="text-sm md:text-base text-premium-silver/70 leading-relaxed">
                    AI-agents die denken, redeneren en handelen zonder menselijke tussenkomst.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - 24/7 operationeel */}
          <div className="group">
            <div className="relative p-8 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm border border-teal-400/10 hover:border-teal-400/20 transition-all duration-300 hover:transform hover:scale-105">
              {/* Very subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/2 to-emerald-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-400/20 backdrop-blur-sm flex items-center justify-center">
                    <Zap className="w-8 h-8 md:w-10 md:h-10 text-teal-300" style={{
                      filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.4))'
                    }} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    24/7 operationeel
                  </h3>
                  <p className="text-sm md:text-base text-premium-silver/70 leading-relaxed">
                    Altijd alert, altijd actief - geen pauzes, geen fouten, maximale efficiëntie.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Veilig & compliant */}
          <div className="group">
            <div className="relative p-8 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm border border-teal-400/10 hover:border-teal-400/20 transition-all duration-300 hover:transform hover:scale-105">
              {/* Very subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/2 to-emerald-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-400/20 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="w-8 h-8 md:w-10 md:h-10 text-teal-300" style={{
                      filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.4))'
                    }} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Veilig & compliant
                  </h3>
                  <p className="text-sm md:text-base text-premium-silver/70 leading-relaxed">
                    Werkt binnen veilige kaders met volledige audit-logs en toegangscontrole.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSecondaryHero;
