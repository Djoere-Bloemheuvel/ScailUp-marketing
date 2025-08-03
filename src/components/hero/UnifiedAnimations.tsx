
import React from 'react';

const UnifiedAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Unified Hero Animation System */
        :root {
          --hero-entrance-duration: 800ms;
          --hero-entrance-timing: cubic-bezier(0.16, 1, 0.3, 1);
          --hero-entrance-delay: 200ms;
        }

        /* Main unified entrance animation */
        @keyframes unified-hero-entrance {
          0% { 
            opacity: 0; 
            transform: scale(0.98) translateY(20px); 
            filter: blur(8px);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
            filter: blur(0px);
          }
        }

        @keyframes unified-hero-entrance-mobile {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
            filter: blur(8px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
            filter: blur(0px);
          }
        }

        /* Background elements - subtle fade in */
        @keyframes background-elements-fade {
          0% { 
            opacity: 0; 
          }
          100% { 
            opacity: 1; 
          }
        }

        /* Performance optimizations */
        .unified-hero-entrance {
          opacity: 0;
          will-change: transform, opacity, filter;
          transform: scale(0.98) translateY(20px);
          filter: blur(8px);
          transition-property: none;
        }

        .unified-hero-entrance.is-loaded {
          animation: unified-hero-entrance var(--hero-entrance-duration) var(--hero-entrance-timing) forwards;
        }

        /* Content groups */
        .hero-content-group,
        .hero-reflection-group {
          will-change: transform, opacity;
        }

        /* Background synchronization */
        .background-sync {
          animation: background-elements-fade 600ms ease-out forwards;
          animation-delay: 100ms;
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          .unified-hero-entrance {
            transform: translateY(30px);
          }
          
          .unified-hero-entrance.is-loaded {
            animation: unified-hero-entrance-mobile var(--hero-entrance-duration) var(--hero-entrance-timing) forwards;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .unified-hero-entrance.is-loaded {
            animation: none;
            opacity: 1;
            transform: none;
            filter: none;
          }
          
          .background-sync {
            animation: none;
            opacity: 1;
          }
        }

        /* Ensure no conflicts with other animations during entrance */
        .unified-hero-entrance:not(.is-loaded) * {
          animation-play-state: paused;
        }
      `
    }} />
  );
};

export default UnifiedAnimations;
