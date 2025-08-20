
import { Brain, Cog, MessageSquare, Users } from 'lucide-react';
import CinematicServiceSection from './CinematicServiceSection';

const Services = () => {

  const services = [
    {
      id: 'ai-automations',
      icon: Cog,
      title: 'AI Automations',
      subtitle: 'Slim. Snel. Onzichtbaar.',
      description: 'Onze automatisering werkt in de achtergrond — maar voelt als magie op de voorgrond.',
      background: 'from-premium-black via-blue-950/20 to-premium-black',
      accentColor: 'from-blue-500 to-purple-600',
      primaryButtonText: 'Meer informatie',
      secondaryButtonText: 'Lees meer',
      ariaLabel: 'AI Automatisering services - intelligente workflow automatisering'
    },
    {
      id: 'custom-saas',
      icon: Brain,
      title: 'Custom AI SaaS',
      subtitle: 'Gebouwd voor schaal.',
      description: 'Custom software met AI als motor. Van prototype tot product.',
      background: 'from-premium-black via-purple-950/20 to-premium-black',
      accentColor: 'from-purple-500 to-pink-600',
      primaryButtonText: 'Meer informatie',
      secondaryButtonText: 'Lees meer'
    },
    {
      id: 'consultancy',
      icon: MessageSquare,
      title: 'Consultancy',
      subtitle: 'Denken in impact.',
      description: 'Samen onderzoeken we wat AI écht kan betekenen voor jouw organisatie.',
      background: 'from-premium-black via-purple-950/20 to-premium-black',
      accentColor: 'from-purple-400 to-blue-500',
      primaryButtonText: 'Meer informatie',
      secondaryButtonText: 'Lees meer'
    },
    {
      id: 'autonomous-agents',
      icon: Users,
      title: 'Autonomous AI Agents',
      subtitle: 'Altijd alert. Altijd lerend.',
      description: 'Jouw digitale teamgenoten — geautomatiseerd, contextueel en proactief. Onze agents voeren taken uit, leren van interacties en verbeteren zichzelf.',
      background: 'from-premium-black via-purple-950/15 to-premium-black',
      accentColor: 'from-green-500 to-blue-600',
      primaryButtonText: 'Meer informatie',
      secondaryButtonText: 'Bekijk in actie'
    }
  ];


  return (
    <div className="relative bg-premium-black">
      {services.map((service, index) => (
        <CinematicServiceSection
          key={service.id}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
};

export default Services;
