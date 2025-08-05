
const HorizontalLightFlareAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Horizontal Light Flare Animations */
        @keyframes horizontal-flare-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scaleX(1);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.02);
          }
        }

        @keyframes horizontal-flare-shimmer {
          0%, 100% {
            opacity: 0.8;
            transform: scaleX(1);
          }
          33% {
            opacity: 1;
            transform: scaleX(1.05);
          }
          66% {
            opacity: 0.9;
            transform: scaleX(0.98);
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .horizontal-light-flare {
            width: 90%;
          }
          
          @keyframes horizontal-flare-pulse {
            0%, 100% {
              opacity: 0.5;
              transform: scaleX(1);
            }
            50% {
              opacity: 0.8;
              transform: scaleX(1.01);
            }
          }
        }
      `
    }} />
  );
};

export default HorizontalLightFlareAnimations;
