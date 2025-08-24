import { Mail, Users, Target, Brain, Send, Globe } from 'lucide-react';
import ServiceSection from './ServiceSection';

interface ServicesProps {
  blueTheme?: boolean;
}

const Services = ({ blueTheme = false }: ServicesProps) => {
  // ScailUp Outbound Agency Services - 3 core services

  // Define blue theme variations
  const blueThemeColors = {
    'lead-engine': 'from-blue-500 to-blue-400',
    'sales-engine': 'from-blue-600 to-cyan-500', 
    'marketing-engine': 'from-blue-400 to-blue-300',
    'agents-automations': 'from-blue-500 to-indigo-600'
  };

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

      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={index}
          isVisible={true}
        />
      ))}
    </div>
  );
};

export default Services;