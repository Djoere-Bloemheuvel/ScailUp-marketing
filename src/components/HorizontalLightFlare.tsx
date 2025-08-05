
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
    <div className={`absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-none h-px pointer-events-none z-30 ${positionClasses} ${className}`}>
      {/* Primary horizontal light flare - made much wider */}
      <div className="relative w-full h-full">
        {/* Main glow strip - enhanced intensity with 50% stronger opacity and colors */}
        <div 
          className="absolute inset-0 w-full h-full opacity-100"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.45) 5%, 
              rgba(34, 211, 238, 0.9) 15%, 
              rgba(147, 51, 234, 1) 50%, 
              rgba(34, 211, 238, 0.9) 85%, 
              rgba(59, 130, 246, 0.45) 95%, 
              transparent 100%
            )`,
            filter: 'blur(1px)',
            animation: 'horizontal-flare-pulse 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary glow layer for enhanced depth - 50% stronger */}
        <div 
          className="absolute inset-0 w-full h-full opacity-100"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(34, 211, 238, 0.25) 8%, 
              rgba(147, 51, 234, 0.75) 50%, 
              rgba(34, 211, 238, 0.25) 92%, 
              transparent 100%
            )`,
            filter: 'blur(3px)',
            animation: 'horizontal-flare-pulse 12s ease-in-out infinite reverse'
          }}
        />
        
        {/* Enhanced central accent line - 50% more intense */}
        <div 
          className="absolute inset-0 w-full h-px opacity-100"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              transparent 10%, 
              rgba(34, 211, 238, 1) 50%, 
              transparent 90%, 
              transparent 100%
            )`,
            filter: 'blur(0.3px)',
            animation: 'horizontal-flare-shimmer 6s ease-in-out infinite'
          }}
        />
        
        {/* Extended ambient outer glow - 50% stronger */}
        <div 
          className="absolute inset-0 w-full h-16 -top-8 opacity-70"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.12) 10%, 
              rgba(147, 51, 234, 0.25) 50%, 
              rgba(59, 130, 246, 0.12) 90%, 
              transparent 100%
            )`,
            filter: 'blur(8px)'
          }}
        />
        
        {/* Additional intense core glow - enhanced */}
        <div 
          className="absolute inset-0 w-full h-full opacity-100"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              transparent 20%, 
              rgba(147, 51, 234, 1) 40%, 
              rgba(34, 211, 238, 1) 50%, 
              rgba(147, 51, 234, 1) 60%, 
              transparent 80%, 
              transparent 100%
            )`,
            filter: 'blur(0.5px)',
            animation: 'horizontal-flare-shimmer 4s ease-in-out infinite'
          }}
        />
        
        {/* Ultra-wide base glow - 50% more intense */}
        <div 
          className="absolute inset-0 w-full h-full opacity-75"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.15) 2%, 
              rgba(34, 211, 238, 0.3) 25%, 
              rgba(147, 51, 234, 0.6) 50%, 
              rgba(34, 211, 238, 0.3) 75%, 
              rgba(59, 130, 246, 0.15) 98%, 
              transparent 100%
            )`,
            filter: 'blur(6px)',
            animation: 'horizontal-flare-pulse 10s ease-in-out infinite'
          }}
        />
        
        {/* NEW: Extra intense core layer */}
        <div 
          className="absolute inset-0 w-full h-full opacity-85"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              transparent 25%, 
              rgba(147, 51, 234, 0.8) 45%, 
              rgba(34, 211, 238, 1) 50%, 
              rgba(147, 51, 234, 0.8) 55%, 
              transparent 75%, 
              transparent 100%
            )`,
            filter: 'blur(0.2px)',
            animation: 'horizontal-flare-shimmer 5s ease-in-out infinite'
          }}
        />
        
        {/* Subtle ambient downward glow - enhanced intensity */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 w-full opacity-25 z-20 ${position === 'top' ? 'top-0' : 'bottom-0'}`}
          style={{
            height: '300px',
            background: `radial-gradient(ellipse 90% 100% at 50% ${position === 'top' ? '0%' : '0%'}, 
              rgba(34, 211, 238, 0.6) 0%, 
              rgba(59, 130, 246, 0.45) 20%, 
              rgba(34, 211, 238, 0.3) 40%, 
              rgba(59, 130, 246, 0.15) 60%, 
              transparent 100%
            )`,
            filter: 'blur(80px)',
            animation: 'ambient-glow-pulse 12s ease-in-out infinite',
            ...(position === 'top' ? { top: '0px' } : { bottom: '0px' })
          }}
        />
        
        {/* Downward aura glow - enhanced for bottom position */}
        {position === 'bottom' && (
          <>
            {/* Primary downward aura - 50% more intense */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-40 opacity-55"
              style={{
                background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(147, 51, 234, 0.35) 0%, 
                  rgba(34, 211, 238, 0.25) 30%, 
                  rgba(59, 130, 246, 0.12) 60%, 
                  transparent 100%
                )`,
                filter: 'blur(10px)',
                animation: 'aura-pulse 10s ease-in-out infinite'
              }}
            />
            
            {/* Secondary wider aura - enhanced */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-48 opacity-40"
              style={{
                background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(34, 211, 238, 0.18) 0%, 
                  rgba(147, 51, 234, 0.12) 40%, 
                  rgba(59, 130, 246, 0.06) 70%, 
                  transparent 100%
                )`,
                filter: 'blur(15px)',
                animation: 'aura-pulse 14s ease-in-out infinite reverse'
              }}
            />
            
            {/* Subtle particle-like glow points - enhanced */}
            <div 
              className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[60%] h-32 opacity-45"
              style={{
                background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(34, 211, 238, 0.25) 0%, 
                  rgba(147, 51, 234, 0.18) 50%, 
                  transparent 100%
                )`,
                filter: 'blur(6px)',
                animation: 'aura-shimmer 8s ease-in-out infinite'
              }}
            />
            
            {/* NEW: Extra intense downward beam */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-24 opacity-60"
              style={{
                background: `radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(147, 51, 234, 0.4) 0%, 
                  rgba(34, 211, 238, 0.3) 40%, 
                  transparent 100%
                )`,
                filter: 'blur(4px)',
                animation: 'aura-shimmer 6s ease-in-out infinite'
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HorizontalLightFlare;
