
import { Users, FileText, Zap, CreditCard, BarChart, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import AutomationCard from './AutomationCard';
import AutomationParticles from './AutomationParticles';

const AutomationShowcase = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-automation-item]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const automationFeatures = [
    {
      icon: Users,
      title: 'Leadgeneratie',
      subtitle: 'Slimme prospectherkenning en automatische outreach',
      description: 'Onze AI identificeert kwaliteitsleads via geavanceerde data-analyse en beheert automatisch de eerste contactmomenten. Door gepersonaliseerde berichten en intelligente timing verhogen we significant uw conversieratio en verkorten we de sales cyclus.',
      accent: 'from-blue-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300',
      delay: 0
    },
    {
      icon: FileText,
      title: 'Offertes & Contracten',
      subtitle: 'Documenten gegenereerd op basis van klantdata',
      description: 'Automatische documentgeneratie die klantspecifieke data integreert in professionele offertes en contracten. Onze templates passen zich dynamisch aan uw branche en klantbehoeften aan, wat tijd bespaart en consistentie garandeert.',
      accent: 'from-purple-400/20 via-purple-500/30 to-pink-400/20',
      glowColor: 'shadow-purple-500/20',
      borderGlow: 'border-purple-400/30',
      iconGlow: 'text-purple-300',
      delay: 100
    },
    {
      icon: Zap,
      title: 'Klant Onboarding',
      subtitle: 'Vloeiende start voor nieuwe klanten',
      description: 'Een gestroomlijnd onboarding proces dat nieuwe klanten efficiënt door alle benodigde stappen leidt. Geautomatiseerde welkomstreeksen, documentverzameling en progresstracking zorgen voor een uitstekende eerste indruk en snellere time-to-value.',
      accent: 'from-green-400/20 via-emerald-500/30 to-teal-400/20',
      glowColor: 'shadow-emerald-500/20',
      borderGlow: 'border-emerald-400/30',
      iconGlow: 'text-emerald-300',
      delay: 200
    },
    {
      icon: CreditCard,
      title: 'Facturatie',
      subtitle: 'Automatische verwerking & herinneringen',
      description: 'Volledig geautomatiseerd factuurproces van generatie tot betaling. Intelligente betalingsherinneringen, automatische boekhouding en real-time statusupdates reduceren uw administratieve last en verbeteren de cashflow.',
      accent: 'from-orange-400/20 via-red-500/30 to-pink-400/20',
      glowColor: 'shadow-orange-500/20',
      borderGlow: 'border-orange-400/30',
      iconGlow: 'text-orange-300',
      delay: 300
    },
    {
      icon: BarChart,
      title: 'Rapportage',
      subtitle: 'Real-time inzichten, automatisch geleverd',
      description: 'Uitgebreide dashboards met real-time KPI tracking en geautomatiseerde rapportage. Onze AI analyseert trends, voorspelt ontwikkelingen en levert actiegerichte inzichten direct in uw mailbox voor datagedreven besluitvorming.',
      accent: 'from-indigo-400/20 via-blue-500/30 to-cyan-400/20',
      glowColor: 'shadow-indigo-500/20',
      borderGlow: 'border-indigo-400/30',
      iconGlow: 'text-indigo-300',
      delay: 400
    },
    {
      icon: RefreshCw,
      title: 'Follow-up Workflows',
      subtitle: 'Blijf top-of-mind, automatisch en slim',
      description: 'Intelligente follow-up systemen die klantinteracties monitoren en op het juiste moment relevante communicatie versturen. Gepersonaliseerde content en timing gebaseerd op klantgedrag zorgen voor maximale engagement en loyaliteit.',
      accent: 'from-cyan-400/20 via-teal-500/30 to-blue-400/20',
      glowColor: 'shadow-cyan-500/20',
      borderGlow: 'border-cyan-400/30',
      iconGlow: 'text-cyan-300',
      delay: 500
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Enhanced ambient background with layered depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black/95 to-premium-gray/30" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.2),transparent_50%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Premium staggered grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-20">
          {automationFeatures.map((feature, index) => {
            const isVisible = visibleItems.includes(index);
            const isEven = index % 2 === 0;
            
            return (
              <AutomationCard
                key={index}
                feature={feature}
                index={index}
                isVisible={isVisible}
                isEven={isEven}
              />
            );
          })}
        </div>
      </div>

      {/* Enhanced floating ambient particles */}
      <AutomationParticles />
    </section>
  );
};

export default AutomationShowcase;
