
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

          {/* Right side - Visual */}
          <div className="relative lg:order-2">
            <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-3xl blur-3xl opacity-60" />
              
              {/* Main visual container */}
              <div className="relative w-72 h-72 mx-auto rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md p-8 flex items-center justify-center shadow-2xl overflow-hidden">
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
                  }} />
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center">
                  {/* Main automation hub */}
                  <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md flex items-center justify-center shadow-2xl mb-6">
                    <div className="relative w-28 h-28">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 transition-all duration-500 shadow-xl opacity-90">
                        <div className="w-full h-full rounded-2xl bg-premium-black/90 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                          {/* Central AI core */}
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 animate-pulse shadow-lg" />
                          
                          {/* Rotating elements */}
                          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-80" />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-80" />
                            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-80" />
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-80" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating workflow nodes */}
                  <div className="absolute top-16 right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-premium-gray/30 to-premium-black/50 border border-premium-silver/30 backdrop-blur-md flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500" />
                  </div>
                  
                  <div className="absolute bottom-16 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-premium-gray/30 to-premium-black/50 border border-premium-silver/30 backdrop-blur-md flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-400 to-red-500" />
                  </div>

                  {/* Connection lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full opacity-30">
                      <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" />
                      <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '1s' }} />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#F59E0B" />
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

export default AutomationOverview;
