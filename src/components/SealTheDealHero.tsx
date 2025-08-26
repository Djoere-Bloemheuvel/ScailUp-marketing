import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Clock, TrendingUp, Target } from 'lucide-react';

const SealTheDealHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToApproach = () => {
    const approachSection = document.querySelector('#approach');
    if (approachSection) {
      approachSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };

  const stats = [
    { value: "Binnen 10 minuten verstuurd", label: "", description: "Verhoog je kans op conversie tot 2x door voorstellen direct na je salescall te versturen." },
    { value: "Eerste in de inbox", label: "", description: "35–50% van alle deals gaat naar degene die het voorstel als eerste opstuurt." },
    { value: "Momentum vasthouden", label: "", description: "Hou leads warm met directe, persoonlijke opvolging terwijl het gesprek nog vers is." },
    { value: "Altijd professioneel", label: "", description: "Strakke, foutloze voorstellen mét contract en betaallink in jouw branding." }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-0 overflow-hidden">
      
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Seal the Deal themed backlights - blue focus */}
      <div className="absolute inset-0 overflow-hidden opacity-50 sm:opacity-60">
        <div className="absolute top-1/4 left-1/2 w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] bg-gradient-to-r from-blue-500 to-blue-400 rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-blue-600 rounded-full blur-2xl sm:blur-3xl transform translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/4 w-[200px] h-[120px] sm:w-[300px] sm:h-[180px] md:w-[400px] md:h-[240px] lg:w-[500px] lg:h-[300px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl sm:blur-3xl opacity-80"></div>
      </div>
      
      {/* Speed to Lead themed ambient lights - Fast response feeling */}
      <div className="absolute inset-0 opacity-20 sm:opacity-25 md:opacity-30">
        {/* Fast response streams */}
        <div 
          className="absolute top-1/4 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-r from-transparent via-blue-500/15 to-cyan-600/20 rounded-full blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '0s', 
            animation: 'horizontal-flow 12s ease-in-out infinite, pulse-glow 8s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/3 right-0 w-3/4 h-12 sm:h-18 md:h-24 bg-gradient-to-l from-transparent via-cyan-600/25 to-blue-500/15 rounded-full blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '3s', 
            animation: 'horizontal-flow-reverse 10s ease-in-out infinite, pulse-glow 6s ease-in-out infinite reverse'
          }} 
        />
        
        {/* Lead notification glows */}
        <div 
          className="absolute top-1/2 left-1/4 w-40 h-24 sm:w-60 sm:h-36 md:w-80 md:h-48 bg-gradient-to-br from-blue-500/10 to-blue-400/15 rounded-lg sm:rounded-xl md:rounded-2xl blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '1s', 
            animation: 'envelope-drift 15s ease-in-out infinite, fade-pulse 7s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-48 h-16 sm:w-72 sm:h-24 md:w-96 md:h-32 bg-gradient-to-tl from-blue-400/20 to-blue-500/10 rounded-lg sm:rounded-xl blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '5s', 
            animation: 'envelope-drift-reverse 13s ease-in-out infinite, fade-pulse 9s ease-in-out infinite'
          }} 
        />
        
        {/* Small lead particle lights */}
        <div 
          className="absolute top-1/3 right-1/4 w-12 h-8 sm:w-18 sm:h-12 md:w-24 md:h-16 bg-gradient-to-r from-blue-500/25 to-blue-400/30 rounded-md sm:rounded-lg blur-xl sm:blur-2xl" 
          style={{ 
            animationDelay: '2s', 
            animation: 'message-float 18s ease-in-out infinite, quick-pulse 4s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/2 left-1/3 w-16 h-10 sm:w-24 sm:h-15 md:w-32 md:h-20 bg-gradient-to-l from-blue-400/25 to-blue-500/20 rounded-md sm:rounded-lg blur-xl sm:blur-2xl" 
          style={{ 
            animationDelay: '6s', 
            animation: 'message-float-reverse 16s ease-in-out infinite, quick-pulse 5s ease-in-out infinite'
          }} 
        />
      </div>
      
      {/* Subtle fade to black at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 55%, rgba(0, 0, 0, 0.6) 100%)'
        }}
      />
        
      {/* Hero Content */}
      <div className="relative w-full text-center z-20 px-2 sm:px-4 md:px-6 lg:px-8">
        
        {/* Split Layout - Mobile First Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Content */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, ease: "easeOut" }}
          >
            
            {/* Speed to Lead Headline - H1 - Mobile Optimized */}
            <h1 className="font-light text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              <span className="lg:hidden">
                {/* Mobile/Tablet: Larger sizing for better readability */}
                <div className="space-y-3">
                  <div className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
                    Seal the Deal
                  </div>
                  <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent tracking-[-0.01em] leading-normal antialiased pb-2">
                    Smart Deal Agent
                  </div>
                </div>
              </span>
              <span className="hidden lg:block">
                {/* Desktop: 2 lines */}
                <div className="space-y-2">
                  <div className="text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
                    Seal the Deal
                  </div>
                  <div className="text-4xl xl:text-5xl font-normal bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent tracking-[-0.01em] leading-normal antialiased pb-2">
                    Smart Deal Agent
                  </div>
                </div>
              </span>
            </h1>

            {/* Apple-style Description */}
            <div className="mb-6 sm:mb-8 md:mb-10 mt-2 sm:mt-3 md:mt-4 max-w-2xl lg:max-w-none">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Sluit deals terwijl ze nog warm zijn.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 font-normal leading-relaxed" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Met Seal the Deal stuur je direct na je salescall een professioneel document met voorstel, contract en betaallink. Op basis van een paar inputs wordt dit volledig automatisch gegenereerd, terwijl er tegelijk een overzichtelijk verslag in je CRM wordt gelogd.
              </p>
            </div>

            {/* CTA Buttons - Mobile First Responsive */}
            <div className="flex flex-col xs:flex-row sm:flex-row gap-4 xs:gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToApproach}
                className="w-full xs:w-auto sm:w-auto bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-6 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-3 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-sm xs:text-xs sm:text-sm md:text-base font-semibold rounded-full transition-all duration-300 group xs:max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-none lg:min-w-[220px]"
              >
                <span className="flex items-center justify-center">
                  Hoe het werkt
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              
              <button
                onClick={handleContactClick}
                className="w-full xs:w-auto sm:w-auto border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-6 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-3 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 text-sm xs:text-xs sm:text-sm md:text-base font-semibold rounded-full transition-all duration-300 xs:max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-none lg:min-w-[220px]"
              >
                Start nu
              </button>
            </div>
          </motion.div>

          {/* Right Side - Stats - Mobile Optimized */}
          <motion.div
            className="order-2 lg:order-2 mt-12 sm:mt-16 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, delay: 0.2, ease: "easeOut" }}
          >
            {/* Speed to Lead Proof Points - Mobile First Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-1 lg:space-y-4 xl:space-y-4 lg:gap-0 max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 lg:p-4 xl:p-5 min-h-[80px] sm:min-h-[90px] lg:min-h-[85px] xl:min-h-[95px] flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                >
                  <div className="text-lg sm:text-xl lg:text-lg xl:text-xl font-bold text-white mb-1 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-sm lg:text-sm xl:text-sm text-white/70 leading-tight font-medium">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-xs text-white/50 leading-tight mt-1">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes horizontal-flow {
          0%, 100% { transform: translateX(-50%) scaleX(0.8); opacity: 0.3; }
          50% { transform: translateX(0%) scaleX(1.2); opacity: 0.7; }
        }
        
        @keyframes horizontal-flow-reverse {
          0%, 100% { transform: translateX(25%) scaleY(0.8); opacity: 0.3; }
          50% { transform: translateX(-10%) scaleY(1.2); opacity: 0.7; }
        }
        
        @keyframes envelope-drift {
          0%, 100% { transform: translate(-10px, 10px) rotate(-1deg); opacity: 0.4; }
          33% { transform: translate(15px, -5px) rotate(0.5deg); opacity: 0.7; }
          66% { transform: translate(-5px, -15px) rotate(-0.5deg); opacity: 0.5; }
        }
        
        @keyframes envelope-drift-reverse {
          0%, 100% { transform: translate(10px, -10px) rotate(1deg); opacity: 0.4; }
          33% { transform: translate(-15px, 5px) rotate(-0.5deg); opacity: 0.7; }
          66% { transform: translate(5px, 15px) rotate(0.5deg); opacity: 0.5; }
        }
        
        @keyframes message-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-8px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes message-float-reverse {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(8px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; filter: blur(20px); }
          50% { opacity: 0.8; filter: blur(25px); }
        }
        
        @keyframes fade-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes quick-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default SealTheDealHero;