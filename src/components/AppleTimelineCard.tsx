
import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface AppleTimelineCardProps {
  step: {
    id: number;
    number: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
    glowColor: string;
    glowColorHover: string;
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
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      {/* Floating Card Container */}
      <div
        className={`
          relative w-full max-w-md transition-all duration-1000 ease-out
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
          }
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {/* Colored Glow Aura - Behind the card */}
        <div 
          className={`
            absolute inset-0 rounded-2xl blur-2xl transition-all duration-700 
            bg-gradient-to-br ${step.glowColor} opacity-60
            group-hover:opacity-100 scale-110
          `}
        />

        {/* Glassmorphic Card */}
        <div className={`
          relative z-10 group cursor-pointer
          ${isLeft ? 'mr-8 lg:mr-12' : 'ml-8 lg:ml-12'}
        `}>
          <div className={`
            relative p-6 lg:p-8 rounded-2xl
            bg-white/[0.02] backdrop-blur-xl
            border border-white/[0.08]
            transition-all duration-700 ease-out
            hover:bg-white/[0.04] hover:border-white/[0.12]
            hover:shadow-2xl hover:shadow-white/[0.03]
            hover:-translate-y-2 hover:scale-[1.01]
          `}>
            {/* Step Number - Large and prominent */}
            <div className={`flex items-start justify-between mb-6 ${isLeft ? '' : 'flex-row-reverse'}`}>
              <div className="relative">
                <div className="text-5xl lg:text-6xl font-black text-white/20 leading-none mb-2">
                  {step.number}
                </div>
                <div className="absolute top-1 left-1 text-5xl lg:text-6xl font-black bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent leading-none">
                  {step.number}
                </div>
              </div>
              
              {/* Optional minimal icon */}
              <div className="w-6 h-6 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <step.icon className="w-full h-full" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className={`text-xl lg:text-2xl font-bold text-white leading-tight tracking-tight ${
                isLeft ? 'text-left' : 'text-right'
              }`}>
                {step.title}
              </h3>
              
              <p className={`text-white/60 text-base leading-relaxed font-light ${
                isLeft ? 'text-left' : 'text-right'
              }`}>
                {step.subtitle}
              </p>
            </div>

            {/* Connection line to center timeline */}
            <div className={`
              absolute top-1/2 w-8 lg:w-12 h-px -translate-y-0.5
              bg-gradient-to-r from-white/20 to-transparent
              ${isLeft ? '-right-8 lg:-right-12' : '-left-8 lg:-left-12 rotate-180'}
              opacity-0 group-hover:opacity-100 transition-all duration-500
            `}>
              {/* Subtle flowing particle effect */}
              <div className="absolute inset-0 w-1 h-full bg-gradient-to-r from-cyan-400/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            </div>

            {/* Subtle highlight line at bottom */}
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Enhanced glow on hover */}
          <div 
            className={`
              absolute inset-0 rounded-2xl blur-3xl transition-all duration-700 opacity-0 
              group-hover:opacity-80 scale-125 bg-gradient-to-br ${step.glowColorHover}
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
