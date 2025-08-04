
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
        {/* Premium glassmorphic container with Buildrs colors */}
        <div className="relative">
          {/* Deep black background with Buildrs color gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-gray-950/95 to-premium-black backdrop-blur-3xl rounded-3xl" />
          
          {/* Buildrs brand ambient lighting */}
          <div className="absolute top-6 left-6 w-40 h-40 bg-premium-gold/8 rounded-full blur-[80px]" />
          <div className="absolute bottom-6 right-6 w-48 h-48 bg-premium-gold/6 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-premium-gold/5 rounded-full blur-[60px]" />
          
          {/* Premium border with Buildrs gold accents */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-premium-gold/30 via-premium-gold/10 to-premium-gold/20">
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-premium-black/60 to-premium-black/80" />
          </div>
          
          {/* Inner gold glow */}
          <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-premium-gold/[0.02] via-transparent to-premium-gold/[0.01]" />
          
          {/* Scrollable content */}
          <div className="relative z-10 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-premium-gold/20">
            <div className="p-8 md:p-12">
              {/* Header */}
              <DialogHeader className="mb-8 text-center">
                <DialogTitle className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Plan je AI-deepdive
                </DialogTitle>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
                  Ontdek hoe AI jouw business kan transformeren. Laat je gegevens achter en we nemen contact met je op.
                </p>
              </DialogHeader>

              {/* Contact Form - Wider layout */}
              <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
                {/* Name and Email row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Naam *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/5 border-premium-gold/20 text-white placeholder:text-gray-400 focus:border-premium-gold/50 focus:ring-premium-gold/20 rounded-xl h-12 backdrop-blur-sm"
                      placeholder="Je volledige naam"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/5 border-premium-gold/20 text-white placeholder:text-gray-400 focus:border-premium-gold/50 focus:ring-premium-gold/20 rounded-xl h-12 backdrop-blur-sm"
                      placeholder="je@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Company row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                      Telefoon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/5 border-premium-gold/20 text-white placeholder:text-gray-400 focus:border-premium-gold/50 focus:ring-premium-gold/20 rounded-xl h-12 backdrop-blur-sm"
                      placeholder="+31 6 12345678"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">
                      Bedrijf
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white/5 border-premium-gold/20 text-white placeholder:text-gray-400 focus:border-premium-gold/50 focus:ring-premium-gold/20 rounded-xl h-12 backdrop-blur-sm"
                      placeholder="Je bedrijfsnaam"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-premium-gold/20 text-white placeholder:text-gray-400 focus:border-premium-gold/50 focus:ring-premium-gold/20 rounded-xl p-3 backdrop-blur-sm resize-none focus:outline-none focus:ring-2"
                    placeholder="Vertel ons over je uitdagingen en hoe AI kan helpen..."
                  />
                </div>

                {/* Contact preferences - Wider grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center space-x-4 p-6 rounded-xl bg-white/[0.03] border border-premium-gold/15 hover:bg-white/[0.05] hover:border-premium-gold/25 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-premium-gold to-yellow-400 rounded-lg flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-premium-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">E-mail contact</h4>
                      <p className="text-gray-400">Snelle reactie binnen 24 uur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-6 rounded-xl bg-white/[0.03] border border-premium-gold/15 hover:bg-white/[0.05] hover:border-premium-gold/25 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-premium-gold rounded-lg flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-premium-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Telefonisch contact</h4>
                      <p className="text-gray-400">Persoonlijk gesprek</p>
                    </div>
                  </div>
                </div>

                {/* Submit buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Button 
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-premium-gold to-yellow-400 hover:from-yellow-400 hover:to-premium-gold text-premium-black px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Verstuur aanvraag
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1 text-gray-300 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl border-2 border-premium-gold/30 hover:border-premium-gold/50 transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-sm transform hover:scale-[1.02]"
                    onClick={onClose}
                  >
                    Annuleren
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Close button with Buildrs colors */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-premium-gold/20 border border-premium-gold/20 hover:border-premium-gold/40 flex items-center justify-center transition-all duration-300 backdrop-blur-sm group z-20"
          >
            <X className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Buildrs-themed animated particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-premium-gold/50 rounded-full animate-pulse" style={{
              animationDelay: '0s',
              animationDuration: '3s'
            }} />
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-premium-gold/40 rounded-full animate-pulse" style={{
              animationDelay: '1s',
              animationDuration: '4s'
            }} />
            <div className="absolute bottom-1/3 left-2/3 w-0.5 h-0.5 bg-premium-gold/60 rounded-full animate-pulse" style={{
              animationDelay: '2s',
              animationDuration: '3.5s'
            }} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
