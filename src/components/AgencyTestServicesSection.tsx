import { Users, Building, Target, Database, DollarSign, Briefcase } from 'lucide-react';
import ServiceSection from './ServiceSection';
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

  // Agency Partnership services - focused on white-label and partnerships
  const services = [
    {
      id: 'white-label-platform',
      icon: Building,
      title: 'White-label Platform',
      subtitle: 'Jouw brand, onze technologie - geen development overhead',
      description: 'Complete outbound platform met jouw branding, logo en kleuren. Client dashboards, rapportages en communicatie - alles draait om jouw agency. Launch binnen 2-4 weken.',
      background: 'from-black via-purple-950/20 to-black',
      accentColor: 'from-purple-300 to-purple-500',
      primaryButtonText: 'Bekijk demo',
      secondaryButtonText: 'Partnership info',
      primaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/agency/demo'; },
      secondaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/agency/partnership'; }
    },
    {
      id: 'agency-management',
      icon: Users,
      title: 'Multi-Client Management',
      subtitle: 'Beheer alle klanten vanuit één centraal dashboard',
      description: 'Overzicht van alle client campaigns, performance metrics en billing in één interface. Automatische rapportages per klant. Team management met rollen en permissions.',
      background: 'from-black via-blue-950/20 to-black',
      accentColor: 'from-blue-300 to-cyan-400',
      primaryButtonText: 'Zie dashboard',
      secondaryButtonText: 'Feature lijst',
      primaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/agency/dashboard'; },
      secondaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/agency/features'; }
    },
    {
      id: 'revenue-sharing',
      icon: DollarSign,
      title: 'Revenue Sharing',
      subtitle: 'Verdienmodel dat schaalt met jouw groei',
      description: 'Transparante revenue sharing met maximaal 60% margin voor jouw agency. Performance-based bonussen. Geautomatiseerde billing en client invoicing. Grow together model.',
      background: 'from-black via-green-950/20 to-black',
      accentColor: 'from-green-300 to-emerald-400',
      primaryButtonText: 'Bereken ROI',
      secondaryButtonText: 'Pricing model',
      primaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/agency/roi-calculator'; },
      secondaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/agency/pricing'; }
    },
    {
      id: 'training-support',
      icon: Target,
      title: 'Training & Support',
      subtitle: 'Complete onboarding en ongoing support voor jouw team',
      description: 'Intensieve training voor jouw team. Dedicated success manager. 24/7 technical support. Sales enablement materialen en client presentaties. Je agency wordt outbound expert.',
      background: 'from-black via-pink-950/20 to-black',
      accentColor: 'from-pink-300 to-rose-400',
      primaryButtonText: 'Training overzicht',
      secondaryButtonText: 'Support model',
      primaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/agency/training'; },
      secondaryButtonAction: () => { if (typeof window !== 'undefined') window.location.href = '/agency/support'; }
    }
  ];

  return (
    <div className="relative">
      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={index}
          isVisible={isVisible[index]}
        />
      ))}
    </div>
  );
};

export default AgencyTestServicesSection;