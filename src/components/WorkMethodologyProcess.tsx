
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
 * Horizontal Process Flow Component
 * - Completely different design from timeline approach
 * - Interactive step cards with hover effects
 * - Progress connector between steps
 * - Modern, dynamic animations
 * - Enhanced with unique accent colors per step
 */
const WorkMethodologyProcess = ({ steps, activeStep, onStepSelect }: WorkMethodologyProcessProps) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Progress connector */}
      <div className="absolute top-16 left-0 right-0 h-0.5 bg-white/10 hidden lg:block z-10">
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
          const isCompleted = activeStep > step.id;
          
          // Safe access to accent color properties with explicit fallbacks
          const accentColor = step.accentColor || {
            primary: 'from-blue-500 to-cyan-600',
            glow: 'blue-500/20',
            border: 'border-blue-500/30',
            subtle: 'blue-500/5'
          };

          // Extract base color from primary gradient for glow effects
          const getGlowColor = () => {
            const colorMap: { [key: string]: string } = {
              'from-blue-500': '59, 130, 246',
              'from-purple-500': '139, 92, 246', 
              'from-emerald-400': '52, 211, 153',
              'from-orange-500': '249, 115, 22'
            };
            
            const primaryColor = accentColor.primary.split(' ')[0];
            return colorMap[primaryColor] || '59, 130, 246';
          };
          
          const glowColor = getGlowColor();
          
          return (
            <div
              key={step.id}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => onStepSelect(step.id)}
            >
              {/* Step number indicator with unique accent colors */}
              <div className="flex items-center justify-center mb-6">
                <div 
                  className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? `${accentColor.border} bg-gradient-to-br ${accentColor.primary} text-white scale-110` 
                      : isCompleted 
                        ? `${accentColor.border} bg-gradient-to-br ${accentColor.primary} text-white`
                        : `${accentColor.border} bg-gradient-to-br ${accentColor.primary} opacity-30 text-white hover:opacity-50`
                  }`}
                  style={{
                    boxShadow: (isActive || isCompleted) 
                      ? `0 0 20px rgba(${glowColor}, 0.4), 0 0 40px rgba(${glowColor}, 0.2)`
                      : undefined
                  }}
                >
                  <step.icon className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  
                  {/* Enhanced glow effect for active step */}
                  {isActive && (
                    <div 
                      className="absolute inset-0 rounded-full blur-lg opacity-60 animate-pulse -z-10"
                      style={{
                        background: `linear-gradient(135deg, rgba(${glowColor}, 0.6), rgba(${glowColor}, 0.3))`
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Step card with accent color theming - fixed height */}
              <div 
                className={`relative p-6 rounded-3xl backdrop-blur-sm transition-all duration-500 h-[400px] flex flex-col ${
                  isActive 
                    ? `bg-gradient-to-br from-${accentColor.subtle} to-${accentColor.subtle}/50 ${accentColor.border} shadow-2xl` 
                    : isHovered
                      ? `bg-gradient-to-br from-${accentColor.subtle} to-transparent border-white/20`
                      : `bg-gradient-to-br from-${accentColor.subtle}/20 to-transparent ${accentColor.border} opacity-60 hover:opacity-80 hover:bg-gradient-to-br hover:from-${accentColor.subtle} hover:to-transparent`
                } border`}
                style={{
                  boxShadow: isActive 
                    ? `0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(${glowColor}, 0.3)`
                    : isHovered 
                      ? `0 12px 24px rgba(0, 0, 0, 0.3), 0 0 15px rgba(${glowColor}, 0.2)`
                      : undefined
                }}
              >
                {/* Phase badge with subtle accent */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono border transition-colors duration-300 ${
                    isActive 
                      ? `bg-gradient-to-r ${accentColor.primary} text-white ${accentColor.border}`
                      : `bg-gradient-to-r ${accentColor.primary} opacity-60 text-white ${accentColor.border} hover:opacity-80`
                  }`}>
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
                <div className={`overflow-hidden transition-all duration-500 flex-1 ${
                  isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className={`pt-4 border-t transition-colors duration-300 ${
                    isActive ? accentColor.border : 'border-white/10'
                  }`}>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Deliverables with accent color bullets */}
                    <div className="space-y-2">
                      <h4 className="text-white/90 font-semibold text-xs uppercase tracking-wide">
                        Deliverables:
                      </h4>
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-xs text-white/70">
                          <div 
                            className="w-1 h-1 rounded-full mr-2"
                            style={{
                              background: `linear-gradient(135deg, rgba(${glowColor}, 1), rgba(${glowColor}, 0.8))`
                            }}
                          />
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

                {/* Accent line at bottom for active cards */}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-4 right-4 h-px opacity-60"
                    style={{
                      background: `linear-gradient(to right, transparent, rgba(${glowColor}, 0.8), transparent)`
                    }}
                  />
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
