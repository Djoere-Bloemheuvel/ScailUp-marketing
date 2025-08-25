import { MessageSquare, Cog, Brain, Clock, TrendingUp } from 'lucide-react';
import ServiceSection from './ServiceSection';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AgentsWalkthrough = () => {
  const [isVisible, setIsVisible] = useState({
    0: false,
    1: false,
    2: false
  });

  useEffect(() => {
    // Simulate visibility for all services
    setIsVisible({ 0: true, 1: true, 2: true });
  }, []);

  // AgentsWalkthrough services using exact ServiceSection structure
  const services = [
    {
      id: 'lead-agent',
      icon: MessageSquare,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Speed to Lead
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Inbound Lead Agent
          </div>
        </div>
      ),
      subtitle: '',
      description: 'Jouw digitale sales assistent die nooit slaapt. Studies tonen aan: respons binnen 60 seconden verhoogt conversie met 391%. Onze AI vangt elke lead op, kwalificeert automatisch en plant afspraken in je agenda.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-400 to-purple-500',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Start nu',
      number: '01',
      highlight: '391% meer conversie',
      metrics: 'ROI: 1-3 maanden'
    },
    {
      id: 'proposal-agent',
      icon: Cog,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Seal The Deal
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Smart Deal Agent
          </div>
        </div>
      ),
      subtitle: 'Van prospect naar gewonnen deal in één gestroomlijnde flow',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Genereert voorstellen direct vanuit CRM-data, stuurt automatisch naar prospects en volgt op bij stilte. AI analyseert gedrag en optimaliseert timing voor maximale conversie. Sneller closen, meer deals en hogere values.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-purple-900/20 to-black',
      accentColor: 'from-blue-500 to-purple-600',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Start nu',
      number: '02',
      highlight: '65% sneller closen',
      metrics: 'ROI: 2-4 maanden'
    },
    {
      id: 'onboarding-agent',
      icon: Brain,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Onboard & Beyond
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Seamless Onboarding Agent
          </div>
        </div>
      ),
      subtitle: 'Sterke start = hogere retentie & snellere upsells',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Stuurt nieuwe klanten een gepersonaliseerd onboardingtraject, plant kick-off calls en zorgt dat documenten tijdig afgerond worden. AI monitort voortgang en escaleert waar nodig. Snellere time-to-value en meer upsell kansen.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-600 to-purple-700',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Start nu',
      number: '03',
      highlight: 'Hogere retentie',
      metrics: 'ROI: 2-4 maanden'
    }
  ];

  const cssStyles = `
    @keyframes sweep {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(100%); }
    }
  `;

  return (
    <div id="agents-walkthrough" className="relative bg-black ambient">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      {/* Ambient Background Lights - exact copy from Services */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="backlight backlight-left bg-scailup-blue"></div>
        <div className="backlight backlight-right bg-purple-600"></div>
        <div className="backlight backlight-center bg-scailup-blue opacity-30"></div>
      </div>

      {/* Header - exact copy from Services walkthrough mode */}
      <div className="relative z-10 text-center py-20 lg:py-32">
        <motion.div 
          className="inline-flex items-center gap-3 mb-12 px-8 py-4 bg-gradient-to-r from-blue-500/5 via-purple-500/8 to-purple-600/5 rounded-full border border-blue-400/20 backdrop-blur-xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-200/90 font-semibold text-base tracking-wide uppercase">Onze Populairste Automatiseringen</span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Kies wat bij
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 bg-clip-text text-transparent font-medium">
            jou past
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-lg lg:text-xl text-blue-200/70 max-w-3xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
        >
          Start met eenvoudige chatbots of ga direct voor <span className="text-blue-300 font-medium">volledige automatisering</span>. 
          Wij adviseren wat het beste bij jouw bedrijf past.
        </motion.p>
      </div>

      {/* Services - using exact ServiceSection component */}
      <div className="relative z-10">
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
            isVisible={isVisible[index as keyof typeof isVisible]}
            walkthrough={false}
          />
        ))}
      </div>

      {/* CTA - exact copy from original AgentsWalkthrough */}
      <div className="relative z-10">
        <motion.div 
          className="text-center mt-20 pb-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.button
            className="group relative inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full overflow-hidden text-lg will-change-transform"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Start jouw automatisering</span>
            <svg className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AgentsWalkthrough;