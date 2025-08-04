
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
      glowColor: "from-blue-500/25 to-cyan-400/15",
      glowColorHover: "from-blue-500/40 to-cyan-400/25",
    },
    {
      id: 2,
      number: "02", 
      title: "Ownership mentaliteit",
      subtitle: "Uw succes is ons succes. Wij denken mee als strategische partner.",
      icon: HandHeart,
      glowColor: "from-purple-500/25 to-violet-400/15",
      glowColorHover: "from-purple-500/40 to-violet-400/25",
    },
    {
      id: 3,
      number: "03",
      title: "Design-first filosofie", 
      subtitle: "Technologie moet intuïtief aanvoelen. Altijd.",
      icon: Layers,
      glowColor: "from-pink-500/25 to-rose-400/15",
      glowColorHover: "from-pink-500/40 to-rose-400/25",
    },
    {
      id: 4,
      number: "04",
      title: "ROI-gedreven ontwikkeling",
      subtitle: "Elke feature wordt gemeten aan zakelijke impact.",
      icon: TrendingUp,
      glowColor: "from-emerald-500/25 to-teal-400/15",
      glowColorHover: "from-emerald-500/40 to-teal-400/25",
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Central animated timeline line - Enhanced */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
        {/* Base line with subtle gradient */}
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white/12 to-transparent" />
        
        {/* Animated glow pulse - More subtle and refined */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-16 bg-gradient-to-b from-cyan-400/20 via-white/30 to-transparent blur-sm"
            style={{
              animation: 'timelinePulse 12s ease-in-out infinite',
              transformOrigin: 'top'
            }}
          />
          {/* Secondary pulse for depth */}
          <div 
            className="w-full h-8 bg-gradient-to-b from-blue-400/15 via-white/20 to-transparent blur-md"
            style={{
              animation: 'timelinePulse 15s ease-in-out infinite',
              animationDelay: '3s',
              transformOrigin: 'top'
            }}
          />
        </div>
        
        {/* Timeline dots - More refined */}
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ 
              top: `${12 + (index * 20)}%`,
              animation: `dotPulse 4s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-white/60 to-white/20 shadow-lg shadow-white/5 border border-white/20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent animate-pulse" />
              </div>
              {/* Subtle outer glow */}
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-white/10 blur-sm scale-150 animate-pulse opacity-60" />
            </div>
          </div>
        ))}
      </div>

      {/* Compact staggered timeline cards */}
      <div className="relative z-10 space-y-16 lg:space-y-14">
        {steps.map((step, index) => (
          <AppleTimelineCard
            key={step.id}
            step={step}
            isLeft={index % 2 === 0}
            delay={index * 150}
          />
        ))}
      </div>

      {/* Enhanced timeline animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes timelinePulse {
            0% { 
              transform: translateY(-100%) scaleY(0);
              opacity: 0;
            }
            20% {
              opacity: 0.3;
              transform: translateY(-50%) scaleY(0.5);
            }
            50% { 
              opacity: 1;
              transform: translateY(0%) scaleY(1);
            }
            80% {
              opacity: 0.7;
              transform: translateY(50%) scaleY(0.8);
            }
            100% { 
              transform: translateY(100vh) scaleY(0);
              opacity: 0;
            }
          }
          
          @keyframes dotPulse {
            0%, 100% { 
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.4;
            }
            50% { 
              transform: translate(-50%, -50%) scale(1.4);
              opacity: 1;
            }
          }
        `
      }} />
    </div>
  );
};

export default AppleTimeline;
