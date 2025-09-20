import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Clock, TrendingUp, Target } from 'lucide-react';

const InboxToMeetingHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };

  const stats = [
    { value: "100%", label: "geautomatiseerd", description: "volledig autonoom" },
    { value: "5x", label: "meer meetings", description: "voorspelbare pipeline" },
    { value: "24/7", label: "actief", description: "nooit meer gemiste leads" },
    { value: "Human-like", label: "personalisatie", description: "op schaal" }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-0 overflow-hidden">
      
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Inbox to Meeting unique backlights - email envelope inspired shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-40 sm:opacity-45">
        <div className="absolute top-1/4 left-1/3 w-[250px] h-[160px] sm:w-[320px] sm:h-[200px] md:w-[450px] md:h-[280px] lg:w-[600px] lg:h-[380px] bg-gradient-to-br from-blue-400 to-blue-500 rounded-[2rem] blur-2xl sm:blur-3xl transform -rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/5 w-[200px] h-[140px] sm:w-[280px] sm:h-[180px] md:w-[380px] md:h-[240px] lg:w-[500px] lg:h-[320px] bg-blue-500 rounded-[1.5rem] blur-2xl sm:blur-3xl transform rotate-6 translate-x-1/6"></div>
        <div className="absolute top-1/2 left-1/6 w-[180px] h-[120px] sm:w-[240px] sm:h-[160px] md:w-[320px] md:h-[200px] lg:w-[420px] lg:h-[260px] bg-gradient-to-tl from-blue-400 to-blue-500 rounded-[1.2rem] blur-2xl sm:blur-3xl opacity-60 transform rotate-3"></div>
        <div className="absolute bottom-1/5 left-1/2 w-[160px] h-[100px] sm:w-[200px] sm:h-[130px] md:w-[280px] md:h-[180px] lg:w-[360px] lg:h-[230px] bg-blue-400 rounded-[2.5rem] blur-3xl opacity-50 transform -rotate-8 -translate-x-1/4"></div>
      </div>
      
      {/* Inbox to Meeting themed ambient lights - Email flow feeling */}
      <div className="absolute inset-0 opacity-20 sm:opacity-25 md:opacity-30">
        {/* Email flow streams */}
        <div 
          className="absolute top-1/4 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-r from-transparent via-blue-400/15 to-blue-500/20 rounded-full blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '0s', 
            animation: 'horizontal-flow 12s ease-in-out infinite, pulse-glow 8s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/3 right-0 w-3/4 h-12 sm:h-18 md:h-24 bg-gradient-to-l from-transparent via-blue-500/25 to-blue-400/15 rounded-full blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '3s', 
            animation: 'horizontal-flow-reverse 10s ease-in-out infinite, pulse-glow 6s ease-in-out infinite reverse'
          }} 
        />
        
        {/* Email notification glows */}
        <div 
          className="absolute top-1/2 left-1/4 w-40 h-24 sm:w-60 sm:h-36 md:w-80 md:h-48 bg-gradient-to-br from-blue-400/10 to-blue-500/15 rounded-lg sm:rounded-xl md:rounded-2xl blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '1s', 
            animation: 'envelope-drift 15s ease-in-out infinite, fade-pulse 7s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-48 h-16 sm:w-72 sm:h-24 md:w-96 md:h-32 bg-gradient-to-tl from-blue-500/20 to-blue-400/10 rounded-lg sm:rounded-xl blur-2xl sm:blur-3xl" 
          style={{ 
            animationDelay: '5s', 
            animation: 'envelope-drift-reverse 13s ease-in-out infinite, fade-pulse 9s ease-in-out infinite'
          }} 
        />
        
        {/* Small email particle lights */}
        <div 
          className="absolute top-1/3 right-1/4 w-12 h-8 sm:w-18 sm:h-12 md:w-24 md:h-16 bg-gradient-to-r from-blue-400/25 to-blue-500/30 rounded-md sm:rounded-lg blur-xl sm:blur-2xl" 
          style={{ 
            animationDelay: '2s', 
            animation: 'message-float 18s ease-in-out infinite, quick-pulse 4s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/2 left-1/3 w-16 h-10 sm:w-24 sm:h-15 md:w-32 md:h-20 bg-gradient-to-l from-blue-500/25 to-blue-400/20 rounded-md sm:rounded-lg blur-xl sm:blur-2xl" 
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
            
            {/* Inbox to Meeting Headline - H1 - Mobile Optimized */}
            <h1 className="font-light text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              <span className="lg:hidden">
                {/* Mobile/Tablet: Larger sizing for better readability */}
                <div className="space-y-3">
                  <div className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
                    Inbox to Meeting
                  </div>
                  <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent tracking-[-0.01em] leading-normal antialiased pb-2">
                    Outbound Email Agent
                  </div>
                </div>
              </span>
              <span className="hidden lg:block">
                {/* Desktop: 2 lines */}
                <div className="space-y-2">
                  <div className="text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
                    Inbox to Meeting
                  </div>
                  <div className="text-4xl xl:text-5xl font-normal bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent tracking-[-0.01em] leading-normal antialiased pb-2">
                    Outbound Email Agent
                  </div>
                </div>
              </span>
            </h1>

            {/* Apple-style Description */}
            <div className="mb-6 sm:mb-8 md:mb-10 mt-2 sm:mt-3 md:mt-4 max-w-2xl lg:max-w-none">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Van koude e-mails naar voorspelbare meetings.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 font-normal leading-relaxed" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Deze autonome AI-agent transformeert outbound e-mail van giswerk naar voorspelbare pipeline. Van prospect research tot meeting booking - volledig geautomatiseerd, hyperpersoonlijk op schaal.
              </p>
            </div>

            {/* CTA Button - Single Primary CTA */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-12 md:px-16 lg:px-20 py-3 md:py-3.5 text-base md:text-lg font-semibold rounded-full transition-all duration-300 group shadow-lg shadow-blue-400/25"
              >
                <span className="flex items-center justify-center">
                  Neem contact op
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
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
            {/* Inbox to Meeting Proof Points - Mobile First Grid */}
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

export default InboxToMeetingHero;