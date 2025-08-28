import { Mail, Users, Building, Database, DollarSign } from 'lucide-react';
import ServiceSection from './ServiceSection';
import { useState, useEffect } from 'react';

const TestServicesSection = () => {
  const [isVisible, setIsVisible] = useState({
    0: false,
    1: false,
    2: false,
    3: false
  });

  useEffect(() => {
    // Simulate visibility for all services
    setIsVisible({ 0: true, 1: true, 2: true, 3: true });
  }, []);

  // Lead Engine Features services - Lead Database first, Sales Engine removed
  const services = [
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
      subtitle: 'Het fundament: 100k+ beslissers klaar voor contact',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Een levendige database van 100.000+ geverifieerde beslissers die constant wordt bijgewerkt. Automatisch gefilterd op jouw ideale klantprofiel. De juiste mensen staan klaar voor outreach.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-950/20 to-black',
      accentColor: 'from-blue-300 to-blue-500',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      primaryButtonAction: () => window.location.href = '/lead-engine/lead-database',
      secondaryButtonAction: () => window.location.href = '/lead-engine/lead-database',
      number: '01',
      highlight: 'Levende doelgroep-motor',
      metrics: '100k+ decision makers'
    },
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
      subtitle: 'Stap 1: Massa-personalisatie via email',
      subtitleStyle: 'text-gray-300 font-bold tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Pakt automatisch prospects uit de database, schrijft hyper-gepersonaliseerde emails en verstuurt ze op het optimale moment. Reacties worden opgevolgd tot er een afspraak in je agenda staat.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-400 to-blue-500',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      primaryButtonAction: () => window.location.href = '/lead-engine/inbox-to-meeting',
      secondaryButtonAction: () => window.location.href = '/lead-engine/inbox-to-meeting',
      number: '02',
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
      subtitle: 'Stap 2: Netwerk uitbreiden via LinkedIn',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Dezelfde prospects worden parallel benaderd via LinkedIn met authentieke connectieverzoeken. Bouwt systematisch relaties op en creëert vertrouwen. Veel prospects reageren beter op LinkedIn dan email.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      primaryButtonAction: () => window.location.href = '/lead-engine/connect-to-client',
      secondaryButtonAction: () => window.location.href = '/lead-engine/connect-to-client',
      number: '03',
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
            Key Account Agent
          </div>
        </div>
      ),
      subtitle: 'Stap 3: Key accounts strategisch benaderen',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Identificeert de meest waardevolle bedrijven en benadert meerdere stakeholders tegelijk met gecoördineerde campagnes. Zorgt ervoor dat je het hele bedrijf omsingelt met multithreading op enterprise niveau.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-400 to-indigo-500',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      primaryButtonAction: () => window.location.href = '/lead-engine/account-to-deal',
      secondaryButtonAction: () => window.location.href = '/lead-engine/account-to-deal',
      number: '04',
      highlight: 'AI-gedreven ABM',
      metrics: 'Multithreading op schaal'
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
    <div id="test-services" className="relative bg-black ambient">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      {/* Ambient Background Lights - exact copy from LeadEngineFeatures */}
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

export default TestServicesSection;