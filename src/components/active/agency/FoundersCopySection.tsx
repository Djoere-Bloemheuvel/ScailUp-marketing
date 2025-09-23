import React from 'react';

const FoundersCopySection = () => {
  return (
    <>
      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .founder-bg {
            background:
              radial-gradient(450px 350px at 20% 40%, rgba(0,70,255,0.16), rgba(0,70,255,0) 55%),
              radial-gradient(450px 350px at 80% 40%, rgba(255,20,147,0.16), rgba(255,20,147,0) 55%),
              linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.92) 100%),
              #000 !important;
          }
        }
      `}</style>
    <section 
      className="relative w-full py-20 lg:py-32 overflow-hidden founder-bg"
      style={{
        background: `
          radial-gradient(600px 500px at 15% 45%, rgba(0,70,255,0.18), rgba(0,70,255,0) 60%),
          radial-gradient(600px 500px at 85% 45%, rgba(255,20,147,0.18), rgba(255,20,147,0) 60%),
          linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.9) 100%),
          #000
        `,
        boxShadow: 'inset 0 0 220px 60px rgba(0,0,0,0.9)'
      }}
    >
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
          
          {/* Portrait Section */}
          <div className="flex-shrink-0">
            <div className="w-80 h-96 lg:w-96 lg:h-[28rem] xl:w-[26rem] xl:h-[32rem] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
              <img 
                src="/ceo-portrait.png" 
                alt="Djoere Bloemendaal - CEO & Founder van Buildrs"
                className="w-full h-full object-cover"
                style={{
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            
            {/* Main Quote */}
            <div className="max-w-2xl">
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/85 leading-tight mb-8" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
                "<span className="text-white" style={{ color: '#FFFFFF' }}>Bij Buildrs denken we in systemen.</span> <span className="text-white/70">We bouwen AI-software die ondernemers de vrijheid geeft om écht te ondernemen.</span>"
              </blockquote>
            </div>

            {/* Name and Title */}
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                Djoere Bloemheuvel
              </h3>
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                CEO & Founder
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FoundersCopySection;