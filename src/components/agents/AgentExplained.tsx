
import { Bot, MessageSquare, Cpu, Brain } from 'lucide-react';

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

          {/* Neural AI Visual - Exact copy from AgentHero */}
          <div className="relative flex items-center justify-center">
            {/* Central AI Brain Icon */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
                animationDuration: '4s'
              }} />
              
              {/* Middle glow ring */}
              <div className="absolute inset-8 md:inset-12 rounded-full animate-pulse" style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(34, 211, 238, 0.08) 50%, transparent 70%)',
                animationDuration: '3s',
                animationDelay: '-1s'
              }} />
              
              {/* Inner core */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, rgba(16, 185, 129, 0.05) 70%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                boxShadow: `
                  0 0 60px rgba(20, 184, 166, 0.3),
                  0 0 120px rgba(59, 130, 246, 0.2),
                  inset 0 0 60px rgba(16, 185, 129, 0.1)
                `
              }}>
                <Brain className="w-24 h-24 md:w-32 md:h-32 text-teal-300 drop-shadow-2xl" style={{
                  filter: 'drop-shadow(0 0 20px rgba(20, 184, 166, 0.6))'
                }} />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Orbiting dots */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full animate-spin"
                    style={{
                      background: i % 2 === 0 ? 'rgba(20, 184, 166, 0.8)' : 'rgba(59, 130, 246, 0.8)',
                      animationDuration: `${8 + i * 2}s`,
                      transform: `rotate(${i * 60}deg) translateY(-${120 + i * 20}px)`,
                      boxShadow: `0 0 10px ${i % 2 === 0 ? 'rgba(20, 184, 166, 0.8)' : 'rgba(59, 130, 246, 0.8)'}`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Neural network connections */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Connection lines */}
              <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-teal-400/40 to-transparent transform rotate-45 animate-pulse" />
              <div className="absolute top-3/4 right-1/4 w-24 h-0.5 bg-gradient-to-l from-blue-400/40 to-transparent transform -rotate-45 animate-pulse" style={{
                animationDelay: '1s'
              }} />
              <div className="absolute bottom-1/3 left-1/3 w-28 h-0.5 bg-gradient-to-r from-emerald-400/40 to-transparent transform rotate-12 animate-pulse" style={{
                animationDelay: '2s'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentExplained;
