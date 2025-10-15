import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, DollarSign, ArrowUp, CheckCircle } from 'lucide-react';

const MarketingBureauResults = () => {
  const results = [
    {
      metric: '400%',
      label: 'Meer gekwalificeerde leads',
      description: 'Van 25 naar 100+ qualified leads per maand',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'blue'
    },
    {
      metric: '2.500',
      label: 'Nieuwe connecties per maand',
      description: 'Geautomatiseerd netwerk uitbreiden via LinkedIn',
      icon: <Users className="w-6 h-6" />,
      color: 'teal'
    },
    {
      metric: '70%',
      label: 'Minder tijd aan prospecting',
      description: 'Meer focus op strategy & client delivery',
      icon: <Clock className="w-6 h-6" />,
      color: 'green'
    },
    {
      metric: '€250K+',
      label: 'Extra omzet per jaar',
      description: 'Door scalable lead generation pipeline',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'purple'
    }
  ];

  const beforeAfter = [
    {
      category: 'Lead Generatie',
      before: 'Handmatige prospecting via LinkedIn en cold calling',
      after: 'Geautomatiseerde email & LinkedIn campaigns met AI personalisatie'
    },
    {
      category: 'Time Investment',
      before: '20+ uur per week aan lead prospecting en follow-ups',
      after: '2-3 uur per week aan campaign optimization en monitoring'
    },
    {
      category: 'Lead Quality',
      before: 'Inconsistente lead flow, afhankelijk van networking',
      after: 'Voorspelbare pipeline met pre-qualified prospects'
    },
    {
      category: 'Scalability',
      before: 'Growth limited door tijd en manhours',
      after: 'Unlimitede groei door automation en AI workflows'
    }
  ];

  return (
    <section 
      className="relative bg-gradient-to-br from-gray-900/50 via-black to-gray-900/30 py-24 lg:py-32"
      data-section-theme="dark"
      data-section-accent="blue"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
             }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 backdrop-blur-sm border border-green-500/20 mb-8"
          >
            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-300 font-medium text-sm tracking-wide uppercase">
              Bewezen Resultaten
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
            Van struggle naar{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              sustainable growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Concrete resultaten die marketing bureaus behalen met onze lead generatie automation
          </motion.p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:border-white/30 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  result.color === 'blue' ? 'bg-blue-500/20 text-blue-300' :
                  result.color === 'teal' ? 'bg-teal-500/20 text-teal-300' :
                  result.color === 'green' ? 'bg-green-500/20 text-green-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>
                  {result.icon}
                </div>

                {/* Metric */}
                <div className={`text-4xl lg:text-5xl font-bold mb-3 ${
                  result.color === 'blue' ? 'text-blue-400' :
                  result.color === 'teal' ? 'text-teal-400' :
                  result.color === 'green' ? 'text-green-400' :
                  'text-purple-400'
                }`}>
                  {result.metric}
                </div>

                {/* Label */}
                <h3 className="text-white text-lg font-semibold mb-3">
                  {result.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {result.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUp className={`w-5 h-5 rotate-45 ${
                    result.color === 'blue' ? 'text-blue-400' :
                    result.color === 'teal' ? 'text-teal-400' :
                    result.color === 'green' ? 'text-green-400' :
                    'text-purple-400'
                  }`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Voor & Na Transformatie
            </h3>
            <p className="text-gray-300 text-lg">
              Zo verandert jouw marketing bureau met onze lead generatie automation
            </p>
          </div>

          <div className="space-y-8">
            {beforeAfter.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className="grid lg:grid-cols-3 gap-6 items-center"
              >
                {/* Category */}
                <div className="text-center lg:text-left">
                  <h4 className="text-blue-300 font-semibold text-lg mb-2">
                    {comparison.category}
                  </h4>
                </div>

                {/* Before */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <div className="text-red-300 font-medium text-sm mb-2 uppercase tracking-wide">
                    Voor
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {comparison.before}
                  </p>
                </div>

                {/* After */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <div className="text-green-300 font-medium text-sm mb-2 uppercase tracking-wide">
                    Na
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {comparison.after}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12"
        >
          <div className="text-4xl text-blue-400 mb-6">"</div>
          <p className="text-xl lg:text-2xl text-white font-light italic leading-relaxed mb-8 max-w-4xl mx-auto">
            Binnen 3 maanden gingen we van 25 leads per maand naar 100+ qualified prospects. 
            Onze tijd aan prospecting daalde van 20 uur naar 3 uur per week. 
            Dit gaf ons eindelijk de vrijheid om te focussen op groei en strategie.
          </p>
          <div className="text-gray-300">
            <div className="font-semibold">Sarah van der Berg</div>
            <div className="text-sm text-gray-400">Founder, Digital Growth Partners</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingBureauResults;