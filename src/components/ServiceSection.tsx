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
  // Walkthrough specific props
  number?: string;
  highlight?: string;
  metrics?: string;
}

interface ServiceSectionProps {
  service: Service;
  index: number;
  isVisible: boolean;
  walkthrough?: boolean;
}

const ServiceSection = ({ service, index, isVisible, walkthrough = false }: ServiceSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Determine layout order
  const isAutonomousAgents = service.id === 'autonomous-agents';
  // For walkthrough mode: always alternate
  // For Autonomous AI Agents: force isEven to true (visual left, text right)
  // For others: use normal alternating pattern
  const isEven = walkthrough ? (index % 2 === 0) : (isAutonomousAgents ? true : (index % 2 === 1));
  
  // Alternating horizontal animation direction
  const isEvenIndex = index % 2 === 0;
  const xDirection = isEvenIndex ? -24 : 24;

  // Determine service type for routing
  const isAIAutomations = service.id === 'ai-automations';
  const isCustomSaaS = service.id === 'custom-saas';
  const isConsultancy = service.id === 'consultancy';

  return (
    <section
      ref={sectionRef}
      data-service-section={index}
      className={`relative ${walkthrough ? 'py-16 lg:py-20' : 'py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32'} flex items-center justify-center px-3 xs:px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b ${service.background}`}
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

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">

        {/* Visual Element - Right for normal sections, Left for special cases */}
        <div className={`relative flex items-center justify-center ${isEven ? 'lg:order-2 lg:justify-self-end' : 'lg:order-1 lg:justify-self-start'}`}>
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: {
                duration: 0.2,
                delay: 0,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div style={{ isolation: 'isolate' }}>
              {walkthrough ? (
                <motion.div
                  className="group relative w-full max-w-2xl"
                  style={{ isolation: 'isolate' }}
                  whileHover={{
                    y: -2,
                    transition: {
                      duration: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                >
                  {/* Premium glow */}
                  <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/8 via-blue-400/4 to-cyan-400/6 rounded-3xl blur-3xl"></div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 rounded-3xl blur-xl"></div>
                  
                  {/* Ultra-premium screenshot container */}
                  <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-850/80 to-slate-900/90 rounded-3xl border border-slate-700/30 backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 ring-blue-500/5">
                    {service.id === 'step-1' && (
                      <div className="w-full h-96 p-8">
                        {/* Premium browser header */}
                        <div className="flex items-center gap-3 mb-8">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
                          </div>
                          <div className="flex-1 bg-slate-800/40 rounded-lg px-4 py-2 ml-4 border border-slate-600/20">
                            <div className="text-slate-300 text-sm font-mono">app.scailup.com/targeting</div>
                          </div>
                        </div>
                        
                        {/* Clean interface */}
                        <div className="space-y-6">
                          <div className="text-white font-light text-xl mb-6">Target Audience</div>
                          
                          {/* Filter cards */}
                          <div className="space-y-4">
                            <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/30 backdrop-blur-sm">
                              <div className="text-blue-200 font-medium mb-3 text-sm uppercase tracking-wide">Company Size</div>
                              <div className="flex flex-wrap gap-2">
                                <div className="px-4 py-2 bg-blue-500/15 text-blue-200 text-sm rounded-lg border border-blue-500/20 font-medium">50-200 employees</div>
                                <div className="px-4 py-2 bg-slate-700/30 text-slate-400 text-sm rounded-lg border border-slate-600/20">200-500</div>
                                <div className="px-4 py-2 bg-slate-700/30 text-slate-400 text-sm rounded-lg border border-slate-600/20">500+</div>
                              </div>
                            </div>
                            
                            <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/30 backdrop-blur-sm">
                              <div className="text-cyan-200 font-medium mb-3 text-sm uppercase tracking-wide">Industry</div>
                              <div className="flex flex-wrap gap-2">
                                <div className="px-4 py-2 bg-cyan-500/15 text-cyan-200 text-sm rounded-lg border border-cyan-500/20 font-medium">SaaS</div>
                                <div className="px-4 py-2 bg-cyan-500/15 text-cyan-200 text-sm rounded-lg border border-cyan-500/20 font-medium">E-commerce</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Results */}
                          <motion.div 
                            className="bg-gradient-to-r from-blue-500/10 via-cyan-500/8 to-blue-600/10 rounded-2xl p-5 border border-blue-400/20 backdrop-blur-sm"
                            animate={{ opacity: [0.9, 1, 0.9] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <div className="text-white font-semibold text-lg">12,847 prospects found</div>
                            <div className="text-slate-300 text-sm mt-1 font-light">98.2% data accuracy • Ready to export</div>
                          </motion.div>
                        </div>
                      </div>
                    )}
                    
                    {service.id === 'step-2' && (
                      <div className="w-full h-96 p-8">
                        {/* Premium header */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="text-white font-light text-xl">Campaign Builder</div>
                          <div className="px-4 py-2 bg-green-500/10 text-green-300 text-sm rounded-xl border border-green-500/20 flex items-center gap-2 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="font-medium">AI Generating</span>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          {/* AI Proposition */}
                          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/30 backdrop-blur-sm">
                            <div className="text-purple-200 font-medium mb-4 text-sm uppercase tracking-wide">Generated Value Prop</div>
                            <div className="text-slate-200 text-base leading-relaxed font-light mb-4">
                              "Increase your conversion rate by 47% with personalized outreach sequences that resonate with your ideal customers."
                            </div>
                            <div className="flex gap-3">
                              <button className="px-4 py-2 bg-purple-500/15 text-purple-200 text-sm rounded-lg border border-purple-500/20 font-medium hover:bg-purple-500/20 transition-colors">Use this</button>
                              <button className="px-4 py-2 bg-slate-700/30 text-slate-400 text-sm rounded-lg border border-slate-600/20 font-medium hover:bg-slate-700/40 transition-colors">Refine</button>
                            </div>
                          </div>
                          
                          {/* Message sequence */}
                          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/30 backdrop-blur-sm">
                            <div className="text-cyan-200 font-medium mb-4 text-sm uppercase tracking-wide">Email Sequence (3/5)</div>
                            <div className="space-y-3">
                              <div className="bg-slate-700/40 rounded-lg p-3 border border-slate-600/20">
                                <div className="text-slate-200 text-sm font-light">"Hi [NAME], I noticed your recent Series A announcement..."</div>
                              </div>
                              <div className="bg-slate-700/40 rounded-lg p-3 border border-slate-600/20">
                                <div className="text-slate-200 text-sm font-light">"Following up on [COMPANY EVENT] - here's how we can help..."</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Status */}
                          <motion.div 
                            className="bg-gradient-to-r from-blue-500/10 via-purple-500/8 to-blue-600/10 rounded-2xl p-4 border border-blue-400/20 backdrop-blur-sm text-center"
                            animate={{ opacity: [0.9, 1, 0.9] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <div className="text-white font-semibold">Campaign ready in 28 seconds</div>
                          </motion.div>
                        </div>
                      </div>
                    )}

                    {service.id === 'step-3' && (
                      <div className="w-full h-96 p-8">
                        {/* Premium header */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="text-white font-light text-xl">Outreach Dashboard</div>
                          <div className="px-4 py-2 bg-blue-500/10 text-blue-300 text-sm rounded-xl border border-blue-500/20 flex items-center gap-2 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="font-medium">Live</span>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          {/* Performance metrics grid */}
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-slate-800/40 rounded-2xl p-5 border border-slate-700/30 backdrop-blur-sm text-center">
                              <div className="text-blue-300 font-light text-2xl mb-1">2,847</div>
                              <div className="text-slate-400 text-xs uppercase tracking-wide font-medium">Sent</div>
                            </div>
                            <div className="bg-slate-800/40 rounded-2xl p-5 border border-slate-700/30 backdrop-blur-sm text-center">
                              <div className="text-green-300 font-light text-2xl mb-1">85%</div>
                              <div className="text-slate-400 text-xs uppercase tracking-wide font-medium">Delivered</div>
                            </div>
                            <div className="bg-slate-800/40 rounded-2xl p-5 border border-slate-700/30 backdrop-blur-sm text-center">
                              <div className="text-purple-300 font-light text-2xl mb-1">12%</div>
                              <div className="text-slate-400 text-xs uppercase tracking-wide font-medium">Response</div>
                            </div>
                          </div>
                          
                          {/* Recent activity */}
                          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/30 backdrop-blur-sm">
                            <div className="text-cyan-200 font-medium mb-4 text-sm uppercase tracking-wide">Recent Activity</div>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between py-2">
                                <div className="text-slate-200 text-sm font-light">InnovateNL replied</div>
                                <div className="text-green-400 text-xs bg-green-500/10 px-2 py-1 rounded-lg border border-green-500/20">Interested</div>
                              </div>
                              <div className="flex items-center justify-between py-2">
                                <div className="text-slate-200 text-sm font-light">TechScale opened email</div>
                                <div className="text-blue-400 text-xs bg-blue-500/10 px-2 py-1 rounded-lg border border-blue-500/20">Engaged</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Live update */}
                          <motion.div 
                            className="bg-gradient-to-r from-green-500/10 via-blue-500/8 to-green-600/10 rounded-2xl p-5 border border-green-400/20 backdrop-blur-sm text-center"
                            animate={{ opacity: [0.9, 1, 0.9] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <div className="text-white font-semibold text-lg">342 new responses today</div>
                            <div className="text-slate-300 text-sm mt-1 font-light">85% deliverability • 12.3% avg response rate</div>
                          </motion.div>
                        </div>
                      </div>
                    )}

                    {service.id === 'step-4' && (
                      <div className="w-full h-96 p-8">
                        {/* Premium header */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="text-white font-light text-xl">Calendar Pipeline</div>
                          <motion.div 
                            className="px-4 py-2 bg-green-500/10 text-green-300 text-sm rounded-xl border border-green-500/20 flex items-center gap-2 backdrop-blur-sm"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="font-medium">New Meeting</span>
                          </motion.div>
                        </div>
                        
                        <div className="space-y-6">
                          {/* Today's bookings */}
                          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/30 backdrop-blur-sm">
                            <div className="text-blue-200 font-medium mb-4 text-sm uppercase tracking-wide">Today's Calendar</div>
                            <div className="space-y-4">
                              <motion.div 
                                className="bg-slate-700/40 rounded-xl p-4 border border-green-500/20"
                                animate={{ 
                                  borderColor: ["rgba(34, 197, 94, 0.2)", "rgba(34, 197, 94, 0.4)", "rgba(34, 197, 94, 0.2)"],
                                  backgroundColor: ["rgba(51, 65, 85, 0.4)", "rgba(34, 197, 94, 0.05)", "rgba(51, 65, 85, 0.4)"]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <div className="text-green-300 font-medium text-base mb-1">InnovateNL B.V.</div>
                                    <div className="text-slate-300 text-sm font-light">Discovery call • Morgen 14:00 - 15:00</div>
                                    <div className="text-slate-400 text-xs mt-2">Lead qualification: High intent • €50K+ potential</div>
                                  </div>
                                  <div className="text-green-400 text-xs bg-green-500/15 px-3 py-2 rounded-lg border border-green-500/20 font-medium">Booked</div>
                                </div>
                              </motion.div>
                              
                              <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/20">
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <div className="text-blue-300 font-medium text-base mb-1">ScaleUp Solutions</div>
                                    <div className="text-slate-300 text-sm font-light">Product demo • Overmorgen 10:30 - 11:30</div>
                                    <div className="text-slate-400 text-xs mt-2">Warm lead • €25K+ potential</div>
                                  </div>
                                  <div className="text-blue-400 text-xs bg-blue-500/15 px-3 py-2 rounded-lg border border-blue-500/20 font-medium">Confirmed</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Pipeline stats */}
                          <motion.div 
                            className="bg-gradient-to-r from-blue-500/10 via-green-500/8 to-blue-600/10 rounded-2xl p-5 border border-blue-400/20 backdrop-blur-sm text-center"
                            animate={{ opacity: [0.9, 1, 0.9] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <div className="text-white font-semibold text-lg mb-1">3% meeting rate from outreach</div>
                            <div className="text-slate-300 text-sm font-light">47 meetings scheduled this month • €1.2M+ pipeline value</div>
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.a
                  href={
                    service.id === 'lead-engine' ? '/lead-engine' :
                    service.id === 'sales-engine' ? '/sales-engine' :
                    service.id === 'agents-automations' ? '/agents-automations' :
                    service.id === 'lead-agent' ? '/agents-automations/speed-to-lead' :
                    service.id === 'proposal-agent' ? '/agents-automations/seal-the-deal' :
                    service.id === 'onboarding-agent' ? '/agents-automations/onboard-and-beyond' :
                    '#'
                  }
                  className="group relative w-80 h-80 block cursor-pointer"
                  style={{ isolation: 'isolate' }}
                  whileHover={{
                    y: -4,
                    transition: {
                      duration: 0.2,
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
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-3xl opacity-60 z-10 group-hover:opacity-75 transition-all duration-300 ease-out`} />
                <div className={`absolute inset-2 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-2xl opacity-30 z-10 group-hover:opacity-40 transition-all duration-300 ease-out`} />
                
                {/* Device with glassmorphism */}
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 p-12 flex items-center justify-center shadow-3xl transition-all duration-300 ease-out group-hover:shadow-4xl z-20 isolate will-change-auto">
                  
                  {/* Service visualization */}
                  <div className="relative w-[7.5rem] h-[7.5rem]">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 shadow-2xl opacity-85 transition-all duration-300 ease-out group-hover:opacity-95 group-hover:shadow-3xl`}>
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center relative overflow-hidden shadow-inner">
                        
                        {/* Icon with glow */}
                        <service.icon className="w-[3.75rem] h-[3.75rem] text-white relative z-10 drop-shadow-2xl transition-all duration-200 ease-out group-hover:scale-105" style={{
                          filter: `drop-shadow(0 0 16px ${service.accentColor.includes('blue') ? '#60a5fa' :
                                                           service.accentColor.includes('purple') ? '#a855f7' :
                                                           service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}60)`,
                          transition: 'filter 0.2s ease-out, transform 0.2s ease-out'
                        }} />
                        
                        {/* Simplified sweeping light */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{
                            x: '100%',
                            transition: {
                              duration: 4,
                              ease: 'easeInOut',
                              repeat: Infinity,
                              delay: index * 1
                            }
                          }}
                        />
                        
                      </div>
                    </div>
                    
                    {/* Floating accent elements */}
                    <div className={`absolute -top-5 -right-5 w-7 h-7 rounded-lg bg-gradient-to-br ${service.accentColor} opacity-20 shadow-xl transition-all duration-300 ease-out group-hover:opacity-30`} />
                    <div className={`absolute -bottom-5 -left-5 w-5 h-5 rounded-full bg-gradient-to-br ${service.accentColor} opacity-25 shadow-xl transition-all duration-300 ease-out group-hover:opacity-35`} />
                  </div>
                </div>
              </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Content - Left for normal sections, Right for special cases */}
        <div className={`space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <motion.div 
            className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: 0,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
          <div>

            {/* Typography */}
            <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
              {/* Premium step indicator for walkthrough */}
              {walkthrough && (
                <motion.div 
                  className="flex items-center gap-8 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
                >
                  <div className="relative">
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 backdrop-blur-xl">
                      <span className="text-blue-300 font-light text-2xl tracking-wider">{service.number}</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-blue-400/5 blur-xl animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-px bg-gradient-to-r from-blue-500/40 via-blue-400/20 to-transparent"></div>
                  </div>
                </motion.div>
              )}

              <motion.h2 
                className={`${walkthrough ? 'text-2xl lg:text-3xl xl:text-4xl' : 'text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl'} font-bold text-white leading-tight tracking-tight ${walkthrough ? '' : 'whitespace-nowrap'}`}
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    delay: 0,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {service.title}
              </motion.h2>

              <div className="space-y-0.5">
                <motion.h3 
                  className={`${walkthrough ? 'text-xl lg:text-2xl' : 'text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl'} font-light ${service.subtitleStyle || 'text-premium-silver/90'} tracking-wide leading-relaxed whitespace-nowrap`}
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: {
                      duration: 0.2,
                      delay: 0,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {service.subtitle}
                </motion.h3>

                <motion.p 
                  className={`${walkthrough ? 'text-base lg:text-lg' : 'text-sm xs:text-sm sm:text-base md:text-base lg:text-lg'} ${service.descriptionStyle || 'text-premium-silver/70'} font-light leading-relaxed max-w-none tracking-wide`}
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: 0,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {service.description}
                </motion.p>
              </div>

              {/* Premium metrics for walkthrough */}
              {walkthrough && (service.highlight || service.metrics) && (
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mt-8"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {service.highlight && (
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-xl border border-blue-500/10 backdrop-blur-xl">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-200/90 font-medium text-sm">
                        {service.highlight}
                      </span>
                    </div>
                  )}
                  {service.metrics && (
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/5 to-blue-700/5 rounded-xl border border-blue-600/10 backdrop-blur-xl">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-cyan-200/90 font-medium text-sm">
                        {service.metrics}
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* CTA Buttons - Hidden in walkthrough mode */}
            {!walkthrough && (
              <motion.div 
                className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-4 pt-6 xs:pt-7 sm:pt-8 md:pt-10 justify-start"
                initial={{ 
                  opacity: 0, 
                  x: xDirection * 0.83
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >

              {service.id === 'agents-automations' ? (
                <motion.a
                  href="/agents-automations"
                  className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full overflow-hidden"
                  whileHover={{
                    y: -1,
                    transition: {
                      duration: 0.2,
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
                  style={{
                    filter: "drop-shadow(0 4px 12px rgba(59, 130, 246, 0.15))"
                  }}
                >
                  {/* Clean border */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-50 group-hover:opacity-70 transition-all duration-200 ease-out`}>
                    <div className="w-full h-full rounded-full bg-premium-black" />
                  </div>
                  <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                  <motion.div
                    className="relative z-10 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                  </motion.div>
                </motion.a>
              ) : service.id === 'sales-engine' ? (
                <motion.a
                  href="/sales-engine"
                  className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                  whileHover={{
                    y: -1,
                    transition: {
                      duration: 0.2,
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
                  style={{
                    filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.15))"
                  }}
                >
                  {/* Clean border */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-50 group-hover:opacity-70 transition-all duration-200 ease-out`}>
                    <div className="w-full h-full rounded-full bg-premium-black" />
                  </div>
                  <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                  <motion.div
                    className="relative z-10 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                  </motion.div>
                </motion.a>
              ) : service.id === 'marketing-engine' ? (
                <motion.a
                  href="/marketing-engine"
                  className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                  whileHover={{
                    y: -1,
                    transition: {
                      duration: 0.2,
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
                  style={{
                    filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.15))"
                  }}
                >
                  {/* Clean border */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-50 group-hover:opacity-70 transition-all duration-200 ease-out`}>
                    <div className="w-full h-full rounded-full bg-premium-black" />
                  </div>
                  <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                  <motion.div
                    className="relative z-10 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                  </motion.div>
                </motion.a>
              ) : service.id === 'lead-agent' ? (
                <motion.a
                  href="/agents-automations/speed-to-lead"
                  className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                  whileHover={{
                    y: -1,
                    transition: {
                      duration: 0.2,
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
                  style={{
                    filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.15))"
                  }}
                >
                  {/* Clean border */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-50 group-hover:opacity-70 transition-all duration-200 ease-out`}>
                    <div className="w-full h-full rounded-full bg-premium-black" />
                  </div>
                  <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                  <motion.div
                    className="relative z-10 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                  </motion.div>
                </motion.a>
              ) : service.id === 'proposal-agent' ? (
                <motion.a
                  href="/agents-automations/seal-the-deal"
                  className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                  whileHover={{
                    y: -1,
                    transition: {
                      duration: 0.2,
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
                  style={{
                    filter: "drop-shadow(0 4px 12px rgba(59, 130, 246, 0.15))"
                  }}
                >
                  {/* Clean border */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-50 group-hover:opacity-70 transition-all duration-200 ease-out`}>
                    <div className="w-full h-full rounded-full bg-premium-black" />
                  </div>
                  <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                  <motion.div
                    className="relative z-10 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                  </motion.div>
                </motion.a>
              ) : service.id === 'onboarding-agent' ? (
                <motion.a
                  href="/agents-automations/onboard-and-beyond"
                  className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                  whileHover={{
                    y: -1,
                    transition: {
                      duration: 0.2,
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
                  style={{
                    filter: "drop-shadow(0 4px 12px rgba(139, 92, 246, 0.15))"
                  }}
                >
                  {/* Clean border */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-50 group-hover:opacity-70 transition-all duration-200 ease-out`}>
                    <div className="w-full h-full rounded-full bg-premium-black" />
                  </div>
                  <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                  <motion.div
                    className="relative z-10 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                  </motion.div>
                </motion.a>
              ) : service.id === 'lead-engine' ? (
                <motion.a
                  href="/lead-engine"
                  className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                  whileHover={{
                    y: -1,
                    transition: {
                      duration: 0.2,
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
                  style={{
                    filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.15))"
                  }}
                >
                  {/* Clean border */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-50 group-hover:opacity-70 transition-all duration-200 ease-out`}>
                    <div className="w-full h-full rounded-full bg-premium-black" />
                  </div>
                  <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                  <motion.div
                    className="relative z-10 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                  </motion.div>
                </motion.a>
              ) : (
                <motion.button 
                  className="group relative inline-flex items-center justify-center px-10 sm:px-16 lg:px-24 py-3 lg:py-4 bg-black text-white font-medium text-xs lg:text-sm rounded-full"
                  whileHover={{
                    y: -1,
                    transition: {
                      duration: 0.2,
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
                  style={{
                    filter: "drop-shadow(0 4px 12px rgba(168, 85, 247, 0.15))"
                  }}
                >
                  {/* Clean border */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.accentColor} p-0.5 opacity-50 group-hover:opacity-70 transition-all duration-200 ease-out`}>
                    <div className="w-full h-full rounded-full bg-premium-black" />
                  </div>
                  <span className="relative z-10 text-xs lg:text-sm font-medium">{service.secondaryButtonText}</span>
                  <motion.div
                    className="relative z-10 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                  </motion.div>
                </motion.button>
              )}
              </motion.div>
            )}
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;