
import { CheckCircle } from 'lucide-react';

const WhyAutomations = () => {
  const automationBenefits = [
    {
      title: "Tijd Besparen",
      description: "Automatiseer repetitieve taken en focus op strategisch werk",
      icon: CheckCircle
    },
    {
      title: "Foutreductie",
      description: "Menselijke fouten elimineren door consistente processen",
      icon: CheckCircle
    },
    {
      title: "24/7 Beschikbaarheid", 
      description: "Systemen werken rond de klok zonder pauzes",
      icon: CheckCircle
    },
    {
      title: "Schaalbaarheid",
      description: "Processen groeien mee met je bedrijf zonder extra personeel",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-premium-black via-blue-950/10 to-premium-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Waarom Kiezen voor AI Automatisering?
          </h2>
          <p className="text-xl text-premium-silver/80 max-w-3xl mx-auto">
            Transformeer je bedrijfsprocessen met intelligente automatisering die verder gaat dan traditionele tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {automationBenefits.map((benefit, index) => (
            <div key={index} className="group p-8 rounded-2xl backdrop-blur-xl border border-premium-silver/20 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-white/8 hover:to-white/[0.04] transition-all duration-300">
              <benefit.icon className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-premium-silver/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAutomations;
