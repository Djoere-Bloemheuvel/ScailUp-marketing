import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, Send, Users, Globe, Brain } from 'lucide-react';

const ContinueGate = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [hasTriggeredOnce, setHasTriggeredOnce] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    let lockedScrollY = 0;
    let scrollStopTimer = null;
    let hasStoppedAtSection = false;

    const smartScrollControl = (e) => {
      const currentScrollY = window.scrollY;
      const deltaY = e.deltaY || 0;
      
      // Allow scrolling up always
      if (deltaY < 0) {
        return; // Allow upward scroll
      }
      
      // For downward scroll, check if we've paused long enough
      if (!hasStoppedAtSection) {
        // First time reaching the section - enforce a brief stop
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo(0, lockedScrollY);
        
        // Start timer for allowing scroll-through
        if (scrollStopTimer) clearTimeout(scrollStopTimer);
        scrollStopTimer = setTimeout(() => {
          hasStoppedAtSection = true;
        }, 500); // 0.5 second pause before allowing scroll-through
        
        return false;
      }
      
      // After the pause, allow natural scrolling
      return;
    };

    const handleScroll = () => {
      if (isUnlocked || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if section is mostly in view (at least 80% visible)
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(rect.height, viewportHeight - rect.top);
      const visibleHeight = visibleBottom - visibleTop;
      const visibilityRatio = visibleHeight / rect.height;

      if (visibilityRatio >= 0.8 && !isScrollLocked && !hasTriggeredOnce) {
        // Section is mostly visible - enable smart scroll control (only once per page load)
        lockedScrollY = window.scrollY;
        hasStoppedAtSection = false; // Reset the pause state
        setIsScrollLocked(true);
        setHasTriggeredOnce(true); // Mark as triggered for this page load
        
        // Add smart scroll control
        window.addEventListener('wheel', smartScrollControl, { passive: false });
        window.addEventListener('touchmove', smartScrollControl, { passive: false });
        
      } else if (visibilityRatio < 0.5 && isScrollLocked) {
        // Section is mostly out of view - unlock scroll
        setIsScrollLocked(false);
        hasStoppedAtSection = false;
        
        // Clear timer and remove listeners
        if (scrollStopTimer) {
          clearTimeout(scrollStopTimer);
          scrollStopTimer = null;
        }
        
        window.removeEventListener('wheel', smartScrollControl);
        window.removeEventListener('touchmove', smartScrollControl);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Clean up timer and listeners
      if (scrollStopTimer) {
        clearTimeout(scrollStopTimer);
      }
      
      if (isScrollLocked) {
        window.removeEventListener('wheel', smartScrollControl);
        window.removeEventListener('touchmove', smartScrollControl);
      }
    };
  }, [isScrollLocked, isUnlocked]);

  const services = [
    {
      id: 'lead-engine',
      icon: Send,
      title: 'Lead Engine',
      background: 'from-black via-blue-900/20 to-black',
      accentColor: 'from-blue-500 to-blue-400',
    },
    {
      id: 'sales-engine',
      icon: Users,
      title: 'Sales Engine', 
      background: 'from-premium-black via-purple-950/15 to-premium-black',
      accentColor: 'from-green-500 to-blue-600',
    },
    {
      id: 'marketing-engine',
      icon: Globe,
      title: 'Marketing Engine',
      background: 'from-premium-black via-purple-950/20 to-premium-black',
      accentColor: 'from-purple-500 to-pink-600',
    },
    {
      id: 'agents-automations',
      icon: Brain,
      title: 'Agents & Automations',
      background: 'from-premium-black via-blue-950/20 to-premium-black',
      accentColor: 'from-blue-500 to-purple-600',
    }
  ];

  const handleContinue = () => {
    setIsUnlocked(true);
    setIsScrollLocked(false);
    
    // Smooth scroll to next section
    setTimeout(() => {
      const nextSection = document.querySelector('#approach');
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleContinue();
    }
  };

  const cssStyles = `
    @keyframes sweep {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(100%); }
    }
  `;

  if (isUnlocked) {
    return null; // Remove component after unlock
  }

  return (
    <div 
      ref={sectionRef}
      className="relative w-full h-screen bg-black flex flex-col items-center justify-center"
    >
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      

      {/* Apple-style Header */}
      <motion.div 
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-3 tracking-tight leading-[0.9] px-2" 
          style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
        >
          Maak je keuze.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-400/80 font-light max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
          Directe toegang tot onze engines of ontdek eerst ons verhaal
        </p>
      </motion.div>

      {/* Service Quick Select - FIRST */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.button
                key={service.id}
                onClick={() => {
                  // Scroll to specific service in Services section
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className="group relative p-4 focus:outline-none text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                whileTap={{
                  scale: 0.98,
                  transition: {
                    duration: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
              >
                {/* Mini ServiceSection Visual */}
                <div className="relative mb-3">
                  <div className="isolate">
                    <div className="group relative w-40 h-40 mx-auto isolate">
                      
                      {/* Mini backlight glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-3xl opacity-80 z-10 group-hover:scale-[1.04] transition-transform duration-100`} />
                      <div className={`absolute inset-2 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-2xl opacity-40 z-10 group-hover:scale-[1.03] transition-transform duration-100`} />
                      
                      {/* Mini device with glassmorphism */}
                      <div className="relative h-full rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 p-8 flex items-center justify-center shadow-3xl transition-shadow duration-100 ease-out group-hover:shadow-4xl z-20 isolate will-change-auto">
                        
                        {/* Mini service visualization */}
                        <div className="relative w-20 h-20">
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 shadow-2xl opacity-85 transition-all duration-100 ease-out group-hover:opacity-90 group-hover:shadow-3xl`}>
                            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center relative overflow-hidden shadow-inner">
                              
                              {/* Icon with glow */}
                              <IconComponent className="w-10 h-10 text-white relative z-10 drop-shadow-2xl transition-all duration-100 ease-out group-hover:text-white" style={{
                                filter: `drop-shadow(0 0 16px ${service.accentColor.includes('blue') ? '#60a5fa' :
                                                             service.accentColor.includes('purple') ? '#a855f7' :
                                                             service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}80)`,
                                transition: 'filter 0.1s ease-out'
                              }} 
                              onMouseEnter={(e) => {
                                e.currentTarget.style.filter = `drop-shadow(0 0 24px ${service.accentColor.includes('blue') ? '#60a5fa' :
                                                                             service.accentColor.includes('purple') ? '#a855f7' :
                                                                             service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}40)`
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.filter = `drop-shadow(0 0 16px ${service.accentColor.includes('blue') ? '#60a5fa' :
                                                                             service.accentColor.includes('purple') ? '#a855f7' :
                                                                             service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}80)`
                              }}
                              />
                              
                              {/* Enhanced sweeping light with Framer Motion */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                                initial={{ x: '-100%' }}
                                animate={{
                                  x: '100%',
                                  transition: {
                                    duration: 3,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                    delay: index * 0.5
                                  }
                                }}
                                whileHover={{
                                  transition: {
                                    duration: 2,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                    delay: 0
                                  }
                                }}
                              />
                              
                            </div>
                          </div>
                          
                          {/* Mini floating accent elements */}
                          <div className={`absolute -top-3 -right-3 w-5 h-5 rounded-lg bg-gradient-to-br ${service.accentColor} opacity-35 shadow-xl transition-all duration-100 ease-in-out group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:opacity-40`} />
                          <div className={`absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-gradient-to-br ${service.accentColor} opacity-45 shadow-xl transition-all duration-100 ease-in-out group-hover:translate-y-0.5 group-hover:rotate-12 group-hover:opacity-50`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-white/70 font-medium text-sm leading-tight relative z-30">
                  {service.title}
                </h3>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center max-w-2xl px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-wide">
          Wil je weten wie wij zijn?
        </h2>
        
        <p className="text-white/60 text-lg mb-12 font-light">
          Ontdek het verhaal achter ScailUp
        </p>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          onKeyDown={handleKeyDown}
          className="
            group relative inline-flex items-center justify-center
            w-20 h-20 rounded-full border border-white/20
            hover:border-white/40 hover:bg-white/5
            transition-all duration-100 ease-out
            focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black
          "
          aria-label="Ga verder naar het volgende gedeelte"
        >
          {/* Animated chevron */}
          <ChevronDown 
            className="
              w-8 h-8 text-white/70 
              group-hover:text-white transition-all duration-100
              animate-bounce
            " 
          />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
        </button>

        {/* Hint text */}
        <p className="text-white/40 text-sm mt-6 mb-12 font-light">
          Klik op de pijl of druk op ↓
        </p>
      </motion.div>

    </div>
  );
};

export default ContinueGate;