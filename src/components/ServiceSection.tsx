import { useState, useRef, useMemo, useCallback } from 'react';
import { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  
  // Optimized hover handlers with useCallback
  const handleMouseEnter = useCallback(() => setDeviceHovered(true), []);
  const handleMouseLeave = useCallback(() => setDeviceHovered(false), []);
  
  // Once visible, keep it visible to prevent unloading
  if (isVisible && !hasBeenVisible) {
    setHasBeenVisible(true);
  }
  
  // Memoized layout calculations
  const layoutConfig = useMemo(() => {
    const isAutonomousAgents = service.id === 'autonomous-agents';
    const isEven = isAutonomousAgents ? true : (index % 2 === 1);
    
    return {
      isAutonomousAgents,
      isEven,
      isAIAutomations: service.id === 'ai-automations',
      isCustomSaaS: service.id === 'custom-saas',
      isConsultancy: service.id === 'consultancy'
    };
  }, [service.id, index]);
  
  const shouldShowContent = hasBeenVisible || isVisible;

  // Memoized style calculations for better performance
  const visualStyles = useMemo(() => ({
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transitionDelay: shouldShowContent ? '200ms' : '0ms'
  }), [shouldShowContent]);

  const iconDropShadowColor = useMemo(() => {
    if (service.accentColor.includes('blue')) return '#60a5fa40';
    if (service.accentColor.includes('purple')) return '#a855f740';
    if (service.accentColor.includes('green')) return '#34d39940';
    return '#60a5fa40';
  }, [service.accentColor]);

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
        
        {/* Content - Left for normal sections, Right for Autonomous AI Agents */}
        <div className={`space-y-8 ${layoutConfig.isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className={`transition-all duration-1000 cubic-bezier(0.25, 0.46, 0.45, 0.94) ${shouldShowContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
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
              <button className="service-button group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl overflow-hidden">
                <span className="relative z-10 text-sm font-medium">
                  {service.primaryButtonText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              </button>
              
              {layoutConfig.isAIAutomations ? (
                <Link 
                  to="/ai-automations"
                  className="service-button group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                >
                  <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                </Link>
              ) : layoutConfig.isCustomSaaS ? (
                <Link 
                  to="/custom-ai-saas"
                  className="service-button group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                >
                  <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                </Link>
              ) : layoutConfig.isConsultancy ? (
                <Link 
                  to="/consultancy"
                  className="service-button group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                >
                  <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                </Link>
              ) : layoutConfig.isAutonomousAgents ? (
                <Link 
                  to="/autonomous-ai-agents"
                  className="service-button group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                >
                  <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                </Link>
              ) : (
                <button className="service-button group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
                  <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Visual Element - Right for normal sections, Left for Autonomous AI Agents */}
        <div className={`relative ${layoutConfig.isEven ? 'lg:order-1 lg:justify-self-start' : 'lg:order-2 lg:justify-self-end'}`}>
          <div 
            className={`service-visual transition-all duration-1000 cubic-bezier(0.25, 0.46, 0.45, 0.94) ${shouldShowContent ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
            style={visualStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`relative w-72 h-72 transition-all duration-500 ease-out ${deviceHovered ? 'scale-105' : 'scale-100'}`}>
              
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
                        <service.icon 
                          className="service-icon w-14 h-14 text-white/90 relative z-10 drop-shadow-lg transition-all duration-300 ease-out" 
                          style={{
                            filter: `drop-shadow(0 0 8px ${iconDropShadowColor})`
                          }} 
                        />
                        
                        {/* Enhanced sweeping light scan with more base presence */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full will-change-transform" 
                          style={{ 
                            animation: 'sweep 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                            animationDelay: `${index * 0.7}s`
                          }} 
                        />
                        
                        {/* Enhanced hover scan line */}
                        {deviceHovered && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transition-opacity duration-300" />
                        )}
                        
                        {/* Ambient base glow inside icon container */}
                        <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${service.accentColor} transition-all duration-500 ease-out ${deviceHovered ? 'opacity-20' : 'opacity-10'}`} />
                      </div>
                    </div>
                    
                    {/* Enhanced floating accent elements with more base color */}
                    <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br ${service.accentColor} transition-all duration-500 ease-out shadow-lg will-change-transform ${deviceHovered ? 'translate-y-1 rotate-12 shadow-xl opacity-90' : 'opacity-80'}`} />
                    <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br ${service.accentColor} transition-all duration-500 ease-out delay-75 shadow-lg will-change-transform ${deviceHovered ? '-translate-y-1 rotate-45 shadow-xl opacity-85' : 'opacity-75'}`} />
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
