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
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Inbound Lead Agent
          </div>
        </div>
      ),
      subtitle: 'Vangt elke lead op het perfecte moment',
      subtitleStyle: 'text-gray-300 font-bold tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Met Speed to Lead reageer je binnen minuten op nieuwe leads met een persoonlijk bericht, precies wanneer ze nog warm zijn. Je krijgt direct een overzicht van hun bedrijf en achtergrond, zodat je opvolging voelt alsof je al uren research hebt gedaan. Volledig geautomatiseerd en geïntegreerd met je CRM, voor directe opvolging en tot 391% meer conversie.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-purple-900/20 to-black',
      accentColor: 'from-purple-500 to-pink-600',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
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
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Smart Deal Agent
          </div>
        </div>
      ),
      subtitle: 'Sluit deals terwijl ze nog warm zijn',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Met Seal The Deal stuur je direct na je salescall een professioneel document met voorstel, contract en betaallink. Op basis van een paar inputs wordt dit volledig automatisch gegenereerd, terwijl er tegelijk een overzichtelijk verslag in je CRM wordt gelogd. Onze AI neemt de opvolging uit handen, houdt leads warm en helpt je deals sneller vooruit.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
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
      description: 'Met Onboard & Beyond krijgt elke nieuwe klant direct een persoonlijk welkomstpakket en onboardingplan, volledig automatisch en in jouw branding. Alle informatie wordt meteen verwerkt in je CRM en projectomgeving, zodat je zonder vertraging kunt starten. Zo creëer je een vlekkeloze onboarding die vertrouwen wekt en elke samenwerking vanaf dag één professioneel laat beginnen.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-600 to-purple-700',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
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
        
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-[0.9] tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
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

    </div>
  );
};

export default AgentsWalkthrough;