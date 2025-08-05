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
      {/* Enhanced ambient glow at top for seamless transition from Approach */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[600px] h-64 pointer-events-none z-30">
        {/* Primary enhanced glow layer with higher opacity and sharper blur */}
        <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent blur-[40px] opacity-90" />
        
        {/* Secondary glow layer for depth */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/15 to-transparent blur-[50px] opacity-80" />
        
        {/* Additional sharp accent layer for visibility */}
        <div className="absolute inset-0 w-3/4 h-3/4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-400/12 to-transparent blur-[30px] opacity-95" />
        
        {/* Soft outer glow for seamless blending */}
        <div className="absolute inset-0 w-[120%] h-[120%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/8 to-transparent blur-[70px] opacity-70" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header with full-width glow effect like reference image */}
        <div className="relative text-center mb-16 lg:mb-20">
          {/* Full-width horizontal glow lines background */}
          <div className="absolute inset-0 w-screen left-1/2 transform -translate-x-1/2 pointer-events-none z-0">
            {/* Top glow line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xs" />
            </div>
            
            {/* Middle glow line - brighter */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent transform -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent blur-md scale-y-[3]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-sm scale-y-[2]" />
            </div>
            
            {/* Bottom glow line */}
            <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent blur-sm" />
            </div>
            
            {/* Additional ambient glow layers */}
            <div className="absolute top-1/2 left-0 right-0 h-32 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent transform -translate-y-1/2 blur-3xl" />
            <div className="absolute top-1/2 left-0 right-0 h-16 bg-gradient-to-r from-transparent via-white/3 to-transparent transform -translate-y-1/2 blur-2xl" />
          </div>

          {/* Hero title - Apple style with refined fonts, positioned above glow */}
          <div className="relative z-10 mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
              Van visie naar uitvoering.
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}>
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Zo brengen we de principes tot leven.
              </span>
            </h2>
          </div>
          
          {/* Subtitle with Apple typography */}
          <p className="relative z-10 text-white/55 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}>
            Van eerste gesprek tot live deployment: dit is hoe we elke week meetbare vooruitgang boeken.
          </p>
        </div>

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
