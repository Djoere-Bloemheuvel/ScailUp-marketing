
import { Clock, HandHeart, Target, TrendingUp } from 'lucide-react';
import AppleTimelineCard from './AppleTimelineCard';

interface AppleTimelineProps {
  isVisible: boolean;
}

const AppleTimeline = ({ isVisible }: AppleTimelineProps) => {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Snelheid zonder concessies",
      subtitle: "We bouwen in dagen waar andere maanden over doen. Snelheid is niet optioneel.",
      icon: Clock,
      glowColor: "from-blue-500/20 to-cyan-400/15", // AI Automations blue
      glowColorHover: "from-blue-500/35 to-cyan-400/25",
    },
    {
      id: 2,
      number: "02",
      title: "Ownership mentaliteit",
      subtitle: "Jullie succes is ons succes. We bouwen voor jullie alsof het ons eigen bedrijf is.",
      icon: HandHeart,
      glowColor: "from-purple-500/20 to-violet-400/15", // Custom SaaS purple
      glowColorHover: "from-purple-500/35 to-violet-400/25",
    },
    {
      id: 3,
      number: "03",
      title: "High standards",
      subtitle: "Perfect is het vertrekpunt. We leveren niets wat we zelf niet zouden gebruiken.",
      icon: Target,
      glowColor: "from-purple-400/20 to-blue-500/15", // Consultancy purple-blue
      glowColorHover: "from-purple-400/35 to-blue-500/25",
    },
    {
      id: 4,
      number: "04",
      title: "Functionele creativiteit",
      subtitle: "AI zonder creativiteit is kracht zonder richting. Wij sturen die kracht met visie.",
      icon: TrendingUp,
      glowColor: "from-green-500/20 to-blue-600/15", // Autonomous Agents green-blue
      glowColorHover: "from-green-500/35 to-blue-600/25",
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Enhanced central animated timeline line with ultra-smooth animation */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
        {/* Base line with enhanced gradient */}
        <div className={`w-full h-full bg-gradient-to-b from-transparent via-white/12 to-transparent transition-all duration-1500 ease-out ${
          isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          transformOrigin: 'top',
          transitionDelay: '600ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }} />

        {/* Subtle animated glow pulse with Apple-style timing */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
        >
          <div
            className="w-full h-12 bg-gradient-to-b from-cyan-400/15 via-white/20 to-transparent blur-sm"
            style={{
              animation: isVisible ? 'subtleTimelinePulse 20s ease-in-out infinite' : 'none',
              transformOrigin: 'top'
            }}
          />
          <div
            className="w-full h-6 bg-gradient-to-b from-blue-400/10 via-white/15 to-transparent blur-md"
            style={{
              animation: isVisible ? 'subtleTimelinePulse 24s ease-in-out infinite' : 'none',
              animationDelay: '6s',
              transformOrigin: 'top'
            }}
          />
        </div>

        {/* Enhanced timeline dots with smoother pulsing - only for actual steps */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: `${12 + (index * 18)}%`,
            }}
          >
            <div className={`relative transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              transitionDelay: `${1000 + (index * 100)}ms`,
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            >
              <div className="w-2.5 h-2.5 rounded-full shadow-lg border bg-gradient-to-br from-white/60 to-white/25 shadow-white/8 border-white/25">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent transition-opacity duration-2000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ animation: isVisible ? 'subtleDotPulse 8s ease-in-out infinite' : 'none' }} />
              </div>
              {/* Subtle outer glow */}
              <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full blur-sm scale-125 opacity-40 bg-white/10 transition-opacity duration-2000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`} style={{ animation: isVisible ? 'subtleDotPulse 8s ease-in-out infinite' : 'none', animationDelay: '2s' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Staggered timeline cards with unified animation sequence */}
      <div className="relative z-10 space-y-8 lg:space-y-10">
        {steps.map((step, index) => (
                      <div
            key={step.id}
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: `${1200 + (index * 150)}ms`,
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <AppleTimelineCard
              step={step}
              isLeft={index % 2 === 0}
              delay={0}
              isVisible={isVisible}
            />
          </div>
        ))}
      </div>

      {/* Ultra-smooth timeline animations with Apple-style easing */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes subtleTimelinePulse {
            0% {
              transform: translateY(-100%) scaleY(0);
              opacity: 0;
            }
            8% {
              opacity: 0.15;
              transform: translateY(-80%) scaleY(0.2);
            }
            15% {
              opacity: 0.25;
              transform: translateY(-60%) scaleY(0.4);
            }
            30% {
              opacity: 0.4;
              transform: translateY(-20%) scaleY(0.8);
            }
            45% {
              opacity: 0.6;
              transform: translateY(0%) scaleY(1);
            }
            65% {
              opacity: 0.4;
              transform: translateY(20%) scaleY(0.9);
            }
            80% {
              opacity: 0.25;
              transform: translateY(40%) scaleY(0.6);
            }
            92% {
              opacity: 0.1;
              transform: translateY(70%) scaleY(0.3);
            }
            100% {
              transform: translateY(100vh) scaleY(0);
              opacity: 0;
            }
          }

          @keyframes subtleDotPulse {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.8;
            }
          }
        `
      }} />
    </div>
  );
};

export default AppleTimeline;
