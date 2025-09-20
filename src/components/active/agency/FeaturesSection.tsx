import { MessageSquare, Cog, Brain, Linkedin, Sparkles } from 'lucide-react';
import ServiceSection from '../../legacy/ServiceSection';
import { useState, useEffect } from 'react';

const FeaturesSection = () => {
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

  // Agency AI Agents Services
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
      primaryButtonAction: () => window.location.href = '/contact',
      secondaryButtonAction: () => window.location.href = '/contact',
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
      primaryButtonAction: () => window.location.href = '/contact',
      secondaryButtonAction: () => window.location.href = '/contact',
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
      primaryButtonAction: () => window.location.href = '/contact',
      secondaryButtonAction: () => window.location.href = '/contact',
      number: '03',
      highlight: 'Hogere retentie',
      metrics: 'ROI: 2-4 maanden'
    },
    {
      id: 'linkedin-outreach-agent',
      icon: Linkedin,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Connect & Convert
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            LinkedIn Outreach Agent
          </div>
        </div>
      ),
      subtitle: 'Vindt, kwalificeert en benadert automatisch leads',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Met Connect & Convert vindt de AI automatisch de juiste prospects voor jouw business op LinkedIn. Hyper-gepersonaliseerde berichten worden verstuurd op het perfecte moment, met AI-gestuurde follow-ups die voelen als authentieke gesprekken. Van prospectie tot eerste gesprek - volledig geautomatiseerd en geïntegreerd met je CRM.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-500 to-indigo-600',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      primaryButtonAction: () => window.location.href = '/agents-automations/connect-and-convert',
      secondaryButtonAction: () => window.location.href = '/agents-automations/connect-and-convert',
      number: '04',
      highlight: 'AI prospectie',
      metrics: 'ROI: 1-2 maanden'
    },
    {
      id: 'custom-agent',
      icon: Sparkles,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Custom Solutions
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Maatwerk AI Agent
          </div>
        </div>
      ),
      subtitle: 'Jouw wildste automatiseringsdromen worden realiteit',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Denk je aan een workflow die te complex lijkt om te automatiseren? Challenge accepted. We duiken diep in jouw proces, ontrafelen de complexiteit en bouwen een AI-systeem dat je collega\'s versteld doet staan. Van onmogelijk geachte integraties tot volledig futuristische workflows - geen uitdaging is te groot. In één strategiesessie ontdekken we samen wat mogelijk is en maken we het onmogelijke mogelijk.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-purple-900/15 to-black',
      accentColor: 'from-pink-400 via-purple-400 to-blue-500',
      primaryButtonText: 'Plan strategiesessie',
      secondaryButtonText: 'Plan strategiesessie',
      primaryButtonAction: () => window.location.href = '/contact',
      secondaryButtonAction: () => window.location.href = '/contact',
      number: '05',
      highlight: 'Het onmogelijke mogelijk',
      metrics: 'ROI: 2-6 maanden'
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
    <div id="agency-diensten" className="relative bg-black ambient">
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

export default FeaturesSection;