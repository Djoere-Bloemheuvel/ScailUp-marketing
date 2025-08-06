
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
  };
  isLeft: boolean;
  isVisible: boolean;
  delay: number;
}

const AppleTimelineCard = ({ step, isLeft, isVisible, delay }: AppleTimelineCardProps) => {
  return (
    <div className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
      {/* Ambient glow with smooth fade-in */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out pointer-events-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
        {/* Main glow */}
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-br ${step.glowColor} transition-all duration-1000 ease-out ${
            isVisible ? 'scale-100' : 'scale-75'
          } ${isLeft ? '-left-24 top-1/2 -translate-y-1/2' : '-right-24 top-1/2 -translate-y-1/2'}`}
          style={{ transitionDelay: `${delay + 100}ms` }}
        />
        
        {/* Inner glow */}
        <div
          className={`absolute w-64 h-64 rounded-full blur-2xl bg-gradient-to-br ${step.glowColorHover} transition-all duration-700 ease-out ${
            isVisible ? 'scale-100 opacity-60' : 'scale-80 opacity-0'
          } ${isLeft ? 'left-0 top-1/2 -translate-y-1/2' : 'right-0 top-1/2 -translate-y-1/2'}`}
          style={{ transitionDelay: `${delay + 300}ms` }}
        />
      </div>

      {/* Card container */}
      <div className={`relative w-full max-w-sm ${isLeft ? 'mr-6 lg:mr-10' : 'ml-6 lg:ml-10'}`}>
        <div className={`
          relative z-10 p-6 lg:p-7 rounded-3xl backdrop-blur-xl
          bg-white/[0.02] border border-white/[0.08] shadow-2xl shadow-black/40
          transition-all duration-1000 ease-out
          ${isVisible 
            ? 'opacity-100 translate-y-0 border-white/[0.12] bg-white/[0.03]' 
            : 'opacity-0 translate-y-6 border-white/[0.06] bg-white/[0.01]'
          }
        `}
        style={{ transitionDelay: `${delay}ms` }}
        >
          {/* Step number and icon */}
          <div className={`flex items-start justify-between mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
            <div className="relative">
              <div className={`text-4xl lg:text-5xl font-black leading-none mb-2 font-mono text-white/10 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${delay + 100}ms` }}
              >
                {step.number}
              </div>
              <div className={`
                absolute top-0.5 left-0.5 text-4xl lg:text-5xl font-black leading-none font-mono
                bg-gradient-to-br from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}
              style={{ transitionDelay: `${delay + 150}ms` }}
              >
                {step.number}
              </div>
            </div>

            {/* Icon */}
            {step.icon && (
              <div className={`w-5 h-5 text-white/40 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: `${delay + 200}ms` }}
              >
                <step.icon className="w-full h-full" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className={`
              text-lg lg:text-xl font-bold leading-tight tracking-tight text-white/95 font-sans
              transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              ${isLeft ? 'text-left' : 'text-right'}
            `}
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
              transitionDelay: `${delay + 250}ms`
            }}>
              {step.title}
            </h3>

            <p className={`
              text-sm lg:text-base font-light leading-relaxed text-white/65
              transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              ${isLeft ? 'text-left' : 'text-right'}
            `}
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
              transitionDelay: `${delay + 300}ms`
            }}>
              {step.subtitle}
            </p>
          </div>

          {/* Connection line */}
          <div className={`
            absolute top-1/2 -translate-y-0.5 w-6 lg:w-10 h-px
            bg-gradient-to-r from-white/20 to-transparent
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
            ${isLeft ? '-right-4 lg:-right-6 origin-left' : '-left-4 lg:-left-6 rotate-180 origin-right'}
          `}
          style={{ transitionDelay: `${delay + 400}ms` }}
          >
            <div className="absolute inset-0 w-1 h-full rounded-full bg-gradient-to-r from-cyan-400/40 to-transparent" />
          </div>

          {/* Glassmorphic details */}
          <div className={`
            absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent
            transition-opacity duration-700 ease-out
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ transitionDelay: `${delay + 500}ms` }}
          />

          <div className={`
            absolute top-4 left-0 w-px h-8 bg-gradient-to-b from-white/25 to-transparent
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
          `}
          style={{ transitionDelay: `${delay + 550}ms` }}
          />

          <div className={`
            absolute top-4 right-0 w-px h-8 bg-gradient-to-b from-white/25 to-transparent
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
          `}
          style={{ transitionDelay: `${delay + 575}ms` }}
          />

          {/* Glass reflection */}
          <div className={`
            absolute top-2 left-2 w-16 h-16 rounded-full blur-sm
            bg-gradient-to-br from-white/[0.08] to-transparent
            transition-opacity duration-700 ease-out
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ transitionDelay: `${delay + 600}ms` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
