import { motion } from 'framer-motion';
import { Bot, Rocket, Shield } from 'lucide-react';

const AgentsBenefitsSection = () => {
  const benefits = [
    {
      icon: Bot,
      title: 'AI die echt werkt',
      subtitle: 'Geen fancy demo\'s, wel echte resultaten',
      description: 'Onze agents zijn getraind op miljoenen sales gesprekken en e-mailcampagnes. Ze leren van elke interactie en worden elke dag beter.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Launch in 48 uur',
      subtitle: 'Van intake tot eerste resultaten',
      description: 'Geen maanden wachten. Binnen 2 dagen draait jouw eerste AI agent en genereer je de eerste leads. Bewezen proces, snelle implementatie.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Risico-vrije garantie',
      subtitle: 'Niet tevreden? Geld terug binnen 30 dagen',
      description: 'We zijn zo zeker van onze aanpak dat we een volledige geld-terug-garantie geven. Geen vragen, geen gedoe.',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-500 via-pink-600 to-purple-700">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)`
        }} />
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
              Waarom kiezen
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent font-medium">
              duizenden bedrijven voor ScailUp?
            </span>
          </motion.h2>
          
          <motion.p 
            className="relative z-30 text-lg lg:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Omdat we <span className="text-cyan-200 font-medium">resultaat</span> leveren waar anderen alleen beloven. 
            Bewezen aanpak, snelle implementatie, risico-vrije garantie.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => {
            const colors = [
              { primary: 'rgba(59, 130, 246, 0.3)', secondary: 'rgba(6, 182, 212, 0.2)' }, // Blue to Cyan
              { primary: 'rgba(139, 92, 246, 0.3)', secondary: 'rgba(236, 72, 153, 0.2)' }, // Purple to Pink  
              { primary: 'rgba(16, 185, 129, 0.3)', secondary: 'rgba(5, 150, 105, 0.2)' }  // Green to Emerald
            ];
            const color = colors[index];
            
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
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <motion.div 
                    className="w-[400px] h-[350px] rounded-3xl opacity-30"
                    style={{
                      background: colors[index] === colors[0] 
                        ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(6, 182, 212, 0.2) 40%, transparent 70%)'
                        : colors[index] === colors[1]
                        ? 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 40%, transparent 70%)'
                        : 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.4) 0%, rgba(5, 150, 105, 0.2) 40%, transparent 70%)',
                      filter: 'blur(60px)',
                    }}
                    animate={{
                      opacity: [0.2, 0.4, 0.3, 0.35, 0.2],
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
                  className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 mx-4 h-[400px] flex flex-col justify-center"
                  style={{
                    background: colors[index] === colors[0] 
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.08) 50%, rgba(255, 255, 255, 0.05) 100%)'
                      : colors[index] === colors[1]
                      ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.08) 50%, rgba(255, 255, 255, 0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.08) 50%, rgba(255, 255, 255, 0.05) 100%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
                  }}
                >
                  {/* Card number */}
                  <div className="absolute top-6 right-6 text-white/40 text-lg font-bold tracking-wider">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-8">
                    <benefit.icon className="w-14 h-14 mx-auto text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-lg text-white/90 font-light leading-relaxed">
                      {benefit.subtitle}
                    </p>
                    
                    <p className="text-white/70 font-light leading-relaxed text-sm">
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
          <p className="text-sm text-white/60 font-light tracking-wide">
            Klaar om jouw bedrijf te transformeren?
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Fade to black at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 1) 100%)'
        }}
      />
    </section>
  );
};

export default AgentsBenefitsSection;