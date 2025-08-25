import { motion } from 'framer-motion';
import { Brain, Shield, DollarSign, Zap, ArrowRight, AlertTriangle, CheckCircle, Users, Settings, Clock } from 'lucide-react';

const ProcessAutomationSection = () => {
  const challenges = [
    {
      icon: Brain,
      title: 'Te Complex',
      stat: '3x',
      description: 'Bedrijven denken dat automatisering ingewikkeld en duur is',
      color: 'from-red-500 to-red-400'
    },
    {
      icon: Shield,
      title: 'Geen Tijd',
      stat: '40u',
      description: 'Per week gaat verloren aan repetitieve taken die niemand leuk vindt',
      color: 'from-orange-500 to-orange-400'
    },
    {
      icon: DollarSign,
      title: 'Fouten & Stress',
      stat: '85%',
      description: 'Van handmatige processen bevat fouten die geld en tijd kosten',
      color: 'from-yellow-500 to-yellow-400'
    }
  ];

  const solutions = [
    {
      icon: Users,
      title: 'Plug & Play Oplossingen',
      description: 'Binnen 2 weken werkende automatisering zonder technische kennis',
      benefit: 'Kant-en-klaar'
    },
    {
      icon: Shield,
      title: 'Meer Tijd voor Groei',
      description: 'Focus op klanten en strategie terwijl AI de routine overneemt',
      benefit: '40+ uur per week'
    },
    {
      icon: Settings,
      title: 'Geen Fouten Meer',
      description: 'AI werkt 24/7 zonder fouten, vakanties of ziekmeldingen',
      benefit: '100% accuraat'
    },
    {
      icon: Clock,
      title: 'Direct Resultaat',
      description: 'Zie binnen 30 dagen concrete tijdsbesparing en meer omzet',
      benefit: 'ROI binnen 1 maand'
    }
  ];

  const automationTypes = [
    {
      title: 'Email & CRM Automation',
      description: 'Automatiseer follow-ups, lead scoring en client onboarding',
      percentage: 85,
      processes: ['Lead nurturing', 'Client onboarding', 'Follow-up sequences']
    },
    {
      title: 'Administrative Tasks',
      description: 'Facturatie, data-invoer en goedkeuringsprocessen',
      percentage: 92,
      processes: ['Factuurverwerking', 'Data-entry', 'Goedkeuringswerkstromen']
    },
    {
      title: 'Customer Support',
      description: '24/7 first-line support en ticket routing',
      percentage: 78,
      processes: ['Chatbot support', 'Ticket classificatie', 'Escalatiebeheer']
    }
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-3 mb-12 px-8 py-4 bg-gradient-to-r from-red-500/5 via-orange-500/8 to-yellow-500/5 rounded-full border border-red-400/20 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-200/90 font-semibold text-base tracking-wide uppercase">Herken jij deze frustraties?</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Dit lossen wij
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-medium">
              voor je op
            </span>
          </motion.h2>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/40 to-black/60 border border-red-500/20 backdrop-blur-sm"
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
                transition: { duration: 0.2 }
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-5 rounded-2xl`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${challenge.color} bg-opacity-20`}>
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${challenge.color} bg-clip-text text-transparent`}>
                    {challenge.stat}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {challenge.title}
                </h3>
                
                <p className="text-gray-300/80 text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow transition */}
        <motion.div 
          className="flex justify-center mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="p-6 rounded-full bg-gradient-to-br from-blue-500/10 to-green-500/10 border border-blue-400/20">
            <ArrowRight className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>

        {/* Solutions Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-gradient-to-r from-blue-500/5 via-purple-500/8 to-purple-600/5 rounded-full border border-blue-400/20 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200/90 font-semibold text-base tracking-wide uppercase">Zo pakken wij het aan</span>
          </motion.div>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Wij maken automatisering simpel
          </motion.h3>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/40 to-black/60 border border-blue-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.8 + (index * 0.1),
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 w-fit mb-4">
                  <solution.icon className="w-6 h-6 text-blue-400" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-3">
                  {solution.title}
                </h4>
                
                <p className="text-gray-300/80 text-sm mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-blue-300 text-xs font-medium">
                    {solution.benefit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Automation Types */}
        <div className="bg-gradient-to-br from-gray-900/40 to-black/60 rounded-3xl border border-blue-500/20 p-8 lg:p-12 backdrop-blur-sm">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
              Dit automatiseren wij het meest
            </h3>
            <p className="text-blue-200/70 text-lg">
              Kies wat jij wilt automatiseren - wij regelen de rest
            </p>
          </motion.div>

          <div className="space-y-8">
            {automationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="relative p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-400/10"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">
                        {type.title}
                      </h4>
                      <span className="text-2xl font-bold text-blue-400">
                        {type.percentage}%
                      </span>
                    </div>
                    
                    <p className="text-blue-200/70 mb-4">
                      {type.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {type.processes.map((process, processIndex) => (
                        <span 
                          key={processIndex}
                          className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20"
                        >
                          {process}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-48">
                    <div className="relative">
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${type.percentage}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 2, delay: index * 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
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
            <span className="relative z-10">Bekijk wat wij voor jou kunnen automatiseren</span>
            <ArrowRight className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          
          <p className="text-blue-200/60 text-sm mt-4">
            15-minuten gesprek waarin we precies uitleggen wat mogelijk is
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessAutomationSection;