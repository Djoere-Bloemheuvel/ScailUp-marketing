
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
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
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
      {/* Static Background Ambient Glow */}
      <div
        className={`
          absolute inset-0 transition-all duration-1000 ease-out pointer-events-none
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {/* Glow layers - removed hover effects */}
        <div 
          className={`
            absolute w-[32rem] h-[32rem] rounded-full blur-[4rem] 
            bg-gradient-to-br ${step.glowColor} opacity-40 scale-200
            ${isLeft ? '-left-48 top-1/2 -translate-y-1/2' : '-right-48 top-1/2 -translate-y-1/2'}
          `}
        />
        
        <div 
          className={`
            absolute w-80 h-80 rounded-full blur-3xl 
            bg-gradient-to-br ${step.glowColor} opacity-28 scale-175
            ${isLeft ? '-left-24 top-1/2 -translate-y-1/2' : '-right-24 top-1/2 -translate-y-1/2'}
          `}
        />

        <div 
          className={`
            absolute w-48 h-48 rounded-full blur-2xl 
            bg-gradient-to-br ${step.glowColorHover} opacity-48
            ${isLeft ? 'left-0 top-1/2 -translate-y-1/2' : 'right-0 top-1/2 -translate-y-1/2'}
          `}
        />

        <div 
          className={`
            absolute w-[40rem] h-[40rem] rounded-full blur-[5rem] 
            bg-gradient-to-br ${step.glowColor} opacity-20 scale-150
            ${isLeft ? '-left-64 top-1/2 -translate-y-1/2' : '-right-64 top-1/2 -translate-y-1/2'}
          `}
        />
      </div>

      {/* Floating Card Container */}
      <div
        className={`
          relative w-full max-w-sm transition-all duration-1000 ease-out
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
          }
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {/* Glassmorphic Card - removed all hover effects */}
        <div className={`
          relative z-10
          ${isLeft ? 'mr-6 lg:mr-10' : 'ml-6 lg:ml-10'}
        `}>
          <div className={`
            relative p-6 lg:p-7 rounded-3xl
            bg-white/[0.02] backdrop-blur-xl
            border border-white/[0.08] shadow-2xl shadow-black/40
          `}>
            
            {/* Step Number - removed hover effects */}
            <div className={`flex items-start justify-between mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
              <div className="relative">
                <div className="text-4xl lg:text-5xl font-black text-white/10 leading-none mb-2 font-mono">
                  {step.number}
                </div>
                <div className="absolute top-0.5 left-0.5 text-4xl lg:text-5xl font-black bg-gradient-to-br from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent leading-none font-mono">
                  {step.number}
                </div>
              </div>
              
              {/* Icon - removed hover effects */}
              <div className="w-5 h-5 text-white/40">
                <step.icon className="w-full h-full" />
              </div>
            </div>

            {/* Content - removed hover effects */}
            <div className="space-y-3">
              <h3 className={`text-lg lg:text-xl font-bold text-white/95 leading-tight tracking-tight font-sans ${
                isLeft ? 'text-left' : 'text-right'
              }`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
                {step.title}
              </h3>
              
              <p className={`text-white/65 text-sm lg:text-base leading-relaxed font-light ${
                isLeft ? 'text-left' : 'text-right'
              }`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
                {step.subtitle}
              </p>
            </div>

            {/* Connection line - removed hover effects */}
            <div className={`
              absolute top-1/2 w-6 lg:w-10 h-px -translate-y-0.5
              bg-gradient-to-r from-white/20 to-transparent
              ${isLeft ? '-right-6 lg:-right-10' : '-left-6 lg:-left-10 rotate-180'}
            `}>
              <div className="absolute inset-0 w-1 h-full bg-gradient-to-r from-cyan-400/40 to-transparent rounded-full animate-pulse" />
            </div>

            {/* Static glassmorphic details - removed hover effects */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="absolute top-4 left-0 w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
            <div className="absolute top-4 right-0 w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
            
            {/* Static glass reflection effects */}
            <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-br from-white/[0.08] to-transparent rounded-full blur-sm" />
          </div>

          {/* Static glow - removed hover effects */}
          <div 
            className={`
              absolute inset-0 rounded-3xl blur-2xl opacity-0 
              scale-110 bg-gradient-to-br ${step.glowColorHover}
            `}
          />
          
          {/* Secondary glow layer - removed hover effects */}
          <div 
            className={`
              absolute inset-0 rounded-3xl blur-xl opacity-0 
              scale-105 bg-gradient-to-br ${step.glowColorHover}
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
