
import { useEffect, useState } from 'react';

const AnimatedHeadline = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const words = ['denkt', 'bouwt', 'werkt'];

  useEffect(() => {
    if (animationComplete) return;

    const sequence = async () => {
      // Snellere start - wacht minder
      await new Promise(resolve => setTimeout(resolve, 100));

      for (let i = 0; i < words.length; i++) {
        if (i > 0) {
          // Snellere glitch-animatie
          setIsGlitching(true);
          await new Promise(resolve => setTimeout(resolve, 120));
          setIsGlitching(false);
        }

        // Toon het nieuwe woord
        setCurrentWordIndex(i);

        // Snellere overgang naar volgende woord
        if (i < words.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 180));
        }
      }

      setAnimationComplete(true);
    };

    sequence();
  }, []);

  // CSS animations moved to index.css to prevent build issues in Astro

  return (
    <div className="relative">
      {/* CSS animations now imported from index.css - no more dangerouslySetInnerHTML */}

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
