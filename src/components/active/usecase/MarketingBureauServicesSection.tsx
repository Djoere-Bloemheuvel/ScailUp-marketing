import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ServiceFeature {
  id: string;
  title: string;
  description: string;
}

const MarketingBureauServicesSection = () => {
  const [activeFeature, setActiveFeature] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const features: ServiceFeature[] = [
    {
      id: 'outbound-email',
      title: 'Outbound Email',
      description: 'Geautomatiseerde e-mail campagnes die leads converteren. Van cold outreach tot follow-up sequences - gepersonaliseerde berichten die resultaat opleveren en jouw sales pipeline vullen.'
    },
    {
      id: 'linkedin-automation',
      title: 'Linkedin Automation',
      description: 'Slimme Linkedin automation die echte connecties maakt. Geautomatiseerde connection requests, follow-ups en messaging - terwijl jij focust op de gesprekken die ertoe doen.'
    },
    {
      id: 'linkedin-branding',
      title: 'Linkedin Branding',
      description: 'Versterk jouw persoonlijke merk op Linkedin. Content planning, post scheduling en engagement automation - bouw authority en trek de juiste prospects aan.'
    },
    {
      id: 'ai-agents-automations',
      title: 'AI Agents & Automations',
      description: 'Maatwerk AI-oplossingen voor jouw specifieke uitdagingen. Van proposal generators tot lead qualification - volledig geautomatiseerde workflows die tijd besparen.'
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
      {/* Ambient Background Lighting */}
      <div className="absolute inset-0 z-0" style={{ contain: 'paint', transform: 'translateZ(0)' }}>
        {/* Top-left subtle blue glow */}
        <div 
          className="absolute rounded-full blur-3xl opacity-25" 
          style={{
            top: '15%',
            left: '8%',
            width: '350px',
            height: '250px',
            background: 'radial-gradient(ellipse 350px 250px, rgba(96, 165, 250, 0.3) 0%, rgba(96, 165, 250, 0.2) 50%, transparent 80%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Behind left panel - gentle blue glow */}
        <div 
          className="absolute rounded-full blur-3xl opacity-22" 
          style={{
            top: '35%',
            left: '5%',
            width: '300px',
            height: '400px',
            background: 'radial-gradient(ellipse 300px 400px, rgba(96, 165, 250, 0.25) 0%, rgba(96, 165, 250, 0.15) 70%, transparent 100%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Middle-right pink glow cloud */}
        <div 
          className="absolute rounded-full blur-3xl opacity-15" 
          style={{
            top: '45%',
            right: '10%',
            width: '450px',
            height: '500px',
            background: 'radial-gradient(ellipse 450px 500px, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0.08) 25%, rgba(244, 114, 182, 0.04) 60%, transparent 100%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Bottom-left gentle blue accent */}
        <div 
          className="absolute rounded-full blur-2xl opacity-22" 
          style={{
            bottom: '20%',
            left: '12%',
            width: '240px',
            height: '180px',
            background: 'radial-gradient(ellipse 240px 180px, rgba(96, 165, 250, 0.28) 0%, rgba(96, 165, 250, 0.18) 60%, transparent 80%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Top-right pink glow cloud */}
        <div 
          className="absolute rounded-full blur-3xl opacity-12" 
          style={{
            top: '20%',
            right: '5%',
            width: '400px',
            height: '450px',
            background: 'radial-gradient(ellipse 400px 450px, rgba(236, 72, 153, 0.12) 0%, rgba(236, 72, 153, 0.06) 30%, rgba(244, 114, 182, 0.03) 70%, transparent 100%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Extra gentle blue glow for left panel */}
        <div 
          className="absolute rounded-full blur-3xl opacity-18" 
          style={{
            top: '50%',
            left: '2%',
            width: '200px',
            height: '300px',
            background: 'radial-gradient(ellipse 200px 300px, rgba(96, 165, 250, 0.2) 0%, rgba(96, 165, 250, 0.1) 70%, transparent 100%)',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Top-right pink cloud for features area */}
        <div 
          className="absolute rounded-full blur-3xl opacity-22" 
          style={{
            top: '5%',
            right: '12%',
            width: '380px',
            height: '420px',
            background: 'radial-gradient(ellipse 380px 420px, rgba(236, 72, 153, 0.20) 0%, rgba(236, 72, 153, 0.10) 30%, rgba(244, 114, 182, 0.05) 70%, transparent 100%)',
            mixBlendMode: 'screen'
          }}
        />
      </div>
      
      {/* Subtle overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:grid md:grid-cols-[350px_1fr] md:gap-16 lg:grid-cols-[400px_1fr] lg:gap-28 xl:gap-32 lg:min-h-screen">
          {/* Left Sticky Panel */}
          <div className="sticky top-40 self-start flex items-start justify-start h-fit" style={{bottom: '2rem'}}>
            <div className="max-w-sm pt-12 xl:pt-16 pb-12 xl:pb-16">

              {/* Main Headline */}
              <h2
                className="text-white font-light mb-8"
                style={{
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.025em',
                  fontWeight: '200'
                }}
              >
                <div className="space-y-1">
                  <div style={{ fontWeight: '200' }}>
                    Wat wij bouwen voor
                  </div>
                  <div style={{ fontWeight: '500' }}>
                    marketingbureaus
                  </div>
                </div>
              </h2>

              {/* Description */}
              <p
                className="text-white/90 leading-relaxed text-sm md:text-base lg:text-lg xl:text-lg"
                style={{
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.6'
                }}
              >
                Deze 4 diensten vormen de kern van onze aanpak. Van outbound campagnes tot Linkedin branding. Elk onderdeel specifiek ingericht op jouw B2B groei.
              </p>

              {/* Decorative line */}
              <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent mt-8" />
            </div>
          </div>

          {/* Right Scrollable Features */}
          <div className="py-16 pb-48">
            <div className="space-y-0">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  data-feature-id={feature.id}
                  className="relative py-12 xl:py-16 opacity-100"
                >
                  {/* Feature Layout */}
                  <div className="flex items-center gap-16 xl:gap-20">
                    {/* Left Column - Feature Title */}
                    <div className="w-5/12 xl:w-4/12 flex-shrink-0">
                      <div className="pr-4 xl:pr-6">
                        <h3
                          className="text-white font-normal text-xl md:text-2xl lg:text-3xl xl:text-3xl"
                          style={{
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                            lineHeight: '1.2',
                            letterSpacing: '-0.02em',
                            fontWeight: '400'
                          }}
                        >
                          {feature.id === 'outbound-email' ? (
                            <div className="space-y-1">
                              <div style={{ fontWeight: '200' }}>
                                Outbound Email
                              </div>
                              <div style={{ fontWeight: '500' }}>
                                Campagnes
                              </div>
                            </div>
                          ) : feature.id === 'linkedin-automation' ? (
                            <div className="space-y-1">
                              <div style={{ fontWeight: '200' }}>
                                Linkedin
                              </div>
                              <div style={{ fontWeight: '500' }}>
                                Automation
                              </div>
                            </div>
                          ) : feature.id === 'linkedin-branding' ? (
                            <div className="space-y-1">
                              <div style={{ fontWeight: '200' }}>
                                Linkedin
                              </div>
                              <div style={{ fontWeight: '500' }}>
                                Branding
                              </div>
                            </div>
                          ) : feature.id === 'ai-agents-automations' ? (
                            <div className="space-y-1">
                              <div style={{ fontWeight: '200' }}>
                                AI Agents &
                              </div>
                              <div style={{ fontWeight: '500' }}>
                                Automations
                              </div>
                            </div>
                          ) : (
                            feature.title
                          )}
                        </h3>
                      </div>
                    </div>

                    {/* Right Column - Feature Description */}
                    <div className="w-7/12 xl:w-8/12">
                      <p
                        className="text-white/90 text-sm md:text-base lg:text-lg xl:text-lg"
                        style={{
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          fontWeight: '300',
                          lineHeight: '1.7',
                          letterSpacing: '0.005em'
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature separator line */}
                  {index < features.length - 1 && (
                    <div 
                      className="absolute left-0 right-0 bottom-0 w-full h-px"
                      style={{
                        background: 'linear-gradient(to right, rgba(96, 165, 250, 0) 0%, rgb(96, 165, 250) 20%, rgb(96, 165, 250) 35%, rgb(244, 114, 182) 65%, rgb(244, 114, 182) 80%, rgba(244, 114, 182, 0) 100%)'
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced fade to black at bottom - full width */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

      {/* Mobile Layout */}
      <div className="md:hidden py-16 sm:py-20 pb-48 relative">
        {/* Mobile Ambient Lighting */}
        <div className="absolute inset-0 z-0" style={{ contain: 'paint', transform: 'translateZ(0)' }}>
          {/* Top mobile subtle blue glow */}
          <div 
            className="absolute rounded-full blur-3xl opacity-22" 
            style={{
              top: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '280px',
              height: '200px',
              background: 'radial-gradient(ellipse 280px 200px, rgba(96, 165, 250, 0.25) 0%, rgba(96, 165, 250, 0.15) 60%, transparent 80%)',
              mixBlendMode: 'screen'
            }}
          />
          
          {/* Middle mobile pink glow cloud */}
          <div 
            className="absolute rounded-full blur-3xl opacity-12" 
            style={{
              top: '50%',
              right: '5%',
              width: '350px',
              height: '400px',
              background: 'radial-gradient(ellipse 350px 400px, rgba(236, 72, 153, 0.12) 0%, rgba(236, 72, 153, 0.06) 30%, rgba(244, 114, 182, 0.03) 70%, transparent 100%)',
              mixBlendMode: 'screen'
            }}
          />
          
          {/* Bottom mobile gentle blue glow */}
          <div 
            className="absolute rounded-full blur-2xl opacity-20" 
            style={{
              bottom: '15%',
              left: '15%',
              width: '220px',
              height: '160px',
              background: 'radial-gradient(ellipse 220px 160px, rgba(96, 165, 250, 0.25) 0%, rgba(96, 165, 250, 0.15) 70%, transparent 85%)',
              mixBlendMode: 'screen'
            }}
          />
          
          {/* Extra mobile pink glow cloud for header */}
          <div 
            className="absolute rounded-full blur-3xl opacity-10" 
            style={{
              top: '25%',
              left: '5%',
              width: '280px',
              height: '330px',
              background: 'radial-gradient(ellipse 280px 330px, rgba(236, 72, 153, 0.10) 0%, rgba(236, 72, 153, 0.05) 35%, rgba(244, 114, 182, 0.025) 75%, transparent 100%)',
              mixBlendMode: 'screen'
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
              Wat wij bouwen voor marketingbureaus
            </h2>

            {/* Description */}
            <p
              className="text-white/90 leading-relaxed max-w-2xl"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)',
                fontWeight: '400',
                lineHeight: '1.6'
              }}
            >
              Deze 4 diensten vormen de kern van onze aanpak. Van outbound campagnes tot Linkedin branding. Elk onderdeel specifiek ingericht op jouw B2B groei.
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
                  <div className="mb-3">
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
                    className="text-white/95"
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
                <div 
                  className="w-full h-px mt-12 sm:mt-16"
                  style={{
                    background: 'linear-gradient(to right, rgba(96, 165, 250, 0) 0%, rgb(96, 165, 250) 20%, rgb(96, 165, 250) 35%, rgb(244, 114, 182) 65%, rgb(244, 114, 182) 80%, rgba(244, 114, 182, 0) 100%)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingBureauServicesSection;