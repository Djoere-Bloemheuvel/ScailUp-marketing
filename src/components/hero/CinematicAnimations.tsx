
import React from 'react';

const CinematicAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Cinematic Animation Keyframes */
        @keyframes cinematic-fade-in {
          0% { opacity: 0; transform: scale(1.1) blur(20px); }
          100% { opacity: 1; transform: scale(1) blur(0px); }
        }

        @keyframes cinematic-pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.6; transform: scale(1.1) rotate(2deg); }
        }

        @keyframes cinematic-pulse-medium {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.5; transform: scale(1.15) rotate(-1deg); }
        }

        @keyframes cinematic-pulse-fast {
          0%, 100% { opacity: 0.15; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.4; transform: scale(1.2) rotate(1deg); }
        }

        @keyframes cinematic-float-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-20px) rotate(3deg); opacity: 1; }
        }

        @keyframes cinematic-float-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-15px) rotate(-2deg); opacity: 0.9; }
        }

        @keyframes cinematic-float-3 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-25px) rotate(2deg); opacity: 1; }
        }

        @keyframes cinematic-float-4 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-18px) rotate(-1deg); opacity: 0.8; }
        }

        @keyframes cinematic-core-pulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
        }

        @keyframes cinematic-path-draw {
          0% { stroke-dasharray: 0, 1000; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dasharray: 1000, 0; opacity: 0.6; }
        }

        @keyframes cinematic-ring-pulse {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.6; transform: scale(1.1) rotate(5deg); }
        }

        @keyframes cinematic-depth-float {
          0%, 100% { 
            transform: translateY(0) translateX(0) scale(1); 
            opacity: 0.3; 
          }
          33% { 
            transform: translateY(-30px) translateX(10px) scale(1.2); 
            opacity: 0.7; 
          }
          66% { 
            transform: translateY(-15px) translateX(-5px) scale(0.9); 
            opacity: 0.5; 
          }
        }

        @keyframes cinematic-glass-shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes cinematic-scan-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        @keyframes cinematic-scan-horizontal-delayed {
          0% { transform: translateX(200%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }

        @keyframes cinematic-entrance {
          0% { 
            opacity: 0; 
            transform: scale(1.05) translateY(20px); 
            filter: blur(10px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
            filter: blur(0px); 
          }
        }

        /* Apply Cinematic Animations */
        .cinematic-entrance {
          animation: cinematic-entrance 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-cinematic-pulse-slow {
          animation: cinematic-pulse-slow 15s ease-in-out infinite;
        }

        .animate-cinematic-pulse-medium {
          animation: cinematic-pulse-medium 12s ease-in-out infinite;
        }

        .animate-cinematic-pulse-fast {
          animation: cinematic-pulse-fast 9s ease-in-out infinite;
        }

        .animate-cinematic-float-1 {
          animation: cinematic-float-1 20s ease-in-out infinite;
        }

        .animate-cinematic-float-2 {
          animation: cinematic-float-2 16s ease-in-out infinite;
        }

        .animate-cinematic-float-3 {
          animation: cinematic-float-3 18s ease-in-out infinite;
        }

        .animate-cinematic-float-4 {
          animation: cinematic-float-4 14s ease-in-out infinite;
        }

        .animate-cinematic-core-pulse {
          animation: cinematic-core-pulse 4s ease-in-out infinite;
        }

        .animate-cinematic-path-draw {
          animation: cinematic-path-draw 10s ease-in-out infinite;
        }

        .animate-cinematic-ring-pulse {
          animation: cinematic-ring-pulse 8s ease-in-out infinite;
        }

        .animate-cinematic-depth-float {
          animation: cinematic-depth-float 12s ease-in-out infinite;
        }

        .animate-cinematic-glass-shimmer {
          animation: cinematic-glass-shimmer 25s ease-in-out infinite;
        }

        .animate-cinematic-scan-horizontal {
          animation: cinematic-scan-horizontal 20s ease-in-out infinite;
        }

        .animate-cinematic-scan-horizontal-delayed {
          animation: cinematic-scan-horizontal-delayed 25s ease-in-out infinite;
        }
      `
    }} />
  );
};

export default CinematicAnimations;
