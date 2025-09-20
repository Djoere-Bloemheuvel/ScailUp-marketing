import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, Zap, Target, BarChart3, CheckCircle } from 'lucide-react';

const ROISection = () => {
  const roiStats = [
    {
      icon: TrendingUp,
      value: "€127K",
      label: "Extra omzet per jaar",
      description: "gemiddeld per klant",
      color: "from-green-500 to-green-400"
    },
    {
      icon: Clock,
      value: "30 dagen",
      label: "Gemiddelde tijd tot ROI",
      description: "Nederlandse bedrijven",
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: DollarSign,
      value: "40+ uren",
      label: "Tijd bespaard per week",
      description: "focus op groei",
      color: "from-purple-500 to-purple-400"
    },
    {
      icon: Users,
      value: "€85K",
      label: "Kostenbesparing per jaar",
      description: "minder personeel nodig",
      color: "from-cyan-500 to-cyan-400"
    }
  ];

  const caseStudies = [
    {
      company: "MKB Consultancy Firm",
      industry: "Professional Services",
      challenge: "Handmatige client onboarding kostte 8 uur per klant",
      solution: "AI workflow voor complete onboarding proces",
      results: [
        "95% tijdbesparing (8u → 24min)",
        "ROI behaald binnen 18 dagen",
        "100% minder fouten in documentatie",
        "Client satisfaction +34%"
      ],
      roi: "320%",
      timeframe: "18 dagen",
      investment: "€8,500"
    },
    {
      company: "E-commerce Scale-up",
      industry: "Retail & E-commerce",
      challenge: "Klantenservice kon niet opschalen met groei",
      solution: "24/7 AI chatbot + geautomatiseerde order afhandeling",
      results: [
        "80% van vragen automatisch opgelost",
        "Response tijd van 4u naar 30sec",
        "24/7 beschikbaarheid zonder extra FTE",
        "Customer NPS +28 punten"
      ],
      roi: "280%",
      timeframe: "2 maanden",
      investment: "€12,000"
    },
    {
      company: "Manufacturing Company",
      industry: "Productie & Logistiek",
      challenge: "Factuurverwerking nam 3 dagen per week in beslag",
      solution: "RPA voor complete facturatie workflow",
      results: [
        "98% van facturen volledig geautomatiseerd",
        "Van 3 dagen naar 2 uur per week",
        "0 menselijke fouten in 6 maanden",
        "€45K jaarlijkse kostenbesparing"
      ],
      roi: "450%",
      timeframe: "25 dagen",
      investment: "€15,500"
    }
  ];

  const investmentRanges = [
    {
      type: "AI Chatbot Implementatie",
      range: "€2.500 - €8.000",
      timeframe: "2-4 weken",
      roi: "3-6 maanden",
      features: ["24/7 klantenservice", "Lead kwalificatie", "FAQ automatisering"]
    },
    {
      type: "RPA Procesautomatisering",
      range: "€5.000 - €15.000",
      timeframe: "3-6 weken",
      roi: "1-3 maanden",
      features: ["Factuur verwerking", "Data entry", "Workflow automation"]
    },
    {
      type: "Custom AI Agents",
      range: "€10.000 - €25.000",
      timeframe: "4-8 weken",
      roi: "2-4 maanden",
      features: ["Complexe beslissingen", "Multi-system integratie", "Proactieve acties"]
    },
    {
      type: "White-Label Package",
      range: "€15.000 - €50.000",
      timeframe: "6-12 weken",
      roi: "1-2 maanden",
      features: ["Complete oplossing", "Jouw branding", "Ongoing support"]
    }
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-3 mb-12 px-8 py-4 bg-gradient-to-r from-blue-500/5 via-purple-500/8 to-purple-600/5 rounded-full border border-blue-400/20 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <BarChart3 className="w-4 h-4 text-green-400" />
            <span className="text-green-200/90 font-semibold text-base tracking-wide uppercase">Wat levert het op?</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Meer omzet,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-medium">
              minder kosten
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg lg:text-xl text-blue-200/70 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Onze klanten verdienen hun investering <span className="text-blue-300 font-medium">gemiddeld binnen 30 dagen</span> terug. 
            Ontdek wat automatisering voor jouw bedrijf kan betekenen.
          </motion.p>
        </div>

        {/* ROI Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {roiStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/40 to-black/60 border border-green-500/20 backdrop-blur-sm text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-2xl`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-20 mb-6`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <motion.div 
                  className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3, type: "spring", bounce: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-300/70 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-24">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-4">
              Dit bereikten onze klanten
            </h3>
            <p className="text-blue-200/70 text-lg">
              Van uitdaging naar succes in 30 dagen
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-900/60 to-black/80 border border-blue-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Company Info */}
                  <div className="space-y-4">
                    <div className="inline-flex px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                      <span className="text-blue-300 text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white">
                      {study.company}
                    </h4>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-red-300 font-medium text-sm">Uitdaging:</span>
                        <p className="text-gray-300/80 text-sm mt-1">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <span className="text-blue-300 font-medium text-sm">Oplossing:</span>
                        <p className="text-gray-300/80 text-sm mt-1">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h5 className="text-green-300 font-medium">Resultaten:</h5>
                    <div className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300/80 text-sm">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI Metrics */}
                  <div className="space-y-4">
                    <h5 className="text-purple-300 font-medium">ROI Metrics:</h5>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                        <div className="text-3xl font-bold text-green-400 mb-1">
                          {study.roi}
                        </div>
                        <div className="text-green-300/80 text-sm">
                          Return on Investment
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-blue-500/5 rounded-xl border border-blue-500/20">
                          <div className="text-xl font-semibold text-blue-400">
                            {study.timeframe}
                          </div>
                          <div className="text-blue-300/80 text-xs">
                            Tot ROI
                          </div>
                        </div>
                        
                        <div className="text-center p-3 bg-purple-500/5 rounded-xl border border-purple-500/20">
                          <div className="text-xl font-semibold text-purple-400">
                            {study.investment}
                          </div>
                          <div className="text-purple-300/80 text-xs">
                            Investering
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Investment Overview */}
        <div className="bg-gradient-to-br from-gray-900/60 to-black/80 rounded-3xl border border-blue-500/20 p-8 lg:p-12 backdrop-blur-sm">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-4">
              Wat kost het?
            </h3>
            <p className="text-blue-200/70 text-lg">
              Kies het pakket dat bij jou past
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentRanges.map((investment, index) => (
              <motion.div
                key={investment.type}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-400/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {investment.type}
                  </h4>
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {investment.range}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300/70">Implementatie:</span>
                    <span className="text-blue-300">{investment.timeframe}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300/70">ROI verwacht:</span>
                    <span className="text-green-300">{investment.roi}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {investment.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300/80 text-xs">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
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
            <span className="relative z-10">Wat kan jij verdienen?</span>
            <BarChart3 className="relative z-10 ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
          
          <p className="text-blue-200/60 text-sm mt-4">
            Gratis berekening van jouw potentiële besparing en extra omzet
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ROISection;