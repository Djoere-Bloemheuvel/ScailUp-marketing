import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Zap, Brain, Target, Users, TrendingUp, Rocket } from 'lucide-react';

interface PillarNavProps {
  currentPillar?: string;
}

const StickyPillarNav = ({ currentPillar }: PillarNavProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const pillars = [
    {
      id: 'ai-automatisering',
      title: 'AI Automatisering',
      icon: Zap,
      color: 'from-blue-500 to-purple-600',
      href: '/kenniscentrum/ai-automatisering'
    },
    {
      id: 'custom-ai-saas',
      title: 'Custom AI SaaS',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      href: '/kenniscentrum/custom-ai-saas'
    },
    {
      id: 'ai-consultancy',
      title: 'AI Consultancy',
      icon: Target,
      color: 'from-cyan-400 to-blue-600',
      href: '/kenniscentrum/ai-consultancy'
    },
    {
      id: 'autonomous-agents',
      title: 'Autonomous AI Agents',
      icon: Users,
      color: 'from-green-500 to-blue-600',
      href: '/kenniscentrum/autonomous-agents'
    },
    {
      id: 'ai-marketing-sales',
      title: 'AI Marketing & Sales',
      icon: TrendingUp,
      color: 'from-red-600 to-orange-500',
      href: '/kenniscentrum/ai-marketing-sales'
    },
    {
      id: 'ai-implementation',
      title: 'AI Implementation',
      icon: Rocket,
      color: 'from-gray-200 via-slate-600 to-gray-800',
      href: '/kenniscentrum/ai-implementation'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 400; // Show after hero section
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render on main kenniscentrum page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMainPage = window.location.pathname === '/kenniscentrum';
      if (isMainPage) {
        setIsVisible(false);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-40"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            
            {/* Collapsed State - Icon Only */}
            <motion.div
              animate={{ 
                width: isExpanded ? 280 : 64,
                height: isExpanded ? 'auto' : 64
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              
              {/* Header */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🧠</span>
                  </div>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        <h3 className="text-white text-sm font-medium">
                          Kenniscentrum
                        </h3>
                        <p className="text-gray-400 text-xs">
                          Expertise Gebieden
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Items */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="p-2"
                  >
                    <div className="space-y-1">
                      {pillars.map((pillar, index) => {
                        const IconComponent = pillar.icon;
                        const isActive = currentPillar === pillar.id;
                        
                        return (
                          <motion.a
                            key={pillar.id}
                            href={pillar.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.2, 
                              delay: 0.1 + (index * 0.05) 
                            }}
                            className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                              isActive 
                                ? 'bg-white/20 text-white' 
                                : 'text-gray-300 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {/* Icon with gradient background */}
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isActive 
                                ? `bg-gradient-to-r ${pillar.color}` 
                                : 'bg-white/10 group-hover:bg-white/20'
                            } transition-all duration-200`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            
                            {/* Text */}
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium truncate">
                                {pillar.title}
                              </div>
                            </div>
                            
                            {/* Arrow */}
                            <ChevronRight className={`w-4 h-4 transition-all duration-200 ${
                              isActive 
                                ? 'text-white translate-x-0' 
                                : 'text-gray-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-white'
                            }`} />
                          </motion.a>
                        );
                      })}
                    </div>
                    
                    {/* Back to Overview */}
                    <div className="border-t border-white/10 mt-2 pt-2">
                      <motion.a
                        href="/kenniscentrum"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.4 }}
                        className="group flex items-center gap-3 p-3 rounded-xl text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-200">
                          <span className="text-sm">←</span>
                        </div>
                        <span className="text-sm font-medium">
                          Overzicht
                        </span>
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyPillarNav;