import { Bot, MessageSquare, Cpu, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AgentExplained = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-blue-950/10 to-premium-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content - matching hero section exactly */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Autonomous AI Agents
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-premium-silver/90 leading-relaxed">
                Slimme assistenten. Volledig zelfstandig.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-premium-silver/80 leading-relaxed max-w-2xl">
              Onze AI Agents voeren zelfstandig taken uit, communiceren met systemen én mensen, en automatiseren repetitieve workflows zonder handmatige input.
            </p>

            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  // Basic spam protection - simple rate limiting
                  const lastClick = localStorage.getItem('cta-last-click');
                  const now = Date.now();
                  if (lastClick && now - parseInt(lastClick) < 2000) return;
                  localStorage.setItem('cta-last-click', now.toString());
                  
                  // Scroll to next section or handle CTA action
                  const nextSection = document.querySelector('[data-service-section="0"]');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Ontdek de mogelijkheden
              </Button>
            </div>

            {/* Key Points - kept from original */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Zelfstandig handelen</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Neemt beslissingen en voert acties uit zonder menselijke tussenkomst</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Natuurlijke communicatie</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Communiceert vloeiend met mensen en systemen in context</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Geheugen & leren</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Onthoudt interacties en verbetert prestaties door ervaring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Glowing Brain Visual - kept existing visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-teal-500/30 to-blue-500/20 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '4s' }} />
              
              {/* Main container */}
              <div className="relative w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-slate-900/60 to-blue-950/40 border border-cyan-400/30 backdrop-blur-xl shadow-2xl flex items-center justify-center">
                
                {/* Inner glow circle */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-400/20">
                  {/* Rotating orbital rings */}
                  <div className="absolute inset-0 rounded-full border border-cyan-400/10 animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400/60 rounded-full animate-pulse" />
                  </div>
                  
                  <div className="absolute inset-4 rounded-full border border-teal-400/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                    <div className="absolute top-1/4 right-0 w-1.5 h-1.5 translate-x-1/2 -translate-y-1/2 bg-teal-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  
                  <div className="absolute inset-8 rounded-full border border-blue-400/10 animate-spin" style={{ animationDuration: '25s' }}>
                    <div className="absolute bottom-0 left-1/4 w-1 h-1 -translate-x-1/2 translate-y-1/2 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                  </div>
                </div>

                {/* Central brain icon */}
                <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/80 to-teal-500/80 flex items-center justify-center shadow-2xl animate-pulse" style={{ animationDuration: '3s' }}>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                  <Brain className="w-16 h-16 text-white drop-shadow-lg" />
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/30 to-teal-400/30 animate-pulse" style={{ animationDelay: '1s', animationDuration: '2s' }} />
                </div>

                {/* Orbiting particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Large particle - top */}
                  <div className="absolute top-4 left-1/2 w-3 h-3 -translate-x-1/2 bg-cyan-400/80 rounded-full animate-bounce shadow-lg shadow-cyan-400/50" style={{ animationDelay: '0s', animationDuration: '4s' }} />
                  
                  {/* Medium particle - right */}
                  <div className="absolute top-1/3 right-6 w-2 h-2 bg-teal-400/80 rounded-full animate-pulse shadow-lg shadow-teal-400/50" style={{ animationDelay: '1s', animationDuration: '3s' }} />
                  
                  {/* Small particle - bottom left */}
                  <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-400/80 rounded-full animate-ping shadow-lg shadow-blue-400/50" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
                  
                  {/* Medium particle - top right */}
                  <div className="absolute top-12 right-12 w-2 h-2 bg-cyan-300/80 rounded-full animate-bounce shadow-lg shadow-cyan-300/50" style={{ animationDelay: '0.5s', animationDuration: '5s' }} />
                  
                  {/* Small particle - bottom right */}
                  <div className="absolute bottom-6 right-8 w-1 h-1 bg-teal-300/80 rounded-full animate-pulse shadow-lg shadow-teal-300/50" style={{ animationDelay: '3s', animationDuration: '2.5s' }} />
                </div>

                {/* Scanning beam effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-cyan-400/10 to-transparent animate-spin opacity-50" style={{ animationDuration: '8s' }} />
                
                {/* Additional glow layers */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/5 to-teal-500/5 pointer-events-none" />
              </div>

              {/* Floating connection nodes */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 backdrop-blur-md flex items-center justify-center animate-float" style={{ animationDuration: '3s' }}>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-400/30 backdrop-blur-md flex items-center justify-center animate-float" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentExplained;
