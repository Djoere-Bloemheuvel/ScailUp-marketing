
import { memo, useCallback, useEffect, useState } from 'react';

interface OptimizedAnimationProviderProps {
  children: React.ReactNode;
  priority?: 'critical' | 'high' | 'medium' | 'low';
}

const OptimizedAnimationProvider = memo(({ children, priority = 'critical' }: OptimizedAnimationProviderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPriority, setCurrentPriority] = useState<string>(priority);

  // Load animations based on priority and connection speed
  const loadAnimations = useCallback(async () => {
    try {
      // Simulate loading critical animations immediately
      setIsLoaded(true);

      // Check connection and device capabilities
      const connection = (navigator as any).connection;
      const isSlowConnection = connection?.effectiveType && 
        ['slow-2g', '2g'].includes(connection.effectiveType);
      const isLowEndDevice = navigator.hardwareConcurrency <= 2;

      if (!isSlowConnection && !isLowEndDevice) {
        // Load high priority animations after a brief delay
        requestIdleCallback(() => {
          setCurrentPriority('high');
        });

        // Load medium priority animations when idle
        requestIdleCallback(() => {
          setCurrentPriority('medium');
        });

        // Load decorative animations last, only on good connections
        if (connection?.effectiveType === '4g' || !connection) {
          requestIdleCallback(() => {
            setCurrentPriority('low');
          });
        }
      }
    } catch (error) {
      console.warn('Animation loading failed:', error);
      setIsLoaded(true); // Still render without animations
    }
  }, []);

  useEffect(() => {
    loadAnimations();
  }, [loadAnimations]);

  // Load CSS files dynamically based on priority
  useEffect(() => {
    const loadCSS = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'all';
      document.head.appendChild(link);
      return link;
    };

    const coreCSS = loadCSS('/src/styles/animations/core.css');
    const heroCSS = loadCSS('/src/styles/animations/hero.css');

    // Load additional CSS files based on current priority
    let interactionsCSS: HTMLLinkElement | null = null;
    let ambientCSS: HTMLLinkElement | null = null;
    let decorativeCSS: HTMLLinkElement | null = null;

    if (['high', 'medium', 'low'].includes(currentPriority)) {
      interactionsCSS = loadCSS('/src/styles/animations/interactions.css');
    }

    if (['medium', 'low'].includes(currentPriority)) {
      ambientCSS = loadCSS('/src/styles/animations/ambient.css');
    }

    if (currentPriority === 'low') {
      decorativeCSS = loadCSS('/src/styles/animations/decorative.css');
    }

    return () => {
      // Cleanup CSS links on unmount
      [coreCSS, heroCSS, interactionsCSS, ambientCSS, decorativeCSS]
        .filter(Boolean)
        .forEach(link => link && document.head.removeChild(link));
    };
  }, [currentPriority]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="loading-spinner" />
      </div>
    );
  }

  return <>{children}</>;
});

OptimizedAnimationProvider.displayName = 'OptimizedAnimationProvider';

export default OptimizedAnimationProvider;
