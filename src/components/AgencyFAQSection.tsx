import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AgencyFAQSection = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set()); // All items closed by default

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "Wat is het verschil tussen Engines en Custom Agents?",
      answer: "Engines zijn onze schaalbare SaaS-modules zoals Lead Engine (outbound automation) en CRM. Custom Agents zijn maatwerk workflows die we voor jou bouwen, zoals LinkedIn automation of proposal generators. Je kunt agents standalone gebruiken of geïntegreerd in ons platform."
    },
    {
      question: "Kan ik een agent standalone laten draaien?",
      answer: "Ja! Custom agents kunnen volledig standalone draaien via Google Sheets, Airtable of jouw eigen stack. Je betaalt een eenmalige setup fee, krijgt volledige eigenaarschap en documentatie om het zelf te hosten. Geen vendor lock-in."
    },
    {
      question: "Of kan ik alles in jullie platform gebruiken?",
      answer: "Absoluut! Je kunt custom agents integreren in ons Buildrs platform voor betere dashboards en usage-based pricing. Je krijgt toegang tot Lead Engine, CRM en alle toekomstige modules. Agents blijven altijd exporteerbaar."
    },
    {
      question: "Hoe lang duurt het bouwen van een custom agent?",
      answer: "Typisch 1-2 weken van concept tot live agent. We starten met workflow analyse, bouwen dan met n8n en API's, testen grondig en leveren documentatie. Complexere multi-system agents kunnen iets langer duren."
    },
    {
      question: "Hoe werkt de pricing voor custom agents?",
      answer: "Standalone agents hebben een eenmalige setup fee. Platform-geïntegreerde agents combineren setup fee met usage-based pricing voor toegang tot alle modules. Complexere workflows hebben hogere setup kosten. We werken altijd met transparante, vaste projectprijzen."
    },
    {
      question: "Voor welke bedrijven werkt dit het beste?",
      answer: "Perfect voor B2B service providers: marketing agencies, sales agencies, consultants, financial services. Bedrijven die draaien op salescalls, outbound marketing en klantprojecten waar veel handmatige workflows zijn."
    },
    {
      question: "Krijg ik eigenaarschap van mijn agent?",
      answer: "Ja, altijd! Bij standalone agents krijg je volledige source code en documentatie. Bij platform-integratie blijft je agent exporteerbaar en krijg je blueprints. Geen lock-in, wel plug-and-play voordelen als je kiest voor ons platform."
    },
    {
      question: "Kan ik klein beginnen en later uitbreiden?",
      answer: "Zeker! Start met één agent (bijvoorbeeld LinkedIn outreach), test de ROI, en breid daarna uit. Je kunt later upgraden naar platform-integratie of extra agents toevoegen. Veel klanten starten standalone en migreren naar volledig platform."
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Ambient Background Lights - matching GenerateLeadsSection pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main service orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl opacity-55"></div>
        <div className="absolute top-1/3 left-1/4 w-88 h-88 bg-gradient-to-r from-pink-400/25 to-purple-500/25 rounded-full blur-3xl opacity-45 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        
        {/* Secondary ambient glows */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-400/10 via-pink-500/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-40 left-20 w-60 h-60 bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-full blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-tr from-pink-500/18 to-purple-600/18 rounded-full blur-2xl opacity-70 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Corner service glows */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500/25 to-transparent rounded-full blur-xl opacity-40"></div>
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-pink-500/25 to-transparent rounded-full blur-xl opacity-35"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl opacity-45"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-600/20 to-transparent rounded-full blur-xl opacity-40"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Antwoorden op de belangrijkste vragen over custom AI development
          </p>
        </div>

        {/* FAQ Container - Single Column on Mobile, Two Columns on Desktop */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-8 lg:space-y-0">
          
          {/* Mobile: Single Container with All FAQs */}
          <div className="lg:hidden">
            <div className="rounded-2xl overflow-hidden" style={{ 
              backgroundColor: '#0A0A0A',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div className="divide-y divide-white/5">
                {faqs.map((item, index) => {
                  const isOpen = openItems.has(index);
                  return (
                    <div key={index} className="group">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-6 text-left hover:bg-white/2 transition-all duration-300 focus:outline-none focus:bg-white/3"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300 pr-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                              {isOpen ? (
                                <ChevronUp className="w-3 h-3 text-white/60 group-hover:text-purple-300 transition-colors duration-300" />
                              ) : (
                                <ChevronDown className="w-3 h-3 text-white/60 group-hover:text-purple-300 transition-colors duration-300" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {/* Answer with smooth animation */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <div className="pr-10">
                            <p className="text-white/70 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop: Left Container */}
          <div className="hidden lg:block relative">
            <div className="rounded-2xl overflow-hidden" style={{ 
              backgroundColor: '#0A0A0A',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div className="divide-y divide-white/5">
                {faqs.slice(0, 4).map((item, index) => {
                  const isOpen = openItems.has(index);
                  return (
                    <div key={index} className="group">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-6 text-left hover:bg-white/2 transition-all duration-300 focus:outline-none focus:bg-white/3"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300 pr-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                              {isOpen ? (
                                <ChevronUp className="w-3 h-3 text-white/60 group-hover:text-purple-300 transition-colors duration-300" />
                              ) : (
                                <ChevronDown className="w-3 h-3 text-white/60 group-hover:text-purple-300 transition-colors duration-300" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {/* Answer with smooth animation */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <div className="pr-10">
                            <p className="text-white/70 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop: Right Container */}
          <div className="hidden lg:block relative">
            <div className="rounded-2xl overflow-hidden" style={{ 
              backgroundColor: '#0A0A0A',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div className="divide-y divide-white/5">
                {faqs.slice(4, 8).map((item, index) => {
                  const actualIndex = index + 4;
                  const isOpen = openItems.has(actualIndex);
                  return (
                    <div key={actualIndex} className="group">
                      <button
                        onClick={() => toggleItem(actualIndex)}
                        className="w-full px-6 py-6 text-left hover:bg-white/2 transition-all duration-300 focus:outline-none focus:bg-white/3"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300 pr-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                              {isOpen ? (
                                <ChevronUp className="w-3 h-3 text-white/60 group-hover:text-purple-300 transition-colors duration-300" />
                              ) : (
                                <ChevronDown className="w-3 h-3 text-white/60 group-hover:text-purple-300 transition-colors duration-300" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {/* Answer with smooth animation */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <div className="pr-10">
                            <p className="text-white/70 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">
            Nog meer vragen? We helpen je graag persoonlijk verder.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
            style={{ boxShadow: '0 0 30px -8px rgba(168, 85, 247, 0.4)' }}
          >
            Plan een strategiesessie
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgencyFAQSection;