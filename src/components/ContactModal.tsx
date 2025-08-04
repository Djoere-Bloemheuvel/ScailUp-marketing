
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
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none overflow-hidden">
        {/* Premium glassmorphic container */}
        <div className="relative">
          {/* Deep black background with subtle gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/98 via-gray-900/95 to-black/98 backdrop-blur-3xl rounded-3xl" />
          
          {/* Subtle ambient lighting */}
          <div className="absolute top-6 left-6 w-32 h-32 bg-cyan-500/8 rounded-full blur-[80px]" />
          <div className="absolute bottom-6 right-6 w-40 h-40 bg-blue-500/6 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-teal-500/5 rounded-full blur-[60px]" />
          
          {/* Premium border with enhanced gradients */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10">
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-black/40 to-black/60" />
          </div>
          
          {/* Inner subtle glow */}
          <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-white/[0.01] via-transparent to-white/[0.005]" />
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            {/* Header */}
            <DialogHeader className="mb-8 text-center">
              <DialogTitle className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Plan je AI-deepdive
              </DialogTitle>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto font-light">
                Ontdek hoe AI jouw business kan transformeren. Laat je gegevens achter en we nemen contact met je op.
              </p>
            </DialogHeader>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              {/* Name and Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="bg-white/5 border-white/15 text-white placeholder:text-gray-400 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl h-12 backdrop-blur-sm"
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
                    className="bg-white/5 border-white/15 text-white placeholder:text-gray-400 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl h-12 backdrop-blur-sm"
                    placeholder="je@email.com"
                  />
                </div>
              </div>

              {/* Phone and Company row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="bg-white/5 border-white/15 text-white placeholder:text-gray-400 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl h-12 backdrop-blur-sm"
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
                    className="bg-white/5 border-white/15 text-white placeholder:text-gray-400 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl h-12 backdrop-blur-sm"
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
                  className="w-full bg-white/5 border border-white/15 text-white placeholder:text-gray-400 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl p-3 backdrop-blur-sm resize-none focus:outline-none focus:ring-2"
                  placeholder="Vertel ons over je uitdagingen en hoe AI kan helpen..."
                />
              </div>

              {/* Contact preferences */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">E-mail contact</h4>
                    <p className="text-gray-400 text-sm">Snelle reactie binnen 24 uur</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Telefonisch contact</h4>
                    <p className="text-gray-400 text-sm">Persoonlijk gesprek</p>
                  </div>
                </div>
              </div>

              {/* Submit buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Verstuur aanvraag
                </Button>
                
                <Button 
                  type="button"
                  variant="outline"
                  className="flex-1 text-gray-300 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-sm transform hover:scale-[1.02]"
                  onClick={onClose}
                >
                  Annuleren
                </Button>
              </div>
            </form>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/25 flex items-center justify-center transition-all duration-300 backdrop-blur-sm group z-20"
          >
            <X className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Subtle animated particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse" style={{
              animationDelay: '0s',
              animationDuration: '3s'
            }} />
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse" style={{
              animationDelay: '1s',
              animationDuration: '4s'
            }} />
            <div className="absolute bottom-1/3 left-2/3 w-0.5 h-0.5 bg-teal-400/50 rounded-full animate-pulse" style={{
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
