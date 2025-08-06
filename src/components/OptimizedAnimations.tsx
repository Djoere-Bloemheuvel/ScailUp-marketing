import { memo } from 'react';

// Memoized component that provides optimized animations without re-rendering
const OptimizedAnimations = memo(() => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Hero-specific optimized animations */
        @keyframes hero-icon-float-1 {
          0%, 100% { transform: translate3d(-50%, 0, 0) rotate(0deg); }
          33% { transform: translate3d(-50%, -15px, 0) rotate(1deg); }
          66% { transform: translate3d(-50%, -5px, 0) rotate(-0.5deg); }
        }

        @keyframes hero-icon-float-2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -20px, 0) rotate(2deg); }
        }

        @keyframes hero-icon-float-3 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          40% { transform: translate3d(0, -10px, 0) rotate(-1deg); }
          80% { transform: translate3d(0, -18px, 0) rotate(1.5deg); }
        }

        @keyframes hero-icon-float-4 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          60% { transform: translate3d(0, -12px, 0) rotate(-2deg); }
        }

        @keyframes hero-core-pulse {
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

        @keyframes hero-ring-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.02) rotate(2deg);
          }
        }

        /* Services section optimized animations */
        @keyframes service-sweep {
          0% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%) skewX(-15deg); opacity: 0; }
        }

        @keyframes service-float {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate3d(0, -20px, 0) scale(1.1); opacity: 0.7; }
        }

        @keyframes service-glow-orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Timeline optimized animations */
        @keyframes timeline-pulse {
          0%, 100% {
            opacity: 0.4;
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate3d(0, 0, 0) scale(1.05);
          }
        }

        @keyframes timeline-dot-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1.2);
          }
        }

        /* CTA section optimized animations */
        @keyframes cta-orbit {
          0% {
            transform: rotate(0deg) translateY(var(--orbit-distance)) rotate(0deg) translate3d(0, 0, 0);
            opacity: 0.6;
          }
          50% { opacity: 1; }
          100% {
            transform: rotate(360deg) translateY(var(--orbit-distance)) rotate(-360deg) translate3d(0, 0, 0);
            opacity: 0.6;
          }
        }

        @keyframes cta-brain-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            filter: drop-shadow(0 0 50px rgba(59, 130, 246, 0.6));
            transform: translate3d(0, 0, 0) scale(1.05);
          }
        }

        @keyframes cta-neural-ring {
          0%, 100% {
            opacity: 0.3;
            transform: rotate(0deg) translate3d(0, 0, 0);
          }
          50% {
            opacity: 0.6;
            transform: rotate(180deg) translate3d(0, 0, 0);
          }
        }

        /* Ambient lighting optimized */
        @keyframes ambient-glow-1 {
          0%, 100% {
            opacity: 0.7;
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            filter: blur(80px);
          }
          33% {
            opacity: 0.85;
            transform: translate3d(0, 0, 0) scale(1.08) rotate(2deg);
            filter: blur(85px);
          }
          66% {
            opacity: 0.6;
            transform: translate3d(0, 0, 0) scale(0.95) rotate(-1deg);
            filter: blur(75px);
          }
        }

        @keyframes ambient-glow-2 {
          0%, 100% {
            opacity: 0.65;
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            filter: blur(90px);
          }
          50% {
            opacity: 0.8;
            transform: translate3d(0, 0, 0) scale(1.12) rotate(-3deg);
            filter: blur(95px);
          }
        }

        /* Apply optimized classes */
        .hero-icon-float-1 { animation: hero-icon-float-1 12s ease-in-out infinite; }
        .hero-icon-float-2 { animation: hero-icon-float-2 9s ease-in-out infinite; }
        .hero-icon-float-3 { animation: hero-icon-float-3 14s ease-in-out infinite; }
        .hero-icon-float-4 { animation: hero-icon-float-4 11s ease-in-out infinite; }
        .hero-core-pulse { animation: hero-core-pulse 4s ease-in-out infinite; }
        .hero-ring-pulse { animation: hero-ring-pulse 12s ease-in-out infinite; }

        .service-sweep { animation: service-sweep 3s linear infinite; }
        .service-float { animation: service-float 8s ease-in-out infinite; }
        .service-glow-orbit { animation: service-glow-orbit 20s linear infinite; }

        .timeline-pulse { animation: timeline-pulse 16s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .timeline-dot-pulse { animation: timeline-dot-pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        .cta-orbit { animation: cta-orbit var(--duration, 20s) linear infinite; }
        .cta-brain-pulse { animation: cta-brain-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .cta-neural-ring { animation: cta-neural-ring 20s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        .ambient-glow-1 { animation: ambient-glow-1 14s ease-in-out infinite; }
        .ambient-glow-2 {
          animation: ambient-glow-2 16s ease-in-out infinite;
          animation-delay: -5s;
        }

        /* Performance classes */
        .optimized-float,
        .optimized-pulse,
        .optimized-glow,
        .optimized-rotate {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .optimized-heavy {
          will-change: transform, opacity, filter, box-shadow;
          backface-visibility: hidden;
          transform: translateZ(0);
          contain: layout style paint;
        }

        /* Mobile performance optimizations */
        @media (max-width: 768px) {
          .hero-icon-float-1,
          .hero-icon-float-2,
          .hero-icon-float-3,
          .hero-icon-float-4 {
            animation-duration: 8s;
          }

          .hero-core-pulse {
            animation-duration: 3s;
          }

          .service-float {
            animation-duration: 6s;
          }

          .service-glow-orbit {
            animation-duration: 15s;
          }

          .timeline-pulse {
            animation-duration: 12s;
          }

          .timeline-dot-pulse {
            animation-duration: 5s;
          }

          .ambient-glow-1,
          .ambient-glow-2 {
            animation-duration: 20s;
          }
        }

        /* Low-end device optimizations */
        @media (max-width: 480px) {
          .optimized-heavy {
            will-change: transform;
            filter: none !important;
            box-shadow: none !important;
          }

          .ambient-glow-1,
          .ambient-glow-2 {
            opacity: 0.3 !important;
            filter: blur(40px) !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .hero-icon-float-1,
          .hero-icon-float-2,
          .hero-icon-float-3,
          .hero-icon-float-4,
          .hero-core-pulse,
          .hero-ring-pulse,
          .service-sweep,
          .service-float,
          .service-glow-orbit,
          .timeline-pulse,
          .timeline-dot-pulse,
          .cta-orbit,
          .cta-brain-pulse,
          .cta-neural-ring,
          .ambient-glow-1,
          .ambient-glow-2 {
            animation: none !important;
          }
        }
      `
    }} />
  );
});

OptimizedAnimations.displayName = 'OptimizedAnimations';

export default OptimizedAnimations;
