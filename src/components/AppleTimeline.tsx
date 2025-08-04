
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
      glowColor: "from-blue-500/20 to-cyan-400/10",
      glowColorHover: "from-blue-500/30 to-cyan-400/15",
    },
    {
      id: 2,
      number: "02", 
      title: "Ownership mentaliteit",
      subtitle: "Uw succes is ons succes. Wij denken mee als strategische partner.",
      icon: HandHeart,
      glowColor: "from-purple-500/20 to-violet-400/10",
      glowColorHover: "from-purple-500/30 to-violet-400/15",
    },
    {
      id: 3,
      number: "03",
      title: "Design-first filosofie", 
      subtitle: "Technologie moet intuïtief aanvoelen. Altijd.",
      icon: Layers,
      glowColor: "from-pink-500/20 to-rose-400/10",
      glowColorHover: "from-pink-500/30 to-rose-400/15",
    },
    {
      id: 4,
      number: "04",
      title: "ROI-gedreven ontwikkeling",
      subtitle: "Elke feature wordt gemeten aan zakelijke impact.",
      icon: TrendingUp,
      glowColor: "from-emerald-500/20 to-teal-400/10",
      glowColorHover: "from-emerald-500/30 to-teal-400/15",
    }
  ];

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Central animated timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
        {/* Base line */}
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        
        {/* Animated glow pulse moving down */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-12 bg-gradient-to-b from-cyan-400/30 via-white/40 to-transparent blur-sm"
            style={{
              animation: 'timelinePulse 8s ease-in-out infinite',
              transformOrigin: 'top'
            }}
          />
        </div>
        
        {/* Timeline dots for each step */}
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ 
              top: `${15 + (index * 22)}%`,
              animation: `dotPulse 3s ease-in-out infinite`,
              animationDelay: `${index * 0.4}s`
            }}
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-white/70 to-white/30 shadow-lg shadow-white/10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Staggered timeline cards */}
      <div className="relative z-10 space-y-24">
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
          @keyframes timelinePulse {
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
              opacity: 0.5;
            }
            50% { 
              transform: translate(-50%, -50%) scale(1.3);
              opacity: 1;
            }
          }
        `
      }} />
    </div>
  );
};

export default AppleTimeline;
