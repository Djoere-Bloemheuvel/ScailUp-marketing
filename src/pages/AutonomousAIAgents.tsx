
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
      accent: 'from-teal-400/20 via-emerald-500/30 to-green-400/20',
      glowColor: 'shadow-teal-500/20',
      borderGlow: 'border-teal-400/30',
      iconGlow: 'text-teal-300',
      delay: 0
    },
    {
      icon: Network,
      title: 'Multi-tool integratie',
      subtitle: 'Werkt naadloos samen met CRM, e-mail, agenda en externe systemen',
      accent: 'from-emerald-400/20 via-green-500/30 to-teal-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 100
    },
    {
      icon: Zap,
      title: '24/7 operationeel',
      subtitle: 'Altijd alert, altijd actief - geen pauzes, geen fouten',
      accent: 'from-green-400/20 via-teal-500/30 to-emerald-400/20',
      glowColor: 'shadow-green-500/20',
      borderGlow: 'border-green-400/30',
      iconGlow: 'text-green-300',
      delay: 200
    },
    {
      icon: Users,
      title: 'Natuurlijke communicatie',
      subtitle: 'Communiceert vloeiend met teams en klanten in perfecte context',
      accent: 'from-teal-400/20 via-cyan-500/25 to-emerald-400/20',
      glowColor: 'shadow-teal-500/20',
      borderGlow: 'border-teal-400/30',
      iconGlow: 'text-teal-300',
      delay: 300
    },
    {
      icon: Shield,
      title: 'Veilig & compliant',
      subtitle: 'Werkt binnen veilige kaders met volledige audit-logs en toegangscontrole',
      accent: 'from-emerald-400/20 via-green-500/25 to-teal-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 400
    },
    {
      icon: Cog,
      title: 'Zelf-lerend systeem',
      subtitle: 'Verbetert zichzelf door ervaring en feedback uit interacties',
      accent: 'from-green-400/20 via-emerald-500/25 to-cyan-400/20',
      glowColor: 'shadow-green-500/20',
      borderGlow: 'border-green-400/30',
      iconGlow: 'text-green-300',
      delay: 500
    }
  ];

  return (
    <div className="min-h-screen bg-premium-black relative overflow-hidden">
      {/* Enhanced global background with subtle green gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-emerald-950/5 through-teal-950/3 to-premium-black" />
      
      {/* Subtle ambient particles throughout the page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 left-1/5 w-0.5 h-0.5 bg-teal-400/30 rounded-full animate-pulse" style={{
          animationDelay: '0s',
          animationDuration: '6s'
        }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-emerald-400/25 rounded-full animate-pulse" style={{
          animationDelay: '3s',
          animationDuration: '8s'
        }} />
        <div className="absolute bottom-1/4 left-2/3 w-0.5 h-0.5 bg-green-400/20 rounded-full animate-pulse" style={{
          animationDelay: '5s',
          animationDuration: '7s'
        }} />
        <div className="absolute top-1/2 left-1/8 w-1 h-1 bg-teal-300/25 rounded-full animate-pulse" style={{
          animationDelay: '2s',
          animationDuration: '5s'
        }} />
      </div>
      
      <div className="relative z-10">
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
    </div>
  );
};

export default AutonomousAIAgents;
