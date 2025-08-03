
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
      gradient: "from-blue-500/10 via-purple-500/15 to-pink-500/10",
      glowColor: "rgba(90, 90, 209, 0.3)"
    },
    {
      icon: Brain,
      title: "Custom AI SaaS",
      description: "Volledige producten gebouwd met cutting-edge design. Van concept tot schaalbare realiteit.",
      gradient: "from-purple-500/10 via-pink-500/15 to-orange-500/10",
      glowColor: "rgba(163, 82, 242, 0.3)"
    },
    {
      icon: MessageSquare,
      title: "Consultancy",
      description: "Strategische AI deepdives. Audit van je processen. Roadmap & maatwerkvoorstel voor maximale ROI.",
      gradient: "from-premium-gray/10 via-premium-silver/5 to-premium-gray/10",
      glowColor: "rgba(192, 192, 192, 0.2)"
    },
  ];

  return (
    <section id="services-section" className="relative py-32 px-4 bg-premium-black overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-gray/5 to-premium-black"></div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Wat we <span className="bg-gradient-to-r from-premium-silver via-white to-premium-silver bg-clip-text text-transparent">doen</span>
          </h2>
          <p className={`text-premium-silver/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Drie pijlers van AI-excellentie, toegespitst op meetbare businessresultaten.
          </p>
        </div>

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* First card - full width on mobile, spans 5 columns on lg */}
          <div 
            className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ animationDelay: `${0.3}s` }}
          >
            <ServiceCard service={services[0]} index={0} />
          </div>
          
          {/* Second card - spans 7 columns on lg */}
          <div 
            className={`lg:col-span-7 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ animationDelay: `${0.5}s` }}
          >
            <ServiceCard service={services[1]} index={1} />
          </div>
          
          {/* Third card - centered, spans 6 columns with offset on lg */}
          <div 
            className={`lg:col-span-6 lg:col-start-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ animationDelay: `${0.7}s` }}
          >
            <ServiceCard service={services[2]} index={2} />
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-premium-black via-premium-black/95 to-transparent"></div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="group relative h-full"
      onMouseMove={handleMouseMove}
    >
      <div className="relative h-full p-8 lg:p-10 rounded-3xl backdrop-blur-sm bg-white/[0.02] border border-white/10 transition-all duration-700 ease-out hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl">
        {/* Glassmorphism background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
        
        {/* Mouse tracking glow */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${service.glowColor}, transparent 40%)`
          }}
        ></div>

        {/* Icon container */}
        <div className="relative mb-8">
          <div className="w-16 h-16 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
            <service.icon className="w-8 h-8 text-premium-silver group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12">
            <ArrowUpRight className="w-5 h-5 text-premium-silver/60" />
          </div>
        </div>
        
        <h3 className="relative text-2xl lg:text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-white transition-all duration-300">
          {service.title}
        </h3>
        
        <p className="relative text-premium-silver/80 leading-relaxed text-base lg:text-lg group-hover:text-premium-silver transition-colors duration-300 tracking-wide">
          {service.description}
        </p>

        {/* Subtle highlight border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </div>
  );
};

export default Services;
