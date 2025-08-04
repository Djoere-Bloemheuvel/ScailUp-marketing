
import { useEffect, useRef } from 'react';
import WorkflowStep from './WorkflowStep';

const Workflow = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * -0.01; // Very subtle parallax

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    // Add entrance animation styles
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }

      /* Subtle ambient particles */
      @keyframes float-ambient {
        0%, 100% { 
          transform: translateY(0px) translateX(0px);
          opacity: 0.15;
        }
        50% { 
          transform: translateY(-6px) translateX(3px);
          opacity: 0.25;
        }
      }

      @keyframes drift-slow {
        0%, 100% { 
          transform: translateX(0) translateY(0) scale(1);
          opacity: 0.08;
        }
        50% { 
          transform: translateX(-20px) translateY(-10px) scale(1.1);
          opacity: 0.15;
        }
      }

      .ambient-float {
        animation: float-ambient 12s ease-in-out infinite;
      }

      .ambient-drift {
        animation: drift-slow 25s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  const steps = [{
    number: "1",
    title: "Strategie & Analyse",
    subtitle: "Samen brengen we je businessdoelen, kansen en AI-potentieel in kaart."
  }, {
    number: "2",
    title: "Ontwerp & Bouw",
    subtitle: "We ontwerpen en bouwen een eerste versie binnen 2–4 weken."
  }, {
    number: "3",
    title: "Optimalisatie & Schaling",
    subtitle: "Samen perfectioneren we het product en koppelen het aan je systemen."
  }];

  // Refined vertical offsets for elegant staggering
  const stepOffsets = [-30, 15, 60];

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-4 relative overflow-hidden bg-black transition-transform duration-75 ease-out">
      {/* Refined ambient background - much more subtle */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient overlays */}
        <div className="ambient-drift absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-white/4 via-blue-500/2 to-transparent rounded-full blur-3xl" />
        <div className="ambient-drift absolute top-2/3 right-1/3 w-80 h-80 bg-gradient-radial from-purple-500/3 via-white/1 to-transparent rounded-full blur-3xl" style={{ animationDelay: '8s' }} />
        
        {/* Minimal floating particles */}
        <div className="ambient-float absolute top-24 left-16 w-1 h-1 bg-white/20 rounded-full blur-sm" style={{ animationDelay: '0s' }} />
        <div className="ambient-float absolute top-1/2 right-20 w-0.5 h-0.5 bg-white/15 rounded-full blur-sm" style={{ animationDelay: '6s' }} />
        <div className="ambient-float absolute bottom-32 left-1/3 w-1 h-1 bg-white/20 rounded-full blur-sm" style={{ animationDelay: '12s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Refined header with premium typography */}
        <div className="text-left mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            In drie heldere stappen van{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-semibold">
                idee
              </span>
            </span>{' '}
            naar{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-pink-600 bg-clip-text text-transparent font-semibold">
                impact
              </span>
            </span>
            .
          </h2>
          
          <p className="text-white/60 text-lg lg:text-xl font-light tracking-wide max-w-3xl leading-relaxed">
            Onze bewezen aanpak voor succesvolle AI-implementatie.
          </p>
        </div>

        {/* Clean timeline layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Minimal connecting line */}
          <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
            <div className="relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/20 to-transparent" />
            </div>
          </div>

          {/* Steps grid with refined spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
            {steps.map((step, index) => (
              <WorkflowStep 
                key={step.number} 
                step={step} 
                delay={`${0.2 + index * 0.1}s`} 
                isLast={index === steps.length - 1}
                verticalOffset={stepOffsets[index]}
              />
            ))}
          </div>
        </div>

        {/* Refined call-to-action */}
        <div className="text-center mt-20 lg:mt-28">
          <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <p className="text-white/60 text-base">
              <span className="text-white font-medium">Klaar om te beginnen?</span> Laten we uw AI-journey starten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
