import React from 'react';
import { ArrowRight } from 'lucide-react';

const IntroSectionVariant2 = () => {
  const scrollToEngines = () => {
    const enginesSection = document.getElementById('engines-section');
    if (enginesSection) {
      enginesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      
      {/* Gradient Harmony Background Effects */}
      <div className="absolute inset-0 opacity-10 z-0">
        {/* Buildrs Gradient as corner accents */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" 
             style={{ 
               background: 'radial-gradient(circle, #0046FF40, #C82AFF20, transparent)',
               animationDuration: '20s',
               animation: 'pulse 20s infinite'
             }} />
        
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl" 
             style={{ 
               background: 'radial-gradient(circle, #C82AFF30, #0046FF15, transparent)',
               animationDuration: '25s', 
               animationDelay: '8s',
               animation: 'pulse 25s infinite 8s'
             }} />
      </div>
      
      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 z-10 flex items-center min-h-screen">
        
        {/* Left Content (40%) */}
        <div className="w-full lg:w-2/5 lg:pr-12 text-left">
          
          {/* Headline - Clean White */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-[0.9] tracking-[-0.03em]" 
              style={{ 
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', 
                fontWeight: '300'
              }}>
            Eén platform voor<br />
            al je groei
          </h1>
          
          {/* Subregel */}
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 tracking-[-0.01em]" 
             style={{ 
               fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
               color: '#D1D5DB'
             }}>
            Buildrs geeft je overzicht in sales, marketing en automatisering—zonder de chaos van losse tools.
          </p>

          {/* Three Bullets - With Gradient Icons */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center text-lg text-white" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              <div className="relative mr-4">
                <span className="text-2xl">👤</span>
                <div className="absolute -inset-1 rounded-full blur-sm opacity-60" 
                     style={{ background: 'linear-gradient(135deg, #0046FF, #C82AFF)' }} />
              </div>
              <div>
                <span className="font-medium">Sales</span> – Leads en campagnes centraal beheren
              </div>
            </div>
            
            <div className="flex items-center text-lg text-white" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              <div className="relative mr-4">
                <span className="text-2xl">📈</span>
                <div className="absolute -inset-1 rounded-full blur-sm opacity-60" 
                     style={{ background: 'linear-gradient(135deg, #0046FF, #C82AFF)' }} />
              </div>
              <div>
                <span className="font-medium">Marketing</span> – Grip op zichtbaarheid en resultaten
              </div>
            </div>
            
            <div className="flex items-center text-lg text-white" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              <div className="relative mr-4">
                <span className="text-2xl">⚡</span>
                <div className="absolute -inset-1 rounded-full blur-sm opacity-60" 
                     style={{ background: 'linear-gradient(135deg, #0046FF, #C82AFF)' }} />
              </div>
              <div>
                <span className="font-medium">Automatisering</span> – Minder losse tools, meer structuur
              </div>
            </div>
          </div>

          {/* CTA Button - Gradient Fill */}
          <div className="relative group inline-block">
            <div className="absolute inset-0 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-all duration-500 scale-110" 
                 style={{ background: 'linear-gradient(135deg, #0046FF, #C82AFF)' }} />
            
            <button 
              onClick={scrollToEngines}
              className="relative inline-flex items-center px-8 py-4 text-white font-medium rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 text-lg"
              style={{ 
                background: 'linear-gradient(135deg, #0046FF, #C82AFF)',
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                boxShadow: '0 15px 35px rgba(0, 70, 255, 0.4)'
              }}
            >
              <span className="mr-3">Ontdek de engines</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right Visual (60%) */}
        <div className="hidden lg:block w-3/5 relative">
          {/* Hyperrealistic Studio Visual with Prominent Gradients */}
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10"
               style={{
                 background: 'linear-gradient(135deg, rgba(0, 70, 255, 0.05), rgba(200, 42, 255, 0.05))',
                 boxShadow: '0 25px 50px -12px rgba(0, 70, 255, 0.2)'
               }}>
            
            {/* Visual Content */}
            <div className="w-full h-full flex items-center justify-center text-white/60">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <div className="text-lg font-light" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                  Hyperrealistische Studio Visual<br />
                  <span className="text-sm text-gray-400">Prominente holografische gradient-flows</span>
                </div>
              </div>
            </div>

            {/* Enhanced holographic elements with gradients */}
            <div className="absolute top-8 right-8 w-20 h-20 rounded-lg animate-pulse border-2" 
                 style={{ 
                   borderImage: 'linear-gradient(135deg, #0046FF, #C82AFF) 1',
                   animationDuration: '4s' 
                 }} />
            
            <div className="absolute bottom-12 left-12 w-16 h-16 rounded-full animate-pulse" 
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(0, 70, 255, 0.3), rgba(200, 42, 255, 0.3))',
                   animationDuration: '6s', 
                   animationDelay: '2s' 
                 }} />

            {/* Gradient flow lines */}
            <div className="absolute top-1/3 left-4 w-32 h-px opacity-40 animate-pulse"
                 style={{ 
                   background: 'linear-gradient(90deg, transparent, #0046FF, #C82AFF, transparent)',
                   animationDuration: '8s'
                 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSectionVariant2;