
import { useEffect, useRef } from 'react';
import WorkflowStep from './WorkflowStep';
import WorkflowGlowAnimations from './workflow/WorkflowGlowAnimations';
import WorkflowAmbientBackground from './workflow/WorkflowAmbientBackground';

const Workflow = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * -0.015; // Even more subtle parallax

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }

      /* Apple-style fade in animation */
      .apple-fade-in {
        animation: apple-fade-in 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        opacity: 0;
        transform: translateY(20px);
      }

      @keyframes apple-fade-in {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      .apple-stagger-1 { animation-delay: 0.1s; }
      .apple-stagger-2 { animation-delay: 0.2s; }
      .apple-stagger-3 { animation-delay: 0.3s; }
      .apple-stagger-4 { animation-delay: 0.4s; }
      .apple-stagger-5 { animation-delay: 0.5s; }
      .apple-stagger-6 { animation-delay: 0.6s; }

      /* Connection flow animation */
      @keyframes connection-flow {
        0% { transform: translateX(-100%); opacity: 0; }
        50% { opacity: 0.6; }
        100% { transform: translateX(200%); opacity: 0; }
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

  const stepOffsets = [-40, 20, 80];

  return (
    <>
      <WorkflowGlowAnimations />
      <section ref={sectionRef} className="py-32 lg:py-40 px-4 relative overflow-hidden bg-black transition-transform duration-75 ease-out">
        <WorkflowAmbientBackground />
        
        <div className="relative max-w-7xl mx-auto z-10">
          {/* Header */}
          <div className="text-left mb-6 lg:mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-white/30 via-blue-200/40 to-white/30 rounded-full mb-6 apple-fade-in apple-stagger-1" />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 apple-fade-in apple-stagger-2 tracking-tight leading-tight">
              In drie heldere stappen van{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  idee
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-full" />
              </span>{' '}
              naar{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  impact
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full" />
              </span>
              .
            </h2>
            
            <p className="text-white/70 text-xl lg:text-2xl font-light tracking-wide apple-fade-in apple-stagger-3 max-w-4xl leading-relaxed">
              Onze bewezen aanpak voor succesvolle AI-implementatie.
            </p>
          </div>

          {/* Timeline with subtle connecting line */}
          <div className="relative max-w-6xl mx-auto">
            <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="relative h-px">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" style={{
                    animation: 'connection-flow 6s ease-in-out infinite',
                    animationDelay: '2s'
                  }} />
                </div>
              </div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-12">
              {steps.map((step, index) => (
                <WorkflowStep 
                  key={step.number} 
                  step={step} 
                  delay={`${0.3 + index * 0.15}s`} 
                  isLast={index === steps.length - 1}
                  verticalOffset={stepOffsets[index]}
                />
              ))}
            </div>
          </div>

          {/* Call-to-action */}
          <div className="text-center mt-20 lg:mt-24">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-white/8 via-white/4 to-white/8 backdrop-blur-sm rounded-2xl border border-white/10 apple-fade-in apple-stagger-6">
              <p className="text-white/70 text-lg">
                <span className="text-white font-medium">Klaar om te beginnen?</span> Laten we uw AI-journey starten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workflow;
