import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface UseOptimizedIntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useOptimizedIntersection = (options: UseOptimizedIntersectionOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoize observer options
  const observerOptions = useMemo(() => ({
    threshold,
    rootMargin
  }), [threshold, rootMargin]);

  // Optimized intersection callback
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];

    if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
      if (delay > 0) {
        // Use requestAnimationFrame for better timing
        requestAnimationFrame(() => {
          setTimeout(() => {
            setIsIntersecting(true);
            if (triggerOnce) {
              setHasTriggered(true);
              // Disconnect observer after first trigger for performance
              if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
              }
            }
          }, delay);
        });
      } else {
        requestAnimationFrame(() => {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
            if (observerRef.current) {
              observerRef.current.disconnect();
              observerRef.current = null;
            }
          }
        });
      }
    } else if (!entry.isIntersecting && !triggerOnce) {
      setIsIntersecting(false);
    }
  }, [delay, triggerOnce, hasTriggered]);

  // Set ref callback
  const setRef = useCallback((element: Element | null) => {
    if (elementRef.current && observerRef.current) {
      observerRef.current.unobserve(elementRef.current);
    }

    elementRef.current = element;

    if (element && !hasTriggered) {
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);
      }
      observerRef.current.observe(element);
    }
  }, [handleIntersection, observerOptions, hasTriggered]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { isIntersecting, setRef };
};

// Hook for lazy loading animations
export const useLazyAnimation = (delay: number = 0) => {
  return useOptimizedIntersection({
    threshold: 0.15,
    rootMargin: '50px 0px -50px 0px',
    triggerOnce: true,
    delay
  });
};

// Hook for continuous animations (like parallax)
export const useContinuousAnimation = () => {
  return useOptimizedIntersection({
    threshold: 0,
    rootMargin: '200px 0px 200px 0px',
    triggerOnce: false
  });
};
