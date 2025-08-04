
import SEOHead from '@/components/SEOHead';
import ScrollHeader from '@/components/ScrollHeader';
import StructuredData from '@/components/StructuredData';
import ConsultancyExplained from '@/components/consultancy/ConsultancyExplained';
import ConsultancyFeaturePair from '@/components/consultancy/ConsultancyFeaturePair';
import ConsultancyFinalCTA from '@/components/consultancy/ConsultancyFinalCTA';
import ConsultancyHero from '@/components/consultancy/ConsultancyHero';
import ConsultancyOverview from '@/components/consultancy/ConsultancyOverview';
import ConsultancySecondaryHero from '@/components/consultancy/ConsultancySecondaryHero';
import WhyBuildrsConsultancy from '@/components/consultancy/WhyBuildrsConsultancy';
import { BarChart, Brain, Lightbulb, MessageSquare, Shield, Target } from 'lucide-react';

const Consultancy = () => {
  const consultancyFeatures = [
    {
      icon: Brain,
      title: 'AI-Strategie Ontwikkeling',
      subtitle: 'Van visie naar concrete roadmap voor AI-implementatie',
      accent: 'from-blue-400/20 via-blue-500/30 to-purple-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 0
    },
    {
      icon: Target,
      title: 'Proces Analyse',
      subtitle: 'Identificeer kansen voor automatisering en optimalisatie',
      accent: 'from-sky-400/20 via-sky-500/30 to-cyan-400/20',
      glowColor: 'shadow-sky-500/20',
      borderGlow: 'border-sky-400/30',
      iconGlow: 'text-sky-300',
      delay: 100
    },
    {
      icon: Lightbulb,
      title: 'Technology Selection',
      subtitle: 'Selectie van de juiste AI-tools en platforms',
      accent: 'from-cyan-400/20 via-blue-500/30 to-sky-400/20',
      glowColor: 'shadow-cyan-500/20',
      borderGlow: 'border-cyan-400/30',
      iconGlow: 'text-cyan-300',
      delay: 200
    },
    {
      icon: BarChart,
      title: 'Implementation Support',
      subtitle: 'Begeleiding van concept tot succesvolle uitrol',
      accent: 'from-blue-400/20 via-cyan-500/30 to-sky-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 300
    },
    {
      icon: MessageSquare,
      title: 'Training & Adoption',
      subtitle: 'Zorg voor succesvolle acceptatie binnen je team',
      accent: 'from-sky-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-sky-500/20',
      borderGlow: 'border-sky-400/30',
      iconGlow: 'text-sky-300',
      delay: 400
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      subtitle: 'Veilige en compliance-gerichte AI-implementaties',
      accent: 'from-cyan-400/20 via-sky-500/30 to-blue-400/20',
      glowColor: 'shadow-cyan-500/20',
      borderGlow: 'border-cyan-400/30',
      iconGlow: 'text-cyan-300',
      delay: 500
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Consultancy | Strategische AI Advies & Implementatie - Buildrs.AI"
        description="Expert AI consultancy voor enterprise transformatie. Strategisch advies, implementatie roadmaps en hands-on begeleiding voor succesvolle AI-adoptie in uw organisatie."
        keywords="AI consultancy, AI advies, AI strategie, AI implementatie, digital transformation, AI consulting Nederland"
        canonical="https://buildrs.ai/consultancy"
      />
      <StructuredData
        type="service"
        data={{
          name: "AI Consultancy Services",
          description: "Strategische AI consultancy en implementatie begeleiding voor enterprise klanten"
        }}
      />
      <div className="min-h-screen bg-premium-black">
        <ScrollHeader />

      {/* Primary Hero Section */}
      <ConsultancyHero />

      {/* Secondary Hero Section */}
      <ConsultancySecondaryHero />

      {/* Section 1 - Wat doet onze AI-consultancy? */}
      <ConsultancyExplained />

      {/* First 2 Feature Cards */}
      <ConsultancyFeaturePair
        features={consultancyFeatures.slice(0, 2)}
        startIndex={0}
      />

      {/* Section 2 - Van analyse tot implementatie */}
      <ConsultancyOverview />

      {/* Next 2 Feature Cards */}
      <ConsultancyFeaturePair
        features={consultancyFeatures.slice(2, 4)}
        startIndex={2}
      />

      {/* Section 3 - Waarom Buildrs? */}
      <WhyBuildrsConsultancy />

      {/* Final 2 Feature Cards */}
      <ConsultancyFeaturePair
        features={consultancyFeatures.slice(4, 6)}
        startIndex={4}
      />

      {/* Enhanced Final CTA Section */}
      <ConsultancyFinalCTA />
    </div>
    </>
  );
};

export default Consultancy;
