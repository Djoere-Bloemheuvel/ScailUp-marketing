
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
      glowColor: "from-blue-500/20 to-cyan-400/15", // AI Automations blue
      glowColorHover: "from-blue-500/35 to-cyan-400/25",
    },
    {
      id: 2,
      number: "02", 
      title: "Ownership mentaliteit",
      subtitle: "Uw succes is ons succes. Wij denken mee als strategische partner.",
      icon: HandHeart,
      glowColor: "from-purple-500/20 to-violet-400/15", // Custom SaaS purple
      glowColorHover: "from-purple-500/35 to-violet-400/25",
    },
    {
      id: 3,
      number: "03",
      title: "Design-first filosofie", 
      subtitle: "Technologie moet intuïtief aanvoelen. Altijd.",
      icon: Layers,
      glowColor: "from-purple-400/20 to-blue-500/15", // Consultancy purple-blue
      glowColorHover: "from-purple-400/35 to-blue-500/25",
    },
    {
      id: 4,
      number: "04",
      title: "ROI-gedreven ontwikkeling",
      subtitle: "Elke feature wordt gemeten aan zakelijke impact.",
      icon: TrendingUp,
      glowColor: "from-green-500/20 to-blue-600/15", // Autonomous Agents green-blue
      glowColorHover: "from-green-500/35 to-blue-600/25",
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Enhanced central animated timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
        {/* Base line with enhanced gradient */}
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        
        {/* Enhanced animated glow pulse */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-16 bg-gradient-to-b from-cyan-400/25 via-white/35 to-transparent blur-sm"
            style={{
              animation: 'timelinePulse 12s ease-in-out infinite',
              transformOrigin: 'top'
            }}
          />
          <div 
            className="w-full h-8 bg-gradient-to-b from-blue-400/20 via-white/25 to-transparent blur-md"
            style={{
              animation: 'timelinePulse 15s ease-in-out infinite',
              animationDelay: '3s',
              transformOrigin: 'top'
            }}
          />
        </div>
        
        {/* Enhanced timeline dots with better visibility */}
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
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-white/70 to-white/30 shadow-lg shadow-white/10 border border-white/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent animate-pulse" />
              </div>
              {/* Enhanced outer glow */}
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-white/15 blur-sm scale-150 animate-pulse opacity-70" />
            </div>
          </div>
        ))}
      </div>

      {/* Staggered timeline cards - reduced spacing */}
      <div className="relative z-10 space-y-8 lg:space-y-10">
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
              opacity: 0.4;
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
              opacity: 0.5;
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
