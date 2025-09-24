import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ArrowUp } from 'lucide-react';

interface ServiceSection {
  id: string;
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

const servicesData: ServiceSection[] = [
  {
    id: 'strategy',
    title: 'STRATEGY',
    items: [
      {
        title: 'AI Agents & Automatisering',
        description: 'Custom LinkedIn agents, proposal generators, lead processing workflows die 24/7 voor je werken. Van eerste contact tot gesloten deal - volledig geautomatiseerd.'
      },
      {
        title: 'Platform Integration Strategy',
        description: 'Seamless integratie in Buildrs platform of standalone deployment. Kies voor hosted oplossing met dashboards of exportable workflows die je zelf kunt beheren.'
      },
      {
        title: 'ROI Optimalisatie & Analytics',
        description: 'Data-driven insights, performance tracking, conversion optimization. Proprietary analytics platforms voor real-time insights en benchmarking tegen industrie standards.'
      }
    ]
  },
  {
    id: 'studio',
    title: 'STUDIO',
    items: [
      {
        title: 'Custom Workflow Development',
        description: 'Maatwerk AI agents gebouwd met n8n, moderne APIs en cutting-edge automation tools. Van concept tot productie-ready workflow in 1-2 weken.'
      },
      {
        title: 'Platform Development',
        description: 'Lead Engine, Marketing Engine, CRM modules - scalable SaaS componenten die groeien met jouw business. Multi-tenant architectuur voor enterprise-level performance.'
      },
      {
        title: 'Technical Implementation',
        description: 'Database setup, API integraties, deployment pipelines. Volledige technical handover met documentatie en training voor jouw team.'
      }
    ]
  },
  {
    id: 'web-development',
    title: 'WEB & DEVELOPMENT',
    items: [
      {
        title: 'Modern Web Applications',
        description: 'React, TypeScript, Astro websites met premium performance. Server-side rendering, optimized loading strategies en Apple-level attention to detail.'
      },
      {
        title: 'AI-Powered Interfaces',
        description: 'Chat interfaces, automation dashboards, interactive workflows. User experiences die complex workflows simpel en intuïtief maken.'
      },
      {
        title: 'Performance Optimization',
        description: 'Advanced loading strategies, premium UX patterns, mobile-first design. Websites die laden als professionele software - geen compromissen.'
      }
    ]
  },
  {
    id: 'digital-campaigns',
    title: 'DIGITAL CAMPAIGNS & MEDIA',
    items: [
      {
        title: 'AI Content Generation',
        description: 'Automated blog posts, social media content, email sequences. 10x sneller content productie met AI-driven workflows en brand-consistent output.'
      },
      {
        title: 'Marketing Automation',
        description: 'End-to-end lead nurturing, email sequences, social media automation. Van eerste touchpoint tot customer onboarding - volledig geautomatiseerd.'
      },
      {
        title: 'Analytics & Growth Tracking',
        description: 'ROI tracking, conversion analysis, growth metrics dashboards. Real-time insights in customer journey en conversion optimization opportunities.'
      }
    ]
  }
];

const ServicesAccordion = () => {
  const [expandedSection, setExpandedSection] = useState<string>('strategy');
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? '' : sectionId);
  };

  return (
    <section className="relative w-full bg-black py-16 lg:py-24">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-32 bg-gradient-radial from-blue-500/40 via-blue-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-28 bg-gradient-radial from-purple-500/30 via-purple-500/15 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        {/* Services Accordion */}
        <div className="space-y-8 lg:space-y-12">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="border-b border-gray-800/50 pb-8 lg:pb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(service.id)}
                className="w-full flex items-center justify-between group cursor-pointer py-4 hover:bg-gray-900/20 rounded-lg transition-colors duration-300"
              >
                <h2 
                  className="text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight text-left group-hover:text-gray-200 transition-colors duration-300"
                  style={{
                    fontFamily: "'Neue Haas Grotesk Display Pro', 'Helvetica Neue', 'Arial Nova', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    textRendering: 'optimizeLegibility',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                >
                  {service.title}
                </h2>
                
                <motion.div
                  animate={{ rotate: expandedSection === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="ml-6 text-white group-hover:text-gray-300 transition-colors duration-300"
                >
                  {expandedSection === service.id ? (
                    <ChevronUp size={32} strokeWidth={1.5} />
                  ) : (
                    <ChevronDown size={32} strokeWidth={1.5} />
                  )}
                </motion.div>
              </button>

              {/* Section Content */}
              <AnimatePresence>
                {expandedSection === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 pb-4 space-y-8">
                      {service.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1, 
                            ease: [0.16, 1, 0.3, 1] 
                          }}
                          className="max-w-4xl"
                        >
                          <h3 
                            className="text-xl lg:text-2xl text-white font-medium mb-3"
                            style={{
                              fontFamily: "'Neue Haas Grotesk Display Pro', 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                              fontWeight: 500
                            }}
                          >
                            {item.title}:
                          </h3>
                          <p 
                            className="text-lg lg:text-xl text-gray-300 leading-relaxed"
                            style={{
                              fontFamily: "'Neue Haas Grotesk Display Pro', 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                              fontWeight: 300,
                              lineHeight: 1.6
                            }}
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-4 transition-colors duration-300 group"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <ArrowUp size={20} className="text-white group-hover:text-gray-200 transition-colors duration-300" />
            <span className="sr-only">Back to top</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Section fade effects */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-20" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.2) 85%, transparent 100%)'}} />
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20" style={{background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.2) 85%, transparent 100%)'}} />
    </section>
  );
};

export default ServicesAccordion;