
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Mail, Phone, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-transparent border-none overflow-hidden">
        {/* Black glassmorphic container with transparency */}
        <div className="relative">
          {/* Black glassmorphic background with subtle variations */}
          <div 
            className="absolute inset-0 backdrop-blur-xl rounded-3xl"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(0, 0, 0, 0.4) 0%, 
                  rgba(30, 30, 30, 0.35) 25%,
                  rgba(0, 0, 0, 0.3) 50%, 
                  rgba(20, 20, 20, 0.38) 75%,
                  rgba(0, 0, 0, 0.42) 100%
                ),
                radial-gradient(ellipse 800px 400px at 30% 20%, rgba(60, 60, 60, 0.08) 0%, transparent 50%),
                radial-gradient(ellipse 600px 300px at 70% 80%, rgba(40, 40, 40, 0.06) 0%, transparent 50%)
              `,
            }}
          />
          
          {/* Dark border with subtle glow */}
          <div 
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.15) 0%, 
                  rgba(120, 120, 120, 0.1) 25%,
                  rgba(255, 255, 255, 0.12) 50%, 
                  rgba(100, 100, 100, 0.08) 75%,
                  rgba(255, 255, 255, 0.18) 100%
                )
              `,
              padding: '1px',
            }}
          >
            <div 
              className="w-full h-full rounded-3xl backdrop-blur-sm"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(0, 0, 0, 0.5) 0%, 
                    rgba(30, 30, 30, 0.4) 25%,
                    rgba(0, 0, 0, 0.45) 50%, 
                    rgba(20, 20, 20, 0.42) 75%,
                    rgba(0, 0, 0, 0.48) 100%
                  )
                `
              }}
            />
          </div>
          
          {/* Subtle ambient lighting with darker tones */}
          <div 
            className="absolute top-12 left-12 w-32 h-32 rounded-full blur-[60px] opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(120, 120, 120, 0.2) 0%, transparent 70%)'
            }}
          />
          <div 
            className="absolute bottom-12 right-12 w-40 h-40 rounded-full blur-[80px] opacity-25"
            style={{
              background: 'radial-gradient(circle, rgba(80, 80, 80, 0.15) 0%, transparent 70%)'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/4 w-28 h-28 rounded-full blur-[50px] opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(100, 100, 100, 0.12) 0%, transparent 70%)'
            }}
          />
          
          {/* Scrollable content */}
          <div className="relative z-10 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
            <div className="p-8 md:p-12">
              {/* Header */}
              <DialogHeader className="mb-8 text-center">
                <DialogTitle className="text-3xl md:text-4xl font-bold text-white/95 mb-4 tracking-tight">
                  Plan je AI-deepdive
                </DialogTitle>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
                  Ontdek hoe AI jouw business kan transformeren. Laat je gegevens achter en we nemen contact met je op.
                </p>
              </DialogHeader>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
                {/* Name and Email row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/85">
                      Naam *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/8 border-white/15 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 rounded-xl h-12 backdrop-blur-sm hover:bg-white/12 transition-colors"
                      placeholder="Je volledige naam"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(40, 40, 40, 0.2) 100%)'
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/85">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/8 border-white/15 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 rounded-xl h-12 backdrop-blur-sm hover:bg-white/12 transition-colors"
                      placeholder="je@email.com"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(40, 40, 40, 0.2) 100%)'
                      }}
                    />
                  </div>
                </div>

                {/* Phone and Company row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white/85">
                      Telefoon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/8 border-white/15 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 rounded-xl h-12 backdrop-blur-sm hover:bg-white/12 transition-colors"
                      placeholder="+31 6 12345678"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(40, 40, 40, 0.2) 100%)'
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-white/85">
                      Bedrijf
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white/8 border-white/15 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 rounded-xl h-12 backdrop-blur-sm hover:bg-white/12 transition-colors"
                      placeholder="Je bedrijfsnaam"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(40, 40, 40, 0.2) 100%)'
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/85">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border border-white/15 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 rounded-xl p-3 backdrop-blur-sm resize-none focus:outline-none focus:ring-2 hover:bg-white/12 transition-colors"
                    placeholder="Vertel ons over je uitdagingen en hoe AI kan helpen..."
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(40, 40, 40, 0.2) 100%)'
                    }}
                  />
                </div>

                {/* Contact preferences */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                  <div 
                    className="flex items-center space-x-4 p-6 rounded-xl border border-white/15 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(50, 50, 50, 0.15) 100%)'
                    }}
                  >
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(220, 220, 220, 0.8) 100%)'
                      }}
                    >
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white/95 font-semibold text-lg">E-mail contact</h4>
                      <p className="text-white/70">Snelle reactie binnen 24 uur</p>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-center space-x-4 p-6 rounded-xl border border-white/15 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(50, 50, 50, 0.15) 100%)'
                    }}
                  >
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm"
                      style={{
                        background: 'linear-gradient(135deg, rgba(220, 220, 220, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)'
                      }}
                    >
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white/95 font-semibold text-lg">Telefonisch contact</h4>
                      <p className="text-white/70">Persoonlijk gesprek</p>
                    </div>
                  </div>
                </div>

                {/* Submit buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Button 
                    type="submit"
                    className="flex-1 px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] text-black"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(200, 200, 200, 0.8) 100%)',
                    }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Verstuur aanvraag
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1 text-white/85 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/25 hover:border-white/40 transition-all duration-300 backdrop-blur-sm transform hover:scale-[1.02]"
                    onClick={onClose}
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(40, 40, 40, 0.2) 100%)'
                    }}
                  >
                    Annuleren
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/25 hover:border-white/40 flex items-center justify-center transition-all duration-300 backdrop-blur-sm group z-20 hover:bg-white/15"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(40, 40, 40, 0.3) 100%)'
            }}
          >
            <X className="w-5 h-5 text-white/85 group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Subtle floating particles with dark theme */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
            <div 
              className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full animate-pulse opacity-40"
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                animationDelay: '0s',
                animationDuration: '3s'
              }}
            />
            <div 
              className="absolute top-3/4 right-1/3 w-1 h-1 rounded-full animate-pulse opacity-30"
              style={{
                background: 'rgba(200, 200, 200, 0.5)',
                animationDelay: '1s',
                animationDuration: '4s'
              }}
            />
            <div 
              className="absolute bottom-1/3 left-2/3 w-0.5 h-0.5 rounded-full animate-pulse opacity-25"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                animationDelay: '2s',
                animationDuration: '3.5s'
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
