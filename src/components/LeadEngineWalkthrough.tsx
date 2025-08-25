import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Mail, Calendar, CheckCircle } from 'lucide-react';

const LeadEngineWalkthrough = () => {
  const steps = [
    {
      id: 1,
      number: "①",
      icon: Target,
      emoji: "🎯",
      headline: "Jouw doelgroep in 1 klik.",
      subtext: "AI segmenteert je markt en zorgt voor accurate targeting zonder gedoe.",
      highlight: "Targeting in 2 min geregeld ✅",
      visual: "filter-interface"
    },
    {
      id: 2,
      number: "②", 
      icon: Zap,
      emoji: "⚡",
      headline: "Campagnes automatisch aangemaakt.",
      subtext: "Onze AI analyseert jouw bedrijf en stelt proposities & berichten voor. Jij bepaalt of je ze aanpast of direct live zet.",
      highlight: "Propositie klaar in 30 sec ⚡",
      visual: "campaign-editor"
    },
    {
      id: 3,
      number: "③",
      icon: Mail,
      emoji: "📩",
      headline: "E-mails, LinkedIn & ABM. Volledig automatisch.",
      subtext: "De AI koppelt de juiste leads aan de juiste campagnes. Gepersonaliseerd, schaalbaar en spamvrij.",
      highlight: "85% deliverability | 12% response rate",
      visual: "outreach-dashboard"
    },
    {
      id: 4,
      number: "④",
      icon: Calendar,
      emoji: "📅",
      headline: "Afspraken verschijnen vanzelf.",
      subtext: "Reacties worden automatisch opgevolgd en ingepland in jouw agenda en CRM. Jij hoeft alleen nog aan te schuiven.",
      highlight: "3% meeting rate 📅",
      visual: "calendar-pipeline"
    }
  ];

  const generateUIScreenshot = (visual: string, stepId: number) => {
    switch (visual) {
      case 'filter-interface':
        return (
          <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 p-6 overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="flex-1 bg-slate-700/50 rounded-lg px-4 py-1 ml-4">
                <div className="text-slate-400 text-xs">scailup.ai/targeting</div>
              </div>
            </div>
            
            {/* Filter Interface */}
            <div className="space-y-4">
              <div className="text-white font-semibold text-lg mb-4">Doelgroep Filters</div>
              
              {/* Company Size */}
              <div className="bg-slate-800/80 rounded-xl p-4 border border-blue-500/30">
                <div className="text-blue-300 font-medium mb-2">Bedrijfsgrootte</div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-blue-500/20 text-blue-200 text-sm rounded-full border border-blue-500/30">50-200 werknemers</div>
                  <div className="px-3 py-1 bg-slate-700/50 text-slate-400 text-sm rounded-full">200-500</div>
                  <div className="px-3 py-1 bg-slate-700/50 text-slate-400 text-sm rounded-full">500+</div>
                </div>
              </div>
              
              {/* Industry */}
              <div className="bg-slate-800/80 rounded-xl p-4 border border-green-500/30">
                <div className="text-green-300 font-medium mb-2">Branche</div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1 bg-green-500/20 text-green-200 text-sm rounded-full border border-green-500/30">SaaS</div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-200 text-sm rounded-full border border-green-500/30">E-commerce</div>
                  <div className="px-3 py-1 bg-slate-700/50 text-slate-400 text-sm rounded-full">Fintech</div>
                </div>
              </div>
              
              {/* Results */}
              <motion.div 
                className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl p-4 border border-blue-400/30"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-white font-semibold">📊 Resultaat: 12,847 prospects gevonden</div>
                <div className="text-slate-300 text-sm mt-1">98.2% data accuracy • Direct beschikbaar</div>
              </motion.div>
            </div>
          </div>
        );
        
      case 'campaign-editor':
        return (
          <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 p-6 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-white font-semibold text-lg">AI Campagne Editor</div>
              <div className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/40 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                AI Active
              </div>
            </div>
            
            {/* Campaign Content */}
            <div className="space-y-4">
              <div className="bg-slate-800/80 rounded-xl p-4 border border-purple-500/30">
                <div className="text-purple-300 font-medium mb-2">📝 AI Propositie</div>
                <div className="text-slate-200 text-sm leading-relaxed">
                  "Verhoog je conversie met 47% door geautomatiseerde lead nurturing..."
                </div>
                <div className="mt-2 flex gap-2">
                  <button className="px-3 py-1 bg-purple-500/20 text-purple-200 text-xs rounded-lg border border-purple-500/40">Gebruik</button>
                  <button className="px-3 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-lg">Aanpassen</button>
                </div>
              </div>
              
              <div className="bg-slate-800/80 rounded-xl p-4 border border-cyan-500/30">
                <div className="text-cyan-300 font-medium mb-2">✉️ AI Berichten (3/5)</div>
                <div className="space-y-2">
                  <div className="text-slate-200 text-sm bg-slate-700/50 rounded-lg p-2">
                    "Hallo [NAAM], gefeliciteerd met jullie recente Series A..."
                  </div>
                  <div className="text-slate-200 text-sm bg-slate-700/50 rounded-lg p-2">
                    "Hi [NAAM], ik zag dat je onlangs [COMPANY EVENT]..."
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-3 border border-blue-400/30 text-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-white font-medium">⚡ Campagne klaar in 30 seconden</div>
              </motion.div>
            </div>
          </div>
        );
        
      case 'outreach-dashboard':
        return (
          <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 p-6 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-white font-semibold text-lg">Live Outreach Dashboard</div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-green-300 text-sm">Active</div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-slate-800/80 rounded-lg p-3 border border-blue-500/30 text-center">
                <div className="text-blue-300 font-bold text-lg">2,847</div>
                <div className="text-slate-400 text-xs">Emails Sent</div>
              </div>
              <div className="bg-slate-800/80 rounded-lg p-3 border border-green-500/30 text-center">
                <div className="text-green-300 font-bold text-lg">85%</div>
                <div className="text-slate-400 text-xs">Deliverability</div>
              </div>
              <div className="bg-slate-800/80 rounded-lg p-3 border border-purple-500/30 text-center">
                <div className="text-purple-300 font-bold text-lg">12%</div>
                <div className="text-slate-400 text-xs">Response Rate</div>
              </div>
            </div>
            
            {/* Active Campaigns */}
            <div className="space-y-3">
              <div className="bg-slate-800/80 rounded-xl p-3 border border-cyan-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-cyan-300 font-medium text-sm">📧 E-mail Sequence: SaaS CEOs</div>
                    <div className="text-slate-400 text-xs">Stap 2/5 • 847 verstured</div>
                  </div>
                  <motion.div 
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="bg-slate-800/80 rounded-xl p-3 border border-blue-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-blue-300 font-medium text-sm">💼 LinkedIn: Tech Founders</div>
                    <div className="text-slate-400 text-xs">Stap 1/3 • 1,204 verstured</div>
                  </div>
                  <motion.div 
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-3 border border-green-400/30 text-center">
                <div className="text-white font-medium text-sm">🎯 342 nieuwe reacties vandaag</div>
              </div>
            </div>
          </div>
        );
        
      case 'calendar-pipeline':
        return (
          <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 p-6 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-white font-semibold text-lg">Pipeline & Agenda</div>
              <motion.div 
                className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/40 flex items-center gap-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                New Meeting!
              </motion.div>
            </div>
            
            {/* Pipeline */}
            <div className="space-y-3 mb-4">
              <div className="bg-slate-800/80 rounded-xl p-3 border border-yellow-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-yellow-300 font-medium text-sm">📞 TechCorp BV</div>
                    <div className="text-slate-400 text-xs">Interesse in demo • Reactie 2u geleden</div>
                  </div>
                  <div className="text-yellow-400 text-xs bg-yellow-500/20 px-2 py-1 rounded-lg">Follow-up</div>
                </div>
              </div>
              
              <motion.div 
                className="bg-slate-800/80 rounded-xl p-3 border border-green-500/30"
                animate={{ borderColor: "rgba(34, 197, 94, 0.5)" }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-green-300 font-medium text-sm">✅ InnovateNL</div>
                    <div className="text-slate-400 text-xs">Meeting gepland • Morgen 14:00</div>
                  </div>
                  <div className="text-green-400 text-xs bg-green-500/20 px-2 py-1 rounded-lg">Booked</div>
                </div>
              </motion.div>
            </div>
            
            {/* Calendar Preview */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-blue-500/30">
              <div className="text-blue-300 font-medium mb-3 text-sm">📅 Deze Week</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="text-white text-sm">Demo InnovateNL</div>
                    <div className="text-slate-400 text-xs">Dinsdag 14:00 - 15:00</div>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="text-white text-sm">Call ScaleUp Co</div>
                    <div className="text-slate-400 text-xs">Woensdag 10:30 - 11:00</div>
                  </div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div className="w-full h-80 bg-slate-800 rounded-2xl"></div>;
    }
  };

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Ambient Background Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="backlight backlight-left bg-scailup-blue"></div>
        <div className="backlight backlight-right bg-scailup-cyan"></div>
        <div className="backlight backlight-center bg-scailup-blue opacity-30"></div>
      </div>

      <div className="relative max-w-8xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Zo werkt het
            </span>
          </h2>
          
          <motion.p 
            className="text-xl lg:text-2xl xl:text-3xl text-blue-200/80 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Van doelgroep tot deal. <span className="text-blue-300 font-medium">In 4 simpele stappen.</span>
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32 lg:space-y-40">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <motion.div
                key={step.id}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.2,
                  ease: [0.23, 1, 0.32, 1] 
                }}
              >
                {/* UI Screenshot */}
                <div className="flex-1 relative">
                  <motion.div 
                    className="relative"
                    whileInView={{ scale: [0.95, 1] }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-3xl blur-2xl opacity-60"></div>
                    
                    {/* Screenshot Container */}
                    <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-2xl border border-slate-700/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                      {generateUIScreenshot(step.visual, step.id)}
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 opacity-80 rotate-12"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-60"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-8 max-w-2xl">
                  {/* Step Number & Icon */}
                  <motion.div 
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/40 backdrop-blur-sm">
                      <span className="text-blue-300 font-bold text-2xl">{step.number}</span>
                      <div className="absolute inset-0 rounded-2xl bg-blue-400/20 blur-xl"></div>
                    </div>
                    <div className="text-4xl">{step.emoji}</div>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-500/60 via-blue-400/40 to-transparent"></div>
                  </motion.div>

                  {/* Typography */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.0, delay: index * 0.1 + 0.2, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                        {step.headline}
                      </span>
                    </h3>

                    <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                      {step.subtext}
                    </p>
                  </motion.div>

                  {/* Highlight Pill */}
                  <motion.div 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full border border-blue-500/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-300 font-semibold text-base">
                      {step.highlight}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-40 lg:mt-48"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-blue-900/20 via-black/40 to-black/60 border border-blue-500/20 backdrop-blur-xl overflow-hidden">
              <div className="relative z-10 space-y-8">
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Klaar voor de Lead Engine?
                  </span>
                </h3>
                
                <p className="text-xl lg:text-2xl text-blue-200/70 font-light max-w-3xl mx-auto leading-relaxed">
                  Zie in 15 minuten hoe je pipeline wordt getransformeerd
                </p>

                <motion.a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-12 lg:px-16 py-5 lg:py-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg lg:text-xl rounded-full overflow-hidden shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                >
                  <span className="relative z-10 flex items-center gap-4">
                    Plan een demo
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadEngineWalkthrough;