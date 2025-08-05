
import { useState } from 'react';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

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
  accentColor: {
    primary: string;
    glow: string;
    border: string;
    subtle: string;
  };
}

interface WorkMethodologyProcessProps {
  steps: MethodologyStep[];
  activeStep: number;
  onStepSelect: (stepId: number) => void;
}

/**
 * Apple-Style Process Flow Component
 * - Clean dark glass cards with subtle accent colors
 * - Fixed collapsed (185px) and expanded (450px) heights
 * - Premium hover animations (200ms, ease-out)
 * - Accent colors only on icons, labels, and hover effects
 */
const WorkMethodologyProcess = ({ steps, activeStep, onStepSelect }: WorkMethodologyProcessProps) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Define refined accent colors
  const getAccentColor = (stepId: number) => {
    const colors = {
      1: { // Blue - Consulting
        icon: 'text-blue-400',
        phase: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
        glow: '59, 130, 246', // blue-500 RGB
        border: 'border-blue-500/20'
      },
      2: { // Purple - Tech/Prototype  
        icon: 'text-purple-400',
        phase: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
        glow: '139, 92, 246', // purple-500 RGB
        border: 'border-purple-500/20'
      },
      3: { // Mint - Collaboration/Agents
        icon: 'text-emerald-400', 
        phase: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        glow: '16, 185, 129', // emerald-500 RGB
        border: 'border-emerald-500/20'
      },
      4: { // Orange - Launch/Success
        icon: 'text-orange-400',
        phase: 'bg-orange-500/15 text-orange-300 border-orange-500/30', 
        glow: '249, 115, 22', // orange-500 RGB
        border: 'border-orange-500/20'
      }
    };
    return colors[stepId as keyof typeof colors] || colors[1];
  };

  // Custom scrollbar styles
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.02);
      border-radius: 2px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 2px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  `;

  return (
    <div className="relative">
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {/* Progress connector */}
      <div className="absolute top-16 left-0 right-0 h-px bg-white/5 hidden lg:block z-10">
        <div 
          className="h-full bg-gradient-to-r from-white/20 to-white/40 transition-all duration-1000 ease-out"
          style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Process steps grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, index) => {
          const isActive = activeStep === step.id;
          const isHovered = hoveredStep === step.id;
          const isCompleted = activeStep > step.id;
          const accent = getAccentColor(step.id);
          
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
                  className={`relative w-12 h-12 rounded-full border-2 transition-all duration-200 ease-out ${
                    isActive || isCompleted 
                      ? `${accent.border} bg-white/5 backdrop-blur-sm scale-110` 
                      : `border-white/10 bg-white/[0.02] backdrop-blur-sm hover:${accent.border} hover:bg-white/5`
                  }`}
                  style={{
                    boxShadow: (isActive || isCompleted) 
                      ? `0 0 20px rgba(${accent.glow}, 0.3), 0 0 40px rgba(${accent.glow}, 0.15)`
                      : isHovered
                        ? `0 0 12px rgba(${accent.glow}, 0.2)`
                        : undefined
                  }}
                >
                  <step.icon className={`w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    isActive || isCompleted ? accent.icon : `text-white/40 group-hover:${accent.icon}`
                  } transition-colors duration-200`} />
                </div>
              </div>

              {/* Main card with Apple-style design */}
              <div 
                className={`relative rounded-3xl backdrop-blur-sm border transition-all duration-200 ease-out overflow-hidden ${
                  isActive 
                    ? `bg-white/[0.03] border-white/10 shadow-2xl h-[450px]` 
                    : `bg-white/[0.015] border-white/5 h-[185px] hover:bg-white/[0.025] hover:border-white/8 hover:scale-[1.01]`
                }`}
                style={{
                  boxShadow: isActive 
                    ? `0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)`
                    : isHovered 
                      ? `0 12px 24px rgba(0, 0, 0, 0.2), 0 0 20px rgba(${accent.glow}, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.03)`
                      : `inset 0 1px 0 rgba(255, 255, 255, 0.02)`
                }}
              >
                {/* Large muted number overlay */}
                <div className="absolute top-4 right-6 text-7xl font-black text-white/[0.03] pointer-events-none select-none">
                  {String(step.id).padStart(2, '0')}
                </div>

                <div className="relative p-6 h-full flex flex-col">
                  {/* Phase badge */}
                  <div className="mb-4 flex-shrink-0">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-200 ${accent.phase}`}>
                      {step.phase}
                    </span>
                  </div>

                  {/* Title and subtitle */}
                  <div className="flex-shrink-0 mb-4">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-snug max-w-sm">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Content area */}
                  <div className="flex-1 relative">
                    {/* Collapsed state - Click for details CTA */}
                    {!isActive && (
                      <div className="absolute bottom-0 right-0">
                        <div 
                          className={`flex items-center text-xs text-white/40 transition-all duration-200 ease-out ${
                            isHovered 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-1'
                          }`}
                        >
                          <span className="mr-1">Klik voor details</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    )}

                    {/* Expanded state content */}
                    {isActive && (
                      <div className="absolute inset-0">
                        <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
                          <div className="pt-4 border-t border-white/5">
                            <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                              {step.description}
                            </p>
                            
                            {/* Deliverables */}
                            <div className="space-y-3">
                              <h4 className="text-white/70 font-medium text-xs uppercase tracking-wider">
                                Deliverables:
                              </h4>
                              {step.deliverables.map((deliverable, idx) => (
                                <div key={idx} className="flex items-start text-xs text-white/50">
                                  <div 
                                    className="w-1 h-1 rounded-full mr-3 mt-2 flex-shrink-0"
                                    style={{ backgroundColor: `rgba(${accent.glow}, 0.8)` }}
                                  />
                                  <span className="leading-relaxed font-light">{deliverable}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom accent line for active cards */}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-6 right-6 h-px opacity-40"
                    style={{
                      background: `linear-gradient(to right, transparent, rgba(${accent.glow}, 0.6), transparent)`
                    }}
                  />
                )}
              </div>

              {/* Connection line to next step */}
              {index < steps.length - 1 && (
                <div className="absolute top-16 -right-3 w-6 h-px bg-white/10 hidden lg:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkMethodologyProcess;
