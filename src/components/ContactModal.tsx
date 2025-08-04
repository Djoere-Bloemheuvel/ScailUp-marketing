
import { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Luxurious Contact Modal Component
 * - Premium glassmorphic design matching Buildrs website
 * - Transparent background with sophisticated blur effects
 * - WCAG 2.1 AA compliant with proper focus management
 */
const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handle successful form submission with proper focus management
   */
  const handleSubmitSuccess = useCallback(() => {
    setIsSubmitted(true);
    
    // Focus management for accessibility
    setTimeout(() => {
      const successElement = document.getElementById('contact-success-message');
      if (successElement) {
        successElement.focus();
      }
    }, 100);
    
    // Auto-close after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 4000);
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
   * Keyboard event handler for accessibility
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
        className="fixed inset-0 z-50 backdrop-blur-lg bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all duration-500"
        aria-hidden="true"
      />
      <DialogContent 
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-0 border-0 bg-transparent p-0 shadow-none duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-3xl md:max-w-5xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        {/* Premium Glassmorphic Container */}
        <div className="relative h-screen w-full sm:h-auto sm:max-h-[90vh] sm:rounded-3xl overflow-hidden">
          {/* Luxurious glassmorphic background */}
          <div 
            className="absolute inset-0 backdrop-blur-2xl bg-white/[0.02] border border-white/[0.08] sm:rounded-3xl"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.08) 0%, 
                  rgba(255, 255, 255, 0.04) 25%,
                  rgba(255, 255, 255, 0.02) 50%,
                  rgba(255, 255, 255, 0.04) 75%,
                  rgba(255, 255, 255, 0.08) 100%
                )
              `,
              boxShadow: `
                0 32px 64px rgba(0, 0, 0, 0.25),
                0 0 0 1px rgba(255, 255, 255, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(255, 255, 255, 0.05)
              `
            }}
          />
          
          {/* Premium ambient lighting effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden sm:rounded-3xl">
            {/* Top gradient glow */}
            <div 
              className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full opacity-40 animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(59, 130, 246, 0.1) 40%, rgba(147, 51, 234, 0.08) 60%, transparent 80%)',
                filter: 'blur(60px)',
                animationDuration: '8s'
              }}
            />
            
            {/* Bottom accent glow */}
            <div 
              className="absolute -bottom-32 right-1/4 w-80 h-80 rounded-full opacity-30 animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)',
                filter: 'blur(80px)',
                animationDuration: '12s',
                animationDelay: '-4s'
              }}
            />
            
            {/* Side accent */}
            <div 
              className="absolute top-1/2 -left-32 transform -translate-y-1/2 w-64 h-64 rounded-full opacity-25 animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, rgba(147, 51, 234, 0.06) 60%, transparent 80%)',
                filter: 'blur(70px)',
                animationDuration: '10s',
                animationDelay: '-6s'
              }}
            />
          </div>

          {/* Elegant close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 group rounded-full p-3 transition-all duration-300 hover:scale-110 sm:right-6 sm:top-6 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-transparent"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
            }}
            aria-label="Contact modal sluiten"
            type="button"
          >
            <X className="h-5 w-5 text-white/80 group-hover:text-white transition-colors duration-200" />
          </button>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col px-6 py-8 sm:px-12 sm:py-16">
            {!isSubmitted ? (
              <>
                {/* Elegant header */}
                <header className="mb-8 text-center sm:mb-12">
                  <h1 
                    id="contact-modal-title"
                    className="mb-6 text-3xl font-light text-white sm:text-5xl md:text-6xl tracking-tight"
                  >
                    Laten we
                    <span className="ml-3 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
                      praten
                    </span>
                  </h1>
                  <p 
                    id="contact-modal-description"
                    className="text-lg text-white/75 sm:text-xl font-light leading-relaxed max-w-2xl mx-auto"
                  >
                    Klaar om uw AI-potentieel te ontdekken? Vertel ons over uw uitdagingen en doelen.
                  </p>
                </header>

                {/* Form container with subtle glass effect */}
                <main className="flex-1">
                  <div 
                    className="relative rounded-2xl p-6 sm:p-8"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <ContactForm onSuccess={handleSubmitSuccess} />
                  </div>
                </main>
              </>
            ) : (
              /* Elegant success message */
              <div 
                className="flex h-full flex-col items-center justify-center text-center"
                role="status"
                aria-live="polite"
              >
                {/* Success icon with premium styling */}
                <div 
                  className="mb-8 h-24 w-24 rounded-full p-1 relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(34, 211, 238, 0.2))',
                    boxShadow: '0 20px 40px rgba(20, 184, 166, 0.2)'
                  }}
                >
                  <div 
                    className="flex h-full w-full items-center justify-center rounded-full"
                    style={{
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <CheckCircle className="h-10 w-10 text-teal-400" aria-hidden="true" />
                  </div>
                </div>

                <h2 
                  id="contact-success-message"
                  className="mb-6 text-3xl font-light text-white sm:text-4xl tracking-tight"
                  tabIndex={-1}
                >
                  Bedankt voor uw bericht!
                </h2>
                <p className="text-lg text-white/75 sm:text-xl max-w-md mb-6 font-light leading-relaxed">
                  We nemen binnen 24 uur contact met u op om uw AI-mogelijkheden te bespreken.
                </p>
                <p className="text-sm text-white/50 italic">
                  Dit venster sluit automatisch binnen enkele seconden.
                </p>
              </div>
            )}
          </div>

          {/* Subtle floating accent elements */}
          <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-gradient-to-br from-teal-400/30 to-transparent animate-pulse opacity-60" />
          <div className="absolute bottom-8 left-8 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400/30 to-transparent animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 left-6 w-1 h-1 rounded-full bg-gradient-to-br from-purple-400/40 to-transparent animate-pulse opacity-40" style={{ animationDelay: '4s' }} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
