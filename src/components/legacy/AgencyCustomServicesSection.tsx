import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Rocket } from 'lucide-react';

const AgencyCustomServicesSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Ambient Background Lights - Custom Development Colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main development orbs */}
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full blur-3xl opacity-65"></div>
        <div className="absolute bottom-1/3 left-1/4 w-88 h-88 bg-gradient-to-r from-purple-500/35 to-blue-400/35 rounded-full blur-3xl opacity-55 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        
        {/* Secondary ambient glows */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/15 via-blue-400/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-gradient-to-br from-purple-500/25 to-pink-500/25 rounded-full blur-2xl opacity-75 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-tr from-blue-500/22 to-cyan-500/22 rounded-full blur-2xl opacity-80 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Corner development glows */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500/25 to-pink-500/20 rounded-full blur-xl opacity-45"></div>
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-blue-500/25 to-cyan-500/20 rounded-full blur-xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-tr from-blue-400/20 to-purple-400/15 rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-44 h-44 bg-gradient-to-tl from-pink-500/22 to-purple-500/18 rounded-full blur-xl opacity-48"></div>
        
        {/* Floating development particles */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-purple-400/40 rounded-full blur-sm opacity-70 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-blue-400/40 rounded-full blur-sm opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-pink-400/40 rounded-full blur-sm opacity-80 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6"
            style={{ 
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '200'
            }}
          >
            Klaar voor je
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent font-normal">eerste agent?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Van intake tot live agent in <span className="text-white font-semibold">1-2 weken</span>. Geen maandenlange projecten, geen onzekere uitkomsten. <span className="text-white font-semibold">Gewoon resultaat.</span>
          </p>
        </motion.div>

        {/* Custom Development Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
          {/* Benefit 1 */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:border-purple-500/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Snelle Delivery</h3>
              <p className="text-white/80 leading-relaxed">
                1-2 weken van concept naar werkende agent. Geen maandenlange projecten - gewoon snel resultaat dat direct impact heeft.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:border-blue-500/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Volledig Eigenaarschap</h3>
              <p className="text-white/80 leading-relaxed">
                Jij bezit de code, documentatie en kunt alles zelf hosten. Geen vendor lock-in, wel de keuze om ons platform te gebruiken.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:border-pink-500/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Bewezen Technologie</h3>
              <p className="text-white/80 leading-relaxed">
                n8n workflows, API integraties en battle-tested automations. We gebruiken alleen tech die werkt en schaalbaar is.
              </p>
            </div>
          </div>

        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all duration-300 text-lg"
            style={{ boxShadow: '0 0 30px -8px rgba(168, 85, 247, 0.4)' }}
          >
            Plan een strategiesessie
            <Rocket className="ml-2 w-5 h-5" />
          </button>
          <p className="text-white/60 mt-4 text-sm">
            Gratis workflow analyse • Geen verplichtingen
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyCustomServicesSection;