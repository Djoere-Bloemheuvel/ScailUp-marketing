
import { useEffect, useRef, useState, useCallback } from 'react';

interface UseOptimizedIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

interface ObserverEntry {
  id: string;
  callback: (isIntersecting: boolean) => void;
  options: UseOptimizedIntersectionObserverOptions;
}

// Singleton observer manager for better performance
class IntersectionObserverManager {
  private observers: Map<string, IntersectionObserver> = new Map();
  private entries: Map<Element, ObserverEntry[]> = new Map();
  private timeouts: Map<string, NodeJS.Timeout> = new Map();

  private getObserverKey(options: UseOptimizedIntersectionObserverOptions): string {
    return `${options.threshold || 0}_${options.rootMargin || '0px'}`;
  }

  private createObserver(options: UseOptimizedIntersectionObserverOptions): IntersectionObserver {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const observerEntries = this.entries.get(entry.target) || [];
          observerEntries.forEach(({ callback, options: entryOptions, id }) => {
            if (entryOptions.delay) {
              // Clear existing timeout
              const existingTimeout = this.timeouts.get(id);
              if (existingTimeout) {
                clearTimeout(existingTimeout);
              }

              // Set new timeout
              const timeout = setTimeout(() => {
                callback(entry.isIntersecting);
                this.timeouts.delete(id);
              }, entryOptions.delay);

              this.timeouts.set(id, timeout);
            } else {
              callback(entry.isIntersecting);
            }

            // Remove observer if triggerOnce and intersecting
            if (entryOptions.triggerOnce && entry.isIntersecting) {
              this.unobserve(entry.target, id);
            }
          });
        });
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || '0px 0px -30px 0px'
      }
    );
  }

  observe(
    element: Element,
    callback: (isIntersecting: boolean) => void,
    options: UseOptimizedIntersectionObserverOptions = {},
    id: string
  ): void {
    const observerKey = this.getObserverKey(options);
    
    // Get or create observer
    if (!this.observers.has(observerKey)) {
      this.observers.set(observerKey, this.createObserver(options));
    }
    
    const observer = this.observers.get(observerKey)!;
    
    // Add entry to tracking
    const existingEntries = this.entries.get(element) || [];
    const newEntry: ObserverEntry = { id, callback, options };
    
    // Check if this ID already exists for this element
    const existingIndex = existingEntries.findIndex(entry => entry.id === id);
    if (existingIndex >= 0) {
      existingEntries[existingIndex] = newEntry;
    } else {
      existingEntries.push(newEntry);
      observer.observe(element);
    }
    
    this.entries.set(element, existingEntries);
  }

  unobserve(element: Element, id: string): void {
    const existingEntries = this.entries.get(element) || [];
    const filteredEntries = existingEntries.filter(entry => entry.id !== id);
    
    // Clear timeout if exists
    const timeout = this.timeouts.get(id);
    if (timeout) {
      clearTimeout(timeout);
      this.timeouts.delete(id);
    }

    if (filteredEntries.length === 0) {
      // No more entries for this element, stop observing
      this.entries.delete(element);
      
      // Find which observer is observing this element and unobserve
      this.observers.forEach((observer) => {
        observer.unobserve(element);
      });
    } else {
      this.entries.set(element, filteredEntries);
    }
  }

  cleanup(): void {
    // Clear all timeouts
    this.timeouts.forEach(timeout => clearTimeout(timeout));
    this.timeouts.clear();
    
    // Disconnect all observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.entries.clear();
  }
}

// Global instance
const observerManager = new IntersectionObserverManager();

export const useOptimizedIntersectionObserver = (
  options: UseOptimizedIntersectionObserverOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const idRef = useRef<string>(`observer_${Date.now()}_${Math.random()}`);

  const callback = useCallback((isIntersecting: boolean) => {
    setIsVisible(isIntersecting);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const id = idRef.current;
    observerManager.observe(element, callback, options, id);

    return () => {
      observerManager.unobserve(element, id);
    };
  }, [callback, options.threshold, options.rootMargin, options.triggerOnce, options.delay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (elementRef.current) {
        observerManager.unobserve(elementRef.current, idRef.current);
      }
    };
  }, []);

  return { elementRef, isVisible };
};

// Cleanup function for app-level cleanup
export const cleanupIntersectionObservers = () => {
  observerManager.cleanup();
};
