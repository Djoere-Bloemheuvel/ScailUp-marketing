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
      {/* Ambient Background Lights - explicit z-index control */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -1 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative w-full text-center z-20 px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-7xl mx-auto">
          <motion.h2 
            className="relative z-30 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-[0.9] tracking-tight"
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
            className="relative z-30 text-lg lg:text-xl text-blue-200/70 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Onze AI agents reageren binnen <span className="text-blue-300 font-medium">60 seconden</span>, plannen afspraken automatisch in en zorgen dat geen enkele kans verloren gaat.
          </motion.p>
        </div>

        {/* Benefits Grid with Enhanced Glow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => {
            const colors = [
              { primary: 'rgba(139, 92, 246, 0.4)', secondary: 'rgba(236, 72, 153, 0.3)' }, // Purple to Pink (Marketing Engine)
              { primary: 'rgba(59, 130, 246, 0.4)', secondary: 'rgba(59, 130, 246, 0.2)' }, // Blue (Lead Engine)  
              { primary: 'rgba(16, 185, 129, 0.4)', secondary: 'rgba(16, 185, 129, 0.2)' }  // Green
            ];
            const color = colors[index];
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={benefit.title}
                className="relative text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: [0.23, 1, 0.32, 1] 
                }}
              >
                {/* Background glow for glassmorphism */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <motion.div 
                    className="w-[400px] h-[350px] rounded-3xl opacity-40"
                    style={{
                      background: colors[index] === colors[0] 
                        ? 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.8) 0%, rgba(236, 72, 153, 0.6) 30%, rgba(236, 72, 153, 0.3) 60%, transparent 80%)'
                        : colors[index] === colors[1]
                        ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 40%, transparent 70%)'
                        : 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.8) 0%, rgba(16, 185, 129, 0.4) 40%, transparent 70%)',
                      filter: 'blur(60px)',
                    }}
                    animate={{
                      opacity: [0.3, 0.5, 0.4, 0.45, 0.3],
                      scale: [0.95, 1.05, 1.02, 0.98, 0.95],
                    }}
                    transition={{
                      duration: 10 + (index * 2),
                      ease: [0.25, 0.1, 0.25, 1],
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </div>

                {/* Glassmorphic Card */}
                <motion.div 
                  className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mx-4 h-[400px] flex flex-col justify-center"
                  style={{
                    background: colors[index] === colors[0] 
                      ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.08) 50%, rgba(255, 255, 255, 0.02) 100%)'
                      : colors[index] === colors[1]
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%)'
                      : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
                  }}
                >
                  {/* Card number */}
                  <div className="absolute top-6 right-6 text-white/30 text-lg font-bold tracking-wider">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-8">
                    <benefit.icon className="w-14 h-14 mx-auto text-white/90" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-lg text-white/80 font-light leading-relaxed">
                      {benefit.subtitle}
                    </p>
                    
                    <p className="text-white/60 font-light leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
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