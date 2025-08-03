
import { Zap, Clock, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhyAutomations = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Snelheid',
      description: 'Processen die 8 uur duurden, voltooien wij in 3 minuten. Elke dag opnieuw.'
    },
    {
      icon: Clock,
      title: '24/7 Operationeel',
      description: 'Uw automatisering stopt nooit. Weekenden, nachten — altijd actief.'
    },
    {
      icon: Target,
      title: 'Precisie',
      description: 'Nul fouten. Elke handeling exact zoals bedoeld. Geen uitzonderingen.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Waarom AI Automations?
          </h2>
          <p className="text-lg text-premium-silver/70 max-w-3xl mx-auto">
            Concrete voordelen die uw business onmiddellijk transformeren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-to-br from-premium-gray/20 to-premium-black/40 border-premium-silver/20 backdrop-blur-md hover:border-blue-400/30 transition-all duration-300 hover:scale-105 cursor-default"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center group-hover:animate-pulse">
                  <benefit.icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-premium-silver/70">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAutomations;
