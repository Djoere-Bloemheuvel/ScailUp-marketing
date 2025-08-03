
import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AutomationCardProps {
  feature: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    accent: string;
    glowColor: string;
    borderGlow: string;
    iconGlow: string;
    delay: number;
  };
  index: number;
  isVisible: boolean;
  isEven: boolean;
}

const AutomationCard = ({ feature, index, isVisible, isEven }: AutomationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      data-automation-item
      data-index={index}
      className={`
        group relative transition-all duration-1000 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
        }
        ${!isEven ? 'lg:mt-24' : ''}
        transform-gpu will-change-transform
      `}
      style={{ 
        transitionDelay: `${feature.delay}ms`,
        transform: 'translateZ(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced ambient background glow - always visible */}
      <div className={`
        absolute inset-0 rounded-[24px] bg-gradient-to-r ${feature.accent} 
        opacity-20 group-hover:opacity-40 transition-all duration-700 pointer-events-none
        will-change-opacity blur-xl
      `} style={{ transform: 'translateY(8px) scale(1.1)' }} />

      {/* Main card container with premium glassmorphism */}
      <div className={`
        relative p-8 lg:p-10 rounded-[24px] backdrop-blur-xl 
        border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent 
        hover:from-white/[0.12] hover:via-white/[0.08] hover:to-white/[0.04]
        hover:border-white/[0.16] hover:backdrop-blur-2xl
        transition-all duration-700 ease-out will-change-transform
        group-hover:scale-[1.02] group-hover:translate-y-[-8px]
        ${feature.glowColor} hover:shadow-2xl
        before:absolute before:inset-0 before:rounded-[24px] before:bg-gradient-to-r before:${feature.accent} before:opacity-[0.03] before:group-hover:opacity-[0.08] before:transition-opacity before:duration-700
      `}>
        
        {/* Enhanced border glow on hover */}
        <div className={`
          absolute inset-0 rounded-[24px] border ${feature.borderGlow}
          opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none
        `} />
        
        {/* Icon container with enhanced styling */}
        <div className="relative mb-8">
          <div className="relative w-20 h-20 mx-auto lg:mx-0">
            {/* Multi-layered icon background with constant subtle glow */}
            <div className={`
              absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} 
              opacity-25 group-hover:opacity-50 transition-all duration-500
              will-change-opacity
            `} />
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-premium-black/80 to-premium-gray/25 backdrop-blur-sm" />
            
            {/* Icon with floating animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <feature.icon 
                className={`
                  w-9 h-9 text-white/85 transition-all duration-500 ease-out
                  group-hover:scale-110 group-hover:${feature.iconGlow} group-hover:text-white
                  will-change-transform animate-[float_6s_ease-in-out_infinite]
                  drop-shadow-lg group-hover:drop-shadow-2xl
                `}
                style={{
                  filter: `drop-shadow(0 2px 8px rgba(255, 255, 255, 0.15)) ${isHovered ? `drop-shadow(0 4px 16px rgba(59, 130, 246, 0.4))` : ''}`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: `translateZ(0) translateY(${Math.sin(Date.now() * 0.001) * 2}px)`
                }}
              />
            </div>
            
            {/* Constant ambient ring with enhanced visibility */}
            <div className={`
              absolute inset-[-3px] rounded-2xl bg-gradient-to-r ${feature.accent} 
              opacity-15 group-hover:opacity-35 transition-opacity duration-500 blur-md
              will-change-opacity animate-pulse
            `} />
          </div>
        </div>

        {/* Content with enhanced typography */}
        <div className="text-center lg:text-left space-y-6">
          {/* Title with enhanced glow */}
          <h3 className={`
            text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-tight
            transition-all duration-500 group-hover:${feature.iconGlow}
            will-change-color drop-shadow-sm group-hover:drop-shadow-lg
          `}>
            {feature.title}
          </h3>
          
          {/* Subtitle with enhanced readability */}
          <p className="text-base lg:text-lg text-premium-silver/85 font-light leading-relaxed max-w-sm mx-auto lg:mx-0 transition-colors duration-500 group-hover:text-premium-silver">
            {feature.subtitle}
          </p>

          {/* New descriptive text */}
          <div className="pt-2 border-t border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500">
            <p className="text-sm lg:text-base text-premium-silver/70 font-light leading-relaxed max-w-md mx-auto lg:mx-0 transition-colors duration-500 group-hover:text-premium-silver/90">
              {feature.description}
            </p>
          </div>
        </div>

        {/* Enhanced microinteraction elements */}
        <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/15 group-hover:bg-white/35 transition-all duration-500 group-hover:scale-125 animate-pulse" />
        <div className="absolute bottom-6 left-6 w-1 h-1 rounded-full bg-white/10 group-hover:bg-white/30 transition-all duration-500 group-hover:scale-150 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-4 w-0.5 h-0.5 rounded-full bg-white/8 group-hover:bg-white/25 transition-all duration-500 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Enhanced floating shadow with constant ambient lighting */}
      <div className={`
        absolute inset-0 rounded-[24px] ${feature.glowColor} 
        opacity-15 group-hover:opacity-40 transition-opacity duration-700 -z-10 blur-3xl
        will-change-opacity animate-pulse
      `} style={{ transform: 'translateY(16px) scale(1.05)' }} />
    </div>
  );
};

export default AutomationCard;
