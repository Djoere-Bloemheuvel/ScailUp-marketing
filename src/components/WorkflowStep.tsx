
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

  // Get color scheme based on step number - matching services section style
  const getColorScheme = (stepNumber: string) => {
    switch (stepNumber) {
      case "1":
        return {
          accent: "from-blue-500 to-purple-600",
          glowColor: "shadow-blue-500/20 hover:shadow-blue-500/40",
          borderGlow: "border-blue-500/30 hover:border-blue-400/50",
          iconGlow: "text-blue-300",
          connectionColor: "from-blue-500/50 to-purple-500/50"
        };
      case "2":
        return {
          accent: "from-purple-500 to-pink-600", 
          glowColor: "shadow-purple-500/20 hover:shadow-purple-500/40",
          borderGlow: "border-purple-500/30 hover:border-purple-400/50",
          iconGlow: "text-purple-300",
          connectionColor: "from-purple-500/50 to-pink-500/50"
        };
      case "3":
        return {
          accent: "from-pink-500 to-blue-600",
          glowColor: "shadow-pink-500/20 hover:shadow-pink-500/40", 
          borderGlow: "border-pink-500/30 hover:border-pink-400/50",
          iconGlow: "text-pink-300",
          connectionColor: "from-pink-500/50 to-blue-500/50"
        };
      default:
        return {
          accent: "from-blue-500 to-purple-600",
          glowColor: "shadow-blue-500/20 hover:shadow-blue-500/40",
          borderGlow: "border-blue-500/30 hover:border-blue-400/50", 
          iconGlow: "text-blue-300",
          connectionColor: "from-blue-500/50 to-purple-500/50"
        };
    }
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
      <div className="relative flex flex-col items-center space-y-8 transition-all duration-500 ease-out">
        
        {/* Premium glassmorphism card container inspired by services section */}
        <div className={`relative rounded-3xl backdrop-blur-xl border ${colors.borderGlow} p-8 lg:p-12 transition-all duration-700 hover:scale-105 hover:-translate-y-4 ${colors.glowColor} shadow-2xl cursor-pointer`}
             style={{
               background: `
                 linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.01) 100%),
                 linear-gradient(135deg, ${colors.accent.replace('from-', '').replace('to-', '').split(' ').join(', ')})
               `,
               animation: `workflowCardEntrance 1s ease-out forwards ${delay}`
             }}>
          
          {/* Icon container with premium styling */}
          <div className="relative mb-8">
            <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br ${colors.accent} border ${colors.borderGlow} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${colors.glowColor}`}>
              <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight relative drop-shadow-lg">
                {step.number}
              </span>
              
              {/* Subtle inner highlight */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
            </div>
            
            {/* Ambient icon glow */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.accent} blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 scale-110`} />
          </div>

          {/* Content with premium typography */}
          <div className="space-y-6 max-w-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight transition-all duration-500 relative group-hover:-translate-y-1">
              {step.title}
              
              {/* Premium accent line */}
              <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${colors.accent} rounded-full transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100`} />
            </h3>
            
            <p className="text-premium-silver/80 leading-relaxed text-lg lg:text-xl font-light tracking-wide transition-all duration-500 group-hover:text-premium-silver/95 group-hover:scale-105">
              {step.subtitle}
            </p>

            {/* Step indicator */}
            <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className={`w-2 h-2 bg-gradient-to-r ${colors.accent} rounded-full animate-pulse`} />
              <span className="text-premium-silver/60 text-sm font-medium">Stap {step.number}</span>
              <div className={`w-2 h-2 bg-gradient-to-r ${colors.accent} rounded-full animate-pulse`} style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Premium accent elements */}
          <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${colors.iconGlow.replace('text-', 'via-')} to-transparent opacity-30 group-hover:opacity-60 transition-all duration-500`} />
          <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${colors.iconGlow.replace('text-', 'bg-')} opacity-40 group-hover:opacity-80 transition-all duration-500`} />
        </div>

        {/* Connection line for desktop */}
        {!isLast && (
          <div className="hidden lg:block absolute top-20 -right-1/2 w-full h-px z-10">
            <div className={`w-full h-full bg-gradient-to-r ${colors.connectionColor} to-transparent transition-all duration-500`} />
            {/* Flowing light effect */}
            <div className="absolute inset-0 w-8 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[slide-connection_2s_ease-in-out_infinite]" />
          </div>
        )}

        {/* Mobile connecting line */}
        {!isLast && (
          <div className="lg:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-px h-20">
            <div className={`w-full h-full bg-gradient-to-b ${colors.connectionColor} to-transparent transition-all duration-500`} />
          </div>
        )}

        {/* Floating ambient particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-1/4 -right-2 w-1 h-1 ${colors.iconGlow.replace('text-', 'bg-')} rounded-full animate-pulse opacity-60`} style={{ animationDelay: `1000ms` }} />
          <div className={`absolute bottom-1/3 -left-2 w-1.5 h-1.5 ${colors.iconGlow.replace('text-', 'bg-')} rounded-full animate-pulse opacity-40`} style={{ animationDelay: `1500ms` }} />
        </div>
      </div>

      {/* Enhanced floating shadow with premium depth */}
      <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/8 to-pink-500/6 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-3xl transform translate-y-8 group-hover:translate-y-12 group-hover:scale-110" />

      {/* CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes workflowCardEntrance {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes slide-connection {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }

          .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `
      }} />
    </div>
  );
};

export default WorkflowStep;
