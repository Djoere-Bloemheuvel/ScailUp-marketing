import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ServiceFeature {
  id: string;
  title: string;
  description: string;
}

const ServicesOfferingSection = () => {
  const [activeFeature, setActiveFeature] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const features: ServiceFeature[] = [
    {
      id: 'custom-ai-agents',
      title: 'Custom AI Agents',
      description: 'We bouwen maatwerk AI workflows die perfect aansluiten bij jouw bedrijfsprocessen. Van LinkedIn automation tot proposal generators - elke agent wordt specifiek ontwikkeld voor jouw unieke uitdagingen en doelstellingen.'
    },
    {
      id: 'linkedin-automation',
      title: 'LinkedIn Automation',
      description: 'Geautomatiseerde outbound campagnes via LinkedIn die echte connecties maken. Onze agents versturen gepersonaliseerde berichten, volgen leads op en kwalificeren prospects - allemaal terwijl jij focust op de gesprekken die ertoe doen.'
    },
    {
      id: 'proposal-generator',
      title: 'Proposal Generator',
      description: 'AI-gegenereerde offertes en voorstellen die tijd besparen en conversie verhogen. Onze agents analyseren klantgegevens, maken gepersonaliseerde voorstellen en zorgen voor consistente communicatie met elke prospect.'
    },
    {
      id: 'lead-processing',
      title: 'Lead Processing',
      description: 'Automatische lead enrichment en kwalificatie die jouw sales team effectiever maakt. Van eerste contact tot gekwalificeerde afspraak - onze agents zorgen dat alleen de beste leads jouw agenda bereiken.'
    },
    {
      id: 'platform-integration',
      title: 'Platform Integration',
      description: 'Naadloze integratie in ons Buildrs platform voor betere dashboards, monitoring en samenwerking. Krijg volledige inzicht in je automation workflows met real-time analytics en uitgebreide rapportage mogelijkheden.'
    },
    {
      id: 'standalone-solutions',
      title: 'Standalone Solutions',
      description: 'Volledig eigenaarschap van je agents met exporteerbare workflows voor je eigen stack. Draai je automation via Google Sheets, Airtable of je eigen systemen - zonder vendor lock-in of maandelijkse kosten.'
    }
  ];

  useEffect(() => {
    // Set up intersection observer for scroll detection
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveFeature(entry.target.getAttribute('data-feature-id') || '');
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    // Observe all feature elements
    const featureElements = document.querySelectorAll('[data-feature-id]');
    featureElements.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      featureElements.forEach((element) => {
        if (observerRef.current) {
          observerRef.current.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <section 
      className="relative bg-gradient-to-br from-black via-black to-gray-900/50"
      data-section-theme="dark"
      data-section-accent="purple"
      data-section-id="services"
      data-lighting-intensity="moderate"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:grid md:grid-cols-[350px_1fr] md:gap-8 lg:grid-cols-[400px_1fr] lg:gap-12 lg:min-h-screen">
          {/* Left Sticky Panel */}
          <div className="sticky top-0 self-start flex items-center justify-start h-screen">
            <div className="max-w-sm">
              {/* Award Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2" />
                <span className="text-xs text-white/80 uppercase tracking-wide font-medium">
                  FULL-SERVICE AI AUTOMATION AGENCY
                </span>
              </div>

              {/* Main Headline */}
              <h2
                className="text-white font-light mb-6"
                style={{
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  lineHeight: '1.15',
                  letterSpacing: '-0.02em',
                  fontWeight: '300'
                }}
              >
                Onze Agency Services
              </h2>

              {/* Description */}
              <p
                className="text-white/60 leading-relaxed"
                style={{
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                  fontWeight: '400',
                  lineHeight: '1.6'
                }}
              >
                Als gespecialiseerd AI automation agency bieden we end-to-end oplossingen. Van strategie en ontwikkeling tot implementatie en support - wij zorgen ervoor dat jouw bedrijf optimaal profiteert van AI-gedreven automatisering.
              </p>

              {/* Decorative line */}
              <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent mt-8" />
            </div>
          </div>

          {/* Right Scrollable Features */}
          <div className="py-24">
            <div className="space-y-0">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  data-feature-id={feature.id}
                  className={`relative py-20 xl:py-22 transition-opacity duration-500 ${
                    activeFeature === feature.id ? 'opacity-100' : 'opacity-80'
                  }`}
                >
                  {/* Feature Layout */}
                  <div className="flex gap-8 xl:gap-12">
                    {/* Left Column - Feature Title */}
                    <div className="w-5/12 xl:w-4/12 flex-shrink-0">
                      <h3
                        className="text-white font-medium"
                        style={{
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)',
                          lineHeight: '1.2',
                          letterSpacing: '-0.01em',
                          fontWeight: '500'
                        }}
                      >
                        {feature.title}
                      </h3>
                      
                      {/* Subtle number indicator */}
                      <div className="mt-2 text-xs text-white/40 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Right Column - Feature Description */}
                    <div className="w-7/12 xl:w-8/12">
                      <p
                        className="text-white/70"
                        style={{
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                          fontWeight: '400',
                          lineHeight: '1.6'
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature separator line */}
                  {index < features.length - 1 && (
                    <div className="absolute left-0 right-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-pink-400/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Subtle fade to black at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12 sm:mb-16">
            {/* Award Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2" />
              <span className="text-xs text-white/80 uppercase tracking-wide font-medium">
                AI-FIRST AUTOMATION PLATFORM
              </span>
            </div>

            {/* Main Headline */}
            <h2
              className="text-white font-light mb-6"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
                fontWeight: '300'
              }}
            >
              Wat wij aanbieden
            </h2>

            {/* Description */}
            <p
              className="text-white/60 leading-relaxed max-w-2xl"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)',
                fontWeight: '400',
                lineHeight: '1.6'
              }}
            >
              Onze AI automation services omvatten een 360-graden aanpak. Met deze benadering tillen we jouw bedrijfsprocessen naar een hoger niveau en zorgen we ervoor dat je altijd voorop loopt.
            </p>

            {/* Decorative line */}
            <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent mt-8" />
          </div>

          {/* Features List */}
          <div className="space-y-16 sm:space-y-20">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="group"
              >
                {/* Mobile: Stacked Layout */}
                <div className="block">
                  <div className="flex items-baseline mb-3">
                    <span className="text-xs text-white/30 font-mono mr-4">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="text-white font-medium"
                      style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        fontSize: 'clamp(1.125rem, 5vw, 1.375rem)',
                        lineHeight: '1.2',
                        letterSpacing: '-0.01em',
                        fontWeight: '500'
                      }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    className="text-white/70 pl-8"
                    style={{
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: 'clamp(0.875rem, 4vw, 1rem)',
                      fontWeight: '400',
                      lineHeight: '1.6'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
                
                {/* Feature separator line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-pink-400/50 to-transparent mt-12 sm:mt-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOfferingSection;