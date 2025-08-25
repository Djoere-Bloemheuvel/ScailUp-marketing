import { motion } from 'framer-motion';
import { Crown, Users, Handshake, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Target } from 'lucide-react';

const WhiteLabelSection = () => {
  const differentiators = [
    {
      icon: Crown,
      title: 'Jouw Merk, Onze Kracht',
      description: 'Verkoop automatisering onder jouw eigen naam - wij zorgen voor de rest',
      benefit: 'Jouw klanten denken dat jij het hebt gemaakt',
      color: 'from-yellow-500 to-orange-400',
      bgColor: 'from-yellow-500/10 to-orange-500/5'
    },
    {
      icon: Handshake,
      title: 'Wij Doen Het Werk',
      description: 'Jij verkoopt, wij bouwen. Jij krijgt de credits, wij zorgen voor tevreden klanten',
      benefit: 'Nul technische hoofdpijn',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'from-blue-500/10 to-cyan-500/5'
    },
    {
      icon: Target,
      title: 'Lokaal & Betrouwbaar',
      description: 'Nederlandse service, geen ingewikkelde buitenlandse constructies',
      benefit: 'Spreekt jouw taal',
      color: 'from-green-500 to-emerald-400',
      bgColor: 'from-green-500/10 to-emerald-500/5'
    },
    {
      icon: Zap,
      title: 'Bewezen Succesvol',
      description: 'Al jaren succesvol in tech, nu focussen we op automatisering',
      benefit: 'Geen startup-risicos',
      color: 'from-purple-500 to-pink-400',
      bgColor: 'from-purple-500/10 to-pink-500/5'
    }
  ];

  const competitorComparison = [
    {
      feature: 'White-label oplossing',
      scailup: true,
      uipath: false,
      zapier: false,
      microsoft: false
    },
    {
      feature: 'Full-service implementatie',
      scailup: true,
      uipath: false,
      zapier: false,
      microsoft: false
    },
    {
      feature: 'Nederlandse support',
      scailup: true,
      uipath: false,
      zapier: false,
      microsoft: true
    },
    {
      feature: 'SMB-friendly pricing',
      scailup: true,
      uipath: false,
      zapier: true,
      microsoft: true
    },
    {
      feature: 'Custom ontwikkeling',
      scailup: true,
      uipath: true,
      zapier: false,
      microsoft: true
    },
    {
      feature: 'Geen vendor lock-in',
      scailup: true,
      uipath: false,
      zapier: false,
      microsoft: false
    }
  ];

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: 'Nieuwe Revenue Stream',
      stat: '30-50%',
      description: 'Gemiddelde winstmarge op white-label automation services',
      details: [
        'Recurring revenue model',
        'Hoge klanttevredenheid',
        'Cross-sell opportunities',
        'Premium pricing mogelijk'
      ]
    },
    {
      icon: Users,
      title: 'Client Retention',
      stat: '+65%',
      description: 'Klanten blijven langer door toegevoegde waarde van automatisering',
      details: [
        'Diepere client integratie',
        'Strategische partner rol',
        'Meer touchpoints',
        'Hogere switching costs'
      ]
    },
    {
      icon: Star,
      title: 'Market Differentiation',
      stat: '95%',
      description: 'Van agencies heeft geen AI automation in hun service portfolio',
      details: [
        'First-mover advantage',
        'Premium positioning',
        'Competitive differentiation',
        'Thought leadership'
      ]
    }
  ];

  const implementationProcess = [
    {
      step: '01',
      title: 'Partnership Setup',
      duration: '1 week',
      description: 'Branding, contracten en toegangen regelen',
      deliverables: ['White-label portal', 'Marketing materialen', 'Training sessies']
    },
    {
      step: '02', 
      title: 'Client Onboarding',
      duration: '1-2 weken',
      description: 'Jouw client analyseren en automatiseringsstrategie ontwikkelen',
      deliverables: ['Process audit', 'Implementation roadmap', 'ROI projectie']
    },
    {
      step: '03',
      title: 'Development & Testing',
      duration: '2-6 weken',
      description: 'Automation bouwen, testen en integreren met bestaande systemen',
      deliverables: ['Custom automation', 'Integration testing', 'User training']
    },
    {
      step: '04',
      title: 'Launch & Support',
      duration: 'Ongoing',
      description: 'Go-live begeleiding en doorlopende optimalisatie en support',
      deliverables: ['Launch support', '24/7 monitoring', 'Monthly reporting']
    }
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="backlight backlight-left bg-scailup-blue opacity-10"></div>
        <div className="backlight backlight-right bg-purple-600 opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-3 mb-12 px-8 py-4 bg-gradient-to-r from-blue-500/5 via-purple-500/8 to-purple-600/5 rounded-full border border-blue-400/20 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Crown className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200/90 font-semibold text-base tracking-wide uppercase">Waarom Kiezen Voor ScailUp?</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Jij verklaart de liefde,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-medium">
              wij regelen de bruiloft
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg lg:text-xl text-blue-200/70 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-blue-300 font-medium">De enige white-label automation partner</span> die jouw bedrijfsprocessen 
            transformeert in <span className="text-blue-300 font-medium">competitieve voordelen</span> - van strategie tot implementatie tot optimalisatie.
          </motion.p>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {differentiators.map((diff, index) => (
            <motion.div
              key={diff.title}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${diff.bgColor} border border-yellow-500/20 backdrop-blur-sm`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative z-10">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${diff.color} bg-opacity-20 w-fit mb-6`}>
                  <diff.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4">
                  {diff.title}
                </h3>
                
                <p className="text-gray-300/80 text-sm mb-6 leading-relaxed">
                  {diff.description}
                </p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 text-xs font-medium">
                    {diff.benefit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competitor Comparison */}
        <div className="bg-gradient-to-br from-gray-900/60 to-black/80 rounded-3xl border border-blue-500/20 p-8 lg:p-12 backdrop-blur-sm mb-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-4">
              ScailUp vs Concurrentie
            </h3>
            <p className="text-blue-200/70 text-lg">
              Waarom 95% van agencies kiest voor ScailUp white-label services
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-gray-700/50">
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Features</th>
                  <th className="text-center py-4 px-6 text-yellow-300 font-semibold">ScailUp</th>
                  <th className="text-center py-4 px-6 text-gray-400">UiPath</th>
                  <th className="text-center py-4 px-6 text-gray-400">Zapier</th>
                  <th className="text-center py-4 px-6 text-gray-400">Microsoft</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    className="border-b border-gray-700/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <td className="py-4 px-6 text-gray-300">{row.feature}</td>
                    <td className="text-center py-4 px-6">
                      {row.scailup ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {row.uipath ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {row.zapier ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {row.microsoft ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-red-400 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="md:col-span-3 text-center mb-12">
            <motion.h3 
              className="text-3xl lg:text-4xl font-light text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Waarom Partners Kiezen Voor ScailUp
            </motion.h3>
            <motion.p 
              className="text-blue-200/70 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Concrete voordelen voor jouw business
            </motion.p>
          </div>
          
          {partnerBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 to-black/80 border border-blue-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/20">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-blue-400">
                  {benefit.stat}
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-3">
                {benefit.title}
              </h4>
              
              <p className="text-gray-300/80 text-sm mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              <div className="space-y-2">
                {benefit.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300/70 text-xs">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Process */}
        <div className="bg-gradient-to-br from-gray-900/60 to-black/80 rounded-3xl border border-blue-500/20 p-8 lg:p-12 backdrop-blur-sm">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-4">
              Implementatie Process
            </h3>
            <p className="text-blue-200/70 text-lg">
              Van partnership tot go-live in 4 stappen
            </p>
          </motion.div>

          <div className="space-y-12">
            {implementationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Step number */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20">
                      <span className="text-blue-300 font-light text-2xl tracking-wider">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <h4 className="text-xl font-semibold text-white">
                        {step.title}
                      </h4>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-300/80 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Deliverables */}
                  <div className="lg:col-span-4">
                    <div className="p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                      <h5 className="text-green-300 font-medium text-sm mb-3">
                        Deliverables:
                      </h5>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-green-200/80 text-xs">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connector line */}
                {index < implementationProcess.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <ArrowRight className="w-6 h-6 text-blue-400/60" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.button
            className="group relative inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full overflow-hidden text-lg"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Word White-Label Partner</span>
            <Crown className="relative z-10 ml-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </motion.button>
          
          <p className="text-blue-200/60 text-sm mt-4">
            Partner programma beschikbaar • Exclusieve territories • Revenue sharing model
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhiteLabelSection;