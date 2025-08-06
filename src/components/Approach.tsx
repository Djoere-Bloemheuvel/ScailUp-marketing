
import { useEffect, useRef, useState } from 'react';
import AppleTimeline from './AppleTimeline';
import AppleNebulaBackground from './AppleNebulaBackground';
import HorizontalLightFlare from './HorizontalLightFlare';
import HorizontalLightFlareAnimations from './HorizontalLightFlareAnimations';

const Approach = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-28 pb-32 lg:pb-40 px-4 overflow-hidden bg-black"
    >
      {/* Include light flare animations */}
      <HorizontalLightFlareAnimations />
      
      {/* Enhanced nebula background */}
      <AppleNebulaBackground />
      
      {/* Content container */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Apple-inspired header with refined typography */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Hero title - Apple style with smooth entrance animation */}
          <div className="mb-8">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-2'
            }`} 
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              Gebouwd op principes.
            </h2>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-2'
            }`} 
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
              transitionDelay: '100ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Gedreven door resultaat.
              </span>
            </h2>
          </div>
          
          {/* Subtitle with Apple typography */}
          <p className={`text-white/55 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-2'
          }`} 
          style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
            transitionDelay: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            Dit zijn de vier principes waarmee we elk project tot een succes maken.
          </p>
        </div>

        {/* Apple-style vertical timeline with unified animation */}
        <AppleTimeline isVisible={isVisible} />

        {/* Removed bottom CTA section */}
      </div>

      {/* Horizontal light flare at bottom for section separation */}
      <HorizontalLightFlare position="bottom" className="-bottom-8" />
    </section>
  );
};

export default Approach;
