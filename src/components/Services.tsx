
import { ArrowRight, Zap, Brain, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'AI Automations',
      description: 'Automatiseer repetitieve taken en verhoog de productiviteit van je team met slimme AI-workflows.',
      link: '/ai-automations',
      accent: 'from-yellow-400/20 via-orange-500/30 to-red-400/20',
      glowColor: 'shadow-yellow-500/20',
      borderGlow: 'border-yellow-400/30',
      iconGlow: 'text-yellow-300'
    },
    {
      icon: Brain,
      title: 'Consultancy',
      description: 'Strategisch advies en begeleiding bij het implementeren van AI-oplossingen in jouw organisatie.',
      link: '/consultancy',
      accent: 'from-blue-400/20 via-purple-500/30 to-indigo-400/20',
      glowColor: 'shadow-blue-500/20',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300'
    },
    {
      icon: Wrench,
      title: 'Custom AI SaaS',
      description: 'Op maat gemaakte AI-applicaties die perfect aansluiten bij jouw specifieke bedrijfsbehoeften.',
      link: '/custom-ai-saas',
      accent: 'from-green-400/20 via-emerald-500/30 to-teal-400/20',
      glowColor: 'shadow-green-500/20',
      borderGlow: 'border-green-400/30',
      iconGlow: 'text-green-300'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-premium-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Ambient Lighting */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Onze{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-premium-silver/80 max-w-3xl mx-auto leading-relaxed font-light">
            Van strategisch advies tot volledige implementatie - wij begeleiden je door elke stap van jouw AI-transformatie
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={service.title} className="group relative">
              {/* Service Card */}
              <div className={`
                relative h-full p-8 lg:p-10 rounded-3xl border backdrop-blur-xl transition-all duration-700 hover:scale-105 hover:-translate-y-4
                bg-gradient-to-br ${service.accent} ${service.borderGlow} ${service.glowColor}
                hover:shadow-2xl cursor-pointer
              `}>
                {/* Service Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.accent} border ${service.borderGlow} backdrop-blur-xl flex items-center justify-center ${service.glowColor}`}>
                      <service.icon className={`w-10 h-10 ${service.iconGlow} drop-shadow-lg`} />
                    </div>
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} blur-xl opacity-60 animate-pulse`} />
                  </div>
                </div>

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-premium-silver/90 mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Link to={service.link}>
                    <Button 
                      className="group/btn relative bg-white/10 text-white hover:bg-white/20 transition-all duration-500 px-6 py-3 text-lg font-semibold rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-md w-full"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Lees meer
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                      
                      {/* Button Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out rounded-xl" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Card Glow on Hover */}
              <div className={`
                absolute inset-0 rounded-3xl bg-gradient-to-br ${service.accent} opacity-0 
                group-hover:opacity-30 transition-opacity duration-700 blur-2xl -z-10
              `} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
