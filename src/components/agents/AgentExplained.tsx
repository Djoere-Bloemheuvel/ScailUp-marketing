
import { Bot, MessageSquare, Cpu } from 'lucide-react';

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

          {/* AI Agent Visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Agent Interface */}
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/60 to-blue-950/40 border border-blue-400/30 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Agent Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">AI Agent Alpha</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-400/80 animate-pulse" />
                    <div className="text-xs text-green-400">Online</div>
                  </div>
                </div>

                {/* Agent Activity */}
                <div className="space-y-4">
                  {/* Current Task */}
                  <div className="rounded-xl bg-black/40 p-4 border border-blue-400/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-xs text-premium-silver/70">Huidige taak</span>
                    </div>
                    <div className="text-sm text-white">E-mail analyse & follow-up genereren</div>
                  </div>

                  {/* Recent Actions */}
                  <div className="space-y-2">
                    <div className="text-xs text-premium-silver/70 mb-3">Recente acties</div>
                    
                    <div className="flex items-center space-x-3 p-2 rounded-lg bg-black/20">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-xs text-premium-silver/80">CRM bijgewerkt - 14:32</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-2 rounded-lg bg-black/20">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-xs text-premium-silver/80">Afspraak ingepland - 14:28</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-2 rounded-lg bg-black/20">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-xs text-premium-silver/80">Lead gekwalificeerd - 14:15</span>
                    </div>
                  </div>

                  {/* Agent Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="rounded-xl bg-black/40 p-3 border border-cyan-400/20">
                      <div className="text-lg font-bold text-white">127</div>
                      <div className="text-xs text-premium-silver/70">Taken voltooid</div>
                    </div>
                    <div className="rounded-xl bg-black/40 p-3 border border-emerald-400/20">
                      <div className="text-lg font-bold text-white">98.5%</div>
                      <div className="text-xs text-premium-silver/70">Nauwkeurigheid</div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />
              </div>

              {/* Floating Communication Bubbles */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-blue-400" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-400/30 backdrop-blur-md flex items-center justify-center">
                <Cpu className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentExplained;
