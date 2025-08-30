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

  // Lead Engine - Combined Service
  const services = [
    {
      id: 'lead-engine',
      icon: Database,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Lead Engine
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Complete Outbound Automatisering
          </div>
        </div>
      ),
      subtitle: 'Van lead database tot geboekte meeting - volledig geautomatiseerd',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Een complete outbound machine die alles combineert wat je nodig hebt: 100k+ geverifieerde beslissers uit onze database, AI-personalisatie via email én LinkedIn, automatische follow-up en meeting booking. Van prospect tot afspraak - volledig hands-off.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-950/15 to-black',
      accentColor: 'from-blue-400 via-purple-500 to-pink-500',
      primaryButtonText: 'Ontdek alle mogelijkheden',
      secondaryButtonText: 'Ontdek alle mogelijkheden',
      primaryButtonAction: () => window.location.href = '/lead-engine',
      secondaryButtonAction: () => window.location.href = '/lead-engine',
      number: '01',
      highlight: 'Complete outbound workflow',
      metrics: '100k+ leads • AI-personalisatie • Auto follow-up'
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