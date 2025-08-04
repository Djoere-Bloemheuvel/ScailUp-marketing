import { Clock, Target, Workflow } from 'lucide-react';

const AgentOverview = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-emerald-950/8 through-teal-950/6 to-premium-black">
      {/* Enhanced Background Effects with green tints */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-teal-500/7 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-green-600/6 rounded-full blur-3xl transform -translate-x-1/2" />
      </div>

      {/* Subtle animated particles with green accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 left-1/3 w-1 h-1 bg-teal-400/50 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '4s'
        }} />
        <div className="absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-emerald-400/40 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '5s'
        }} />
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-green-400/35 rounded-full animate-pulse" style={{
          animationDelay: '3s',
          animationDuration: '3.5s'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* AI Agent Dashboard Visual */}
          <div className="relative lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Dashboard Container with subtle green tints */}
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/60 via-emerald-950/25 to-teal-950/40 border border-teal-400/30 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                      <Workflow className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">Persoonlijke AI Assistent</span>
                  </div>
                  
                  {/* Activity indicators */}
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-emerald-400 flex items-center space-x-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span>Actief</span>
                    </div>
                  </div>
                </div>

                {/* Agent Workflows with enhanced green accents */}
                <div className="space-y-4">
                  {/* Active Workflows */}
                  <div className="space-y-3">
                    <div className="text-xs text-premium-silver/70 mb-3">Actieve workflows</div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-teal-400/25 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
                          <span className="text-sm text-premium-silver/90">Lead opvolging</span>
                        </div>
                        <div className="text-xs text-emerald-400">Lopend</div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-emerald-400/25 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                          <span className="text-sm text-premium-silver/90">Rapportage genereren</span>
                        </div>
                        <div className="text-xs text-yellow-400">In behandeling</div>
                      </div>
                    </div>
                    
                    <div className="rounded-xl bg-black/40 p-4 border border-green-400/25 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                          <span className="text-sm text-premium-silver/90">Data verwerking</span>
                        </div>
                        <div className="text-xs text-emerald-400">Voltooid</div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics with green accents */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="rounded-xl bg-black/40 p-4 border border-teal-400/25">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-teal-400" />
                        <span className="text-xs text-premium-silver/70">Uptime</span>
                      </div>
                      <div className="text-xl font-bold text-white">24/7</div>
                    </div>
                    <div className="rounded-xl bg-black/40 p-4 border border-emerald-400/25">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs text-premium-silver/70">Nauwkeurigheid</span>
                      </div>
                      <div className="text-xl font-bold text-white">99.2%</div>
                    </div>
                  </div>

                  {/* Learning Progress with green theme */}
                  <div className="rounded-xl bg-black/40 p-4 border border-green-400/25">
                    <div className="text-xs text-premium-silver/70 mb-3">Leervoortgang</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                        <span className="text-xs text-premium-silver/70">Nieuw patroon gedetecteerd</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <span className="text-xs text-premium-silver/70">Workflow geoptimaliseerd</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                        <span className="text-xs text-premium-silver/70">Kennisbank uitgebreid</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Glow Effect with green tints */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/8 via-emerald-500/6 to-green-500/4 pointer-events-none" />
              </div>

              {/* Enhanced Floating Elements with green theme */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-400/30 backdrop-blur-md flex items-center justify-center">
                <Workflow className="w-8 h-8 text-teal-400" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-400/30 backdrop-blur-md flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Jouw persoonlijke digitale assistent
            </h2>
            
            <div className="text-lg md:text-xl text-premium-silver/80 leading-relaxed font-light space-y-6">
              <p>
                Onze agents zijn afgestemd op jouw processen: van leadopvolging tot rapportage, van support tot data-verwerking. Ze zijn 24/7 actief, werken foutloos en leren bij.
              </p>
              
              <p>
                We bouwen agents die niet alleen reageren, maar zelf initiatief nemen — zodat jij je kunt focussen op strategie.
              </p>
            </div>

            {/* Key Benefits with enhanced green accents */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-400/30 flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proactief handelen</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Neemt zelf initiatief en anticipeert op veranderingen</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-400/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Altijd beschikbaar</h3>
                  <p className="text-premium-silver/70 leading-relaxed">24/7 operationeel zonder pauzes of onderhoud</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-400/30 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Slimme integratie</h3>
                  <p className="text-premium-silver/70 leading-relaxed">Verbindt naadloos alle systemen en tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentOverview;
