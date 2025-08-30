import React from 'react';

const AppleStyleTransition: React.FC = () => {
  return (
    <section className="relative py-20 bg-black overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-4">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight"
            style={{ 
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '200'
            }}
          >
            Alles samen in <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-normal">één platform.</span>
          </h2>
          
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}
          >
            Custom AI agents + outbound automatisering + lead management.
            <br />
            <span className="text-white/90">Geïntegreerd in één overzichtelijk platform.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppleStyleTransition;