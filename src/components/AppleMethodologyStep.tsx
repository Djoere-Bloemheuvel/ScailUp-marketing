
import { useState } from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  deliverables: string[];
  accentColor: {
    primary: string;
    glow: string;
    border: string;
    subtle: string;
  };
}

interface AppleMethodologyStepProps {
  step: MethodologyStep;
  index: number;
  isActive: boolean;
  isVisible: boolean;
  onSelect: (stepId: number) => void;
  totalSteps: number;
}

/**
 * Apple.com-Inspired Methodology Step
 * - Ultra-premium minimalist design
 * - Subtle hover interactions
 * - Refined glassmorphism
 * - Elegant content reveal
 */
const AppleMethodologyStep = ({ 
  step, 
  index, 
  isActive, 
  isVisible, 
  onSelect, 
  totalSteps 
}: AppleMethodologyStepProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = index % 2 === 0;
  
  // Get accent color values with safe fallbacks
  const getGlowColor = () => {
    const colorMap: { [key: string]: string } = {
      'from-blue-500': '59, 130, 246',
      'from-purple-500': '139, 92, 246',
      'from-emerald-400': '52, 211, 153',
      'from-orange-500': '249, 115, 22'
    };
    
    const primaryGradient = step.accentColor?.primary || 'from-blue-500';
    const primaryColor = primaryGradient.split(' ')[0];
    return colorMap[primaryColor as keyof typeof colorMap] || '59, 130, 246';
  };

  const glowColor = getGlowColor();

  return (
    <div
      data-step-id={step.id}
      className="relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : 40}px)`,
        transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${index * 200}ms`
      }}
    >
      {/* Content wrapper */}
      <div className={`flex items-start ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20`}>
        
        {/* Step number and icon - Apple style */}
        <div className="flex-shrink-0">
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onSelect(step.id)}
          >
            {/* Main circle with refined styling */}
            <div 
              className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-full transition-all duration-700 ease-out ${
                isActive 
                  ? 'bg-white text-black scale-110 shadow-2xl' 
                  : 'bg-white/[0.03] text-white hover:bg-white/[0.06] hover:scale-105'
              } border ${
                isActive 
                  ? 'border-white/20' 
                  : 'border-white/[0.08] hover:border-white/[0.15]'
              } backdrop-blur-sm flex items-center justify-center`}
              style={{
                boxShadow: isActive 
                  ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(${glowColor}, 0.2)`
                  : isHovered 
                    ? `0 8px 16px rgba(0, 0, 0, 0.3), 0 0 20px rgba(${glowColor}, 0.1)`
                    : '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              <step.icon className={`w-8 h-8 lg:w-10 lg:h-10 transition-all duration-500 ${
                isActive ? 'text-black' : 'text-white/80 group-hover:text-white'
              }`} />
              
              {/* Subtle inner highlight */}
              <div className={`absolute inset-2 rounded-full transition-opacity duration-500 ${
                isActive ? 'bg-black/5 opacity-100' : 'bg-white/[0.02] opacity-0 group-hover:opacity-100'
              }`} />
            </div>
            
            {/* Step number overlay */}
            <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-500 ${
              isActive 
                ? 'bg-black text-white' 
                : 'bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white/80'
            } border border-white/10`}>
              {step.id}
            </div>

            {/* Connecting line to next step */}
            {index < totalSteps - 1 && (
              <div className={`hidden lg:block absolute top-1/2 w-32 h-px transition-all duration-700 ${
                isLeft ? '-right-32' : '-left-32'
              }`}>
                <div className={`w-full h-full bg-gradient-to-r transition-all duration-700 ${
                  isActive 
                    ? `from-white/40 ${isLeft ? 'to-transparent' : 'from-transparent to-white/40'}` 
                    : `from-white/10 ${isLeft ? 'to-transparent' : 'from-transparent to-white/10'} group-hover:from-white/20`
                }`} />
              </div>
            )}
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 max-w-2xl">
          <div 
            className={`cursor-pointer transition-all duration-500 ${
              isActive ? 'transform scale-[1.02]' : 'hover:transform hover:scale-[1.01]'
            }`}
            onClick={() => onSelect(step.id)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Phase badge */}
            <div className="mb-6">
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-500 ${
                isActive 
                  ? `bg-gradient-to-r ${step.accentColor?.primary || 'from-blue-500'} text-white ${step.accentColor?.border || 'border-blue-500/20'} shadow-lg`
                  : `bg-white/[0.02] text-white/60 border border-white/[0.08] hover:bg-white/[0.04] hover:text-white/80`
              } backdrop-blur-sm`}>
                {step.phase}
              </span>
            </div>

            {/* Title and subtitle */}
            <div className="mb-8">
              <h3 className={`text-2xl lg:text-4xl xl:text-5xl font-black mb-4 leading-tight tracking-tight transition-all duration-500 ${
                isActive 
                  ? 'text-white' 
                  : 'text-white/90 hover:text-white'
              } ${isLeft ? 'text-left' : 'lg:text-right'}`}>
                {step.title}
              </h3>
              
              <p className={`text-lg lg:text-xl text-white/60 font-light leading-relaxed tracking-wide transition-all duration-500 hover:text-white/80 ${
                isLeft ? 'text-left' : 'lg:text-right'
              }`}>
                {step.subtitle}
              </p>
            </div>

            {/* Expandable content */}
            <div className={`overflow-hidden transition-all duration-700 ease-out ${
              isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className={`${step.accentColor?.border || 'border-blue-500/20'} border-t pt-8 ${
                isLeft ? '' : 'lg:text-right'
              }`}>
                <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 font-light">
                  {step.description}
                </p>
                
                {/* Deliverables with refined styling */}
                <div className="space-y-4">
                  <h4 className="text-white/50 font-medium text-sm uppercase tracking-wider mb-6">
                    Wat je krijgt:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.deliverables.map((deliverable, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-start text-sm text-white/60 hover:text-white/80 transition-colors duration-300 ${
                          isLeft ? '' : 'lg:justify-end lg:flex-row-reverse'
                        }`}
                      >
                        <ChevronRight className={`w-3 h-3 flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                          isLeft ? 'mr-2 text-white/40' : 'ml-2 text-white/40 transform rotate-180'
                        }`} />
                        <span className="font-light leading-relaxed">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hover indicator */}
            <div className={`mt-6 flex items-center text-white/30 text-xs transition-all duration-500 ${
              isHovered && !isActive ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-2'
            } ${isLeft ? 'justify-start' : 'lg:justify-end'}`}>
              <span>Klik voor details</span>
              <ChevronRight className={`w-3 h-3 ml-1 transition-all duration-300 ${
                isLeft ? '' : 'transform rotate-180'
              }`} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile connecting line */}
      {index < totalSteps - 1 && (
        <div className="lg:hidden flex justify-center mt-12">
          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      )}
    </div>
  );
};

export default AppleMethodologyStep;
