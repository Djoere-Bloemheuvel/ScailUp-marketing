
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface UsePerformantIntersectionOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  enabled?: boolean;
}

// Global intersection observer pool for better performance
class IntersectionObserverPool {
  private static observers = new Map<string, IntersectionObserver>();
  private static callbacks = new Map<string, Map<Element, IntersectionObserverCallback>>();

  static getObserver(options: IntersectionObserverInit): IntersectionObserver {
    const key = JSON.stringify(options);
    
    if (!this.observers.has(key)) {
      const observer = new IntersectionObserver((entries) => {
        const callbackMap = this.callbacks.get(key);
        if (!callbackMap) return;

        entries.forEach((entry) => {
          const callback = callbackMap.get(entry.target);
          if (callback) {
            callback([entry], observer);
          }
        });
      }, options);

      this.observers.set(key, observer);
      this.callbacks.set(key, new Map());
    }

    return this.observers.get(key)!;
  }

  static observe(element: Element, options: IntersectionObserverInit, callback: IntersectionObserverCallback) {
    const key = JSON.stringify(options);
    const observer = this.getObserver(options);
    const callbackMap = this.callbacks.get(key);

    if (callbackMap) {
      callbackMap.set(element, callback);
      observer.observe(element);
    }
  }

  static unobserve(element: Element, options: IntersectionObserverInit) {
    const key = JSON.stringify(options);
    const observer = this.observers.get(key);
    const callbackMap = this.callbacks.get(key);

    if (observer && callbackMap) {
      observer.unobserve(element);
      callbackMap.delete(element);
    }
  }

  static cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.callbacks.clear();
  }
}

export const usePerformantIntersection = (options: UsePerformantIntersectionOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
    enabled = true
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<Element | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize observer options to prevent unnecessary re-creates
  const observerOptions = useMemo(() => ({
    threshold,
    rootMargin
  }), [threshold, rootMargin]);

  // Optimized intersection callback with debouncing
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];

    // Add null check for entry
    if (!entry) return;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (entry.isIntersecting && (!triggerOnce || !hasTriggered) && enabled) {
      const trigger = () => {
        // Use RAF for smooth timing
        requestAnimationFrame(() => {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        });
      };

      if (delay > 0) {
        timeoutRef.current = setTimeout(trigger, delay);
      } else {
        trigger();
      }
    } else if (!entry.isIntersecting && !triggerOnce) {
      setIsIntersecting(false);
    }
  }, [delay, triggerOnce, hasTriggered, enabled]);

  // Ref callback with pooled observer
  const setRef = useCallback((element: Element | null) => {
    // Cleanup previous element
    if (elementRef.current) {
      IntersectionObserverPool.unobserve(elementRef.current, observerOptions);
    }

    // Clear timeout on element change
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    elementRef.current = element;

    // Observe new element
    if (element && enabled && (!triggerOnce || !hasTriggered)) {
      IntersectionObserverPool.observe(element, observerOptions, handleIntersection);
    }
  }, [handleIntersection, observerOptions, enabled, triggerOnce, hasTriggered]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (elementRef.current) {
        IntersectionObserverPool.unobserve(elementRef.current, observerOptions);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [observerOptions]);

  return { isIntersecting, setRef };
};

// Specialized hooks for common use cases
export const useLazyAnimation = (delay: number = 0) => {
  return usePerformantIntersection({
    threshold: 0.15,
    rootMargin: '100px 0px -50px 0px',
    triggerOnce: true,
    delay
  });
};

export const useScrollAnimation = () => {
  return usePerformantIntersection({
    threshold: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: '0px',
    triggerOnce: false
  });
};

export const useViewportTracking = () => {
  return usePerformantIntersection({
    threshold: 0.5,
    rootMargin: '0px',
    triggerOnce: false
  });
};

// Cleanup utility
export const cleanupIntersectionObservers = () => {
  IntersectionObserverPool.cleanup();
};
