
import { ArrowLeft, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import AutomationHero from '@/components/automations/AutomationHero';
import AdvancedFunctions from '@/components/automations/AdvancedFunctions';
import UseCases from '@/components/automations/UseCases';
import Integrations from '@/components/automations/Integrations';
import ClientExamples from '@/components/automations/ClientExamples';
import AutomationCTA from '@/components/automations/AutomationCTA';

const AIAutomations = () => {
  return (
    <div className="min-h-screen bg-premium-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-premium-black/80 backdrop-blur-md border-b border-premium-silver/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center text-premium-silver hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Terug naar home
          </Link>
          
          <div className="flex items-center space-x-2">
            <Cog className="w-6 h-6 text-blue-400" />
            <span className="text-white font-medium">AI Automations</span>
          </div>
        </div>
      </header>

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
