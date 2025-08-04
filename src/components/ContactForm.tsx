
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Loader2 } from 'lucide-react';

interface ContactFormProps {
  onSuccess: () => void;
}

interface FormData {
  naam: string;
  email: string;
  bericht: string;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    email: '',
    bericht: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.naam.trim()) {
      newErrors.naam = 'Naam is verplicht';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ongeldig e-mailadres';
    }

    if (!formData.bericht.trim()) {
      newErrors.bericht = 'Bericht is verplicht';
    } else if (formData.bericht.trim().length < 10) {
      newErrors.bericht = 'Bericht moet minimaal 10 tekens bevatten';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({ naam: '', email: '', bericht: '' });
      setErrors({});
      
      onSuccess();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      {/* Name field */}
      <div className="space-y-2">
        <label htmlFor="naam" className="block text-sm font-medium text-white/90">
          Naam
        </label>
        <input
          id="naam"
          type="text"
          value={formData.naam}
          onChange={(e) => handleChange('naam', e.target.value)}
          className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white/10 ${
            errors.naam 
              ? 'border-red-500/50 focus:ring-red-500/50' 
              : 'border-white/10 hover:border-white/20'
          }`}
          placeholder="Uw volledige naam"
          disabled={isSubmitting}
        />
        {errors.naam && (
          <p className="text-sm text-red-400">{errors.naam}</p>
        )}
      </div>

      {/* Email field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-white/90">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white/10 ${
            errors.email 
              ? 'border-red-500/50 focus:ring-red-500/50' 
              : 'border-white/10 hover:border-white/20'
          }`}
          placeholder="uw@email.nl"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Message field */}
      <div className="space-y-2">
        <label htmlFor="bericht" className="block text-sm font-medium text-white/90">
          Bericht
        </label>
        <textarea
          id="bericht"
          value={formData.bericht}
          onChange={(e) => handleChange('bericht', e.target.value)}
          rows={6}
          className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white placeholder-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white/10 resize-none ${
            errors.bericht 
              ? 'border-red-500/50 focus:ring-red-500/50' 
              : 'border-white/10 hover:border-white/20'
          }`}
          placeholder="Vertel ons over uw uitdagingen en hoe wij kunnen helpen..."
          disabled={isSubmitting}
        />
        {errors.bericht && (
          <p className="text-sm text-red-400">{errors.bericht}</p>
        )}
      </div>

      {/* Submit button */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:from-teal-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center justify-center">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Versturen...
              </>
            ) : (
              <>
                Verstuur bericht
                <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </span>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
