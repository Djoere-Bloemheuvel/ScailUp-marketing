
const AutomationOverview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black/98 to-premium-black" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left-aligned SEO text content */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
              Transformeer uw bedrijfsprocessen met <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI automatisering</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-premium-silver/90 leading-relaxed font-light">
                Bij Buildrs.AI specialiseren we ons in het automatiseren van complexe bedrijfsprocessen zonder een regel code te schrijven. Onze no-code AI-oplossingen transformeren handmatige workflows naar intelligente, zelfstandig werkende systemen.
              </p>
              
              <p className="text-base md:text-lg text-premium-silver/80 leading-relaxed font-light">
                Van leadgeneratie tot facturatie, van klant onboarding tot rapportage – we optimaliseren uw volledige workflow. Processen automatiseren betekent meer tijd voor strategie, minder operationele lasten en exponentiële groei voor uw organisatie. Ontdek hoe workflow optimalisatie uw concurrentievoordeel wordt.
              </p>
            </div>
          </div>

          {/* Right-aligned premium automation visual */}
          <div className="relative">
            {/* Enhanced glassmorphism container */}
            <div className="relative w-full h-96 rounded-3xl overflow-hidden" 
                 style={{ 
                   background: 'rgba(20, 20, 30, 0.4)', 
                   backdropFilter: 'blur(6px)',
                   border: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
              
              {/* Deeper color gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-violet-800/50 to-fuchsia-700/40 opacity-80" />
              
              {/* Radial gradient overlays for depth */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 60%),
                                   radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 60%),
                                   radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)`
                }} />
              </div>
              
              <div className="relative z-10 h-full flex items-center justify-center p-8">
                {/* Enhanced outer glow for central block */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-3xl blur-3xl opacity-60 animate-pulse" 
                     style={{ animationDuration: '8s' }} />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-3xl blur-2xl opacity-80 animate-pulse" 
                     style={{ animationDuration: '6s', animationDelay: '2s' }} />
                
                {/* Main automation hub with enhanced styling */}
                <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-premium-gray/50 to-premium-black/70 border border-premium-silver/30 backdrop-blur-md flex items-center justify-center shadow-2xl mb-6 z-20">
                  <div className="relative w-28 h-28">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-600 p-0.5 transition-all duration-500 shadow-xl opacity-95">
                      <div className="w-full h-full rounded-2xl bg-premium-black/95 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                        {/* Central AI core with enhanced glow */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 via-indigo-400 to-purple-500 animate-pulse shadow-lg" 
                             style={{ 
                               boxShadow: '0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(99, 102, 241, 0.3)' 
                             }} />
                        
                        {/* Rotating elements with enhanced colors */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full opacity-90 shadow-sm" />
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full opacity-90 shadow-sm" />
                          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-90 shadow-sm" />
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-fuchsia-400 rounded-full opacity-90 shadow-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced floating workflow nodes with subtle animation */}
                <div className="absolute top-16 right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-violet-400/40 backdrop-blur-md flex items-center justify-center animate-float-1 shadow-lg"
                     style={{ 
                       boxShadow: '0 4px 20px rgba(139, 92, 246, 0.2)' 
                     }}>
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500" />
                </div>
                
                <div className="absolute bottom-16 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-indigo-400/40 backdrop-blur-md flex items-center justify-center animate-float-2 shadow-lg"
                     style={{ 
                       boxShadow: '0 4px 20px rgba(99, 102, 241, 0.2)' 
                     }}>
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-400 to-red-500" />
                </div>

                {/* Enhanced accent connection lines with glow */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full opacity-60">
                    <defs>
                      <linearGradient id="glowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#6366F1" stopOpacity="1" />
                        <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="glowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Curved connecting lines with glow filter */}
                    <path d="M 50% 50% Q 75% 35% 80% 25%" 
                          stroke="url(#glowGradient1)" 
                          strokeWidth="2" 
                          strokeDasharray="6,4" 
                          fill="none"
                          filter="url(#glow)"
                          className="animate-pulse opacity-80" />
                    
                    <path d="M 50% 50% Q 25% 65% 20% 75%" 
                          stroke="url(#glowGradient2)" 
                          strokeWidth="2" 
                          strokeDasharray="6,4" 
                          fill="none"
                          filter="url(#glow)"
                          className="animate-pulse opacity-80" 
                          style={{ animationDelay: '2s' }} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced keyframes for floating animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-1 {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
              opacity: 0.9; 
            }
            33% { 
              transform: translateY(-8px) rotate(2deg); 
              opacity: 1; 
            }
            66% { 
              transform: translateY(-4px) rotate(-1deg); 
              opacity: 0.95; 
            }
          }

          @keyframes float-2 {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
              opacity: 0.9; 
            }
            50% { 
              transform: translateY(-10px) rotate(-2deg); 
              opacity: 1; 
            }
          }

          .animate-float-1 {
            animation: float-1 6s ease-in-out infinite;
          }

          .animate-float-2 {
            animation: float-2 8s ease-in-out infinite 1s;
          }
        `
      }} />
    </section>
  );
};

export default AutomationOverview;
