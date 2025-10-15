import React from 'react';
import { motion } from 'framer-motion';

// EXACT COPY from HomeHero.tsx - identical to hero CTA button
const HERO_CTA_STYLES = {
  button: {
    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182)) border-box',
    border: '2px solid transparent',
    backdropFilter: 'blur(10px)',
    boxShadow: 'none',
    cursor: 'pointer',
    zIndex: 50
  },
  buttonFill: {
    background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))',
    transformOrigin: 'bottom center'
  }
};

const HERO_BUTTON_VARIANTS = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.01,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  }
};

const HERO_BUTTON_TAP_VARIANT = {
  scale: 0.99,
  transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
};

const HERO_FILL_VARIANTS = {
  initial: { scaleY: 0, scale: 1 },
  hover: { 
    scaleY: 1,
    scale: 1.08,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1],
      type: 'tween'
    }
  }
};

interface LeadFormButtonProps {
  submitText: string;
  onSubmit: (e: React.FormEvent) => void;
}

const LeadFormButton: React.FC<LeadFormButtonProps> = ({ submitText, onSubmit }) => {
  return (
    <motion.button
      type="submit"
      id="hero-cta-button"
      className="relative z-50 inline-flex items-center justify-center w-full text-white font-medium rounded-full whitespace-nowrap group overflow-hidden"
      style={{ 
        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
        background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182)) border-box',
        border: '2px solid transparent',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        cursor: 'pointer',
        zIndex: 50,
        fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
        fontWeight: '500',
        padding: 'clamp(0.75rem, 1.2vw, 1rem) clamp(2rem, 3vw, 2.5rem)',
        minHeight: '3.5rem'
      }}
      whileHover="hover"
      initial="initial"
      variants={HERO_BUTTON_VARIANTS}
      whileTap={HERO_BUTTON_TAP_VARIANT}
      onClick={onSubmit}
    >
      {/* Bottom-to-top gradient fill animation */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={HERO_CTA_STYLES.buttonFill}
        variants={HERO_FILL_VARIANTS}
      />
      
      <span 
        id="submitText"
        className="relative z-10 text-white"
        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)', color: 'white' }}
      >
        {submitText}
      </span>
      
      <svg 
        id="submitArrow"
        className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
      
      <svg 
        id="loadingSpinner"
        className="relative z-10 ml-3 w-5 h-5 animate-spin hidden" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 718-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </motion.button>
  );
};

export default LeadFormButton;