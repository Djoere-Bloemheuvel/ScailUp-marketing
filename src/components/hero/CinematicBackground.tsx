
import { useState, useEffect } from 'react';

interface CinematicBackgroundProps {
  hideGlassContainer?: boolean;
}

const CinematicBackground = ({ hideGlassContainer = false }: CinematicBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/20 to-purple-950/30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                      rgba(59, 130, 246, 0.1) 0%, 
                      rgba(147, 51, 234, 0.05) 40%, 
                      transparent 70%)`
        }}
      />
      
      {!hideGlassContainer && (
        <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-br from-white/[0.02] to-white/[0.01]" />
      )}
    </div>
  );
};

export default CinematicBackground;
