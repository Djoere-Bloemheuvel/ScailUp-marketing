import { useState, useEffect, useRef, useMemo } from 'react';
import { Target, Zap, Users, CheckCircle, Play } from 'lucide-react';
import WorkMethodologyProcess from './WorkMethodologyProcess';

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
  accentColor: {
    primary: string;
    glow: string;
    border: string;
    subtle: string;
  };
}

/**
 * Work Methodology Section - Horizontal Process Flow Design
 * - Completely different from Approach section with horizontal workflow
 * - Interactive process steps with hover animations
 * - Modern card-based design instead of timeline
 * - Focus on process flow rather than principles
 * - Unique accent colors per step for enhanced visual branding
 */
const WorkMethodology = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Methodology steps focused on practical workflow with unique accent colors
  const methodologySteps: MethodologyStep[] = useMemo(() => [
    {
      id: 1,
      phase: "Week 1-2",
      title: "Discovery & Strategie",
      subtitle: "Van gesprek tot concreet plan",
      description: "We starten met een diepgaande analyse van jullie bedrijfsprocessen. Geen lange documenten, maar direct bruikbare inzichten en een helder implementatieplan.",
      icon: Target,
      color: "from-emerald-400 to-teal-500", // Keep original for fallback
      glowColor: "emerald-400/25", // Keep original for fallback
      duration: "1-2 weken",
      deliverables: ["Strategisch plan", "Technische architectuur", "ROI projectie"],
      accentColor: {
        primary: "from-blue-500 to-cyan-600", // Consultancy page hero color
        glow: "blue-500/20",
        border: "border-blue-500/30",
        subtle: "blue-500/5"
      }
    },
    {
      id: 2,
      phase: "Dag 1-3", 
      title: "Rapid Prototype",
      subtitle: "Zichtbaar resultaat binnen 72 uur",
      description: "Binnen drie dagen hebben jullie een werkende proof-of-concept in handen. Zo kunnen jullie direct ervaren hoe de oplossing werkt en feedback geven.",
      icon: Zap,
      color: "from-yellow-400 to-orange-500", // Keep original for fallback
      glowColor: "yellow-400/25", // Keep original for fallback
      duration: "3 dagen",
      deliverables: ["Werkende demo", "User interface", "Feedback sessie"],
      accentColor: {
        primary: "from-purple-500 to-violet-600", // Custom AI SaaS hero color
        glow: "purple-500/20",
        border: "border-purple-500/30",
        subtle: "purple-500/5"
      }
    },
    {
      id: 3,
      phase: "Week 2-6",
      title: "Iteratieve Bouw", 
      subtitle: "Weekly demos, continue verbetering",
      description: "Elke week zien jullie nieuwe functionaliteiten. We bouwen stapsgewijs uit met jullie feedback, zodat het eindresultaat perfect aansluit bij jullie wensen.",
      icon: Users,
      color: "from-blue-400 to-indigo-500", // Keep original for fallback
      glowColor: "blue-400/25", // Keep original for fallback
      duration: "2-4 weken",
      deliverables: ["Weekly updates", "Live demonstraties", "Gebruikerstests"],
      accentColor: {
        primary: "from-emerald-400 to-teal-500", // Autonomous AI Agents hero color (mint green)
        glow: "emerald-400/20",
        border: "border-emerald-400/30",
        subtle: "emerald-400/5"
      }
    },
    {
      id: 4,
      phase: "Week 6-8",
      title: "Live & Optimalisatie",
      subtitle: "Van test naar productie",
      description: "We gaan live en optimaliseren direct op basis van echte data. Jullie team krijgt volledige training en we blijven monitoren voor perfecte prestaties.",
      icon: CheckCircle,
      color: "from-purple-400 to-pink-500", // Keep original for fallback
      glowColor: "purple-400/25", // Keep original for fallback
      duration: "1-2 weken",
      deliverables: ["Live deployment", "Team training", "Performance monitoring"],
      accentColor: {
        primary: "from-orange-500 to-amber-600", // New orange variant
        glow: "orange-500/20",
        border: "border-orange-500/30",
        subtle: "orange-500/5"
      }
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

        {/* Horizontal process flow with enhanced accent colors */}
        <WorkMethodologyProcess 
          steps={methodologySteps}
          activeStep={activeStep}
          onStepSelect={handleStepSelect}
        />
      </div>

      {/* Gradient fade to black effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default WorkMethodology;
