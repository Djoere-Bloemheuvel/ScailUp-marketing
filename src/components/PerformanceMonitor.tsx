import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const { name, value, rating } = entry as any;
        
        console.log(`%c${name}: ${Math.round(value)}ms (${rating})`, 
          `color: ${rating === 'good' ? '#22c55e' : rating === 'needs-improvement' ? '#f59e0b' : '#ef4444'}`
        );
        
        // Track image loading performance
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('%cLCP (Largest Contentful Paint):', 'color: #3b82f6', entry);
        }
        
        if (entry.entryType === 'layout-shift') {
          console.log('%cCLS (Cumulative Layout Shift):', 'color: #8b5cf6', entry);
        }
        
        if (entry.entryType === 'first-input') {
          console.log('%cFID (First Input Delay):', 'color: #06b6d4', entry);
        }
      }
    });
    
    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift', 'first-input'] });
    
    // Monitor image loading
    const imageObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name.includes('.webp') || entry.name.includes('.jpg') || entry.name.includes('.png')) {
          console.log(`%cImage loaded: ${entry.name.split('/').pop()} in ${Math.round(entry.duration)}ms`, 
            'color: #10b981');
        }
      }
    });
    
    imageObserver.observe({ entryTypes: ['resource'] });
    
    // Monitor for layout shifts specifically from images
    let clsScore = 0;
    const layoutShiftObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsScore += (entry as any).value;
        }
      }
      
      if (clsScore > 0) {
        console.log(`%cTotal CLS Score: ${clsScore.toFixed(4)}`, 
          `color: ${clsScore < 0.1 ? '#22c55e' : clsScore < 0.25 ? '#f59e0b' : '#ef4444'}`);
      }
    });
    
    layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
    
    // Monitor scroll performance
    let scrollStart = 0;
    let scrollSamples = 0;
    let totalScrollTime = 0;
    
    const handleScrollStart = () => {
      scrollStart = performance.now();
    };
    
    const handleScrollEnd = () => {
      if (scrollStart > 0) {
        totalScrollTime += performance.now() - scrollStart;
        scrollSamples++;
        scrollStart = 0;
        
        if (scrollSamples % 10 === 0) { // Log every 10 scroll events
          const avgScrollTime = totalScrollTime / scrollSamples;
          console.log(`%cAverage scroll performance: ${avgScrollTime.toFixed(2)}ms`, 
            `color: ${avgScrollTime < 16 ? '#22c55e' : '#f59e0b'}`);
        }
      }
    };
    
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollStart === 0) handleScrollStart();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Summary report after 5 seconds
    const summaryTimeout = setTimeout(() => {
      console.log('%c🚀 Image Performance Summary:', 'color: #3b82f6; font-weight: bold; font-size: 14px');
      console.log(`• Average scroll performance: ${scrollSamples > 0 ? (totalScrollTime / scrollSamples).toFixed(2) : 'N/A'}ms`);
      console.log(`• CLS Score: ${clsScore.toFixed(4)} (${clsScore < 0.1 ? 'Good' : clsScore < 0.25 ? 'Needs Improvement' : 'Poor'})`);
      console.log(`• Scroll events monitored: ${scrollSamples}`);
    }, 5000);
    
    return () => {
      observer.disconnect();
      imageObserver.disconnect();
      layoutShiftObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(summaryTimeout);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default PerformanceMonitor;