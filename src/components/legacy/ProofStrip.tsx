import React from 'react';
import { motion } from 'framer-motion';

const ProofStrip = () => {
  const stats = [
    {
      number: '500k+',
      description: 'Decision makers in database',
      bgColor: 'from-gray-900/60 to-gray-800/40',
      borderColor: 'border-blue-500/20'
    },
    {
      number: '85%',
      description: 'Inbox rate (geen spam)',
      bgColor: 'from-gray-900/60 to-gray-800/40',
      borderColor: 'border-purple-500/20'
    },
    {
      number: '12%',
      description: 'Response rate (boven industry avg.)',
      bgColor: 'from-gray-900/60 to-gray-800/40',
      borderColor: 'border-pink-500/20'
    }
  ];

  return (
    <section className="relative py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${stat.bgColor} rounded-2xl p-8 border ${stat.borderColor} backdrop-blur-sm`}>
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-white/0 rounded-2xl"></div>
                
                <div className="relative z-10 text-center">
                  {/* Large Number */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-3" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: '600' }}>
                    {stat.number}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm md:text-base text-white/70 font-medium leading-tight">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProofStrip;