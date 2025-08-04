
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
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-premium-black via-emerald-950/10 to-premium-black">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Waarom kiezen voor Buildrs?
          </h2>
          <p className="text-lg md:text-xl text-premium-silver/80 leading-relaxed font-light max-w-4xl mx-auto">
            Buildrs is jouw partner in het bouwen van toekomstbestendige AI SaaS oplossingen. We combineren strategisch inzicht met technische executie: van businessmodelvalidatie tot data-integratie en AI-automatisering. Dankzij onze pragmatische aanpak realiseer je binnen weken een werkend product – zonder ontwikkelaars aan jouw kant. We denken mee over positionering, schaalbaarheid, gebruikerservaring én de juiste AI-modellen die passen bij jouw markt en doelgroep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl hover:bg-gradient-to-br hover:from-white/10 hover:to-white/[0.05] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-100 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-premium-silver/70 leading-relaxed text-sm group-hover:text-premium-silver/90 transition-colors duration-300">
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
