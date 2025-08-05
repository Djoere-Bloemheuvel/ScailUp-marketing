
import { useState, useEffect, useRef } from 'react';
import { Target, Zap, Users, CheckCircle } from 'lucide-react';
import CinematicGlassmorphicBackground from './cinematic/CinematicGlassmorphicBackground';
import CinematicMethodologyStep from './cinematic/CinematicMethodologyStep';
import CinematicHeader from './cinematic/CinematicHeader';

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
 * CINEMATIC MASTERPIECE - Work Methodology Section
 * Apple-surpassing premium design with revolutionary interactions
 * - Ultra-premium glassmorphic background system
 * - 3D holographic step components
 * - Neural network visualization
 * - Volumetric lighting effects
 * - Magnetic interactions with depth
 * - Color-breathing orchestration
 * - Performance-optimized animations
 */
const WorkMethodology = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLElement>(null);

  // Enhanced methodology steps with cinematic accent colors
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
        "Strategisch implementatieplan met concrete stappen", 
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
        "Werkende interactive demo applicatie", 
        "User interface prototype", 
        "Stakeholder feedback sessie met live demonstratie",
        "Iteratie planning voor volgende fase"
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
        "Weekly sprint demonstraties met nieuwe features", 
        "Live functionaliteit updates", 
        "Gebruikerstests en feedback loops",
        "Performance monitoring en optimalisatie"
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
        "Production deployment met monitoring", 
        "Comprehensive team training sessies", 
        "24/7 performance monitoring dashboard",
        "Success metrics tracking en rapportage"
      ],
      accentColor: {
        primary: "from-orange-500 to-amber-600",
        glow: "orange-500/15",
        border: "border-orange-500/20",
        subtle: "orange-500/3"
      }
    }
  ];

  // Advanced auto-play with cinematic transitions
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep(current => {
        const nextStep = current >= methodologySteps.length ? 1 : current + 1;
        return nextStep;
      });
    }, 5500); // Slightly longer for better experience

    return () => clearInterval(interval);
  }, [isPlaying, methodologySteps.length]);

  // Enhanced intersection observer for visibility
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
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const stepElements = document.querySelectorAll('[data-step-id]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Global mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      className="relative py-40 lg:py-48 px-4 overflow-hidden min-h-screen"
      aria-label="Onze werk methodologie - Cinematic Apple-geïnspireerde aanpak"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,1) 100%)'
      }}
    >
      {/* Revolutionary Glassmorphic Background System */}
      <CinematicGlassmorphicBackground 
        activeStep={activeStep} 
        totalSteps={methodologySteps.length}
      />
      
      {/* Content container with premium spacing */}
      <div className="relative max-w-7xl mx-auto z-20">
        
        {/* Cinematic Header Component */}
        <CinematicHeader
          isPlaying={isPlaying}
          onTogglePlay={toggleAutoPlay}
          activeStep={activeStep}
          totalSteps={methodologySteps.length}
        />

        {/* Revolutionary 3D Methodology Steps */}
        <div className="space-y-32 lg:space-y-40 mb-32">
          {methodologySteps.map((step, index) => (
            <div key={step.id} data-step-id={step.id}>
              <CinematicMethodologyStep
                step={step}
                index={index}
                isActive={activeStep === step.id}
                isVisible={visibleSteps.includes(step.id)}
                onSelect={handleStepSelect}
                totalSteps={methodologySteps.length}
                mousePosition={mousePosition}
              />
            </div>
          ))}
        </div>

        {/* Premium CTA with magnetic hover */}
        <div className="text-center relative">
          <div className="relative inline-block group">
            <button 
              className="relative px-16 py-6 text-xl font-bold text-black rounded-3xl overflow-hidden transition-all duration-700 hover:scale-105 backdrop-blur-sm"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.95) 0%, 
                    rgba(255, 255, 255, 0.85) 50%, 
                    rgba(255, 255, 255, 0.9) 100%
                  )
                `,
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.4),
                  0 0 40px rgba(255, 255, 255, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `
              }}
            >
              <span className="relative z-10 tracking-wide">Start Jouw AI Transformatie</span>
              
              {/* Magnetic hover effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `
                    radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                      rgba(59, 130, 246, 0.1) 0%, 
                      rgba(139, 92, 246, 0.05) 50%, 
                      transparent 100%
                    )
                  `
                }}
              />
              
              {/* Flowing light effect */}
              <div className="absolute inset-0 -z-10 rounded-3xl group-hover:animate-pulse">
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: 'cta-light-sweep 2s ease-in-out infinite'
                  }}
                />
              </div>
            </button>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(34, 211, 238, 0.6))',
                animation: 'cta-accent-float-1 4s ease-in-out infinite',
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)'
              }}
            />
            <div className="absolute -bottom-3 -left-3 w-2 h-2 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(168, 85, 247, 0.6))',
                animation: 'cta-accent-float-2 3s ease-in-out infinite',
                boxShadow: '0 0 8px rgba(139, 92, 246, 0.6)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Global Animation Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes cta-light-sweep {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }

          @keyframes cta-accent-float-1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
            33% { transform: translate(-6px, -8px) rotate(120deg); opacity: 1; }
            66% { transform: translate(4px, -2px) rotate(240deg); opacity: 0.8; }
          }

          @keyframes cta-accent-float-2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
            50% { transform: translate(6px, -6px) rotate(180deg); opacity: 0.8; }
          }

          /* GPU acceleration for all animated elements */
          * {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `
      }} />
    </section>
  );
};

export default WorkMethodology;
