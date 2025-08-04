
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
    // Auto-close after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-0 border-0 bg-transparent p-0 shadow-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-3xl md:max-w-5xl">
        {/* Mobile fullscreen layout */}
        <div className="relative h-screen w-full bg-gradient-to-br from-gray-950 via-black to-gray-950 sm:h-auto sm:max-h-[90vh] sm:rounded-3xl overflow-hidden">
          {/* Glass morphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.01] backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.02] via-transparent to-cyan-500/[0.02]" />
          
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-sm opacity-40" />
          <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-gray-950/90 via-black/95 to-gray-950/90" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white sm:right-6 sm:top-6"
            aria-label="Sluiten"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col px-6 py-8 sm:px-12 sm:py-16">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="mb-8 text-center sm:mb-12">
                  <h2 className="mb-4 text-3xl font-light text-white sm:text-5xl md:text-6xl">
                    Laten we
                    <span className="ml-3 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
                      praten
                    </span>
                  </h2>
                  <p className="text-lg text-white/70 sm:text-xl">
                    Klaar om uw AI-potentieel te ontdekken?
                  </p>
                </div>

                {/* Form */}
                <div className="flex-1">
                  <ContactForm onSuccess={handleSubmitSuccess} />
                </div>
              </>
            ) : (
              /* Success message */
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-6 h-20 w-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 p-1">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                    <div className="h-3 w-6 border-b-2 border-r-2 border-white rotate-45 transform" />
                  </div>
                </div>
                <h3 className="mb-4 text-3xl font-light text-white sm:text-4xl">
                  Bedankt voor uw bericht
                </h3>
                <p className="text-lg text-white/70 sm:text-xl max-w-md">
                  We nemen binnen 24 uur contact met u op om uw AI-mogelijkheden te bespreken.
                </p>
              </div>
            )}
          </div>

          {/* Ambient lighting effects */}
          <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 bg-gradient-to-b from-teal-500/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-60 w-60 bg-gradient-to-t from-cyan-500/15 to-transparent blur-3xl" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
