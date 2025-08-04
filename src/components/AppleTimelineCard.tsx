
import { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
        {/* Enhanced glow layers with smoother scaling */}
        <div
          className={`
            absolute w-[32rem] h-[32rem] rounded-full blur-[4rem]
            bg-gradient-to-br ${step.glowColor} opacity-40
            transition-all duration-600 ease-out
            ${isVisible ? 'scale-100' : 'scale-75'}
            ${isLeft ? '-left-48 top-1/2 -translate-y-1/2' : '-right-48 top-1/2 -translate-y-1/2'}
          `}
          style={{ transitionDelay: `${delay + 300}ms` }}
        />

        <div
          className={`
            absolute w-80 h-80 rounded-full blur-3xl
            bg-gradient-to-br ${step.glowColor} opacity-28
            transition-all duration-500 ease-out
            ${isVisible ? 'scale-100' : 'scale-80'}
            ${isLeft ? '-left-24 top-1/2 -translate-y-1/2' : '-right-24 top-1/2 -translate-y-1/2'}
          `}
          style={{ transitionDelay: `${delay + 400}ms` }}
        />

        <div
          className={`
            absolute w-48 h-48 rounded-full blur-2xl
            bg-gradient-to-br ${step.glowColorHover} opacity-48
            transition-all duration-400 ease-out
            ${isVisible ? 'scale-100' : 'scale-85'}
            ${isLeft ? 'left-0 top-1/2 -translate-y-1/2' : 'right-0 top-1/2 -translate-y-1/2'}
          `}
          style={{ transitionDelay: `${delay + 500}ms` }}
        />

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
      </div>

      {/* Enhanced Card Container with smoother entrance */}
      <div
        className={`
          relative w-full max-w-sm transition-all duration-400 ease-out
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
            relative p-6 lg:p-7 rounded-3xl
            bg-white/[0.02] backdrop-blur-xl
            border border-white/[0.08] shadow-2xl shadow-black/40
            transition-all duration-300 ease-out
            ${isVisible
              ? 'border-white/[0.12] bg-white/[0.03]'
              : 'border-white/[0.06] bg-white/[0.01]'
            }
          `}
          style={{ transitionDelay: `${delay + 200}ms` }}
          >

            {/* Enhanced Step Number with smoother reveal */}
            <div className={`flex items-start justify-between mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
              <div className="relative">
                <div className={`
                  text-4xl lg:text-5xl font-black text-white/10 leading-none mb-2 font-mono
                  transition-all duration-250 ease-out
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                `}
                style={{ transitionDelay: `${delay + 300}ms` }}
                >
                  {step.number}
                </div>
                <div className={`
                  absolute top-0.5 left-0.5 text-4xl lg:text-5xl font-black
                  bg-gradient-to-br from-white/90 via-white/70 to-white/50
                  bg-clip-text text-transparent leading-none font-mono
                  transition-all duration-300 ease-out
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
                style={{ transitionDelay: `${delay + 400}ms` }}
                >
                  {step.number}
                </div>
              </div>

              {/* Enhanced Icon with smoother entrance */}
              <div className={`
                w-5 h-5 text-white/40
                transition-all duration-200 ease-out
                ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'}
              `}
              style={{ transitionDelay: `${delay + 600}ms` }}
              >
                <step.icon className="w-full h-full" />
              </div>
            </div>

            {/* Enhanced Content with staggered text animation */}
            <div className="space-y-3">
              <h3 className={`
                text-lg lg:text-xl font-bold text-white/95 leading-tight tracking-tight font-sans
                transition-all duration-250 ease-out
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
                text-white/65 text-sm lg:text-base leading-relaxed font-light
                transition-all duration-300 ease-out
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
              absolute top-1/2 w-6 lg:w-10 h-px -translate-y-0.5
              bg-gradient-to-r from-white/20 to-transparent
              transition-all duration-200 ease-out
              ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
              ${isLeft ? '-right-6 lg:-right-10 origin-left' : '-left-6 lg:-left-10 rotate-180 origin-right'}
            `}
            style={{ transitionDelay: `${delay + 700}ms` }}
            >
              <div className="absolute inset-0 w-1 h-full bg-gradient-to-r from-cyan-400/40 to-transparent rounded-full animate-pulse" />
            </div>

            {/* Enhanced glassmorphic details with smoother reveal */}
            <div className={`
              absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent
              transition-opacity duration-[400ms] ease-out
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ transitionDelay: `${delay + 800}ms` }}
            />

            <div className={`
              absolute top-4 left-0 w-px h-8 bg-gradient-to-b from-white/25 to-transparent
              transition-all duration-[300ms] ease-out
              ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
            `}
            style={{ transitionDelay: `${delay + 900}ms` }}
            />

            <div className={`
              absolute top-4 right-0 w-px h-8 bg-gradient-to-b from-white/25 to-transparent
              transition-all duration-[300ms] ease-out
              ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
            `}
            style={{ transitionDelay: `${delay + 950}ms` }}
            />

            {/* Enhanced glass reflection with smoother fade */}
            <div className={`
              absolute top-2 left-2 w-16 h-16 bg-gradient-to-br from-white/[0.08] to-transparent rounded-full blur-sm
              transition-opacity duration-[600ms] ease-out
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ transitionDelay: `${delay + 1000}ms` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleTimelineCard;
