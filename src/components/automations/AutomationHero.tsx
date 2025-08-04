
import { Cog } from 'lucide-react';

const AutomationHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Dark blue/purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-indigo-950/20 to-purple-950/30" />
      
      {/* Ambient lighting effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '4s'
        }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }} />
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse" style={{
          animationDelay: '1s',
          animationDuration: '5s'
        }} />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-blue-400/60 rounded-full animate-pulse" style={{
          animationDelay: '3s',
          animationDuration: '4s'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                AI Process Automation
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-premium-silver/90 leading-relaxed">
                Intelligente workflows. Zelfstandige uitvoering.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-premium-silver/80 leading-relaxed max-w-2xl">
              Transformeer repetitieve processen in slimme, zelflererende systemen die 24/7 
              werken en zich aanpassen aan jouw specifieke bedrijfsbehoeften.
            </p>
          </div>

          {/* Right side - Automation Cog Visual */}
          <div className="relative flex items-center justify-center">
            {/* Central Automation Icon */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)',
                animationDuration: '4s'
              }} />
              
              {/* Middle glow ring */}
              <div className="absolute inset-8 md:inset-12 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
                animationDuration: '3s',
                animationDelay: '-1s'
              }} />
              
              {/* Inner core */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 40%, rgba(99, 102, 241, 0.05) 70%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                boxShadow: `
                  0 0 60px rgba(59, 130, 246, 0.3),
                  0 0 120px rgba(168, 85, 247, 0.2),
                  inset 0 0 60px rgba(99, 102, 241, 0.1)
                `
              }}>
                <Cog className="w-24 h-24 md:w-32 md:h-32 text-blue-300 drop-shadow-2xl animate-spin" style={{
                  filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))',
                  animationDuration: '8s'
                }} />
              </div>
              
              {/* Orbiting automation elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Orbiting process dots */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full animate-spin"
                    style={{
                      background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(168, 85, 247, 0.8)',
                      animationDuration: `${8 + i * 2}s`,
                      transform: `rotate(${i * 60}deg) translateY(-${120 + i * 20}px)`,
                      boxShadow: `0 0 10px ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(168, 85, 247, 0.8)'}`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Process flow connections */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Automation flow lines */}
              <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent transform rotate-45 animate-pulse" />
              <div className="absolute top-3/4 right-1/4 w-24 h-0.5 bg-gradient-to-l from-purple-400/40 to-transparent transform -rotate-45 animate-pulse" style={{
                animationDelay: '1s'
              }} />
              <div className="absolute bottom-1/3 left-1/3 w-28 h-0.5 bg-gradient-to-r from-cyan-400/40 to-transparent transform rotate-12 animate-pulse" style={{
                animationDelay: '2s'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationHero;
