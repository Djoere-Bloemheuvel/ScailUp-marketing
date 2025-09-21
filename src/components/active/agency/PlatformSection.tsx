import React from 'react';
import { ArrowRight, Sparkles, Zap, Eye } from 'lucide-react';

const PlatformSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
      
      {/* Subtle ambient backlights at corners */}
      <div className="absolute inset-0 opacity-25 z-0">
        {/* Top-left corner - Lead Engine blue */}
        <div className="absolute top-[8%] left-[3%] w-72 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8.5s' }} />
        
        {/* Top-right corner - Speed to Lead pink */}
        <div className="absolute top-[12%] right-[7%] w-80 h-72 bg-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '11.2s', animationDelay: '3.7s' }} />
        
        {/* Bottom-left corner - Lead Engine blue */}
        <div className="absolute bottom-[15%] left-[6%] w-64 h-80 bg-blue-500/18 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '13.1s', animationDelay: '6.3s' }} />
        
        {/* Bottom-right corner - Speed to Lead pink */}
        <div className="absolute bottom-[9%] right-[4%] w-88 h-88 bg-pink-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9.8s', animationDelay: '1.4s' }} />
        
        {/* Extra subtle middle accent */}
        <div className="absolute top-[35%] right-[15%] w-56 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15.7s', animationDelay: '8.2s' }} />
      </div>
      
      {/* Glass Container */}
      <div className="relative w-[90vw] h-[70vh] rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 z-10"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        
        {/* Background image inside glass */}
        <div className="absolute inset-0">
          <img 
            src="/platform-dashboard-fullwidth.png" 
            alt="Buildrs AI Platform Dashboard"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.8) contrast(1.1) blur(1px)',
              imageRendering: 'high-quality'
            }}
          />
          
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30" />
        </div>

        {/* Content overlay */}
        <div className="relative w-full h-full flex items-center justify-center z-10">
          
          {/* Content Container */}
          <div className="text-center px-8">
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight tracking-[-0.02em]" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
              Het <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">Buildrs Platform</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-200 font-light leading-relaxed mb-6 max-w-2xl mx-auto">
              Jouw complete AI automatisering hub in één overzichtelijk dashboard
            </p>

            {/* CTA */}
            <div className="relative group inline-block">
              <div className="absolute inset-0 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 scale-110" style={{ background: 'linear-gradient(to right, #06b6d4, #3b82f6, #8b5cf6)' }} />
              
              <button className="relative inline-flex items-center px-6 py-3 text-white font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-0"
                style={{ 
                  background: 'linear-gradient(to right, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  boxShadow: '0 20px 40px -10px rgba(6, 182, 212, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)' 
                }}
              >
                <span className="mr-2">Platform Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;