
import { memo, useEffect, useState } from 'react';
import { usePerformantIntersection } from '../../hooks/usePerformantIntersection';

const OptimizedHoverAnimations = memo(() => {
  const { isIntersecting, setRef } = usePerformantIntersection({
    threshold: 0.1,
    triggerOnce: true
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
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
          /* Consolidated Hover System - Hardware accelerated */
          .optimized-hover-base {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform, opacity, box-shadow;
            backface-visibility: hidden;
            transform: translateZ(0);
          }

          /* Card Hover - Single optimized version */
          .optimized-card-hover {
            transition:
              transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
              background-color 0.4s ease-out,
              border-color 0.4s ease-out,
              box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform, background-color, border-color, box-shadow;
          }

          .optimized-card-hover:hover {
            transform: translateY(-8px) scale(1.02);
          }

          /* Button Hover - Optimized version */
          .optimized-button-hover {
            position: relative;
            overflow: hidden;
            transition:
              transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform, box-shadow;
          }

          .optimized-button-hover:hover {
            transform: translateY(-4px) scale(1.02);
          }

          .optimized-button-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .optimized-button-hover:hover::before {
            left: 100%;
          }

          /* Icon Hover - Consolidated */
          .optimized-icon-hover {
            transition:
              transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
              color 0.3s ease-out,
              filter 0.4s ease-out;
            will-change: transform, color, filter;
          }

          .optimized-icon-hover:hover {
            transform: rotate(12deg) scale(1.1);
            filter: drop-shadow(0 4px 20px rgba(59, 130, 246, 0.5));
          }

          /* Scale Hover - Simple and effective */
          .optimized-scale-hover {
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            will-change: transform;
          }

          .optimized-scale-hover:hover {
            transform: scale(1.02);
          }

          /* Glow Hover - Performance optimized */
          .optimized-glow-hover {
            transition: box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: box-shadow;
          }

          .optimized-glow-hover:hover {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
          }

          /* Floating with hover pause */
          .optimized-floating-hover {
            animation: optimized-float 6s ease-in-out infinite;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .optimized-floating-hover:hover {
            animation-play-state: paused;
            transform: translateY(-12px) scale(1.05);
          }

          @keyframes optimized-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          /* Responsive optimizations */
          @media (max-width: 480px) {
            .optimized-button-hover::before {
              display: none;
            }
            .optimized-hover-base,
            .optimized-card-hover,
            .optimized-button-hover {
              transition-duration: 0.2s;
            }
          }

          @media (hover: none) {
            .optimized-card-hover:hover,
            .optimized-button-hover:hover,
            .optimized-icon-hover:hover,
            .optimized-scale-hover:hover,
            .optimized-glow-hover:hover {
              transform: none;
              box-shadow: none;
              filter: none;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .optimized-floating-hover {
              animation: none !important;
            }
          }
        `
      }} />
    </div>
  );
});

OptimizedHoverAnimations.displayName = 'OptimizedHoverAnimations';

export default OptimizedHoverAnimations;
