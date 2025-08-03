
import { ArrowLeft, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollHeader from '@/components/ScrollHeader';
import AutomationHero from '@/components/automations/AutomationHero';
import AutomationIntro from '@/components/automations/AutomationIntro';
import AutomationShowcase from '@/components/automations/AutomationShowcase';
import AdvancedFunctions from '@/components/automations/AdvancedFunctions';
import UseCases from '@/components/automations/UseCases';
import Integrations from '@/components/automations/Integrations';
import AutomationProof from '@/components/automations/AutomationProof';
import ClientExamples from '@/components/automations/ClientExamples';
import AutomationFinalCTA from '@/components/automations/AutomationFinalCTA';

const AIAutomations = () => {
  return (
    <div className="min-h-screen bg-premium-black">
      <ScrollHeader />
      
      {/* Hero Section with Integrated Benefits */}
      <AutomationHero />

      {/* New Intro Section */}
      <AutomationIntro />

      {/* New Visual Showcase */}
      <AutomationShowcase />

      {/* Advanced Functions */}
      <AdvancedFunctions />

      {/* Use Cases */}
      <UseCases />

      {/* Integrations */}
      <Integrations />

      {/* New Testimonial/Proof Section */}
      <AutomationProof />

      {/* Client Examples */}
      <ClientExamples />

      {/* New Final CTA */}
      <AutomationFinalCTA />
    </div>
  );
};

export default AIAutomations;
