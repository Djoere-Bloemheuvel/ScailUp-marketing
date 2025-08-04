
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ContactSuccessMessage = () => {
  return (
    <div 
      className="flex h-full flex-col items-center justify-center text-center px-8"
      role="status"
      aria-live="polite"
    >
      {/* Premium success icon with Apple-style design */}
      <div className="relative mb-12">
        {/* Outer glow ring */}
        <div 
          className="absolute inset-0 w-32 h-32 rounded-full animate-pulse"
          style={{
            background: 'conic-gradient(from 0deg, rgba(20, 184, 166, 0.3), rgba(34, 211, 238, 0.2), rgba(16, 185, 129, 0.3), rgba(20, 184, 166, 0.3))',
            filter: 'blur(20px)',
            animationDuration: '4s'
          }}
        />
        
        {/* Main icon container */}
        <div 
          className="relative w-32 h-32 rounded-full p-1 backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 211, 238, 0.1))',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div 
            className="flex h-full w-full items-center justify-center rounded-full backdrop-blur-sm"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <CheckCircle className="h-12 w-12 text-teal-400 drop-shadow-lg" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Success message with Apple typography */}
      <div className="space-y-6 max-w-lg">
        <h2 
          id="contact-success-message"
          className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight"
          tabIndex={-1}
        >
          Bericht ontvangen!
        </h2>
        
        <div className="space-y-4">
          <p className="text-xl text-white/80 font-light leading-relaxed">
            Bedankt voor uw vertrouwen in Buildrs.
          </p>
          
          <p className="text-lg text-white/65 font-light leading-relaxed">
            Ons team neemt binnen 24 uur contact met u op om uw AI-mogelijkheden te bespreken.
          </p>
        </div>
        
        <div className="pt-4">
          <p className="text-sm text-white/40 italic">
            Dit venster sluit automatisch binnen enkele seconden.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-16 left-16 w-2 h-2 rounded-full bg-teal-400/20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-24 right-20 w-1.5 h-1.5 rounded-full bg-cyan-400/25 animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-20 left-24 w-1 h-1 rounded-full bg-emerald-400/20 animate-pulse" style={{ animationDelay: '5s' }} />
    </div>
  );
};

export default ContactSuccessMessage;
