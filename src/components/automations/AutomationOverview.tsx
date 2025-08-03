
import { useEffect, useState } from 'react';

const AutomationOverview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const element = document.getElementById('automation-overview');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="automation-overview" className="py-20 relative overflow-hidden">
      {/* Enhanced multi-layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black/98 to-premium-gray/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-premium-black/95 via-transparent to-premium-black/95" />
      
      {/* Ambient floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div 
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" 
          style={{ animationDelay: '0s', animationDuration: '4s' }} 
        />
        <div 
          className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-purple-400/80 rounded-full animate-pulse" 
          style={{ animationDelay: '2s', animationDuration: '6s' }} 
        />
        <div 
          className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse" 
          style={{ animationDelay: '1s', animationDuration: '5s' }} 
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Enhanced text content with Apple-style glass background */}
          <div className={`
            relative transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
          `}>
            {/* Premium glass container */}
            <div className="relative p-8 lg:p-12 rounded-[32px] backdrop-blur-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent shadow-2xl">
              
              {/* Subtle ambient glow behind text container */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-60" />
              <div className="absolute inset-[1px] rounded-[32px] bg-gradient-to-br from-premium-black/95 via-premium-black/90 to-premium-gray/30" />
              
              {/* Content */}
              <div className="relative z-10 text-left space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                  Transformeer uw bedrijfsprocessen met{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    AI automatisering
                  </span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg md:text-xl lg:text-2xl text-premium-silver/95 leading-relaxed font-light">
                    Bij Buildrs.AI specialiseren we ons in het automatiseren van complexe bedrijfsprocessen zonder een regel code te schrijven. Onze no-code AI-oplossingen transformeren handmatige workflows naar intelligente, zelfstandig werkende systemen.
                  </p>
                  
                  <p className="text-base md:text-lg lg:text-xl text-premium-silver/85 leading-relaxed font-light">
                    Van leadgeneratie tot facturatie, van klant onboarding tot rapportage – we optimaliseren uw volledige workflow. Processen automatiseren betekent meer tijd voor strategie, minder operationele lasten en exponentiële groei voor uw organisatie. Ontdek hoe workflow optimalisatie uw concurrentievoordeel wordt.
                  </p>
                </div>
              </div>
              
              {/* Subtle corner accents */}
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-500/40 animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-400/30 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            </div>
          </div>

          {/* Enhanced automation visual with premium styling and subtle aura */}
          <div className={`
            relative transition-all duration-1200 ease-out
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
          `} style={{ transitionDelay: '200ms' }}>
            
            {/* Subtle blurred radial aura behind illustration */}
            <div className="absolute inset-0 -m-8">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-cyan-500/20 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
            </div>
            
            <div className="relative w-full h-[420px] lg:h-[480px] rounded-[32px] bg-gradient-to-br from-premium-gray/15 to-premium-black/60 border border-premium-silver/15 backdrop-blur-xl p-8 lg:p-12 overflow-hidden shadow-2xl">
              
              {/* Enhanced background pattern with depth */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.12) 0%, transparent 60%),
                    radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.10) 0%, transparent 60%),
                    radial-gradient(circle at 50% 10%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)
                  `
                }} />
              </div>
              
              <div className="relative z-10 h-full flex items-center justify-center">
                
                {/* Enhanced premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-600/15 to-cyan-500/20 rounded-[32px] blur-2xl opacity-50" />
                
                {/* Main automation hub - enhanced */}
                <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-[28px] bg-gradient-to-br from-premium-gray/30 to-premium-black/70 border border-premium-silver/30 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                  <div className="relative w-32 h-32 lg:w-36 lg:h-36">
                    <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 p-0.5 transition-all duration-700 shadow-2xl">
                      <div className="w-full h-full rounded-[24px] bg-premium-black/95 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                        
                        {/* Enhanced AI core */}
                        <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 animate-pulse shadow-2xl" style={{ animationDuration: '3s' }} />
                        
                        {/* Enhanced rotating elements */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-lg" />
                          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-purple-400 rounded-full shadow-lg" />
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-lg" />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-pink-400 rounded-full shadow-lg" />
                        </div>
                        
                        {/* Inner pulse rings */}
                        <div className="absolute inset-4 border border-white/10 rounded-xl animate-pulse opacity-60" style={{ animationDuration: '2s' }} />
                        <div className="absolute inset-6 border border-white/5 rounded-lg animate-pulse opacity-40" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced floating workflow nodes */}
                <div className="absolute top-12 lg:top-16 right-6 lg:right-12 w-18 h-18 lg:w-20 lg:h-20 rounded-3xl bg-gradient-to-br from-premium-gray/25 to-premium-black/60 border border-premium-silver/25 backdrop-blur-xl flex items-center justify-center shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg" />
                </div>
                
                <div className="absolute bottom-12 lg:bottom-16 left-6 lg:left-12 w-18 h-18 lg:w-20 lg:h-20 rounded-3xl bg-gradient-to-br from-premium-gray/25 to-premium-black/60 border border-premium-silver/25 backdrop-blur-xl flex items-center justify-center shadow-2xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '1.5s' }}>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 shadow-lg" />
                </div>

                {/* Enhanced connection lines with better gradients */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full opacity-40">
                    <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="url(#enhancedGradient1)" strokeWidth="2.5" strokeDasharray="6,4" className="animate-pulse" />
                    <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="url(#enhancedGradient2)" strokeWidth="2.5" strokeDasharray="6,4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                    <defs>
                      <linearGradient id="enhancedGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
                      </linearGradient>
                      <linearGradient id="enhancedGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#EF4444" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Premium border glow effect */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-30 animate-pulse" style={{ animationDuration: '6s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationOverview;
