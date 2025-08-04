
import { Brain, Zap, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AutomationSecondHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient - using blue/purple colors from AutomationHero */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/30 to-purple-950/40" />
      
      {/* Ambient lighting effects - blue/purple theme */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Subtle animated particles - blue/purple colors */}
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

          {/* Right side - Unique AI Automation Visual */}
          <div className="relative flex items-center justify-center">
            {/* Central Automation Hub */}
            <div className="relative">
              {/* Outer automation ring with pulsing effect */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full animate-pulse" style={{
                background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.1) 25%, rgba(6, 182, 212, 0.15) 50%, rgba(59, 130, 246, 0.1) 75%, rgba(168, 85, 247, 0.15) 100%)',
                animationDuration: '6s'
              }} />
              
              {/* Middle processing ring */}
              <div className="absolute inset-12 md:inset-16 rounded-full animate-pulse" style={{
                background: 'conic-gradient(from 180deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(34, 211, 238, 0.2) 100%)',
                animationDuration: '4s',
                animationDelay: '-2s'
              }} />
              
              {/* Inner automation core with gear-like appearance */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(168, 85, 247, 0.15) 40%, rgba(99, 102, 241, 0.1) 70%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                boxShadow: `
                  0 0 80px rgba(59, 130, 246, 0.4),
                  0 0 160px rgba(168, 85, 247, 0.25),
                  inset 0 0 80px rgba(99, 102, 241, 0.15)
                `
              }}>
                {/* Central brain with automation symbols */}
                <div className="relative">
                  <Brain className="w-20 h-20 md:w-28 md:h-28 text-blue-300 drop-shadow-2xl" style={{
                    filter: 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.7))'
                  }} />
                  
                  {/* Small automation indicators around brain */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500/80 rounded-full flex items-center justify-center">
                    <Settings className="w-3 h-3 text-white animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-500/80 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Automation workflow nodes - unique pattern */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Workflow nodes in hexagonal pattern */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full animate-pulse"
                    style={{
                      background: i % 3 === 0 ? 'rgba(59, 130, 246, 0.9)' : i % 3 === 1 ? 'rgba(168, 85, 247, 0.9)' : 'rgba(6, 182, 212, 0.9)',
                      animationDuration: `${3 + i * 0.5}s`,
                      transform: `rotate(${i * 45}deg) translateY(-${140 + (i % 2) * 20}px)`,
                      boxShadow: `0 0 15px ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.9)' : i % 3 === 1 ? 'rgba(168, 85, 247, 0.9)' : 'rgba(6, 182, 212, 0.9)'}`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Automation process flows - unique connecting elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Dynamic process flow lines */}
              <div className="absolute top-1/4 left-1/6 w-40 h-0.5 bg-gradient-to-r from-blue-400/60 via-purple-400/40 to-transparent transform rotate-25 animate-pulse" />
              <div className="absolute top-2/3 right-1/6 w-36 h-0.5 bg-gradient-to-l from-purple-400/60 via-cyan-400/40 to-transparent transform -rotate-25 animate-pulse" style={{
                animationDelay: '1.5s'
              }} />
              <div className="absolute bottom-1/4 left-1/3 w-32 h-0.5 bg-gradient-to-r from-cyan-400/60 via-blue-400/40 to-transparent transform rotate-15 animate-pulse" style={{
                animationDelay: '3s'
              }} />
              
              {/* Automation arrows showing process flow */}
              <div className="absolute top-1/3 right-1/4 opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <ArrowRight className="w-6 h-6 text-blue-400 transform rotate-45" />
              </div>
              <div className="absolute bottom-1/3 left-1/4 opacity-60 animate-pulse" style={{ animationDelay: '2s' }}>
                <ArrowRight className="w-6 h-6 text-purple-400 transform -rotate-45" />
              </div>
              
              {/* Process step indicators */}
              <div className="absolute top-1/6 left-1/2 w-2 h-2 bg-blue-400/80 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-1/6 right-1/3 w-2 h-2 bg-purple-400/80 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
              <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-cyan-400/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Automation data streams - unique visual element */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Flowing data particles */}
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={`data-stream-${i}`}
                  className="absolute w-1 h-1 rounded-full opacity-60"
                  style={{
                    background: i % 2 === 0 ? '#3b82f6' : '#a855f7',
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                    animation: `dataFlow ${4 + i}s linear infinite`,
                    animationDelay: `${i * 0.8}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for unique automation animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes dataFlow {
            0% { transform: translateX(-50px) translateY(-20px) scale(0.5); opacity: 0; }
            25% { opacity: 1; transform: translateX(20px) translateY(10px) scale(1); }
            75% { opacity: 1; transform: translateX(40px) translateY(-10px) scale(1.2); }
            100% { transform: translateX(100px) translateY(-30px) scale(0.5); opacity: 0; }
          }
        `
      }} />
    </section>
  );
};

export default AutomationSecondHero;
