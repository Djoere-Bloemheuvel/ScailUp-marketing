
import { Clock, HandHeart, Target, TrendingUp } from 'lucide-react';
import { useMemo } from 'react';
import AppleTimelineCard from './AppleTimelineCard';

const AppleTimeline = () => {
  // Memoized steps array to prevent unnecessary re-renders
  const steps = useMemo(() => [
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
  ], []);

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Enhanced central animated timeline line with smoother animation */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
        {/* Base line with enhanced gradient */}
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />

        {/* Enhanced animated glow pulse with better timing and hardware acceleration */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-16 bg-gradient-to-b from-cyan-400/25 via-white/35 to-transparent blur-sm will-change-transform"
            style={{
              animation: 'timelinePulse 16s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              transformOrigin: 'top'
            }}
          />
          <div
            className="w-full h-8 bg-gradient-to-b from-blue-400/20 via-white/25 to-transparent blur-md will-change-transform"
            style={{
              animation: 'timelinePulse 20s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              animationDelay: '5s',
              transformOrigin: 'top'
            }}
          />
        </div>

        {/* Enhanced timeline dots with smoother pulsing and hardware acceleration */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="absolute left-1/2 transform -translate-x-1/2 will-change-transform"
            style={{
              top: `${12 + (index * 18)}%`,
              animation: `dotPulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              animationDelay: `${index * 1}s`
            }}
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full shadow-lg border bg-gradient-to-br from-white/70 to-white/30 shadow-white/10 border-white/30 will-change-transform">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent will-change-opacity"
                     style={{
                       animation: `dotInnerPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                       animationDelay: `${index * 0.5}s`
                     }} />
              </div>
              {/* Enhanced outer glow with smoother animation */}
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full blur-sm scale-150 opacity-70 bg-white/15 will-change-transform will-change-opacity"
                   style={{
                     animation: `dotGlow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                     animationDelay: `${index * 0.7}s`
                   }} />
            </div>
          </div>
        ))}
      </div>

      {/* Staggered timeline cards with improved timing */}
      <div className="relative z-10 space-y-8 lg:space-y-10">
        {steps.map((step, index) => (
          <AppleTimelineCard
            key={step.id}
            step={step}
            isLeft={index % 2 === 0}
            delay={index * 200} // Slightly more spaced out timing
          />
        ))}
      </div>

      {/* Enhanced timeline animations with hardware acceleration and smoother easing */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes timelinePulse {
            0% {
              transform: translate3d(0, -100%, 0) scaleY(0);
              opacity: 0;
            }
            15% {
              opacity: 0.3;
              transform: translate3d(0, -70%, 0) scaleY(0.3);
            }
            25% {
              opacity: 0.5;
              transform: translate3d(0, -50%, 0) scaleY(0.6);
            }
            50% {
              opacity: 1;
              transform: translate3d(0, 0%, 0) scaleY(1);
            }
            75% {
              opacity: 0.8;
              transform: translate3d(0, 30%, 0) scaleY(0.9);
            }
            85% {
              opacity: 0.6;
              transform: translate3d(0, 50%, 0) scaleY(0.7);
            }
            100% {
              transform: translate3d(0, 100vh, 0) scaleY(0);
              opacity: 0;
            }
          }

          @keyframes dotPulse {
            0%, 100% {
              transform: translate3d(-50%, -50%, 0) scale(1);
              opacity: 0.5;
            }
            50% {
              transform: translate3d(-50%, -50%, 0) scale(1.2);
              opacity: 1;
            }
          }

          @keyframes dotInnerPulse {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.8;
            }
          }

          @keyframes dotGlow {
            0%, 100% {
              opacity: 0.4;
              transform: scale(1.5);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.8);
            }
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `
      }} />
    </div>
  );
};

export default AppleTimeline;
