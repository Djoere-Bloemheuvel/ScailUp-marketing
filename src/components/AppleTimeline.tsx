
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
        
        {/* Enhanced timeline dots with smoother pulsing - only for actual steps */}
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ 
              top: `${12 + (index * 18)}%`,
              animation: `dotPulse 6s ease-in-out infinite`, // Slower pulse
              animationDelay: `${index * 0.8}s` // More staggered
            }}
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full shadow-lg border bg-gradient-to-br from-white/70 to-white/30 shadow-white/10 border-white/30">
                <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-br from-cyan-400/30 to-transparent" />
              </div>
              {/* Enhanced outer glow with smoother animation */}
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full blur-sm scale-150 animate-pulse opacity-70 bg-white/15" />
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

      {/* Enhanced floating transition text element with refined spotlight glow */}
      <div className="relative z-20 mt-16 mb-12">
        <div className="flex justify-start">
          <div className="relative max-w-md mr-6 lg:mr-10">
            {/* Refined spotlight glow with blue-to-purple gradient */}
            <div className="absolute -inset-16 -z-10">
              {/* Main vertical spotlight glow */}
              <div 
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(ellipse 200px 300px at center, #4484FF 0%, #AA66FF 100%)',
                  filter: 'blur(100px)',
                  mixBlendMode: 'screen'
                }}
              />
              
              {/* Secondary softer glow layer for depth */}
              <div 
                className="absolute inset-0 rounded-full opacity-15"
                style={{
                  background: 'radial-gradient(ellipse 150px 250px at center, #4484FF 0%, #AA66FF 100%)',
                  filter: 'blur(80px)',
                  mixBlendMode: 'soft-light'
                }}
              />
              
              {/* Subtle ambient layer */}
              <div 
                className="absolute inset-0 rounded-full opacity-10"
                style={{
                  background: 'linear-gradient(180deg, #4484FF 0%, #AA66FF 100%)',
                  filter: 'blur(120px)',
                  mixBlendMode: 'screen'
                }}
              />
            </div>
            
            {/* Main transition text container */}
            <div className="relative z-10">
              {/* Main title with premium typography and enhanced text shadow */}
              <h3 
                className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight mb-3"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                  textShadow: '0 0 25px rgba(96, 165, 250, 0.4), 0 0 50px rgba(34, 211, 238, 0.25), 0 2px 15px rgba(0,0,0,0.5)'
                }}
              >
                Van visie naar uitvoering
              </h3>
              
              {/* Subtitle with lighter styling and enhanced glow */}
              <p 
                className="text-white/60 text-sm lg:text-base font-light leading-relaxed max-w-xs"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
                  color: '#888888',
                  textShadow: '0 0 15px rgba(96, 165, 250, 0.25), 0 1px 8px rgba(0,0,0,0.4)'
                }}
              >
                Zo brengen we de principes tot leven om van elk project een succes te maken.
              </p>
              
              {/* Subtle connecting element to indicate flow */}
              <div className="mt-6 flex items-center text-white/30">
                <div className="w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                <ArrowDown className="w-3 h-3 ml-2 transform rotate-45 opacity-40" />
              </div>
            </div>
          </div>
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
        `
      }} />
    </div>
  );
};

export default AppleTimeline;
