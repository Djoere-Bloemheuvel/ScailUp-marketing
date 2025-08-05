
import { useEffect, useState } from 'react';

interface TimelineStep {
  id: number;
  baseColor: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
  position: number;
}

const ApproachVerticalTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Extracted colors from AppleTimeline cards to match exactly
  const steps: TimelineStep[] = [
    { 
      id: 1, 
      baseColor: '#3B82F6', // blue-500 base
      gradientFrom: 'rgb(59, 130, 246)', // blue-500
      gradientTo: 'rgb(34, 211, 238)', // cyan-400
      glowColor: 'rgba(59, 130, 246, 0.25)',
      position: 17 
    },
    { 
      id: 2, 
      baseColor: '#8B5CF6', // purple-500 base
      gradientFrom: 'rgb(139, 92, 246)', // purple-500
      gradientTo: 'rgb(167, 139, 250)', // violet-400
      glowColor: 'rgba(139, 92, 246, 0.25)',
      position: 39 
    },
    { 
      id: 3, 
      baseColor: '#A855F7', // purple-500 base  
      gradientFrom: 'rgb(168, 85, 247)', // purple-400
      gradientTo: 'rgb(59, 130, 246)', // blue-500
      glowColor: 'rgba(168, 85, 247, 0.25)',
      position: 61 
    },
    { 
      id: 4, 
      baseColor: '#10B981', // emerald-500 base
      gradientFrom: 'rgb(34, 197, 94)', // green-500
      gradientTo: 'rgb(37, 99, 235)', // blue-600
      glowColor: 'rgba(34, 197, 94, 0.25)',
      position: 83 
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 pointer-events-none z-20 hidden lg:block">
      {/* Subtler central vertical line */}
      <div 
        className={`absolute w-0.5 h-full transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(to bottom, 
            transparent 10%, 
            ${steps[0].glowColor} 17%, 
            ${steps[1].glowColor} 39%, 
            ${steps[2].glowColor} 61%, 
            ${steps[3].glowColor} 83%, 
            transparent 90%)`,
          left: '50%',
          transform: 'translateX(-50%)',
          filter: 'blur(0.5px)'
        }}
      />

      {/* Timeline dots and connecting lines */}
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`absolute transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{
            top: `${step.position}%`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            transitionDelay: `${index * 200 + 500}ms`
          }}
          onMouseEnter={() => setHoveredStep(step.id)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          {/* Subtler connecting line with correct gradient direction */}
          <div
            className={`absolute h-0.5 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-60' : 'opacity-0'
            }`}
            style={{
              width: '140px',
              background: `linear-gradient(to ${index % 2 === 0 ? 'left' : 'right'}, 
                ${step.gradientFrom} 0%, 
                ${step.gradientTo} 50%, 
                transparent 100%)`,
              top: '50%',
              [index % 2 === 0 ? 'right' : 'left']: '8px',
              transform: 'translateY(-50%)',
              transitionDelay: `${index * 200 + 800}ms`,
              filter: hoveredStep === step.id ? 'brightness(1.3) blur(0px)' : 'brightness(1) blur(0.3px)',
              boxShadow: `0 0 8px ${step.glowColor}`
            }}
          />

          {/* Subtler timeline dot */}
          <div
            className={`relative w-4 h-4 rounded-full transition-all duration-300 ease-out cursor-pointer ${
              hoveredStep === step.id ? 'scale-110' : 'hover:scale-105'
            }`}
            style={{
              background: `linear-gradient(135deg, ${step.gradientFrom} 0%, ${step.gradientTo} 100%)`,
              boxShadow: [
                `0 0 12px ${step.glowColor}`,
                `0 0 24px ${step.glowColor}40`,
                `inset 0 0 8px rgba(255, 255, 255, 0.3)`,
                `0 2px 4px rgba(0, 0, 0, 0.3)`
              ].join(', ')
            }}
          >
            {/* Subtle inner highlight */}
            <div
              className="absolute inset-0.5 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), transparent 60%)`
              }}
            />

            {/* Refined pulse animation */}
            <div
              className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                hoveredStep === step.id ? 'opacity-80' : 'opacity-20'
              }`}
              style={{
                background: `linear-gradient(135deg, ${step.gradientFrom} 0%, ${step.gradientTo} 100%)`,
                filter: 'blur(2px)',
                animation: 'subtlePulse 3s infinite'
              }}
            />
          </div>

          {/* Subtler primary glow */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
              isVisible ? 'opacity-60' : 'opacity-0'
            }`}
            style={{
              width: '24px',
              height: '24px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${step.glowColor} 0%, ${step.glowColor}30 40%, transparent 70%)`,
              filter: hoveredStep === step.id ? 'blur(4px) brightness(1.4)' : 'blur(3px)',
              transitionDelay: `${index * 200 + 700}ms`
            }}
          />

          {/* Subtle outer ambient glow */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-700 ease-out ${
              isVisible ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              width: '40px',
              height: '40px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${step.glowColor}20 0%, ${step.glowColor}10 30%, transparent 60%)`,
              filter: hoveredStep === step.id ? 'blur(8px) brightness(1.2)' : 'blur(6px)',
              mixBlendMode: 'soft-light',
              transitionDelay: `${index * 200 + 800}ms`
            }}
          />
        </div>
      ))}

      {/* Refined CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes subtlePulse {
            0%, 100% { 
              opacity: 0.2;
              transform: scale(1);
            }
            50% { 
              opacity: 0.6;
              transform: scale(1.05);
            }
          }
        `
      }} />
    </div>
  );
};

export default ApproachVerticalTimeline;
