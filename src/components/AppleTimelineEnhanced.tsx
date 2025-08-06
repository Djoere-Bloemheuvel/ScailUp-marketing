
import { Clock, HandHeart, Target, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import AppleTimelineCard from './AppleTimelineCard';

const AppleTimelineEnhanced = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-timeline-element');
            if (elementId) {
              setVisibleElements(prev => new Set([...prev, elementId]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px -20px 0px'
      }
    );

    // Observe title and timeline container
    const titleElement = document.querySelector('[data-timeline-element="title"]');
    const timelineElement = document.querySelector('[data-timeline-element="timeline"]');
    
    if (titleElement) observer.observe(titleElement);
    if (timelineElement) observer.observe(timelineElement);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Snelheid zonder concessies",
      subtitle: "We bouwen in dagen waar andere maanden over doen. Snelheid is niet optioneel.",
      icon: Clock,
      glowColor: "from-blue-500/20 to-cyan-400/15",
      glowColorHover: "from-blue-500/35 to-cyan-400/25",
    },
    {
      id: 2,
      number: "02", 
      title: "Ownership mentaliteit",
      subtitle: "Jullie succes is ons succes. We bouwen voor jullie alsof het ons eigen bedrijf is.",
      icon: HandHeart,
      glowColor: "from-purple-500/20 to-violet-400/15",
      glowColorHover: "from-purple-500/35 to-violet-400/25",
    },
    {
      id: 3,
      number: "03",
      title: "High standards",
      subtitle: "Perfect is het vertrekpunt. We leveren niets wat we zelf niet zouden gebruiken.",
      icon: Target,
      glowColor: "from-purple-400/20 to-blue-500/15",
      glowColorHover: "from-purple-400/35 to-blue-500/25",
    },
    {
      id: 4,
      number: "04",
      title: "Functionele creativiteit",
      subtitle: "AI zonder creativiteit is kracht zonder richting. Wij sturen die kracht met visie.",
      icon: TrendingUp,
      glowColor: "from-green-500/20 to-blue-600/15",
      glowColorHover: "from-green-500/35 to-blue-600/25",
    }
  ];

  const isTimelineVisible = visibleElements.has('timeline');
  const isTitleVisible = visibleElements.has('title');

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Enhanced Title with loading animation */}
      <div 
        data-timeline-element="title"
        className="mb-16 text-center"
      >
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-1000 ease-out ${
          isTitleVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <span 
            className={`inline-block transition-all duration-700 ease-out ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Onze
          </span>{' '}
          <span 
            className={`inline-block transition-all duration-700 ease-out ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            aanpak
          </span>
        </h2>
      </div>

      {/* Container for timeline observation */}
      <div data-timeline-element="timeline">
        {/* Enhanced central animated timeline line with smoother animation */}
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
          {/* Base line with enhanced gradient */}
          <div className={`w-full h-full bg-gradient-to-b from-transparent via-white/15 to-transparent transition-all duration-1000 ease-out ${
            isTimelineVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`} 
          style={{ 
            transformOrigin: 'top',
            transitionDelay: '600ms'
          }} />
          
          {/* Enhanced animated glow pulse with better timing */}
          <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out ${
            isTimelineVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
          >
            <div 
              className="w-full h-16 bg-gradient-to-b from-cyan-400/25 via-white/35 to-transparent blur-sm"
              style={{
                animation: isTimelineVisible ? 'timelinePulse 15s ease-in-out infinite' : 'none',
                transformOrigin: 'top'
              }}
            />
            <div 
              className="w-full h-8 bg-gradient-to-b from-blue-400/20 via-white/25 to-transparent blur-md"
              style={{
                animation: isTimelineVisible ? 'timelinePulse 18s ease-in-out infinite' : 'none',
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
                top: `${12 + (index * 18)}%`,
              }}
            >
              <div className={`relative transition-all duration-500 ease-out ${
                isTimelineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{ 
                transitionDelay: `${1000 + (index * 200)}ms`
              }}
              >
                <div className="w-2.5 h-2.5 rounded-full shadow-lg border bg-gradient-to-br from-white/70 to-white/30 shadow-white/10 border-white/30">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent ${
                    isTimelineVisible ? 'animate-pulse' : ''
                  }`} />
                </div>
                {/* Enhanced outer glow with smoother animation */}
                <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full blur-sm scale-150 opacity-70 bg-white/15 ${
                  isTimelineVisible ? 'animate-pulse' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Staggered timeline cards with improved timing */}
        <div className="relative z-10 space-y-8 lg:space-y-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`transition-all duration-800 ease-out ${
                isTimelineVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${1200 + (index * 300)}ms` // Staggered delay: 1.2s, 1.5s, 1.8s, 2.1s
              }}
            >
              <AppleTimelineCard
                step={step}
                isLeft={index % 2 === 0}
                delay={0} // Remove internal delay since we're controlling it here
              />
            </div>
          ))}
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
        `
      }} />
    </div>
  );
};

export default AppleTimelineEnhanced;
