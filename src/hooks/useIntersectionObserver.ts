import { useEffect, useState, useRef } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  skip?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '200px', // Start loading 200px before element enters viewport
    triggerOnce = true,
    skip = false
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (skip || (triggerOnce && hasIntersected)) return;

    const element = targetRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);
        
        if (isVisible && !hasIntersected) {
          setHasIntersected(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, skip, hasIntersected]);

  return {
    targetRef,
    isIntersecting,
    hasIntersected
  };
};

// Hook specifically for smooth scroll detection and optimization
export const useScrollVelocity = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [isFastScrolling, setIsFastScrolling] = useState(false);
  
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;
      
      const timeDelta = currentTime - lastScrollTime.current;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      
      if (timeDelta > 0) {
        const velocity = scrollDelta / timeDelta;
        setScrollVelocity(velocity);
        setIsFastScrolling(velocity > 1.5); // Threshold for fast scrolling
      }
      
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set scroll end detection
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        setIsFastScrolling(false);
        setScrollVelocity(0);
      }, 150);
      
      lastScrollY.current = currentScrollY;
      lastScrollTime.current = currentTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return {
    isScrolling,
    scrollVelocity,
    isFastScrolling
  };
};