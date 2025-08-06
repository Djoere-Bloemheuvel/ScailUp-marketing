
import { memo, useEffect, useState } from 'react';
import { usePerformantIntersection } from '../../hooks/usePerformantIntersection';

const OptimizedCinematicAnimations = memo(() => {
  const { isIntersecting, setRef } = usePerformantIntersection({
    threshold: 0.1,
    rootMargin: '100px',
    triggerOnce: true
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      // Load animations only when needed
      requestIdleCallback(() => {
        setIsLoaded(true);
      });
    }
  }, [isIntersecting, isLoaded]);

  if (!isLoaded) {
    return <div ref={setRef} />;
  }

  return (
    <div ref={setRef}>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Optimized Cinematic Entrance - Consolidated */
          @keyframes cinematic-entrance-opt {
            0% {
              opacity: 0;
              transform: translate3d(0, 10px, 0) scale(0.95);
              filter: blur(1px);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
              filter: blur(0);
            }
          }

          /* Consolidated Float Animation - Single keyframe for all variants */
          @keyframes cinematic-float-opt {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translate3d(0, -10px, 0) scale(1.02);
              opacity: 1;
            }
          }

          /* Core Pulse - Consolidated */
          @keyframes cinematic-core-pulse-opt {
            0%, 100% {
              opacity: 0.6;
              transform: translate(-50%, -50%) scale(1);
              box-shadow: 0 0 20px rgba(34, 211, 238, 0.2), 0 0 40px rgba(147, 51, 234, 0.1);
            }
            50% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1.15);
              box-shadow: 0 0 40px rgba(34, 211, 238, 0.4), 0 0 80px rgba(147, 51, 234, 0.2);
            }
          }

          /* Applied Classes - Hardware Accelerated */
          .cinematic-entrance {
            animation: cinematic-entrance-opt 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            will-change: transform, opacity;
            backface-visibility: hidden;
          }

          .animate-cinematic-float-1 {
            animation: cinematic-float-opt 8s ease-in-out infinite;
            animation-delay: 0s;
          }

          .animate-cinematic-float-2 {
            animation: cinematic-float-opt 6s ease-in-out infinite;
            animation-delay: -2s;
          }

          .animate-cinematic-float-3 {
            animation: cinematic-float-opt 10s ease-in-out infinite;
            animation-delay: -5s;
          }

          .animate-cinematic-float-4 {
            animation: cinematic-float-opt 7s ease-in-out infinite;
            animation-delay: -3.5s;
          }

          .animate-cinematic-core-pulse {
            animation: cinematic-core-pulse-opt 4s ease-in-out infinite;
          }

          /* All floating animations share performance optimizations */
          .animate-cinematic-float-1,
          .animate-cinematic-float-2,
          .animate-cinematic-float-3,
          .animate-cinematic-float-4,
          .animate-cinematic-core-pulse {
            will-change: transform, opacity;
            backface-visibility: hidden;
            contain: layout style paint;
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .animate-cinematic-float-1,
            .animate-cinematic-float-2,
            .animate-cinematic-float-3,
            .animate-cinematic-float-4 {
              animation-duration: 4s;
            }
            .animate-cinematic-core-pulse {
              animation-duration: 2s;
            }
          }

          @media (max-width: 480px) {
            .animate-cinematic-core-pulse {
              box-shadow: none !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .cinematic-entrance,
            .animate-cinematic-float-1,
            .animate-cinematic-float-2,
            .animate-cinematic-float-3,
            .animate-cinematic-float-4,
            .animate-cinematic-core-pulse {
              animation: none !important;
            }
          }
        `
      }} />
    </div>
  );
});

OptimizedCinematicAnimations.displayName = 'OptimizedCinematicAnimations';

export default OptimizedCinematicAnimations;
