import { useEffect, useRef, useState } from 'react';

interface UseAdvancedIntersectionObserverOptions {
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
  preloadMargin?: string; // Extra margin for preloading
}

export function useAdvancedIntersectionObserver(
  options: UseAdvancedIntersectionObserverOptions = {}
) {
  const {
    rootMargin = '150px',
    threshold = 0.1,
    triggerOnce = true,
    preloadMargin = '300px'
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [isPreloading, setIsPreloading] = useState(false);
  const elementRef = useRef<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const preloadObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    // Main visibility observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observerRef.current?.unobserve(currentElement);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    // Preload observer with larger margin
    preloadObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPreloading(true);
            preloadObserverRef.current?.unobserve(currentElement);
          }
        });
      },
      {
        rootMargin: preloadMargin,
        threshold: 0,
      }
    );

    observerRef.current.observe(currentElement);
    preloadObserverRef.current.observe(currentElement);

    return () => {
      observerRef.current?.disconnect();
      preloadObserverRef.current?.disconnect();
    };
  }, [rootMargin, threshold, triggerOnce, preloadMargin]);

  return { elementRef, isVisible, isPreloading };
}

export default useAdvancedIntersectionObserver;