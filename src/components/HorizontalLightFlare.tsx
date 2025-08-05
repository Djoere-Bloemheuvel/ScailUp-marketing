
interface HorizontalLightFlareProps {
  position?: 'top' | 'bottom';
  className?: string;
}

const HorizontalLightFlare = ({ position = 'bottom', className = '' }: HorizontalLightFlareProps) => {
  return (
    <div className={`absolute left-1/2 transform -translate-x-1/2 w-[85%] max-w-6xl h-px pointer-events-none z-30 ${className}`}>
      {/* Primary horizontal light flare */}
      <div className="relative w-full h-full">
        {/* Main glow strip - bluish/purple with soft falloff */}
        <div 
          className="absolute inset-0 w-full h-full opacity-60"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.1) 10%, 
              rgba(34, 211, 238, 0.3) 25%, 
              rgba(147, 51, 234, 0.4) 50%, 
              rgba(34, 211, 238, 0.3) 75%, 
              rgba(59, 130, 246, 0.1) 90%, 
              transparent 100%
            )`,
            filter: 'blur(2px)',
            animation: 'horizontal-flare-pulse 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary glow layer for depth */}
        <div 
          className="absolute inset-0 w-full h-full opacity-40"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(34, 211, 238, 0.05) 15%, 
              rgba(147, 51, 234, 0.2) 50%, 
              rgba(34, 211, 238, 0.05) 85%, 
              transparent 100%
            )`,
            filter: 'blur(4px)',
            animation: 'horizontal-flare-pulse 12s ease-in-out infinite reverse'
          }}
        />
        
        {/* Sharp central accent line */}
        <div 
          className="absolute inset-0 w-full h-px opacity-80"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              transparent 20%, 
              rgba(34, 211, 238, 0.6) 50%, 
              transparent 80%, 
              transparent 100%
            )`,
            filter: 'blur(0.5px)',
            animation: 'horizontal-flare-shimmer 6s ease-in-out infinite'
          }}
        />
        
        {/* Ambient outer glow */}
        <div 
          className="absolute inset-0 w-full h-8 -top-4 opacity-25"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.02) 20%, 
              rgba(147, 51, 234, 0.05) 50%, 
              rgba(59, 130, 246, 0.02) 80%, 
              transparent 100%
            )`,
            filter: 'blur(8px)'
          }}
        />
      </div>
    </div>
  );
};

export default HorizontalLightFlare;
