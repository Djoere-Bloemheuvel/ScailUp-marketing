
import { useState, useEffect, useRef } from 'react';
import { Target, Zap, Users, CheckCircle, Play, Pause } from 'lucide-react';
import WorkMethodologyBackground from './WorkMethodologyBackground';
import AppleMethodologyStep from './AppleMethodologyStep';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
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
 * Apple.com-Inspired Work Methodology Section
 * - Ultra-premium minimalist design
 * - Subtle animations and interactions
 * - Elegant typography and spacing
 * - Refined glassmorphism effects
 */
const WorkMethodology = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Premium methodology steps with refined Apple-style approach
  const methodologySteps: MethodologyStep[] = [
    {
      id: 1,
      phase: "Week 1-2",
      title: "Discovery & Strategie",
      subtitle: "Van gesprek tot concreet plan",
      description: "We beginnen met een diepgaande analyse van jullie bedrijfsprocessen. Geen lange documenten, maar direct bruikbare inzichten en een helder implementatieplan die jullie team begrijpt.",
      icon: Target,
      duration: "1-2 weken",
      deliverables: [
        "Strategisch implementatieplan", 
        "Technische architectuur roadmap", 
        "ROI projectie en KPI framework",
        "Stakeholder alignment sessies"
      ],
      accentColor: {
        primary: "from-blue-500 to-cyan-600",
        glow: "blue-500/15",
        border: "border-blue-500/20",
        subtle: "blue-500/3"
      }
    },
    {
      id: 2,
      phase: "Dag 1-3", 
      title: "Rapid Prototype",
      subtitle: "Zichtbaar resultaat binnen 72 uur",
      description: "Binnen drie dagen hebben jullie een werkende proof-of-concept in handen. Zo kunnen jullie direct ervaren hoe de oplossing werkt, feedback geven en vertrouwen opbouwen in de aanpak.",
      icon: Zap,
      duration: "3 dagen",
      deliverables: [
        "Werkende interactive demo", 
        "User interface prototype", 
        "Stakeholder feedback sessie",
        "Iteratie planning"
      ],
      accentColor: {
        primary: "from-purple-500 to-violet-600",
        glow: "purple-500/15",
        border: "border-purple-500/20",
        subtle: "purple-500/3"
      }
    },
    {
      id: 3,
      phase: "Week 2-6",
      title: "Iteratieve Ontwikkeling", 
      subtitle: "Weekly demos, continue verbetering",
      description: "Elke week zien jullie nieuwe functionaliteiten groeien. We bouwen stapsgewijs uit met jullie directe feedback, zodat het eindresultaat perfect aansluit bij jullie dagelijkse werkwijze.",
      icon: Users,
      duration: "2-4 weken",
      deliverables: [
        "Weekly sprint demonstraties", 
        "Live functionaliteit updates", 
        "Gebruikerstests en feedback loops",
        "Performance monitoring"
      ],
      accentColor: {
        primary: "from-emerald-400 to-teal-500",
        glow: "emerald-400/15",
        border: "border-emerald-400/20",
        subtle: "emerald-400/3"
      }
    },
    {
      id: 4,
      phase: "Week 6-8",
      title: "Deployment & Optimalisatie",
      subtitle: "Van test naar productie",
      description: "We gaan live met een naadloze overgang naar productie. Jullie team krijgt uitgebreide training en we monitoren actief om perfecte prestaties te garanderen vanaf dag één.",
      icon: CheckCircle,
      duration: "1-2 weken",
      deliverables: [
        "Production deployment", 
        "Comprehensive team training", 
        "24/7 performance monitoring",
        "Success metrics tracking"
      ],
      accentColor: {
        primary: "from-orange-500 to-amber-600",
        glow: "orange-500/15",
        border: "border-orange-500/20",
        subtle: "orange-500/3"
      }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep(current => current >= methodologySteps.length ? 1 : current + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, methodologySteps.length]);

  // Intersection observer for step visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(entry.target.getAttribute('data-step-id') || '0');
            setVisibleSteps(prev => [...new Set([...prev, stepId])]);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const stepElements = document.querySelectorAll('[data-step-id]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      className="relative py-32 lg:py-40 px-4 overflow-hidden bg-black"
      aria-label="Onze werk methodologie - Apple-geïnspireerde aanpak"
    >
      <WorkMethodologyBackground />
      
      {/* Content container with Apple-style spacing */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Apple-inspired header with refined typography */}
        <header className="text-center mb-24 lg:mb-32">
          <div className="mb-12">
            {/* Subtle phase indicator */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-3 animate-pulse" />
              <span className="text-white/60 text-sm font-medium tracking-wide">Onze Werkwijze</span>
            </div>
            
            {/* Main headline with Apple-style typography */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              <span className="block mb-2">In drie heldere</span>
              <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-2">
                stappen van idee
              </span>
              <span className="block text-white/90">naar impact.</span>
            </h2>
          </div>
          
          {/* Refined subtitle */}
          <p className="text-white/50 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto font-light leading-relaxed mb-12 tracking-wide">
            Onze bewezen aanpak voor succesvolle AI-implementatie.
          </p>

          {/* Premium play controls */}
          <div className="flex items-center justify-center">
            <button
              onClick={toggleAutoPlay}
              className="group inline-flex items-center px-8 py-4 bg-white/[0.03] hover:bg-white/[0.06] rounded-full border border-white/[0.08] hover:border-white/[0.12] transition-all duration-500 backdrop-blur-sm"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 mr-3 text-white/80 group-hover:text-white transition-colors duration-300" />
              ) : (
                <Play className="w-4 h-4 mr-3 text-white/80 group-hover:text-white transition-colors duration-300" />
              )}
              <span className="text-white/80 group-hover:text-white text-sm font-medium transition-colors duration-300">
                {isPlaying ? 'Pauzeer demo' : 'Start interactive demo'}
              </span>
            </button>
          </div>
        </header>

        {/* Apple-style methodology steps */}
        <div className="space-y-20 lg:space-y-24 mb-24">
          {methodologySteps.map((step, index) => (
            <AppleMethodologyStep
              key={step.id}
              step={step}
              index={index}
              isActive={activeStep === step.id}
              isVisible={visibleSteps.includes(step.id)}
              onSelect={handleStepSelect}
              totalSteps={methodologySteps.length}
            />
          ))}
        </div>

        {/* Apple-style statistics with refined design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-5xl mx-auto mb-20">
          {[
            { value: "72h", label: "Eerste prototype klaar" },
            { value: "100%", label: "Tevredenheidsgarantie" },
            { value: "24/7", label: "Support na oplevering" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl lg:text-6xl font-black text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">
                {stat.value}
              </div>
              <div className="text-white/40 text-lg font-light tracking-wide group-hover:text-white/70 transition-colors duration-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Refined CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center px-12 py-5 text-lg font-semibold text-black rounded-2xl transition-all duration-500 hover:scale-[1.02] transform bg-gradient-to-r from-white via-blue-50 to-purple-50 hover:from-blue-50 hover:via-white hover:to-blue-50 shadow-xl hover:shadow-2xl">
            <span>Start Jouw Project</span>
            <div className="ml-4 w-6 h-6 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              <div className="w-2 h-2 border-r-2 border-b-2 border-black/60 transform rotate-[-45deg] translate-x-[-1px]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkMethodology;
