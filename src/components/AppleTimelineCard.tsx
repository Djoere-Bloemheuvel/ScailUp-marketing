
import { LucideIcon } from 'lucide-react';

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
  isVisible: boolean;
}

const AppleTimelineCard = ({ step, isLeft }: AppleTimelineCardProps) => {
  // Special styling for transition step
  const isTransitionStep = step.isTransition;
  const cardWidth = isTransitionStep ? 'max-w-xs' : 'max-w-sm';
  const cardScale = isTransitionStep ? 'scale-90' : 'scale-100';

  return (
    <div className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
      {/* Enhanced Ambient Glow - kept exactly as before */}
      <div className="absolute inset-0 transition-all duration-500 ease-out pointer-events-none opacity-100 scale-100">
        {/* Enhanced glow layers with smoother scaling - adjusted for transition step */}
        <div
          className={`
            absolute rounded-full blur-[4rem]
            bg-gradient-to-br ${step.glowColor} transition-all duration-600 ease-out scale-100
            ${isLeft ? '-left-48 top-1/2 -translate-y-1/2' : '-right-48 top-1/2 -translate-y-1/2'}
            ${isTransitionStep ? 'w-80 h-80 opacity-25' : 'w-[32rem] h-[32rem] opacity-40'}
          `}
        />

        <div
          className={`
            absolute rounded-full blur-3xl
            bg-gradient-to-br ${step.glowColor} transition-all duration-500 ease-out scale-100
            ${isLeft ? '-left-24 top-1/2 -translate-y-1/2' : '-right-24 top-1/2 -translate-y-1/2'}
            ${isTransitionStep ? 'w-64 h-64 opacity-20' : 'w-80 h-80 opacity-28'}
          `}
        />

        <div
          className={`
            absolute rounded-full blur-2xl
            bg-gradient-to-br ${step.glowColorHover} transition-all duration-400 ease-out scale-100
            ${isLeft ? 'left-0 top-1/2 -translate-y-1/2' : 'right-0 top-1/2 -translate-y-1/2'}
            ${isTransitionStep ? 'w-32 h-32 opacity-30' : 'w-48 h-48 opacity-48'}
          `}
        />

        {!isTransitionStep && (
          <div
            className={`
              absolute w-[40rem] h-[40rem] rounded-full blur-[5rem]
              bg-gradient-to-br ${step.glowColor} opacity-20
              transition-all duration-600 ease-out scale-100
              ${isLeft ? '-left-64 top-1/2 -translate-y-1/2' : '-right-64 top-1/2 -translate-y-1/2'}
            `}
          />
        )}
      </div>

      {/* Enhanced Card Container - no individual animations, relies on parent */}
      <div className={`relative w-full ${cardWidth} ${cardScale}`}>
        {/* Glassmorphic Card */}
        <div className={`
          relative z-10
          ${isLeft ? 'mr-6 lg:mr-10' : 'ml-6 lg:ml-10'}
        `}>
          <div className={`
            relative rounded-3xl
            backdrop-blur-xl shadow-2xl
            transition-all duration-300 ease-out
            ${isTransitionStep 
              ? 'p-5 lg:p-6 bg-white/[0.02] border border-white/[0.08] shadow-black/20' 
              : 'p-6 lg:p-7 bg-white/[0.03] border border-white/[0.12] shadow-black/40'
            }
          `}>

            {/* Enhanced Step Number */}
            <div className={`flex items-start justify-between mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
              <div className="relative">
                <div className={`
                  font-black leading-none mb-2 font-mono
                  ${isTransitionStep 
                    ? 'text-3xl lg:text-4xl text-white/8' 
                    : 'text-4xl lg:text-5xl text-white/10'
                  }
                `}>
                  {step.number}
                </div>
                <div className={`
                  absolute top-0.5 left-0.5 font-black
                  bg-gradient-to-br leading-none font-mono
                  bg-clip-text text-transparent
                  ${isTransitionStep
                    ? 'text-3xl lg:text-4xl from-white/60 via-white/45 to-white/35'
                    : 'text-4xl lg:text-5xl from-white/90 via-white/70 to-white/50'
                  }
                `}>
                  {step.number}
                </div>
              </div>

              {/* Enhanced Icon - only if not transition step */}
              {step.icon && (
                <div className="w-5 h-5 text-white/40">
                  <step.icon className="w-full h-full" />
                </div>
              )}
            </div>

            {/* Enhanced Content */}
            <div className="space-y-3">
              <h3 className={`
                font-bold leading-tight tracking-tight font-sans
                ${isTransitionStep
                  ? 'text-base lg:text-lg text-white/80'
                  : 'text-lg lg:text-xl text-white/95'
                }
                ${isLeft ? 'text-left' : 'text-right'}
              `}
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
              }}>
                {step.title}
              </h3>

              <p className={`
                font-light leading-relaxed
                ${isTransitionStep
                  ? 'text-white/50 text-xs lg:text-sm'
                  : 'text-white/65 text-sm lg:text-base'
                }
                ${isLeft ? 'text-left' : 'text-right'}
              `}
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
              }}>
                {step.subtitle}
              </p>
            </div>

            {/* Enhanced Connection line */}
            <div className={`
              absolute top-1/2 -translate-y-0.5
              bg-gradient-to-r from-white/20 to-transparent
              ${isTransitionStep 
                ? 'w-4 lg:w-6 h-px opacity-60' 
                : 'w-6 lg:w-10 h-px'
              }
              ${isLeft ? '-right-4 lg:-right-6 origin-left' : '-left-4 lg:-left-6 rotate-180 origin-right'}
            `}>
              <div className={`absolute inset-0 w-1 h-full rounded-full animate-pulse ${
                isTransitionStep 
                  ? 'bg-gradient-to-r from-white/20 to-transparent'
                  : 'bg-gradient-to-r from-cyan-400/40 to-transparent'
              }`} />
            </div>

            {/* Enhanced glassmorphic details */}
            <div className={`
              absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent to-transparent
              ${isTransitionStep ? 'via-white/8' : 'via-white/15'}
            `} />

            <div className={`
              absolute top-4 left-0 w-px h-8 bg-gradient-to-b to-transparent
              ${isTransitionStep ? 'from-white/15' : 'from-white/25'}
            `} />

            <div className={`
              absolute top-4 right-0 w-px h-8 bg-gradient-to-b to-transparent
              ${isTransitionStep ? 'from-white/15' : 'from-white/25'}
            `} />

            {/* Enhanced glass reflection */}
            <div className={`
              absolute top-2 left-2 rounded-full blur-sm
              bg-gradient-to-br to-transparent
              ${isTransitionStep 
                ? 'w-12 h-12 from-white/[0.04]'
                : 'w-16 h-16 from-white/[0.08]'
              }
            `} />

            {/* Add subtle pulse animation for transition step */}
            {isTransitionStep && (
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
