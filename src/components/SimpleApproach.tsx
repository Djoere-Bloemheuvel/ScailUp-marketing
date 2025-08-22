import { motion } from 'framer-motion';
import { Target, Users, Zap, TrendingUp } from 'lucide-react';

const SimpleApproach = () => {
  const principles = [
    {
      id: 1,
      icon: Target,
      title: 'Data-gedreven targeting',
      description: 'We analyseren jouw ideale klantprofiel en richten onze campagnes nauwkeurig.',
      color: 'from-blue-500 to-blue-400'
    },
    {
      id: 2,
      icon: Users,
      title: 'Gepersonaliseerde outreach',
      description: 'Elke boodschap is uniek en relevant voor de ontvanger.',
      color: 'from-blue-600 to-blue-500'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Continue optimalisatie',
      description: 'We testen, meten en verbeteren voortdurend onze aanpak.',
      color: 'from-scailup-blue to-scailup-cyan'
    },
    {
      id: 4,
      icon: TrendingUp,
      title: 'Resultaat-gefocust',
      description: 'Alles wat we doen is gericht op meetbare groei van jouw business.',
      color: 'from-blue-500 to-blue-400'
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-black">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Onze <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Aanpak</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vier kernprincipes waarmee we elk project tot een succes maken.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <motion.div
                key={principle.id}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${principle.color} mb-4 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {principle.description}
                </p>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">{principle.id}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SimpleApproach;