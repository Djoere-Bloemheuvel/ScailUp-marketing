
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  glowColor: string;
  duration: string;
  deliverables: string[];
}

interface WorkMethodologyProcessProps {
  steps: MethodologyStep[];
  activeStep: number;
  onStepSelect: (stepId: number) => void;
}

/**
 * Horizontal Process Flow Component
 * - Completely different design from timeline approach
 * - Interactive step cards with hover effects
 * - Progress connector between steps
 * - Modern, dynamic animations
 */
const WorkMethodologyProcess = ({ steps, activeStep, onStepSelect }: WorkMethodologyProcessProps) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Progress connector */}
      <div className="absolute top-16 left-0 right-0 h-0.5 bg-white/10 hidden lg:block">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 to-purple-400 transition-all duration-1000 ease-out"
          style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Process steps grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, index) => {
          const isActive = activeStep === step.id;
          const isHovered = hoveredStep === step.id;
          const isPassed = activeStep > step.id;
          
          return (
            <div
              key={step.id}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => onStepSelect(step.id)}
            >
              {/* Step number indicator */}
              <div className="flex items-center justify-center mb-6">
                <div 
                  className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? 'border-white bg-white text-black scale-110' 
                      : isPassed 
                        ? 'border-emerald-400 bg-emerald-400 text-black'
                        : 'border-white/30 bg-transparent text-white hover:border-white/60'
                  }`}
                >
                  <step.icon className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  
                  {/* Glow effect for active step */}
                  {isActive && (
                    <div className={`absolute inset-0 rounded-full bg-${step.glowColor} blur-lg opacity-60 animate-pulse`} />
                  )}
                </div>
              </div>

              {/* Step card */}
              <div 
                className={`relative p-6 rounded-3xl backdrop-blur-sm transition-all duration-500 border ${
                  isActive 
                    ? 'bg-white/10 border-white/30 shadow-2xl' 
                    : isHovered
                      ? 'bg-white/5 border-white/20'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]'
                }`}
                style={{
                  transform: isActive ? 'translateY(-8px)' : isHovered ? 'translateY(-4px)' : 'translateY(0)',
                }}
              >
                {/* Phase badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-white/80 border border-white/20">
                    {step.phase}
                  </span>
                </div>

                {/* Title and subtitle */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {step.subtitle}
                </p>

                {/* Expandable description for active step */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Deliverables */}
                    <div className="space-y-2">
                      <h4 className="text-white/90 font-semibold text-xs uppercase tracking-wide">
                        Deliverables:
                      </h4>
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-xs text-white/70">
                          <div className="w-1 h-1 rounded-full bg-emerald-400 mr-2" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                {isHovered && !isActive && (
                  <div className="absolute bottom-4 right-4 text-white/40 text-xs">
                    Klik voor details
                  </div>
                )}
              </div>

              {/* Connection line to next step (desktop only) */}
              {index < steps.length - 1 && (
                <div className="absolute top-16 -right-3 w-6 h-0.5 bg-white/20 hidden lg:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkMethodologyProcess;
