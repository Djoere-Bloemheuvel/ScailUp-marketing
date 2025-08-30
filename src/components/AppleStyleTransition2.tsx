import React from 'react';

const AppleStyleTransition2: React.FC = () => {
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
            Dit kunnen we <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 bg-clip-text text-transparent font-normal">voor je bouwen.</span>
          </h2>
          
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}
          >
            Elke outbound workflow. Elke integratie. Elk AI-systeem.
            <br />
            <span className="text-white/90">Als het mogelijk is, maken we het voor je.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppleStyleTransition2;