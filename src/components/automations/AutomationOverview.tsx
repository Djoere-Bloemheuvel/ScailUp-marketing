
const AutomationOverview = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-gray/20 to-premium-black" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="lg:order-1 max-w-2xl">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Transformeer uw bedrijfsprocessen met <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI automatisering</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-premium-silver/90 leading-relaxed font-light max-w-2xl">
                  Bij Buildrs.AI specialiseren we ons in het automatiseren van complexe bedrijfsprocessen zonder een regel code te schrijven. Onze no-code AI-oplossingen transformeren handmatige workflows naar intelligente, zelfstandig werkende systemen.
                </p>
                
                <p className="text-base md:text-lg text-premium-silver/80 leading-relaxed font-light">
                  Van leadgeneratie tot facturatie, van klant onboarding tot rapportage – we optimaliseren uw volledige workflow. Processen automatiseren betekent meer tijd voor strategie, minder operationele lasten en exponentiële groei voor uw organisatie. Ontdek hoe workflow optimalisatie uw concurrentievoordeel wordt.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - AI Chip Visual */}
          <div className="relative lg:order-2">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-purple-600/40 rounded-3xl blur-3xl opacity-60" />
              
              {/* Main visual container */}
              <div className="relative w-72 h-72 mx-auto rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md p-16 flex items-center justify-center shadow-2xl">
                
                {/* Background circuit pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
                                     radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`
                  }} />
                </div>
                
                {/* Central AI Chip */}
                <div className="relative w-32 h-20">
                  {/* Main chip body */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/60 to-purple-600/60 p-0.5 transition-all duration-500 shadow-2xl">
                    <div className="w-full h-full rounded-2xl bg-premium-black/90 backdrop-blur-sm relative overflow-hidden">
                      
                      {/* Chip surface with circuits */}
                      <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-premium-gray/30 to-premium-black/50">
                        {/* Circuit lines */}
                        <div className="absolute inset-0 opacity-60">
                          <div className="absolute top-2 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
                          <div className="absolute top-4 left-2 right-2 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent to-purple-400" />
                          <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 to-purple-400" />
                          <div className="absolute right-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400 to-transparent" />
                        </div>
                        
                        {/* Central processor core */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-6 rounded bg-gradient-to-br from-cyan-400/80 to-blue-600/80 shadow-lg">
                          <div className="absolute inset-0.5 rounded bg-gradient-to-br from-white/30 to-transparent" />
                          <div className="absolute inset-0 rounded animate-pulse bg-gradient-to-br from-cyan-300/20 to-blue-500/20" />
                        </div>
                        
                        {/* Micro components */}
                        <div className="absolute top-2 right-2 w-2 h-2 rounded bg-orange-400/70" />
                        <div className="absolute bottom-2 left-4 w-1.5 h-1.5 rounded bg-green-400/70" />
                        <div className="absolute top-3 left-6 w-1 h-1 rounded bg-purple-400/70" />
                      </div>
                      
                      {/* Sweeping scan effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-pulse" 
                           style={{ 
                             animation: 'sweep 4s ease-in-out infinite'
                           }} />
                    </div>
                  </div>
                  
                  {/* Chip pins/connectors */}
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 space-y-1">
                    <div className="w-2 h-1 bg-premium-silver/60 rounded-l" />
                    <div className="w-2 h-1 bg-premium-silver/60 rounded-l" />
                    <div className="w-2 h-1 bg-premium-silver/60 rounded-l" />
                  </div>
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 space-y-1">
                    <div className="w-2 h-1 bg-premium-silver/60 rounded-r" />
                    <div className="w-2 h-1 bg-premium-silver/60 rounded-r" />
                    <div className="w-2 h-1 bg-premium-silver/60 rounded-r" />
                  </div>
                </div>

                {/* Surrounding data flow nodes */}
                <div className="absolute inset-0">
                  {/* Top node - Input Processing */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-8 rounded-lg bg-gradient-to-br from-premium-gray/50 to-premium-black/70 border border-premium-silver/40 backdrop-blur-md shadow-xl">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-500/20" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-2 rounded bg-gradient-to-r from-green-400 to-emerald-600 shadow-lg" />
                  </div>
                  
                  {/* Right node - Processing */}
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-premium-gray/50 to-premium-black/70 border border-premium-silver/40 backdrop-blur-md shadow-xl">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/20 to-red-500/20" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded bg-gradient-to-br from-orange-400 to-red-500 shadow-lg animate-pulse" />
                  </div>
                  
                  {/* Bottom node - Output */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-8 rounded-lg bg-gradient-to-br from-premium-gray/50 to-premium-black/70 border border-premium-silver/40 backdrop-blur-md shadow-xl">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-400/20 to-indigo-500/20" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-2 rounded bg-gradient-to-r from-purple-400 to-indigo-500 shadow-lg" />
                  </div>
                  
                  {/* Left node - Integration */}
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-10 h-10 rounded-lg bg-gradient-to-br from-premium-gray/50 to-premium-black/70 border border-premium-silver/40 backdrop-blur-md shadow-xl">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg" />
                  </div>
                </div>

                {/* Data connection beams */}
                <div className="absolute inset-0 pointer-events-none opacity-50">
                  <svg className="w-full h-full">
                    <g className="animate-pulse" style={{ animationDuration: '2s' }}>
                      <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="url(#chipBeam1)" strokeWidth="2" strokeDasharray="4,4" />
                      <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="url(#chipBeam2)" strokeWidth="2" strokeDasharray="4,4" />
                      <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="url(#chipBeam3)" strokeWidth="2" strokeDasharray="4,4" />
                      <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="url(#chipBeam4)" strokeWidth="2" strokeDasharray="4,4" />
                    </g>
                    
                    <defs>
                      <linearGradient id="chipBeam1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="chipBeam2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#EF4444" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="chipBeam3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="chipBeam4" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Floating data particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-16 left-16 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                  <div className="absolute top-24 right-20 w-1 h-1 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                  <div className="absolute bottom-20 left-24 w-1 h-1 bg-green-400/60 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
                  <div className="absolute bottom-16 right-16 w-1.5 h-1.5 bg-orange-400/60 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }} />
                </div>

                {/* Holographic scanning effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-white/5 to-transparent opacity-20 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationOverview;
