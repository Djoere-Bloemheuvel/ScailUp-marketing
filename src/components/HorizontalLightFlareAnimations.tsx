
const HorizontalLightFlareAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Horizontal Light Flare Animations - Enhanced 50% more intense */
        @keyframes horizontal-flare-pulse {
          0%, 100% {
            opacity: 0.9;
            transform: scaleX(1);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.03);
          }
        }

        @keyframes horizontal-flare-shimmer {
          0%, 100% {
            opacity: 1;
            transform: scaleX(1);
          }
          33% {
            opacity: 1;
            transform: scaleX(1.08);
          }
          66% {
            opacity: 1;
            transform: scaleX(0.97);
          }
        }

        /* Enhanced downward aura glow animations - 50% more intense */
        @keyframes aura-pulse {
          0%, 100% {
            opacity: 0.45;
            transform: translateX(-50%) scaleY(1);
          }
          50% {
            opacity: 0.75;
            transform: translateX(-50%) scaleY(1.15);
          }
        }

        @keyframes aura-shimmer {
          0%, 100% {
            opacity: 0.4;
            transform: translateX(-50%) scaleX(1);
          }
          33% {
            opacity: 0.6;
            transform: translateX(-50%) scaleX(1.08);
          }
          66% {
            opacity: 0.45;
            transform: translateX(-50%) scaleX(0.93);
          }
        }

        /* Enhanced ambient glow animation - 50% more intense */
        @keyframes ambient-glow-pulse {
          0%, 100% {
            opacity: 0.25;
            transform: translateX(-50%) scaleY(1) scaleX(1);
          }
          33% {
            opacity: 0.3;
            transform: translateX(-50%) scaleY(1.03) scaleX(1.02);
          }
          66% {
            opacity: 0.2;
            transform: translateX(-50%) scaleY(0.97) scaleX(0.98);
          }
        }

        /* Mobile optimizations - enhanced */
        @media (max-width: 768px) {
          .horizontal-light-flare {
            width: 90%;
          }
          
          @keyframes horizontal-flare-pulse {
            0%, 100% {
              opacity: 0.75;
              transform: scaleX(1);
            }
            50% {
              opacity: 1;
              transform: scaleX(1.02);
            }
          }
          
          @keyframes aura-pulse {
            0%, 100% {
              opacity: 0.3;
              transform: translateX(-50%) scaleY(1);
            }
            50% {
              opacity: 0.55;
              transform: translateX(-50%) scaleY(1.12);
            }
          }

          @keyframes ambient-glow-pulse {
            0%, 100% {
              opacity: 0.18;
              transform: translateX(-50%) scaleY(1) scaleX(1);
            }
            50% {
              opacity: 0.25;
              transform: translateX(-50%) scaleY(1.02) scaleX(1.01);
            }
          }
        }
      `
    }} />
  );
};

export default HorizontalLightFlareAnimations;
