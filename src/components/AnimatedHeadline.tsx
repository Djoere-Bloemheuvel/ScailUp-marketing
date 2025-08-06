
import { useEffect, useState, useMemo, useCallback } from 'react';

const AnimatedHeadline = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Memoize the words array to prevent recreation
  const words = useMemo(() => ['denkt', 'bouwt', 'werkt'], []);

  // Memoized current word to prevent unnecessary re-renders
  const currentWord = useMemo(() => words[currentWordIndex], [words, currentWordIndex]);

  // Memoized animation sequence for better performance
  const runAnimationSequence = useCallback(async () => {
    if (animationComplete) return;

    // Optimized timing for smoother experience
    await new Promise(resolve => setTimeout(resolve, 150));

    for (let i = 0; i < words.length; i++) {
      if (i > 0) {
        // Slightly longer glitch for better visual impact
        setIsGlitching(true);
        await new Promise(resolve => setTimeout(resolve, 150));
        setIsGlitching(false);
      }

      // Show the new word
      setCurrentWordIndex(i);

      // Smooth transition to next word
      if (i < words.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }

    setAnimationComplete(true);
  }, [words, animationComplete]);

  useEffect(() => {
    runAnimationSequence();
  }, [runAnimationSequence]);

  // Memoized CSS styles for better performance
  const cssStyles = useMemo(() => `
    /* Optimized RGB Split Animations with hardware acceleration */
    .glitch-rgb-red {
      animation: glitch-rgb-red 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
      will-change: transform, opacity;
      backface-visibility: hidden;
    }

    .glitch-rgb-green {
      animation: glitch-rgb-green 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
      will-change: transform, opacity;
      backface-visibility: hidden;
    }

    .glitch-rgb-blue {
      animation: glitch-rgb-blue 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
      will-change: transform, opacity;
      backface-visibility: hidden;
    }

    /* Enhanced Slice Animations with better performance */
    .glitch-slice-1 {
      animation: glitch-slice-1 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
      clip-path: polygon(0% 0%, 100% 0%, 100% 45%, 0% 45%);
      will-change: transform;
      backface-visibility: hidden;
    }

    .glitch-slice-2 {
      animation: glitch-slice-2 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
      clip-path: polygon(0% 55%, 100% 55%, 100% 100%, 0% 100%);
      will-change: transform;
      backface-visibility: hidden;
    }

    /* Smoother Scanline Animation */
    .glitch-scanline {
      animation: glitch-scanline 120ms ease-in-out infinite;
      will-change: transform, opacity;
    }

    /* Enhanced keyframes with hardware acceleration using translate3d */
    @keyframes glitch-rgb-red {
      0% { transform: translate3d(-2px, 1px, 0) skewX(-1deg); opacity: 0.8; }
      20% { transform: translate3d(2px, -1px, 0) skewX(1deg); opacity: 0.9; }
      40% { transform: translate3d(-1px, 2px, 0) skewX(-0.5deg); opacity: 0.7; }
      60% { transform: translate3d(3px, -2px, 0) skewX(1.5deg); opacity: 0.8; }
      80% { transform: translate3d(-2px, 1px, 0) skewX(-1deg); opacity: 0.9; }
      100% { transform: translate3d(1px, -1px, 0) skewX(0.5deg); opacity: 0.7; }
    }

    @keyframes glitch-rgb-green {
      0% { transform: translate3d(1px, -2px, 0) skewY(1deg); opacity: 0.7; }
      25% { transform: translate3d(-2px, 1px, 0) skewY(-1deg); opacity: 0.8; }
      50% { transform: translate3d(2px, 1px, 0) skewY(0.5deg); opacity: 0.6; }
      75% { transform: translate3d(-1px, -2px, 0) skewY(-1.5deg); opacity: 0.9; }
      100% { transform: translate3d(1px, 2px, 0) skewY(1deg); opacity: 0.7; }
    }

    @keyframes glitch-rgb-blue {
      0% { transform: translate3d(2px, 1px, 0) skewX(0.5deg); opacity: 0.9; }
      30% { transform: translate3d(-1px, -2px, 0) skewX(-1deg); opacity: 0.6; }
      60% { transform: translate3d(3px, 1px, 0) skewX(1.5deg); opacity: 0.8; }
      90% { transform: translate3d(-2px, -1px, 0) skewX(-0.5deg); opacity: 0.7; }
      100% { transform: translate3d(1px, 2px, 0) skewX(1deg); opacity: 0.8; }
    }

    @keyframes glitch-slice-1 {
      0% { transform: translate3d(0, 0, 0) scaleX(1); }
      10% { transform: translate3d(-5px, 0, 0) scaleX(1.05); }
      20% { transform: translate3d(3px, 0, 0) scaleX(0.95); }
      30% { transform: translate3d(-2px, 0, 0) scaleX(1.02); }
      40% { transform: translate3d(4px, 0, 0) scaleX(0.98); }
      50% { transform: translate3d(-3px, 0, 0) scaleX(1.03); }
      60% { transform: translate3d(2px, 0, 0) scaleX(0.97); }
      70% { transform: translate3d(-4px, 0, 0) scaleX(1.01); }
      80% { transform: translate3d(3px, 0, 0) scaleX(0.99); }
      90% { transform: translate3d(-1px, 0, 0) scaleX(1.02); }
      100% { transform: translate3d(0, 0, 0) scaleX(1); }
    }

    @keyframes glitch-slice-2 {
      0% { transform: translate3d(0, 0, 0) scaleX(1); }
      15% { transform: translate3d(4px, 0, 0) scaleX(0.96); }
      30% { transform: translate3d(-3px, 0, 0) scaleX(1.04); }
      45% { transform: translate3d(2px, 0, 0) scaleX(0.98); }
      60% { transform: translate3d(-4px, 0, 0) scaleX(1.02); }
      75% { transform: translate3d(3px, 0, 0) scaleX(0.97); }
      90% { transform: translate3d(-1px, 0, 0) scaleX(1.01); }
      100% { transform: translate3d(0, 0, 0) scaleX(1); }
    }

    @keyframes glitch-scanline {
      0% { transform: translate3d(0, 0%, 0); height: 2px; opacity: 0.8; }
      25% { transform: translate3d(0, 25%, 0); height: 1px; opacity: 1; }
      50% { transform: translate3d(0, 50%, 0); height: 3px; opacity: 0.6; }
      75% { transform: translate3d(0, 75%, 0); height: 1px; opacity: 0.9; }
      100% { transform: translate3d(0, 100%, 0); height: 2px; opacity: 0.7; }
    }

    /* Accessibility - Reduce motion */
    @media (prefers-reduced-motion: reduce) {
      .glitch-rgb-red,
      .glitch-rgb-green,
      .glitch-rgb-blue,
      .glitch-slice-1,
      .glitch-slice-2,
      .glitch-scanline {
        animation: none;
      }
    }
  `, []);

  return (
    <div className="relative">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      <h1 className="font-bold tracking-tight leading-[0.9] text-center">
        <div className="text-6xl md:text-8xl lg:text-9xl text-white">
          AI die{' '}
          <span className="relative inline-block">
            <span
              className={`relative z-20 transition-opacity duration-100 ease-out ${
                isGlitching ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {currentWord}.
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
                  {currentWord}.
                </span>

                <span
                  className="absolute top-0 left-0 z-10 text-green-500 glitch-rgb-green"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {currentWord}.
                </span>

                <span
                  className="absolute top-0 left-0 z-10 text-blue-500 glitch-rgb-blue"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {currentWord}.
                </span>

                {/* Slice Layers */}
                <span
                  className="absolute top-0 left-0 z-15 text-white glitch-slice-1"
                >
                  {currentWord}.
                </span>

                <span
                  className="absolute top-0 left-0 z-15 text-white glitch-slice-2"
                >
                  {currentWord}.
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
