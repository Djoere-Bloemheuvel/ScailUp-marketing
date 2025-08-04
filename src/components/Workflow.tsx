
/**
 * Systeemprompt:
 * Je werkt aan een Apple-achtige premium dark mode website. Pas uitsluitend de "Onze werkwijze"-sectie aan. 
 * Optimaliseer voor performance, elegantie en diepte – zonder de huidige layout te breken. Gebruik subtiele 
 * micro-animaties, glows en schaduwen. UI en UX moeten perfect schalen op mobiel, laptop en 27" scherm. 
 * Alle tekst blijft onveranderd.
 */

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

      /* Enhanced floating particles */
      @keyframes float-gentle {
        0%, 100% { 
          transform: translateY(0px) translateX(0px) rotate(0deg);
          opacity: 0.3;
        }
        25% { 
          transform: translateY(-8px) translateX(4px) rotate(90deg);
          opacity: 0.6;
        }
        50% { 
          transform: translateY(-4px) translateX(-2px) rotate(180deg);
          opacity: 0.4;
        }
        75% { 
          transform: translateY(-12px) translateX(6px) rotate(270deg);
          opacity: 0.7;
        }
      }

      @keyframes pulse-glow {
        0%, 100% { 
          opacity: 0.4;
          transform: scale(1);
        }
        50% { 
          opacity: 0.8;
          transform: scale(1.1);
        }
      }

      /* New animated flow for connecting line */
      @keyframes flow-pulse {
        0%, 100% { 
          opacity: 0.6;
          transform: scaleX(1);
        }
        50% { 
          opacity: 0.9;
          transform: scaleX(1.02);
        }
      }

      @keyframes flow-light {
        0% { 
          transform: translateX(-100px); 
          opacity: 0; 
        }
        50% { 
          opacity: 0.8; 
        }
        100% { 
          transform: translateX(calc(100vw - 200px)); 
          opacity: 0; 
        }
      }

      .floating-particle {
        animation: float-gentle 8s ease-in-out infinite;
      }

      .pulse-particle {
        animation: pulse-glow 4s ease-in-out infinite;
      }

      .animated-flow {
        animation: flow-pulse 3s ease-in-out infinite;
      }

      .flow-light {
        animation: flow-light 4s ease-in-out infinite;
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

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-4 relative overflow-hidden bg-black transition-transform duration-75 ease-out">
      {/* Enhanced multi-layered background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <div className="w-[900px] h-[720px] bg-gradient-radial from-blue-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <div className="w-[540px] h-[360px] bg-gradient-radial from-cyan-400/6 via-white/3 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Dynamic floating particles inspired by hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="floating-particle absolute top-20 left-10 w-2 h-2 bg-blue-400/60 rounded-full" style={{
          animationDelay: '0s'
        }} />
        <div className="floating-particle absolute top-40 right-20 w-1 h-1 bg-purple-400/80 rounded-full" style={{
          animationDelay: '2s'
        }} />
        <div className="floating-particle absolute bottom-32 left-1/3 w-3 h-3 bg-cyan-400/50 rounded-full" style={{
          animationDelay: '4s'
        }} />
        <div className="floating-particle pulse-particle absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-emerald-400/70 rounded-full" style={{
          animationDelay: '1s'
        }} />
        <div className="floating-particle absolute top-1/2 left-1/4 w-1 h-1 bg-violet-400/60 rounded-full" style={{
          animationDelay: '3s'
        }} />
        <div className="pulse-particle absolute top-3/4 right-1/3 w-2 h-2 bg-blue-300/40 rounded-full" style={{
          animationDelay: '5s'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Enhanced header with more visual interest - scaled down 10% */}
        <div className="text-left mb-14 lg:mb-18 scale-[0.9] origin-left">
          {/* Subtle accent line above title */}
          <div className="w-22 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-5 apple-fade-in apple-stagger-1" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 apple-fade-in apple-stagger-2 tracking-tight leading-tight">
            In drie heldere stappen van{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                idee
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 rounded-full animate-pulse" />
            </span>{' '}
            naar{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                impact
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full animate-pulse" style={{
                animationDelay: '0.5s'
              }} />
            </span>
            .
          </h2>
          
          <p className="text-white/70 text-lg lg:text-xl font-light tracking-wide apple-fade-in apple-stagger-3 max-w-3xl leading-relaxed">
            Onze bewezen aanpak voor succesvolle AI-implementatie.
          </p>
        </div>

        {/* Enhanced timeline with better visual hierarchy */}
        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced connecting line with animated flow */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animated-flow" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-pulse" />
              
              {/* Flowing light effect with enhanced animation */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-20 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent flow-light" />
                <div className="absolute w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent flow-light" style={{
                  animationDelay: '2s'
                }} />
              </div>
            </div>
          </div>

          {/* Steps Grid with enhanced spacing and vertical offsets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`transform transition-all duration-500 ${
                  index === 0 ? 'lg:-translate-y-2.5' : 
                  index === 1 ? '' : 
                  'lg:-translate-y-2.5'
                }`}
                style={{ 
                  marginBottom: index < steps.length - 1 ? '40px' : '0',
                  transform: `scale(0.9) ${
                    index === 0 ? 'translateY(-10px)' : 
                    index === 2 ? 'translateY(-10px)' : 
                    'translateY(0)'
                  }`
                }}
              >
                <WorkflowStep 
                  step={step} 
                  delay={`${0.3 + index * 0.15}s`} 
                  isLast={index === steps.length - 1} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-action area - scaled down 10% */}
        <div className="text-center mt-18 lg:mt-22 scale-[0.9]">
          <div className="inline-block px-7 py-3 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 apple-fade-in apple-stagger-6">
            <p className="text-white/70 text-base">
              <span className="text-white font-medium">Klaar om te beginnen?</span> Laten we uw AI-journey starten.
            </p>
          </div>
        </div>
      </div>

      {/* Additional CSS for new animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 1024px) {
            .grid > div {
              margin-bottom: 40px !important;
            }
          }
        `
      }} />
    </section>
  );
};

export default Workflow;
