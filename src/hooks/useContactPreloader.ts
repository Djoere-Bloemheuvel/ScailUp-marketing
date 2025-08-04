
import { useEffect } from 'react';

export const useContactPreloader = () => {
  useEffect(() => {
    // Preload contact route assets
    const preloadContact = () => {
      // Preload the Contact component
      import('../pages/Contact');
      
      // Preload critical CSS for contact form
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = '/contact';
      document.head.appendChild(link);
    };

    // Preload on mouse enter for contact buttons
    const handleMouseEnter = () => {
      preloadContact();
    };

    // Add event listeners to contact-related buttons
    const contactButtons = document.querySelectorAll('[data-contact-trigger]');
    contactButtons.forEach(button => {
      button.addEventListener('mouseenter', handleMouseEnter, { once: true });
    });

    // Preload after 3 seconds if user hasn't triggered it
    const timeoutId = setTimeout(preloadContact, 3000);

    return () => {
      clearTimeout(timeoutId);
      contactButtons.forEach(button => {
        button.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, []);
};
