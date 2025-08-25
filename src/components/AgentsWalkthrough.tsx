import { motion } from 'framer-motion';
import { MessageSquare, Cog, Brain, ArrowRight, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const AgentsWalkthrough = () => {
  const services = [
    {
      id: 'lead-agent',
      number: '01',
      icon: MessageSquare,
      title: (
        <span>
          Speed to Lead System
          <br />
          <span className="text-xl lg:text-2xl xl:text-3xl font-semibold text-blue-200/90">Inbound Lead Agent</span>
        </span>
      ),
      subtitle: 'Van eerste contact tot gekwalificeerde lead binnen 60 seconden',
      description: 'Jouw digitale sales assistent die nooit slaapt. Studies tonen aan: respons binnen 60 seconden verhoogt conversie met 391%. Onze AI vangt elke lead direct op en plant automatisch afspraken.',
      benefits: [
        'Gegarandeerde respons binnen 60 seconden (391% meer conversie)',
        'Persoonlijke berichten met directe afspraakopties',
        'Automatische doorverwijzing naar juiste salesrep',
        '24/7 beschikbaar - geen gemiste leads meer'
      ],
      roi: '1-3 maanden',
      adoption: '42%',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-400 to-purple-500'
    },
    {
      id: 'rpa',
      number: '02', 
      icon: Cog,
      title: 'Procesautomatisering (RPA)',
      subtitle: 'Nooit meer handmatige invoer of vergeten facturen',
      description: 'Laat AI je administratie doen. Facturen, offertes, data-invoer - alles automatisch en foutloos.',
      benefits: [
        'Facturen worden automatisch gegenereerd en verstuurd',
        'Data wordt foutloos verwerkt zonder handmatig werk',
        'Geen vergeten deadlines of gemiste betalingen',
        'Tijd over voor échte bedrijfsvoering'
      ],
      roi: '1-3 maanden',
      adoption: '30%',
      background: 'from-black via-purple-900/20 to-black',
      accentColor: 'from-blue-500 to-purple-600'
    },
    {
      id: 'agents',
      number: '03',
      icon: Brain,
      title: 'AI Agents voor Complexe Processen',
      subtitle: 'Je nieuwe digitale medewerker die nooit ziek wordt',
      description: 'AI Agents die zelfstandig denken, handelen en resultaten leveren. Van leads kwalificeren tot sales processen - volledig autonoom.',
      benefits: [
        'Zelfstandige lead kwalificatie en opvolging',
        'Automatische integratie met al je systemen',
        'Slimme beslissingen binnen jouw kaders',
        'Schaalbare capaciteit zonder extra personeel'
      ],
      roi: '2-4 maanden',
      adoption: '23%',
      background: 'from-black via-blue-900/15 to-black',
      accentColor: 'from-blue-600 to-purple-700'
    }
  ];

  return (
    <section id="agents-walkthrough" className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Background ambient lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="backlight backlight-left bg-scailup-blue opacity-20"></div>
        <div className="backlight backlight-right bg-purple-600 opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-3 mb-12 px-8 py-4 bg-gradient-to-r from-blue-500/5 via-purple-500/8 to-purple-600/5 rounded-full border border-blue-400/20 backdrop-blur-xl"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-200/90 font-semibold text-base tracking-wide uppercase">Onze Populairste Automatiseringen</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Kies wat bij
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 bg-clip-text text-transparent font-medium">
              jou past
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg lg:text-xl text-blue-200/70 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            Start met eenvoudige chatbots of ga direct voor <span className="text-blue-300 font-medium">volledige automatisering</span>. 
            Wij adviseren wat het beste bij jouw bedrijf past.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className="relative">
              <motion.div
                className={`relative py-20 px-8 lg:px-16 rounded-3xl bg-gradient-to-br ${service.background} backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden h-[80vh]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                  duration: 1.0, 
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-[0.03] rounded-3xl`} />
                
                {/* Glassmorphic overlay with shadow */}
                <div className="absolute inset-0 rounded-3xl bg-white/[0.01] backdrop-blur-sm" />
                <div className="absolute inset-0 rounded-3xl bg-black/20" />
                
                {/* Glassmorphic border highlight */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/3 via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-white/2 via-transparent to-transparent" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center h-full">
                  
                  {/* Content */}
                  <div className={`space-y-6 lg:space-y-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Step indicator */}
                    <motion.div 
                      className="flex items-center gap-6 lg:gap-8 mb-6 lg:mb-8"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="relative">
                        <div className={`flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-xl shadow-lg`}>
                          <span className="text-blue-300 font-light text-2xl tracking-wider">{service.number}</span>
                        </div>
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                          service.id === 'lead-agent' ? 'from-blue-400 to-blue-600' :
                          service.id === 'rpa' ? 'from-purple-500 to-purple-700' :
                          'from-blue-600 to-blue-800'
                        } opacity-20 blur-xl animate-pulse`}></div>
                      </div>
                      <div className="flex-1">
                        <div className="h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent"></div>
                      </div>
                    </motion.div>

                    {/* Title and subtitle */}
                    <div className="space-y-3 lg:space-y-4">
                      <motion.h3 
                        className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight tracking-tight"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.7, delay: index * 0.1 + 0.25, ease: [0.23, 1, 0.32, 1] }}
                      >
                        {service.title}
                      </motion.h3>

                      <motion.p 
                        className="text-base lg:text-lg text-blue-200/80 font-medium"
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.7, delay: index * 0.1 + 0.3, ease: [0.23, 1, 0.32, 1] }}
                      >
                        {service.subtitle}
                      </motion.p>

                      <motion.p 
                        className="text-base lg:text-lg text-blue-200/70 font-light leading-relaxed"
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.35, ease: [0.23, 1, 0.32, 1] }}
                      >
                        {service.description}
                      </motion.p>
                    </div>

                    {/* Benefits list */}
                    <motion.div 
                      className="grid grid-cols-2 gap-3"
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="relative group">
                          <div className="flex flex-col items-center justify-center gap-2 p-4 aspect-square rounded-lg bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/[0.03] hover:border-white/15 transition-all duration-300">
                            <div className={`flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br ${service.accentColor} opacity-80 shadow-lg flex-shrink-0`}>
                              <div className="w-2 h-2 rounded-full bg-white/90"></div>
                            </div>
                            <span className="text-blue-200/85 text-xs text-center font-light leading-tight">{benefit}</span>
                          </div>
                        </div>
                      ))}
                    </motion.div>

                    {/* Stats */}
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-3 lg:gap-4"
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.45, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-green-500/5 to-green-600/5 rounded-xl border border-green-500/10 backdrop-blur-xl">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span className="text-green-200/90 font-medium text-sm">
                          ROI: {service.roi}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-xl border border-blue-500/10 backdrop-blur-xl">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-200/90 font-medium text-sm">
                          {service.adoption} adoptie
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Visual */}
                  <div className={`relative flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <motion.div
                      className="group relative w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 block cursor-pointer"
                      style={{ isolation: 'isolate' }}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ 
                        duration: 1.0, 
                        delay: index * 0.1 + 0.3,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: {
                          duration: 0.6,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }}
                      whileTap={{
                        scale: 0.98,
                        transition: {
                          duration: 0.2,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }}
                    >
                    
                    {/* Backlight glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      service.id === 'lead-agent' ? 'from-blue-400 to-blue-600' :
                      service.id === 'rpa' ? 'from-purple-500 to-purple-700' :
                      'from-blue-600 to-blue-800'
                    } rounded-3xl blur-3xl ${index < 2 ? 'opacity-50' : 'opacity-70'} z-10 group-hover:scale-[1.02] transition-all duration-300 ease-out`} />
                    <div className={`absolute inset-2 bg-gradient-to-br ${
                      service.id === 'lead-agent' ? 'from-blue-400 to-blue-600' :
                      service.id === 'rpa' ? 'from-purple-500 to-purple-700' :
                      'from-blue-600 to-blue-800'
                    } rounded-3xl blur-2xl ${index < 2 ? 'opacity-35' : 'opacity-50'} z-10 group-hover:scale-[1.015] ${index < 2 ? 'group-hover:opacity-45' : 'group-hover:opacity-60'} transition-all duration-300 ease-out`} />
                    
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
                        <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br ${service.accentColor} opacity-40 shadow-xl transition-all duration-300 ease-out group-hover:opacity-60`} />
                        <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br ${service.accentColor} opacity-60 shadow-xl transition-all duration-300 ease-out group-hover:opacity-80`} />
                      </div>
                      
                    </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.button
            className="group relative inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full overflow-hidden text-lg"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Start jouw automatisering</span>
            <ArrowRight className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentsWalkthrough;