
import { Users, FileText, Zap, CreditCard, BarChart, RefreshCw } from 'lucide-react';
import ScrollHeader from '@/components/ScrollHeader';
import AutomationSecondHero from '@/components/automations/AutomationSecondHero';
import AutomationHero from '@/components/automations/AutomationHero';
import AutomationOverview from '@/components/automations/AutomationOverview';
import AutomationExplained from '@/components/automations/AutomationExplained';
import WhyBuildrs from '@/components/automations/WhyBuildrs';
import AutomationFeaturePair from '@/components/automations/AutomationFeaturePair';
import AutomationFinalCTA from '@/components/automations/AutomationFinalCTA';

const AIAutomations = () => {
  const automationFeatures = [
    {
      icon: Users,
      title: 'Leadgeneratie',
      subtitle: 'Slimme prospectherkenning en automatische outreach',
      accent: 'from-blue-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 0
    },
    {
      icon: FileText,
      title: 'Offertes & Contracten',
      subtitle: 'Documenten gegenereerd op basis van klantdata',
      accent: 'from-purple-400/20 via-purple-500/30 to-pink-400/20',
      glowColor: 'shadow-purple-500/20',
      borderGlow: 'border-purple-400/30',
      iconGlow: 'text-purple-300',
      delay: 100
    },
    {
      icon: Zap,
      title: 'Klant Onboarding',
      subtitle: 'Vloeiende start voor nieuwe klanten',
      accent: 'from-green-400/20 via-emerald-500/30 to-teal-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 200
    },
    {
      icon: CreditCard,
      title: 'Facturatie',
      subtitle: 'Automatische verwerking & herinneringen',
      accent: 'from-orange-400/20 via-red-500/30 to-pink-400/20',
      glowColor: 'shadow-orange-500/20',
      borderGlow: 'border-orange-400/30',
      iconGlow: 'text-orange-300',
      delay: 300
    },
    {
      icon: BarChart,
      title: 'Rapportage',
      subtitle: 'Real-time inzichten, automatisch geleverd',
      accent: 'from-indigo-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-indigo-500/20',
      borderGlow: 'border-indigo-400/30',
      iconGlow: 'text-indigo-300',
      delay: 400
    },
    {
      icon: RefreshCw,
      title: 'Follow-up Workflows',
      subtitle: 'Blijf top-of-mind, automatisch en slim',
      accent: 'from-cyan-400/20 via-teal-500/30 to-blue-400/20',
      glowColor: 'shadow-cyan-500/20',
      borderGlow: 'border-cyan-400/30',
      iconGlow: 'text-cyan-300',
      delay: 500
    }
  ];

  return (
    <div className="min-h-screen bg-premium-black">
      <ScrollHeader />
      
      {/* Original Hero Section */}
      <AutomationHero />

      {/* Section 1 - Wat is AI Automatisering? */}
      <AutomationExplained />
      
      {/* Section 2 - Transformeer je processen */}
      <AutomationOverview />

      {/* Section 3 - Waarom Buildrs? */}
      <WhyBuildrs />

      {/* Enhanced Final CTA Section */}
      <AutomationFinalCTA />

      {/* Moved sections: Second Hero + All Feature Cards */}
      <AutomationSecondHero />
      
      {/* All Feature Cards moved to bottom */}
      <AutomationFeaturePair 
        features={automationFeatures.slice(0, 2)} 
        startIndex={0} 
      />
      
      <AutomationFeaturePair 
        features={automationFeatures.slice(2, 4)} 
        startIndex={2} 
      />
      
      <AutomationFeaturePair 
        features={automationFeatures.slice(4, 6)} 
        startIndex={4} 
      />
    </div>
  );
};

export default AIAutomations;
