
import { Shield, Code, Zap } from 'lucide-react';

const WhyBuildrs = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-gray-950/20 to-premium-black">
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
              Waarom Buildrs?
            </h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-white font-medium">
                  Geen agency. Geen buzzwords.
                </p>
                <p className="text-lg text-premium-silver/80 leading-relaxed font-light">
                  Wij zijn engineers en strategen. We bouwen wat anderen beloven.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-white font-medium">
                  Autonome AI-systemen. Niet alleen advies.
                </p>
                <p className="text-lg text-premium-silver/80 leading-relaxed font-light">
                  Van strategie tot implementatie. Van prototype tot productie.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-white font-medium">
                  Elite team. Enterprise resultaten.
                </p>
                <p className="text-lg text-premium-silver/80 leading-relaxed font-light">
                  Geen junior developers. Geen experimenteren op jouw kosten.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Visual Element */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-950/40 border border-premium-silver/20 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">Buildrs Standard</span>
                  </div>
                  
                  <div className="text-xs text-green-400 flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Elite</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-black/40 p-4 border border-blue-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-xs text-premium-silver/70">Security</span>
                      </div>
                      <div className="text-xl font-bold text-white">100%</div>
                    </div>
                    <div className="rounded-xl bg-black/40 p-4 border border-purple-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span className="text-xs text-premium-silver/70">Performance</span>
                      </div>
                      <div className="text-xl font-bold text-white">Elite</div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-black/40 p-4 border border-cyan-400/20">
                    <div className="text-xs text-premium-silver/70 mb-3">Team Expertise</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-premium-silver/60">Senior Engineers</span>
                        <span className="text-green-400">✓ 100%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-premium-silver/60">AI Specialists</span>
                        <span className="text-green-400">✓ Certified</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-premium-silver/60">Enterprise Experience</span>
                        <span className="text-green-400">✓ Proven</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-md flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 backdrop-blur-md flex items-center justify-center">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuildrs;
