import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, CheckCircle, Clock } from 'lucide-react';

const MarketingBureauCTA = () => {
  const benefits = [
    'Gratis ROI assessment van je huidige lead generation',
    'Custom strategie roadmap voor jouw bureau',
    'Concrete tijdlijn en verwachte resultaten',
    'Geen verplichtingen, wel 100% waardevolle insights'
  ];

  return (
    <section 
      className="relative bg-gradient-to-br from-black via-blue-900/10 to-black py-24 lg:py-32"
      data-section-theme="dark"
      data-section-accent="blue"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                                radial-gradient(circle at 70% 70%, rgba(96, 165, 250, 0.3) 0%, transparent 50%)`
             }} 
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-8"
          >
            <Calendar className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium text-sm tracking-wide uppercase">
              Gratis Strategiesessie
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-white font-light mb-6"
            style={{ 
              fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontSize: 'clamp(2rem, 4vw + 1rem, 3.5rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.045em',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            Klaar om jouw bureau te{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              transformeren?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Book een gratis strategiesessie en ontdek precies hoe jouw marketing bureau 
            400% meer gekwalificeerde leads kan genereren met onze automation oplossingen.
          </motion.p>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true, margin: '-50px' }}
                className="flex items-center space-x-3 text-left"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-8"
          >
            <motion.div className="relative inline-block">
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))',
                  transformOrigin: 'bottom center'
                }}
                initial={{ scaleY: 0 }}
                whileHover={{ 
                  scaleY: 1,
                  transition: { 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1] 
                  }
                }}
              />
              <Button
                onClick={() => window.open('https://meetings-eu1.hubspot.com/djoe1', '_blank')}
                className="relative rounded-xl transition-all duration-300 ease-out text-lg px-12 py-6"
                style={{
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  letterSpacing: '-0.01em',
                  fontWeight: '600',
                  background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182)) border-box',
                  border: '2px solid transparent',
                  minWidth: '280px',
                  backdropFilter: 'blur(10px)',
                  color: 'white'
                }}
              >
                Plan Gratis Strategiesessie
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Session Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400 text-sm"
          >
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>30 minuten sessie</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Direct beschikbare tijdsloten</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>100% gratis, geen verplichtingen</span>
            </div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            
            {/* Testimonial */}
            <div className="flex-1 max-w-md">
              <p className="text-gray-300 italic text-lg mb-4">
                "De strategiesessie was incredibly waardevol. We kregen direct concrete stappen 
                om onze lead generation te verbeteren, nog voordat we überhaupt besloten om samen te werken."
              </p>
              <div className="text-sm">
                <div className="text-white font-semibold">Marcus de Vries</div>
                <div className="text-gray-400">Creative Director, Bright Marketing</div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400 text-sm">Bureaus geholpen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">4.9/5</div>
                <div className="text-gray-400 text-sm">Sessie rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">30min</div>
                <div className="text-gray-400 text-sm">Gemiddelde duur</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Limited beschikbaarheid: Slechts 3 strategiesessies per week beschikbaar
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingBureauCTA;