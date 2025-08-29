import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AgencyFAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Wat voor custom AI agents en automations ontwikkelen jullie?",
      answer: "We ontwikkelen volledig op maat gemaakte AI agents voor lead qualification, process automation, CRM integraties, custom workflows en meer. Elke oplossing wordt specifiek ontworpen voor jouw business processen en requirements."
    },
    {
      question: "Hoe lang duurt het ontwikkelen van een custom oplossing?",
      answer: "Typisch 4-6 weken van concept tot live implementatie. Dit omvat requirements analyse, development, testing, integratie en deployment. Complexe multi-system integraties kunnen 6-8 weken duren."
    },
    {
      question: "Hoe lang duurt het voordat ik live kan met de eerste client?",
      answer: "Na partnership agreement duurt onboarding 2-4 weken. Dit omvat platform setup met jouw branding, team training, eerste client configuratie en go-live support. Daarna kunnen nieuwe clients binnen 48 uur worden geactiveerd."
    },
    {
      question: "Wat voor training en support krijgt mijn team?",
      answer: "Complete onboarding training (remote + on-site opties), dedicated success manager, 24/7 technical support, sales enablement materialen en ongoing training updates. Plus toegang tot ons partner portal met documentatie, best practices en community."
    },
    {
      question: "Kan ik het platform volledig aanpassen aan mijn brand?",
      answer: "Ja, volledig white-label betekent: jouw logo, kleuren, domeinnaam, email templates, dashboards en client communicatie. Clients zien alleen jouw agency. Er zijn ook opties voor custom features indien nodig voor jouw positioning."
    },
    {
      question: "Hoe zit het met client data en privacy?",
      answer: "Alle client data blijft eigendom van jouw agency. We zijn GDPR compliant, hebben ISO certificeringen en hanteren strikte data governance. Je krijgt volledige controle over data access en kunnen kiezen tussen EU/US hosting."
    },
    {
      question: "Wat als ik wil opschalen naar meerdere markten?",
      answer: "Dat ondersteunen we volledig. Het platform is multi-market ready met localization opties. Revenue sharing blijft hetzelfde, je krijgt mogelijk volume voordelen. We helpen met market entry strategie en local compliance waar nodig."
    },
    {
      question: "Is er een minimum commitment of volume vereist?",
      answer: "We starten graag klein om partnership fit te valideren. Minimum is typisch 2-3 clients om platform kosten te dekken. Daarna schaal je naar eigen tempo. Wel hanteren we performance metrics om kwaliteit te waarborgen."
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-pink-900/10 opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            <span className="block sm:inline">Agency Services</span>
            <span className="sm:hidden"> </span><br className="hidden sm:block" />
            <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Veelgestelde vragen over onze custom AI development services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-200"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-white/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-6">Nog vragen over custom AI development?</p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/contact';
              }
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Bespreek je project
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgencyFAQSection;