
import { useCallback, useEffect } from 'react';

const PerformanceMonitor = () => {
  // Memoized performance measurement
  const measurePerformance = useCallback(() => {
    // Monitor Core Web Vitals with better metrics
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      const ttfb = navigation.responseStart - navigation.fetchStart;
      const fcp = navigation.domContentLoadedEventEnd - navigation.fetchStart;

      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('🎯 Performance Metrics:', {
          'Load Time': `${Math.round(loadTime)}ms`,
          'Render Time': `${Math.round(renderTime)}ms`,
          'TTFB': `${Math.round(ttfb)}ms`,
          'FCP': `${Math.round(fcp)}ms`,
          'Total Time': `${Math.round(navigation.loadEventEnd - navigation.fetchStart)}ms`,
        });
      }

      // Track animation performance
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'measure' && entry.name.includes('animation')) {
              if (process.env.NODE_ENV === 'development') {
                console.log(`🎬 Animation "${entry.name}": ${Math.round(entry.duration)}ms`);
              }
            }
          });
        });
        observer.observe({ entryTypes: ['measure'] });
      }
    }

  }, []);

  useEffect(() => {
    // Track route changes with better performance
    let routeChangeStart = performance.now();

    const routeObserver = new MutationObserver(() => {
      const routeChangeEnd = performance.now();
      const routeChangeTime = routeChangeEnd - routeChangeStart;

      if (routeChangeTime > 50 && process.env.NODE_ENV === 'development') {
        console.log('🚀 Route change time:', Math.round(routeChangeTime), 'ms');
      }

      routeChangeStart = routeChangeEnd;
    });

    routeObserver.observe(document.body, {
      childList: true,
      subtree: false, // Optimize by not observing deep changes
    });

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', measurePerformance);
    } else {
      measurePerformance();
    }

    // Clean up
    return () => {
      routeObserver.disconnect();
      document.removeEventListener('DOMContentLoaded', measurePerformance);
    };
  }, [measurePerformance]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
