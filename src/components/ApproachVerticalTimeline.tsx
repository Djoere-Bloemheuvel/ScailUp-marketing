
import { useEffect, useState } from 'react';

interface TimelineStep {
  id: number;
  color: string;
  glowColor: string;
  position: number; // percentage from top
}

const ApproachVerticalTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      {/* Central vertical line */}
      <div 
        className={`absolute w-0.5 h-full transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, transparent 5%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.2) 80%, transparent 95%)',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />

      {/* Timeline dots and connecting lines */}
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`absolute transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            top: `${step.position}%`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            transitionDelay: `${index * 200 + 500}ms`
          }}
        >
          {/* Connecting line to card */}
          <div
            className={`absolute w-32 h-0.5 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-60' : 'opacity-0'
            }`}
            style={{
              background: `linear-gradient(to ${index % 2 === 0 ? 'left' : 'right'}, ${step.color} 0%, ${step.glowColor} 30%, transparent 100%)`,
              top: '50%',
              [index % 2 === 0 ? 'right' : 'left']: '6px',
              transform: 'translateY(-50%)',
              mixBlendMode: 'screen',
              transitionDelay: `${index * 200 + 800}ms`
            }}
          />

          {/* Curved connector enhancement */}
          <div
            className={`absolute transition-all duration-500 ease-out ${
              isVisible ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              width: '80px',
              height: '40px',
              top: '50%',
              [index % 2 === 0 ? 'right' : 'left']: '6px',
              transform: 'translateY(-50%)',
              background: `radial-gradient(ellipse 80% 100% at ${index % 2 === 0 ? '100%' : '0%'} 50%, ${step.glowColor} 0%, transparent 70%)`,
              mixBlendMode: 'soft-light',
              transitionDelay: `${index * 200 + 900}ms`
            }}
          />

          {/* Central timeline dot */}
          <div
            className="relative w-3 h-3 rounded-full transition-all duration-300 ease-out hover:scale-125"
            style={{
              backgroundColor: step.color,
              boxShadow: [
                `0 0 20px ${step.glowColor}`,
                `0 0 30px ${step.glowColor}30`,
                `inset 0 0 8px rgba(255, 255, 255, 0.3)`,
                `0 2px 4px rgba(0, 0, 0, 0.3)`
              ].join(', ')
            }}
          >
            {/* Inner highlight */}
            <div
              className="absolute inset-0.5 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), transparent 60%)`
              }}
            />

            {/* Pulse animation on hover */}
            <div
              className="absolute inset-0 rounded-full animate-pulse opacity-0 hover:opacity-60 transition-opacity duration-300"
              style={{
                background: step.color,
                animation: 'pulse 2s infinite'
              }}
            />
          </div>

          {/* Extended glow for better visibility */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: '24px',
              height: '24px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${step.glowColor} 0%, ${step.glowColor}20 50%, transparent 80%)`,
              filter: 'blur(4px)',
              transitionDelay: `${index * 200 + 700}ms`
            }}
          />
        </div>
      ))}

      {/* Subtle background glow along the timeline */}
      <div
        className={`absolute w-1 h-full transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, transparent 10%, rgba(255, 255, 255, 0.1) 25%, rgba(51, 255, 170, 0.1) 50%, rgba(255, 153, 68, 0.1) 75%, transparent 90%)',
          filter: 'blur(2px)',
          mixBlendMode: 'soft-light'
        }}
      />

      {/* Mobile breakpoint fade out */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .timeline-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ApproachVerticalTimeline;
