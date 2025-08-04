
import React from 'react';

const WorkflowGlowAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Premium ambient glow animations - Apple-inspired */
        @keyframes premium-ambient-pulse {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1);
            filter: blur(20px);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.05);
            filter: blur(25px);
          }
        }

        @keyframes premium-ambient-pulse-delayed {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
            filter: blur(25px);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.08);
            filter: blur(30px);
          }
        }

        @keyframes premium-ambient-pulse-tertiary {
          0%, 100% { 
            opacity: 0.25;
            transform: scale(1);
            filter: blur(35px);
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.12);
            filter: blur(40px);
          }
        }

        @keyframes premium-stardust-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.02;
          }
          25% { 
            transform: translateY(-5px) translateX(2px) rotate(90deg);
            opacity: 0.04;
          }
          50% { 
            transform: translateY(-2px) translateX(-1px) rotate(180deg);
            opacity: 0.03;
          }
          75% { 
            transform: translateY(-8px) translateX(3px) rotate(270deg);
            opacity: 0.05;
          }
        }

        @keyframes premium-nebula-drift {
          0%, 100% { 
            transform: translateX(0) translateY(0) scale(1) rotate(0deg);
            opacity: 0.02;
          }
          33% { 
            transform: translateX(-20px) translateY(-15px) scale(1.05) rotate(120deg);
            opacity: 0.04;
          }
          66% { 
            transform: translateX(25px) translateY(10px) scale(0.95) rotate(240deg);
            opacity: 0.03;
          }
        }

        @keyframes premium-circle-hover-scale {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }

        @keyframes premium-content-float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }

        /* Apply animations with hardware acceleration */
        .premium-ambient-glow {
          animation: premium-ambient-pulse 8s ease-in-out infinite;
          will-change: opacity, transform, filter;
        }

        .premium-ambient-glow-delayed {
          animation: premium-ambient-pulse-delayed 12s ease-in-out infinite;
          animation-delay: 2s;
          will-change: opacity, transform, filter;
        }

        .premium-ambient-glow-tertiary {
          animation: premium-ambient-pulse-tertiary 16s ease-in-out infinite;
          animation-delay: 4s;
          will-change: opacity, transform, filter;
        }

        .premium-stardust {
          animation: premium-stardust-float 15s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .premium-nebula {
          animation: premium-nebula-drift 25s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .premium-circle-hover {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .premium-circle-hover:hover {
          animation: premium-circle-hover-scale 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .premium-content-hover {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .premium-content-hover:hover {
          animation: premium-content-float 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Retina optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .premium-ambient-glow,
          .premium-ambient-glow-delayed,
          .premium-ambient-glow-tertiary {
            filter: blur(15px);
          }
        }
      `
    }} />
  );
};

export default WorkflowGlowAnimations;
