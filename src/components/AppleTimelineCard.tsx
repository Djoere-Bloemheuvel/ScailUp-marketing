
import { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Smoother staggered animation with better timing
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1, // Trigger earlier
        rootMargin: '100px 0px -50px 0px' // More generous margins for smoother loading
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  // Special styling for transition step
  const isTransitionStep = step.isTransition;
  const cardWidth = isTransitionStep ? 'max-w-xs' : 'max-w-sm'; // Smaller width for transition
  const cardScale = isTransitionStep ? 'scale-90' : 'scale-100'; // Slightly smaller scale

  return (
    <div
      ref={cardRef}
      className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      {/* Enhanced Ambient Glow with smoother transitions */}
      <div
        className={`
          absolute inset-0 transition-all duration-500 ease-out pointer-events-none
          ${isVisible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95'
          }
        `}
        style={{
          transitionDelay: `${delay + 200}ms`,
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Enhanced glow layers with smoother scaling - adjusted for transition step */}
        <div
          className={`
            absolute rounded-full blur-[4rem]
            bg-gradient-to-br ${step.glowColor} transition-all duration-600 ease-out
            ${isVisible ? 'scale-100' : 'scale-75'}
            ${isLeft ? '-left-48 top-1/2 -translate-y-1/2' : '-right-48 top-1/2 -translate-y-1/2'}
            ${isTransitionStep ? 'w-80 h-80 opacity-25' : 'w-[32rem] h-[32rem] opacity-40'}
          `}
          style={{ transitionDelay: `${delay + 300}ms` }}
        />

        <div
          className={`
            absolute rounded-full blur-3xl
            bg-gradient-to-br ${step.glowColor} transition-all duration-500 ease-out
            ${isVisible ? 'scale-100' : 'scale-80'}
            ${isLeft ? '-left-24 top-1/2 -translate-y-1/2' : '-right-24 top-1/2 -translate-y-1/2'}
            ${isTransitionStep ? 'w-64 h-64 opacity-20' : 'w-80 h-80 opacity-28'}
          `}
          style={{ transitionDelay: `${delay + 400}ms` }}
        />

        <div
          className={`
            absolute rounded-full blur-2xl
            bg-gradient-to-br ${step.glowColorHover} transition-all duration-400 ease-out
            ${isVisible ? 'scale-100' : 'scale-85'}
            ${isLeft ? 'left-0 top-1/2 -translate-y-1/2' : 'right-0 top-1/2 -translate-y-1/2'}
            ${isTransitionStep ? 'w-32 h-32 opacity-30' : 'w-48 h-48 opacity-48'}
          `}
          style={{ transitionDelay: `${delay + 500}ms` }}
        />

        {!isTransitionStep && (
          <div
            className={`
              absolute w-[40rem] h-[40rem] rounded-full blur-[5rem]
              bg-gradient-to-br ${step.glowColor} opacity-20
              transition-all duration-600 ease-out
              ${isVisible ? 'scale-100' : 'scale-70'}
              ${isLeft ? '-left-64 top-1/2 -translate-y-1/2' : '-right-64 top-1/2 -translate-y-1/2'}
            `}
            style={{ transitionDelay: `${delay + 100}ms` }}
          />
        )}
      </div>

      {/* Enhanced Card Container with smoother entrance */}
      <div
        className={`
          relative w-full ${cardWidth} transition-all duration-400 ease-out ${cardScale}
          ${isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
          }
        `}
        style={{
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Glassmorphic Card with enhanced entrance */}
        <div className={`
          relative z-10
          ${isLeft ? 'mr-6 lg:mr-10' : 'ml-6 lg:ml-10'}
        `}>
          <div className={`
            relative rounded-3xl
            backdrop-blur-xl shadow-2xl
            transition-all duration-300 ease-out
            ${isTransitionStep 
              ? 'p-5 lg:p-6 bg-white/[0.015] border border-white/[0.06] shadow-black/20' // Subtler for transition
              : 'p-6 lg:p-7 bg-white/[0.02] border border-white/[0.08] shadow-black/40'
            }
            ${isVisible
              ? isTransitionStep 
                ? 'border-white/[0.08] bg-white/[0.02]'
                : 'border-white/[0.12] bg-white/[0.03]'
              : isTransitionStep
                ? 'border-white/[0.04] bg-white/[0.008]'
                : 'border-white/[0.06] bg-white/[0.01]'
            }
          `}
          style={{ transitionDelay: `${delay + 200}ms` }}
          >

            {/* Enhanced Step Number with smoother reveal */}
            <div className={`flex items-start justify-between mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
              <div className="relative">
                <div className={`
                  font-black leading-none mb-2 font-mono
                  transition-all duration-250 ease-out
                  ${isTransitionStep 
                    ? 'text-3xl lg:text-4xl text-white/8' // Smaller and more subtle
                    : 'text-4xl lg:text-5xl text-white/10'
                  }
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                `}
                style={{ transitionDelay: `${delay + 300}ms` }}
                >
                  {step.number}
                </div>
                <div className={`
                  absolute top-0.5 left-0.5 font-black
                  bg-gradient-to-br leading-none font-mono
                  bg-clip-text text-transparent transition-all duration-300 ease-out
                  ${isTransitionStep
                    ? 'text-3xl lg:text-4xl from-white/60 via-white/45 to-white/35' // More subtle gradient
                    : 'text-4xl lg:text-5xl from-white/90 via-white/70 to-white/50'
                  }
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
                style={{ transitionDelay: `${delay + 400}ms` }}
                >
                  {step.number}
                </div>
              </div>

              {/* Enhanced Icon with smoother entrance - only if not transition step */}
              {step.icon && (
                <div className={`
                  w-5 h-5 text-white/40
                  transition-all duration-200 ease-out
                  ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'}
                `}
                style={{ transitionDelay: `${delay + 600}ms` }}
                >
                  <step.icon className="w-full h-full" />
                </div>
              )}
            </div>

            {/* Enhanced Content with staggered text animation */}
            <div className="space-y-3">
              <h3 className={`
                font-bold leading-tight tracking-tight font-sans
                transition-all duration-250 ease-out
                ${isTransitionStep
                  ? 'text-base lg:text-lg text-white/80' // Smaller and more subtle
                  : 'text-lg lg:text-xl text-white/95'
                }
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                ${isLeft ? 'text-left' : 'text-right'}
              `}
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                transitionDelay: `${delay + 500}ms`
              }}>
                {step.title}
              </h3>

              <p className={`
                font-light leading-relaxed
                transition-all duration-300 ease-out
                ${isTransitionStep
                  ? 'text-white/50 text-xs lg:text-sm' // Smaller and more subtle
                  : 'text-white/65 text-sm lg:text-base'
                }
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                ${isLeft ? 'text-left' : 'text-right'}
              `}
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
                transitionDelay: `${delay + 600}ms`
              }}>
                {step.subtitle}
              </p>
            </div>

            {/* Enhanced Connection line with smoother appearance */}
            <div className={`
              absolute top-1/2 -translate-y-0.5
              bg-gradient-to-r from-white/20 to-transparent
              transition-all duration-200 ease-out
              ${isTransitionStep 
                ? 'w-4 lg:w-6 h-px opacity-60' // Shorter and more subtle
                : 'w-6 lg:w-10 h-px'
              }
              ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
              ${isLeft ? '-right-4 lg:-right-6 origin-left' : '-left-4 lg:-left-6 rotate-180 origin-right'}
            `}
            style={{ transitionDelay: `${delay + 700}ms` }}
            >
              <div className={`absolute inset-0 w-1 h-full rounded-full animate-pulse ${
                isTransitionStep 
                  ? 'bg-gradient-to-r from-white/20 to-transparent'
                  : 'bg-gradient-to-r from-cyan-400/40 to-transparent'
              }`} />
            </div>

            {/* Enhanced glassmorphic details with smoother reveal */}
            <div className={`
              absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent to-transparent
              transition-opacity duration-[400ms] ease-out
              ${isTransitionStep ? 'via-white/8' : 'via-white/15'}
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ transitionDelay: `${delay + 800}ms` }}
            />

            <div className={`
              absolute top-4 left-0 w-px h-8 bg-gradient-to-b to-transparent
              transition-all duration-[300ms] ease-out
              ${isTransitionStep ? 'from-white/15' : 'from-white/25'}
              ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
            `}
            style={{ transitionDelay: `${delay + 900}ms` }}
            />

            <div className={`
              absolute top-4 right-0 w-px h-8 bg-gradient-to-b to-transparent
              transition-all duration-[300ms] ease-out
              ${isTransitionStep ? 'from-white/15' : 'from-white/25'}
              ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
            `}
            style={{ transitionDelay: `${delay + 950}ms` }}
            />

            {/* Enhanced glass reflection with smoother fade */}
            <div className={`
              absolute top-2 left-2 rounded-full blur-sm
              bg-gradient-to-br to-transparent
              transition-opacity duration-[600ms] ease-out
              ${isTransitionStep 
                ? 'w-12 h-12 from-white/[0.04]' // Smaller and more subtle
                : 'w-16 h-16 from-white/[0.08]'
              }
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ transitionDelay: `${delay + 1000}ms` }}
            />

            {/* Add subtle pulse animation for transition step */}
            {isTransitionStep && (
              <div className={`
                absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent
                transition-opacity duration-1000 ease-out animate-pulse
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
              style={{ transitionDelay: `${delay + 1200}ms` }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
