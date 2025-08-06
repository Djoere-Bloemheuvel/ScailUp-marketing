
import { Clock, HandHeart, Target, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import AppleTimelineCard from './AppleTimelineCard';

const AppleTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px -20px 0px'
      }
    );

    const timelineContainer = document.querySelector('[data-timeline-container]');
    if (timelineContainer) observer.observe(timelineContainer);

    return () => observer.disconnect();
  }, [isVisible]);

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

  return (
    <div className="relative max-w-5xl mx-auto" data-timeline-container>
      {/* Simplified static timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px">
        {/* Static base line with smooth fade-in */}
        <div className={`w-full h-full bg-gradient-to-b from-transparent via-white/12 to-transparent transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
        style={{ transitionDelay: '400ms' }} />
        
        {/* Subtle ambient glow */}
        <div className={`absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent blur-sm transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '500ms' }} />
        
        {/* Timeline dots - simple fade-in */}
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ top: `${12 + (index * 18)}%` }}
          >
            <div className={`relative transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: `${700 + (index * 100)}ms` }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-white/70 to-white/40 shadow-lg">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent" />
              </div>
              {/* Subtle outer glow */}
              <div className="absolute inset-0 w-2 h-2 rounded-full blur-sm bg-white/10 scale-150" />
            </div>
          </div>
        ))}
      </div>

      {/* Timeline cards with clean staggered animation */}
      <div className="relative z-10 space-y-8 lg:space-y-10">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${800 + (index * 150)}ms` }}
          >
            <AppleTimelineCard
              step={step}
              isLeft={index % 2 === 0}
              isVisible={isVisible}
              delay={800 + (index * 150)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppleTimeline;
