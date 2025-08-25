import { motion } from 'framer-motion';
import { Zap, RefreshCw, TrendingUp } from 'lucide-react';

const WhyAgentsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Nooit meer gemiste leads',
      subtitle: 'Inbound aanvragen direct opgevolgd, ook buiten kantooruren',
      description: 'Elke lead krijgt binnen 60 seconden een reactie. 24/7, zonder uitzonderingen.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: RefreshCw,
      title: 'Slimme opvolging zonder handwerk',
      subtitle: 'Van eerste bericht tot afspraak, volledig geautomatiseerd',
      description: 'AI neemt het complete proces over. Jij focust op wat echt telt: de gesprekken.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Voorspelbare groei',
      subtitle: 'Meer gesprekken, meer retentie, stabielere pipeline',
      description: 'Consistente leadflow wordt consistente omzet. Geen pieken en dalen meer.',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Ambient Background Lights */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Elke seconde telt.
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 bg-clip-text text-transparent font-medium">
              Elke lead verdient aandacht.
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg lg:text-xl text-blue-200/70 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Onze AI agents reageren binnen <span className="text-blue-300 font-medium">60 seconden</span>, plannen afspraken automatisch in en zorgen dat geen enkele kans verloren gaat.
          </motion.p>
        </div>

        {/* Benefits Grid - Simple & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: [0.23, 1, 0.32, 1] 
              }}
            >
              {/* Icon */}
              <div className="mb-8">
                <benefit.icon className="w-12 h-12 mx-auto text-white/80" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-white tracking-tight leading-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-lg text-premium-silver/90 font-light leading-relaxed">
                  {benefit.subtitle}
                </p>
                
                <p className="text-premium-silver/70 font-light leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-sm text-gray-500 font-light tracking-wide">
            Kies hieronder wat bij jouw bedrijf past
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAgentsSection;