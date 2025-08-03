import { useState, useRef } from 'react';
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
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Once visible, keep it visible to prevent unloading
  if (isVisible && !hasBeenVisible) {
    setHasBeenVisible(true);
  }
  
  const isEven = index % 2 === 1; // 2nd and 4th sections (index 1 and 3)
  const shouldShowContent = hasBeenVisible || isVisible;

  return (
    <section 
      ref={sectionRef}
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
          <div className={`transition-all duration-1000 ease-out ${shouldShowContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
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
            className={`transition-all duration-1200 ease-out ${shouldShowContent ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
            style={{ transitionDelay: shouldShowContent ? '200ms' : '0ms' }}
            onMouseEnter={() => setDeviceHovered(true)}
            onMouseLeave={() => setDeviceHovered(false)}
          >
            <div className={`relative w-72 h-72 transition-all duration-700 ${deviceHovered ? 'scale-105' : 'scale-100'}`}>
              
              {/* Enhanced glow effect with more base presence */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-3xl opacity-40 transition-all duration-700 ${deviceHovered ? 'opacity-70 scale-110' : 'opacity-40 scale-100'}`} />
              
              {/* Main device with enhanced glassmorphism */}
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md p-20 flex items-center justify-center shadow-2xl">
                
                {service.isSpecial ? (
                  // Special animated core for Studio service with steady glow instead of pulsing
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/50 to-cyan-400/50" />
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-500/60 to-cyan-500/60" />
                    <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-600/70 to-cyan-600/70" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-14 h-14 text-blue-300 drop-shadow-lg" />
                    </div>
                    
                    {/* Orbiting dots with enhanced visibility but no pulsing */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                      <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-300 rounded-full transform -translate-x-1/2 shadow-lg shadow-blue-400/50" />
                      <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-300 rounded-full transform -translate-x-1/2 shadow-lg shadow-cyan-400/50" />
                    </div>
                  </div>
                ) : (
                  // Regular service visualization with steady glow instead of pulsing
                  <div className="relative w-28 h-28">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 transition-all duration-500 shadow-xl opacity-90 ${deviceHovered ? 'opacity-100' : ''}`}>
                      <div className="w-full h-full rounded-2xl bg-premium-black flex items-center justify-center relative overflow-hidden shadow-inner">
                        
                        {/* Static icon with steady glow instead of pulsing */}
                        <service.icon className="w-14 h-14 text-white/90 relative z-10 drop-shadow-lg transition-all duration-300" style={{
                          filter: `drop-shadow(0 0 8px ${service.accentColor.includes('blue') ? '#60a5fa' : 
                                                       service.accentColor.includes('purple') ? '#a855f7' : 
                                                       service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}40)`
                        }} />
                        
                        {/* Enhanced sweeping light scan with more base presence */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full" 
                             style={{ 
                               animation: 'sweep 3s ease-in-out infinite',
                               animationDelay: `${index * 0.5}s`
                             }} />
                        
                        {/* Enhanced hover scan line */}
                        {deviceHovered && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                        )}
                        
                        {/* Ambient base glow inside icon container */}
                        <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${service.accentColor} opacity-10 transition-all duration-700 ${deviceHovered ? 'opacity-20' : 'opacity-10'}`} />
                      </div>
                    </div>
                    
                    {/* Enhanced floating accent elements with more base color */}
                    <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br ${service.accentColor} opacity-80 transition-all duration-700 shadow-lg ${deviceHovered ? 'translate-y-1 rotate-12 shadow-xl opacity-90' : 'opacity-80'}`} />
                    <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br ${service.accentColor} opacity-75 transition-all duration-700 delay-100 shadow-lg ${deviceHovered ? '-translate-y-1 rotate-45 shadow-xl opacity-85' : 'opacity-75'}`} />
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
