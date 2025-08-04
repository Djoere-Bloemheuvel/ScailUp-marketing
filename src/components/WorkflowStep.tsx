
import { LucideIcon } from 'lucide-react';

interface WorkflowStepProps {
  step: {
    number: string;
    title: string;
    subtitle: string;
    icon?: LucideIcon;
  };
  delay: string;
}

const WorkflowStep = ({ step, delay }: WorkflowStepProps) => {
  return (
    <div 
      className="group relative apple-fade-in text-center"
      style={{ animationDelay: delay }}
    >
      <div className="relative flex flex-col items-center space-y-6 p-8 lg:p-12">
        
        {/* Step Number */}
        <div className="relative">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.12]">
            <span className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              {step.number}
            </span>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
        </div>

        {/* Content */}
        <div className="space-y-4 max-w-sm">
          <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-white transition-colors duration-300">
            {step.title}
          </h3>
          
          <p className="text-white/60 leading-relaxed text-base lg:text-lg font-light tracking-wide group-hover:text-white/75 transition-colors duration-300">
            {step.subtitle}
          </p>
        </div>

        {/* Connecting line (hidden on mobile, shown between steps on desktop) */}
        <div className="hidden lg:block absolute top-8 -right-1/2 w-full h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default WorkflowStep;
