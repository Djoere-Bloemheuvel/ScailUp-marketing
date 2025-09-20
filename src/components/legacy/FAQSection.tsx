import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
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

  const faqItems = [
    {
      question: "Hoe snel kan ik beginnen met Buildrs?",
      answer: "Je bent binnen 24 uur live. Na onboarding configureren we je agents, laden je prospects en starten de eerste campagnes. Binnen een week krijg je al de eerste meetings geboekt."
    },
    {
      question: "Wat zijn de kosten per maand?",
      answer: "Onze prijzen starten vanaf €2.997/maand voor het volledige Buildrs platform met alle agents. Dit omvat toegang tot de 500k+ prospect database, onbeperkte email & LinkedIn campaigns, en persoonlijke onboarding."
    },
    {
      question: "Hoeveel leads kan ik verwachten?",
      answer: "Gemiddeld genereren onze klanten 50-200 gekwalificeerde leads per maand, afhankelijk van je branche en doelmarkt. Met onze AI-agents zie je typisch 15-25% response rates op email campagnes."
    },
    {
      question: "Hoe werkt de AI personalisatie precies?",
      answer: "Onze AI analyseert publieke data van prospects (LinkedIn, bedrijfsnieuws, posts) en genereert hyper-gepersonaliseerde berichten. Elke email of LinkedIn bericht is uniek en relevant voor de ontvanger."
    },
    {
      question: "Integratie met bestaande CRM mogelijk?",
      answer: "Ja, we integreren naadloos met HubSpot, Salesforce, Pipedrive en 50+ andere CRM's. Alle leads en activiteiten worden automatisch gesynchroniseerd in je bestaande workflow."
    },
    {
      question: "Kan ik de campagnes zelf aanpassen?",
      answer: "Absoluut. Je hebt volledige controle over messaging, targeting, timing en frequentie. Onze platform is gebouwd voor marketeers die de details willen bepalen."
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Ambient Background Lights - matching GenerateLeadsSection pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main service orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-600/30 rounded-full blur-3xl opacity-55"></div>
        <div className="absolute top-1/3 left-1/4 w-88 h-88 bg-gradient-to-r from-blue-400/25 to-purple-500/25 rounded-full blur-3xl opacity-45 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        
        {/* Secondary ambient glows */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-400/10 via-purple-500/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-40 left-20 w-60 h-60 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-full blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-tr from-purple-500/18 to-pink-600/18 rounded-full blur-2xl opacity-70 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Corner service glows */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-500/25 to-transparent rounded-full blur-xl opacity-40"></div>
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-purple-500/25 to-transparent rounded-full blur-xl opacity-35"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-xl opacity-45"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-600/20 to-transparent rounded-full blur-xl opacity-40"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Antwoorden op de belangrijkste vragen over Buildrs
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
                {faqItems.map((item, index) => {
                  const isOpen = openItems.has(index);
                  return (
                    <div key={index} className="group">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-6 text-left hover:bg-white/2 transition-all duration-300 focus:outline-none focus:bg-white/3"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300 pr-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                              {isOpen ? (
                                <ChevronUp className="w-3 h-3 text-white/60 group-hover:text-blue-300 transition-colors duration-300" />
                              ) : (
                                <ChevronDown className="w-3 h-3 text-white/60 group-hover:text-blue-300 transition-colors duration-300" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {/* Answer with smooth animation */}
                      <div 
                        className={`overflow-hidden transition-all duration-400 ease-in-out ${
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
                {faqItems.slice(0, 3).map((item, index) => {
                  const isOpen = openItems.has(index);
                  return (
                    <div key={index} className="group">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-6 text-left hover:bg-white/2 transition-all duration-300 focus:outline-none focus:bg-white/3"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300 pr-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                              {isOpen ? (
                                <ChevronUp className="w-3 h-3 text-white/60 group-hover:text-blue-300 transition-colors duration-300" />
                              ) : (
                                <ChevronDown className="w-3 h-3 text-white/60 group-hover:text-blue-300 transition-colors duration-300" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {/* Answer with smooth animation */}
                      <div 
                        className={`overflow-hidden transition-all duration-400 ease-in-out ${
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
                {faqItems.slice(3, 6).map((item, index) => {
                  const actualIndex = index + 3;
                  const isOpen = openItems.has(actualIndex);
                  return (
                    <div key={actualIndex} className="group">
                      <button
                        onClick={() => toggleItem(actualIndex)}
                        className="w-full px-6 py-6 text-left hover:bg-white/2 transition-all duration-300 focus:outline-none focus:bg-white/3"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300 pr-6" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                              {isOpen ? (
                                <ChevronUp className="w-3 h-3 text-white/60 group-hover:text-blue-300 transition-colors duration-300" />
                              ) : (
                                <ChevronDown className="w-3 h-3 text-white/60 group-hover:text-blue-300 transition-colors duration-300" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {/* Answer with smooth animation */}
                      <div 
                        className={`overflow-hidden transition-all duration-400 ease-in-out ${
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
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
            style={{ boxShadow: '0 0 30px -8px rgba(59, 130, 246, 0.4)' }}
          >
            Plan een kennismakingsgesprek
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;