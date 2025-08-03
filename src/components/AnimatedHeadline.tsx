
import { useState, useEffect } from 'react';

const AnimatedHeadline = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [showCTAs, setShowCTAs] = useState(false);
  
  const words = ['denkt', 'bouwt', 'werkt'];
  
  useEffect(() => {
    if (currentWordIndex < words.length - 1) {
      const timer = setTimeout(() => {
        setIsGlitching(true);
        
        // After glitch effect completes, change word
        setTimeout(() => {
          setCurrentWordIndex(currentWordIndex + 1);
          setIsGlitching(false);
        }, 600);
      }, currentWordIndex === 0 ? 800 : 1200); // Initial delay, then between transitions
      
      return () => clearTimeout(timer);
    } else {
      // Show CTAs after final word is set
      const ctaTimer = setTimeout(() => {
        setShowCTAs(true);
      }, 500);
      
      return () => clearTimeout(ctaTimer);
    }
  }, [currentWordIndex]);

  return (
    <div className="text-center">
      {/* Headline with overflow hidden for clean glitch effect */}
      <div className="overflow-hidden mb-16">
        <h1 className="font-bold tracking-tight leading-[0.9] text-6xl md:text-8xl lg:text-9xl text-white">
          <span className="block">AI die </span>
          <span 
            className={`inline-block relative will-change-transform ${
              isGlitching ? 'glitch-animate' : ''
            }`}
            style={{
              textShadow: isGlitching ? '2px 0 #ff0000, -2px 0 #00ffff' : 'none'
            }}
          >
            {words[currentWordIndex]}.
          </span>
        </h1>
      </div>

      {/* CTA Buttons - appear after animation */}
      <div className={`transition-all duration-700 ${
        showCTAs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {showCTAs && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="group relative bg-white text-black hover:bg-gray-100 transition-all duration-700 px-10 py-6 text-xl font-semibold rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              <span className="relative z-10 flex items-center">
                Ontdek de mogelijkheden
                <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button className="relative text-gray-300 hover:text-white px-10 py-6 text-xl font-semibold rounded-full border border-gray-600 hover:border-gray-400 transition-all duration-700 group overflow-hidden bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08]">
              <span className="relative z-10 flex items-center">
                Plan een deepdive
                <svg className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedHeadline;
