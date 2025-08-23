import { motion } from 'framer-motion';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { useRef, useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

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
        <div className={`space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div>

            {/* Typography */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight whitespace-nowrap">
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

              {isAIAutomations ? (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.a
                    href="/ai-automations"
                    className="group relative inline-flex items-center justify-center px-20 py-4 bg-black text-white font-medium rounded-full  overflow-hidden"
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
                    <span className="relative z-10 text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-4 h-4" />
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
                    className="group relative inline-flex items-center justify-center px-20 py-4 bg-black text-white font-medium rounded-full "
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
                    <span className="relative z-10 text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-4 h-4" />
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
                    className="group relative inline-flex items-center justify-center px-20 py-4 bg-black text-white font-medium rounded-full "
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
                    <span className="relative z-10 text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-4 h-4" />
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
                    className="group relative inline-flex items-center justify-center px-20 py-4 bg-black text-white font-medium rounded-full "
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
                    <span className="relative z-10 text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              ) : (
                <div className="relative group">
                  {/* External glow aura - outside button */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-15 blur-lg scale-150 group-hover:scale-160 transition-all duration-1500 ease-out pointer-events-none`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} opacity-5 group-hover:opacity-12 blur-md scale-125 group-hover:scale-135 transition-all duration-1500 ease-out pointer-events-none`} />
                  
                  <motion.button 
                    className="group relative inline-flex items-center justify-center px-20 py-4 bg-black text-white font-medium rounded-full "
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
                    <span className="relative z-10 text-sm font-medium">{service.secondaryButtonText}</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Visual Element - Right for normal sections, Left for Autonomous AI Agents */}
        <div className={`relative ${isEven ? 'lg:order-1 lg:justify-self-start' : 'lg:order-2 lg:justify-self-end'}`}>
          <div style={{ isolation: 'isolate' }}>
            <motion.div
              className="group relative w-72 h-72"
              style={{ isolation: 'isolate' }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >

              {/* Strong backlight glow with Framer Motion */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-3xl`}
                style={{ zIndex: 1, opacity: 0.5 }}
                animate={{
                  scale: isHovered ? 1.04 : 1,
                }}
                transition={{
                  duration: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
              <motion.div
                className={`absolute inset-2 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-2xl`}
                style={{ zIndex: 1, opacity: 0.55 }}
                animate={{
                  scale: isHovered ? 1.03 : 1,
                }}
                transition={{
                  duration: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />

              {/* Main device with enhanced glassmorphism */}
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md p-20 flex items-center justify-center shadow-2xl transition-shadow duration-500 ease-out group-hover:shadow-3xl" style={{ zIndex: 2, isolation: 'isolate' }}>

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
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 shadow-xl opacity-90 transition-all duration-800 ease-out group-hover:opacity-95 group-hover:shadow-2xl`}>
                      <div className="w-full h-full rounded-2xl bg-premium-black flex items-center justify-center relative overflow-hidden shadow-inner">

                        {/* Static icon with steady glow instead of pulsing */}
                        <service.icon className="w-14 h-14 text-white/90 relative z-10 drop-shadow-lg transition-all duration-800 ease-out ease-out group-hover:text-white" style={{
                          filter: `drop-shadow(0 0 8px ${service.accentColor.includes('blue') ? '#60a5fa' :
                                                       service.accentColor.includes('purple') ? '#a855f7' :
                                                       service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}40)`
                        }} />

                        {/* Enhanced sweeping light scan with Framer Motion */}
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


                        {/* Ambient base glow inside icon container */}
                        <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${service.accentColor} opacity-10 transition-opacity duration-800 ease-out group-hover:opacity-5`} />
                      </div>
                    </div>

                    {/* Enhanced floating accent elements with more base color */}
                    <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br ${service.accentColor} opacity-50 shadow-lg transition-all duration-1000 ease-in-out group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:opacity-55`} />
                    <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br ${service.accentColor} opacity-75 shadow-lg transition-all duration-1000 ease-in-out delay-75 group-hover:translate-y-0.5 group-hover:rotate-12 group-hover:opacity-50`} />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;