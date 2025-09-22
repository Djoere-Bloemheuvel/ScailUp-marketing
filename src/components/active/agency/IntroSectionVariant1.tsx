import React from 'react';
import { ArrowRight } from 'lucide-react';

const IntroSectionVariant1 = () => {
  const scrollToEngines = () => {
    const enginesSection = document.getElementById('engines-section');
    if (enginesSection) {
      enginesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      
      {/* Pure Minimal Background Effects */}
      <div className="absolute inset-0 opacity-8 z-0">
        {/* Subtle blue glow points */}
        <div className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full blur-2xl" 
             style={{ 
               background: 'radial-gradient(circle, #0046FF20, transparent)',
               animationDuration: '15s' 
             }} />
        
        <div className="absolute bottom-[20%] right-[12%] w-24 h-24 rounded-full blur-2xl" 
             style={{ 
               background: 'radial-gradient(circle, #0046FF15, transparent)',
               animationDuration: '18s', 
               animationDelay: '6s' 
             }} />
      </div>
      
      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 z-10 flex items-center min-h-screen">
        
        {/* Left Content (40%) */}
        <div className="w-full lg:w-2/5 lg:pr-12 text-left">
          
          {/* Headline with Gradient Outline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-[0.9] tracking-[-0.03em] relative" 
              style={{ 
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', 
                fontWeight: '300',
                WebkitTextStroke: '1px transparent',
                background: 'linear-gradient(135deg, #0046FF, #C82AFF)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 1px rgba(0, 70, 255, 0.3))'
              }}>
            Eén platform voor<br />
            al je groei
          </h1>
          
          {/* Subregel */}
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 tracking-[-0.01em]" 
             style={{ 
               fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
               color: '#9CA3AF'
             }}>
            Buildrs geeft je overzicht in sales, marketing en automatisering—zonder de chaos van losse tools.
          </p>

          {/* Three Bullets - Standard with Emoji */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center text-lg text-white" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              <span className="text-2xl mr-4">👤</span>
              <div>
                <span className="font-medium">Sales</span> – Leads en campagnes centraal beheren
              </div>
            </div>
            
            <div className="flex items-center text-lg text-white" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              <span className="text-2xl mr-4">📈</span>
              <div>
                <span className="font-medium">Marketing</span> – Grip op zichtbaarheid en resultaten
              </div>
            </div>
            
            <div className="flex items-center text-lg text-white" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              <span className="text-2xl mr-4">⚡</span>
              <div>
                <span className="font-medium">Automatisering</span> – Minder losse tools, meer structuur
              </div>
            </div>
          </div>

          {/* CTA Button - Solid Blue with Hover */}
          <div className="relative group inline-block">
            <button 
              onClick={scrollToEngines}
              className="relative inline-flex items-center px-8 py-4 text-white font-medium rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 text-lg"
              style={{ 
                backgroundColor: '#0046FF',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                boxShadow: '0 8px 25px rgba(0, 70, 255, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C82AFF'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0046FF'}
            >
              <span className="mr-3">Ontdek de engines</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right Visual (60%) */}
        <div className="hidden lg:block w-3/5 relative">
          {/* Hyperrealistic Studio Visual Placeholder */}
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/5"
               style={{
                 background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9))',
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
               }}>
            
            {/* Minimal Visual Content */}
            <div className="w-full h-full flex items-center justify-center text-white/40">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <div className="text-lg font-light" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                  Hyperrealistische Studio Visual<br />
                  <span className="text-sm text-gray-500">Minimale glow, focus op realisme</span>
                </div>
              </div>
            </div>

            {/* Minimal holographic elements */}
            <div className="absolute top-4 right-4 w-16 h-16 border border-blue-400/20 rounded-lg animate-pulse" 
                 style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-8 left-8 w-12 h-12 border border-blue-400/15 rounded-full animate-pulse" 
                 style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSectionVariant1;