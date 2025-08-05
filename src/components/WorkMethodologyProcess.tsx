
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
 * Horizontal Process Flow Component
 * - Fixed collapsed (185px) and expanded (500px) heights
 * - Fast, responsive animations (200-250ms, ease-out)
 * - Glassmorphism overlay on hover
 * - Enhanced with unique accent colors per step
 */
const WorkMethodologyProcess = ({ steps, activeStep, onStepSelect }: WorkMethodologyProcessProps) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Custom scrollbar styles as CSS string
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  `;

  return (
    <div className="relative">
      {/* Custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

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
            
            const primaryGradient = accentColor.primary;
            if (!primaryGradient || typeof primaryGradient !== 'string') {
              return '59, 130, 246';
            }
            
            const primaryColor = primaryGradient.split(' ')[0];
            if (!primaryColor) {
              return '59, 130, 246';
            }
            
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
                  className={`relative w-12 h-12 rounded-full border-2 transition-all duration-200 ease-out ${
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

              {/* Step card with fixed heights - COLLAPSED: 185px, EXPANDED: 500px */}
              <div 
                className={`relative p-6 rounded-3xl backdrop-blur-sm transition-all duration-200 ease-out flex flex-col overflow-hidden ${
                  isActive 
                    ? `bg-gradient-to-br from-${accentColor.subtle} to-${accentColor.subtle}/50 ${accentColor.border} shadow-2xl h-[500px]` 
                    : isHovered
                      ? `bg-gradient-to-br from-${accentColor.subtle} to-transparent border-white/20 h-[185px] scale-[1.02]`
                      : `bg-gradient-to-br from-${accentColor.subtle}/20 to-transparent ${accentColor.border} opacity-60 hover:opacity-80 h-[185px]`
                } border`}
                style={{
                  boxShadow: isActive 
                    ? `0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(${glowColor}, 0.3)`
                    : isHovered 
                      ? `0 12px 24px rgba(0, 0, 0, 0.3), 0 0 15px rgba(${glowColor}, 0.2)`
                      : undefined
                }}
              >
                {/* Glassmorphism overlay on hover */}
                {isHovered && !isActive && (
                  <div 
                    className="absolute inset-0 rounded-3xl backdrop-blur-sm border transition-all duration-200 ease-out"
                    style={{
                      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(${glowColor}, 0.05))`,
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: `inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(${glowColor}, 0.1)`
                    }}
                  />
                )}

                {/* Phase badge with subtle accent */}
                <div className="mb-4 flex-shrink-0 relative z-10">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-200 ease-out ${
                    isActive 
                      ? `bg-gradient-to-r ${accentColor.primary} text-white ${accentColor.border}`
                      : `bg-gradient-to-r ${accentColor.primary} opacity-60 text-white ${accentColor.border} hover:opacity-80`
                  }`}>
                    {step.phase}
                  </span>
                </div>

                {/* Title and subtitle - fixed space */}
                <div className="flex-shrink-0 mb-4 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-snug">
                    {step.subtitle}
                  </p>
                </div>

                {/* Content area - different behavior for collapsed vs expanded */}
                <div className="flex-1 relative">
                  {/* Collapsed state content with bottom-right hover text */}
                  {!isActive && (
                    <div className="absolute inset-0">
                      {/* Bottom right hover text with ArrowUpRight icon */}
                      <div className="absolute bottom-0 right-0 flex items-center">
                        <div 
                          className={`flex items-center text-xs transition-all duration-250 ease-out ${
                            isHovered 
                              ? 'opacity-60 translate-y-0' 
                              : 'opacity-0 translate-y-1'
                          }`}
                          style={{ color: '#9CA3AF' }}
                        >
                          <span className="mr-1">Klik voor details</span>
                          <ArrowUpRight 
                            className={`w-3 h-3 transition-all duration-200 ease-out ${
                              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expanded state content with scrollable area */}
                  {isActive && (
                    <div className="absolute inset-0">
                      <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
                        <div className={`pt-4 border-t transition-colors duration-200 ${
                          isActive ? accentColor.border : 'border-white/10'
                        }`}>
                          <p className="text-white/60 text-sm leading-relaxed mb-6">
                            {step.description}
                          </p>
                          
                          {/* Deliverables with accent color bullets */}
                          <div className="space-y-3">
                            <h4 className="text-white/90 font-medium text-xs uppercase tracking-wider">
                              Deliverables:
                            </h4>
                            {step.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-start text-xs text-white/70">
                                <div 
                                  className="w-1 h-1 rounded-full mr-2 mt-2 flex-shrink-0"
                                  style={{
                                    background: `linear-gradient(135deg, rgba(${glowColor}, 1), rgba(${glowColor}, 0.8))`
                                  }}
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

                {/* Accent line at bottom for active cards */}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-4 right-4 h-px opacity-60 flex-shrink-0"
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
