
import React from 'react';

const AppleAICoreAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Apple-style Core Entrance */
        @keyframes apple-core-entrance {
          0% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.85); 
            filter: blur(15px); 
          }
          100% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1); 
            filter: blur(0px); 
          }
        }

        /* Cinematic Soft Glow Box - Core Pulsing Animation */
        @keyframes apple-core-pulse {
          0%, 100% { 
            opacity: 0.8; 
            transform: translate(-50%, -50%) scale(1); 
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.2), 0 0 80px rgba(147, 51, 234, 0.1); 
          }
          50% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.05); 
            box-shadow: 0 0 60px rgba(34, 211, 238, 0.3), 0 0 120px rgba(147, 51, 234, 0.15); 
          }
        }

        /* Inner Core Pulse */
        @keyframes apple-inner-pulse {
          0%, 100% { 
            opacity: 0.9; 
            transform: translate(-50%, -50%) scale(1); 
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); 
          }
          50% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.2); 
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.5), 0 0 50px rgba(34, 211, 238, 0.3); 
          }
        }

        /* Ambient Pulsing Edges - Ring Rotations with Different Speeds */
        @keyframes apple-ring-rotate-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes apple-ring-rotate-medium {
          0% { transform: translate(-50%, -50%) rotate(360deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }

        @keyframes apple-ring-rotate-fast {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(720deg); }
        }

        /* Signal Pulse Animation */
        @keyframes apple-signal-pulse {
          0%, 90%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
            box-shadow: 0 0 10px currentColor; 
          }
          5%, 15% { 
            opacity: 1; 
            transform: scale(1.3); 
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor; 
          }
        }

        /* Circuit Pulse Animation */
        @keyframes apple-circuit-pulse {
          0%, 100% { 
            opacity: 0.3; 
            box-shadow: 0 0 8px currentColor; 
          }
          50% { 
            opacity: 0.8; 
            box-shadow: 0 0 16px currentColor, 0 0 24px currentColor; 
          }
        }

        /* Circuit Extension Animation */
        @keyframes apple-circuit-extend {
          0%, 80%, 100% { 
            opacity: 0.3; 
            transform: scaleY(1) scaleX(1); 
          }
          40% { 
            opacity: 0.8; 
            transform: scaleY(1.2) scaleX(1.1); 
          }
        }

        /* Glass Shimmer Effect */
        @keyframes apple-glass-shimmer {
          0%, 100% { 
            background: linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%); 
          }
          50% { 
            background: linear-gradient(135deg, transparent 20%, rgba(255,255,255,0.06) 50%, transparent 80%); 
          }
        }

        /* Cinematic Ambient Glow - Ambient Pulse */
        @keyframes apple-ambient-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        /* Scanline Pass Animation */
        @keyframes apple-scanline-pass {
          0%, 95%, 100% { 
            transform: translateX(-100%); 
            opacity: 0; 
          }
          2%, 8% { 
            opacity: 1; 
          }
          10% { 
            transform: translateX(200%); 
            opacity: 0; 
          }
        }

        /* Depth Float Animation */
        @keyframes apple-depth-float {
          0%, 100% { 
            transform: translateY(0) scale(1); 
            opacity: 0.3; 
          }
          33% { 
            transform: translateY(-15px) scale(1.2); 
            opacity: 0.6; 
          }
          66% { 
            transform: translateY(-8px) scale(0.9); 
            opacity: 0.4; 
          }
        }

        /* Apply Animations - Cinematic Soft Glow Box with Ambient Pulsing Edges */
        .apple-core-entrance {
          animation: apple-core-entrance 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .cinematic-soft-glow-box {
          /* Additional styling for the cinematic soft glow box concept */
        }

        .apple-core-pulse {
          animation: apple-core-pulse 4s ease-in-out infinite;
        }

        .apple-inner-pulse {
          animation: apple-inner-pulse 3s ease-in-out infinite;
        }

        .ambient-pulsing-edges {
          /* Ambient pulsing edges styling */
        }

        .apple-ring-rotate-slow {
          animation: apple-ring-rotate-slow 60s linear infinite;
        }

        .apple-ring-rotate-medium {
          animation: apple-ring-rotate-medium 45s linear infinite;
        }

        .apple-ring-rotate-fast {
          animation: apple-ring-rotate-fast 30s linear infinite;
        }

        .apple-signal-pulse {
          animation: apple-signal-pulse 8s ease-in-out infinite;
        }

        .apple-circuit-pulse {
          animation: apple-circuit-pulse 6s ease-in-out infinite;
        }

        .apple-circuit-extend {
          animation: apple-circuit-extend 8s ease-in-out infinite;
        }

        .apple-glass-shimmer {
          animation: apple-glass-shimmer 12s ease-in-out infinite;
        }

        .cinematic-ambient-glow {
          /* Cinematic ambient glow styling */
        }

        .apple-ambient-pulse {
          animation: apple-ambient-pulse 18s ease-in-out infinite;
        }

        .apple-scanline-pass {
          animation: apple-scanline-pass 15s ease-in-out infinite;
        }

        .apple-depth-float {
          animation: apple-depth-float 14s ease-in-out infinite;
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .apple-core-pulse {
            animation-duration: 3s;
          }
          
          .apple-ring-rotate-slow {
            animation-duration: 40s;
          }
          
          .apple-ring-rotate-medium {
            animation-duration: 30s;
          }
          
          .apple-ring-rotate-fast {
            animation-duration: 20s;
          }
          
          .apple-signal-pulse {
            animation-duration: 6s;
          }
          
          .apple-ambient-pulse {
            animation-duration: 12s;
          }
          
          .apple-scanline-pass {
            animation-duration: 10s;
          }
        }
      `
    }} />
  );
};

export default AppleAICoreAnimations;
