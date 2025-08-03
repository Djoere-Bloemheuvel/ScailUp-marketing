
import { useEffect, useState } from 'react';

const AnimatedHeadline = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const words = ['denkt', 'bouwt', 'werkt'];

  useEffect(() => {
    if (animationComplete) return;

    const sequence = async () => {
      // Wacht even voor de eerste transitie
      await new Promise(resolve => setTimeout(resolve, 300));
      
      for (let i = 0; i < words.length; i++) {
        if (i > 0) {
          // Start glitch-animatie
          setIsGlitching(true);
          await new Promise(resolve => setTimeout(resolve, 200));
          setIsGlitching(false);
        }
        
        // Toon het nieuwe woord
        setCurrentWordIndex(i);
        
        // Wacht voordat we naar het volgende woord gaan (behalve bij het laatste woord)
        if (i < words.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
      
      setAnimationComplete(true);
    };

    sequence();
  }, []);

  const cssStyles = `
    /* RGB Split Animations */
    .glitch-rgb-red {
      animation: glitch-rgb-red 200ms linear infinite;
    }
    
    .glitch-rgb-green {
      animation: glitch-rgb-green 200ms linear infinite;
    }
    
    .glitch-rgb-blue {
      animation: glitch-rgb-blue 200ms linear infinite;
    }

    /* Slice Animations */
    .glitch-slice-1 {
      animation: glitch-slice-1 200ms linear infinite;
      clip-path: polygon(0% 0%, 100% 0%, 100% 45%, 0% 45%);
    }
    
    .glitch-slice-2 {
      animation: glitch-slice-2 200ms linear infinite;
      clip-path: polygon(0% 55%, 100% 55%, 100% 100%, 0% 100%);
    }

    /* Scanline Animation */
    .glitch-scanline {
      animation: glitch-scanline 100ms linear infinite;
    }

    @keyframes glitch-rgb-red {
      0% { transform: translate(-2px, 1px) skewX(-1deg); opacity: 0.8; }
      20% { transform: translate(2px, -1px) skewX(1deg); opacity: 0.9; }
      40% { transform: translate(-1px, 2px) skewX(-0.5deg); opacity: 0.7; }
      60% { transform: translate(3px, -2px) skewX(1.5deg); opacity: 0.8; }
      80% { transform: translate(-2px, 1px) skewX(-1deg); opacity: 0.9; }
      100% { transform: translate(1px, -1px) skewX(0.5deg); opacity: 0.7; }
    }

    @keyframes glitch-rgb-green {
      0% { transform: translate(1px, -2px) skewY(1deg); opacity: 0.7; }
      25% { transform: translate(-2px, 1px) skewY(-1deg); opacity: 0.8; }
      50% { transform: translate(2px, 1px) skewY(0.5deg); opacity: 0.6; }
      75% { transform: translate(-1px, -2px) skewY(-1.5deg); opacity: 0.9; }
      100% { transform: translate(1px, 2px) skewY(1deg); opacity: 0.7; }
    }

    @keyframes glitch-rgb-blue {
      0% { transform: translate(2px, 1px) skewX(0.5deg); opacity: 0.9; }
      30% { transform: translate(-1px, -2px) skewX(-1deg); opacity: 0.6; }
      60% { transform: translate(3px, 1px) skewX(1.5deg); opacity: 0.8; }
      90% { transform: translate(-2px, -1px) skewX(-0.5deg); opacity: 0.7; }
      100% { transform: translate(1px, 2px) skewX(1deg); opacity: 0.8; }
    }

    @keyframes glitch-slice-1 {
      0% { transform: translateX(0px); }
      10% { transform: translateX(-5px) scaleX(1.05); }
      20% { transform: translateX(3px) scaleX(0.95); }
      30% { transform: translateX(-2px) scaleX(1.02); }
      40% { transform: translateX(4px) scaleX(0.98); }
      50% { transform: translateX(-3px) scaleX(1.03); }
      60% { transform: translateX(2px) scaleX(0.97); }
      70% { transform: translateX(-4px) scaleX(1.01); }
      80% { transform: translateX(3px) scaleX(0.99); }
      90% { transform: translateX(-1px) scaleX(1.02); }
      100% { transform: translateX(0px) scaleX(1); }
    }

    @keyframes glitch-slice-2 {
      0% { transform: translateX(0px); }
      15% { transform: translateX(4px) scaleX(0.96); }
      30% { transform: translateX(-3px) scaleX(1.04); }
      45% { transform: translateX(2px) scaleX(0.98); }
      60% { transform: translateX(-4px) scaleX(1.02); }
      75% { transform: translateX(3px) scaleX(0.97); }
      90% { transform: translateX(-1px) scaleX(1.01); }
      100% { transform: translateX(0px) scaleX(1); }
    }

    @keyframes glitch-scanline {
      0% { top: 0%; height: 2px; opacity: 0.8; }
      25% { top: 25%; height: 1px; opacity: 1; }
      50% { top: 50%; height: 3px; opacity: 0.6; }
      75% { top: 75%; height: 1px; opacity: 0.9; }
      100% { top: 100%; height: 2px; opacity: 0.7; }
    }
  `;

  return (
    <div className="relative">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      <h1 className="font-bold tracking-tight leading-[0.9] text-center">
        <div className="text-6xl md:text-8xl lg:text-9xl text-white">
          AI die{' '}
          <span className="relative inline-block">
            <span 
              className={`relative z-20 transition-opacity duration-75 ${
                isGlitching ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {words[currentWordIndex]}.
            </span>
            
            {/* Glitch Layers */}
            {isGlitching && (
              <>
                {/* RGB Split Layers */}
                <span 
                  className="absolute top-0 left-0 z-10 text-red-500 glitch-rgb-red"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {words[currentWordIndex]}.
                </span>
                
                <span 
                  className="absolute top-0 left-0 z-10 text-green-500 glitch-rgb-green"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {words[currentWordIndex]}.
                </span>
                
                <span 
                  className="absolute top-0 left-0 z-10 text-blue-500 glitch-rgb-blue"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {words[currentWordIndex]}.
                </span>

                {/* Slice Layers */}
                <span 
                  className="absolute top-0 left-0 z-15 text-white glitch-slice-1"
                >
                  {words[currentWordIndex]}.
                </span>
                
                <span 
                  className="absolute top-0 left-0 z-15 text-white glitch-slice-2"
                >
                  {words[currentWordIndex]}.
                </span>

                {/* Scanline effect */}
                <div className="absolute inset-0 z-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-60 h-1 glitch-scanline"></div>
              </>
            )}
          </span>
        </div>
      </h1>
    </div>
  );
};

export default AnimatedHeadline;
