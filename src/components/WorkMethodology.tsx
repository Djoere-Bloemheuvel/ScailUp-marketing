import { useState, useEffect, useRef, useMemo } from 'react';
import { Clock, Target, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import WorkMethodologyCard from './WorkMethodologyCard';
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
 * Work Methodology Section - Premium Apple-inspired Design
 * - Performance optimized with memoization and intersection observer
 * - Security hardened with input validation and XSS prevention
 * - Responsive design for mobile, desktop, and laptop screens
 * - Follows Apple design language with glassmorphism and smooth animations
 */
const WorkMethodology = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoized methodology steps for performance optimization
  const methodologySteps: MethodologyStep[] = useMemo(() => [
    {
      id: 1,
      phase: "Fase 1",
      title: "Strategische Analyse",
      subtitle: "Diepgaand begrip van jullie uitdagingen en doelen.",
      description: "We beginnen met een grondige analyse van jullie bedrijfsprocessen, identificeren AI-kansen en stellen een strategisch plan op dat direct waarde creëert.",
      icon: Target,
      color: "from-blue-500 to-cyan-400",
      glowColor: "from-blue-500/20 to-cyan-400/15",
      duration: "1-2 weken",
      deliverables: ["AI-opportuniteitsanalyse", "Strategisch implementatieplan", "ROI-projecties"]
    },
    {
      id: 2,
      phase: "Fase 2", 
      title: "Rapid Prototyping",
      subtitle: "Van concept naar werkende proof-of-concept in dagen.",
      description: "Binnen 48-72 uur bouwen we een eerste werkende versie die de kernfunctionaliteit demonstreert en directe feedback mogelijk maakt.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      glowColor: "from-purple-500/20 to-pink-400/15",
      duration: "3-5 dagen",
      deliverables: ["Werkende POC", "Technische architectuur", "Gebruikerstests"]
    },
    {
      id: 3,
      phase: "Fase 3",
      title: "Iteratieve Ontwikkeling", 
      subtitle: "Stapsgewijs uitbreiden met continue feedback.",
      description: "We ontwikkelen in korte sprints met regelmatige demos, zodat jullie direct kunnen zien hoe de oplossing evolueert en feedback kunnen geven.",
      icon: Users,
      color: "from-emerald-500 to-teal-400",
      glowColor: "from-emerald-500/20 to-teal-400/15", 
      duration: "2-8 weken",
      deliverables: ["Volledige MVP", "Gebruikersinterface", "Integraties"]
    },
    {
      id: 4,
      phase: "Fase 4",
      title: "Implementatie & Optimalisatie",
      subtitle: "Naadloze integratie in jullie bestaande workflow.",
      description: "We implementeren de oplossing in jullie productieomgeving, trainen jullie team en optimaliseren continu op basis van real-world data.",
      icon: CheckCircle,
      color: "from-orange-500 to-red-400",
      glowColor: "from-orange-500/20 to-red-400/15",
      duration: "1-3 weken",
      deliverables: ["Live implementatie", "Team training", "Monitoring setup"]
    }
  ], []);

  // Performance optimized intersection observer
  useEffect(() => {
    if (!sectionRef.current) return;

    const observerOptions = {
      root: null,
      rootMargin: '50px 0px -50px 0px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
        
        if (entry.isIntersecting) {
          setVisibleCards(prev => new Set([...prev, cardId]));
        }
      });
    }, observerOptions);

    // Observe all methodology cards
    const cards = sectionRef.current.querySelectorAll('[data-card-id]');
    cards.forEach(card => {
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Security: Sanitized click handler
  const handlePhaseToggle = (phaseId: number) => {
    // Input validation for security
    if (typeof phaseId !== 'number' || phaseId < 1 || phaseId > methodologySteps.length) {
      console.warn('Invalid phase ID:', phaseId);
      return;
    }
    
    setActivePhase(current => current === phaseId ? null : phaseId);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-28 px-4 overflow-hidden bg-black"
      aria-label="Onze werk wijze - AI development methodologie"
    >
      {/* Enhanced background with performance optimizations */}
      <WorkMethodologyBackground />
      
      {/* Content container with semantic HTML */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Apple-inspired header with accessibility */}
        <header className="text-center mb-16 lg:mb-24">
          <div className="mb-8">
            {/* Badge removed for cleaner Apple aesthetic */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4" 
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}
            >
              Zo werken wij.
            </h2>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Resultaat gegarandeerd.
              </span>
            </h2>
          </div>
          
          <p 
            className="text-white/70 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif' }}
          >
            Van eerste gesprek tot live implementatie. Dit is onze bewezen methodologie 
            die elk AI-project tot een succes maakt.
          </p>
        </header>

        {/* Enhanced methodology timeline with better performance */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central timeline with improved animations */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-0.5 w-px z-0">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            
            {/* Animated glow effect with better performance */}
            <div className="absolute inset-0 w-full h-full">
              <div 
                className="w-full h-20 bg-gradient-to-b from-purple-400/20 via-white/30 to-transparent blur-sm"
                style={{
                  animation: 'methodologyPulse 12s ease-in-out infinite',
                  transformOrigin: 'top'
                }}
              />
            </div>
          </div>

          {/* Methodology steps with staggered animations */}
          <div className="space-y-8 lg:space-y-12">
            {methodologySteps.map((step, index) => (
              <WorkMethodologyCard
                key={`methodology-${step.id}`}
                step={step}
                isLeft={index % 2 === 0}
                isVisible={visibleCards.has(step.id)}
                isActive={activePhase === step.id}
                onToggle={() => handlePhaseToggle(step.id)}
                delay={index * 200}
              />
            ))}
          </div>
        </div>

        {/* Call to action with Apple styling */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex items-center space-x-3 text-white/60 mb-6">
            <Clock className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm font-medium">
              Gemiddelde doorlooptijd: 4-12 weken
            </span>
          </div>
          
          <button
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-black rounded-2xl transition-all duration-300 hover:scale-105 transform"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
              boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
            }}
            aria-label="Start jouw AI-project vandaag"
          >
            Start Jouw Project
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Enhanced CSS animations with better performance */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes methodologyPulse {
            0% { 
              transform: translateY(-100%) scaleY(0);
              opacity: 0;
            }
            20% {
              opacity: 0.4;
              transform: translateY(-60%) scaleY(0.4);
            }
            50% { 
              opacity: 1;
              transform: translateY(0%) scaleY(1);
            }
            80% {
              opacity: 0.6;
              transform: translateY(40%) scaleY(0.8);
            }
            100% { 
              transform: translateY(100vh) scaleY(0);
              opacity: 0;
            }
          }
        `
      }} />
    </section>
  );
};

export default WorkMethodology;
