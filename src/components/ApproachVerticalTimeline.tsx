
import { useEffect, useState } from 'react';

interface TimelineStep {
  id: number;
  color: string;
  glowColor: string;
  position: number; // percentage from top
}

const ApproachVerticalTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Updated colors to match the step themes more closely
  const steps: TimelineStep[] = [
    { id: 1, color: '#4484FF', glowColor: 'rgba(68, 132, 255, 0.8)', position: 17 }, // Blue - Speed
    { id: 2, color: '#AA66FF', glowColor: 'rgba(170, 102, 255, 0.8)', position: 39 }, // Purple - Ownership  
    { id: 3, color: '#8B5CF6', glowColor: 'rgba(139, 92, 246, 0.8)', position: 61 }, // Purple-Blue - Standards
    { id: 4, color: '#10B981', glowColor: 'rgba(16, 185, 129, 0.8)', position: 83 }  // Green - Creativity
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 pointer-events-none z-20 hidden lg:block">
      {/* Enhanced central vertical line */}
      <div 
        className={`absolute w-1 h-full transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, transparent 10%, rgba(68, 132, 255, 0.3) 17%, rgba(170, 102, 255, 0.3) 39%, rgba(139, 92, 246, 0.3) 61%, rgba(16, 185, 129, 0.3) 83%, transparent 90%)',
          left: '50%',
          transform: 'translateX(-50%)',
          filter: 'blur(1px)',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
        }}
      />

      {/* Timeline dots and connecting lines */}
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`absolute transition-all duration-700 ease-out pointer-events-auto ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
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
          {/* Enhanced connecting line to card - more prominent */}
          <div
            className={`absolute h-1 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-90' : 'opacity-0'
            }`}
            style={{
              width: '180px',
              background: `linear-gradient(to ${index % 2 === 0 ? 'left' : 'right'}, ${step.color} 0%, ${step.glowColor} 30%, transparent 100%)`,
              top: '50%',
              [index % 2 === 0 ? 'right' : 'left']: '12px',
              transform: 'translateY(-50%)',
              transitionDelay: `${index * 200 + 800}ms`,
              filter: hoveredStep === step.id ? 'brightness(1.5) blur(0px)' : 'brightness(1) blur(0.5px)',
              boxShadow: `0 0 15px ${step.glowColor}`
            }}
          />

          {/* Enhanced timeline dot - more prominent */}
          <div
            className={`relative w-6 h-6 rounded-full transition-all duration-300 ease-out cursor-pointer ${
              hoveredStep === step.id ? 'scale-140' : 'hover:scale-125'
            }`}
            style={{
              backgroundColor: step.color,
              boxShadow: [
                `0 0 30px ${step.glowColor}`,
                `0 0 60px ${step.glowColor}60`,
                `inset 0 0 15px rgba(255, 255, 255, 0.6)`,
                `0 4px 8px rgba(0, 0, 0, 0.5)`
              ].join(', ')
            }}
          >
            {/* Inner premium highlight */}
            <div
              className="absolute inset-1 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), transparent 70%)`
              }}
            />

            {/* Enhanced pulse animation */}
            <div
              className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                hoveredStep === step.id ? 'opacity-100' : 'opacity-40'
              }`}
              style={{
                background: step.color,
                filter: 'blur(3px)',
                animation: 'dotPulse 2s infinite'
              }}
            />
          </div>

          {/* Enhanced primary glow halo */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: '40px',
              height: '40px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${step.glowColor} 0%, ${step.glowColor}50 30%, transparent 70%)`,
              filter: hoveredStep === step.id ? 'blur(8px) brightness(1.8)' : 'blur(6px)',
              transitionDelay: `${index * 200 + 700}ms`
            }}
          />

          {/* Outer ambient glow */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-700 ease-out ${
              isVisible ? 'opacity-80' : 'opacity-0'
            }`}
            style={{
              width: '70px',
              height: '70px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${step.glowColor}30 0%, ${step.glowColor}15 25%, transparent 60%)`,
              filter: hoveredStep === step.id ? 'blur(15px) brightness(1.4)' : 'blur(12px)',
              mixBlendMode: 'soft-light',
              transitionDelay: `${index * 200 + 800}ms`
            }}
          />
        </div>
      ))}

      {/* Enhanced CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes dotPulse {
            0%, 100% { 
              opacity: 0.4;
              transform: scale(1);
            }
            50% { 
              opacity: 1;
              transform: scale(1.1);
            }
          }
        `
      }} />
    </div>
  );
};

export default ApproachVerticalTimeline;
