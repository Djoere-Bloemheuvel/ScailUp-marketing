
import { useEffect, useRef } from 'react';
import WorkflowStep from './WorkflowStep';

const Workflow = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * -0.02; // Very subtle parallax
      
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    // Add scroll-triggered animation styles
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  const steps = [
    {
      number: "1",
      title: "Strategie & Analyse",
      subtitle: "Samen brengen we je businessdoelen, kansen en AI-potentieel in kaart."
    },
    {
      number: "2", 
      title: "Ontwerp & Bouw",
      subtitle: "We ontwerpen en bouwen een eerste versie binnen 2–4 weken."
    },
    {
      number: "3",
      title: "Optimalisatie & Schaling", 
      subtitle: "Samen perfectioneren we het product en koppelen het aan je systemen."
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-4 relative overflow-hidden bg-black transition-transform duration-75 ease-out">
      {/* Subtle radial gradient glow behind center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-[800px] h-[600px] bg-gradient-radial from-white/5 via-white/2 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section - Enhanced with subtitle */}
        <div className="text-left mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 apple-fade-in apple-stagger-2 tracking-tight leading-tight">
            In drie heldere stappen van idee naar impact.
          </h2>
          <p className="text-white/60 text-lg lg:text-xl font-light tracking-wide apple-fade-in apple-stagger-3">
            Onze bewezen aanpak voor succesvolle AI-implementatie
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
            {steps.map((step, index) => (
              <WorkflowStep 
                key={step.number}
                step={step} 
                delay={`${0.2 + index * 0.1}s`}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
