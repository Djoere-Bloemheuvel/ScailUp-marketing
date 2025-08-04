
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
      {/* Floating Card Container - More compact */}
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
        {/* Enhanced Ambient Glow Aura - Multiple layers */}
        <div 
          className={`
            absolute inset-0 rounded-3xl blur-2xl transition-all duration-700 
            bg-gradient-to-br ${step.glowColor} opacity-40 scale-110
          `}
        />
        <div 
          className={`
            absolute inset-0 rounded-3xl blur-xl transition-all duration-700 
            bg-gradient-to-br ${step.glowColor} opacity-20 scale-105
          `}
        />

        {/* Glassmorphic Card - More refined */}
        <div className={`
          relative z-10 group cursor-pointer
          ${isLeft ? 'mr-6 lg:mr-10' : 'ml-6 lg:ml-10'}
        `}>
          <div className={`
            relative p-6 lg:p-7 rounded-3xl
            bg-white/[0.03] backdrop-blur-2xl
            border border-white/[0.12]
            shadow-2xl shadow-black/20
            transition-all duration-700 ease-out
            hover:bg-white/[0.06] hover:border-white/[0.18]
            hover:shadow-3xl hover:shadow-black/30
            hover:-translate-y-2 hover:scale-[1.02]
            hover:backdrop-blur-3xl
          `}>
            {/* Multi-layered glass effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Step Number - Refined size */}
            <div className={`flex items-start justify-between mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
              <div className="relative">
                <div className="text-4xl lg:text-5xl font-black text-white/15 leading-none mb-2 font-mono">
                  {step.number}
                </div>
                <div className="absolute top-0.5 left-0.5 text-4xl lg:text-5xl font-black bg-gradient-to-br from-white via-white/85 to-white/60 bg-clip-text text-transparent leading-none font-mono">
                  {step.number}
                </div>
              </div>
              
              {/* Refined icon */}
              <div className="w-5 h-5 text-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">
                <step.icon className="w-full h-full" />
              </div>
            </div>

            {/* Content - Apple typography */}
            <div className="space-y-3">
              <h3 className={`text-lg lg:text-xl font-bold text-white leading-tight tracking-tight font-sans ${
                isLeft ? 'text-left' : 'text-right'
              }`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
                {step.title}
              </h3>
              
              <p className={`text-white/55 text-sm lg:text-base leading-relaxed font-light ${
                isLeft ? 'text-left' : 'text-right'
              }`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
                {step.subtitle}
              </p>
            </div>

            {/* Connection line to center timeline - Refined */}
            <div className={`
              absolute top-1/2 w-6 lg:w-10 h-px -translate-y-0.5
              bg-gradient-to-r from-white/15 to-transparent
              ${isLeft ? '-right-6 lg:-right-10' : '-left-6 lg:-left-10 rotate-180'}
              opacity-0 group-hover:opacity-100 transition-all duration-700
            `}>
              <div className="absolute inset-0 w-1 h-full bg-gradient-to-r from-cyan-400/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            </div>

            {/* Enhanced bottom highlight */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Side accent lines for depth */}
            <div className="absolute top-4 left-0 w-px h-8 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-4 right-0 w-px h-8 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Enhanced hover glow with parallax effect */}
          <div 
            className={`
              absolute inset-0 rounded-3xl blur-2xl transition-all duration-700 opacity-0 
              group-hover:opacity-60 scale-110 bg-gradient-to-br ${step.glowColorHover}
              group-hover:scale-115 group-hover:blur-3xl
            `}
          />
          
          {/* Secondary glow layer for depth */}
          <div 
            className={`
              absolute inset-0 rounded-3xl blur-xl transition-all duration-700 opacity-0 
              group-hover:opacity-30 scale-105 bg-gradient-to-br ${step.glowColorHover}
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
