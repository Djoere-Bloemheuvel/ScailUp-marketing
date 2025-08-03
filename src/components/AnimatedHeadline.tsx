
import { useState, useEffect } from 'react';

const AnimatedHeadline = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const headlines = [
    "AI die denkt.",
    "AI die bouwt.", 
    "AI die werkt."
  ];

  useEffect(() => {
    // Start animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timers: NodeJS.Timeout[] = [];

    // Phase 0: "AI die denkt." - show for 1.2s
    timers.push(setTimeout(() => {
      setCurrentPhase(1);
    }, 1200));

    // Phase 1: "AI die bouwt." - show for 1.2s  
    timers.push(setTimeout(() => {
      setCurrentPhase(2);
    }, 2400));

    // Phase 2: "AI die werkt." - permanent (no more changes)

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible]);

  return (
    <div className="relative">
      {/* Container with fixed height to prevent layout shift */}
      <div className="min-h-[120px] md:min-h-[160px] lg:min-h-[200px] flex items-center justify-center">
        {headlines.map((headline, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
              currentPhase === index
                ? 'opacity-100 scale-100'
                : currentPhase > index 
                  ? 'opacity-0 scale-95' 
                  : 'opacity-0 scale-98'
            }`}
            style={{
              transitionDelay: currentPhase === index ? '250ms' : '0ms'
            }}
          >
            <h1 className={`font-bold tracking-tight leading-[0.9] text-center ${
              index === 2 
                ? 'text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl' 
                : 'text-6xl md:text-8xl lg:text-9xl text-white'
            }`}>
              {headline}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedHeadline;
