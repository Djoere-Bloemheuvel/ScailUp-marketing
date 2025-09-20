import React from 'react';

const FoundersSection = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle Ambient Lights - All Engine Colors */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Top-left: Buildrs Blue */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0046FF] rounded-full blur-3xl" />
        
        {/* Top-right: Speed to Lead Purple */}
        <div className="absolute top-1/3 right-1/5 w-80 h-80 bg-[#8B5CF6] rounded-full blur-3xl" />
        
        {/* Bottom-left: Speed to Lead Pink */}
        <div className="absolute bottom-1/3 left-1/5 w-72 h-72 bg-[#DB2777] rounded-full blur-3xl" />
        
        {/* Bottom-right: Lead Engine Magenta */}
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C82AFF] rounded-full blur-3xl" />
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
          
          {/* Portrait Section - JEX Style */}
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

          {/* Quote Section - JEX Style */}
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
  );
};

export default FoundersSection;