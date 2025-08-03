
import React from 'react';

const HeroLoadingAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Hero Loading Sequence Animations */
        @keyframes hero-load-fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes hero-load-scale-in {
          0% { 
            opacity: 0; 
            transform: scale(0.95) translateX(-50%) translateY(-55%); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateX(-50%) translateY(-50%); 
          }
        }

        @keyframes hero-load-text-fade {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes hero-load-button-rise {
          0% { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes hero-load-glow-pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: translateX(-50%) translateY(-50%) scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: translateX(-50%) translateY(-50%) scale(1.02);
          }
        }

        /* Loading State Classes */
        .hero-loading .hero-background {
          opacity: 0;
          animation: hero-load-fade-in 300ms ease-out forwards;
        }

        .hero-loading .hero-glass-container {
          opacity: 0;
          transform: scale(0.95) translateX(-50%) translateY(-55%);
          animation: hero-load-scale-in 400ms ease-out forwards;
          animation-delay: 300ms;
        }

        .hero-loading .hero-headline {
          opacity: 0;
        }

        .hero-loading .hero-headline .word-1 {
          animation: hero-load-text-fade 300ms ease-out forwards;
          animation-delay: 700ms;
        }

        .hero-loading .hero-headline .word-2 {
          animation: hero-load-text-fade 300ms ease-out forwards;
          animation-delay: 800ms;
        }

        .hero-loading .hero-headline .word-3 {
          animation: hero-load-text-fade 300ms ease-out forwards;
          animation-delay: 900ms;
        }

        .hero-loading .hero-subtitle {
          opacity: 0;
          animation: hero-load-text-fade 400ms ease-out forwards;
          animation-delay: 1000ms;
        }

        .hero-loading .hero-buttons {
          opacity: 0;
        }

        .hero-loading .hero-button-1 {
          animation: hero-load-button-rise 300ms ease-out forwards;
          animation-delay: 1300ms;
        }

        .hero-loading .hero-button-2 {
          animation: hero-load-button-rise 300ms ease-out forwards;
          animation-delay: 1400ms;
        }

        .hero-loading .hero-ambient-glow {
          opacity: 0;
          animation: hero-load-glow-pulse 2s ease-in-out infinite;
          animation-delay: 2000ms;
        }

        /* Mobile Optimizations - Fade only, no transforms */
        @media (max-width: 768px) {
          @keyframes hero-load-scale-in-mobile {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes hero-load-text-fade-mobile {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes hero-load-button-rise-mobile {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          .hero-loading .hero-glass-container {
            transform: translateX(-50%) translateY(-50%);
            animation: hero-load-scale-in-mobile 300ms ease-out forwards;
            animation-delay: 300ms;
          }

          .hero-loading .hero-headline .word-1,
          .hero-loading .hero-headline .word-2,
          .hero-loading .hero-headline .word-3 {
            animation: hero-load-text-fade-mobile 250ms ease-out forwards;
          }

          .hero-loading .hero-subtitle {
            animation: hero-load-text-fade-mobile 300ms ease-out forwards;
            animation-delay: 900ms;
          }

          .hero-loading .hero-button-1,
          .hero-loading .hero-button-2 {
            animation: hero-load-button-rise-mobile 250ms ease-out forwards;
          }

          .hero-loading .hero-button-1 {
            animation-delay: 1100ms;
          }

          .hero-loading .hero-button-2 {
            animation-delay: 1200ms;
          }

          .hero-loading .hero-ambient-glow {
            animation-delay: 1500ms;
            animation-duration: 3s;
          }
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .hero-loading .hero-background,
          .hero-loading .hero-glass-container,
          .hero-loading .hero-headline .word-1,
          .hero-loading .hero-headline .word-2,
          .hero-loading .hero-headline .word-3,
          .hero-loading .hero-subtitle,
          .hero-loading .hero-button-1,
          .hero-loading .hero-button-2 {
            animation: hero-load-fade-in 100ms ease-out forwards !important;
          }

          .hero-loading .hero-ambient-glow {
            animation: none !important;
            opacity: 0.4;
          }
        }

        /* Performance Optimizations */
        .hero-loading * {
          will-change: transform, opacity;
        }

        .hero-loaded * {
          will-change: auto;
        }
      `
    }} />
  );
};

export default HeroLoadingAnimations;
