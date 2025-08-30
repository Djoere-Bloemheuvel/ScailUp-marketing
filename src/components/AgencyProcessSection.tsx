import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageSquare, Code, Rocket, CheckCircle, Zap } from 'lucide-react';

const AgencyProcessSection = () => {
  const processSteps = [
    {
      icon: MessageSquare,
      title: "Intake Gesprek",
      duration: "45 min",
      description: "Wij mappen je huidige workflow en identificeren de beste automatisering kansen.",
      details: [
        "Workflow analyse",
        "Pain points identificatie",
        "Agent specificaties",
        "Deployment keuze"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Development Sprint",
      duration: "5-10 dagen",
      description: "We bouwen je agent met n8n workflows, API integraties en AI-logica.",
      details: [
        "n8n workflow development",
        "API koppelingen",
        "AI prompt engineering", 
        "Test data setup"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "Testing & Refinement",
      duration: "2-3 dagen",
      description: "Uitgebreid testen met jouw echte data en fine-tuning van alle parameters.",
      details: [
        "Real-world testing",
        "Performance optimalisatie",
        "Edge case handling",
        "Final adjustments"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Go Live & Handover",
      duration: "1 dag",
      description: "Agent goes live met volledige documentatie en training voor jouw team.",
      details: [
        "Production deployment",
        "Team training sessie",
        "Documentatie handover",
        "Monitoring setup"
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const deliverables = [
    {
      icon: Code,
      title: "Volledige Codebase",
      description: "Alle workflows, scripts en configuraties - 100% eigenaarschap"
    },
    {
      icon: CheckCircle,
      title: "Uitgebreide Documentatie",
      description: "Setup guides, API docs en troubleshooting handleidingen"
    },
    {
      icon: Zap,
      title: "Training & Support",
      description: "Team onboarding en 30 dagen support voor een vlotte overgang"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-950/30 to-black overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight mb-6"
            style={{ 
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '200'
            }}
          >
            Van idee naar werkende agent
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-normal">in 1-2 weken</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Onze bewezen development methodologie zorgt voor snelle delivery zonder kwaliteitsverlies
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 right-0 w-8 h-0.5 bg-gradient-to-r from-white/30 to-transparent transform translate-x-4"></div>
                )}
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-500 h-full">
                  {/* Icon & Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} text-white text-xs font-medium`}>
                      {step.duration}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{step.description}</p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-xs">
                        <div className="w-1 h-1 bg-white/40 rounded-full mr-2"></div>
                        <span className="text-white/60">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Wat je krijgt</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <deliverable.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{deliverable.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{deliverable.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Guarantee */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Timeline Garantie</h3>
            </div>
            <p className="text-white/80 mb-6">
              Geen maandenlange projecten. We committeren aan <span className="text-green-400 font-semibold">maximaal 2 weken delivery</span> of je krijgt je geld terug.
            </p>
            <div className="inline-flex items-center text-green-400 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Gegarandeerd binnen 14 werkdagen live</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyProcessSection;