import { Mail, Users, Building, Database, DollarSign } from 'lucide-react';
import ServiceSection from './ServiceSection';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LeadEngineFeatures = () => {
  const [isVisible, setIsVisible] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  });

  useEffect(() => {
    // Simulate visibility for all services
    setIsVisible({ 0: true, 1: true, 2: true, 3: true, 4: true });
  }, []);

  // AgentsWalkthrough services using exact ServiceSection structure
  const services = [
    {
      id: 'inbox-to-meeting',
      icon: Mail,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Inbox to Meeting
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Outbound Email Agent
          </div>
        </div>
      ),
      subtitle: 'Van cold email naar gekwalificeerde meetings',
      subtitleStyle: 'text-gray-300 font-bold tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Deze agent maakt van outbound e-mail een voorspelbare meeting-machine. Hij doet al het werk door prospects te zoeken, persoonlijke mails te schrijven, te testen wat werkt, reacties op te volgen en afspraken direct in je agenda te zetten. Volledig op de automatische piloot.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-400 to-blue-500',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      primaryButtonAction: () => window.location.href = '/lead-engine/inbox-to-meeting',
      secondaryButtonAction: () => window.location.href = '/lead-engine/inbox-to-meeting',
      number: '01',
      highlight: 'Autonome email-to-meeting',
      metrics: 'End-to-end geautomatiseerd'
    },
    {
      id: 'connect-to-client',
      icon: Users,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Connect to Client
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-700 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            LinkedIn Outreach Agent
          </div>
        </div>
      ),
      subtitle: 'Van connectieverzoek naar warme klantrelatie',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Deze agent doet veel meer dan uitnodigingen sturen. Hij vindt altijd de juiste mensen, schrijft berichten die persoonlijk aanvoelen en zet gesprekken natuurlijk door tot een afspraak in je agenda. Ondertussen groeit je netwerk automatisch met waardevolle connecties.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      primaryButtonAction: () => window.location.href = '/lead-engine/connect-to-client',
      secondaryButtonAction: () => window.location.href = '/lead-engine/connect-to-client',
      number: '02',
      highlight: 'Authentieke LinkedIn outreach',
      metrics: 'Menselijk op schaal'
    },
    {
      id: 'account-to-deal',
      icon: Building,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Account to Deal
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Account-Based Marketing Agent
          </div>
        </div>
      ),
      subtitle: 'Van losse leads naar strategische accounts',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Deze agent gaat verder dan één contact. Hij kijkt naar het hele bedrijf, onderzoekt wat er speelt en benadert meerdere beslissers tegelijk met persoonlijke berichten. Van CFO tot Marketing Director. Iedereen krijgt een boodschap die écht aansluit. Zo open je niet één deur, maar het hele kantoor.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-400 to-indigo-500',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      primaryButtonAction: () => window.location.href = '/lead-engine/account-to-deal',
      secondaryButtonAction: () => window.location.href = '/lead-engine/account-to-deal',
      number: '03',
      highlight: 'AI-gedreven ABM',
      metrics: 'Multithreading op schaal'
    },
    {
      id: 'lead-database',
      icon: Database,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Lead Database
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Smart Audience Builder
          </div>
        </div>
      ),
      subtitle: 'Van losse lijsten naar een levende doelgroep',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'De Lead Database bevat 100.000+ beslissers die continu worden verrijkt en opgeschoond. Leads kun je handmatig of automatisch omzetten naar contacten, die direct klaarstaan voor campagnes via e-mail, LinkedIn of ABM. Zo heb je altijd de juiste mensen, zonder te werken met statische lijsten.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-950/20 to-black',
      accentColor: 'from-blue-300 to-blue-500',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      primaryButtonAction: () => window.location.href = '/lead-engine/lead-database',
      secondaryButtonAction: () => window.location.href = '/lead-engine/lead-database',
      number: '04',
      highlight: 'Levende doelgroep-motor',
      metrics: '100k+ decision makers'
    },
    {
      id: 'sales-engine',
      icon: DollarSign,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Sales Engine
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Plug & Play Agents
          </div>
        </div>
      ),
      subtitle: 'Van Lead Engine naar Sales Engine',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'De Lead Engine levert je een constante stroom aan prospects, de Sales Engine zet ze om in klanten. Met een AI-first CRM als fundament en uitbreidbare Plug & Play Agents verandert je leadgeneratie in een volledig geautomatiseerd salesproces dat flexibel met je meegroeit.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/10 to-black',
      accentColor: 'from-blue-600 to-blue-400',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      primaryButtonAction: () => window.location.href = '/sales-engine',
      secondaryButtonAction: () => window.location.href = '/sales-engine',
      number: '05',
      highlight: 'Complete sales omgeving',
      metrics: 'Plug & Play agents'
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

export default LeadEngineFeatures;