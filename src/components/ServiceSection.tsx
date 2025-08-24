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
      className={`relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 flex items-center justify-center px-3 xs:px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b ${service.background}`}
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

        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-[20%] ${isEven ? 'lg:flex-row-reverse' : ''}`}>

          {/* Visual Element - 40% */}
          <motion.div
            className="relative w-full lg:w-[40%] flex-shrink-0 lg:pl-8 xl:pl-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 1.2, 
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="isolate">
              <div className="group relative w-64 h-64 lg:w-72 lg:h-72 mx-auto isolate">
                
                {/* Backlight glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-3xl opacity-80 z-10 group-hover:scale-[1.04] transition-transform duration-400`} />
                <div className={`absolute inset-2 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-2xl opacity-40 z-10 group-hover:scale-[1.03] transition-transform duration-400`} />
                
                {/* Device with glassmorphism */}
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 p-12 flex items-center justify-center shadow-3xl transition-shadow duration-500 ease-out group-hover:shadow-4xl z-20 isolate will-change-auto">
                  
                  {/* Service visualization */}
                  <div className="relative w-[6.5rem] h-[6.5rem]">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 shadow-2xl opacity-85 transition-all duration-800 ease-out group-hover:opacity-90 group-hover:shadow-3xl`}>
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center relative overflow-hidden shadow-inner">
                        
                        {/* Icon with glow */}
                        <service.icon className="w-[3.25rem] h-[3.25rem] text-white relative z-10 drop-shadow-2xl transition-all duration-800 ease-out group-hover:text-white" style={{
                          filter: `drop-shadow(0 0 16px ${service.accentColor.includes('blue') ? '#60a5fa' :
                                                           service.accentColor.includes('purple') ? '#a855f7' :
                                                           service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}80)`,
                          transition: 'filter 0.5s ease-out'
                        }} />
                        
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
                    <div className={`absolute -top-4 -right-4 w-6 h-6 rounded-lg bg-gradient-to-br ${service.accentColor} opacity-35 shadow-xl transition-all duration-1000 ease-in-out group-hover:-translate-y-1 group-hover:rotate-6 group-hover:opacity-40`} />
                    <div className={`absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-gradient-to-br ${service.accentColor} opacity-45 shadow-xl transition-all duration-1000 ease-in-out delay-75 group-hover:translate-y-1 group-hover:rotate-12 group-hover:opacity-50`} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content - 40% */}
          <motion.div 
            className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 text-left w-full lg:w-[40%] lg:pr-16 xl:pr-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
          <div>

            {/* Typography */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              <motion.h2 
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {service.title}
              </motion.h2>

              <motion.h3 
                className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-light text-premium-silver/90 tracking-wide leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {service.subtitle}
              </motion.h3>

              <motion.p 
                className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg text-premium-silver/70 font-light leading-relaxed max-w-none sm:max-w-lg md:max-w-none tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {service.description}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-4 pt-4 xs:pt-5 sm:pt-6 md:pt-8 justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
            >

              {isAIAutomations ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/ai-automations"
                    className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-black text-white font-medium text-xs xs:text-sm sm:text-sm md:text-base rounded-full overflow-hidden"
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
                    <span className="relative z-10 text-xs xs:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-1.5 xs:ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : isCustomSaaS ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/custom-ai-saas"
                    className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-black text-white font-medium rounded-full"
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
                    <span className="relative z-10 text-xs xs:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-1.5 xs:ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : isConsultancy ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/consultancy"
                    className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-black text-white font-medium rounded-full"
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
                    <span className="relative z-10 text-xs xs:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-1.5 xs:ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : isAutonomousAgents ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/autonomous-ai-agents"
                    className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-black text-white font-medium rounded-full"
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
                    <span className="relative z-10 text-xs xs:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-1.5 xs:ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.button 
                    className="group relative inline-flex items-center justify-center px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-black text-white font-medium rounded-full"
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
                    <span className="relative z-10 text-xs xs:text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-1.5 xs:ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4" />
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