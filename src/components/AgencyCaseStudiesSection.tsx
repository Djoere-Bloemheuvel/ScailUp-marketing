import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Zap } from 'lucide-react';

const AgencyCaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "LinkedIn Outreach Agent",
      client: "Marketing Agency",
      industry: "B2B Services", 
      problem: "Handmatige LinkedIn prospectie kostte 15+ uur per week",
      solution: "Custom agent voor geautomatiseerde LinkedIn outreach met AI personalisatie",
      results: [
        "85% tijdsbesparing",
        "300% meer prospects bereikt", 
        "40% hogere response rate"
      ],
      timeline: "2 weken",
      deployment: "Standalone via Google Sheets",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Proposal Generator",
      client: "Consultancy Firm",
      industry: "Business Consulting",
      problem: "Proposals schrijven nam 8 uur per prospect in beslag",
      solution: "AI-agent die automatisch proposals genereert op basis van intake data",
      results: [
        "90% sneller proposals",
        "Consistent branding en toon", 
        "60% meer prospects benaderd"
      ],
      timeline: "1.5 weken",
      deployment: "Geïntegreerd in Buildrs Platform",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Lead Processing Engine", 
      client: "Sales Agency",
      industry: "SaaS",
      problem: "Inbound leads werden te langzaam opgepakt en gekwalificeerd",
      solution: "Speed-to-Lead agent met automatische enrichment en scoring",
      results: [
        "5 minuten response tijd",
        "70% betere lead qualification",
        "2x meer meetings geboekt"
      ],
      timeline: "2 weken", 
      deployment: "Hybrid - Sheets + Platform dashboard",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-950/50 to-black overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 via-transparent to-transparent rounded-full"></div>
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
            Concrete resultaten van
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-normal">echte klanten</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Zie hoe we binnen 1-2 weken custom agents bouwen die direct impact hebben
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-white/20 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  
                  {/* Left - Problem & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${study.gradient} text-white text-sm font-medium`}>
                            {study.timeline}
                          </div>
                        </div>
                        <p className="text-white/60">{study.client} • {study.industry}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                          Probleem
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          Oplossing
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
                        Deployment
                      </h4>
                      <p className="text-white/70 text-sm">{study.deployment}</p>
                    </div>
                  </div>

                  {/* Right - Results */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                      Resultaten
                    </h4>
                    <div className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-white/90 font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Klaar voor jouw case study?</h3>
            <p className="text-white/70 mb-6">
              Laten we bespreken hoe een custom agent jouw workflow kan transformeren
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Plan gratis analyse
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyCaseStudiesSection;