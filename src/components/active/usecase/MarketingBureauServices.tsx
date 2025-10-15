import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Bot, Target, Users, TrendingUp, ChevronDown, CheckCircle2 } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  isPrimary: boolean;
}

const MarketingBureauServices = () => {
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    const checkReducedMotion = () => {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    checkIsMobile();
    checkReducedMotion();
    
    window.addEventListener('resize', checkIsMobile);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      mediaQuery.removeEventListener('change', checkReducedMotion);
    };
  }, []);

  const services = [
    {
      title: "Email Outbound Automation",
      description: "De basis van scalable lead generatie - geautomatiseerde campagnes die werken.",
      visual: "email-automation",
      phase: "PRIMARY",
      isPrimary: true,
      icon: Mail,
      expandedContent: {
        subtitle: "500+ prospects per week bereiken",
        duration: "15-25% open rates consistent",
        steps: [
          { icon: Target, title: "Prospect Targeting", description: "Identificeer en bereik jouw ideale klanten met laser-scherpe targeting en personalisatie" },
          { icon: Mail, title: "Multi-Touch Sequences", description: "Geautomatiseerde follow-up campaigns die prospects warm maken tot ze klaar zijn voor een gesprek" },
          { icon: CheckCircle2, title: "GDPR Compliant", description: "Volledig compliant met alle privacy wetgeving - geen zorgen over juridische risico's" },
          { icon: TrendingUp, title: "Meetbare Resultaten", description: "Real-time dashboards die exact laten zien hoeveel leads, meetings en deals je genereert" }
        ]
      }
    },
    {
      title: "LinkedIn Lead Generation", 
      description: "Premium prospects bereiken met persoonlijke LinkedIn automation.",
      visual: "linkedin-automation",
      phase: "PRIMARY",
      isPrimary: true,
      icon: Linkedin,
      expandedContent: {
        subtitle: "100+ nieuwe connecties per week",
        duration: "40%+ acceptance rate gemiddeld",
        steps: [
          { icon: Users, title: "Decision Maker Access", description: "Direct contact met C-level executives en decision makers in jouw target markt" },
          { icon: Linkedin, title: "Smart Outreach", description: "Gepersonaliseerde connection requests en messages die persoonlijk aanvoelen" },
          { icon: Target, title: "Premium Targeting", description: "Geavanceerde filters om exact de juiste prospects te vinden op LinkedIn" },
          { icon: TrendingUp, title: "Relationship Building", description: "Langdurige relaties opbouwen die leiden tot hogere deal values" }
        ]
      }
    },
    {
      title: "AI Process Automation",
      description: "Intelligente workflows die tijd besparen en efficiency verhogen.",
      visual: "ai-automation",
      phase: "SECONDARY",
      isPrimary: false,
      icon: Bot,
      expandedContent: {
        subtitle: "70% tijdsbesparing op admin taken",
        duration: "Meer focus op strategie en groei",
        steps: [
          { icon: Bot, title: "Lead Qualification", description: "AI beoordeelt automatisch welke leads de meeste kans hebben om te converteren" },
          { icon: CheckCircle2, title: "Appointment Scheduling", description: "Automatische agenda integratie die meetings plant zonder heen-en-weer emailen" },
          { icon: Target, title: "Proposal Generation", description: "Smart templates die automatisch proposals genereren op basis van klant data" },
          { icon: TrendingUp, title: "Workflow Optimization", description: "Continu lerende systemen die jouw processen steeds efficiënter maken" }
        ]
      }
    }
  ];

  // Auto-rotate through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(current => {
        const currentIndex = services.findIndex(s => s.id === current);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeServiceData = services.find(s => s.id === activeService) || services[0];

  return (
    <section 
      id="services"
      className="relative bg-gradient-to-br from-black via-gray-900/50 to-black py-24 lg:py-32"
      data-section-theme="dark"
      data-section-accent="blue"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(96, 165, 250, 0.2) 0%, transparent 50%)`
             }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-8"
          >
            <Target className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium text-sm tracking-wide uppercase">
              Lead Generatie Oplossingen
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-white font-light mb-6"
            style={{ 
              fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontSize: 'clamp(2rem, 4vw + 1rem, 3.5rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.045em',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            Van prospect tot{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              paying client
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Een complete toolkit voor scalable lead generatie die jouw marketing bureau naar het volgende niveau tilt
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className={`relative p-6 lg:p-8 rounded-2xl border cursor-pointer transition-all duration-500 ${
                  activeService === service.id
                    ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-400/30 shadow-2xl shadow-blue-500/10'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8'
                } ${service.isPrimary ? 'ring-1 ring-blue-400/20' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                {/* Priority Badge */}
                {service.isPrimary && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Primary Focus
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    activeService === service.id 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-white/10 text-gray-400'
                  } transition-colors duration-300`}>
                    {service.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      activeService === service.id ? 'text-blue-300' : 'text-white'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-blue-200/80 font-medium mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Service Details */}
          <motion.div
            key={activeServiceData.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-10"
          >
            <div className="flex items-center mb-6">
              <div className="p-4 bg-blue-500/20 text-blue-300 rounded-xl mr-4">
                {activeServiceData.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {activeServiceData.title}
                </h3>
                <p className="text-blue-300 font-medium">
                  {activeServiceData.subtitle}
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {activeServiceData.description}
            </p>

            <div className="space-y-4">
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                Resultaten die je kunt verwachten
              </h4>
              {activeServiceData.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
        >
          {[
            { number: '400%', label: 'Meer leads gemiddeld' },
            { number: '2.5K', label: 'Connecties per maand' },
            { number: '70%', label: 'Tijdsbesparing' },
            { number: '15-25%', label: 'Email open rates' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingBureauServices;