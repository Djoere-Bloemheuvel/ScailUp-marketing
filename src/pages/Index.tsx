
import AccessibilitySkipLink from '@/components/AccessibilitySkipLink';
import Approach from '@/components/Approach';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollHeader from '@/components/ScrollHeader';
import SEOHead from '@/components/SEOHead';
import Services from '@/components/Services';
import Showcase from '@/components/Showcase';
import StructuredData from '@/components/StructuredData';
import Target from '@/components/Target';
import Workflow from '@/components/Workflow';

const Index = () => {
  return (
    <>
      <SEOHead
        title="Buildrs.AI - Elite AI Engineering Studio | Custom AI SaaS & Automatisering"
        description="Premium AI-oplossingen voor visionairs: Custom AI SaaS, intelligente automatisering en strategische AI-consultancy. Transformeer uw business met autonome AI-systemen van de hoogste kwaliteit."
        keywords="AI automatisering, Custom AI SaaS, AI consultancy, Autonomous AI Agents, AI engineering, machine learning, Nederland, business transformation, artificial intelligence"
      />
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <AccessibilitySkipLink />
      <div className="min-h-screen bg-premium-black">
        <ScrollHeader />
        <main id="main-content" role="main">
          <Hero />
        <Services />
        <Approach />
        <Workflow />
        <Showcase />
        <Target />
        <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
