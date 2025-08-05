
import { useState, useRef, useEffect } from 'react';
import { LucideIcon, ChevronRight, Sparkles } from 'lucide-react';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  deliverables: string[];
  accentColor: {
    primary: string;
    glow: string;
    border: string;
    subtle: string;
  };
}

interface CinematicMethodologyStepProps {
  step: MethodologyStep;
  index: number;
  isActive: boolean;
  isVisible: boolean;
  onSelect: (stepId: number) => void;
  totalSteps: number;
  mousePosition: { x: number; y: number };
}

/**
 * Revolutionary 3D Holographic Step Component
 * - Magnetic hover effects with depth
 * - Liquid gradient morphing
 * - Neural network connections
 * - Volumetric particle systems
 */
const CinematicMethodologyStep = ({ 
  step, 
  index, 
  isActive, 
  isVisible, 
  onSelect, 
  totalSteps,
  mousePosition
}: CinematicMethodologyStepProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [localMousePos, setLocalMousePos] = useState({ x: 50, y: 50 });
  const [rippleEffect, setRippleEffect] = useState({ active: false, x: 0, y: 0 });
  const stepRef = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;
  
  // Enhanced color mapping with cinematic intensity
  const getStepColors = () => {
    const colorMaps = [
      { 
        primary: '59, 130, 246', 
        secondary: '34, 211, 238', 
        accent: '99, 102, 241',
        gradient: 'from-blue-500 via-cyan-400 to-indigo-500'
      },
      { 
        primary: '139, 92, 246', 
        secondary: '168, 85, 247', 
        accent: '196, 181, 253',
        gradient: 'from-purple-500 via-violet-400 to-fuchsia-500'
      },
      { 
        primary: '52, 211, 153', 
        secondary: '20, 184, 166', 
        accent: '110, 231, 183',
        gradient: 'from-emerald-400 via-teal-400 to-green-500'
      },
      { 
        primary: '249, 115, 22', 
        secondary: '251, 146, 60', 
        accent: '254, 215, 170',
        gradient: 'from-orange-500 via-amber-400 to-yellow-500'
      }
    ];
    
    return colorMaps[index % colorMaps.length];
  };

  const stepColors = getStepColors();

  // Local mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!stepRef.current) return;
      
      const rect = stepRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setLocalMousePos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isHovered]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRippleEffect({ active: true, x, y });
    setTimeout(() => setRippleEffect({ active: false, x: 0, y: 0 }), 1000);
    
    onSelect(step.id);
  };

  return (
    <div
      ref={stepRef}
      className="relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : 60}px) translateZ(0)`,
        transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${index * 150}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {/* Magnetic Connection Lines */}
      {isActive && index < totalSteps - 1 && (
        <div className={`absolute top-1/2 z-0 hidden lg:block ${isLeft ? 'left-full' : 'right-full'}`}>
          <div 
            className="h-0.5 bg-gradient-to-r opacity-60"
            style={{
              width: '8rem',
              background: `linear-gradient(${isLeft ? '90deg' : '270deg'}, 
                rgba(${stepColors.primary}, 0.8) 0%, 
                rgba(${stepColors.secondary}, 0.6) 50%, 
                rgba(${stepColors.accent}, 0.4) 100%
              )`,
              animation: 'neural-pulse 3s ease-in-out infinite',
              boxShadow: `0 0 10px rgba(${stepColors.primary}, 0.6)`
            }}
          />
          
          {/* Traveling Light Particle */}
          <div 
            className="absolute top-1/2 w-2 h-2 rounded-full -translate-y-1/2"
            style={{
              background: `radial-gradient(circle, rgba(${stepColors.primary}, 1) 0%, rgba(${stepColors.secondary}, 0.8) 70%, transparent 100%)`,
              animation: `particle-travel-${isLeft ? 'right' : 'left'} 2s ease-in-out infinite`,
              boxShadow: `0 0 8px rgba(${stepColors.primary}, 0.8)`
            }}
          />
        </div>
      )}

      {/* Main Step Container */}
      <div className={`flex items-start gap-12 lg:gap-20 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        
        {/* 3D Holographic Step Icon */}
        <div className="flex-shrink-0 relative">
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
          >
            {/* Holographic Base Platform */}
            <div 
              className={`relative w-24 h-24 lg:w-28 lg:h-28 rounded-2xl transition-all duration-700 ease-out backdrop-blur-sm ${
                isActive 
                  ? 'scale-110 shadow-2xl' 
                  : 'hover:scale-105'
              }`}
              style={{
                background: isActive 
                  ? `
                    linear-gradient(135deg, 
                      rgba(${stepColors.primary}, 0.15) 0%, 
                      rgba(${stepColors.secondary}, 0.1) 50%, 
                      rgba(${stepColors.accent}, 0.08) 100%
                    ),
                    radial-gradient(ellipse at ${localMousePos.x}% ${localMousePos.y}%, 
                      rgba(${stepColors.primary}, 0.2) 0%, transparent 70%
                    )
                  `
                  : `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.03) 0%, 
                      rgba(${stepColors.primary}, 0.05) 50%, 
                      rgba(255, 255, 255, 0.02) 100%
                    )
                  `,
                border: isActive 
                  ? `1px solid rgba(${stepColors.primary}, 0.3)`
                  : `1px solid rgba(255, 255, 255, 0.08)`,
                boxShadow: isActive 
                  ? `
                    0 20px 60px rgba(0, 0, 0, 0.4),
                    0 0 40px rgba(${stepColors.primary}, 0.3),
                    0 0 80px rgba(${stepColors.secondary}, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                  : isHovered 
                    ? `
                      0 12px 32px rgba(0, 0, 0, 0.3),
                      0 0 20px rgba(${stepColors.primary}, 0.2)
                    `
                    : '0 4px 16px rgba(0, 0, 0, 0.2)',
                transform: isHovered 
                  ? `translateZ(10px) rotateX(${(localMousePos.y - 50) * 0.1}deg) rotateY(${(localMousePos.x - 50) * 0.1}deg)`
                  : 'translateZ(0px) rotateX(0deg) rotateY(0deg)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Icon with 3D depth */}
              <div className="absolute inset-0 flex items-center justify-center">
                <step.icon 
                  className={`w-10 h-10 lg:w-12 lg:h-12 transition-all duration-500 ${
                    isActive 
                      ? `text-white drop-shadow-lg` 
                      : 'text-white/80 group-hover:text-white'
                  }`}
                  style={{
                    filter: isActive 
                      ? `drop-shadow(0 0 10px rgba(${stepColors.primary}, 0.8))`
                      : undefined,
                    transform: isHovered 
                      ? 'translateZ(5px) scale(1.1)' 
                      : 'translateZ(0px) scale(1)'
                  }}
                />
              </div>

              {/* Ripple Effect */}
              {rippleEffect.active && (
                <div 
                  className="absolute rounded-full border-2 opacity-75 animate-ping pointer-events-none"
                  style={{
                    left: rippleEffect.x - 20,
                    top: rippleEffect.y - 20,
                    width: 40,
                    height: 40,
                    borderColor: `rgba(${stepColors.primary}, 0.6)`,
                    background: `rgba(${stepColors.primary}, 0.1)`
                  }}
                />
              )}

              {/* Holographic Particle System */}
              {(isActive || isHovered) && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-0.5 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        background: `rgba(${i % 2 === 0 ? stepColors.primary : stepColors.secondary}, 0.8)`,
                        animation: `holographic-particle-${i % 3 + 1} ${2 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 1}s`,
                        boxShadow: `0 0 4px rgba(${i % 2 === 0 ? stepColors.primary : stepColors.secondary}, 0.8)`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Step Number with Depth */}
              <div 
                className={`absolute -bottom-3 -right-3 w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center transition-all duration-500 backdrop-blur-sm ${
                  isActive 
                    ? 'text-white border-2 scale-110' 
                    : 'text-white/60 border border-white/20 group-hover:text-white/80'
                }`}
                style={{
                  background: isActive 
                    ? `linear-gradient(135deg, rgba(${stepColors.primary}, 0.9), rgba(${stepColors.secondary}, 0.8))`
                    : 'rgba(0, 0, 0, 0.3)',
                  borderColor: isActive 
                    ? `rgba(${stepColors.primary}, 0.4)`
                    : undefined,
                  boxShadow: isActive 
                    ? `0 0 15px rgba(${stepColors.primary}, 0.6)`
                    : undefined
                }}
              >
                {step.id}
              </div>
            </div>

            {/* Holographic Glow Ring */}
            {isActive && (
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'transparent',
                  boxShadow: `
                    0 0 60px rgba(${stepColors.primary}, 0.3),
                    0 0 120px rgba(${stepColors.secondary}, 0.2),
                    inset 0 0 1px rgba(${stepColors.primary}, 0.8)
                  `,
                  animation: 'holographic-pulse 4s ease-in-out infinite'
                }}
              />
            )}
          </div>
        </div>

        {/* Enhanced Content Area with Liquid Gradients */}
        <div className="flex-1 max-w-2xl">
          <div 
            className={`cursor-pointer transition-all duration-700 ease-out ${
              isActive ? 'transform scale-[1.02]' : 'hover:transform hover:scale-[1.01]'
            }`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Phase Badge with Liquid Morphing */}
            <div className="mb-8">
              <span 
                className={`inline-flex items-center px-6 py-3 rounded-2xl text-sm font-medium tracking-wide transition-all duration-700 backdrop-blur-sm ${
                  isActive 
                    ? 'text-white border-2 shadow-2xl' 
                    : 'text-white/60 border border-white/10 hover:text-white/80'
                }`}
                style={{
                  background: isActive 
                    ? `linear-gradient(135deg, 
                        rgba(${stepColors.primary}, 0.8) 0%, 
                        rgba(${stepColors.secondary}, 0.6) 50%, 
                        rgba(${stepColors.accent}, 0.4) 100%
                      )`
                    : `linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.02) 0%, 
                        rgba(${stepColors.primary}, 0.05) 50%, 
                        rgba(255, 255, 255, 0.01) 100%
                      )`,
                  borderColor: isActive 
                    ? `rgba(${stepColors.primary}, 0.4)`
                    : undefined,
                  boxShadow: isActive 
                    ? `0 0 30px rgba(${stepColors.primary}, 0.4)`
                    : undefined
                }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {step.phase}
              </span>
            </div>

            {/* Ultra-Large Typography with Text Shimmer */}
            <div className="mb-10">
              <h3 
                className={`text-3xl lg:text-5xl xl:text-6xl font-black mb-6 leading-[0.95] tracking-tighter transition-all duration-700 ${
                  isActive 
                    ? 'text-white' 
                    : 'text-white/90 hover:text-white'
                } ${isLeft ? 'text-left' : 'lg:text-right'}`}
                style={{
                  textShadow: isActive 
                    ? `0 0 20px rgba(${stepColors.primary}, 0.5)`
                    : undefined,
                  background: isActive 
                    ? `linear-gradient(135deg, 
                        rgba(255, 255, 255, 1) 0%, 
                        rgba(${stepColors.primary}, 0.9) 50%, 
                        rgba(255, 255, 255, 1) 100%
                      )`
                    : undefined,
                  backgroundSize: isActive ? '200% 100%' : undefined,
                  backgroundClip: isActive ? 'text' : undefined,
                  WebkitBackgroundClip: isActive ? 'text' : undefined,
                  WebkitTextFillColor: isActive ? 'transparent' : undefined,
                  animation: isActive ? 'text-shimmer 3s ease-in-out infinite' : undefined
                }}
              >
                {step.title}
              </h3>
              
              <p 
                className={`text-xl lg:text-2xl text-white/60 font-light leading-relaxed tracking-wide transition-all duration-700 hover:text-white/80 ${
                  isLeft ? 'text-left' : 'lg:text-right'
                }`}
              >
                {step.subtitle}
              </p>
            </div>

            {/* Progressive Content Revelation */}
            <div 
              className={`overflow-hidden transition-all duration-1000 ease-out ${
                isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div 
                className={`pt-8 ${isLeft ? '' : 'lg:text-right'}`}
                style={{
                  borderTop: `1px solid rgba(${stepColors.primary}, 0.3)`
                }}
              >
                <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 font-light">
                  {step.description}
                </p>
                
                {/* Premium Deliverables Grid */}
                <div className="space-y-6">
                  <h4 className="text-white/50 font-medium text-sm uppercase tracking-widest mb-8">
                    Deliverables & Resultaten:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.deliverables.map((deliverable, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-start text-sm text-white/60 hover:text-white/90 transition-all duration-500 p-4 rounded-xl backdrop-blur-sm ${
                          isLeft ? '' : 'lg:justify-end lg:flex-row-reverse lg:text-right'
                        }`}
                        style={{
                          background: `linear-gradient(135deg, 
                            rgba(${stepColors.primary}, 0.05) 0%, 
                            rgba(255, 255, 255, 0.02) 100%
                          )`,
                          border: `1px solid rgba(${stepColors.primary}, 0.1)`,
                          animationDelay: `${idx * 100}ms`
                        }}
                      >
                        <ChevronRight 
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-all duration-500 ${
                            isLeft ? 'mr-3' : 'ml-3 transform rotate-180'
                          }`}
                          style={{ 
                            color: `rgba(${stepColors.primary}, 0.6)`,
                            filter: `drop-shadow(0 0 2px rgba(${stepColors.primary}, 0.3))`
                          }}
                        />
                        <span className="font-light leading-relaxed">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Magnetic Hover Indicator */}
            <div 
              className={`mt-8 flex items-center text-white/20 text-sm transition-all duration-500 ${
                isHovered && !isActive ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-4'
              } ${isLeft ? 'justify-start' : 'lg:justify-end'}`}
            >
              <span>Ontdek meer details</span>
              <ChevronRight className={`w-4 h-4 ml-2 transition-all duration-300 ${
                isLeft ? '' : 'transform rotate-180'
              }`} />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes neural-pulse {
            0%, 100% { opacity: 0.6; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.2); }
          }

          @keyframes particle-travel-right {
            0% { left: -4px; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: calc(100% + 4px); opacity: 0; }
          }

          @keyframes particle-travel-left {
            0% { right: -4px; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { right: calc(100% + 4px); opacity: 0; }
          }

          @keyframes holographic-particle-1 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
            50% { transform: translate(-6px, -8px) scale(1.2); opacity: 1; }
          }

          @keyframes holographic-particle-2 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
            50% { transform: translate(8px, -4px) scale(0.8); opacity: 1; }
          }

          @keyframes holographic-particle-3 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
            50% { transform: translate(-4px, 6px) scale(1.4); opacity: 1; }
          }

          @keyframes holographic-pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }

          @keyframes text-shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            @keyframes holographic-particle-1,
            @keyframes holographic-particle-2,
            @keyframes holographic-particle-3 {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
              50% { transform: translate(-2px, -2px) scale(1.1); opacity: 0.6; }
            }
          }
        `
      }} />
    </div>
  );
};

export default CinematicMethodologyStep;
