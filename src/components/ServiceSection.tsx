import { motion } from 'framer-motion';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { useRef } from 'react';

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
  const sectionRef = useRef<HTMLDivElement>(null);

  // Determine layout order - Autonomous AI Agents should have text on right, visual on left
  const isAutonomousAgents = service.id === 'autonomous-agents';
  // For Autonomous AI Agents: force isEven to true (visual left, text right)
  // For others: use normal alternating pattern
  const isEven = isAutonomousAgents ? true : (index % 2 === 1);

  // Determine service type for routing
  const isAIAutomations = service.id === 'ai-automations';
  const isCustomSaaS = service.id === 'custom-saas';
  const isConsultancy = service.id === 'consultancy';

  return (
    <section
      ref={sectionRef}
      data-service-section={index}
      className={`relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 flex items-center justify-center px-3 xs:px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b ${service.background}`}
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

      <div className="relative w-full max-w-none mx-auto px-8 lg:px-16 xl:px-24">

        <div className={`flex flex-col lg:flex-row items-center lg:items-center gap-16 lg:gap-56 ${isEven ? 'lg:flex-row-reverse' : ''}`}>

          {/* Visual Element - 35% */}
          <motion.div
            className={`relative w-full lg:w-[40%] flex-shrink-0 flex items-center ${isEven ? 'justify-end lg:pr-16' : 'justify-start lg:pl-16'}`}
            initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ 
              duration: 1.0, 
              delay: index * 0.1,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <div className="isolate">
              <motion.a
                href={
                  service.id === 'lead-engine' ? '/lead-engine' :
                  service.id === 'sales-engine' ? '/sales-engine' :
                  service.id === 'agents-automations' ? '/agents-automations' :
                  '#'
                }
                className="group relative w-[17rem] h-[17rem] lg:w-[19rem] lg:h-[19rem] isolate block cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                whileTap={{
                  scale: 0.98,
                  transition: {
                    duration: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
              >
                
                {/* Backlight glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-3xl opacity-80 z-10 group-hover:scale-[1.02] transition-all duration-300 ease-out`} />
                <div className={`absolute inset-2 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-2xl opacity-40 z-10 group-hover:scale-[1.015] group-hover:opacity-50 transition-all duration-300 ease-out`} />
                
                {/* Device with glassmorphism */}
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 p-12 flex items-center justify-center shadow-3xl transition-all duration-300 ease-out group-hover:shadow-4xl z-20 isolate will-change-auto">
                  
                  {/* Service visualization */}
                  <div className="relative w-[7.5rem] h-[7.5rem]">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 shadow-2xl opacity-85 transition-all duration-300 ease-out group-hover:opacity-95 group-hover:shadow-3xl`}>
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center relative overflow-hidden shadow-inner">
                        
                        {/* Icon with glow */}
                        <service.icon className="w-[3.75rem] h-[3.75rem] text-white relative z-10 drop-shadow-2xl transition-all duration-300 ease-out group-hover:text-white group-hover:scale-105" style={{
                          filter: `drop-shadow(0 0 16px ${service.accentColor.includes('blue') ? '#60a5fa' :
                                                           service.accentColor.includes('purple') ? '#a855f7' :
                                                           service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}60)`,
                          transition: 'filter 0.3s ease-out, transform 0.3s ease-out'
                        }} 
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = `drop-shadow(0 0 20px ${service.accentColor.includes('blue') ? '#60a5fa' :
                                                                       service.accentColor.includes('purple') ? '#a855f7' :
                                                                       service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}80)`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = `drop-shadow(0 0 16px ${service.accentColor.includes('blue') ? '#60a5fa' :
                                                                       service.accentColor.includes('purple') ? '#a855f7' :
                                                                       service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}60)`
                        }}
                        />
                        
                        {/* Enhanced sweeping light with Framer Motion */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{
                            x: '100%',
                            transition: {
                              duration: 3,
                              ease: 'easeInOut',
                              repeat: Infinity,
                              delay: index * 0.5
                            }
                          }}
                          whileHover={{
                            transition: {
                              duration: 2,
                              ease: 'easeInOut',
                              repeat: Infinity,
                              delay: 0
                            }
                          }}
                        />
                        
                      </div>
                    </div>
                    
                    {/* Floating accent elements */}
                    <div className={`absolute -top-5 -right-5 w-7 h-7 rounded-lg bg-gradient-to-br ${service.accentColor} opacity-35 shadow-xl transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-12 group-hover:opacity-50`} />
                    <div className={`absolute -bottom-5 -left-5 w-5 h-5 rounded-full bg-gradient-to-br ${service.accentColor} opacity-45 shadow-xl transition-all duration-600 ease-out group-hover:translate-y-1 group-hover:rotate-18 group-hover:opacity-60`} />
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Content - Full Width */}
          <motion.div 
            className={`space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 text-left flex-1 min-w-0 flex flex-col justify-center ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}
            initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ 
              duration: 1.0, 
              delay: index * 0.1 + 0.1,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
          <div>

            {/* Typography */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              <motion.h2 
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight tracking-tight whitespace-nowrap"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1 + 0.3,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                {service.title}
              </motion.h2>

              <motion.h3 
                className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-light text-premium-silver/90 tracking-wide leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1 + 0.4,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                {service.subtitle}
              </motion.h3>

              <motion.p 
                className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg text-premium-silver/70 font-light leading-relaxed max-w-none tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1 + 0.5,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                {service.description}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-4 pt-4 xs:pt-5 sm:pt-6 md:pt-8 justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1 + 0.6,
                ease: [0.23, 1, 0.32, 1]
              }}
            >

              {service.id === 'agents-automations' ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/sales-engine"
                    className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full overflow-hidden"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    whileTap={{
                      scale: 0.98,
                      y: 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{
                      filter: "drop-shadow(0 4px 12px rgba(59, 130, 246, 0.2))"
                    }}
                  >
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-30 group-hover:opacity-100 transition-all duration-800 ease-out`}>
                      <div className="w-full h-full rounded-full bg-premium-black" />
                    </div>
                    {/* Rotating gradient border on hover */}
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-5 animate-spin transition-opacity duration-800`} style={{ animationDuration: '4s' }}>
                      <div className={`w-full h-full rounded-full bg-gradient-conic ${service.accentColor} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-premium-black" />
                      </div>
                    </div>
                    <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : service.id === 'sales-engine' ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/sales-engine"
                    className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    whileTap={{
                      scale: 0.98,
                      y: 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{
                      filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.2))"
                    }}
                  >
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-30 group-hover:opacity-100 transition-all duration-800 ease-out`}>
                      <div className="w-full h-full rounded-full bg-premium-black" />
                    </div>
                    {/* Rotating gradient border on hover */}
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-5 animate-spin transition-opacity duration-800`} style={{ animationDuration: '4s' }}>
                      <div className={`w-full h-full rounded-full bg-gradient-conic ${service.accentColor} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-premium-black" />
                      </div>
                    </div>
                    <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : service.id === 'marketing-engine' ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/marketing-engine"
                    className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    whileTap={{
                      scale: 0.98,
                      y: 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{
                      filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.2))"
                    }}
                  >
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-30 group-hover:opacity-100 transition-all duration-800 ease-out`}>
                      <div className="w-full h-full rounded-full bg-premium-black" />
                    </div>
                    {/* Rotating gradient border on hover */}
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-5 animate-spin transition-opacity duration-800`} style={{ animationDuration: '4s' }}>
                      <div className={`w-full h-full rounded-full bg-gradient-conic ${service.accentColor} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-premium-black" />
                      </div>
                    </div>
                    <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : service.id === 'lead-engine' ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/lead-engine"
                    className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    whileTap={{
                      scale: 0.98,
                      y: 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{
                      filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.2))"
                    }}
                  >
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-30 group-hover:opacity-100 transition-all duration-800 ease-out`}>
                      <div className="w-full h-full rounded-full bg-premium-black" />
                    </div>
                    {/* Rotating gradient border on hover */}
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-5 animate-spin transition-opacity duration-800`} style={{ animationDuration: '4s' }}>
                      <div className={`w-full h-full rounded-full bg-gradient-conic ${service.accentColor} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-premium-black" />
                      </div>
                    </div>
                    <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.button 
                    className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    whileTap={{
                      scale: 0.98,
                      y: 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{
                      filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.2))"
                    }}
                  >
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-30 group-hover:opacity-100 transition-all duration-800 ease-out`}>
                      <div className="w-full h-full rounded-full bg-premium-black" />
                    </div>
                    {/* Rotating gradient border on hover */}
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-5 animate-spin transition-opacity duration-800`} style={{ animationDuration: '4s' }}>
                      <div className={`w-full h-full rounded-full bg-gradient-conic ${service.accentColor} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-premium-black" />
                      </div>
                    </div>
                    <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;