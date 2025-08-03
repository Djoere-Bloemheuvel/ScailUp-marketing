
import { Brain, Cog, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Cog,
      title: "AI Automations",
      description: "Slimme workflows verpakt in elegante mini-SaaS oplossingen. n8n + LLMs + JavaScript in perfecte harmonie.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Brain,
      title: "Custom AI SaaS",
      description: "Volledige producten gebouwd met cutting-edge design. Van concept tot schaalbere realiteit.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: MessageSquare,
      title: "Consultancy",
      description: "Strategische AI deepdives. Audit van je processen. Roadmap & maatwerkvoorstel voor maximale ROI.",
      gradient: "from-pink-500/20 to-orange-500/20"
    },
  ];

  return (
    <section id="services-section" className="py-40 px-4 bg-premium-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-premium-gray/30 via-transparent to-premium-gray/30"></div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-24">
          <h2 className={`text-5xl md:text-7xl font-bold text-white mb-8 ${isVisible ? 'fade-in-up' : ''}`}>
            Wat we <span className="text-gradient-premium">doen</span>
          </h2>
          <p className={`text-premium-silver/80 text-xl md:text-2xl max-w-3xl mx-auto font-light ${isVisible ? 'fade-in-up stagger-2' : ''}`}>
            Drie pijlers van AI-excellentie, toegespitst op meetbare businessresultaten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative p-10 rounded-3xl premium-card hover-lift transition-all duration-700 ${isVisible ? 'scale-in' : ''}`}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Icon container with premium effects */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl premium-card flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-10 h-10 text-premium-silver group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="w-6 h-6 text-premium-silver" />
                </div>
              </div>
              
              <h3 className="relative text-3xl font-bold text-white mb-6 group-hover:text-gradient-premium transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="relative text-premium-silver/90 leading-relaxed text-lg group-hover:text-premium-silver transition-colors duration-300">
                {service.description}
              </p>

              {/* Premium border effect */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-premium-silver/20 transition-colors duration-700"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                   style={{
                     background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(192, 192, 192, 0.1), transparent 40%)'
                   }}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
