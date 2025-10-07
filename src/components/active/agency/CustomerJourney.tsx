import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomerJourney = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0); // Default to fase 1
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const selectPhase = (index: number) => {
    setSelectedPhase(index);
  };

  const journeySteps = [
    {
      phase: "FASE 1",
      title: "DISCOVERY & KEUZE",
      subtitle: "Het groeivoertuig bepalen • 1-2 sales calls",
      content: "We starten met een grondige discovery call om jouw huidige situatie, uitdagingen en groeipotentieel te analyseren. Samen bepalen we het beste groeivoertuig voor jouw business:",
      details: [
        "🎯 Discovery call: analyse van huidige situatie en groeipotentieel",
        "🚀 Keuze groeivoertuig: Cold outreach (LinkedIn & e-mail) OF organische groei (SEO & content)",
        "⚡ Bottleneck identificatie: welke processen vertragen nu je groei?",
        "🔧 Automatisering voorstellen: AI-workflows die direct impact maken",
        "📋 Plan/roadmap: concrete stappen naar schaalbare groei (presentatie in 2e call indien nodig)"
      ]
    },
    {
      phase: "FASE 2", 
      title: "ONBOARDING & IMPLEMENTATIE",
      subtitle: "Wij bouwen, jij hebt toegang • 6 weken intensief",
      content: "De eerste 6 weken nemen wij volledig uit handen. Jij krijgt wel toegang tot het platform om de voortgang te volgen, maar wij zorgen voor alle implementatie:",
      details: [
        "🔑 Platform toegang: volg de voortgang live, maar wij doen het werk",
        "🏗️ Campagne setup: lead generatie, outreach workflows en follow-up sequences",
        "⚙️ Custom development: maatwerk AI-agents en automatiseringen voor jouw business",
        "📈 Performance optimalisatie: real-time bijsturing voor maximale resultaten", 
        "🛡️ Noodstop garantie: werkt het niet? Dan stoppen we het 12-weken traject in overleg"
      ]
    },
    {
      phase: "FASE 3",
      title: "OVERDRACHT & EIGENAARSCHAP", 
      subtitle: "Jouw systeem, jouw controle • Flexibel contract",
      content: "Na 6 weken is alles operationeel. We dragen het volledig over met uitgebreide uitleg, zodat jij het systeem kunt runnen en optimaliseren:",
      details: [
        "🎓 Overdrachtscall: complete uitleg van alle gebouwde systemen en workflows",
        "🎮 Zelf draaien: minimaal 6 weken eigenaarschap (onderdeel van 12-weken contract)",
        "📅 Flexibel vervolg: daarna maandelijks verlengbaar, geen lange termijn verplichtingen",
        "🤝 Designated support: vaste contactpersoon beschikbaar voor vragen en optimalisaties",
        "🔧 Volledig eigenaarschap: alle workflows en data blijven van jou, exporteerbaar"
      ]
    }
  ];

  return (
    <section className="relative w-full bg-black py-12 lg:py-16">
      
      {/* Ambient Blue Backlight - Exact same as SalesEngineSection */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
        {/* Blue glows positioned behind text (left side) */}
        <div 
          className="absolute top-1/3 left-1/6 w-[30rem] h-[25rem] rounded-full blur-2xl" 
          style={{ background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.35) 35%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/8 w-[25rem] h-[20rem] rounded-full blur-2xl" 
          style={{ background: 'radial-gradient(ellipse, rgba(96, 165, 250, 0.75) 0%, rgba(96, 165, 250, 0.30) 35%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-[35rem] h-[30rem] rounded-full blur-2xl" 
          style={{ background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.7) 0%, rgba(59, 130, 246, 0.25) 35%, transparent 70%)', transform: 'translateY(-50%)' }}
        />
      </div>
      
      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 xl:gap-40 items-start">
          
          {/* Left Side - Hero + Phase Selector */}
          <motion.div 
            className="relative"
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={isMobile ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? {} : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Hero-style Headline */}
            <h2 
              className="text-4xl lg:text-5xl xl:text-6xl text-white mb-8"
              style={{ 
                fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                letterSpacing: '-0.045em',
                lineHeight: '0.9',
                textRendering: 'optimizeLegibility', 
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              <div className="space-y-2">
                <div style={{ fontWeight: '300' }}>
                  Jouw groeitraject
                </div>
                <div style={{ fontWeight: '400' }}>
                  in drie stappen.
                </div>
              </div>
            </h2>

            {/* Subtitle */}
            <p 
              className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12"
              style={{ 
                fontFamily: '"Neue Haas Grotesk Display Pro", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontWeight: '200'
              }}
            >
              Van eerste gesprek tot schaalbaar systeem—stap voor stap naar voorspelbare groei.
            </p>

            {/* Phase Selector - Vertical Stack */}
            <div className="space-y-6 mb-12">
              {journeySteps.map((step, index) => {
                const isSelected = selectedPhase === index;
                
                return (
                  <motion.button
                    key={index}
                    onClick={() => selectPhase(index)}
                    className={`w-full text-left group relative overflow-hidden transition-all duration-500 ${
                      isSelected ? 'transform scale-[1.01]' : 'hover:transform hover:scale-[1.005]'
                    }`}
                    whileHover={isMobile ? {} : { x: 4 }}
                    whileTap={isMobile ? {} : { scale: 0.99 }}
                    initial={isMobile ? false : { opacity: 0, x: -20 }}
                    whileInView={isMobile ? false : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={isMobile ? {} : { duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Background Glow */}
                    <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                      isSelected 
                        ? 'bg-gradient-to-r from-blue-500/8 via-purple-500/4 to-transparent opacity-100' 
                        : 'bg-gradient-to-r from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100'
                    }`} />
                    
                    {/* Border */}
                    <div className={`absolute inset-0 rounded-2xl border transition-all duration-500 ${
                      isSelected 
                        ? 'border-blue-500/30' 
                        : 'border-white/[0.05] group-hover:border-white/[0.12]'
                    }`} />

                    {/* Content */}
                    <div className="relative p-6 lg:p-8 flex items-start gap-6">
                      {/* Phase Number */}
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-500 flex-shrink-0 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20' 
                          : 'bg-gradient-to-br from-gray-700 to-gray-800 text-gray-300 group-hover:from-gray-600 group-hover:to-gray-700'
                      }`}>
                        {index + 1}
                      </div>

                      {/* Phase Info */}
                      <div className="flex-1">
                        <span 
                          className={`text-xs font-semibold tracking-wider uppercase block mb-2 transition-colors duration-300 ${
                            isSelected ? 'text-blue-400' : 'text-gray-400'
                          }`}
                          style={{
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          {step.phase}
                        </span>
                        <h3 
                          className={`text-xl lg:text-2xl font-light mb-2 transition-colors duration-300 ${
                            isSelected ? 'text-white' : 'text-gray-200'
                          }`}
                          style={{
                            fontFamily: '"Neue Haas Grotesk Display Pro", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                            fontWeight: 300,
                            lineHeight: 1.2
                          }}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className={`text-sm transition-colors duration-300 ${
                            isSelected ? 'text-gray-300' : 'text-gray-400'
                          }`}
                          style={{
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            fontWeight: 400,
                            lineHeight: 1.5
                          }}
                        >
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Selection Indicator */}
                      <div className={`w-1 h-12 rounded-full transition-all duration-500 flex-shrink-0 ${
                        isSelected 
                          ? 'bg-gradient-to-b from-blue-500 to-purple-500' 
                          : 'bg-gray-700/30 group-hover:bg-gray-600/50'
                      }`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              whileInView={isMobile ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? {} : { duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                }}
                className="relative inline-flex items-center justify-center px-8 py-4 text-white font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group whitespace-nowrap"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  boxShadow: 'none'
                }}
              >
                <Phone className="w-5 h-5 mr-3" />
                <span>Plan discovery call</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Dynamic Content Area */}
          <motion.div 
            className="relative"
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={isMobile ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? {} : { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPhase}
                initial={isMobile ? false : { opacity: 0, y: 40 }}
                animate={isMobile ? false : { opacity: 1, y: 0 }}
                exit={isMobile ? false : { opacity: 0, y: -40 }}
                transition={isMobile ? {} : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                {/* Content Card */}
                <div className="relative bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-sm rounded-3xl border border-white/[0.08] p-8 lg:p-12 h-full">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-50" />
                  
                  <div className="relative h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl">
                          <span className="text-2xl font-bold text-white">{selectedPhase + 1}</span>
                        </div>
                        <div>
                          <span 
                            className="text-blue-400 font-medium tracking-wider uppercase text-sm block mb-2"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600 }}
                          >
                            {journeySteps[selectedPhase].phase}
                          </span>
                          <div className="w-14 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                        </div>
                      </div>
                      <h3 
                        className="text-3xl lg:text-4xl xl:text-5xl text-white mb-4"
                        style={{
                          fontFamily: '"Neue Haas Grotesk Display Pro", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          fontWeight: 300,
                          lineHeight: 1.1,
                          letterSpacing: '-0.025em'
                        }}
                      >
                        {journeySteps[selectedPhase].title}
                      </h3>
                      <p 
                        className="text-lg lg:text-xl text-gray-300 font-light leading-relaxed"
                        style={{
                          fontFamily: '"Neue Haas Grotesk Display Pro", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          fontWeight: 200
                        }}
                      >
                        {journeySteps[selectedPhase].content}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid gap-4 flex-1">
                      {journeySteps[selectedPhase].details.slice(0, 4).map((detail, detailIndex) => (
                        <motion.div 
                          key={detailIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                          className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-300 group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                            <span className="text-base">{detail.split(' ')[0]}</span>
                          </div>
                          <div className="flex-1">
                            <p 
                              className="text-gray-200 leading-relaxed text-sm lg:text-base"
                              style={{
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                                fontWeight: 300,
                                lineHeight: 1.6
                              }}
                            >
                              {detail.split(' ').slice(1).join(' ')}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CustomerJourney;