import { motion } from 'framer-motion';
import { Search, Compass, Settings, TrendingUp } from 'lucide-react';

const SimpleApproach = () => {
  const principles = [
    {
      id: 1,
      icon: Search,
      title: 'Analyse',
      description: 'We beginnen met jouw situatie volledig te begrijpen. Wie zijn je ideale klanten en waar hangen ze uit? Wat werkt er al goed in je huidige aanpak? Pas daarna maken we een plan.',
      color: 'from-blue-500 to-blue-400',
      cardGradient: 'from-blue-500/70 to-blue-400/70',
      bgGradient: 'from-blue-500/[0.015] via-black to-blue-400/[0.015]'
    },
    {
      id: 2,
      icon: Compass,
      title: 'Strategie',
      description: 'Nu maken we een plan dat écht bij jou past. Welke boodschap raakt je prospects? Via welk kanaal bereik je ze het best? Maatwerk, geen standaard recepten.',
      color: 'from-blue-400 to-blue-300',
      cardGradient: 'from-blue-400/70 to-blue-300/70',
      bgGradient: 'from-blue-400/[0.015] via-black to-blue-300/[0.015]'
    },
    {
      id: 3,
      icon: Settings,
      title: 'Uitvoering',
      description: 'Time to go live! Je campagnes draaien, prospects krijgen persoonlijke berichten, en wij houden alles scherp in de gaten. Jij ziet de leads binnenkomen.',
      color: 'from-blue-400 to-blue-300',
      cardGradient: 'from-blue-400/70 to-blue-300/70',
      bgGradient: 'from-blue-400/[0.015] via-black to-blue-300/[0.015]'
    },
    {
      id: 4,
      icon: TrendingUp,
      title: 'Optimalisatie & Groei',
      description: 'We stoppen niet bij "het werkt". Elke week kijken we naar de cijfers en maken het nóg beter. Meer leads, hogere conversies, minder kosten. Dat is het doel.',
      color: 'from-blue-500 to-blue-400',
      cardGradient: 'from-blue-500/70 to-blue-400/70',
      bgGradient: 'from-blue-500/[0.015] via-black to-blue-400/[0.015]'
    }
  ];

  return (
    <section className="relative py-32 pb-16 w-full bg-black overflow-hidden">
      
      <div className="relative max-w-6xl mx-auto px-8">
        {/* Apple-style Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-2 tracking-tight leading-none" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Onze Werkwijze
          </h2>
          <p className="text-lg lg:text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Zo pakken wij het aan, geen geheimzinnige trucjes, gewoon eerlijk werk dat resultaat oplevert
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 opacity-30 hidden lg:block" />
          
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={principle.id}
                className={`relative flex items-center mb-16 lg:mb-20 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col`}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Card */}
                <div className={`group lg:w-2/5 w-full ${isEven ? 'lg:pr-12 pr-8' : 'lg:pl-12 pl-8'}`}>
                  {/* Background glow behind card */}
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at center, ${
                        principle.color.includes('blue-500') && principle.color.includes('blue-400') ? 'rgba(59, 130, 246, 0.15)' :
                        principle.color.includes('blue-600') && principle.color.includes('blue-500') ? 'rgba(37, 99, 235, 0.15)' :
                        principle.color.includes('blue-400') && principle.color.includes('blue-300') ? 'rgba(96, 165, 250, 0.15)' :
                        'rgba(29, 78, 216, 0.15)'
                      } 0%, transparent 70%)`,
                      filter: 'blur(20px)',
                      transform: 'scale(1.1)'
                    }}
                  />
                  
                  <motion.div
                    className={`relative border-0 bg-gradient-to-r ${principle.cardGradient} p-[1px] rounded-2xl hover:border-gray-700 transition-colors duration-300`}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      boxShadow: `0 0 40px ${
                        principle.color === 'from-blue-500 to-blue-400' ? 'rgba(59, 130, 246, 0.5)' :
                        principle.color === 'from-blue-600 to-blue-500' ? 'rgba(37, 99, 235, 0.5)' :
                        principle.color === 'from-blue-400 to-blue-300' ? 'rgba(96, 165, 250, 0.5)' :
                        principle.color === 'from-blue-700 to-blue-600' ? 'rgba(29, 78, 216, 0.5)' :
                        'rgba(59, 130, 246, 0.5)'
                      }, 0 0 80px ${
                        principle.color === 'from-blue-500 to-blue-400' ? 'rgba(59, 130, 246, 0.25)' :
                        principle.color === 'from-blue-600 to-blue-500' ? 'rgba(37, 99, 235, 0.25)' :
                        principle.color === 'from-blue-400 to-blue-300' ? 'rgba(96, 165, 250, 0.25)' :
                        principle.color === 'from-blue-700 to-blue-600' ? 'rgba(29, 78, 216, 0.25)' :
                        'rgba(59, 130, 246, 0.25)'
                      }`
                    }}
                  >
                    {/* Inner content container */}
                    <div className={`relative bg-gradient-to-br ${principle.bgGradient} rounded-2xl p-6 h-full`}>
                      {/* Shadow overlay */}
                      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                      {/* Icon */}
                      <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${principle.color} mb-6 shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 z-10`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Step indicator */}
                      <div className="relative mb-3 z-10">
                        <span className={`text-sm font-medium bg-gradient-to-r ${principle.color} bg-clip-text text-transparent tracking-wide`}>
                          STAP {principle.id}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300 z-10">
                        {principle.title}
                      </h3>
                      <p className="relative text-gray-300 leading-relaxed text-lg z-10">
                        {principle.description}
                      </p>

                      {/* Progress indicator */}
                      <div className="relative mt-6 flex items-center z-10">
                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${principle.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.2, delay: index * 0.1 + 0.3 }}
                            viewport={{ once: true, amount: 0.5 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${principle.color} flex items-center justify-center border-4 border-black shadow-xl`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <span className="text-white font-bold text-lg">{principle.id}</span>
                  </motion.div>
                </div>

                {/* Mobile Number */}
                <div className="lg:hidden absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-sm flex items-center justify-center border border-blue-400/30">
                  <span className="text-xl font-bold text-blue-200">{principle.id}</span>
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