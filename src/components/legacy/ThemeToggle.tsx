import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-full transition-all duration-300 ease-out
        ${isDark 
          ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5" />
        </motion.div>
      </div>
      
      {/* Tooltip */}
      <div className={`
        absolute -bottom-8 left-1/2 transform -translate-x-1/2 
        px-2 py-1 text-xs font-medium rounded shadow-lg
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        pointer-events-none whitespace-nowrap z-50
        ${isDark 
          ? 'bg-gray-800 text-white border border-gray-700' 
          : 'bg-white text-gray-900 border border-gray-200'
        }
      `}>
        {isDark ? 'Light mode' : 'Dark mode'}
        <div className={`
          absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45
          ${isDark ? 'bg-gray-800 border-l border-t border-gray-700' : 'bg-white border-l border-t border-gray-200'}
        `} />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;