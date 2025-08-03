
import { useEffect, useState, useCallback } from 'react';

interface GlitchLayer {
  id: string;
  type: 'scanline' | 'rgb-offset' | 'pixelflicker' | 'slice';
  x: number;
  y: number;
  width: number;
  height: number;
  intensity: number;
  duration: number;
  active: boolean;
}

const GlitchBackground = () => {
  const [glitchLayers, setGlitchLayers] = useState<GlitchLayer[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const createGlitch = useCallback((): GlitchLayer => {
    const glitchTypes: GlitchLayer['type'][] = ['scanline', 'rgb-offset', 'pixelflicker', 'slice'];
    const type = glitchTypes[Math.floor(Math.random() * glitchTypes.length)];
    
    // Random positioning and sizing
    const x = Math.random() * 100; // percentage
    const y = Math.random() * 100; // percentage
    
    let width, height;
    switch (type) {
      case 'scanline':
        width = 100; // full width
        height = Math.random() * 3 + 1; // thin horizontal line
        break;
      case 'slice':
        width = 100; // full width
        height = Math.random() * 15 + 5; // thicker horizontal bar
        break;
      case 'rgb-offset':
        width = Math.random() * 40 + 20; // medium width
        height = Math.random() * 30 + 10; // medium height
        break;
      case 'pixelflicker':
        width = Math.random() * 25 + 10; // smaller width
        height = Math.random() * 25 + 10; // smaller height
        break;
      default:
        width = 50;
        height = 50;
    }

    return {
      id: `glitch-${Date.now()}-${Math.random()}`,
      type,
      x,
      y,
      width,
      height,
      intensity: Math.random() * 0.8 + 0.2, // 0.2 to 1.0
      duration: Math.random() * 500 + 500, // 500-1000ms
      active: true
    };
  }, []);

  const triggerGlitch = useCallback(() => {
    const newGlitch = createGlitch();
    setGlitchLayers(prev => [...prev.filter(g => g.active), newGlitch]);

    // Remove glitch after its duration
    setTimeout(() => {
      setGlitchLayers(prev => prev.map(g => 
        g.id === newGlitch.id ? { ...g, active: false } : g
      ).filter(g => g.active || g.id === newGlitch.id));
      
      // Clean up after animation
      setTimeout(() => {
        setGlitchLayers(prev => prev.filter(g => g.id !== newGlitch.id));
      }, 200);
    }, newGlitch.duration);
  }, [createGlitch]);

  useEffect(() => {
    // Initial glitch after 1-2 seconds
    const initialDelay = setTimeout(() => {
      triggerGlitch();
      setIsInitialized(true);
    }, Math.random() * 1000 + 1000);

    return () => clearTimeout(initialDelay);
  }, [triggerGlitch]);

  useEffect(() => {
    if (!isInitialized) return;

    // Set up intermittent glitching (2-4 times per minute)
    const scheduleNextGlitch = () => {
      const nextGlitchDelay = Math.random() * 30000 + 15000; // 15-45 seconds
      return setTimeout(() => {
        triggerGlitch();
        scheduleNextGlitch();
      }, nextGlitchDelay);
    };

    const timeoutId = scheduleNextGlitch();

    return () => clearTimeout(timeoutId);
  }, [isInitialized, triggerGlitch]);

  const renderGlitchLayer = (glitch: GlitchLayer) => {
    const baseStyles: React.CSSProperties = {
      position: 'absolute',
      left: `${glitch.x}%`,
      top: `${glitch.y}%`,
      width: `${glitch.width}%`,
      height: `${glitch.height}%`,
      pointerEvents: 'none',
      zIndex: -1, // Ensure glitch effects stay behind everything
    };

    switch (glitch.type) {
      case 'scanline':
        return (
          <div
            key={glitch.id}
            className="glitch-scanline"
            style={{
              ...baseStyles,
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(0, 255, 255, ${glitch.intensity * 0.3}) 25%, 
                rgba(255, 0, 255, ${glitch.intensity * 0.4}) 50%, 
                rgba(255, 255, 0, ${glitch.intensity * 0.2}) 75%, 
                transparent 100%)`,
              mixBlendMode: 'screen',
              animation: `glitch-scanline ${glitch.duration}ms linear forwards`,
            }}
          />
        );

      case 'rgb-offset':
        return (
          <div
            key={glitch.id}
            className="glitch-rgb-offset"
            style={{
              ...baseStyles,
              animation: `glitch-rgb-offset ${glitch.duration}ms ease-out forwards`,
              opacity: glitch.intensity * 0.5, // Reduced opacity to prevent interference
            }}
          >
            <div 
              className="absolute inset-0 bg-red-500 mix-blend-screen"
              style={{ 
                transform: `translateX(${glitch.intensity * 2}px)`, // Reduced offset
                opacity: 0.3 
              }}
            />
            <div 
              className="absolute inset-0 bg-green-500 mix-blend-screen"
              style={{ 
                transform: `translateX(${-glitch.intensity * 1.5}px)`, // Reduced offset
                opacity: 0.2 
              }}
            />
            <div 
              className="absolute inset-0 bg-blue-500 mix-blend-screen"
              style={{ 
                transform: `translateX(${glitch.intensity * 1}px)`, // Reduced offset
                opacity: 0.25 
              }}
            />
          </div>
        );

      case 'pixelflicker':
        return (
          <div
            key={glitch.id}
            className="glitch-pixelflicker"
            style={{
              ...baseStyles,
              background: `radial-gradient(circle, 
                rgba(255, 255, 255, ${glitch.intensity * 0.4}) 0%, 
                rgba(0, 255, 255, ${glitch.intensity * 0.3}) 30%, 
                rgba(255, 0, 255, ${glitch.intensity * 0.2}) 60%, 
                transparent 80%)`,
              mixBlendMode: 'overlay',
              animation: `glitch-pixelflicker ${glitch.duration}ms steps(8, end) forwards`,
              filter: 'blur(0.5px)',
            }}
          />
        );

      case 'slice':
        return (
          <div
            key={glitch.id}
            className="glitch-slice"
            style={{
              ...baseStyles,
              background: `linear-gradient(180deg, 
                transparent 0%, 
                rgba(255, 255, 255, ${glitch.intensity * 0.05}) 20%, 
                rgba(0, 255, 255, ${glitch.intensity * 0.15}) 40%, 
                rgba(255, 0, 255, ${glitch.intensity * 0.2}) 60%, 
                rgba(255, 255, 0, ${glitch.intensity * 0.1}) 80%, 
                transparent 100%)`,
              mixBlendMode: 'lighten',
              animation: `glitch-slice ${glitch.duration}ms ease-in-out forwards`,
              clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)',
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {glitchLayers.map(renderGlitchLayer)}
    </div>
  );
};

export default GlitchBackground;
