import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HomeAnimatedHeadline from './HomeAnimatedHeadline';

// TestCase CTA Button styles for Hero
const HERO_CTA_STYLES = {
  button: {
    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    letterSpacing: '-0.01em',
    fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
    fontWeight: '500',
    padding: 'clamp(0.75rem, 1.2vw, 1rem) clamp(2rem, 3vw, 2.5rem)',
    background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182)) border-box',
    border: '2px solid transparent',
    minWidth: '200px',
    backdropFilter: 'blur(10px)',
    cursor: 'pointer' as const,
    color: 'white'
  },
  buttonFill: {
    background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))',
    transformOrigin: 'bottom center' as const
  }
};

// Animation variants for TestCase style
const HERO_BUTTON_VARIANTS = {
  initial: { scale: 1 },
  hover: { 
    scale: typeof window !== 'undefined' && window.innerWidth < 640 ? 1.02 : 1.01,
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

const SECONDARY_FILL_VARIANTS = {
  initial: { scaleY: 0, scale: 1 },
  hover: { 
    scaleY: 1,
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: [0.16, 1, 0.3, 1],
      type: 'tween'
    }
  }
};

const SECONDARY_BUTTON_VARIANTS = {
  initial: { 
    scale: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)'
  },
  hover: { 
    scale: typeof window !== 'undefined' && window.innerWidth < 640 ? 1.02 : 1.01,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    transition: { 
      duration: 0.4, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

const HomeHero = () => {
  const [hasTriggeredPreload, setHasTriggeredPreload] = useState(false);

  // Ultra-aggressive preload: Trigger on ANY user interaction
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const preloadLeadGenImage = () => {
      if (hasTriggeredPreload) return;
      setHasTriggeredPreload(true);
      
      // Preload lead generation image immediately
      const leadGenImage = new Image();
      leadGenImage.src = '/lead-generation-hero-optimized.webp';
      leadGenImage.loading = 'eager';
      leadGenImage.fetchPriority = 'high';
      
      // Also preload the ultra-hd version as backup
      const leadGenImageBackup = new Image();
      leadGenImageBackup.src = '/lead-generation-hero-ultra-hd.webp';
      leadGenImageBackup.loading = 'eager';
    };

    const handleScroll = () => {
      // Trigger preload immediately when user starts scrolling (even 1px)
      if (window.scrollY > 1) {
        preloadLeadGenImage();
      }
    };

    const handleMouseMove = () => {
      // Trigger on first mouse movement over hero
      preloadLeadGenImage();
    };

    const handleTouch = () => {
      // Trigger on first touch (mobile)
      preloadLeadGenImage();
    };

    // Multiple trigger points for maximum coverage
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true, once: true });
    window.addEventListener('touchstart', handleTouch, { passive: true, once: true });
    
    // Fallback: preload after 2 seconds regardless
    const fallbackTimeout = setTimeout(preloadLeadGenImage, 2000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
      clearTimeout(fallbackTimeout);
    };
  }, [hasTriggeredPreload]);

  const handlePartnershipClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/kenniscentrum';
    }
  };

  const handleCasesClick = () => {
    if (typeof window !== 'undefined') {
      // Scroll to Case Studies section
      const targetSection = document.querySelector('[data-section-id="testcasestudies"]');
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  return (
    <>
      <style jsx>{`
        /* Mobile-first CTA responsive scaling - improved touch targets */
        .cta-responsive {
          font-size: 0.8rem; /* Larger for better readability */
          padding: 0.75rem 1rem; /* Better touch target padding */
          min-height: 44px; /* iOS minimum touch target */
          min-width: 120px; /* Adequate button width */
          display: flex;
          align-items: center;
          justify-content: center;
          touch-action: manipulation; /* Prevent zoom on double tap */
        }
        
        /* Extra small mobile optimization - maintain touch targets */
        @media (max-width: 374px) {
          .cta-responsive {
            font-size: 0.75rem; /* Slightly smaller but readable */
            padding: 0.6rem 0.8rem; /* Adequate padding */
            min-height: 44px; /* Maintain touch target size */
            min-width: 100px; /* Minimum usable width */
          }
        }
        
        @media (min-width: 640px) {
          .cta-responsive {
            font-size: 0.8rem; /* blijft klein */
            padding: 0.45rem 0.9rem; /* kleinere padding */
          }
        }
        
        @media (min-width: 768px) {
          .cta-responsive {
            font-size: 0.8rem; /* blijft klein */
            padding: 0.45rem 1rem; /* iets meer padding */
          }
        }
        
        @media (min-width: 900px) {
          .cta-responsive {
            font-size: 0.875rem; /* text-sm */
            padding: 0.55rem 1.125rem; /* kleinere padding */
          }
        }
        
        @media (min-width: 1000px) {
          .cta-responsive {
            font-size: 0.9rem; /* iets kleiner dan text-base */
            padding: 0.55rem 1.25rem; /* kleinere padding */
          }
        }
        
        @media (min-width: 1024px) {
          .cta-responsive {
            font-size: 0.95rem; /* tussen sm en base */
            padding: 0.55rem 1.35rem; /* kleinere padding */
          }
        }
        
        @media (min-width: 1200px) {
          .cta-responsive {
            font-size: 1rem; /* text-base ipv lg */
            padding: 0.65rem 1.75rem; /* kleinere padding */
          }
        }
        
        /* Icon responsive scaling - better mobile visibility */
        .icon-responsive {
          width: 1rem; /* w-4 - better mobile visibility */
          height: 1rem; /* h-4 */
        }
        
        @media (min-width: 640px) {
          .icon-responsive {
            width: 0.75rem; /* blijft w-3 */
            height: 0.75rem; /* h-3 */
          }
        }
        
        @media (min-width: 768px) {
          .icon-responsive {
            width: 0.875rem; /* tussen w-3 en w-4 */
            height: 0.875rem;
          }
        }
        
        @media (min-width: 900px) {
          .icon-responsive {
            width: 1rem; /* w-4 */
            height: 1rem; /* h-4 */
          }
        }
        
        @media (min-width: 1000px) {
          .icon-responsive {
            width: 1.125rem; /* tussen w-4 en w-5 */
            height: 1.125rem;
          }
        }
        
        @media (min-width: 1024px) {
          .icon-responsive {
            width: 1.25rem; /* w-5 */
            height: 1.25rem; /* h-5 */
          }
        }
        
        /* Text margin responsive scaling */
        .text-margin-responsive {
          margin-right: 0.25rem; /* mr-1 */
        }
        
        @media (min-width: 640px) {
          .text-margin-responsive {
            margin-right: 0.25rem; /* mr-1 */
          }
        }
        
        @media (min-width: 768px) {
          .text-margin-responsive {
            margin-right: 0.375rem; /* tussen mr-1 en mr-2 */
          }
        }
        
        @media (min-width: 900px) {
          .text-margin-responsive {
            margin-right: 0.5rem; /* mr-2 */
          }
        }
        
        @media (min-width: 1000px) {
          .text-margin-responsive {
            margin-right: 0.625rem; /* tussen mr-2 en mr-3 */
          }
        }
        
        @media (min-width: 1024px) {
          .text-margin-responsive {
            margin-right: 0.75rem; /* mr-3 */
          }
        }
        
        /* Default background positioning */
        .hero-bg {
          background-position: center 25% !important; /* Default for smaller screens */
        }
        
        /* Mobile responsive background positioning - TRANSFORM SOLUTION + ZOOM OUT */
        @media (max-width: 639px) {
          .hero-bg {
            background-position: center center !important;
            background-size: 120% auto !important; /* Uitzoomen zodat volledige breedte zichtbaar is */
            transform: translate3d(0, 20%, 0) !important;
            will-change: transform;
            contain: layout style paint;
          }
        }
        
        /* Mobile performance optimizations */
        @media (max-width: 639px) {
          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .hero-bg {
              transform: none !important;
              animation: none !important;
            }
          }
          
          /* Mobile scroll performance */
          body {
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: none;
          }
          
          /* Mobile touch optimizations */
          * {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
          }
          
          /* Allow text selection only in inputs and text areas */
          input, textarea {
            -webkit-user-select: text;
            user-select: text;
          }
          
          /* Optimize CTA buttons for mobile performance */
          .cta-responsive {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            will-change: transform;
            backface-visibility: hidden;
          }
          
          /* Mobile viewport optimization */
          .hero-bg {
            image-rendering: optimizeSpeed;
            image-rendering: -webkit-optimize-contrast;
          }
        }
        
        /* Tablet landscape positioning */
        @media (min-width: 640px) and (max-width: 767px) {
          .hero-bg {
            background-position: center 35% !important;
          }
        }
        
        /* Laptop screens (13-16 inch) - background position */
        @media (min-width: 768px) and (max-width: 1679px) {
          .hero-bg {
            background-position: center 22% !important; /* Laptop background position */
          }
        }
        
        /* Desktop screens (18+ inch) - background position */
        @media (min-width: 1680px) {
          .hero-bg {
            background-position: center 19% !important; /* Desktop background position */
          }
        }
      `}</style>
    <section 
      className="relative w-full h-screen flex justify-center px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
      data-section-theme="dark"
      data-section-accent="blue"
      data-section-id="hero"
      data-lighting-intensity="moderate"
      style={{
        // Mobile performance optimizations
        willChange: 'transform',
        contain: 'layout style paint',
        // Mobile viewport height fix
        minHeight: typeof window !== 'undefined' && window.innerWidth < 640 ? '100svh' : '100vh',
        // Cut off from top by starting higher
        marginTop: '-10vh',
        // Add that cut space to the bottom
        paddingBottom: '10vh',
        // Position content slightly lower than center
        alignItems: 'flex-start',
        paddingTop: '31vh' // Start content at 31% from top - subtly shifted towards specialist section
      }}
    >
      
      {/* Instant Hero Background - No transitions */}
      <div className="absolute inset-0">
        {/* Instant background with image */}
        <div 
          className="absolute inset-0 hero-bg"
          style={{
            backgroundColor: '#000000',
            backgroundImage: 'url(/hero-bg-buildrs-8k.webp)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9,
            imageRendering: 'high-quality',
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0,0,0)', // Force GPU layer
            contain: 'paint'
          }}
        />
        
        {/* Fallback high-quality image for browsers that don't support CSS background */}
        <img 
          src="/hero-bg-buildrs-8k.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-90 object-pos-responsive hidden"
          width="1920"
          height="1080"
          style={{
            imageRendering: 'high-quality',
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0,0,0)'
          }}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
      </div>
      
      
      {/* Clean responsive content positioning */}
      <style>{`
        
        /* Consistent content positioning - desktop & laptop unified */
        .content-container {
          margin-top: 2vh;
          padding-top: 1rem;
        }
        
        /* Mobile-only positioning adjustments */
        @media (max-width: 639px) {
          .content-container {
            margin-top: 8vh; /* More space from top on mobile */
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Extra small mobile phones */
        @media (max-width: 374px) {
          .content-container {
            margin-top: 6vh;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
        
        /* Tablet landscape - consistent with laptop positioning */
        @media (min-width: 640px) {
          .content-container {
            margin-top: -2vh; /* Consistent baseline for all larger screens */
            padding-top: 0.5rem;
          }
        }
        
        /* Laptop screens (13-16 inch) - higher positioning */
        @media (min-width: 768px) and (max-width: 1679px) {
          .content-container {
            margin-top: -12vh; /* Higher positioning for laptop */
            padding-top: 0;
          }
        }
        
        /* Desktop screens (18+ inch) - matching laptop positioning */
        @media (min-width: 1680px) {
          .content-container {
            margin-top: -3vh; /* Same positioning as laptop */
            padding-top: 0;
          }
        }
        
        /* Large desktop screens - minimal adjustment only */
        @media (min-width: 2560px) {
          .content-container {
            margin-top: -4vh; /* Slight adjustment for very large screens */
          }
        }
        
        @keyframes agency-flow {
          0%, 100% { transform: translateX(-30%) scale(1) rotate(0deg); opacity: 0.2; }
          50% { transform: translateX(30%) scale(1.1) rotate(2deg); opacity: 0.4; }
        }
        
        @keyframes partnership-drift {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-40px) rotate(1deg) scale(1.05); }
          75% { transform: translateY(40px) rotate(-1deg) scale(0.95); }
        }
        
        @keyframes scale-glow {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); opacity: 0.3; }
          25% { transform: translateX(80px) translateY(-50px) scale(1.3); opacity: 0.5; }
          50% { transform: translateX(160px) translateY(0) scale(0.8); opacity: 0.2; }
          75% { transform: translateX(80px) translateY(50px) scale(1.2); opacity: 0.4; }
        }
      `}</style>
      
      {/* Minimal accent lights to complement background */}
      <div className="absolute inset-0 opacity-5" style={{ contain: 'paint' }}>
        {/* Very subtle accent lighting */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-16 sm:w-72 sm:h-24 md:w-96 md:h-32 bg-gradient-to-l from-blue-500/20 to-cyan-500/15 rounded-lg sm:rounded-xl blur-3xl" 
          style={{ 
            animationDelay: '0s', 
            animation: 'partnership-drift 25s ease-in-out infinite, fade-pulse 18s ease-in-out infinite'
          }} 
        />
      </div>
      
      {/* Subtle fade to black at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 sm:h-44 lg:h-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.15) 45%, rgba(0, 0, 0, 0.35) 65%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.85) 95%, rgba(0, 0, 0, 1) 100%)'
        }}
      />
        
      {/* Content Container - Responsive positioning above BUILDRS logo */}
      <div className="relative max-w-6xl mx-auto z-30 text-center sm:text-left content-container"
           style={{
             /* Safe padding voor cutoff prevention op alle breakpoints */
             paddingLeft: '1rem',
             paddingRight: '2rem',
             /* Zorg dat de container zelf links uitlijnt op laptop/desktop */
             textAlign: typeof window !== 'undefined' && window.innerWidth >= 768 ? 'left' : undefined,
             /* Prevent any overflow issues */
             overflow: 'visible'
           }}>
        <motion.div 
          className="max-w-5xl mx-auto relative"
          style={{ 
            minHeight: '280px',
            /* Remove contain voor betere alignment */
            contain: 'none',
            willChange: 'transform',
            /* Ensure no overflow cutoff */
            overflow: 'visible',
            /* Subtle shift to the left */
            marginLeft: '-1rem',
            marginRight: 'auto'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.15, 
            ease: [0.25, 0.46, 0.45, 0.94],
            // Mobile-specific optimization
            ...(typeof window !== 'undefined' && window.innerWidth < 640 && {
              duration: 0.2,
              ease: "easeOut"
            })
          }}
        >
          {/* Subtle background glow for content area */}
          <div className="absolute inset-0 rounded-3xl opacity-5 pointer-events-none" 
               style={{
                 background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                 filter: 'blur(40px)'
               }} />
          
          {/* Animated Headline - Enter from left */}
          <motion.div 
            className="mb-0"
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0 }}
          >
            <HomeAnimatedHeadline />
          </motion.div>


          {/* Redesigned CTA Section - Mobile-optimized animations */}
          <motion.div 
            className="flex flex-row gap-2 sm:gap-4 lg:gap-6 justify-center sm:justify-start items-center -mt-4 sm:mt-0 md:mt-0 lg:mt-1 cta-container relative z-50"
            style={{ 
              minHeight: '100px',
              /* Remove contain voor betere alignment */
              contain: 'none',
              willChange: 'transform',
              /* Ensure perfect alignment */
              overflow: 'visible',
              zIndex: 50
            }}
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.35, 
              delay: 0.08, 
              ease: [0.16, 1, 0.3, 1],
              // Mobile-specific easing
              ...(typeof window !== 'undefined' && window.innerWidth < 640 && {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1
              })
            }}
          >
            <style jsx>{`
              /* Perfect alignment met hero headline */
              .cta-container {
                margin-left: 0rem !important; /* Mobile: geen offset */
              }
              
              /* Laptop & Desktop: perfecte uitlijning met headline */
              @media (min-width: 768px) {
                .cta-container {
                  margin-left: -0.5rem !important; /* Subtiele uitlijning met headline */
                  justify-content: flex-start !important;
                }
              }
              
              @media (min-width: 1680px) {
                .cta-container {
                  margin-left: -1rem !important; /* Iets meer uitlijning voor desktop */
                }
              }
              
              @media (min-width: 1920px) {
                .cta-container {
                  margin-left: -1.5rem !important; /* Matige uitlijning voor grote desktop */
                }
              }
              
              @media (min-width: 2560px) {
                .cta-container {
                  margin-left: -2rem !important; /* Maximale uitlijning voor zeer grote desktop */
                }
              }
              
              /* Mobile CTA button responsive sizing - smaller & shorter */
              .cta-responsive {
                padding: 0.375rem 0.75rem; /* Smaller padding */
                font-size: 0.65rem; /* Smaller text */
                height: 2rem; /* Much shorter height */
              }
              
              .text-margin-responsive {
                font-size: 0.65rem; /* Smaller text */
                font-weight: 500;
              }
              
              .icon-responsive {
                width: 0.875rem; /* Smaller icon */
                height: 0.875rem;
                margin-left: 0.25rem;
              }
              
              @media (min-width: 640px) {
                .cta-responsive {
                  padding: 0.75rem 1.5rem;
                  font-size: 0.875rem;
                  height: 3rem;
                }
                
                .text-margin-responsive {
                  font-size: 0.875rem;
                  font-weight: 500;
                }
                
                .icon-responsive {
                  width: 1.125rem;
                  height: 1.125rem;
                  margin-left: 0.5rem;
                }
              }
              
              /* Consistent styling for all larger screens */
              @media (min-width: 768px) {
                .cta-responsive {
                  padding: 1rem 2rem;
                  font-size: 1rem;
                  height: 3.5rem;
                }
                
                .text-margin-responsive {
                  font-size: 1rem;
                  font-weight: 500;
                }
                
                .icon-responsive {
                  width: 1.25rem;
                  height: 1.25rem;
                  margin-left: 0.5rem;
                }
              }
              
              /* No additional positioning adjustments needed - all handled by main breakpoint */
              
              /* Fix button cursor and hover states */
              .cta-responsive {
                cursor: default !important;
                transition: all 0.3s ease !important;
              }
              
              .cta-responsive:hover {
                cursor: pointer !important;
              }
              
              /* Reset any inherited link styling */
              .cta-responsive, .cta-responsive * {
                text-decoration: none !important;
                color: inherit !important;
              }
            `}</style>
            <div className="cta-container flex flex-row gap-2 sm:gap-4 lg:gap-6 justify-center sm:justify-start items-center w-full">
            {/* Primary CTA - Perfect gradient border with bottom-to-top fill */}
            <div className="relative z-50">
              <motion.button
                onClick={() => {
                  // Scroll to endingctahomepage section
                  const targetSection = document.querySelector('[data-section-id="endingctahomepage"]');
                  if (targetSection) {
                    targetSection.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start' 
                    });
                  }
                }}
                className="relative z-50 inline-flex items-center justify-center cta-responsive text-white font-medium rounded-full flex-1 min-w-0 w-[calc(42vw-0.5rem)] sm:w-[calc(40vw-1rem)] md:w-[calc(32vw-1rem)] lg:w-80 whitespace-nowrap group overflow-hidden"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182)) border-box',
                  border: '2px solid transparent',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'none',
                  cursor: 'pointer',
                  zIndex: 50
                }}
                whileHover="hover"
                initial="initial"
                variants={HERO_BUTTON_VARIANTS}
                whileTap={HERO_BUTTON_TAP_VARIANT}
              >
                {/* Bottom-to-top gradient fill animation */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={HERO_CTA_STYLES.buttonFill}
                  variants={HERO_FILL_VARIANTS}
                />
                
                <span 
                  className="relative z-10 text-white text-margin-responsive"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)', color: 'white' }}
                >
                  Plan strategiesessie
                </span>
                <ArrowRight className="relative z-10 icon-responsive group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Secondary CTA - Using exact same approach as primary button */}
            <div className="relative z-50">
              <motion.button
                onClick={handleCasesClick}
                className="relative z-50 inline-flex items-center justify-center cta-responsive text-white font-medium rounded-full flex-1 min-w-0 w-[calc(42vw-0.5rem)] sm:w-[calc(40vw-1rem)] md:w-[calc(32vw-1rem)] lg:w-80 whitespace-nowrap group overflow-hidden"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  zIndex: 50
                }}
                whileHover="hover"
                initial="initial"
                variants={SECONDARY_BUTTON_VARIANTS}
                whileTap={HERO_BUTTON_TAP_VARIANT}
              >
                {/* Top-to-bottom black fill animation - exact copy from primary */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'rgba(0, 0, 0, 1)',
                    transformOrigin: 'top center'
                  }}
                  variants={SECONDARY_FILL_VARIANTS}
                />
                
                <span className="relative z-10 text-margin-responsive">Bekijk voorbeelden</span>
                <motion.div
                  className="relative z-10"
                  whileHover={{
                    rotate: 90,
                    y: 4,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }}
                >
                  <ChevronRight className="icon-responsive" />
                </motion.div>
              </motion.button>
            </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Agency-themed floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Network connection dots */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-purple-400/60 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-blue-400/50 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-pink-400/40 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-500/60 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 right-12 w-3 h-3 bg-cyan-500/50 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-500/45 rounded-full opacity-45 animate-pulse" style={{ animationDelay: '5s' }} />
      </div>
        
    </section>
    </>
  );
};

export default HomeHero;