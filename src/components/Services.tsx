import { Mail, Users, Target, Brain, Send, Globe } from 'lucide-react';
import ServiceSection from './ServiceSection';

interface ServicesProps {
  blueTheme?: boolean;
  walkthrough?: boolean;
}

const Services = ({ blueTheme = false, walkthrough = false }: ServicesProps) => {
  // ScailUp Outbound Agency Services - 3 core services

  // Define blue theme variations
  const blueThemeColors = {
    'lead-engine': 'from-blue-500 to-blue-400',
    'sales-engine': 'from-blue-600 to-cyan-500', 
    'marketing-engine': 'from-blue-400 to-blue-300',
    'agents-automations': 'from-blue-500 to-indigo-600'
  };

  // Walkthrough mode services for Lead Engine page
  const walkthroughServices = [
    {
      id: 'step-1',
      icon: Target,
      number: '01',
      title: 'Jouw doelgroep in 1 klik',
      subtitle: 'Precisie targeting zonder gedoe',
      description: 'AI segmenteert je markt en zorgt voor accurate targeting. 500.000+ verified decision makers beschikbaar. Geen spray & pray — alleen prospects die willen luisteren.',
      highlight: '98% data accuracy',
      metrics: '2 min setup',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-500 to-blue-400',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer'
    },
    {
      id: 'step-2',
      icon: Brain,
      number: '02',
      title: 'Campagnes automatisch aangemaakt',
      subtitle: 'AI doet het zware werk',
      description: 'Onze AI analyseert jouw bedrijf en stelt proposities & berichten voor. Jij bepaalt of je ze aanpast of direct live zet. Hyper-gepersonaliseerd en schaalbaar.',
      highlight: '30 sec generatie tijd',
      metrics: 'GPT-4 powered',
      background: 'from-premium-black via-blue-900/15 to-premium-black',
      accentColor: 'from-blue-600 to-cyan-500',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer'
    },
    {
      id: 'step-3',
      icon: Mail,
      number: '03',
      title: 'Multi-channel outreach',
      subtitle: 'Email, LinkedIn & ABM op autopilot',
      description: 'De AI koppelt de juiste leads aan de juiste campagnes. Multi-channel sequences draaien 24/7. Gepersonaliseerd, schaalbaar en volledig spamvrij.',
      highlight: '85% deliverability',
      metrics: '12% response rate',
      background: 'from-premium-black via-blue-950/20 to-premium-black',
      accentColor: 'from-blue-400 to-blue-300',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer'
    },
    {
      id: 'step-4',
      icon: Users,
      number: '04',
      title: 'Meetings automatisch geboekt',
      subtitle: 'Van reactie naar agenda in seconden',
      description: 'Reacties worden automatisch opgevolgd en ingepland in jouw agenda en CRM. Volledige pipeline sync. Jij hoeft alleen nog aan te schuiven bij de meetings.',
      highlight: '3% meeting rate',
      metrics: 'Instant booking',
      background: 'from-premium-black via-blue-950/20 to-premium-black',
      accentColor: 'from-blue-500 to-indigo-600',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer'
    }
  ];

  // Regular services for other pages
  const services = [
    {
      id: 'lead-engine',
      icon: Send,
      title: 'Lead Engine',
      subtitle: 'Elke dag perfecte prospects.',
      description: 'Hyper-targeting dat alleen jouw ideale klanten identificeert. Geen tijd verspillen aan verkeerde leads.',
      background: blueTheme ? 'from-black via-blue-900/20 to-black' : 'from-black via-blue-900/20 to-black',
      accentColor: blueTheme ? blueThemeColors['lead-engine'] : 'from-blue-500 to-blue-400',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer'
    },
    {
      id: 'sales-engine',
      icon: Users,
      title: 'Sales Engine',
      subtitle: 'Prospects worden klanten.',
      description: 'Geoptimaliseerde sequences die elke prospect naar een deal leiden. Maximale conversie, minimale inspanning.',
      background: blueTheme ? 'from-premium-black via-blue-900/15 to-premium-black' : 'from-premium-black via-purple-950/15 to-premium-black',
      accentColor: blueTheme ? blueThemeColors['sales-engine'] : 'from-green-500 to-blue-600',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer'
    },
    {
      id: 'marketing-engine',
      icon: Globe,
      title: 'Marketing Engine',
      subtitle: 'Domineer je markt.',
      description: 'Multi-channel campagnes die je merk onmiskenbaar maken. Van onbekend naar marktleider.',
      background: blueTheme ? 'from-premium-black via-blue-950/20 to-premium-black' : 'from-premium-black via-purple-950/20 to-premium-black',
      accentColor: blueTheme ? blueThemeColors['marketing-engine'] : 'from-purple-500 to-pink-600',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer'
    },
    {
      id: 'agents-automations',
      icon: Brain,
      title: 'Agents & Automations',
      subtitle: 'Automatiseer alles. Schaal oneindig.',
      description: 'AI-agenten die je complete salesproces overnemen. Van lead-identificatie tot afspraken - volledig geautomatiseerd.',
      background: blueTheme ? 'from-premium-black via-blue-950/20 to-premium-black' : 'from-premium-black via-blue-950/20 to-premium-black',
      accentColor: blueTheme ? blueThemeColors['agents-automations'] : 'from-blue-500 to-purple-600',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer'
    }
  ];

  const currentServices = walkthrough ? walkthroughServices : services;

  const cssStyles = `
    @keyframes sweep {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(100%); }
    }
  `;

  return (
    <div id="services" className="relative bg-black ambient">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      {/* Ambient Background Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="backlight backlight-left bg-scailup-blue"></div>
        <div className="backlight backlight-right bg-scailup-cyan"></div>
        <div className="backlight backlight-center bg-scailup-blue opacity-30"></div>
      </div>

      {/* Header for walkthrough mode */}
      {walkthrough && (
        <div className="relative z-10 text-center py-20 lg:py-32">
          <div className="inline-flex items-center gap-3 mb-12 px-8 py-4 bg-gradient-to-r from-blue-500/5 via-blue-400/8 to-blue-600/5 rounded-full border border-blue-400/20 backdrop-blur-xl">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-200/90 font-semibold text-base tracking-wide uppercase">Process Overview</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-[0.9] tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              How it works
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-blue-200/70 max-w-3xl mx-auto font-light leading-relaxed">
            From targeting to meeting. <span className="text-blue-300 font-medium">Fully automated.</span>
          </p>
        </div>
      )}

      {currentServices.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={index}
          isVisible={true}
          walkthrough={walkthrough}
        />
      ))}
    </div>
  );
};

export default Services;