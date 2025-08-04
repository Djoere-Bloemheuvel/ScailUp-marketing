
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
      {/* Enhanced Background Ambient Glow - Reduced intensity by 20% */}
      <div
        className={`
          absolute inset-0 transition-all duration-1000 ease-out pointer-events-none
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {/* Primary ambient glow - Reduced from opacity-50 to opacity-40 */}
        <div 
          className={`
            absolute w-[32rem] h-[32rem] rounded-full blur-[4rem] transition-all duration-1000
            bg-gradient-to-br ${step.glowColor} opacity-40 scale-200
            ${isLeft ? '-left-48 top-1/2 -translate-y-1/2' : '-right-48 top-1/2 -translate-y-1/2'}
          `}
        />
        
        {/* Secondary glow layer - Reduced from opacity-35 to opacity-28 */}
        <div 
          className={`
            absolute w-80 h-80 rounded-full blur-3xl transition-all duration-700
            bg-gradient-to-br ${step.glowColor} opacity-28 scale-175
            ${isLeft ? '-left-24 top-1/2 -translate-y-1/2' : '-right-24 top-1/2 -translate-y-1/2'}
          `}
        />

        {/* Tertiary focused glow - Reduced from opacity-60 to opacity-48 */}
        <div 
          className={`
            absolute w-48 h-48 rounded-full blur-2xl transition-all duration-500
            bg-gradient-to-br ${step.glowColorHover} opacity-48
            ${isLeft ? 'left-0 top-1/2 -translate-y-1/2' : 'right-0 top-1/2 -translate-y-1/2'}
          `}
        />

        {/* Additional outer glow - Reduced from opacity-25 to opacity-20 */}
        <div 
          className={`
            absolute w-[40rem] h-[40rem] rounded-full blur-[5rem] transition-all duration-1200
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
        {/* Enhanced Glassmorphic Card */}
        <div className={`
          relative z-10 group cursor-pointer
          ${isLeft ? 'mr-6 lg:mr-10' : 'ml-6 lg:ml-10'}
        `}>
          <div className={`
            relative p-6 lg:p-7 rounded-3xl
            bg-white/[0.02] backdrop-blur-xl
            border border-white/[0.08] shadow-2xl shadow-black/40
            transition-all duration-700 ease-out
            hover:bg-white/[0.04] hover:border-white/[0.12]
            hover:shadow-3xl hover:shadow-black/60
            hover:-translate-y-2 hover:scale-[1.02]
            hover:backdrop-blur-2xl
          `}>
            {/* Enhanced multi-layered glass effect with more transparency */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.01] to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Step Number - More prominent against glass */}
            <div className={`flex items-start justify-between mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
              <div className="relative">
                <div className="text-4xl lg:text-5xl font-black text-white/10 leading-none mb-2 font-mono">
                  {step.number}
                </div>
                <div className="absolute top-0.5 left-0.5 text-4xl lg:text-5xl font-black bg-gradient-to-br from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent leading-none font-mono">
                  {step.number}
                </div>
              </div>
              
              {/* Enhanced icon with better visibility */}
              <div className="w-5 h-5 text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">
                <step.icon className="w-full h-full" />
              </div>
            </div>

            {/* Content with enhanced readability */}
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

            {/* Enhanced connection line with better visibility */}
            <div className={`
              absolute top-1/2 w-6 lg:w-10 h-px -translate-y-0.5
              bg-gradient-to-r from-white/20 to-transparent
              ${isLeft ? '-right-6 lg:-right-10' : '-left-6 lg:-left-10 rotate-180'}
              opacity-0 group-hover:opacity-100 transition-all duration-700
            `}>
              <div className="absolute inset-0 w-1 h-full bg-gradient-to-r from-cyan-400/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            </div>

            {/* Enhanced glassmorphic details */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-4 left-0 w-px h-8 bg-gradient-to-b from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-4 right-0 w-px h-8 bg-gradient-to-b from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Additional glass reflection effects */}
            <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-br from-white/[0.08] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
          </div>

          {/* Enhanced hover glow with service page colors - More intense */}
          <div 
            className={`
              absolute inset-0 rounded-3xl blur-2xl transition-all duration-700 opacity-0 
              group-hover:opacity-85 scale-110 bg-gradient-to-br ${step.glowColorHover}
              group-hover:scale-125 group-hover:blur-3xl
            `}
          />
          
          {/* Secondary glow layer for enhanced depth - More visible */}
          <div 
            className={`
              absolute inset-0 rounded-3xl blur-xl transition-all duration-700 opacity-0 
              group-hover:opacity-55 scale-105 bg-gradient-to-br ${step.glowColorHover}
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
