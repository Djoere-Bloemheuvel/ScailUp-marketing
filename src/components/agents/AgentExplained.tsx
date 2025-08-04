
import { Brain, Network, Target, Zap } from 'lucide-react';

const AgentExplained = () => {
  const agentFeatures = [
    {
      icon: Brain,
      title: "Zelfstandige Besluitvorming",
      description: "AI agents analyseren data en nemen beslissingen zonder menselijke tussenkomst.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Network,
      title: "Systeem Integratie",
      description: "Naadloze verbinding met je bestaande tools en workflows.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Target,
      title: "Doel-georiënteerd",
      description: "Agents werken naar specifieke doelen en passen hun aanpak aan.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Zap,
      title: "Real-time Uitvoering",
      description: "Taken worden onmiddellijk uitgevoerd wanneer voorwaarden worden vervuld.",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-premium-black via-blue-950/20 to-premium-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hoe Werken AI Agents?
          </h2>
          <p className="text-xl text-premium-silver/80 max-w-3xl mx-auto leading-relaxed">
            Onze AI agents zijn meer dan tools — het zijn intelligente systemen die 
            zelfstandig complexe taken uitvoeren en zich aanpassen aan jouw bedrijfsprocessen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {agentFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Feature Card */}
              <div className="relative p-8 rounded-2xl backdrop-blur-xl border border-premium-silver/20 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-white/8 hover:to-white/[0.04] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-premium-silver/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`} />
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Van Input tot Resultaat
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            {/* Process Steps */}
            {[
              { step: 1, title: "Data Ontvangst", desc: "Agent ontvangt trigger of data" },
              { step: 2, title: "Analyse", desc: "Intelligente verwerking en besluitvorming" },
              { step: 3, title: "Actie", desc: "Uitvoering van taken en processen" },
              { step: 4, title: "Feedback", desc: "Rapportage en optimalisatie" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold mb-4">
                  {item.step}
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-premium-silver/60 text-sm max-w-32">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentExplained;
