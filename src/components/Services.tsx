
import { Brain, Cog, MessageSquare, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import ServiceSection from './ServiceSection';

const Services = () => {
  const [visibleSection, setVisibleSection] = useState<number>(-1);

  useEffect(() => {
    const observers = new Map();

    const sections = document.querySelectorAll('[data-service-section]');
    sections.forEach((section, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setVisibleSection(prev => Math.max(prev, index));
          }
        },
        {
          threshold: 0.1,
          rootMargin: '100px 0px -20px 0px'
        }
      );

      observer.observe(section);
      observers.set(index, observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

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

  const cssStyles = `
    @keyframes sweep {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(100%); }
    }
  `;

  return (
    <div className="relative bg-premium-black">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={index}
          isVisible={visibleSection >= index}
        />
      ))}
    </div>
  );
};

export default Services;
