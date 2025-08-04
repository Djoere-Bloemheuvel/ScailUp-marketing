
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
      {/* Enhanced Background Ambient Glow with smooth transitions */}
      <div
        className={`
          absolute inset-0 transition-all duration-1000 ease-out pointer-events-none
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {/* Glow layers with smooth hover transitions */}
        <div 
          className={`
            absolute w-[32rem] h-[32rem] rounded-full blur-[4rem] 
            transition-all duration-700 ease-out
            bg-gradient-to-br ${step.glowColor} opacity-40 scale-200
            ${isLeft ? '-left-48 top-1/2 -translate-y-1/2' : '-right-48 top-1/2 -translate-y-1/2'}
            hover:opacity-50 hover:scale-220
          `}
        />
        
        <div 
          className={`
            absolute w-80 h-80 rounded-full blur-3xl 
            transition-all duration-600 ease-out
            bg-gradient-to-br ${step.glowColor} opacity-28 scale-175
            ${isLeft ? '-left-24 top-1/2 -translate-y-1/2' : '-right-24 top-1/2 -translate-y-1/2'}
            hover:opacity-35 hover:scale-190
          `}
        />

        <div 
          className={`
            absolute w-48 h-48 rounded-full blur-2xl 
            transition-all duration-500 ease-out
            bg-gradient-to-br ${step.glowColorHover} opacity-48
            ${isLeft ? 'left-0 top-1/2 -translate-y-1/2' : 'right-0 top-1/2 -translate-y-1/2'}
            hover:opacity-60 hover:scale-110
          `}
        />

        <div 
          className={`
            absolute w-[40rem] h-[40rem] rounded-full blur-[5rem] 
            transition-all duration-800 ease-out
            bg-gradient-to-br ${step.glowColor} opacity-20 scale-150
            ${isLeft ? '-left-64 top-1/2 -translate-y-1/2' : '-right-64 top-1/2 -translate-y-1/2'}
            hover:opacity-25 hover:scale-160
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
        {/* Enhanced Glassmorphic Card with smooth hover */}
        <div className={`
          relative z-10 group cursor-pointer timeline-card-smooth gpu-accelerated
          ${isLeft ? 'mr-6 lg:mr-10' : 'ml-6 lg:ml-10'}
        `}>
          <div className={`
            relative p-6 lg:p-7 rounded-3xl
            bg-white/[0.02] backdrop-blur-xl
            border border-white/[0.08] shadow-2xl shadow-black/40
            glass-hover-smooth hover-only-smooth
            hover:bg-white/[0.06] hover:border-white/[0.15]
            hover:shadow-3xl hover:shadow-black/80
            hover:backdrop-blur-2xl
          `}>
            {/* Enhanced multi-layered glass effect with smooth transitions */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.01] to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
            
            {/* Step Number with smooth hover */}
            <div className={`flex items-start justify-between mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
              <div className="relative">
                <div className="text-4xl lg:text-5xl font-black text-white/10 leading-none mb-2 font-mono transition-all duration-400 ease-out group-hover:text-white/15">
                  {step.number}
                </div>
                <div className="absolute top-0.5 left-0.5 text-4xl lg:text-5xl font-black bg-gradient-to-br from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent leading-none font-mono transition-all duration-400 ease-out group-hover:from-white/95 group-hover:via-white/85 group-hover:to-white/65">
                  {step.number}
                </div>
              </div>
              
              {/* Enhanced icon with smooth hover */}
              <div className="w-5 h-5 text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out icon-hover-smooth">
                <step.icon className="w-full h-full" />
              </div>
            </div>

            {/* Content with smooth hover transitions */}
            <div className="space-y-3">
              <h3 className={`text-lg lg:text-xl font-bold text-white/95 leading-tight tracking-tight font-sans text-hover-smooth group-hover:text-white ${
                isLeft ? 'text-left' : 'text-right'
              }`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
                {step.title}
              </h3>
              
              <p className={`text-white/65 text-sm lg:text-base leading-relaxed font-light text-hover-smooth group-hover:text-white/80 ${
                isLeft ? 'text-left' : 'text-right'
              }`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
                {step.subtitle}
              </p>
            </div>

            {/* Enhanced connection line with smooth hover */}
            <div className={`
              absolute top-1/2 w-6 lg:w-10 h-px -translate-y-0.5
              bg-gradient-to-r from-white/20 to-transparent
              ${isLeft ? '-right-6 lg:-right-10' : '-left-6 lg:-left-10 rotate-180'}
              opacity-0 group-hover:opacity-100 transition-all duration-600 ease-out
            `}>
              <div className="absolute inset-0 w-1 h-full bg-gradient-to-r from-cyan-400/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out animate-pulse" />
            </div>

            {/* Enhanced glassmorphic details with staggered hover */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out stagger-delay-1" />
            <div className="absolute top-4 left-0 w-px h-8 bg-gradient-to-b from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out stagger-delay-2" />
            <div className="absolute top-4 right-0 w-px h-8 bg-gradient-to-b from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out stagger-delay-3" />
            
            {/* Additional glass reflection effects with smooth transitions */}
            <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-br from-white/[0.08] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out blur-sm stagger-delay-4" />
          </div>

          {/* Enhanced hover glow with smooth transitions */}
          <div 
            className={`
              absolute inset-0 rounded-3xl blur-2xl opacity-0 
              group-hover:opacity-85 scale-110 bg-gradient-to-br ${step.glowColorHover}
              group-hover:scale-125 group-hover:blur-3xl
              transition-all duration-700 ease-out glow-hover-smooth
            `}
          />
          
          {/* Secondary glow layer with smooth animation */}
          <div 
            className={`
              absolute inset-0 rounded-3xl blur-xl opacity-0 
              group-hover:opacity-55 scale-105 bg-gradient-to-br ${step.glowColorHover}
              transition-all duration-600 ease-out
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
