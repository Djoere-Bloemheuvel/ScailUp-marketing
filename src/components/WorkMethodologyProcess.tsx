
import { useState } from 'react';
import { Search, Zap, Layers, Rocket, ChevronRight } from 'lucide-react';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  accentColor: {
    primary: string;
    glow: string;
    border: string;
    subtle: string;
    rgb: string;
  };
  deliverables: string[];
}

interface WorkMethodologyProcessProps {
  steps: MethodologyStep[];
  activeStep: number;
  onStepSelect: (stepId: number) => void;
}

/**
 * Premium Process Flow Component
 * - Buildrs.AI signature glassmorphic design
 * - Distinctive accent colors per step
 * - Apple-inspired interactions and animations
 * - Optimized for performance and accessibility
 */
const WorkMethodologyProcess = ({ activeStep, onStepSelect }: WorkMethodologyProcessProps) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Premium steps with refined copy and distinctive branding colors
  const steps: MethodologyStep[] = [
    {
      id: 1,
      phase: "Fase 01",
      title: "Discovery & Strategie",
      subtitle: "Van businessvraag naar crystal-clear roadmap",
      description: "We analyseren uw behoeften, identificeren kansen en creëren een strategische blauwdruk die directe ROI garandeert.",
      icon: Search,
      accentColor: {
        primary: "from-blue-500 to-cyan-400",
        glow: "blue-500/30",
        border: "border-blue-500/40",
        subtle: "blue-500/10",
        rgb: "59, 130, 246"
      },
      deliverables: [
        "Strategische roadmap & architectuur",
        "Technical requirements document",
        "ROI-projecties & success metrics"
      ]
    },
    {
      id: 2,
      phase: "Fase 02",
      title: "Rapid Prototype",
      subtitle: "Werkende demo binnen 72 uur",
      description: "Geen maanden wachten. We bouwen een functionele MVP die uw visie tastbaar maakt en directe feedback mogelijk maakt.",
      icon: Zap,
      accentColor: {
        primary: "from-purple-500 to-violet-400",
        glow: "purple-500/30",
        border: "border-purple-500/40",
        subtle: "purple-500/10",
        rgb: "139, 92, 246"
      },
      deliverables: [
        "Werkende MVP demonstratie",
        "Core features & user flows",
        "Stakeholder feedback sessie"
      ]
    },
    {
      id: 3,
      phase: "Fase 03",
      title: "Iteratieve Bouw",
      subtitle: "Van prototype naar productie-ready",
      description: "Agile ontwikkeling met wekelijkse demos. Uw feedback stuurt de richting — flexibel, snel, en altijd transparant.",
      icon: Layers,
      accentColor: {
        primary: "from-emerald-400 to-cyan-400",
        glow: "emerald-400/30",
        border: "border-emerald-400/40",
        subtle: "emerald-400/10",
        rgb: "52, 211, 153"
      },
      deliverables: [
        "Production-ready applicatie",
        "Comprehensive testing & QA",
        "Performance optimalisatie"
      ]
    },
    {
      id: 4,
      phase: "Fase 04",
      title: "Live & Optimalisatie",
      subtitle: "Launch, monitor, en continue verbetering",
      description: "Seamless deployment met real-time monitoring. We optimaliseren continue gebaseerd op gebruikersdata en performance metrics.",
      icon: Rocket,
      accentColor: {
        primary: "from-orange-400 to-amber-400",
        glow: "orange-400/30",
        border: "border-orange-400/40",
        subtle: "orange-400/10",
        rgb: "251, 146, 60"
      },
      deliverables: [
        "Live deployment & monitoring",
        "Analytics dashboard setup",
        "Ongoing optimization plan"
      ]
    }
  ];

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Progress connector */}
      <div className="absolute top-16 left-0 right-0 h-0.5 bg-white/5 hidden lg:block z-10">
        <div 
          className="h-full bg-gradient-to-r from-blue-500/60 via-purple-500/60 via-emerald-400/60 to-orange-400/60 transition-all duration-1000 ease-out"
          style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Process steps grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const isHovered = hoveredStep === step.id;
          const isCompleted = activeStep > step.id;
          
          return (
            <div
              key={step.id}
              className="relative cursor-pointer group"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => onStepSelect(step.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              aria-label={`${step.title}: ${step.subtitle}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onStepSelect(step.id);
                }
              }}
            >
              {/* Step number indicator with distinctive accent colors */}
              <div className="flex items-center justify-center mb-6">
                <div 
                  className={`relative w-14 h-14 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                    isActive || isCompleted
                      ? `${step.accentColor.border} bg-gradient-to-br ${step.accentColor.primary} text-white scale-110 shadow-lg`
                      : `border-white/20 bg-white/5 text-white/60 hover:border-white/30 hover:bg-white/10 hover:text-white/80`
                  }`}
                  style={{
                    boxShadow: (isActive || isCompleted) 
                      ? `0 0 30px rgba(${step.accentColor.rgb}, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)`
                      : isHovered 
                        ? `0 0 20px rgba(${step.accentColor.rgb}, 0.2), 0 5px 20px rgba(0, 0, 0, 0.2)`
                        : undefined
                  }}
                >
                  <step.icon className="w-6 h-6" />
                  
                  {/* Enhanced glow effect for active step */}
                  {isActive && (
                    <div 
                      className="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse -z-10 scale-150"
                      style={{
                        background: `linear-gradient(135deg, rgba(${step.accentColor.rgb}, 0.6), rgba(${step.accentColor.rgb}, 0.2))`
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Premium step card with fixed heights */}
              <div 
                className={`relative p-6 rounded-3xl backdrop-blur-xl transition-all duration-500 flex flex-col overflow-hidden border ${
                  isActive 
                    ? `bg-white/[0.08] ${step.accentColor.border} shadow-2xl h-[420px]` 
                    : isHovered
                      ? `bg-white/[0.06] border-white/20 h-[160px] shadow-lg`
                      : `bg-white/[0.03] border-white/10 h-[160px] hover:bg-white/[0.05] hover:border-white/15`
                }`}
                style={{
                  boxShadow: isActive 
                    ? `0 25px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(${step.accentColor.rgb}, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                    : isHovered 
                      ? `0 15px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(${step.accentColor.rgb}, 0.1)`
                      : `0 8px 20px rgba(0, 0, 0, 0.2)`
                }}
              >
                {/* Phase badge */}
                <div className="mb-4 flex-shrink-0">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-r ${step.accentColor.primary} text-white ${step.accentColor.border} shadow-sm`
                      : `bg-white/5 text-white/60 border-white/20 hover:bg-white/10 hover:text-white/80`
                  }`}>
                    {step.phase}
                  </span>
                </div>

                {/* Title and subtitle */}
                <div className="flex-shrink-0 mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed font-light">
                    {step.subtitle}
                  </p>
                </div>

                {/* Content area */}
                <div className="flex-1 relative">
                  {/* Collapsed state */}
                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center text-white/40 text-xs group-hover:text-white/60 transition-colors duration-300">
                        <span>Details bekijken</span>
                        <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  )}

                  {/* Expanded state content */}
                  {isActive && (
                    <div className="absolute inset-0">
                      <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                        <div className={`pt-4 border-t transition-colors duration-300 ${step.accentColor.border}`}>
                          <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                            {step.description}
                          </p>
                          
                          {/* Deliverables */}
                          <div className="space-y-3">
                            <h4 className="text-white/90 font-semibold text-xs uppercase tracking-wider">
                              Deliverables
                            </h4>
                            {step.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-start text-xs text-white/80">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full mr-3 mt-1.5 flex-shrink-0 shadow-sm"
                                  style={{
                                    background: `linear-gradient(135deg, rgba(${step.accentColor.rgb}, 1), rgba(${step.accentColor.rgb}, 0.7))`
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

                {/* Accent line for active cards */}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-4 right-4 h-px opacity-50 flex-shrink-0"
                    style={{
                      background: `linear-gradient(to right, transparent, rgba(${step.accentColor.rgb}, 0.8), transparent)`
                    }}
                  />
                )}

                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent to-white/[0.02]" />
                </div>
              </div>

              {/* Connection line to next step (desktop only) */}
              {step.id < steps.length && (
                <div className="absolute top-16 -right-2 w-4 h-0.5 bg-white/10 hidden lg:block" />
              )}
            </div>
          );
        })}
      </div>

      {/* Custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-thin {
            scrollbar-width: thin;
          }
          .scrollbar-thin::-webkit-scrollbar {
            width: 3px;
          }
          .scrollbar-thumb-white\/20::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
          }
          .scrollbar-track-transparent::-webkit-scrollbar-track {
            background: transparent;
          }
        `
      }} />
    </div>
  );
};

export default WorkMethodologyProcess;
