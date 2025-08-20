
import { Brain, Cog, MessageSquare, Users } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { ServiceErrorBoundary } from './ServiceErrorBoundary';

// Lazy load CinematicServiceSection for better performance
const CinematicServiceSection = lazy(() => import('./CinematicServiceSection'));

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


  // Loading placeholder component for better UX
  const ServiceSkeleton = ({ index }: { index: number }) => (
    <div className="relative py-20 lg:py-28 flex items-center justify-center px-4 overflow-hidden bg-premium-black">
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6 animate-pulse">
          <div className="h-12 bg-premium-gray/20 rounded-lg w-3/4"></div>
          <div className="h-6 bg-premium-gray/15 rounded-lg w-1/2"></div>
          <div className="h-4 bg-premium-gray/10 rounded-lg w-full"></div>
          <div className="flex gap-4">
            <div className="h-12 bg-premium-gray/20 rounded-full w-32"></div>
            <div className="h-12 bg-premium-gray/15 rounded-full w-32"></div>
          </div>
        </div>
        <div className="w-72 h-72 bg-premium-gray/20 rounded-3xl animate-pulse mx-auto"></div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-premium-black">
      {services.map((service, index) => (
        <ServiceErrorBoundary key={service.id} fallback={<ServiceSkeleton index={index} />}>
          <Suspense fallback={<ServiceSkeleton index={index} />}>
            <CinematicServiceSection
              service={service}
              index={index}
            />
          </Suspense>
        </ServiceErrorBoundary>
      ))}
    </div>
  );
};

export default Services;
