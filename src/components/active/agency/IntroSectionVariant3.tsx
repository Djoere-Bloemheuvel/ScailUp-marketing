import React from 'react';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

const IntroSectionVariant3 = () => {
  const scrollToEngines = () => {
    const enginesSection = document.getElementById('engines-section');
    if (enginesSection) {
      enginesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      
      {/* Marketing Edge Background Effects */}
      <div className="absolute inset-0 opacity-12 z-0">
        {/* Marketing Gradient corner accents */}
        <div className="absolute top-[5%] left-[5%] w-96 h-96 rounded-full blur-3xl" 
             style={{ 
               background: 'radial-gradient(circle, #8B5CF640, #DB277730, transparent)',
               animationDuration: '22s',
               animation: 'pulse 22s infinite'
             }} />
        
        <div className="absolute bottom-[8%] right-[8%] w-80 h-80 rounded-full blur-3xl" 
             style={{ 
               background: 'radial-gradient(circle, #DB277735, #8B5CF625, transparent)',
               animationDuration: '28s', 
               animationDelay: '10s',
               animation: 'pulse 28s infinite 10s'
             }} />
      </div>
      
      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 z-10 flex items-center min-h-screen">
        
        {/* Left Content (40%) */}
        <div className="w-full lg:w-2/5 lg:pr-12 text-left">
          
          {/* Headline - Light Purple Accent */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-[0.9] tracking-[-0.03em]" 
              style={{ 
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', 
                fontWeight: '300'
              }}>
            Eén platform voor<br />
            <span style={{ color: '#8B5CF6' }}>al je groei</span>
          </h1>
          
          {/* Subregel */}
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 tracking-[-0.01em]" 
             style={{ 
               fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
               color: '#E5E7EB'
             }}>
            Buildrs geeft je overzicht in sales, marketing en automatisering—zonder de chaos van losse tools.
          </p>

          {/* Three Bullets - Minimalistic Line Icons with Purple Glow */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center text-lg text-white" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              <div className="relative mr-4 p-2 rounded-lg border border-white/20" 
                   style={{ 
                     background: 'rgba(139, 92, 246, 0.1)',
                     boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
                   }}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-medium">Sales</span> – Leads en campagnes centraal beheren
              </div>
            </div>
            
            <div className="flex items-center text-lg text-white" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              <div className="relative mr-4 p-2 rounded-lg border border-white/20" 
                   style={{ 
                     background: 'rgba(139, 92, 246, 0.1)',
                     boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
                   }}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-medium">Marketing</span> – Grip op zichtbaarheid en resultaten
              </div>
            </div>
            
            <div className="flex items-center text-lg text-white" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              <div className="relative mr-4 p-2 rounded-lg border border-white/20" 
                   style={{ 
                     background: 'rgba(139, 92, 246, 0.1)',
                     boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
                   }}>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-medium">Automatisering</span> – Minder losse tools, meer structuur
              </div>
            </div>
          </div>

          {/* CTA Button - Dark with Gradient Outline */}
          <div className="relative group inline-block">
            <div className="absolute inset-0 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-all duration-500 scale-110" 
                 style={{ background: 'linear-gradient(135deg, #8B5CF6, #DB2777)' }} />
            
            <button 
              onClick={scrollToEngines}
              className="relative inline-flex items-center px-8 py-4 text-white font-medium rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 border-2 text-lg group"
              style={{ 
                backgroundColor: '#0A0A0A',
                borderImage: 'linear-gradient(135deg, #8B5CF6, #DB2777) 1',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                boxShadow: '0 15px 35px rgba(139, 92, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #8B5CF6, #DB2777)';
                e.currentTarget.style.borderImage = 'none';
                e.currentTarget.style.border = '2px solid transparent';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0A0A0A';
                e.currentTarget.style.borderImage = 'linear-gradient(135deg, #8B5CF6, #DB2777) 1';
                e.currentTarget.style.border = '2px solid transparent';
              }}
            >
              <span className="mr-3">Ontdek de engines</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right Visual (60%) */}
        <div className="hidden lg:block w-3/5 relative">
          {/* Marketing-focused Hyperrealistic Studio Visual */}
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10"
               style={{
                 background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(219, 39, 119, 0.06))',
                 boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.25)'
               }}>
            
            {/* Visual Content - Marketing Focus */}
            <div className="w-full h-full flex items-center justify-center text-white/60">
              <div className="text-center">
                <div className="text-5xl mb-4">📊</div>
                <div className="text-lg font-light" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                  Hyperrealistische Studio Visual<br />
                  <span className="text-sm text-gray-400">Marketing-gradient flows + data-visualisaties</span>
                </div>
              </div>
            </div>

            {/* Marketing-themed holographic elements */}
            <div className="absolute top-6 right-6 w-24 h-16 rounded-lg animate-pulse border-2 flex items-center justify-center" 
                 style={{ 
                   borderImage: 'linear-gradient(135deg, #8B5CF6, #DB2777) 1',
                   animationDuration: '5s' 
                 }}>
              <TrendingUp className="w-4 h-4 text-purple-400" />
            </div>
            
            <div className="absolute bottom-8 left-8 w-20 h-20 rounded-full animate-pulse flex items-center justify-center" 
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(219, 39, 119, 0.3))',
                   animationDuration: '7s', 
                   animationDelay: '3s' 
                 }}>
              <Users className="w-6 h-6 text-white/80" />
            </div>

            {/* Marketing gradient flow lines */}
            <div className="absolute top-1/4 left-8 w-40 h-px opacity-50 animate-pulse"
                 style={{ 
                   background: 'linear-gradient(90deg, transparent, #8B5CF6, #DB2777, transparent)',
                   animationDuration: '10s'
                 }} />
                 
            <div className="absolute bottom-1/3 right-8 w-36 h-px opacity-50 animate-pulse"
                 style={{ 
                   background: 'linear-gradient(270deg, transparent, #DB2777, #8B5CF6, transparent)',
                   animationDuration: '12s',
                   animationDelay: '4s'
                 }} />

            {/* Data visualization elements */}
            <div className="absolute top-1/2 left-1/4 grid grid-cols-3 gap-1 opacity-40">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2 h-6 rounded animate-pulse" 
                     style={{ 
                       background: i % 2 === 0 ? '#8B5CF6' : '#DB2777',
                       animationDelay: `${i * 0.5}s`,
                       animationDuration: '3s'
                     }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSectionVariant3;