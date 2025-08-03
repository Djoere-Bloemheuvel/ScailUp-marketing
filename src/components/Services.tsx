
import { Brain, Cog, MessageSquare, Server, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Services = () => {
  const [visibleSection, setVisibleSection] = useState<number>(-1);

  useEffect(() => {
    const observers = new Map();
    
    const sections = document.querySelectorAll('[data-service-section]');
    sections.forEach((section, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSection(index);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(section);
      observers.set(index, observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const services = [
    {
      id: 'ai-automations',
      icon: Cog,
      title: 'AI Automations',
      subtitle: 'Slim. Snel. Onzichtbaar.',
      description: 'Onze automatisering werkt in de achtergrond — maar voelt als magie op de voorgrond.',
      background: 'from-premium-black via-blue-950/20 to-premium-black',
      accentColor: 'from-blue-500 to-purple-600'
    },
    {
      id: 'custom-saas',
      icon: Brain,
      title: 'Custom AI SaaS',
      subtitle: 'Gebouwd voor schaal.',
      description: 'Custom software met AI als motor. Van prototype tot product.',
      background: 'from-premium-black via-purple-950/20 to-premium-black',
      accentColor: 'from-purple-500 to-pink-600'
    },
    {
      id: 'consultancy',
      icon: MessageSquare,
      title: 'Consultancy',
      subtitle: 'Denken in impact.',
      description: 'Samen onderzoeken we wat AI écht kan betekenen voor jouw organisatie.',
      background: 'from-premium-gray/50 via-premium-silver/5 to-premium-black',
      accentColor: 'from-premium-silver to-white'
    },
    {
      id: 'studio-service',
      icon: Server,
      title: 'AI Studio-as-a-Service',
      subtitle: 'Wij blijven aan. Jouw AI ook.',
      description: 'Buildrs.AI is geen eenmalige leverancier. We blijven je systemen beheren, verbeteren en schalen — als jouw externe AI-engineers.',
      background: 'from-black via-premium-gray/10 to-black',
      accentColor: 'from-blue-400 to-cyan-500',
      isSpecial: true
    }
  ];

  return (
    <div className="relative">
      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={index}
          isVisible={visibleSection >= index}
        />
      ))}
    </div>
  );
};

const ServiceSection = ({ service, index, isVisible }: { service: any, index: number, isVisible: boolean }) => {
  const [deviceHovered, setDeviceHovered] = useState(false);

  return (
    <section 
      data-service-section={index}
      className={`relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-b ${service.background}`}
    >
      {/* Background pattern for special section */}
      {service.isSpecial && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
          }} />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Content */}
        <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-8`}>
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Icon */}
            <div className="mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5`}>
                <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {service.title}
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-light text-premium-silver/90 tracking-wide leading-relaxed">
                {service.subtitle}
              </h3>
              
              <p className="text-lg md:text-xl text-premium-silver/70 font-light leading-relaxed max-w-lg tracking-wide">
                {service.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl overflow-hidden">
                <span className="relative z-10">
                  {service.isSpecial ? 'Plan een verkenning' : 'Meer informatie'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <span>{service.isSpecial ? 'Bekijk hoe het werkt' : 'Lees meer'}</span>
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
          <div 
            className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            onMouseEnter={() => setDeviceHovered(true)}
            onMouseLeave={() => setDeviceHovered(false)}
          >
            <div className={`relative aspect-square max-w-md mx-auto transition-all duration-700 ${deviceHovered ? 'scale-105' : 'scale-100'}`}>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-3xl opacity-20 transition-opacity duration-700 ${deviceHovered ? 'opacity-40' : 'opacity-20'}`} />
              
              {/* Main device */}
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-premium-gray/20 to-premium-black/40 border border-premium-silver/20 backdrop-blur-sm p-12 flex items-center justify-center">
                
                {service.isSpecial ? (
                  // Special animated core for Studio service
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 animate-pulse" />
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 animate-pulse delay-300" />
                    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-600/40 animate-pulse delay-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-16 h-16 text-blue-400 animate-pulse" />
                    </div>
                    
                    {/* Orbiting dots */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                      <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2" />
                      <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2" />
                    </div>
                  </div>
                ) : (
                  // Regular service visualization
                  <div className="relative w-32 h-32">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 transition-all duration-500 ${deviceHovered ? 'rotate-6' : 'rotate-0'}`}>
                      <div className="w-full h-full rounded-2xl bg-premium-black flex items-center justify-center">
                        <service.icon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br ${service.accentColor} transition-all duration-700 ${deviceHovered ? 'translate-y-2 rotate-12' : ''}`} />
                    <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br ${service.accentColor} transition-all duration-700 delay-100 ${deviceHovered ? '-translate-y-2 rotate-45' : ''}`} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-premium-black via-premium-black/80 to-transparent" />
    </section>
  );
};

export default Services;
