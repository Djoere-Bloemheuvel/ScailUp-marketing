
import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface AppleTimelineCardProps {
  step: {
    id: number;
    number: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
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
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} mb-32 lg:mb-40`}
    >
      {/* Floating Card */}
      <div
        className={`
          relative w-full max-w-lg transition-all duration-1200 ease-out
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
          }
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {/* Glassmorphism Card */}
        <div className="relative group cursor-pointer">
          {/* Main Card */}
          <div className={`
            relative z-10 p-8 lg:p-12 rounded-3xl
            bg-white/[0.02] backdrop-blur-xl
            border border-white/[0.08]
            transition-all duration-700 ease-out
            hover:bg-white/[0.04] hover:border-white/[0.15]
            hover:shadow-2xl hover:shadow-white/[0.05]
            hover:-translate-y-2 hover:scale-[1.02]
            ${isLeft ? 'mr-8 lg:mr-16' : 'ml-8 lg:ml-16'}
          `}>
            {/* Step Number Badge */}
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-lg font-semibold text-white tracking-tight">
                    {step.number}
                  </span>
                </div>
                
                {/* Subtle glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-white/70 text-lg leading-relaxed font-light">
                {step.subtitle}
              </p>
            </div>

            {/* Subtle highlight line */}
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Floating shadow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 -z-10 blur-3xl transform translate-y-8 opacity-0 group-hover:opacity-60 transition-all duration-700" />
        </div>

        {/* Connection line to center */}
        <div className={`
          absolute top-1/2 w-8 lg:w-16 h-px -translate-y-0.5
          bg-gradient-to-r from-white/30 to-transparent
          ${isLeft ? '-right-8 lg:-right-16' : '-left-8 lg:-left-16 rotate-180'}
          opacity-0 group-hover:opacity-100 transition-all duration-500
        `}>
          {/* Flowing particle */}
          <div className="absolute inset-0 w-2 h-full bg-gradient-to-r from-cyan-400/60 to-transparent rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
