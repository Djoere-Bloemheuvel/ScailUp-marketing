
import { Target, Zap, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyBuildrs = () => {
  const advantages = [
    {
      icon: Target,
      title: 'Strategisch Meedenken',
      description: 'We begrijpen jouw markt en vertalen dat naar werkende oplossingen'
    },
    {
      icon: Zap,
      title: 'Razendsnel Resultaat',
      description: 'Van concept naar werkend product in weken, niet maanden'
    },
    {
      icon: Shield,
      title: 'Veilig & Schaalbaar',
      description: 'Enterprise-grade beveiliging en architectuur vanaf dag één'
    },
    {
      icon: Users,
      title: 'Geen Tech Team Nodig',
      description: 'Wij regelen alles — jij focust op jouw business'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Waarom kiezen voor Buildrs?
          </h2>
          <p className="text-lg text-premium-silver/70 max-w-3xl mx-auto">
            We combineren strategisch inzicht met technische executie voor toekomstbestendige AI-oplossingen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-to-br from-premium-gray/20 to-premium-black/40 border-premium-silver/20 backdrop-blur-md hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 cursor-default"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 flex items-center justify-center group-hover:animate-pulse">
                  <advantage.icon className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {advantage.title}
                </h3>
                <p className="text-premium-silver/70 leading-relaxed text-sm">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuildrs;
