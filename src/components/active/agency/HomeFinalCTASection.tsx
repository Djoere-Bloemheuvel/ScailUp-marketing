import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MessageSquare, CheckCircle, Euro } from 'lucide-react';

interface HomeFinalCTASectionProps {
  fullHeight?: boolean;
}

const HomeFinalCTASection: React.FC<HomeFinalCTASectionProps> = ({ fullHeight = false }) => {
  return (
    <section className={`relative bg-black overflow-hidden ${fullHeight ? 'min-h-screen flex items-center justify-center' : 'pt-32 pb-24'}`}>
      {/* Subtle fade to black at top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/15 via-black/5 to-transparent z-10"></div>
      
      {/* Ambient Background - Continuation of FAQ glows */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main central glow using CSS radial gradient */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.08) 50%, transparent 100%)'
          }}
        ></div>
        
        {/* Floating ambient glows */}
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/25 to-pink-400/25 rounded-full blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tr from-pink-500/20 to-purple-600/20 rounded-full blur-3xl opacity-80 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
        
        {/* Subtle corner glows */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-500/25 to-transparent rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-600/25 to-transparent rounded-full blur-2xl opacity-45"></div>
        
        {/* Top connecting glow - bridges with FAQ section */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-64 bg-gradient-to-b from-purple-500/20 to-transparent rounded-full blur-2xl opacity-60"></div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Clean headline */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight mb-6"
            style={{ 
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '200'
            }}
          >
            Klaar voor jouw{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-normal">
              AI agent?
            </span>
          </h2>

          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Gratis strategiesessie → Vaste offerte → Live binnen 1-2 weken
          </p>

          {/* Pricing overview - clean cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-2xl font-light text-white mb-2 flex items-center justify-center gap-1"><span className="text-white/50 text-base font-normal">vanaf</span><span>€1.000</span></div>
              <div className="text-white/60 text-sm">Simple agent</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-2xl font-light text-white mb-2 flex items-center justify-center gap-1"><span className="text-white/50 text-base font-normal">vanaf</span><span>€2.500</span></div>
              <div className="text-white/60 text-sm">Complex workflow</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-2xl font-light text-white mb-2 flex items-center justify-center gap-1"><span className="text-white/50 text-base font-normal">vanaf</span><span>€500</span></div>
              <div className="text-white/60 text-sm">Platform setup</div>
            </div>
          </div>

          {/* Simple guarantees */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60 mb-12">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Vaste prijzen
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              14-dagen garantie
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Gratis strategiesessie
            </div>
          </div>

          {/* Single prominent CTA */}
          <button
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all duration-300 text-lg mb-6"
          >
            Plan gratis strategiesessie
            <ArrowRight className="ml-3 w-5 h-5" />
          </button>

          <p className="text-white/50 text-sm">
            45 minuten • Videocall of op locatie • Deze week beschikbaar
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFinalCTASection;