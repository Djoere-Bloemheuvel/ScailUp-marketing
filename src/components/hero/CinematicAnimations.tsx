
import React from 'react';

const CinematicAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Cinematic Entrance Animation */
        @keyframes cinematic-entrance {
          0% { 
            opacity: 0; 
            transform: scale(0.85) translateY(20px); 
            filter: blur(8px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
            filter: blur(0px); 
          }
        }

        /* AI Face Specific Animations */
        @keyframes cinematic-face-pulse {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1); 
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.05); 
          }
          50% { 
            opacity: 0.6; 
            transform: scale(1.01); 
            box-shadow: 0 0 60px rgba(34, 211, 238, 0.08); 
          }
        }

        @keyframes cinematic-fragment-float {
          0%, 100% { 
            opacity: 0.15; 
            transform: translateY(0) rotate(0deg) scale(1); 
          }
          33% { 
            opacity: 0.25; 
            transform: translateY(-3px) rotate(2deg) scale(1.05); 
          }
          66% { 
            opacity: 0.18; 
            transform: translateY(2px) rotate(-1deg) scale(0.98); 
          }
        }

        @keyframes cinematic-matrix-float {
          0%, 100% { 
            opacity: 0.12; 
            transform: translateY(0) translateX(0) scale(1); 
          }
          25% { 
            opacity: 0.20; 
            transform: translateY(-2px) translateX(1px) scale(1.02); 
          }
          50% { 
            opacity: 0.15; 
            transform: translateY(-1px) translateX(-1px) scale(1.01); 
          }
          75% { 
            opacity: 0.18; 
            transform: translateY(1px) translateX(0.5px) scale(0.99); 
          }
        }

        @keyframes cinematic-eye-glow {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1); 
            box-shadow: 0 0 8px currentColor; 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.15); 
            box-shadow: 0 0 16px currentColor, 0 0 24px currentColor; 
          }
        }

        @keyframes cinematic-face-scan {
          0% { 
            transform: translateY(-30px); 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(50px); 
            opacity: 0; 
          }
        }

        @keyframes cinematic-face-aura {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.03); 
          }
        }

        @keyframes cinematic-data-formation {
          0%, 85%, 100% { 
            opacity: 0; 
            transform: translateX(0); 
          }
          90% { 
            opacity: 0.08; 
            transform: translateX(1px); 
          }
          95% { 
            opacity: 0.04; 
            transform: translateX(-0.5px); 
          }
        }

        /* Core Processing Animations */
        @keyframes cinematic-core-pulse {
          0%, 100% { 
            opacity: 0.6; 
            transform: translate(-50%, -50%) scale(1); 
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.1); 
          }
          50% { 
            opacity: 0.8; 
            transform: translate(-50%, -50%) scale(1.02); 
            box-shadow: 0 0 30px rgba(34, 211, 238, 0.15); 
          }
        }

        @keyframes cinematic-ring-pulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: translate(-50%, -50%) scale(1) rotate(0deg); 
          }
          50% { 
            opacity: 0.5; 
            transform: translate(-50%, -50%) scale(1.01) rotate(1deg); 
          }
        }

        /* Circuit Pulse Animations */
        @keyframes cinematic-pulse-fast {
          0%, 100% { 
            opacity: 0.4; 
            box-shadow: 0 0 8px currentColor; 
          }
          50% { 
            opacity: 0.8; 
            box-shadow: 0 0 16px currentColor; 
          }
        }

        @keyframes cinematic-pulse-medium {
          0%, 100% { 
            opacity: 0.35; 
            box-shadow: 0 0 6px currentColor; 
          }
          50% { 
            opacity: 0.7; 
            box-shadow: 0 0 12px currentColor; 
          }
        }

        @keyframes cinematic-pulse-slow {
          0%, 100% { 
            opacity: 0.25; 
            box-shadow: 0 0 4px currentColor; 
          }
          50% { 
            opacity: 0.6; 
            box-shadow: 0 0 10px currentColor; 
          }
        }

        /* Ambient & Shimmer Effects */
        @keyframes cinematic-ambient-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes cinematic-shimmer-vertical {
          0% { 
            transform: translateY(-100%); 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(200vh); 
            opacity: 0; 
          }
        }

        @keyframes cinematic-shimmer-vertical-delayed {
          0% { 
            transform: translateY(200vh); 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-100%); 
            opacity: 0; 
          }
        }

        @keyframes cinematic-cta-pulse {
          0%, 100% { 
            opacity: 0.15; 
            transform: translate(-50%, -50%) scale(1); 
          }
          50% { 
            opacity: 0.25; 
            transform: translate(-50%, -50%) scale(1.05); 
          }
        }

        @keyframes cinematic-depth-float {
          0%, 100% { 
            transform: translateY(0) scale(1); 
            opacity: 0.3; 
          }
          33% { 
            transform: translateY(-15px) scale(1.1); 
            opacity: 0.6; 
          }
          66% { 
            transform: translateY(-8px) scale(0.95); 
            opacity: 0.4; 
          }
        }

        /* Apply Cinematic Animations */
        .cinematic-entrance {
          animation: cinematic-entrance 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* AI Face Animations */
        .animate-cinematic-face-pulse {
          animation: cinematic-face-pulse 10s ease-in-out infinite;
        }

        .animate-cinematic-fragment-float {
          animation: cinematic-fragment-float 15s ease-in-out infinite;
        }

        .animate-cinematic-matrix-float {
          animation: cinematic-matrix-float 18s ease-in-out infinite;
        }

        .animate-cinematic-eye-glow {
          animation: cinematic-eye-glow 4s ease-in-out infinite;
        }

        .animate-cinematic-face-scan {
          animation: cinematic-face-scan 18s linear infinite;
        }

        .animate-cinematic-face-aura {
          animation: cinematic-face-aura 12s ease-in-out infinite;
        }

        .animate-cinematic-data-formation {
          animation: cinematic-data-formation 25s ease-in-out infinite;
        }

        /* Core Animations */
        .animate-cinematic-core-pulse {
          animation: cinematic-core-pulse 8s ease-in-out infinite;
        }

        .animate-cinematic-ring-pulse {
          animation: cinematic-ring-pulse 15s ease-in-out infinite;
        }

        .animate-cinematic-pulse-fast {
          animation: cinematic-pulse-fast 4s ease-in-out infinite;
        }

        .animate-cinematic-pulse-medium {
          animation: cinematic-pulse-medium 6s ease-in-out infinite;
        }

        .animate-cinematic-pulse-slow {
          animation: cinematic-pulse-slow 10s ease-in-out infinite;
        }

        .animate-cinematic-ambient-pulse {
          animation: cinematic-ambient-pulse 20s ease-in-out infinite;
        }

        .animate-cinematic-shimmer-vertical {
          animation: cinematic-shimmer-vertical 15s ease-in-out infinite;
        }

        .animate-cinematic-shimmer-vertical-delayed {
          animation: cinematic-shimmer-vertical-delayed 18s ease-in-out infinite;
        }

        .animate-cinematic-cta-pulse {
          animation: cinematic-cta-pulse 12s ease-in-out infinite;
        }

        .animate-cinematic-depth-float {
          animation: cinematic-depth-float 20s ease-in-out infinite;
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          /* Reduce animation intensity on mobile */
          .animate-cinematic-face-pulse {
            animation-duration: 8s;
          }

          .animate-cinematic-fragment-float,
          .animate-cinematic-matrix-float {
            animation-duration: 12s;
          }

          .animate-cinematic-face-scan {
            animation-duration: 12s;
          }

          .animate-cinematic-shimmer-vertical,
          .animate-cinematic-shimmer-vertical-delayed {
            animation-duration: 10s;
          }

          .animate-cinematic-ambient-pulse {
            animation-duration: 15s;
          }

          /* Reduce transform effects on mobile for performance */
          @keyframes cinematic-face-pulse {
            0%, 100% { 
              opacity: 0.3; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.5; 
              transform: scale(1.005); 
            }
          }

          @keyframes cinematic-fragment-float {
            0%, 100% { 
              opacity: 0.1; 
              transform: translateY(0); 
            }
            50% { 
              opacity: 0.2; 
              transform: translateY(-1px); 
            }
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-cinematic-face-pulse,
          .animate-cinematic-fragment-float,
          .animate-cinematic-matrix-float,
          .animate-cinematic-eye-glow,
          .animate-cinematic-face-scan,
          .animate-cinematic-face-aura,
          .animate-cinematic-data-formation,
          .animate-cinematic-core-pulse,
          .animate-cinematic-ring-pulse,
          .animate-cinematic-pulse-fast,
          .animate-cinematic-pulse-medium,
          .animate-cinematic-pulse-slow,
          .animate-cinematic-ambient-pulse,
          .animate-cinematic-shimmer-vertical,
          .animate-cinematic-shimmer-vertical-delayed,
          .animate-cinematic-cta-pulse,
          .animate-cinematic-depth-float {
            animation: none;
          }

          .cinematic-entrance {
            animation: none;
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }
      `
    }} />
  );
};

export default CinematicAnimations;
