import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Shield, Settings, BarChart3, Cloud, HardDrive } from 'lucide-react';

const AgencyPlatformComparisonSection = () => {
  const comparisonData = {
    standalone: {
      title: "Standalone Agent",
      subtitle: "Volledig eigenaarschap, draai het zelf",
      icon: HardDrive,
      gradient: "from-green-500 to-emerald-500",
      pricing: "Eenmalige setup fee",
      bestFor: "Bedrijven die volledige controle willen of specifieke hosting requirements hebben",
      features: [
        "100% code eigenaarschap",
        "Google Sheets/Airtable hosting",
        "Volledige documentatie",
        "Geen maandelijkse kosten",
        "Zelf hosten en beheren",
        "Exporteerbaar naar eigen stack",
        "Geen vendor dependencies"
      ],
      pros: [
        "Één keer betalen, voor altijd gebruiken",
        "Volledige controle over data",
        "Geen platform afhankelijkheden",
        "Integratie met eigen tools"
      ],
      cons: [
        "Zelf onderhoud en updates",
        "Geen centraal dashboard",
        "Beperkte analytics"
      ]
    },
    platform: {
      title: "Buildrs Platform",
      subtitle: "Geïntegreerd met dashboard en monitoring",
      icon: Cloud,
      gradient: "from-blue-500 to-purple-500",
      pricing: "Setup fee + usage-based",
      bestFor: "Bedrijven die meerdere agents willen of centrale monitoring nodig hebben",
      features: [
        "Custom SaaS interface",
        "Centraal dashboard",
        "Real-time monitoring", 
        "Agent blijft exporteerbaar",
        "Advanced analytics",
        "Automatische updates",
        "24/7 platform support"
      ],
      pros: [
        "Overzichtelijk dashboard",
        "Makkelijk meerdere agents beheren", 
        "Geavanceerde rapportage",
        "Automatische updates"
      ],
      cons: [
        "Maandelijkse platform kosten",
        "Afhankelijk van ons platform",
        "Usage-based pricing"
      ]
    }
  };

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-full"></div>
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
            Welke optie past
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-normal">bij jou?</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Beide opties geven je volledige eigenaarschap van je agent. Het verschil zit in hosting en features.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(comparisonData).map(([key, option], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 h-full">
                
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${option.gradient} rounded-xl flex items-center justify-center mr-4`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{option.title}</h3>
                    <p className="text-white/60 text-sm">{option.subtitle}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${option.gradient} text-white text-sm font-medium mb-2`}>
                    {option.pricing}
                  </div>
                  <p className="text-white/70 text-sm">{option.bestFor}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <Settings className="w-4 h-4 mr-2 text-blue-400" />
                    Features
                  </h4>
                  <div className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-3 text-sm">✓ Voordelen</h4>
                    <div className="space-y-1">
                      {option.pros.map((pro, proIndex) => (
                        <p key={proIndex} className="text-white/70 text-sm">• {pro}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-orange-400 font-semibold mb-3 text-sm">⚠ Overwegingen</h4>
                    <div className="space-y-1">
                      {option.cons.map((con, conIndex) => (
                        <p key={conIndex} className="text-white/70 text-sm">• {con}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decision Helper - Clean Version */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60"></div>
          
          <div className="relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-10">
            <h3 className="text-3xl font-light text-white text-center mb-10"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontWeight: '300'
                }}
            >
              Welke optie past <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">bij jou?</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-3">
                      <HardDrive className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Standalone</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/80 text-sm">✓ Volledige controle over hosting</p>
                    <p className="text-white/80 text-sm">✓ Specifieke compliance eisen</p>
                    <p className="text-white/80 text-sm">✓ Geen maandelijkse kosten</p>
                    <p className="text-white/80 text-sm">✓ Eigen tech team beschikbaar</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-3">
                      <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Platform</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/80 text-sm">✓ Meerdere agents beheren</p>
                    <p className="text-white/80 text-sm">✓ Centrale dashboards</p>
                    <p className="text-white/80 text-sm">✓ Automatische updates</p>
                    <p className="text-white/80 text-sm">✓ Vaak goedkoper dan zelf hosten*</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-white/60 mb-2">Beide opties beginnen met hetzelfde gesprek</p>
              <p className="text-white/40 text-xs mb-6">*Usage-based fees zijn vaak lager dan eigen software licenties, hosting en onderhoud</p>
              <button
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Bespreek mijn situatie
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyPlatformComparisonSection;