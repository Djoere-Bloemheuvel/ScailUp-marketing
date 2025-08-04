
import { useEffect, useRef } from 'react';

interface WorkflowStepProps {
  step: {
    number: string;
    title: string;
    subtitle: string;
  };
  delay: string;
  isLast?: boolean;
  verticalOffset?: number;
}

const WorkflowStep = ({ step, delay, isLast, verticalOffset = 0 }: WorkflowStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);

  // Premium color scheme - subtle and refined
  const getColorScheme = (stepNumber: string) => {
    const baseColors = {
      circle: "from-white via-white/95 to-white/90",
      circleHover: "from-white via-white/98 to-white/95",
      shadow: "rgba(0, 0, 0, 0.08)",
      shadowHover: "rgba(0, 0, 0, 0.12)",
      accent: stepNumber === "1" ? "from-blue-500/20 to-blue-400/10" : 
              stepNumber === "2" ? "from-purple-500/20 to-purple-400/10" :
              "from-pink-500/20 to-pink-400/10",
      connection: "from-gray-200 to-gray-100"
    };
    return baseColors;
  };

  const colors = getColorScheme(step.number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -80px 0px' }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={stepRef}
      className="group relative opacity-0 translate-y-16 transition-all duration-1000 ease-out"
      style={{ 
        transitionDelay: delay,
        transform: `translateY(${verticalOffset}px)`
      } as React.CSSProperties}
    >
      <div className="relative flex flex-col items-center space-y-10 p-8 lg:p-12 transition-all duration-700 ease-out">
        
        {/* Premium step circle with sophisticated styling */}
        <div className="relative">
          <div 
            className={`
              w-20 h-20 lg:w-24 lg:h-24 rounded-full 
              bg-gradient-to-br ${colors.circle}
              flex items-center justify-center relative z-10
              border border-white/60
              backdrop-blur-sm
              transition-all duration-500 ease-out
              group-hover:${colors.circleHover}
              group-hover:border-white/80
              group-hover:scale-105
              group-hover:-translate-y-1
            `}
            style={{
              boxShadow: `
                0 4px 20px ${colors.shadow},
                0 1px 3px rgba(0, 0, 0, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.6)
              `,
              transition: 'box-shadow 0.5s ease-out, transform 0.5s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 8px 32px ${colors.shadowHover},
                0 4px 12px rgba(0, 0, 0, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.8)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 4px 20px ${colors.shadow},
                0 1px 3px rgba(0, 0, 0, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.6)
              `;
            }}
          >
            {/* Step number with refined typography */}
            <span className="text-2xl lg:text-3xl font-semibold text-gray-700 tracking-tight relative">
              {step.number}
            </span>
            
            {/* Subtle accent gradient behind number */}
            <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
          </div>
          
          {/* Connection line - clean and minimal */}
          {!isLast && (
            <div className="hidden lg:block absolute top-1/2 -right-1/2 w-full h-px">
              <div className={`w-full h-px bg-gradient-to-r ${colors.connection} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
            </div>
          )}
        </div>

        {/* Content with premium typography */}
        <div className="space-y-6 max-w-xs text-center transition-all duration-500 ease-out group-hover:-translate-y-1">
          <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight tracking-tight transition-all duration-500">
            {step.title}
          </h3>
          
          <p className="text-white/70 leading-relaxed text-base lg:text-lg font-normal tracking-wide transition-all duration-500 group-hover:text-white/85">
            {step.subtitle}
          </p>

          {/* Subtle step indicator */}
          <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-60 transition-all duration-500">
            <div className="w-1 h-1 bg-white/40 rounded-full" />
            <span className="text-white/40 text-xs font-medium tracking-wide">Stap {step.number}</span>
            <div className="w-1 h-1 bg-white/40 rounded-full" />
          </div>
        </div>

        {/* Mobile connecting line */}
        {!isLast && (
          <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-16">
            <div className="w-full h-full bg-gradient-to-b from-gray-300/40 to-transparent" />
          </div>
        )}
      </div>

      {/* Premium floating shadow - very subtle */}
      <div 
        className="absolute inset-8 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-xl transform translate-y-4 group-hover:translate-y-6"
        style={{
          background: 'rgba(0, 0, 0, 0.04)'
        }}
      />
    </div>
  );
};

export default WorkflowStep;
