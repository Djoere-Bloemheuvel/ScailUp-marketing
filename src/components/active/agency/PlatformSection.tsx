import React from 'react';
import { ArrowRight } from 'lucide-react';

const PlatformSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-32 bg-black">
      
      {/* CSS Fallback Styles */}
      <style>{`
        .platform-dashboard-fallback {
          background-image: url(/platform-dashboard-fullwidth.webp);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          filter: brightness(0.75) contrast(1.15) blur(0.5px);
          opacity: 0.6;
        }
      `}</style>
      
      {/* Subtle Concentrated Ambient Effects */}
      <div className="absolute inset-0 z-0">
        {/* Top-Left Concentrated Cluster - Lead Engine Blue */}
        <div className="absolute top-[15%] left-[15%] w-96 h-64 rounded-full blur-3xl opacity-85" 
             style={{ 
               background: 'radial-gradient(ellipse 400px 200px, rgba(96, 165, 250, 0.8) 0%, transparent 60%)',
               mixBlendMode: 'screen'
             }} />
        
        <div className="absolute top-[18%] left-[12%] w-64 h-96 rounded-full blur-2xl opacity-75" 
             style={{ 
               background: 'radial-gradient(ellipse 200px 300px, rgba(96, 165, 250, 0.6) 0%, transparent 70%)',
               mixBlendMode: 'screen'
             }} />
        
        {/* Top-Right Sparse - Marketing Engine Pink */}
        <div className="absolute top-[35%] right-[20%] w-80 h-48 rounded-full blur-3xl opacity-70" 
             style={{ 
               background: 'radial-gradient(ellipse 350px 150px, rgba(244, 114, 182, 0.7) 0%, transparent 80%)',
               mixBlendMode: 'screen'
             }} />
        
        {/* Bottom Center Large Soft Glow */}
        <div className="absolute bottom-[15%] left-[35%] w-[500px] h-[300px] rounded-full blur-3xl opacity-80" 
             style={{ 
               background: 'radial-gradient(ellipse 500px 300px at 30% 70%, rgba(96, 165, 250, 0.5) 0%, rgba(244, 114, 182, 0.4) 50%, transparent 85%)',
               mixBlendMode: 'screen'
             }} />
        
        {/* Mid-Right Edge Lighting - Vertical Streak */}
        <div className="absolute top-[45%] right-[5%] w-32 h-80 rounded-full blur-2xl opacity-90" 
             style={{ 
               background: 'radial-gradient(ellipse 100px 400px, rgba(244, 114, 182, 0.8) 0%, transparent 75%)',
               mixBlendMode: 'screen'
             }} />
        
        {/* Subtle Corner Accents */}
        <div className="absolute top-[12%] right-[8%] w-48 h-48 rounded-full blur-2xl opacity-75" 
             style={{ 
               background: 'radial-gradient(circle at 20% 80%, rgba(244, 114, 182, 0.6) 0%, transparent 70%)',
               mixBlendMode: 'screen'
             }} />
        
        <div className="absolute bottom-[8%] left-[10%] w-56 h-32 rounded-full blur-3xl opacity-95" 
             style={{ 
               background: 'radial-gradient(ellipse 280px 120px, rgba(96, 165, 250, 0.7) 0%, transparent 65%)',
               mixBlendMode: 'screen'
             }} />
      </div>
      
      {/* Premium Glass Container */}
      <div className="relative w-[90vw] h-[75vh] rounded-3xl overflow-hidden backdrop-blur-2xl border border-white/15 z-10"
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
        }}
      >
        
        {/* Background image inside glass - simplified */}
        <div className="absolute inset-0">
          <img 
            src="/platform-dashboard-fullwidth.webp" 
            alt="Buildrs AI Platform Dashboard"
            className="w-full h-full object-cover opacity-60 platform-dashboard-img"
            width="1920"
            height="1080"
            loading="lazy"
            fetchpriority="high"
            decoding="async"
            onError={(e) => {
              // Fallback to CSS background on error
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling?.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
            style={{
              filter: 'brightness(0.75) contrast(1.15)',
              imageRendering: 'high-quality',
              transform: 'translateZ(0)',
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          />
          
          {/* Premium overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20" />
          
          {/* CSS Background Fallback */}
          <div 
            className="absolute inset-0 platform-dashboard-fallback"
            style={{ display: 'none' }}
          />
        </div>

        {/* Content overlay */}
        <div className="relative w-full h-full flex items-center justify-center z-10">
          
          {/* Content Container */}
          <div className="text-center px-8 max-w-5xl">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 leading-[0.95] tracking-[-0.04em]" 
                style={{ 
                  fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif', 
                  fontWeight: '300'
                }}>
              <div style={{ fontWeight: '300' }}>
                Één platform.
              </div>
              <div style={{ fontWeight: '400' }}>
                Eindeloze mogelijkheden.
              </div>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed mb-12 max-w-4xl mx-auto tracking-[-0.02em]" 
               style={{ 
                 fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                 fontWeight: '200' 
               }}>
              Vandaag brengen we AI, Sales en Marketing samen in één platform.<br />
              <span style={{ fontWeight: '400', color: '#ffffff', fontSize: '1.05em' }}>Morgen bouwen we verder met jou.</span>
            </p>

            {/* Premium CTA */}
            <div className="relative group inline-block">
              <div className="absolute inset-0 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500 scale-110" 
                   style={{ background: 'linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(156, 163, 175, 0.3))' }} />
              
              <button className="relative inline-flex items-center px-8 py-4 text-white font-light rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 border border-white/25 hover:border-white/40 text-lg"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.08)',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                }}
              >
                <span className="mr-3">Platform Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;