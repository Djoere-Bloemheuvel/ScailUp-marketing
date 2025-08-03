
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

          {/* Right side - Enhanced Visual */}
          <div className="relative lg:order-2">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {/* Ambient glow layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 rounded-full blur-3xl opacity-40 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-tr from-blue-400/20 to-pink-500/20 rounded-full blur-2xl opacity-60" />
              
              {/* Main container */}
              <div className="relative w-96 h-96 mx-auto">
                {/* Central AI processor */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-gradient-to-br from-premium-gray/60 to-premium-black/80 border border-premium-silver/30 backdrop-blur-lg shadow-2xl">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 animate-pulse" />
                  
                  {/* AI brain core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl">
                    <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                    <div className="absolute inset-0 rounded-2xl animate-pulse bg-gradient-to-br from-cyan-300/30 to-blue-500/30" />
                  </div>
                  
                  {/* Neural network lines */}
                  <div className="absolute inset-4">
                    <div className="absolute top-0 left-1/2 w-px h-6 bg-gradient-to-b from-cyan-400/80 to-transparent transform -translate-x-1/2" />
                    <div className="absolute bottom-0 left-1/2 w-px h-6 bg-gradient-to-t from-purple-400/80 to-transparent transform -translate-x-1/2" />
                    <div className="absolute left-0 top-1/2 h-px w-6 bg-gradient-to-r from-blue-400/80 to-transparent transform -translate-y-1/2" />
                    <div className="absolute right-0 top-1/2 h-px w-6 bg-gradient-to-l from-pink-400/80 to-transparent transform -translate-y-1/2" />
                  </div>
                </div>

                {/* Orbital workflow nodes */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '40s' }}>
                  {/* Node 1 - Email Automation */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-premium-gray/50 to-premium-black/70 border border-premium-silver/40 backdrop-blur-md shadow-xl">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-500/20" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg" />
                    <div className="absolute inset-0 rounded-2xl animate-pulse bg-gradient-to-br from-green-300/10 to-emerald-400/10" />
                  </div>
                  
                  {/* Node 2 - Data Processing */}
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-18 h-18 rounded-xl bg-gradient-to-br from-premium-gray/50 to-premium-black/70 border border-premium-silver/40 backdrop-blur-md shadow-xl">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/20 to-red-500/20" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 shadow-lg" />
                  </div>
                  
                  {/* Node 3 - Analytics */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-premium-gray/50 to-premium-black/70 border border-premium-silver/40 backdrop-blur-md shadow-xl">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/20 to-indigo-500/20" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-500 shadow-lg" />
                  </div>
                  
                  {/* Node 4 - Integration */}
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-14 h-14 rounded-lg bg-gradient-to-br from-premium-gray/50 to-premium-black/70 border border-premium-silver/40 backdrop-blur-md shadow-xl">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg" />
                  </div>
                </div>

                {/* Dynamic connection beams */}
                <div className="absolute inset-0 pointer-events-none opacity-60">
                  <svg className="w-full h-full">
                    {/* Animated connection lines */}
                    <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                      <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="url(#beam1)" strokeWidth="3" strokeDasharray="6,6" />
                      <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="url(#beam2)" strokeWidth="2" strokeDasharray="4,4" />
                      <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="url(#beam3)" strokeWidth="2" strokeDasharray="4,4" />
                      <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="url(#beam4)" strokeWidth="2" strokeDasharray="4,4" />
                    </g>
                    
                    <defs>
                      <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="beam2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#EF4444" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="beam3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="beam4" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Floating data particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }} />
                  <div className="absolute top-32 right-24 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
                  <div className="absolute bottom-28 left-28 w-1 h-1 bg-green-400/60 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
                  <div className="absolute bottom-20 right-20 w-2 h-2 bg-orange-400/60 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }} />
                </div>

                {/* Holographic overlay effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-white/5 to-transparent opacity-30 animate-spin" style={{ animationDuration: '60s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationOverview;
