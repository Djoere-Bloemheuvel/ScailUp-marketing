
import { memo, useCallback, useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  loadTime?: number;
}

const PerformanceOptimizedMonitor = memo(() => {
  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Optimized performance measurement with Web Vitals
  const measureWebVitals = useCallback(() => {
    // Only measure in development
    if (process.env.NODE_ENV !== 'development') return;

    try {
      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          metricsRef.current.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            metricsRef.current.fid = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS (Cumulative Layout Shift)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          metricsRef.current.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // FCP (First Contentful Paint)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              metricsRef.current.fcp = entry.startTime;
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        observerRef.current = lcpObserver; // Keep reference for cleanup
      }

      // Navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        metricsRef.current.ttfb = navigation.responseStart - navigation.requestStart;
        metricsRef.current.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }

      // Log metrics after a delay to ensure they're captured
      setTimeout(() => {
        const metrics = metricsRef.current;
        console.group('🎯 Performance Metrics');
        console.log(`FCP: ${Math.round(metrics.fcp || 0)}ms`);
        console.log(`LCP: ${Math.round(metrics.lcp || 0)}ms`);
        console.log(`FID: ${Math.round(metrics.fid || 0)}ms`);
        console.log(`CLS: ${(metrics.cls || 0).toFixed(3)}`);
        console.log(`TTFB: ${Math.round(metrics.ttfb || 0)}ms`);
        console.log(`Load Time: ${Math.round(metrics.loadTime || 0)}ms`);
        console.groupEnd();

        // Performance scoring
        const score = calculatePerformanceScore(metrics);
        console.log(`📊 Performance Score: ${score}/100`);
        
        if (score < 70) {
          console.warn('⚠️ Performance below recommended threshold');
        }
      }, 3000);

    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, []);

  // Calculate performance score based on Core Web Vitals
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;

    // FCP scoring (Good: <1.8s, Needs Improvement: 1.8s-3s, Poor: >3s)
    if (metrics.fcp) {
      if (metrics.fcp > 3000) score -= 20;
      else if (metrics.fcp > 1800) score -= 10;
    }

    // LCP scoring (Good: <2.5s, Needs Improvement: 2.5s-4s, Poor: >4s)
    if (metrics.lcp) {
      if (metrics.lcp > 4000) score -= 25;
      else if (metrics.lcp > 2500) score -= 15;
    }

    // FID scoring (Good: <100ms, Needs Improvement: 100ms-300ms, Poor: >300ms)
    if (metrics.fid) {
      if (metrics.fid > 300) score -= 20;
      else if (metrics.fid > 100) score -= 10;
    }

    // CLS scoring (Good: <0.1, Needs Improvement: 0.1-0.25, Poor: >0.25)
    if (metrics.cls) {
      if (metrics.cls > 0.25) score -= 25;
      else if (metrics.cls > 0.1) score -= 15;
    }

    // TTFB scoring (Good: <800ms, Poor: >800ms)
    if (metrics.ttfb && metrics.ttfb > 800) {
      score -= 10;
    }

    return Math.max(0, score);
  }, []);

  // Track animation performance
  const trackAnimationPerformance = useCallback(() => {
    if (process.env.NODE_ENV !== 'development') return;

    let animationStartTime = performance.now();
    let frameCount = 0;
    let totalFrameTime = 0;

    const measureFrame = () => {
      frameCount++;
      const currentTime = performance.now();
      const frameDuration = currentTime - animationStartTime;
      totalFrameTime += frameDuration;
      animationStartTime = currentTime;

      // Log animation performance every 60 frames
      if (frameCount % 60 === 0) {
        const averageFrameTime = totalFrameTime / frameCount;
        const fps = 1000 / averageFrameTime;
        
        if (fps < 50) {
          console.warn(`🎬 Animation performance: ${Math.round(fps)}fps (below 60fps)`);
        }
        
        // Reset counters
        frameCount = 0;
        totalFrameTime = 0;
      }

      requestAnimationFrame(measureFrame);
    };

    requestAnimationFrame(measureFrame);
  }, []);

  useEffect(() => {
    // Start measurements after component mounts
    measureWebVitals();
    trackAnimationPerformance();

    // Cleanup observers
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [measureWebVitals, trackAnimationPerformance]);

  return null; // This component doesn't render anything
});

PerformanceOptimizedMonitor.displayName = 'PerformanceOptimizedMonitor';

export default PerformanceOptimizedMonitor;
