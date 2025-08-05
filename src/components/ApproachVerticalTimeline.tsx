
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

  const steps: TimelineStep[] = [
    { id: 1, color: '#4484FF', glowColor: 'rgba(68, 132, 255, 0.6)', position: 20 },
    { id: 2, color: '#AA66FF', glowColor: 'rgba(170, 102, 255, 0.6)', position: 40 },
    { id: 3, color: '#33FFAA', glowColor: 'rgba(51, 255, 170, 0.6)', position: 60 },
    { id: 4, color: '#FF9944', glowColor: 'rgba(255, 153, 68, 0.6)', position: 80 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 pointer-events-none z-20 hidden lg:block">
      {/* Enhanced central vertical line with premium glow */}
      <div 
        className={`absolute w-0.5 h-full transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, transparent 5%, rgba(255, 255, 255, 0.3) 15%, rgba(68, 132, 255, 0.2) 25%, rgba(170, 102, 255, 0.2) 45%, rgba(51, 255, 170, 0.2) 65%, rgba(255, 153, 68, 0.2) 85%, transparent 95%)',
          left: '50%',
          transform: 'translateX(-50%)',
          filter: 'blur(1px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Premium glow layer for the main line */}
      <div 
        className={`absolute w-1 h-full transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, transparent 10%, rgba(68, 132, 255, 0.15) 20%, rgba(170, 102, 255, 0.15) 40%, rgba(51, 255, 170, 0.15) 60%, rgba(255, 153, 68, 0.15) 80%, transparent 90%)',
          filter: 'blur(3px)',
          mixBlendMode: 'soft-light'
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
          {/* Enhanced connecting line to card */}
          <div
            className={`absolute w-40 h-0.5 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-70' : 'opacity-0'
            }`}
            style={{
              background: `linear-gradient(to ${index % 2 === 0 ? 'left' : 'right'}, ${step.color} 0%, ${step.glowColor} 40%, transparent 100%)`,
              top: '50%',
              [index % 2 === 0 ? 'right' : 'left']: '8px',
              transform: 'translateY(-50%)',
              mixBlendMode: 'screen',
              transitionDelay: `${index * 200 + 800}ms`,
              filter: hoveredStep === step.id ? 'brightness(1.3)' : 'brightness(1)'
            }}
          />

          {/* Premium curved connector enhancement */}
          <div
            className={`absolute transition-all duration-500 ease-out ${
              isVisible ? 'opacity-50' : 'opacity-0'
            }`}
            style={{
              width: '100px',
              height: '50px',
              top: '50%',
              [index % 2 === 0 ? 'right' : 'left']: '8px',
              transform: 'translateY(-50%)',
              background: `radial-gradient(ellipse 80% 100% at ${index % 2 === 0 ? '100%' : '0%'} 50%, ${step.glowColor} 0%, transparent 70%)`,
              mixBlendMode: 'soft-light',
              transitionDelay: `${index * 200 + 900}ms`,
              filter: hoveredStep === step.id ? 'brightness(1.5)' : 'brightness(1)'
            }}
          />

          {/* Premium timeline dot with pulse animation */}
          <div
            className={`relative w-4 h-4 rounded-full transition-all duration-300 ease-out ${
              hoveredStep === step.id ? 'scale-125' : 'hover:scale-110'
            }`}
            style={{
              backgroundColor: step.color,
              boxShadow: [
                `0 0 25px ${step.glowColor}`,
                `0 0 40px ${step.glowColor}40`,
                `inset 0 0 10px rgba(255, 255, 255, 0.4)`,
                `0 3px 6px rgba(0, 0, 0, 0.4)`
              ].join(', ')
            }}
          >
            {/* Inner premium highlight */}
            <div
              className="absolute inset-0.5 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), transparent 60%)`
              }}
            />

            {/* Pulse animation for active/hovered state */}
            <div
              className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                hoveredStep === step.id ? 'opacity-80 animate-pulse' : 'opacity-0'
              }`}
              style={{
                background: step.color,
                filter: 'blur(2px)',
                animation: hoveredStep === step.id ? 'pulse 1.5s infinite' : 'none'
              }}
            />
          </div>

          {/* Enhanced glow halo */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: '30px',
              height: '30px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${step.glowColor} 0%, ${step.glowColor}30 40%, transparent 80%)`,
              filter: hoveredStep === step.id ? 'blur(6px) brightness(1.5)' : 'blur(4px)',
              transitionDelay: `${index * 200 + 700}ms`
            }}
          />

          {/* Extra wide glow for premium effect */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-700 ease-out ${
              isVisible ? 'opacity-60' : 'opacity-0'
            }`}
            style={{
              width: '50px',
              height: '50px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${step.glowColor}20 0%, ${step.glowColor}10 30%, transparent 70%)`,
              filter: hoveredStep === step.id ? 'blur(10px) brightness(1.3)' : 'blur(8px)',
              mixBlendMode: 'soft-light',
              transitionDelay: `${index * 200 + 800}ms`
            }}
          />
        </div>
      ))}

      {/* Premium ambient background glow */}
      <div
        className={`absolute w-2 h-full transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-25' : 'opacity-0'
        }`}
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, transparent 5%, rgba(68, 132, 255, 0.08) 15%, rgba(170, 102, 255, 0.08) 35%, rgba(51, 255, 170, 0.08) 55%, rgba(255, 153, 68, 0.08) 75%, transparent 95%)',
          filter: 'blur(4px)',
          mixBlendMode: 'soft-light'
        }}
      />
    </div>
  );
};

export default ApproachVerticalTimeline;
