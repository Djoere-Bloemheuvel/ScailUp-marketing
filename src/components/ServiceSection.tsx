
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  background: string;
  accentColor: string;
  isSpecial?: boolean;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface ServiceSectionProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

const ServiceSection = ({ service, index, isVisible }: ServiceSectionProps) => {
  const [deviceHovered, setDeviceHovered] = useState(false);
  const isEven = index % 2 === 1; // 2nd and 4th sections (index 1 and 3)

  return (
    <section 
      data-service-section={index}
      className={`relative py-20 lg:py-28 flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b ${service.background}`}
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

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Content - Left for odd sections (1st, 3rd, 5th), Right for even sections (2nd, 4th) */}
        <div className={`space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Typography */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                {service.title}
              </h2>
              
              <h3 className="text-xl md:text-2xl font-light text-premium-silver/90 tracking-wide leading-relaxed">
                {service.subtitle}
              </h3>
              
              <p className="text-base md:text-lg text-premium-silver/70 font-light leading-relaxed max-w-lg tracking-wide">
                {service.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl overflow-hidden">
                <span className="relative z-10 text-sm font-medium">
                  {service.primaryButtonText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Element - Right for odd sections (1st, 3rd, 5th), Left for even sections (2nd, 4th) */}
        <div className={`relative ${isEven ? 'lg:order-1 lg:justify-self-start' : 'lg:order-2 lg:justify-self-end'}`}>
          <div 
            className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            onMouseEnter={() => setDeviceHovered(true)}
            onMouseLeave={() => setDeviceHovered(false)}
          >
            <div className={`relative w-72 h-72 transition-all duration-700 ${deviceHovered ? 'scale-105' : 'scale-100'}`}>
              
              {/* Enhanced glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-3xl opacity-20 transition-all duration-700 ${deviceHovered ? 'opacity-50 scale-110' : 'opacity-20 scale-100'}`} />
              
              {/* Main device with enhanced glassmorphism */}
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-premium-gray/30 to-premium-black/50 border border-premium-silver/30 backdrop-blur-md p-20 flex items-center justify-center shadow-2xl">
                
                {service.isSpecial ? (
                  // Special animated core for Studio service
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-400/30 animate-pulse" />
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/40 animate-pulse delay-300" />
                    <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-600/50 to-cyan-600/50 animate-pulse delay-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-14 h-14 text-blue-400 animate-pulse drop-shadow-lg" />
                    </div>
                    
                    {/* Orbiting dots */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                      <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 shadow-lg" />
                      <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-lg" />
                    </div>
                  </div>
                ) : (
                  // Regular service visualization with enhanced effects
                  <div className="relative w-28 h-28">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 transition-all duration-500 shadow-xl`}>
                      <div className="w-full h-full rounded-2xl bg-premium-black flex items-center justify-center relative overflow-hidden shadow-inner">
                        
                        {/* Pulsing icon with enhanced glow */}
                        <service.icon className="w-14 h-14 text-white animate-pulse relative z-10 drop-shadow-lg" />
                        
                        {/* Enhanced sweeping light scan */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-pulse" 
                             style={{ 
                               animation: 'sweep 3s ease-in-out infinite',
                               animationDelay: `${index * 0.5}s`
                             }} />
                        
                        {/* Enhanced hover scan line */}
                        {deviceHovered && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse" />
                        )}
                      </div>
                    </div>
                    
                    {/* Enhanced floating accent elements */}
                    <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br ${service.accentColor} transition-all duration-700 shadow-lg ${deviceHovered ? 'translate-y-1 rotate-12 shadow-xl' : ''}`} />
                    <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br ${service.accentColor} transition-all duration-700 delay-100 shadow-lg ${deviceHovered ? '-translate-y-1 rotate-45 shadow-xl' : ''}`} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
