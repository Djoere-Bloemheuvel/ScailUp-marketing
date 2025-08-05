
import { Clock, HandHeart, Target, TrendingUp, ArrowDown } from 'lucide-react';
import AppleTimelineCard from './AppleTimelineCard';

const AppleTimeline = () => {
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
    },
    {
      id: 5,
      number: "05",
      title: "Van principes naar praktijk",
      subtitle: "Onze waarden komen tot leven in elke stap van het proces.",
      icon: null, // No icon for transition step
      glowColor: "from-gray-400/15 to-white/10", // Subtle white/grey glow
      glowColorHover: "from-gray-400/20 to-white/15",
      isTransition: true, // Special flag for transition styling
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Enhanced central animated timeline line with smoother animation */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
        {/* Base line with enhanced gradient */}
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        
        {/* Enhanced animated glow pulse with better timing */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-16 bg-gradient-to-b from-cyan-400/25 via-white/35 to-transparent blur-sm"
            style={{
              animation: 'timelinePulse 15s ease-in-out infinite', // Slower, smoother
              transformOrigin: 'top'
            }}
          />
          <div 
            className="w-full h-8 bg-gradient-to-b from-blue-400/20 via-white/25 to-transparent blur-md"
            style={{
              animation: 'timelinePulse 18s ease-in-out infinite', // Even slower
              animationDelay: '4s',
              transformOrigin: 'top'
            }}
          />
        </div>
        
        {/* Enhanced timeline dots with smoother pulsing */}
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ 
              top: `${12 + (index * 20)}%`,
              animation: `dotPulse 6s ease-in-out infinite`, // Slower pulse
              animationDelay: `${index * 0.8}s` // More staggered
            }}
          >
            <div className="relative">
              <div className={`w-2.5 h-2.5 rounded-full shadow-lg border ${
                step.isTransition 
                  ? 'bg-gradient-to-br from-white/40 to-white/20 shadow-white/5 border-white/20'
                  : 'bg-gradient-to-br from-white/70 to-white/30 shadow-white/10 border-white/30'
              }`}>
                <div className={`absolute inset-0 rounded-full animate-pulse ${
                  step.isTransition 
                    ? 'bg-gradient-to-br from-gray-400/20 to-transparent'
                    : 'bg-gradient-to-br from-cyan-400/30 to-transparent'
                }`} />
              </div>
              {/* Enhanced outer glow with smoother animation */}
              <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full blur-sm scale-150 animate-pulse opacity-70 ${
                step.isTransition ? 'bg-white/10' : 'bg-white/15'
              }`} />
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

      {/* Transition flow indicator from step 05 */}
      <div className="relative z-20 mt-12 mb-8">
        <div className="flex justify-start ml-8">
          <div className="relative">
            {/* Floating transition line with glow */}
            <div className="w-32 h-px bg-gradient-to-r from-white/30 via-white/15 to-transparent relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent blur-sm" />
              
              {/* Animated flow particles */}
              <div 
                className="absolute top-1/2 left-0 w-1 h-1 bg-white/60 rounded-full blur-sm -translate-y-1/2"
                style={{
                  animation: 'flowParticle 3s ease-in-out infinite'
                }}
              />
              <div 
                className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-cyan-400/40 rounded-full blur-sm -translate-y-1/2"
                style={{
                  animation: 'flowParticle 3s ease-in-out infinite',
                  animationDelay: '1s'
                }}
              />
            </div>
            
            {/* Arrow indicator */}
            <div className="absolute -right-2 -top-1.5 text-white/40">
              <ArrowDown className="w-3 h-3 transform rotate-45" />
            </div>
            
            {/* Subtle glow around the flow indicator */}
            <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-50 animate-pulse" />
          </div>
        </div>
        
        {/* Transition text */}
        <div className="mt-6 ml-8 text-white/50 text-sm font-light">
          Nu gaan we aan de slag...
        </div>
      </div>

      {/* Enhanced timeline animations with smoother easing */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes timelinePulse {
            0% { 
              transform: translateY(-100%) scaleY(0);
              opacity: 0;
            }
            15% {
              opacity: 0.3;
              transform: translateY(-70%) scaleY(0.3);
            }
            25% {
              opacity: 0.5;
              transform: translateY(-50%) scaleY(0.6);
            }
            50% { 
              opacity: 1;
              transform: translateY(0%) scaleY(1);
            }
            75% {
              opacity: 0.8;
              transform: translateY(30%) scaleY(0.9);
            }
            85% {
              opacity: 0.6;
              transform: translateY(50%) scaleY(0.7);
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
            25% { 
              transform: translate(-50%, -50%) scale(1.1);
              opacity: 0.6;
            }
            50% { 
              transform: translate(-50%, -50%) scale(1.3);
              opacity: 1;
            }
            75% { 
              transform: translate(-50%, -50%) scale(1.1);
              opacity: 0.6;
            }
          }

          @keyframes flowParticle {
            0% { 
              transform: translateX(0) translateY(-50%);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% { 
              transform: translateX(128px) translateY(-50%);
              opacity: 0;
            }
          }
        `
      }} />
    </div>
  );
};

export default AppleTimeline;
