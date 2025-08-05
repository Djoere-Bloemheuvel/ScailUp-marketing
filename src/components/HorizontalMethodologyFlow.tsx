
'use client';

import { useState, useEffect, useRef } from 'react';
import { Target, Zap, Users, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  deliverables: string[];
  ambientColor: string;
  glowColor: string;
}

const HorizontalMethodologyFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps: MethodologyStep[] = [
    {
      id: 1,
      phase: "Week 1-2",
      title: "Discovery & Strategie",
      subtitle: "Van gesprek tot concreet plan",
      description: "We beginnen met een diepgaande analyse van jullie bedrijfsprocessen. Geen lange documenten, maar direct bruikbare inzichten en een helder implementatieplan dat jullie team begrijpt.",
      icon: Target,
      deliverables: [
        "Strategisch implementatieplan",
        "ROI projectie en KPI framework", 
        "Technische architectuur roadmap",
        "Stakeholder alignment sessies"
      ],
      ambientColor: "from-blue-500/20 to-slate-600/20",
      glowColor: "rgb(59, 130, 246)"
    },
    {
      id: 2,
      phase: "72 uur",
      title: "Rapid Prototype",
      subtitle: "Zichtbaar resultaat binnen 72 uur",
      description: "Binnen 3 dagen leveren we een werkend prototype dat de kern van je oplossing toont. Hiermee testen we snel ideeën, valideren we aannames en creëren we interne draagkracht.",
      icon: Zap,
      deliverables: [
        "Eerste prototype in 72 uur",
        "Testbare flow of interactie",
        "AI-assistent of automation als basis",
        "Interne validatiepresentatie"
      ],
      ambientColor: "from-emerald-400/20 to-cyan-500/20",
      glowColor: "rgb(52, 211, 153)"
    },
    {
      id: 3,
      phase: "Week 2-6",
      title: "Iteratieve Ontwikkeling",
      subtitle: "Weekly demos, continue verbetering",
      description: "Elke week zie je jullie oplossing groeien. We bouwen stap voor stap op basis van jullie feedback, zodat het eindresultaat perfect aansluit bij de dagelijkse praktijk.",
      icon: Users,
      deliverables: [
        "Weekly sprint demonstraties",
        "Gebruikerstests en feedback loops",
        "Live functionaliteit updates",
        "Performance monitoring"
      ],
      ambientColor: "from-amber-400/20 to-orange-500/20",
      glowColor: "rgb(245, 158, 11)"
    },
    {
      id: 4,
      phase: "Week 6-8",
      title: "Deployment & Optimalisatie",
      subtitle: "Van test naar productie",
      description: "We zorgen voor een vlekkeloze livegang, met meetbare resultaten, support na oplevering en ruimte voor doorontwikkeling.",
      icon: CheckCircle,
      deliverables: [
        "100% tevredenheidsgarantie",
        "24/7 support na livegang", 
        "Monitoring + optimalisatie",
        "Roadmap voor volgende fases"
      ],
      ambientColor: "from-purple-500/20 to-slate-500/20",
      glowColor: "rgb(139, 92, 246)"
    }
  ];

  // Handle scroll snap
  useEffect(() => {
    const handleScroll = () => {
      if (!stepsRef.current) return;
      
      const container = stepsRef.current;
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.clientWidth;
      const newStep = Math.round(scrollLeft / slideWidth);
      
      setCurrentStep(Math.max(0, Math.min(newStep, steps.length - 1)));
    };

    const container = stepsRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [steps.length]);

  // Auto-animate elements per step
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden"
      aria-label="Onze werk methodologie - Horizontale flow"
    >
      {/* Progress indicator */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full">
          <span className="text-white/60 text-sm font-medium">
            Stap {currentStep + 1} van {steps.length}
          </span>
          <div className="flex space-x-1.5 ml-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal scrolling container */}
      <div
        ref={stepsRef}
        className="flex h-full overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="min-w-full h-full flex items-center justify-center snap-center relative"
          >
            {/* Ambient background glow */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${step.ambientColor} opacity-30`}
              style={{
                background: `radial-gradient(circle at 30% 40%, ${step.glowColor}15 0%, transparent 50%)`
              }}
            />
            
            {/* Step-specific ambient animations */}
            {step.id === 1 && (
              <motion.div 
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${step.glowColor}10 0%, transparent 70%)`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}

            {step.id === 2 && (
              <>
                <motion.div 
                  className="absolute top-20 right-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent"
                  animate={{
                    x: [0, 100, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-32 left-1/3 w-1 h-24 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent"
                  animate={{
                    x: [0, -80, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </>
            )}

            {step.id === 3 && (
              <>
                <motion.div 
                  className="absolute top-1/3 right-20 w-px h-40 bg-gradient-to-b from-transparent via-amber-400/25 to-transparent"
                  animate={{
                    y: [0, 60, 0],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/4 left-20 w-px h-32 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent"
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />
              </>
            )}

            {step.id === 4 && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-slate-500/5"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}

            {/* Content container */}
            <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 flex items-center">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
                
                {/* Left side - Icon */}
                <div className="flex justify-center lg:justify-start">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`icon-${step.id}`}
                      variants={iconVariants}
                      initial="hidden"
                      animate={index === currentStep ? "visible" : "hidden"}
                      className="relative"
                    >
                      <div 
                        className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                        style={{
                          boxShadow: `0 0 60px ${step.glowColor}30`
                        }}
                      >
                        <step.icon className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                      </div>
                      
                      {/* Subtle glow ring */}
                      <div 
                        className="absolute inset-0 rounded-3xl opacity-40"
                        style={{
                          background: `linear-gradient(135deg, ${step.glowColor}20, transparent)`
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right side - Content */}
                <div className="text-center lg:text-left space-y-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`content-${step.id}`}
                      className="space-y-8"
                    >
                      {/* Phase badge */}
                      <motion.div
                        custom={0}
                        variants={textVariants}
                        initial="hidden"
                        animate={index === currentStep ? "visible" : "hidden"}
                      >
                        <span 
                          className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white/80 border"
                          style={{
                            background: `linear-gradient(135deg, ${step.glowColor}20, ${step.glowColor}10)`,
                            borderColor: `${step.glowColor}30`
                          }}
                        >
                          {step.phase}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <motion.h2
                        custom={1}
                        variants={textVariants}
                        initial="hidden"
                        animate={index === currentStep ? "visible" : "hidden"}
                        className="text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight"
                      >
                        {step.title}
                      </motion.h2>

                      {/* Subtitle */}
                      <motion.p
                        custom={2}
                        variants={textVariants}
                        initial="hidden"
                        animate={index === currentStep ? "visible" : "hidden"}
                        className="text-xl lg:text-2xl text-white/60 font-light leading-relaxed"
                      >
                        {step.subtitle}
                      </motion.p>

                      {/* Description */}
                      <motion.p
                        custom={3}
                        variants={textVariants}
                        initial="hidden"
                        animate={index === currentStep ? "visible" : "hidden"}
                        className="text-base lg:text-lg text-white/50 leading-relaxed max-w-2xl"
                      >
                        {step.description}
                      </motion.p>

                      {/* Deliverables */}
                      <motion.div
                        custom={4}
                        variants={textVariants}
                        initial="hidden"
                        animate={index === currentStep ? "visible" : "hidden"}
                        className="space-y-4"
                      >
                        <h3 className="text-white/40 font-medium text-sm uppercase tracking-wider">
                          Wat je krijgt:
                        </h3>
                        <ul className="space-y-3 max-w-xl">
                          {step.deliverables.map((deliverable, idx) => (
                            <motion.li
                              key={idx}
                              custom={5 + idx}
                              variants={textVariants}
                              initial="hidden"
                              animate={index === currentStep ? "visible" : "hidden"}
                              className="flex items-start text-white/60 text-base"
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full mr-4 mt-2 flex-shrink-0"
                                style={{ backgroundColor: step.glowColor }}
                              />
                              <span className="font-light leading-relaxed">
                                {deliverable}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* CTA button for last step */}
                      {step.id === steps.length && (
                        <motion.div
                          custom={9}
                          variants={textVariants}
                          initial="hidden"
                          animate={index === currentStep ? "visible" : "hidden"}
                          className="pt-8"
                        >
                          <button 
                            className="group inline-flex items-center px-8 py-4 bg-white text-black rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                            style={{
                              boxShadow: `0 0 40px ${step.glowColor}30`
                            }}
                          >
                            Start jouw project
                            <div className="ml-3 w-5 h-5 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                              <div className="w-2 h-2 border-r-2 border-b-2 border-black/60 transform rotate-[-45deg] translate-x-[-1px]" />
                            </div>
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HorizontalMethodologyFlow;
