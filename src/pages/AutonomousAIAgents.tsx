
import { Users, Zap, Shield, Cog, Brain, Network } from 'lucide-react';
import ScrollHeader from '@/components/ScrollHeader';
import AgentPrimaryHero from '@/components/agents/AgentPrimaryHero';
import AgentSecondaryHero from '@/components/agents/AgentSecondaryHero';
import AgentExplained from '@/components/agents/AgentExplained';
import AgentOverview from '@/components/agents/AgentOverview';
import WhyBuildrsAgents from '@/components/agents/WhyBuildrsAgents';
import AgentFeaturePair from '@/components/agents/AgentFeaturePair';
import AgentFinalCTA from '@/components/agents/AgentFinalCTA';

const AutonomousAIAgents = () => {
  const agentFeatures = [
    {
      icon: Brain,
      title: 'Zelfstandig beslissen',
      subtitle: 'Agents die denken, redeneren en acties uitvoeren zonder menselijke input',
      accent: 'from-teal-400/20 via-blue-500/30 to-emerald-400/20',
      glowColor: 'shadow-teal-500/20',
      borderGlow: 'border-teal-400/30',
      iconGlow: 'text-teal-300',
      delay: 0
    },
    {
      icon: Network,
      title: 'Multi-tool integratie',
      subtitle: 'Werkt naadloos samen met CRM, e-mail, agenda en externe systemen',
      accent: 'from-blue-400/20 via-cyan-500/30 to-teal-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 100
    },
    {
      icon: Zap,
      title: '24/7 operationeel',
      subtitle: 'Altijd alert, altijd actief - geen pauzes, geen fouten',
      accent: 'from-cyan-400/20 via-teal-500/30 to-blue-400/20',
      glowColor: 'shadow-cyan-500/20',
      borderGlow: 'border-cyan-400/30',
      iconGlow: 'text-cyan-300',
      delay: 200
    },
    {
      icon: Users,
      title: 'Natuurlijke communicatie',
      subtitle: 'Communiceert vloeiend met teams en klanten in perfecte context',
      accent: 'from-emerald-400/20 via-teal-500/30 to-blue-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 300
    },
    {
      icon: Shield,
      title: 'Veilig & compliant',
      subtitle: 'Werkt binnen veilige kaders met volledige audit-logs en toegangscontrole',
      accent: 'from-teal-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-teal-500/20',
      borderGlow: 'border-teal-400/30',
      iconGlow: 'text-teal-300',
      delay: 400
    },
    {
      icon: Cog,
      title: 'Zelf-lerend systeem',
      subtitle: 'Verbetert zichzelf door ervaring en feedback uit interacties',
      accent: 'from-blue-400/20 via-emerald-500/30 to-teal-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 500
    }
  ];

  return (
    <div className="min-h-screen bg-premium-black">
      <ScrollHeader />
      
      {/* New Primary Hero Section */}
      <AgentPrimaryHero />

      {/* New Secondary Hero Section */}
      <AgentSecondaryHero />

      {/* Section 1 - Wat zijn Autonomous AI Agents? */}
      <div data-service-section="0">
        <AgentExplained />
      </div>
      
      {/* First 2 Feature Cards */}
      <AgentFeaturePair 
        features={agentFeatures.slice(0, 2)} 
        startIndex={0} 
      />

      {/* Section 2 - Jouw persoonlijke digitale assistent */}
      <AgentOverview />
      
      {/* Next 2 Feature Cards */}
      <AgentFeaturePair 
        features={agentFeatures.slice(2, 4)} 
        startIndex={2} 
      />

      {/* Section 3 - Waarom Buildrs? */}
      <WhyBuildrsAgents />
      
      {/* Final 2 Feature Cards */}
      <AgentFeaturePair 
        features={agentFeatures.slice(4, 6)} 
        startIndex={4} 
      />

      {/* Enhanced Final CTA Section */}
      <AgentFinalCTA />
    </div>
  );
};

export default AutonomousAIAgents;
