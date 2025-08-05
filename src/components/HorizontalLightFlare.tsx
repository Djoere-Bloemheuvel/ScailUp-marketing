
interface HorizontalLightFlareProps {
  position?: 'top' | 'bottom';
  className?: string;
}

const HorizontalLightFlare = ({ position = 'bottom', className = '' }: HorizontalLightFlareProps) => {
  // Determine positioning classes based on the position prop
  const positionClasses = position === 'top' 
    ? 'top-0' 
    : 'bottom-0';

  return (
    <div className={`absolute left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl h-px pointer-events-none z-30 ${positionClasses} ${className}`}>
      {/* Primary horizontal light flare */}
      <div className="relative w-full h-full">
        {/* Main glow strip - extended width with softer edges */}
        <div 
          className="absolute inset-0 w-full h-full opacity-85"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.1) 3%, 
              rgba(34, 211, 238, 0.3) 12%, 
              rgba(147, 51, 234, 0.7) 50%, 
              rgba(34, 211, 238, 0.3) 88%, 
              rgba(59, 130, 246, 0.1) 97%, 
              transparent 100%
            )`,
            filter: 'blur(1px)',
            animation: 'horizontal-flare-pulse 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary glow layer - wider spread with gentler fade */}
        <div 
          className="absolute inset-0 w-full h-full opacity-70"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(34, 211, 238, 0.05) 5%, 
              rgba(147, 51, 234, 0.4) 50%, 
              rgba(34, 211, 238, 0.05) 95%, 
              transparent 100%
            )`,
            filter: 'blur(3px)',
            animation: 'horizontal-flare-pulse 12s ease-in-out infinite reverse'
          }}
        />
        
        {/* Enhanced central accent line - extended reach */}
        <div 
          className="absolute inset-0 w-full h-px opacity-95"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              transparent 8%, 
              rgba(34, 211, 238, 0.8) 50%, 
              transparent 92%, 
              transparent 100%
            )`,
            filter: 'blur(0.3px)',
            animation: 'horizontal-flare-shimmer 6s ease-in-out infinite'
          }}
        />
        
        {/* Extended ambient outer glow - much wider with soft transitions */}
        <div 
          className="absolute inset-0 w-full h-12 -top-6 opacity-40"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.02) 8%, 
              rgba(147, 51, 234, 0.1) 50%, 
              rgba(59, 130, 246, 0.02) 92%, 
              transparent 100%
            )`,
            filter: 'blur(6px)'
          }}
        />
        
        {/* Additional intense core glow - wider spread */}
        <div 
          className="absolute inset-0 w-full h-full opacity-60"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              transparent 18%, 
              rgba(147, 51, 234, 0.6) 45%, 
              rgba(34, 211, 238, 0.8) 50%, 
              rgba(147, 51, 234, 0.6) 55%, 
              transparent 82%, 
              transparent 100%
            )`,
            filter: 'blur(0.5px)',
            animation: 'horizontal-flare-shimmer 4s ease-in-out infinite'
          }}
        />
        
        {/* NEW: Downward aura glow - only show when position is bottom */}
        {position === 'bottom' && (
          <>
            {/* Primary downward aura - extended width with softer edges */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[75%] h-32 opacity-30"
              style={{
                background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(147, 51, 234, 0.15) 0%, 
                  rgba(34, 211, 238, 0.1) 30%, 
                  rgba(59, 130, 246, 0.05) 60%, 
                  rgba(59, 130, 246, 0.02) 85%, 
                  transparent 100%
                )`,
                filter: 'blur(8px)',
                animation: 'aura-pulse 10s ease-in-out infinite'
              }}
            />
            
            {/* Secondary wider aura - even broader spread */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[95%] h-40 opacity-20"
              style={{
                background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(34, 211, 238, 0.08) 0%, 
                  rgba(147, 51, 234, 0.06) 40%, 
                  rgba(59, 130, 246, 0.03) 70%, 
                  rgba(59, 130, 246, 0.01) 90%, 
                  transparent 100%
                )`,
                filter: 'blur(12px)',
                animation: 'aura-pulse 14s ease-in-out infinite reverse'
              }}
            />
            
            {/* Subtle particle-like glow points - extended reach */}
            <div 
              className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[55%] h-24 opacity-25"
              style={{
                background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(34, 211, 238, 0.12) 0%, 
                  rgba(147, 51, 234, 0.08) 50%, 
                  rgba(147, 51, 234, 0.03) 80%, 
                  transparent 100%
                )`,
                filter: 'blur(4px)',
                animation: 'aura-shimmer 8s ease-in-out infinite'
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HorizontalLightFlare;
