
import { useEffect, useState } from 'react';

const AnimatedHeadline = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Sync with hero animation timing
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <h1 className={`font-bold tracking-tight leading-[0.9] text-center headline-unified ${isLoaded ? 'is-loaded' : ''}`}>
        <div className="text-6xl md:text-8xl lg:text-9xl text-white">
          AI die <span className="text-white">denkt</span>.
        </div>
      </h1>

      {/* Unified headline animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .headline-unified {
            opacity: 1; /* Start visible since it's part of the unified animation */
            will-change: transform, opacity;
          }

          /* Remove all glitch and word-by-word animations for clean unified effect */
          .headline-unified .glitch-effects {
            display: none;
          }

          /* Ensure headline is always visible and clean */
          .headline-unified span {
            opacity: 1;
            transform: none;
            transition: none;
          }
        `
      }} />
    </div>
  );
};

export default AnimatedHeadline;
