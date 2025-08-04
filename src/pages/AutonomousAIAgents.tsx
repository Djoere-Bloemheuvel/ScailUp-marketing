
import { Users, Zap, Shield, Cog, Brain, Network } from 'lucide-react';
import ScrollHeader from '@/components/ScrollHeader';
import AgentHero from '@/components/agents/AgentHero';
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
      accent: 'from-blue-400/20 via-blue-500/30 to-purple-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 0
    },
    {
      icon: Network,
      title: 'Multi-tool integratie',
      subtitle: 'Werkt naadloos samen met CRM, e-mail, agenda en externe systemen',
      accent: 'from-purple-400/20 via-purple-500/30 to-blue-400/20',
      glowColor: 'shadow-purple-500/20',
      borderGlow: 'border-purple-400/30',
      iconGlow: 'text-purple-300',
      delay: 100
    },
    {
      icon: Zap,
      title: '24/7 operationeel',
      subtitle: 'Altijd alert, altijd actief - geen pauzes, geen fouten',
      accent: 'from-cyan-400/20 via-blue-500/30 to-purple-400/20',
      glowColor: 'shadow-cyan-500/20',
      borderGlow: 'border-cyan-400/30',
      iconGlow: 'text-cyan-300',
      delay: 200
    },
    {
      icon: Users,
      title: 'Natuurlijke communicatie',
      subtitle: 'Communiceert vloeiend met teams en klanten in perfecte context',
      accent: 'from-emerald-400/20 via-green-500/30 to-blue-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 300
    },
    {
      icon: Shield,
      title: 'Veilig & compliant',
      subtitle: 'Werkt binnen veilige kaders met volledige audit-logs en toegangscontrole',
      accent: 'from-indigo-400/20 via-purple-500/30 to-blue-400/20',
      glowColor: 'shadow-indigo-500/20',
      borderGlow: 'border-indigo-400/30',
      iconGlow: 'text-indigo-300',
      delay: 400
    },
    {
      icon: Cog,
      title: 'Zelf-lerend systeem',
      subtitle: 'Verbetert zichzelf door ervaring en feedback uit interacties',
      accent: 'from-violet-400/20 via-purple-500/30 to-pink-400/20',
      glowColor: 'shadow-violet-500/20',
      borderGlow: 'border-violet-400/30',
      iconGlow: 'text-violet-300',
      delay: 500
    }
  ];

  return (
    <div className="min-h-screen bg-premium-black">
      <ScrollHeader />
      
      {/* Hero Section */}
      <AgentHero />

      {/* Section 1 - Wat zijn Autonomous AI Agents? */}
      <AgentExplained />
      
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
