
import { Bot, MessageSquare, Cpu, Brain, Network, Zap, Eye } from 'lucide-react';

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
          
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Wat zijn Autonomous AI Agents?
            </h2>
            
            <p className="text-lg md:text-xl text-premium-silver/80 leading-relaxed font-light">
              Een Autonomous AI Agent is een digitale assistent die zelfstandig kan denken, beslissen en handelen binnen vooraf gedefinieerde kaders. In plaats van een simpel script of chatbot werkt een agent doelgericht, met geheugen, en voert hij acties uit in tools zoals e-mail, CRM, agenda of API-integraties. Ideaal voor sales, klantenservice, administratie of interne coördinatie.
            </p>

            {/* Key Points */}
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

          {/* AI Agent Network Visual - Completely redesigned */}
          <div className="relative flex items-center justify-center">
            {/* Central Command Agent */}
            <div className="relative">
              {/* Outer network ring */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full border border-teal-400/20 animate-pulse" style={{
                animationDuration: '6s'
              }} />
              
              {/* Middle coordination ring */}
              <div className="absolute inset-8 md:inset-12 rounded-full border border-blue-400/30 animate-pulse" style={{
                animationDuration: '4s',
                animationDelay: '-2s'
              }} />
              
              {/* Central AI Command Hub */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(59, 130, 246, 0.08) 40%, rgba(16, 185, 129, 0.05) 70%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(20, 184, 166, 0.3)',
                boxShadow: `
                  0 0 80px rgba(20, 184, 166, 0.25),
                  0 0 160px rgba(59, 130, 246, 0.15),
                  inset 0 0 80px rgba(16, 185, 129, 0.08)
                `
              }}>
                {/* Command Center Icon */}
                <div className="relative">
                  <Network className="w-24 h-24 md:w-32 md:h-32 text-teal-300 drop-shadow-2xl animate-pulse" style={{
                    filter: 'drop-shadow(0 0 25px rgba(20, 184, 166, 0.7))',
                    animationDuration: '8s'
                  }} />
                  
                  {/* Central processing indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-teal-400/60 rounded-full animate-pulse" style={{
                    animationDuration: '2s'
                  }} />
                </div>
              </div>
              
              {/* Autonomous Agent Satellites */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Agent nodes with different capabilities */}
                {[
                  { angle: 0, icon: Bot, color: 'teal', delay: 0 },
                  { angle: 60, icon: MessageSquare, color: 'blue', delay: 1 },
                  { angle: 120, icon: Cpu, color: 'cyan', delay: 2 },
                  { angle: 180, icon: Eye, color: 'emerald', delay: 3 },
                  { angle: 240, icon: Zap, color: 'indigo', delay: 4 },
                  { angle: 300, icon: Brain, color: 'purple', delay: 5 }
                ].map((agent, i) => {
                  const x = Math.cos((agent.angle * Math.PI) / 180) * 110;
                  const y = Math.sin((agent.angle * Math.PI) / 180) * 110;
                  
                  return (
                    <div
                      key={`agent-${i}`}
                      className="absolute animate-spin"
                      style={{
                        animationDuration: `${12 + i * 2}s`,
                        transform: `rotate(${agent.angle}deg) translateY(-110px)`,
                        transformOrigin: '50% 110px'
                      }}
                    >
                      <div className={`w-14 h-14 md:w-18 md:h-18 rounded-xl bg-gradient-to-br from-${agent.color}-500/30 to-${agent.color}-600/20 border border-${agent.color}-400/40 backdrop-blur-sm flex items-center justify-center animate-pulse`} style={{
                        animationDelay: `${agent.delay}s`,
                        boxShadow: `0 0 20px rgba(${agent.color === 'teal' ? '20, 184, 166' : agent.color === 'blue' ? '59, 130, 246' : agent.color === 'cyan' ? '34, 211, 238' : '16, 185, 129'}, 0.4)`
                      }}>
                        <agent.icon className={`w-6 h-6 md:w-8 md:h-8 text-${agent.color}-300 transform -rotate-[${agent.angle}deg]`} style={{
                          animation: 'none',
                          transform: `rotate(-${agent.angle}deg)`
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Data Flow Connections */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Dynamic data streams */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const startRadius = 80;
                const endRadius = 140;
                const x1 = Math.cos(angle) * startRadius;
                const y1 = Math.sin(angle) * startRadius;
                const x2 = Math.cos(angle) * endRadius;
                const y2 = Math.sin(angle) * endRadius;
                
                return (
                  <div
                    key={`flow-${i}`}
                    className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent animate-pulse"
                    style={{
                      height: `${endRadius - startRadius}px`,
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-${(startRadius + endRadius) / 2}px)`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '3s'
                    }}
                  />
                );
              })}
              
              {/* Orbital connection rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full border-dashed border border-teal-400/20 animate-spin" style={{
                animationDuration: '20s'
              }} />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border-dashed border border-blue-400/15 animate-spin" style={{
                animationDuration: '25s',
                animationDirection: 'reverse'
              }} />
            </div>

            {/* Floating data particles */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => {
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                return (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-teal-400/60 rounded-full animate-pulse"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentExplained;
