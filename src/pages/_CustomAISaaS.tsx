
import SEOHead from '@/components/SEOHead';
import ScrollHeader from '@/components/ScrollHeader';
import StructuredData from '@/components/StructuredData';
import WhyBuildrsConsultancy from '@/components/consultancy/WhyBuildrsConsultancy';
import CustomSaaSExplained from '@/components/saas/CustomSaaSExplained';
import CustomSaaSFeaturePair from '@/components/saas/CustomSaaSFeaturePair';
import CustomSaaSFinalCTA from '@/components/saas/CustomSaaSFinalCTA';
import CustomSaaSHero from '@/components/saas/CustomSaaSHero';
import CustomSaaSNewHero from '@/components/saas/CustomSaaSNewHero';
import CustomSaaSOverview from '@/components/saas/CustomSaaSOverview';
import { BarChart, Brain, Code, Cog, Layers, Zap } from 'lucide-react';

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
    <>
      <SEOHead
        title="Custom AI SaaS Development | Maatwerk AI Software Ontwikkeling - Buildrs.AI"
        description="Bouw uw eigen AI-platform met onze custom SaaS development services. Van MVP tot schaalbaar product - volledig maatwerk AI-software voor enterprise klanten."
        keywords="Custom AI SaaS, AI software development, maatwerk AI software, SaaS development, AI platform development, Nederland"
        canonical="https://buildrs.ai/custom-ai-saas"
      />
      <StructuredData
        type="service"
        data={{
          name: "Custom AI SaaS Development",
          description: "Maatwerk AI SaaS ontwikkeling van MVP tot schaalbaar enterprise platform"
        }}
      />
      <div className="min-h-screen bg-premium-black">
        <ScrollHeader />

      {/* New Hero Section - Top of page */}
      <CustomSaaSNewHero />

      {/* Original Hero Section */}
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
      <WhyBuildrsConsultancy />

      {/* Final 2 Feature Cards */}
      <CustomSaaSFeaturePair
        features={saasFeatures.slice(4, 6)}
        startIndex={4}
      />

      {/* Enhanced Final CTA Section */}
      <CustomSaaSFinalCTA />
    </div>
    </>
  );
};

export default CustomAISaaS;
