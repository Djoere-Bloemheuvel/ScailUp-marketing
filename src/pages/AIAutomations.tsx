
import { ArrowLeft, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollHeader from '@/components/ScrollHeader';
import AutomationHero from '@/components/automations/AutomationHero';
import AdvancedFunctions from '@/components/automations/AdvancedFunctions';
import UseCases from '@/components/automations/UseCases';
import Integrations from '@/components/automations/Integrations';
import ClientExamples from '@/components/automations/ClientExamples';
import AutomationCTA from '@/components/automations/AutomationCTA';

const AIAutomations = () => {
  return (
    <div className="min-h-screen bg-premium-black">
      <ScrollHeader />
      
      {/* Hero Section with Integrated Benefits */}
      <AutomationHero />

      {/* Advanced Functions */}
      <AdvancedFunctions />

      {/* Use Cases */}
      <UseCases />

      {/* Integrations */}
      <Integrations />

      {/* Client Examples */}
      <ClientExamples />

      {/* Final CTA */}
      <AutomationCTA />
    </div>
  );
};

export default AIAutomations;
