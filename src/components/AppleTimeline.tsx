
import { Clock, HandHeart, Layers, TrendingUp } from 'lucide-react';
import AppleTimelineCard from './AppleTimelineCard';

const AppleTimeline = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Snelheid zonder compromissen",
      subtitle: "Van idee naar werkende POC in dagen, niet maanden.",
      icon: Clock,
    },
    {
      id: 2,
      number: "02", 
      title: "Ownership mentaliteit",
      subtitle: "Uw succes is ons succes. Wij denken mee als strategische partner.",
      icon: HandHeart,
    },
    {
      id: 3,
      number: "03",
      title: "Design-first filosofie", 
      subtitle: "Technologie moet intuïtief aanvoelen. Altijd.",
      icon: Layers,
    },
    {
      id: 4,
      number: "04",
      title: "ROI-gedreven ontwikkeling",
      subtitle: "Elke feature, elke functie wordt gemeten aan zakelijke impact.",
      icon: TrendingUp,
    }
  ];

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Central animated line */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
        {/* Base line */}
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        
        {/* Animated glow pulse */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-8 bg-gradient-to-b from-cyan-400/40 via-white/60 to-transparent blur-sm"
            style={{
              animation: 'pulseDown 8s ease-in-out infinite',
              transformOrigin: 'top'
            }}
          />
        </div>
        
        {/* Central dots */}
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ 
              top: `${20 + (index * 25)}%`,
              animation: `dotPulse 4s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-white/80 to-white/40 shadow-lg shadow-white/20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/40 to-transparent animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Timeline cards */}
      <div className="relative z-10">
        {steps.map((step, index) => (
          <AppleTimelineCard
            key={step.id}
            step={step}
            isLeft={index % 2 === 0}
            delay={index * 200}
          />
        ))}
      </div>

      {/* Timeline animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulseDown {
            0% { 
              transform: translateY(-100%) scaleY(0);
              opacity: 0;
            }
            50% { 
              opacity: 1;
              transform: translateY(0%) scaleY(1);
            }
            100% { 
              transform: translateY(100vh) scaleY(0);
              opacity: 0;
            }
          }
          
          @keyframes dotPulse {
            0%, 100% { 
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.6;
            }
            50% { 
              transform: translate(-50%, -50%) scale(1.5);
              opacity: 1;
            }
          }
        `
      }} />
    </div>
  );
};

export default AppleTimeline;
