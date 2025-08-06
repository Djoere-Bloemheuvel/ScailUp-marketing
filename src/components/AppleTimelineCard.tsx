
import { LucideIcon } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { usePerformantIntersection } from '../hooks/usePerformantIntersection';
import { useOptimizedPerformance } from '../hooks/useOptimizedPerformance';

interface AppleTimelineCardProps {
  step: {
    id: number;
    number: string;
    title: string;
    subtitle: string;
    icon: LucideIcon | null;
    glowColor: string;
    glowColorHover: string;
    isTransition?: boolean;
  };
  isLeft: boolean;
  delay: number;
}

const AppleTimelineCard = ({ step, isLeft, delay }: AppleTimelineCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Use optimized intersection observer
  const { isIntersecting, setRef } = usePerformantIntersection({
    threshold: 0.2,
    rootMargin: '50px 0px -30px 0px',
    triggerOnce: true,
    delay: delay
  });

  // Use performance optimizations
  const { getAnimationClass, shouldUseAnimations, capabilities } = useOptimizedPerformance({
    enableAnimations: true,
    animationQuality: 'medium'
  });

  // Set visibility when intersecting
  useEffect(() => {
    if (isIntersecting && !isVisible) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, shouldUseAnimations ? delay : 0);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isIntersecting, isVisible, delay, shouldUseAnimations]);

  // Memoized styling calculations
  const cardStyles = useMemo(() => {
    const isTransitionStep = step.isTransition;
    return {
      isTransitionStep,
      cardWidth: isTransitionStep ? 'max-w-xs' : 'max-w-sm',
      cardScale: isTransitionStep ? 'scale-90' : 'scale-100'
    };
  }, [step.isTransition]);

  // Optimized animation classes
  const animationClasses = useMemo(() => {
    if (!shouldUseAnimations) return '';
    
    const baseClass = 'core-entrance';
    return getAnimationClass(baseClass);
  }, [shouldUseAnimations, getAnimationClass]);

  return (
    <div
      ref={setRef}
      className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      {/* Optimized Ambient Glow - only render if not low-end device */}
      {shouldUseAnimations && !capabilities.isLowEndDevice && (
        <div
          className={`
            absolute inset-0 transition-all duration-600 pointer-events-none
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
        >
          {/* Reduced glow layers for better performance */}
          <div
            className={`
              absolute rounded-full blur-[3rem]
              bg-gradient-to-br ${step.glowColor} transition-all duration-700
              ${isVisible ? 'scale-100' : 'scale-75'}
              ${isLeft ? '-left-48 top-1/2 -translate-y-1/2' : '-right-48 top-1/2 -translate-y-1/2'}
              ${cardStyles.isTransitionStep ? 'w-64 h-64 opacity-20' : 'w-80 h-80 opacity-30'}
            `}
          />

          <div
            className={`
              absolute rounded-full blur-2xl
              bg-gradient-to-br ${step.glowColor} transition-all duration-500
              ${isVisible ? 'scale-100' : 'scale-80'}
              ${isLeft ? '-left-24 top-1/2 -translate-y-1/2' : '-right-24 top-1/2 -translate-y-1/2'}
              ${cardStyles.isTransitionStep ? 'w-48 h-48 opacity-15' : 'w-64 h-64 opacity-20'}
            `}
          />
        </div>
      )}

      {/* Optimized Card Container */}
      <div
        className={`
          relative w-full ${cardStyles.cardWidth} ${cardStyles.cardScale}
          ${isVisible && shouldUseAnimations
            ? `opacity-100 translate-y-0 scale-100 ${animationClasses}`
            : isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
          }
          ${shouldUseAnimations ? 'transition-all duration-500 gpu-accelerated' : 'transition-opacity duration-300'}
        `}
      >
        {/* Simplified Card with optimized glassmorphism */}
        <div className={`
          relative z-10
          ${isLeft ? 'mr-6 lg:mr-10' : 'ml-6 lg:ml-10'}
        `}>
          <div className={`
            relative rounded-3xl backdrop-blur-xl shadow-2xl
            ${shouldUseAnimations ? 'transition-all duration-400 optimized-card-hover' : ''}
            ${cardStyles.isTransitionStep
              ? 'p-5 lg:p-6 bg-white/[0.015] border border-white/[0.06]'
              : 'p-6 lg:p-7 bg-white/[0.02] border border-white/[0.08]'
            }
          `}>

            {/* Optimized Step Number */}
            <div className={`flex items-start justify-between mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
              <div className="relative">
                <div className={`
                  font-black leading-none mb-2 font-mono
                  ${cardStyles.isTransitionStep
                    ? 'text-3xl lg:text-4xl text-white/8'
                    : 'text-4xl lg:text-5xl text-white/10'
                  }
                `}>
                  {step.number}
                </div>
                <div className={`
                  absolute top-0.5 left-0.5 font-black leading-none font-mono
                  bg-gradient-to-br bg-clip-text text-transparent
                  ${cardStyles.isTransitionStep
                    ? 'text-3xl lg:text-4xl from-white/60 via-white/45 to-white/35'
                    : 'text-4xl lg:text-5xl from-white/90 via-white/70 to-white/50'
                  }
                `}>
                  {step.number}
                </div>
              </div>

              {/* Icon - only if not transition step */}
              {step.icon && (
                <div className={`
                  w-5 h-5 text-white/40
                  ${shouldUseAnimations ? 'optimized-icon-hover' : ''}
                `}>
                  <step.icon className="w-full h-full" />
                </div>
              )}
            </div>

            {/* Optimized Content */}
            <div className="space-y-3">
              <h3 className={`
                font-bold leading-tight tracking-tight
                ${cardStyles.isTransitionStep
                  ? 'text-base lg:text-lg text-white/80'
                  : 'text-lg lg:text-xl text-white/95'
                }
                ${isLeft ? 'text-left' : 'text-right'}
              `}>
                {step.title}
              </h3>

              <p className={`
                font-light leading-relaxed
                ${cardStyles.isTransitionStep
                  ? 'text-white/50 text-xs lg:text-sm'
                  : 'text-white/65 text-sm lg:text-base'
                }
                ${isLeft ? 'text-left' : 'text-right'}
              `}>
                {step.subtitle}
              </p>
            </div>

            {/* Simplified Connection line */}
            <div className={`
              absolute top-1/2 -translate-y-0.5
              bg-gradient-to-r from-white/20 to-transparent
              ${cardStyles.isTransitionStep ? 'w-4 lg:w-6 h-px opacity-60' : 'w-6 lg:w-10 h-px'}
              ${isLeft ? '-right-4 lg:-right-6 origin-left' : '-left-4 lg:-left-6 rotate-180 origin-right'}
            `}>
              <div className={`absolute inset-0 w-1 h-full rounded-full animate-pulse ${
                cardStyles.isTransitionStep
                  ? 'bg-gradient-to-r from-white/20 to-transparent'
                  : 'bg-gradient-to-r from-cyan-400/40 to-transparent'
              }`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
