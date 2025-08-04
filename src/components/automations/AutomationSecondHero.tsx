
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AutomationSecondHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced background gradient with more color */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/40 to-purple-950/30" />
      
      {/* Stronger ambient lighting effects with more vibrant colors */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-400/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

      {/* Additional colorful ambient orbs */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-violet-400/12 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }} />

      {/* More vibrant animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse shadow-lg shadow-blue-400/40" style={{
          animationDelay: '0s',
          animationDuration: '4s'
        }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse shadow-lg shadow-purple-400/30" style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }} />
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-cyan-400/55 rounded-full animate-pulse shadow-lg shadow-cyan-400/35" style={{
          animationDelay: '1s',
          animationDuration: '5s'
        }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-indigo-400/60 rounded-full animate-pulse shadow-lg shadow-indigo-400/40" style={{
          animationDelay: '3s',
          animationDuration: '4s'
        }} />
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-violet-400/45 rounded-full animate-pulse shadow-lg shadow-violet-400/30" style={{
          animationDelay: '2.5s',
          animationDuration: '6s'
        }} />
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-emerald-400/50 rounded-full animate-pulse shadow-lg shadow-emerald-400/30" style={{
          animationDelay: '4s',
          animationDuration: '3.5s'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                AI Automatisering
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-premium-silver/90 leading-relaxed">
                Slim. Snel. Onzichtbaar.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-premium-silver/80 leading-relaxed max-w-2xl">
              Van repetitieve taken tot complexe besluitvorming — wij maken het naadloos. Uw processen draaien 24/7. Zonder ruis. Zonder vertraging.
            </p>

            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  // Basic spam protection - simple rate limiting
                  const lastClick = localStorage.getItem('cta-last-click');
                  const now = Date.now();
                  if (lastClick && now - parseInt(lastClick) < 2000) return;
                  localStorage.setItem('cta-last-click', now.toString());
                  
                  // Scroll to next section
                  const nextSection = document.querySelector('section:nth-of-type(3)'); // Skip to third section
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Ontdek de mogelijkheden
              </Button>
            </div>
          </div>

          {/* Right side - Enhanced AI Automation Visual with Cog Icon */}
          <div className="relative flex items-center justify-center">
            {/* Central AI Automation Icon */}
            <div className="relative">
              {/* Enhanced outer glow ring with more vibrant colors */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 70%)',
                animationDuration: '4s'
              }} />
              
              {/* Enhanced middle glow ring */}
              <div className="absolute inset-8 md:inset-12 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(139, 92, 246, 0.10) 50%, transparent 70%)',
                animationDuration: '3s',
                animationDelay: '-1s'
              }} />
              
              {/* Enhanced inner core with stronger colors */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.20) 0%, rgba(168, 85, 247, 0.12) 40%, rgba(99, 102, 241, 0.08) 70%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: `
                  0 0 60px rgba(59, 130, 246, 0.3),
                  0 0 120px rgba(168, 85, 247, 0.15),
                  inset 0 0 60px rgba(99, 102, 241, 0.12)
                `
              }}>
                <Settings className="w-24 h-24 md:w-32 md:h-32 text-blue-300 drop-shadow-2xl animate-spin" style={{
                  filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.7)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.4))',
                  animationDuration: '20s'
                }} />
              </div>
              
              {/* Enhanced orbiting automation elements with more vibrant colors */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Orbiting automation dots with enhanced colors and glow */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full animate-spin"
                    style={{
                      background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(168, 85, 247, 0.7)',
                      animationDuration: `${8 + i * 2}s`,
                      transform: `rotate(${i * 60}deg) translateY(-${120 + i * 20}px)`,
                      boxShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(168, 85, 247, 0.5)'}`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced process flow connections with stronger colors */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Automation flow lines with enhanced visibility and color */}
              <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-blue-400/60 to-transparent transform rotate-45 animate-pulse shadow-lg shadow-blue-400/30" />
              <div className="absolute top-3/4 right-1/4 w-24 h-0.5 bg-gradient-to-l from-purple-400/60 to-transparent transform -rotate-45 animate-pulse shadow-lg shadow-purple-400/30" style={{
                animationDelay: '1s'
              }} />
              <div className="absolute bottom-1/3 left-1/3 w-28 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent transform rotate-12 animate-pulse shadow-lg shadow-cyan-400/30" style={{
                animationDelay: '2s'
              }} />
              <div className="absolute top-1/3 right-1/3 w-20 h-0.5 bg-gradient-to-l from-indigo-400/60 to-transparent transform -rotate-12 animate-pulse shadow-lg shadow-indigo-400/30" style={{
                animationDelay: '1.5s'
              }} />
            </div>

            {/* Additional floating elements for more visual interest */}
            <div className="absolute top-10 left-10 w-16 h-16 rounded-full border border-blue-400/40 flex items-center justify-center animate-pulse" style={{
              background: 'rgba(59, 130, 246, 0.1)',
              backdropFilter: 'blur(10px)',
              animationDuration: '3s'
            }}>
              <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
            </div>
            
            <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full border border-purple-400/40 flex items-center justify-center animate-pulse" style={{
              background: 'rgba(168, 85, 247, 0.1)',
              backdropFilter: 'blur(10px)',
              animationDuration: '4s',
              animationDelay: '1s'
            }}>
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
            </div>

            <div className="absolute top-1/2 left-5 w-8 h-8 rounded-full border border-cyan-400/40 flex items-center justify-center animate-pulse" style={{
              background: 'rgba(34, 211, 238, 0.1)',
              backdropFilter: 'blur(10px)',
              animationDuration: '5s',
              animationDelay: '2s'
            }}>
              <div className="w-1 h-1 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSecondHero;
