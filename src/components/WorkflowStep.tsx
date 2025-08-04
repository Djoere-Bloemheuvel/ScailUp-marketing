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
      className="group relative text-center opacity-0 translate-y-12 transition-all duration-1000 ease-out"
      style={{ 
        transitionDelay: delay,
        '--animate-delay': delay,
        transform: `translateY(${verticalOffset}px)`
      } as React.CSSProperties}
    >
      <div className="relative flex flex-col items-center space-y-7 p-7 lg:p-11 transition-all duration-500 ease-out group-hover:transform group-hover:[transform:perspective(1200px)_rotateX(3deg)_rotateY(3deg)_translateY(-12px)] cursor-pointer">
        
        {/* Enhanced number circle with scaled dimensions */}
        <div className="relative">
          <div className="w-23 h-23 lg:w-27 lg:h-27 rounded-full bg-gradient-to-br from-white via-white to-gray-100 flex items-center justify-center relative z-10 transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-blue-500/30 group-hover:scale-110">
            <span className="text-3xl lg:text-4xl font-bold text-black tracking-tight relative">
              {step.number}
              {/* Subtle inner highlight - scaled */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-15 h-15 lg:w-19 lg:h-19 rounded-full bg-gradient-to-br from-white/40 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              </div>
            </span>
          </div>
          
          {/* Multi-layered glow effects with enhanced intensity */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-300/15 to-cyan-400/10 opacity-70 blur-lg scale-110 group-hover:opacity-90 group-hover:scale-125 transition-all duration-700" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-blue-200/10 to-purple-200/8 opacity-50 blur-xl scale-125 group-hover:opacity-80 group-hover:scale-140 transition-all duration-700" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/10 via-white/8 to-blue-300/8 opacity-60 blur-2xl scale-150 group-hover:opacity-90 group-hover:scale-175 transition-all duration-700" />
          
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125 animate-pulse" />
          
          {/* Premium orbital ring */}
          <div className="absolute inset-[-4px] rounded-full border border-gradient-to-r from-cyan-400/30 via-transparent to-purple-400/30 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-[spin_8s_linear_infinite]" />
          
          {/* Connection line with enhanced styling */}
          {!isLast && (
            <div className="hidden lg:block absolute top-1/2 -right-1/2 w-full h-px">
              <div className="w-full h-full bg-gradient-to-r from-white/50 via-cyan-400/40 to-transparent group-hover:from-white/70 group-hover:via-cyan-400/60 transition-all duration-500" />
              {/* Flowing accent */}
              <div className="absolute inset-0 w-8 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[slide-connection_2s_ease-in-out_infinite]" />
            </div>
          )}
        </div>

        {/* Enhanced content with scaled spacing */}
        <div className="space-y-6 max-w-sm transition-all duration-500 ease-out group-hover:-translate-y-2">
          <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight transition-all duration-500 relative group-hover:-translate-y-1 group-hover:text-white">
            {step.title}
            {/* Enhanced underline effect */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 rounded-full transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
            {/* Subtle text shadow for premium feel */}
            <div className="absolute inset-0 text-blue-400/20 group-hover:text-blue-400/40 transition-all duration-500 blur-sm opacity-0 group-hover:opacity-100">
              {step.title}
            </div>
          </h3>
          
          <p className="text-white/60 leading-relaxed text-lg lg:text-xl font-light tracking-wide transition-all duration-500 group-hover:text-white/85 group-hover:scale-105">
            {step.subtitle}
          </p>

          {/* Step indicator with visual hierarchy */}
          <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
            <span className="text-white/40 text-sm font-medium">Stap {step.number}</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Premium microinteraction elements */}
        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/20 group-hover:bg-white/50 transition-all duration-500 group-hover:scale-125 opacity-0 group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-cyan-400/30 group-hover:bg-cyan-400/60 transition-all duration-500 group-hover:scale-150 opacity-0 group-hover:opacity-100" />
        <div className="absolute top-1/2 right-2 w-1 h-1 rounded-full bg-purple-400/40 group-hover:bg-purple-400/80 transition-all duration-500 group-hover:scale-200 opacity-0 group-hover:opacity-100" />

        {/* Mobile connecting line with enhanced styling */}
        {!isLast && (
          <div className="lg:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-px h-20">
            <div className="w-full h-full bg-gradient-to-b from-cyan-400/40 via-purple-400/30 to-transparent group-hover:from-cyan-400/60 group-hover:via-purple-400/50 transition-all duration-500" />
          </div>
        )}
      </div>

      {/* Enhanced floating shadow with premium depth */}
      <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-3xl transform translate-y-8 group-hover:translate-y-12 group-hover:scale-110" />

      {/* Additional CSS for new animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide-connection {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
        `
      }} />
    </div>
  );
};

export default WorkflowStep;
