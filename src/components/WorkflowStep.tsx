
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

  // Premium unified color scheme - subtle and ambient
  const getUniformGlow = () => {
    return {
      circle: "from-gray-800 via-gray-700 to-gray-600",
      circleText: "text-white",
      glowLayers: [
        "from-blue-400/15 via-white/8 to-purple-300/12",
        "from-white/10 via-blue-200/6 to-white/8", 
        "from-purple-200/8 via-white/5 to-blue-200/6"
      ],
      connection: "from-white/20 via-blue-100/15 to-white/20",
      connectionHover: "from-white/30 via-blue-200/20 to-white/30"
    };
  };

  const colors = getUniformGlow();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={stepRef}
      className="group relative text-center opacity-0 translate-y-12 transition-all duration-1000 ease-out"
      style={{ 
        transitionDelay: delay,
        transform: `translateY(${verticalOffset}px)`
      } as React.CSSProperties}
    >
      <div className="relative flex flex-col items-center space-y-8 p-8 lg:p-12 transition-all duration-500 ease-out premium-content-hover cursor-pointer">
        
        {/* Premium number circle with uniform ambient glow */}
        <div className="relative">
          <div className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br ${colors.circle} flex items-center justify-center relative z-10 transition-all duration-700 premium-circle-hover shadow-2xl border border-white/10`}>
            <span className={`text-3xl lg:text-4xl font-bold ${colors.circleText} tracking-tight relative drop-shadow-lg`}>
              {step.number}
              
              {/* Subtle inner highlight */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
            </span>
          </div>
          
          {/* Uniform ambient glow layers - always visible, subtle pulse */}
          <div className={`premium-ambient-glow absolute inset-0 rounded-full bg-gradient-to-br ${colors.glowLayers[0]} scale-125 transition-all duration-700 group-hover:scale-140`} />
          <div className={`premium-ambient-glow-delayed absolute inset-0 rounded-full bg-gradient-to-br ${colors.glowLayers[1]} scale-150 transition-all duration-700 group-hover:scale-170`} />
          <div className={`premium-ambient-glow-tertiary absolute inset-0 rounded-full bg-gradient-to-br ${colors.glowLayers[2]} scale-175 transition-all duration-700 group-hover:scale-200`} />
          
          {/* Subtle connection line */}
          {!isLast && (
            <div className="hidden lg:block absolute top-1/2 -right-1/2 w-full h-px">
              <div className={`w-full h-full bg-gradient-to-r ${colors.connection} to-transparent group-hover:${colors.connectionHover} transition-all duration-500`} />
            </div>
          )}
        </div>

        {/* Content with subtle interactions */}
        <div className="space-y-6 max-w-sm transition-all duration-500 ease-out">
          <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight transition-all duration-500 relative">
            {step.title}
            
            {/* Subtle underline effect */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-white/40 via-blue-200/60 to-white/40 rounded-full transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
          </h3>
          
          <p className="text-white/70 leading-relaxed text-lg lg:text-xl font-light tracking-wide transition-all duration-500 group-hover:text-white/90">
            {step.subtitle}
          </p>

          {/* Minimal step indicator */}
          <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-60 transition-all duration-500">
            <div className="w-1 h-1 bg-white/40 rounded-full" />
            <span className="text-white/40 text-sm font-medium">Stap {step.number}</span>
            <div className="w-1 h-1 bg-white/40 rounded-full" />
          </div>
        </div>

        {/* Mobile connecting line */}
        {!isLast && (
          <div className="lg:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-px h-20">
            <div className="w-full h-full bg-gradient-to-b from-white/20 via-blue-100/15 to-transparent transition-all duration-500" />
          </div>
        )}
      </div>

      {/* Subtle floating shadow for depth */}
      <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-500/5 via-white/3 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-3xl transform translate-y-8 group-hover:translate-y-12 group-hover:scale-110" />
    </div>
  );
};

export default WorkflowStep;
