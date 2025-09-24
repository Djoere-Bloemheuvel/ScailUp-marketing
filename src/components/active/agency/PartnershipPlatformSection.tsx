import React from 'react';
import { ArrowRight } from 'lucide-react';

const PartnershipPlatformSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      
      {/* CSS Styles - Cinematic & Premium */}
      <style jsx>{`
        /* Responsive title scaling */
        .platform-title-responsive {
          font-size: 2.5rem; /* text-4xl */
          line-height: 0.9;
        }
        
        @media (min-width: 768px) {
          .platform-title-responsive {
            font-size: 3rem; /* text-5xl */
            line-height: 0.9;
          }
        }
        
        @media (min-width: 1024px) {
          .platform-title-responsive {
            font-size: 3.5rem; /* text-6xl */
            line-height: 0.9;
          }
        }
        
        @media (min-width: 1280px) {
          .platform-title-responsive {
            font-size: 4rem; /* text-7xl */
            line-height: 0.9;
          }
        }
        
        /* Engine card hover effects */
        .engine-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .engine-card:hover {
          transform: translateY(-8px) scale(1.02);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }
        
        /* Glowing tower effects */
        .marketing-tower {
          background: linear-gradient(180deg, 
            rgba(244, 114, 182, 0.4) 0%, 
            rgba(236, 72, 153, 0.3) 30%, 
            rgba(219, 39, 119, 0.2) 60%, 
            transparent 100%
          );
          box-shadow: 
            0 0 60px rgba(244, 114, 182, 0.3),
            0 0 120px rgba(236, 72, 153, 0.2),
            inset 0 0 40px rgba(244, 114, 182, 0.1);
        }
        
        .sales-tower {
          background: linear-gradient(180deg, 
            rgba(96, 165, 250, 0.4) 0%, 
            rgba(59, 130, 246, 0.3) 30%, 
            rgba(37, 99, 235, 0.2) 60%, 
            transparent 100%
          );
          box-shadow: 
            0 0 60px rgba(96, 165, 250, 0.3),
            0 0 120px rgba(59, 130, 246, 0.2),
            inset 0 0 40px rgba(96, 165, 250, 0.1);
        }
        
        /* Neon connection lines */
        .neon-line {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(96, 165, 250, 0.6) 20%, 
            rgba(244, 114, 182, 0.6) 80%, 
            transparent 100%
          );
          filter: blur(1px);
          animation: pulse-neon 3s ease-in-out infinite;
        }
        
        @keyframes pulse-neon {
          0%, 100% { opacity: 0.3; transform: scaleX(1); }
          50% { opacity: 0.8; transform: scaleX(1.1); }
        }
        
        /* CTA Button responsive */
        .cta-platform {
          font-size: 0.875rem;
          padding: 0.5rem 1.25rem;
        }
        
        @media (min-width: 768px) {
          .cta-platform {
            font-size: 0.95rem;
            padding: 0.625rem 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .cta-platform {
            font-size: 1rem;
            padding: 0.75rem 1.75rem;
          }
        }
      `}</style>
      
      {/* Main Container */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        
        {/* Background Cityscape */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0a0a0a' }}>
          <img 
            src="/marketing-engine-neon-cityscape.png" 
            alt="Partnership Platform Foundation"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
            width="1600"
            height="900"
            style={{
              filter: 'brightness(0.8) contrast(1.2) saturate(1.1)',
              imageRendering: 'high-quality',
              transform: 'translateZ(0)',
              objectPosition: 'center 40%',
              opacity: '0.9',
              willChange: 'transform'
            }}
          />
          
          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        
        {/* Glowing Towers Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Marketing Engine Tower (Left/Pink) */}
          <div 
            className="absolute marketing-tower"
            style={{
              left: '25%',
              top: '30%',
              width: '120px',
              height: '300px',
              transform: 'translateX(-50%)',
              borderRadius: '8px',
              opacity: '0.7'
            }}
          />
          
          {/* Sales Engine Tower (Right/Blue) */}
          <div 
            className="absolute sales-tower"
            style={{
              right: '25%',
              top: '25%',
              width: '140px',
              height: '350px',
              transform: 'translateX(50%)',
              borderRadius: '8px',
              opacity: '0.7'
            }}
          />
          
          {/* Connection Lines to Horizon */}
          <div 
            className="absolute neon-line"
            style={{
              bottom: '20%',
              left: '30%',
              width: '40%',
              height: '2px'
            }}
          />
        </div>

        {/* Content Overlay */}
        <div className="relative w-full h-full flex items-center justify-center z-10">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            
            {/* Main Content */}
            <div className="max-w-4xl mx-auto mb-16">
              {/* Section Title */}
              <h2 
                className="platform-title-responsive text-white mb-8"
                style={{ 
                  fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  letterSpacing: '-0.04em',
                  lineHeight: '0.9',
                  textRendering: 'optimizeLegibility', 
                  WebkitFontSmoothing: 'antialiased',
                  fontWeight: '300'
                }}
              >
                Een krachtig fundament voor jouw groei
              </h2>
              
              {/* Subtitle */}
              <div className="mb-12">
                <p 
                  className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                  style={{ 
                    fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontWeight: '300',
                    lineHeight: '1.6'
                  }}
                >
                  Ons platform bestaat uit AI-gedreven SaaS-modules voor sales en marketing. <span className="text-gray-200" style={{ fontWeight: '400' }}>Plug-and-play inzetbaar</span>, direct resultaat, en klaar om mee te schalen met jouw business.
                </p>
              </div>
            </div>
            
            {/* Engine Cards */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
              
              {/* Marketing Engine Card */}
              <div className="engine-card group relative overflow-hidden rounded-2xl p-8 lg:p-10">
                {/* Card Background */}
                <div 
                  className="absolute inset-0 opacity-80"
                  style={{
                    background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
                    border: '1px solid rgba(244, 114, 182, 0.2)',
                    borderRadius: '1rem'
                  }}
                />
                
                {/* Pink accent glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />
                
                <div className="relative z-10">
                  <h3 
                    className="text-xl lg:text-2xl text-white mb-4"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
                      fontWeight: '400',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Marketing Engine
                  </h3>
                  
                  <p 
                    className="text-gray-300 leading-relaxed"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
                      fontWeight: '300',
                      lineHeight: '1.6'
                    }}
                  >
                    Automatiseer en schaal je marketingprocessen. Van campagnes tot analyse: alles wordt slimmer en sneller door AI.
                  </p>
                </div>
              </div>
              
              {/* Sales Engine Card */}
              <div className="engine-card group relative overflow-hidden rounded-2xl p-8 lg:p-10">
                {/* Card Background */}
                <div 
                  className="absolute inset-0 opacity-80"
                  style={{
                    background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                    border: '1px solid rgba(96, 165, 250, 0.2)',
                    borderRadius: '1rem'
                  }}
                />
                
                {/* Blue accent glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />
                
                <div className="relative z-10">
                  <h3 
                    className="text-xl lg:text-2xl text-white mb-4"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
                      fontWeight: '400',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Sales Engine
                  </h3>
                  
                  <p 
                    className="text-gray-300 leading-relaxed"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", sans-serif',
                      fontWeight: '300',
                      lineHeight: '1.6'
                    }}
                  >
                    Optimaliseer je sales pipeline. AI-agents en workflows zorgen voor meer leads, betere opvolging en hogere conversies.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center">
              <div className="relative group inline-block">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full blur-lg opacity-20 group-hover:opacity-35 transition-all duration-500 scale-105 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />
                
                {/* CTA Button */}
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      // Link naar engines detailpagina (aanpassen naar juiste route)
                      window.location.href = '/platform';
                    }
                  }}
                  className="relative inline-flex items-center justify-center cta-platform text-white font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-400 group-hover:shadow-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(244, 114, 182, 0.15) 100%)',
                    fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontWeight: '500',
                    backdropFilter: 'blur(16px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(96, 165, 250, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  <span className="relative z-10 mr-2">Ontdek de engines</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-400" />
                  
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.05) 100%)' }} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Subtle fade to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%)'
        }}
      />
    </section>
  );
};

export default PartnershipPlatformSection;