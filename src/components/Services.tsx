
import { Brain, Cog, MessageSquare, Users } from 'lucide-react';
import { useEffect, useState, useMemo, useCallback } from 'react';
import ServiceSection from './ServiceSection';

const Services = () => {
  const [visibleSection, setVisibleSection] = useState<number>(-1);

  // Memoized intersection observer callback for better performance
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry?.isIntersecting) {
        const index = parseInt(entry.target.getAttribute('data-service-section') || '0');
        setVisibleSection(prev => Math.max(prev, index));
      }
    });
  }, []);

  useEffect(() => {
    const observers = new Map();
    
    // Optimized observer options
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '50px 0px -50px 0px'
    };

    const sections = document.querySelectorAll('[data-service-section]');
    sections.forEach((section, index) => {
      const observer = new IntersectionObserver(handleIntersection, observerOptions);
      observer.observe(section);
      observers.set(index, observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [handleIntersection]);

  // Memoized services array to prevent unnecessary re-renders
  const services = useMemo(() => [
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
  ], []);

  // Memoized CSS styles with enhanced performance optimizations
  const cssStyles = useMemo(() => `
    @keyframes sweep {
      0% { transform: translate3d(-100%, 0, 0) scale(1); }
      50% { transform: translate3d(100%, 0, 0) scale(1.1); }
      100% { transform: translate3d(100%, 0, 0) scale(1); }
    }

    @keyframes gentle-float {
      0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
      50% { transform: translate3d(0, -8px, 0) rotate(2deg); }
    }

    @keyframes orbital-glow {
      0%, 100% { 
        opacity: 0.6; 
        transform: translate3d(0, 0, 0) scale(1);
      }
      50% { 
        opacity: 1; 
        transform: translate3d(0, 0, 0) scale(1.1);
      }
    }

    /* Performance optimizations for service animations */
    .service-visual {
      will-change: transform, opacity;
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0);
    }

    .service-icon {
      will-change: transform, filter;
      backface-visibility: hidden;
    }

    .service-button {
      will-change: transform, box-shadow;
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0);
    }

    /* Reduce motion for accessibility */
    @media (prefers-reduced-motion: reduce) {
      .service-visual,
      .service-icon,
      .service-button {
        animation: none;
        transition: none;
      }
    }
  `, []);

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
