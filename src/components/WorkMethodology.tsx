
import { useState, useEffect, useRef, useMemo } from 'react';
import { Target, Zap, Users, ArrowRight, CheckCircle, Play } from 'lucide-react';
import WorkMethodologyProcess from './WorkMethodologyProcess';
import WorkMethodologyBackground from './WorkMethodologyBackground';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  glowColor: string;
  duration: string;
  deliverables: string[];
}

/**
 * Work Methodology Section - Horizontal Process Flow Design
 * - Completely different from Approach section with horizontal workflow
 * - Interactive process steps with hover animations
 * - Modern card-based design instead of timeline
 * - Focus on process flow rather than principles
 */
const WorkMethodology = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Methodology steps focused on practical workflow
  const methodologySteps: MethodologyStep[] = useMemo(() => [
    {
      id: 1,
      phase: "Week 1-2",
      title: "Discovery & Strategie",
      subtitle: "Van gesprek tot concreet plan",
      description: "We starten met een diepgaande analyse van jullie bedrijfsprocessen. Geen lange documenten, maar direct bruikbare inzichten en een helder implementatieplan.",
      icon: Target,
      color: "from-emerald-400 to-teal-500",
      glowColor: "emerald-400/25",
      duration: "1-2 weken",
      deliverables: ["Strategisch plan", "Technische architectuur", "ROI projectie"]
    },
    {
      id: 2,
      phase: "Dag 1-3", 
      title: "Rapid Prototype",
      subtitle: "Zichtbaar resultaat binnen 72 uur",
      description: "Binnen drie dagen hebben jullie een werkende proof-of-concept in handen. Zo kunnen jullie direct ervaren hoe de oplossing werkt en feedback geven.",
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
      glowColor: "yellow-400/25",
      duration: "3 dagen",
      deliverables: ["Werkende demo", "User interface", "Feedback sessie"]
    },
    {
      id: 3,
      phase: "Week 2-6",
      title: "Iteratieve Bouw", 
      subtitle: "Weekly demos, continue verbetering",
      description: "Elke week zien jullie nieuwe functionaliteiten. We bouwen stapsgewijs uit met jullie feedback, zodat het eindresultaat perfect aansluit bij jullie wensen.",
      icon: Users,
      color: "from-blue-400 to-indigo-500",
      glowColor: "blue-400/25",
      duration: "2-4 weken",
      deliverables: ["Weekly updates", "Live demonstraties", "Gebruikerstests"]
    },
    {
      id: 4,
      phase: "Week 6-8",
      title: "Live & Optimalisatie",
      subtitle: "Van test naar productie",
      description: "We gaan live en optimaliseren direct op basis van echte data. Jullie team krijgt volledige training en we blijven monitoren voor perfecte prestaties.",
      icon: CheckCircle,
      color: "from-purple-400 to-pink-500",
      glowColor: "purple-400/25",
      duration: "1-2 weken",
      deliverables: ["Live deployment", "Team training", "Performance monitoring"]
    }
  ], []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep(current => current >= methodologySteps.length ? 1 : current + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, methodologySteps.length]);

  const handleStepSelect = (stepId: number) => {
    setActiveStep(stepId);
    setIsPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-4 overflow-hidden bg-black"
      aria-label="Onze werk methodologie - stap voor stap proces"
    >
      {/* Use dedicated background component only */}
      <WorkMethodologyBackground />
      
      {/* Content container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header with different styling than Approach */}
        <header className="text-center mb-20 lg:mb-24">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="text-white/70 text-sm font-medium">Onze Methodologie</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter mb-6">
              <span className="block">Van idee</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                naar realiteit
              </span>
            </h2>
          </div>
          
          <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-8">
            4 stappen. 4-8 weken. Gegarandeerd resultaat.
          </p>

          {/* Play controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={toggleAutoPlay}
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all duration-300"
            >
              <Play className={`w-4 h-4 mr-2 ${isPlaying ? 'animate-pulse' : ''}`} />
              <span className="text-white text-sm font-medium">
                {isPlaying ? 'Auto-play actief' : 'Start demo'}
              </span>
            </button>
          </div>
        </header>

        {/* Horizontal process flow */}
        <WorkMethodologyProcess 
          steps={methodologySteps}
          activeStep={activeStep}
          onStepSelect={handleStepSelect}
        />

        {/* Bottom statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">72h</div>
            <div className="text-white/60">Eerste prototype</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-white/60">Tevredenheidsgarantie</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/60">Support na oplevering</div>
          </div>
        </div>

        {/* CTA different from Approach */}
        <div className="text-center mt-16">
          <button
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-black rounded-2xl transition-all duration-300 hover:scale-105 transform bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-emerald-300 hover:to-blue-400"
          >
            Start Jouw Project Nu
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkMethodology;
