
import { Shield, Zap, Users, Settings } from 'lucide-react';

const WhyBuildrs = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-gray/20 to-premium-black" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="lg:order-1 max-w-2xl lg:text-right">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Waarom kiezen voor <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Buildrs</span>?
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-premium-silver/90 leading-relaxed font-light max-w-2xl lg:ml-auto">
                  Bij Buildrs combineren we <strong className="text-white font-medium">cutting-edge AI-technologie</strong> met pragmatische automatisering. Onze <strong className="text-blue-300 font-medium">AI oplossingen</strong> zijn modulair, veilig en <strong className="text-purple-300 font-medium">100% no-code</strong>. Dat betekent dat je binnen enkele dagen operationeel bent – zonder developer.
                </p>
                
                <p className="text-base md:text-lg text-premium-silver/80 leading-relaxed font-light lg:ml-auto max-w-2xl">
                  We integreren met jouw bestaande tools, zoals <strong className="text-cyan-300 font-medium">HubSpot</strong>, Notion, Slack, Airtable en Instantly. Onze <strong className="text-emerald-300 font-medium">modulaire automatisering</strong> is schaalbaar, beveiligd met <strong className="text-orange-300 font-medium">data security</strong> en altijd afgestemd op jouw organisatie.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative lg:order-2">
            <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 to-blue-600/40 rounded-3xl blur-3xl opacity-60" />
              
              {/* Main visual container */}
              <div className="relative w-72 h-72 mx-auto rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md p-16 flex items-center justify-center shadow-2xl">
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
                  }} />
                </div>
                
                {/* Central hub with multiple icons */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central core */}
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/60 to-blue-600/60 p-0.5 transition-all duration-500 shadow-xl">
                    <div className="w-full h-full rounded-2xl bg-premium-black/90 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                      <Settings className="w-10 h-10 text-white/90 drop-shadow-lg animate-spin" style={{ animationDuration: '8s' }} />
                    </div>
                  </div>
                  
                  {/* Surrounding feature icons */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-premium-gray/30 to-premium-black/50 border border-premium-silver/30 backdrop-blur-md flex items-center justify-center">
                    <Shield className="w-6 h-6 text-emerald-300" />
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-premium-gray/30 to-premium-black/50 border border-premium-silver/30 backdrop-blur-md flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-300" />
                  </div>
                  
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-premium-gray/30 to-premium-black/50 border border-premium-silver/30 backdrop-blur-md flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-300" />
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full opacity-30">
                      <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" />
                      <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '1s' }} />
                      <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="url(#gradient3)" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '2s' }} />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuildrs;
