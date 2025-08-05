import { useState, useEffect, useRef, useMemo } from 'react';
import { Target, Zap, Users, CheckCircle } from 'lucide-react';
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

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-4 overflow-hidden bg-black"
      aria-label="Onze werk methodologie - stap voor stap proces"
    >
      {/* Content container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Enhanced header with ambient backlight glow - now centered */}
        <header className="text-center mb-20 lg:mb-24">
          <div className="mb-8 relative">
            {/* Multiple layered ambient glow effects */}
            <div className="absolute -inset-8 blur-3xl opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/15 to-purple-500/20 rounded-full" />
            </div>
            <div className="absolute -inset-12 blur-2xl opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-cyan-300/10 to-blue-400/15 rounded-full" />
            </div>
            <div className="absolute -inset-6 blur-xl opacity-40">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 to-blue-500/10 rounded-lg" />
            </div>
            
            {/* Main content with enhanced glow */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 drop-shadow-2xl" 
                  style={{ 
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                    textShadow: '0 0 30px rgba(96, 165, 250, 0.3), 0 0 60px rgba(34, 211, 238, 0.2), 0 4px 20px rgba(0,0,0,0.4)'
                  }}>
                Van visie naar uitvoering
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed drop-shadow-lg" 
                 style={{ 
                   fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
                   textShadow: '0 0 20px rgba(96, 165, 250, 0.2), 0 2px 10px rgba(0,0,0,0.3)'
                 }}>
                Zo brengen we de principes tot leven
              </p>
            </div>
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
