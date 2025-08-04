
import { useEffect, useRef } from 'react';

interface WorkflowStepProps {
  step: {
    number: string;
    title: string;
    subtitle: string;
  };
  delay: string;
  isLast?: boolean;
}

const WorkflowStep = ({ step, delay, isLast }: WorkflowStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={stepRef}
      className="group relative text-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ 
        transitionDelay: delay,
        '--animate-delay': delay 
      } as React.CSSProperties}
    >
      <div className="relative flex flex-col items-center space-y-8 p-8 lg:p-12 transition-all duration-[400ms] ease-out group-hover:transform group-hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(2deg)_translateY(-8px)] cursor-pointer">
        
        {/* Large Glowing Circle with Number - Enhanced always-visible glow */}
        <div className="relative">
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center relative z-10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
            <span className="text-3xl lg:text-4xl font-bold text-black tracking-tight">
              {step.number}
            </span>
          </div>
          
          {/* Always-visible subtle glow - base layer */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-purple-200/15 to-white/10 opacity-60 blur-lg scale-110" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300/10 via-white/8 to-purple-400/8 opacity-40 blur-xl scale-125" />
          
          {/* Enhanced hover glow effects */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/15 via-purple-400/10 to-blue-500/15 opacity-40 blur-xl transition-all duration-500 group-hover:opacity-70 group-hover:scale-110" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 to-violet-400/15 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 scale-150" />
          <div className="absolute inset-0 rounded-full bg-white/8 opacity-30 blur-lg transition-all duration-500 group-hover:opacity-50 group-hover:scale-105" />
          
          {/* Connection point on timeline line */}
          {!isLast && (
            <div className="hidden lg:block absolute top-1/2 -right-1/2 w-full h-px">
              <div className="w-full h-full bg-gradient-to-r from-white/40 via-cyan-400/30 to-transparent" />
            </div>
          )}
        </div>

        {/* Content - Enhanced hover effects */}
        <div className="space-y-6 max-w-sm transition-transform duration-300 ease-out group-hover:-translate-y-1">
          <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight transition-all duration-300 relative group-hover:-translate-y-1">
            {step.title}
            {/* Hover underline effect */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
          </h3>
          
          <p className="text-white/60 leading-relaxed text-lg lg:text-xl font-light tracking-wide transition-colors duration-300 group-hover:text-white/80">
            {step.subtitle}
          </p>
        </div>

        {/* Mobile connecting line */}
        {!isLast && (
          <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-16">
            <div className="w-full h-full bg-gradient-to-b from-cyan-400/30 via-purple-400/20 to-transparent" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkflowStep;
