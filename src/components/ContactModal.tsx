
import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import ContactModalBackground from './contact/ContactModalBackground';
import ContactModalHeader from './contact/ContactModalHeader';
import ContactSuccessMessage from './contact/ContactSuccessMessage';
import ContactFormContainer from './contact/ContactFormContainer';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Premium Apple-style Contact Modal Component
 * - Luxurious glassmorphic design inspired by Apple.com
 * - Premium typography and spacing matching Buildrs aesthetic
 * - Advanced backdrop blur and ambient lighting effects
 * - WCAG 2.1 AA compliant with proper focus management
 */
const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handle successful form submission with elegant focus management
   */
  const handleSubmitSuccess = useCallback(() => {
    setIsSubmitted(true);
    
    // Enhanced focus management for accessibility
    const timer = setTimeout(() => {
      const successElement = document.getElementById('contact-success-message');
      if (successElement) {
        successElement.focus();
      }
    }, 100);
    
    // Auto-close after 5 seconds with smooth transition
    const closeTimer = setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  /**
   * Reset state when modal closes
   */
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  /**
   * Enhanced keyboard event handler
   */
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay 
        className="fixed inset-0 z-50 backdrop-blur-xl bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all duration-700"
        aria-hidden="true"
      />
      <DialogContent 
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-6xl translate-x-[-50%] translate-y-[-50%] gap-0 border-0 bg-transparent p-0 shadow-none duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-98 data-[state=open]:zoom-in-98 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-3xl lg:max-w-7xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        {/* Premium Modal Container */}
        <div className="relative h-screen w-full sm:h-auto sm:max-h-[95vh] sm:rounded-3xl overflow-hidden">
          <ContactModalBackground />
          
          {/* Premium Close Button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-30 group rounded-2xl p-4 transition-all duration-500 hover:scale-105 sm:right-8 sm:top-8 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-transparent"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            aria-label="Contact modal sluiten"
            type="button"
          >
            <X className="h-6 w-6 text-white/70 group-hover:text-white transition-colors duration-300 group-hover:rotate-90" />
          </button>

          {/* Modal Content */}
          <div className="relative z-20 flex h-full flex-col px-8 py-12 sm:px-16 sm:py-20">
            {!isSubmitted ? (
              <>
                <ContactModalHeader />
                <ContactFormContainer onSuccess={handleSubmitSuccess} />
              </>
            ) : (
              <ContactSuccessMessage />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
