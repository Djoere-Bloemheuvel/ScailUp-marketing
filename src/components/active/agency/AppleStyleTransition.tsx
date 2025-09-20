import React from 'react';
import { motion } from 'framer-motion';

interface AppleStyleTransitionProps {
  variant: 'platform' | 'capabilities';
}

const AppleStyleTransition: React.FC<AppleStyleTransitionProps> = ({ variant }) => {
  const content = variant === 'platform' ? {
    headline: 'Alles samen in ',
    highlightText: 'één platform.',
    gradient: 'from-blue-400 via-cyan-400 to-blue-500',
    subtext: 'Custom AI agents + outbound automatisering + lead management.',
    emphasis: 'Geïntegreerd in één overzichtelijk platform.'
  } : {
    headline: 'Dit kunnen we ',
    highlightText: 'voor je bouwen.',
    gradient: 'from-pink-400 via-purple-400 to-blue-500',
    subtext: 'Elke outbound workflow. Elke integratie. Elk AI-systeem.',
    emphasis: 'Als het mogelijk is, maken we het voor je.'
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight"
            style={{ 
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontWeight: '200'
            }}
          >
            {content.headline}
            <span className={`bg-gradient-to-r ${content.gradient} bg-clip-text text-transparent font-normal`}>
              {content.highlightText}
            </span>
          </h2>
          
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
            }}
          >
            {content.subtext}
            <br />
            <span className="text-white/90">
              {content.emphasis}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppleStyleTransition;