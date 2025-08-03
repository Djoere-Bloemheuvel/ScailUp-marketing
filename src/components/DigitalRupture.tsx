
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
      
      // Stop animatie na 3 seconden
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }, delay);

    return () => clearTimeout(timer);
  }, [hasTriggered]);

  const cssStyles = `
    /* Glass Breaking Keyframes */
    @keyframes glass-crack-main {
      0% { 
        clip-path: polygon(50% 45%, 50% 55%, 50% 55%, 50% 45%);
        opacity: 0;
        transform: scale(1);
      }
      10% { 
        clip-path: polygon(48% 40%, 52% 40%, 52% 60%, 48% 60%);
        opacity: 0.3;
        transform: scale(1.001);
      }
      25% { 
        clip-path: polygon(45% 30%, 55% 35%, 58% 65%, 42% 70%);
        opacity: 0.5;
        transform: scale(1.002);
      }
      40% { 
        clip-path: polygon(40% 20%, 60% 25%, 65% 75%, 35% 80%);
        opacity: 0.6;
        transform: scale(1.003);
      }
      55% { 
        clip-path: polygon(35% 10%, 65% 15%, 70% 85%, 30% 90%);
        opacity: 0.7;
        transform: scale(1.002);
      }
      70% { 
        clip-path: polygon(30% 0%, 70% 5%, 75% 95%, 25% 100%);
        opacity: 0.6;
        transform: scale(1.001);
      }
      85% { 
        clip-path: polygon(40% 0%, 60% 0%, 65% 100%, 35% 100%);
        opacity: 0.4;
        transform: scale(1);
      }
      100% { 
        clip-path: polygon(49% 0%, 51% 0%, 51% 100%, 49% 100%);
        opacity: 0;
        transform: scale(1);
      }
    }

    @keyframes glass-crack-branch1 {
      0% { 
        clip-path: polygon(30% 20%, 32% 20%, 32% 25%, 30% 25%);
        opacity: 0;
      }
      20% { 
        clip-path: polygon(25% 15%, 35% 20%, 38% 35%, 22% 30%);
        opacity: 0.4;
      }
      50% { 
        clip-path: polygon(20% 10%, 40% 25%, 45% 45%, 15% 35%);
        opacity: 0.5;
      }
      80% { 
        clip-path: polygon(15% 5%, 45% 30%, 50% 55%, 10% 40%);
        opacity: 0.3;
      }
      100% { 
        clip-path: polygon(10% 0%, 50% 35%, 55% 65%, 5% 45%);
        opacity: 0;
      }
    }

    @keyframes glass-crack-branch2 {
      0% { 
        clip-path: polygon(70% 30%, 72% 30%, 72% 35%, 70% 35%);
        opacity: 0;
      }
      25% { 
        clip-path: polygon(65% 25%, 75% 30%, 78% 45%, 62% 40%);
        opacity: 0.4;
      }
      55% { 
        clip-path: polygon(60% 20%, 80% 35%, 85% 55%, 55% 45%);
        opacity: 0.5;
      }
      85% { 
        clip-path: polygon(55% 15%, 85% 40%, 90% 65%, 50% 50%);
        opacity: 0.3;
      }
      100% { 
        clip-path: polygon(50% 10%, 90% 45%, 95% 75%, 45% 55%);
        opacity: 0;
      }
    }

    @keyframes glass-shard-fall {
      0% { 
        transform: translateY(0) rotate(0deg);
        opacity: 0.6;
      }
      100% { 
        transform: translateY(100px) rotate(180deg);
        opacity: 0;
      }
    }

    @keyframes glass-shimmer {
      0%, 100% { 
        background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%);
      }
      50% { 
        background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.06) 50%, transparent 100%);
      }
    }

    @keyframes subtle-screen-shake {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(-0.5px, 0.5px); }
      50% { transform: translate(0.5px, -0.5px); }
      75% { transform: translate(-0.5px, -0.5px); }
    }

    /* Component classes */
    .glass-crack-main {
      animation: glass-crack-main 3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
    }

    .glass-crack-branch1 {
      animation: glass-crack-branch1 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
      animation-delay: 0.3s;
    }

    .glass-crack-branch2 {
      animation: glass-crack-branch2 2.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
      animation-delay: 0.5s;
    }

    .glass-shard-fall {
      animation: glass-shard-fall 2s ease-in forwards;
    }

    .glass-shimmer {
      animation: glass-shimmer 3s ease-in-out forwards;
    }

    .subtle-screen-shake {
      animation: subtle-screen-shake 300ms ease-in-out;
    }
  `;

  if (!isActive) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      {/* Glass Breaking Effect */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {/* Main crack line */}
        <div 
          className="absolute inset-0 glass-crack-main"
          style={{
            background: 'linear-gradient(90deg, transparent 48%, rgba(255, 255, 255, 0.08) 49%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.08) 51%, transparent 52%)',
            mixBlendMode: 'screen',
            filter: 'blur(0.5px)'
          }}
        />

        {/* Branch crack 1 */}
        <div 
          className="absolute inset-0 glass-crack-branch1"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.06) 50%, transparent 100%)',
            mixBlendMode: 'screen',
            filter: 'blur(0.3px)'
          }}
        />

        {/* Branch crack 2 */}
        <div 
          className="absolute inset-0 glass-crack-branch2"
          style={{
            background: 'linear-gradient(-45deg, transparent 0%, rgba(255, 255, 255, 0.06) 50%, transparent 100%)',
            mixBlendMode: 'screen',
            filter: 'blur(0.3px)'
          }}
        />

        {/* Subtle shimmer effect along cracks */}
        <div 
          className="absolute inset-0 glass-shimmer"
          style={{
            mixBlendMode: 'screen',
            filter: 'blur(1px)'
          }}
        />

        {/* Falling glass shards */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`shard-${i}`}
            className="absolute glass-shard-fall"
            style={{
              left: `${45 + Math.random() * 10}%`,
              top: `${20 + Math.random() * 40}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${3 + Math.random() * 6}px`,
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '1px',
              animationDelay: `${0.5 + Math.random() * 1}s`,
              animationDuration: `${1.5 + Math.random() * 1}s`
            }}
          />
        ))}

        {/* Subtle distortion lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`distortion-${i}`}
            className="absolute"
            style={{
              left: `${48 + Math.random() * 4}%`,
              top: `${i * 16}%`,
              width: '1px',
              height: `${8 + Math.random() * 12}%`,
              background: `linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.04), transparent)`,
              transform: `rotate(${-10 + Math.random() * 20}deg)`,
              opacity: 0.6,
              animationDelay: `${0.2 + i * 0.1}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}

        {/* Frosted glass effect overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%)',
            backdropFilter: 'blur(0.5px)',
            mixBlendMode: 'screen'
          }}
        />
      </div>
    </>
  );
};

export default DigitalRupture;
