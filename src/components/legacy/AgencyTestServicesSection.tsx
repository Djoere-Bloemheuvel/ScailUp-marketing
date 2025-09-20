import { Users, Building, Target, Database, DollarSign, Briefcase, Zap } from 'lucide-react';
import ServiceSection from './ServiceSection';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AgencyTestServicesSection = () => {
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

  // Agency Services - custom automation solutions using numbered approach
  const services = [
    {
      id: 'lead-qualification-automation',
      icon: Target,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Smart Lead Qualifier
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Custom Lead Scoring System
          </div>
        </div>
      ),
      subtitle: 'Van 40 uur handmatig sorteren naar 2 minuten per dag',
      subtitleStyle: 'text-gray-300 font-bold tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Jouw verkopers verdrinken in onbruikbare leads. 80% van je tijd gaat naar slechte prospects. Wij bouwen een systeem dat elke inkomende lead automatisch scoort en routeert. Alleen warme prospects komen bij je sales team. Volledig geïntegreerd met je CRM voor directe opvolging.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-blue-950/20 to-black',
      accentColor: 'from-blue-300 to-blue-500',
      primaryButtonText: 'Ja, bouw dit voor ons',
      secondaryButtonText: 'Toon ROI berekening',
      primaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/contact'; },
      secondaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/contact'; },
      number: '01',
      highlight: '300% meer qualified meetings',
      metrics: 'ROI: 2-3 maanden'
    },
    {
      id: 'follow-up-automation',
      icon: Zap,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Follow-up Autopilot
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Automated Prospect Nurturing
          </div>
        </div>
      ),
      subtitle: 'Verlies nooit meer een prospect door vergeten follow-ups',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Elke dag vallen €500+ aan potentiële deals door de mazen. Prospects die interesse hadden maar vergeten werden. Wij bouwen een systeem dat elke prospect automatisch warm houdt. Gepersonaliseerde sequences, perfecte timing, tot ze kopen of definitief afvallen.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-purple-950/20 to-black',
      accentColor: 'from-purple-300 to-purple-500',
      primaryButtonText: 'Ja, bouw dit voor ons',
      secondaryButtonText: 'Bekijk voorbeelden',
      primaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/contact'; },
      secondaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/contact'; },
      number: '02',
      highlight: '40% meer conversie',
      metrics: 'ROI: 1-3 maanden'
    },
    {
      id: 'client-onboarding-system',
      icon: Users,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Onboarding Accelerator
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Seamless Client Setup
          </div>
        </div>
      ),
      subtitle: 'Van 2 weken chaos naar 2 dagen perfectie',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Nieuwe klanten wachten weken op hun setup. Jouw team verzuipt in onboarding taken. Churn stijgt omdat klanten gefrustreerd raken. Wij automatiseren het complete proces. Klanten zijn binnen 48 uur live, satisfaction stijgt met 60%, jouw team heeft 80% minder werk.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-green-950/20 to-black',
      accentColor: 'from-green-300 to-emerald-400',
      primaryButtonText: 'Ja, bouw dit voor ons',
      secondaryButtonText: 'Bereken tijdbesparing',
      primaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/contact'; },
      secondaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/contact'; },
      number: '03',
      highlight: '80% minder handmatig werk',
      metrics: 'ROI: 2-4 maanden'
    },
    {
      id: 'data-integration-hub',
      icon: Database,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Data Sync Engine
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1">
            Multi-Platform Integration
          </div>
        </div>
      ),
      subtitle: 'Stop met 15 uur per week handmatig data kopiëren',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Jouw team kopiëert dagelijks data tussen CRM, marketing tools, boekhouding, analytics. Fouten stapelen zich op, overzicht verdwijnt, beslissingen worden uitgesteld. Wij connecteren alles automatisch. Real-time sync, geen fouten meer, één waarheid.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-pink-950/20 to-black',
      accentColor: 'from-pink-300 to-rose-400',
      primaryButtonText: 'Ja, bouw dit voor ons',
      secondaryButtonText: 'Check compatibiliteit',
      primaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/contact'; },
      secondaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/contact'; },
      number: '04',
      highlight: '95% minder fouten',
      metrics: 'ROI: 1-2 maanden'
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
    <div id="agency-services" className="relative bg-black ambient">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      {/* Ambient Background Lights - same as agents walkthrough */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="backlight backlight-left bg-scailup-blue"></div>
        <div className="backlight backlight-right bg-purple-600"></div>
        <div className="backlight backlight-center bg-scailup-blue opacity-30"></div>
      </div>

      {/* Header - inspired by agents walkthrough */}
      <div className="relative z-10 text-center py-16 lg:py-20 px-4 lg:px-8 max-w-7xl mx-auto">
        
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 leading-[0.9] tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Custom Built{' '}
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 bg-clip-text text-transparent font-medium">
            Solutions
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto font-normal leading-relaxed mt-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
        >
          Volledig op maat ontwikkeld voor jouw bedrijfsprocessen. Werkend binnen 4-6 weken.
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

export default AgencyTestServicesSection;