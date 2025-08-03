
import { useEffect, useState } from 'react';

const DigitalRupture = () => {
  const [isActive, setIsActive] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Start na een vertraging, slechts 1x per pageload
    if (hasTriggered) return;
    
    const delay = Math.random() * 2000 + 1500; // Random tussen 1.5-3.5s
    
    const timer = setTimeout(() => {
      setIsActive(true);
      setHasTriggered(true);
      
      // Stop animatie na 2 seconden
      setTimeout(() => {
        setIsActive(false);
      }, 2000);
    }, delay);

    return () => clearTimeout(timer);
  }, [hasTriggered]);

  const cssStyles = `
    /* Digital Rupture Keyframes */
    @keyframes rupture-crack {
      0% { 
        clip-path: polygon(48% 0%, 52% 0%, 52% 0%, 48% 0%);
        opacity: 0;
        transform: scale(1) rotate(0deg);
      }
      15% { 
        clip-path: polygon(45% 0%, 55% 0%, 53% 30%, 47% 30%);
        opacity: 0.8;
        transform: scale(1.01) rotate(-0.5deg);
      }
      35% { 
        clip-path: polygon(40% 0%, 60% 0%, 58% 60%, 42% 60%);
        opacity: 1;
        transform: scale(1.02) rotate(0.3deg);
      }
      50% { 
        clip-path: polygon(35% 0%, 65% 0%, 63% 80%, 37% 80%);
        opacity: 1;
        transform: scale(1.01) rotate(-0.2deg);
      }
      65% { 
        clip-path: polygon(30% 0%, 70% 0%, 68% 100%, 32% 100%);
        opacity: 0.9;
        transform: scale(1) rotate(0.1deg);
      }
      80% { 
        clip-path: polygon(40% 0%, 60% 0%, 58% 70%, 42% 70%);
        opacity: 0.6;
        transform: scale(0.99) rotate(0deg);
      }
      95% { 
        clip-path: polygon(47% 0%, 53% 0%, 52% 20%, 48% 20%);
        opacity: 0.2;
        transform: scale(1) rotate(0deg);
      }
      100% { 
        clip-path: polygon(49% 0%, 51% 0%, 51% 0%, 49% 0%);
        opacity: 0;
        transform: scale(1) rotate(0deg);
      }
    }

    @keyframes rupture-glow {
      0%, 100% { 
        box-shadow: 0 0 0 rgba(255, 255, 255, 0);
        opacity: 0;
      }
      50% { 
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(192, 192, 192, 0.2);
        opacity: 1;
      }
    }

    @keyframes rupture-noise {
      0% { transform: translateX(0) translateY(0); }
      25% { transform: translateX(-1px) translateY(1px); }
      50% { transform: translateX(1px) translateY(-1px); }
      75% { transform: translateX(-1px) translateY(-1px); }
      100% { transform: translateX(0) translateY(0); }
    }

    @keyframes rupture-particles {
      0% { 
        opacity: 0;
        transform: translateY(0) scale(1);
      }
      30% { 
        opacity: 1;
        transform: translateY(-10px) scale(0.8);
      }
      100% { 
        opacity: 0;
        transform: translateY(-30px) scale(0.3);
      }
    }

    @keyframes screen-shake {
      0%, 100% { transform: translate(0, 0); }
      20% { transform: translate(-1px, 1px); }
      40% { transform: translate(1px, -1px); }
      60% { transform: translate(-1px, -1px); }
      80% { transform: translate(1px, 1px); }
    }

    /* RGB Split Effect */
    @keyframes rgb-split-red {
      0%, 100% { transform: translateX(0); opacity: 0; }
      50% { transform: translateX(-2px); opacity: 0.3; }
    }

    @keyframes rgb-split-blue {
      0%, 100% { transform: translateX(0); opacity: 0; }
      50% { transform: translateX(2px); opacity: 0.3; }
    }

    /* Component classes */
    .rupture-active {
      animation: rupture-crack 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
    }

    .rupture-glow {
      animation: rupture-glow 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
    }

    .rupture-noise {
      animation: rupture-noise 100ms linear infinite;
    }

    .rupture-particles {
      animation: rupture-particles 1.5s ease-out forwards;
    }

    .screen-shake {
      animation: screen-shake 200ms ease-in-out;
    }

    .rgb-split-red {
      animation: rgb-split-red 2s ease-in-out forwards;
    }

    .rgb-split-blue {
      animation: rgb-split-blue 2s ease-in-out forwards;
    }
  `;

  if (!isActive) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      {/* Main Rupture Layer */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {/* Primary Crack */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rupture-active rupture-glow"
          style={{
            mixBlendMode: 'screen',
            filter: 'blur(0.5px)'
          }}
        />
        
        {/* RGB Split Layers */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent rgb-split-red"
          style={{
            mixBlendMode: 'screen',
            opacity: 0.3,
            clipPath: 'polygon(48% 0%, 52% 0%, 52% 100%, 48% 100%)'
          }}
        />
        
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent rgb-split-blue"
          style={{
            mixBlendMode: 'screen',
            opacity: 0.3,
            clipPath: 'polygon(48% 0%, 52% 0%, 52% 100%, 48% 100%)'
          }}
        />

        {/* Noise Overlay */}
        <div 
          className="absolute inset-0 rupture-noise"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, transparent 30%, rgba(255,255,255,0.05) 70%),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 1px,
                rgba(255,255,255,0.03) 2px,
                rgba(255,255,255,0.03) 3px
              )
            `,
            opacity: 0.4
          }}
        />

        {/* Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rupture-particles"
            style={{
              left: `${48 + Math.random() * 4}%`,
              top: `${20 + Math.random() * 60}%`,
              width: '2px',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 500}ms`
            }}
          />
        ))}

        {/* Glow Edge */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 48%, rgba(192,192,192,0.1) 50%, transparent 52%)',
            filter: 'blur(1px)',
            mixBlendMode: 'lighten'
          }}
        />
      </div>
    </>
  );
};

export default DigitalRupture;
