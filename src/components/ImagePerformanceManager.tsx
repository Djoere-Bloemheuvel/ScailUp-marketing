import React, { useEffect, useRef } from 'react';

interface ImagePerformanceManagerProps {
  children: React.ReactNode;
}

const ImagePerformanceManager: React.FC<ImagePerformanceManagerProps> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const preloadedImages = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Aggressive image preloading with very large root margins
    const aggressivePreloadImages = () => {
      const imagesToPreload = [
        '/hero-bg-buildrs-8k.webp',
        '/platform-dashboard-fullwidth.webp',
        '/marketing-engine-tree-visual.webp',
        '/images/marketing-agency-owner.webp',
        '/images/consultancy-founder.webp',
        '/images/saas-team-meeting.webp',
        '/partnership-optimized.webp'
      ];

      imagesToPreload.forEach(src => {
        if (!preloadedImages.current.has(src)) {
          const img = new Image();
          img.src = src;
          preloadedImages.current.add(src);
          
          // Also add to browser cache with high priority
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = src;
          link.as = 'image';
          document.head.appendChild(link);
        }
      });
    };

    // Create a tuned intersection observer (preload ~200px before entering)
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          
          if (entry.isIntersecting) {
            // Element is about to come into view - ensure smooth transitions
            element.style.willChange = 'transform, opacity';
            
            // If it has background images, ensure they're loaded
            const style = window.getComputedStyle(element);
            const backgroundImage = style.backgroundImage;
            
            if (backgroundImage && backgroundImage !== 'none') {
              const urls = backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/g);
              if (urls) {
                urls.forEach(url => {
                  const src = url.replace(/url\(['"]?([^'"]+)['"]?\)/, '$1');
                  if (!preloadedImages.current.has(src)) {
                    const img = new Image();
                    img.src = src;
                    preloadedImages.current.add(src);
                  }
                });
              }
            }
            
            // Remove will-change after transition completes
            setTimeout(() => {
              element.style.willChange = 'auto';
            }, 1000);
          }
        });
      },
      {
        // Preload slightly before view to eliminate pop-in on fast scroll
        rootMargin: '200px 0px 200px 0px',
        threshold: 0
      }
    );

    // Observe sections/images; do NOT unmount, only preload resources
    const sectionsToObserve = document.querySelectorAll('[class*="bg-"], section, .hero-section, [style*="background"], img');
    sectionsToObserve.forEach(section => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // Immediate preload of critical images
    aggressivePreloadImages();

    // Additional preload on scroll start
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(aggressivePreloadImages, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return <>{children}</>;
};

export default ImagePerformanceManager;