import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { CheckCircle, ArrowDown, Sparkles } from 'lucide-react';
import WorkflowStep from './WorkflowStep';

interface WorkflowStepData {
  number: string;
  title: string;
  subtitle: string;
}

const Workflow = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps: WorkflowStepData[] = [
    {
      number: "01",
      title: "Verkenning & Analyse",
      subtitle: "We duiken diep in uw processen en identificeren kansen voor AI-optimalisatie."
    },
    {
      number: "02", 
      title: "Strategische Planning",
      subtitle: "Samen stellen we een roadmap op die perfect aansluit bij uw bedrijfsdoelen."
    },
    {
      number: "03",
      title: "Prototyping & Validatie", 
      subtitle: "We bouwen een werkend prototype en testen deze grondig met uw team."
    },
    {
      number: "04",
      title: "Implementatie & Integratie",
      subtitle: "Naadloze integratie in uw bestaande systemen zonder verstoring van uw workflow."
    },
    {
      number: "05",
      title: "Optimalisatie & Monitoring",
      subtitle: "Continue verbetering op basis van data-gedreven inzichten en gebruikersfeedback."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => {
              if (!prev.includes(stepIndex)) {
                return [...prev, stepIndex].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = useCallback(() => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight - rect.top) / (sectionHeight + viewportHeight)
      ));

      const newActiveStep = Math.floor(scrollProgress * steps.length);
      setActiveStep(Math.min(newActiveStep, steps.length - 1));
    }, []);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getVerticalOffset = useCallback((index: number): number => {
    const baseOffset = index * 120;
    const stagger = (index % 2) * 60;
    return baseOffset + stagger;
  }, []);

  const memoizedSteps = useMemo(() => 
    steps.map((step, index) => ({
      step,
      index,
      isVisible: visibleSteps.includes(index),
      isActive: index === activeStep,
      delay: `${index * 200}ms`,
      verticalOffset: getVerticalOffset(index)
    })), 
    [steps, visibleSteps, activeStep, getVerticalOffset]
  );

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-4 bg-premium-black relative overflow-hidden min-h-screen"
      id="workflow"
    >
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-premium-silver/8 via-premium-silver/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-premium-gray/5 via-transparent to-premium-gray/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-white/5 rounded-full mb-6 border border-white/10">
            <Sparkles className="w-5 h-5 text-premium-silver mr-2" />
            <span className="text-premium-silver text-sm font-medium">Ons Werkproces</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Van <span className="text-gradient-premium">idee tot impact</span>
          </h2>
          
          <p className="text-premium-silver/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Onze bewezen 5-stappen methode zorgt voor succesvolle AI-implementaties 
            die meetbare resultaten opleveren voor uw organisatie.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Central connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-premium-silver/30 to-transparent hidden lg:block"></div>
          
          {/* Enhanced floating progress indicator */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:flex flex-col items-center space-y-3 z-20">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index <= activeStep 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg shadow-blue-400/30' 
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Steps Grid */}
          <div className="space-y-32 lg:space-y-48">
            {memoizedSteps.map(({ step, index, isVisible, isActive, delay, verticalOffset }) => (
              <WorkflowStep
                key={`step-${index}`}
                step={step}
                delay={delay}
                isLast={index === steps.length - 1}
                verticalOffset={verticalOffset}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-32">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            <span className="text-white font-medium">Klaar om te beginnen aan uw AI-transformatie?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
