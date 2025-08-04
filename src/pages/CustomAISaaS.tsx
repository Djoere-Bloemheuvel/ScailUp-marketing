
import { Brain, Code, Layers, Zap, BarChart, Cog } from 'lucide-react';
import ScrollHeader from '@/components/ScrollHeader';
import CustomSaaSHero from '@/components/saas/CustomSaaSHero';
import CustomSaaSExplained from '@/components/saas/CustomSaaSExplained';
import CustomSaaSOverview from '@/components/saas/CustomSaaSOverview';
import WhyBuildrs from '@/components/automations/WhyBuildrs';
import CustomSaaSFeaturePair from '@/components/saas/CustomSaaSFeaturePair';
import CustomSaaSFinalCTA from '@/components/saas/CustomSaaSFinalCTA';

const CustomAISaaS = () => {
  const saasFeatures = [
    {
      icon: Brain,
      title: 'AI Engine',
      subtitle: 'Kernmotor voor intelligente beslissingen',
      accent: 'from-purple-400/20 via-purple-500/30 to-pink-400/20',
      glowColor: 'shadow-purple-500/20',
      borderGlow: 'border-purple-400/30',
      iconGlow: 'text-purple-300',
      delay: 0
    },
    {
      icon: Code,
      title: 'Custom Development',
      subtitle: 'Maatwerk software zonder complexiteit',
      accent: 'from-blue-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 100
    },
    {
      icon: Layers,
      title: 'Schaalbare Architectuur',
      subtitle: 'Gebouwd om te groeien met jouw organisatie',
      accent: 'from-emerald-400/20 via-green-500/30 to-teal-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 200
    },
    {
      icon: Zap,
      title: 'Snelle Implementatie',
      subtitle: 'Van prototype tot product in weken',
      accent: 'from-yellow-400/20 via-orange-500/30 to-red-400/20',
      glowColor: 'shadow-orange-500/20',
      borderGlow: 'border-orange-400/30',
      iconGlow: 'text-orange-300',
      delay: 300
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      subtitle: 'Inzichten die jouw business vooruit helpen',
      accent: 'from-indigo-400/20 via-blue-500/30 to-purple-400/20',
      glowColor: 'shadow-indigo-500/20',
      borderGlow: 'border-indigo-400/30',
      iconGlow: 'text-indigo-300',
      delay: 400
    },
    {
      icon: Cog,
      title: 'API Integraties',
      subtitle: 'Naadloos verbonden met jouw systemen',
      accent: 'from-gray-400/20 via-slate-500/30 to-zinc-400/20',
      glowColor: 'shadow-slate-500/20',
      borderGlow: 'border-slate-400/30',
      iconGlow: 'text-slate-300',
      delay: 500
    }
  ];

  return (
    <div className="min-h-screen bg-premium-black">
      <ScrollHeader />
      
      {/* Hero Section */}
      <CustomSaaSHero />

      {/* Section 1 - Wat is Custom AI SaaS? */}
      <CustomSaaSExplained />
      
      {/* First 2 Feature Cards */}
      <CustomSaaSFeaturePair 
        features={saasFeatures.slice(0, 2)} 
        startIndex={0} 
      />

      {/* Section 2 - Van idee tot schaalbaar product */}
      <CustomSaaSOverview />
      
      {/* Next 2 Feature Cards */}
      <CustomSaaSFeaturePair 
        features={saasFeatures.slice(2, 4)} 
        startIndex={2} 
      />

      {/* Section 3 - Waarom Buildrs? */}
      <WhyBuildrs />
      
      {/* Final 2 Feature Cards */}
      <CustomSaaSFeaturePair 
        features={saasFeatures.slice(4, 6)} 
        startIndex={4} 
      />

      {/* Enhanced Final CTA Section */}
      <CustomSaaSFinalCTA />
    </div>
  );
};

export default CustomAISaaS;
