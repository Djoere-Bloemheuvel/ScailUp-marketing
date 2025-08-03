
import { Brain, Cog, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "AI Automations",
      description: "Slimme workflows verpakt in elegante mini-SaaS oplossingen. n8n + LLMs + JavaScript in perfecte harmonie.",
    },
    {
      icon: Brain,
      title: "Custom AI SaaS",
      description: "Volledige producten gebouwd met cutting-edge design. Van concept tot schaalbere realiteit.",
    },
    {
      icon: MessageSquare,
      title: "Consultancy",
      description: "Strategische AI deepdives. Audit van je processen. Roadmap & maatwerkvoorstel voor maximale ROI.",
    },
  ];

  return (
    <section className="py-32 px-4 bg-premium-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wat we <span className="text-gradient">doen</span>
          </h2>
          <p className="text-premium-silver/80 text-lg max-w-2xl mx-auto">
            Drie pijlers van AI-excellentie, toegespitst op meetbare businessresultaten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-premium-silver/10 bg-gradient-to-br from-premium-gray/50 to-transparent backdrop-blur-sm hover:border-premium-silver/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-premium-silver group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-premium-silver/90 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
