import { motion } from 'framer-motion';
import { Building2, Heart, Briefcase, Laptop, TrendingUp, Users, Cog, MessageSquare } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: Laptop,
      name: 'ICT & Communicatie',
      adoption: '58%',
      rank: '#1',
      description: 'Perfecte match voor jouw sector',
      useCases: [
        'Automatische projectupdates',
        'Client communicatie op maat',
        'Slimme resource planning',
        'Facturatie en time tracking'
      ],
      color: 'from-blue-500 to-blue-400',
      bgColor: 'from-blue-500/10 to-blue-600/5'
    },
    {
      icon: Building2,
      name: 'Financiële Dienstverlening',
      adoption: '37%',
      rank: '#2',
      description: 'Veilige automatisering voor finance',
      useCases: [
        'Automatische boekhouding',
        'Compliance checks',
        'Client rapportages',
        'Risk assessment tools'
      ],
      color: 'from-green-500 to-green-400',
      bgColor: 'from-green-500/10 to-green-600/5'
    },
    {
      icon: Briefcase,
      name: 'Zakelijke Dienstverlening',
      adoption: '40%',
      rank: '#3',
      description: 'Meer focus op klanten, minder admin',
      useCases: [
        'Lead qualification & nurturing',
        'Proposal generatie',
        'Client onboarding',
        'Project management'
      ],
      color: 'from-purple-500 to-purple-400',
      bgColor: 'from-purple-500/10 to-purple-600/5'
    },
    {
      icon: Heart,
      name: 'Gezondheidszorg',
      adoption: '45%',
      rank: 'Rising',
      description: 'Meer tijd voor patiënten',
      useCases: [
        'Afspraak planning & herinnering',
        'Patiënt communicatie',
        'Administratie verwerking',
        'Dossierbeheer'
      ],
      color: 'from-red-500 to-red-400',
      bgColor: 'from-red-500/10 to-red-600/5'
    }
  ];

  const trends2025 = [
    {
      sector: 'Gezondheidszorg',
      currentAdoption: '45%',
      growth: 'Hoge groeipotentie',
      opportunity: 'AI-gedreven patiëntenzorg en administratie',
      icon: Heart,
      color: 'from-red-500 to-pink-400'
    },
    {
      sector: 'Bouw & Vastgoed',
      currentAdoption: '35%',
      growth: 'Veel ruimte voor groei',
      opportunity: 'Project management en resource planning',
      icon: Building2,
      color: 'from-orange-500 to-yellow-400'
    },
    {
      sector: 'Horeca & Toerisme',
      currentAdoption: '28%',
      growth: 'Stijgende interesse',
      opportunity: 'Customer experience en operationele efficiency',
      icon: Users,
      color: 'from-cyan-500 to-blue-400'
    }
  ];

  const automationByIndustry = [
    {
      industry: 'Professional Services',
      processes: [
        { name: 'Client Onboarding', automation: 85, impact: 'High' },
        { name: 'Document Generation', automation: 92, impact: 'High' },
        { name: 'Time Tracking & Billing', automation: 78, impact: 'Medium' },
        { name: 'Lead Qualification', automation: 88, impact: 'High' }
      ]
    },
    {
      industry: 'Financial Services',
      processes: [
        { name: 'Transaction Processing', automation: 95, impact: 'High' },
        { name: 'Risk Assessment', automation: 73, impact: 'High' },
        { name: 'Compliance Reporting', automation: 89, impact: 'High' },
        { name: 'Customer Onboarding', automation: 67, impact: 'Medium' }
      ]
    },
    {
      industry: 'Healthcare',
      processes: [
        { name: 'Appointment Scheduling', automation: 90, impact: 'Medium' },
        { name: 'Patient Data Entry', automation: 85, impact: 'High' },
        { name: 'Insurance Claims', automation: 82, impact: 'High' },
        { name: 'Medical Records', automation: 76, impact: 'Medium' }
      ]
    }
  ];

  const commonChallenges = [
    {
      challenge: 'Gebrek aan AI-expertise',
      percentage: 75,
      solution: 'Full-service implementatie met training',
      icon: Cog
    },
    {
      challenge: 'Privacy & GDPR compliance',
      percentage: 65,
      solution: 'Nederlandse privacy-standaarden',
      icon: MessageSquare
    },
    {
      challenge: 'Budget constraints',
      percentage: 60,
      solution: 'Modulaire aanpak met snelle ROI',
      icon: TrendingUp
    }
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
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
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200/90 font-semibold text-base tracking-wide uppercase">Jouw Sector</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Wat kunnen wij
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-medium">
              voor jou doen?
            </span>
          </motion.h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${industry.bgColor} border border-purple-500/20 backdrop-blur-sm`}
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
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${industry.color} bg-opacity-20`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                      {industry.adoption}
                    </div>
                    <div className="text-xs text-gray-400 font-medium">
                      {industry.rank}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {industry.name}
                </h3>
                
                <p className="text-gray-300/70 text-sm mb-6 leading-relaxed">
                  {industry.description}
                </p>
                
                {/* Use cases */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">
                    Populaire automatiseringen:
                  </h4>
                  {industry.useCases.map((useCase, caseIndex) => (
                    <div key={caseIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.color}`} />
                      <span className="text-gray-300/80 text-xs">
                        {useCase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2025 Trends */}
        <div className="mb-24">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-4">
              Grootste Groeikansen 2025
            </h3>
            <p className="text-blue-200/70 text-lg">
              Sectoren met het meeste potentiel voor AI-adoptie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trends2025.map((trend, index) => (
              <motion.div
                key={trend.sector}
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
                <div className={`absolute inset-0 bg-gradient-to-br ${trend.color} opacity-5 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${trend.color} bg-opacity-20`}>
                      <trend.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">
                        {trend.sector}
                      </h4>
                      <div className="text-sm text-gray-400">
                        {trend.currentAdoption} huidige adoptie
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                      <div className="text-green-300 font-medium text-sm mb-2">
                        Groeipotentie:
                      </div>
                      <div className="text-green-200/80 text-sm">
                        {trend.growth}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20">
                      <div className="text-blue-300 font-medium text-sm mb-2">
                        Grootste kans:
                      </div>
                      <div className="text-blue-200/80 text-sm">
                        {trend.opportunity}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Automation by Industry */}
        <div className="bg-gradient-to-br from-gray-900/60 to-black/80 rounded-3xl border border-blue-500/20 p-8 lg:p-12 backdrop-blur-sm mb-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-4">
              Automatiseringspercentages per Sector
            </h3>
            <p className="text-blue-200/70 text-lg">
              Welke processen zijn het meest geschikt voor automatisering
            </p>
          </motion.div>

          <div className="space-y-12">
            {automationByIndustry.map((industry, industryIndex) => (
              <motion.div
                key={industry.industry}
                className="space-y-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  delay: industryIndex * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <h4 className="text-xl font-semibold text-white">
                  {industry.industry}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industry.processes.map((process, processIndex) => (
                    <div
                      key={process.name}
                      className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-white font-medium">
                          {process.name}
                        </h5>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          process.impact === 'High' 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {process.impact} Impact
                        </span>
                      </div>
                      
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300/70">Automation Rate</span>
                          <span className="text-blue-400 font-semibold">
                            {process.automation}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${process.automation}%` }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ 
                              duration: 2, 
                              delay: industryIndex * 0.15 + processIndex * 0.1, 
                              ease: "easeOut" 
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Common Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-3 text-center mb-12">
            <motion.h3 
              className="text-3xl lg:text-4xl font-light text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Gemeenschappelijke Uitdagingen
            </motion.h3>
            <motion.p 
              className="text-blue-200/70 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Dezelfde problemen, ongeacht de sector
            </motion.p>
          </div>
          
          {commonChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.challenge}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-red-500/20">
                  <challenge.icon className="w-5 h-5 text-red-400" />
                </div>
                <div className="text-2xl font-bold text-red-400">
                  {challenge.percentage}%
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-3">
                {challenge.challenge}
              </h4>
              
              <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                <div className="text-green-300 font-medium text-sm mb-1">
                  ScailUp Oplossing:
                </div>
                <div className="text-green-200/80 text-sm">
                  {challenge.solution}
                </div>
              </div>
            </motion.div>
          ))}
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
            <span className="relative z-10">Ontdek mogelijkheden voor jouw sector</span>
            <TrendingUp className="relative z-10 ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
          
          <p className="text-blue-200/60 text-sm mt-4">
            Sector-specifieke automatisering roadmap • Gratis adviesgesprek
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;