
import { useCallback, useEffect, useRef } from 'react';

interface PerformanceConfig {
  enableAnimations?: boolean;
  animationQuality?: 'low' | 'medium' | 'high';
  enablePrefetch?: boolean;
  enableLazyLoading?: boolean;
}

export const useOptimizedPerformance = (config: PerformanceConfig = {}) => {
  const {
    enableAnimations = true,
    animationQuality = 'medium',
    enablePrefetch = true,
    enableLazyLoading = true
  } = config;

  const performanceRef = useRef({
    isLowEndDevice: false,
    isSlowConnection: false,
    prefersReducedMotion: false,
    effectiveAnimationQuality: animationQuality
  });

  // Device and connection detection
  const detectCapabilities = useCallback(() => {
    // Detect low-end device
    const hardwareConcurrency = navigator.hardwareConcurrency || 2;
    const deviceMemory = (navigator as any).deviceMemory || 2;
    performanceRef.current.isLowEndDevice = hardwareConcurrency <= 2 || deviceMemory <= 2;

    // Detect slow connection
    const connection = (navigator as any).connection;
    if (connection) {
      performanceRef.current.isSlowConnection = 
        ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
    }

    // Check user preference for reduced motion
    performanceRef.current.prefersReducedMotion = 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Adjust animation quality based on capabilities
    if (performanceRef.current.isLowEndDevice || 
        performanceRef.current.isSlowConnection ||
        performanceRef.current.prefersReducedMotion) {
      performanceRef.current.effectiveAnimationQuality = 'low';
    }
  }, []);

  // Resource prefetching
  const prefetchResource = useCallback((url: string, type: 'script' | 'style' | 'image' = 'script') => {
    if (!enablePrefetch || performanceRef.current.isSlowConnection) return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = type;
    document.head.appendChild(link);
  }, [enablePrefetch]);

  // Lazy image loading optimization
  const optimizedImageProps = useCallback((src: string, alt: string = '') => {
    const props: any = { src, alt };
    
    if (enableLazyLoading) {
      props.loading = 'lazy';
      props.decoding = 'async';
    }

    // Add responsive image hints
    if (performanceRef.current.isSlowConnection) {
      props.style = { ...props.style, filter: 'blur(1px)' };
    }

    return props;
  }, [enableLazyLoading]);

  // Animation class generator based on performance
  const getAnimationClass = useCallback((baseClass: string) => {
    if (!enableAnimations || performanceRef.current.prefersReducedMotion) {
      return '';
    }

    const quality = performanceRef.current.effectiveAnimationQuality;
    
    switch (quality) {
      case 'low':
        return `${baseClass}-minimal`;
      case 'high':
        return `${baseClass}-enhanced`;
      default:
        return baseClass;
    }
  }, [enableAnimations]);

  // Performance-aware requestAnimationFrame
  const performantRAF = useCallback((callback: FrameRequestCallback) => {
    if (performanceRef.current.isLowEndDevice) {
      // Throttle animations on low-end devices
      let lastTime = 0;
      const targetFPS = 30;
      const interval = 1000 / targetFPS;

      const throttledCallback: FrameRequestCallback = (currentTime) => {
        if (currentTime - lastTime >= interval) {
          lastTime = currentTime;
          callback(currentTime);
        } else {
          requestAnimationFrame(throttledCallback);
        }
      };

      return requestAnimationFrame(throttledCallback);
    } else {
      return requestAnimationFrame(callback);
    }
  }, []);

  // Initialize performance detection
  useEffect(() => {
    detectCapabilities();

    // Listen for connection changes
    const connection = (navigator as any).connection;
    if (connection) {
      const handleConnectionChange = () => detectCapabilities();
      connection.addEventListener('change', handleConnectionChange);
      
      return () => {
        connection.removeEventListener('change', handleConnectionChange);
      };
    }
  }, [detectCapabilities]);

  return {
    capabilities: performanceRef.current,
    prefetchResource,
    optimizedImageProps,
    getAnimationClass,
    performantRAF,
    shouldUseAnimations: enableAnimations && !performanceRef.current.prefersReducedMotion,
    effectiveQuality: performanceRef.current.effectiveAnimationQuality
  };
};
