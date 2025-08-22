import React, { useState, useEffect, useRef } from 'react';
import { Brain, CheckCircle, TrendingUp } from 'lucide-react';

const WhyScailUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => setIsVisible(true), 100);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const reasons = [
    {
      icon: Brain,
      title: 'AI-personalisatie op schaal',
      description: 'Elke boodschap uniek afgestemd op de ontvanger. Menselijk gevoel, AI-efficiency.'
    },
    {
      icon: CheckCircle,
      title: 'End-to-end gedaan voor jou',
      description: 'Van strategie tot uitvoering. Wij regelen alles, jij focust op afspraken sluiten.'
    },
    {
      icon: TrendingUp,
      title: 'Transparant: afspraken, pipeline, ROI',
      description: 'Realtime dashboards met harde cijfers. Geen verrassingen, wel resultaten.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-4 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Waarom <span className="gradient-text">ScailUp</span>?
          </h2>
          <p className="text-xl text-scailup-gray max-w-2xl mx-auto">
            Outbound dat werkt. Zonder de typische frustraties.
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`glass p-8 text-center group hover:shadow-scailup-glow transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-scailup-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              
              <p className="text-scailup-gray leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyScailUp;