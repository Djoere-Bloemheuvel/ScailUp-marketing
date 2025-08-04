
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Send, User, Mail, MessageCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-2xl w-full h-full md:h-auto md:max-h-[90vh] p-0 border-0 bg-transparent shadow-none"
        style={{
          background: 'transparent'
        }}
      >
        {/* Backdrop blur overlay */}
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-40" onClick={onClose} />
        
        {/* Main modal container */}
        <div className="relative z-50 w-full h-full md:h-auto flex items-center justify-center p-4 md:p-8">
          <div 
            className="relative w-full max-w-2xl rounded-0 md:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 ease-out scale-95 animate-in fade-in zoom-in-95"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.98) 0%, rgba(25, 25, 25, 0.95) 50%, rgba(20, 20, 20, 0.98) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `
                0 32px 64px rgba(0, 0, 0, 0.5),
                0 0 80px rgba(147, 51, 234, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}
          >
            {/* Ambient glow effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div 
                className="absolute top-0 left-1/4 w-32 h-32 rounded-full opacity-20 animate-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  animationDuration: '4s'
                }}
              />
              <div 
                className="absolute bottom-0 right-1/4 w-24 h-24 rounded-full opacity-15 animate-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  animationDuration: '6s',
                  animationDelay: '-2s'
                }}
              />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm border border-white/10"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
            </button>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              <DialogHeader className="mb-12 text-center">
                <DialogTitle className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Laten we <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">praten</span>
                </DialogTitle>
                <p className="text-lg text-premium-silver/80 font-light max-w-md mx-auto leading-relaxed">
                  Deel uw visie met ons. We bespreken graag hoe AI uw organisatie kan transformeren.
                </p>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name field */}
                <div className="group">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <User className="w-5 h-5 text-premium-silver/50 group-focus-within:text-purple-400 transition-colors duration-300" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Uw naam"
                      className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-premium-silver/50 focus:outline-none focus:border-purple-400/50 focus:bg-white/8 transition-all duration-300 font-light text-lg backdrop-blur-sm"
                      style={{
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-blue-500/5 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none" />
                  </div>
                </div>

                {/* Email field */}
                <div className="group">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <Mail className="w-5 h-5 text-premium-silver/50 group-focus-within:text-purple-400 transition-colors duration-300" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="E-mailadres"
                      className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-premium-silver/50 focus:outline-none focus:border-purple-400/50 focus:bg-white/8 transition-all duration-300 font-light text-lg backdrop-blur-sm"
                      style={{
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-blue-500/5 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none" />
                  </div>
                </div>

                {/* Message field */}
                <div className="group">
                  <div className="relative">
                    <div className="absolute left-4 top-6 z-10">
                      <MessageCircle className="w-5 h-5 text-premium-silver/50 group-focus-within:text-purple-400 transition-colors duration-300" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Vertel ons over uw project of vraag..."
                      rows={6}
                      className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-premium-silver/50 focus:outline-none focus:border-purple-400/50 focus:bg-white/8 transition-all duration-300 font-light text-lg resize-none backdrop-blur-sm"
                      style={{
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-blue-500/5 group-focus-within:to-purple-500/10 transition-all duration-500 pointer-events-none" />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-8 py-6 text-lg font-semibold rounded-2xl overflow-hidden transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: isSubmitting 
                        ? 'linear-gradient(135deg, #e5e5e5 0%, #d1d1d1 100%)' 
                        : 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 30%, #f0f0f0 70%, #e8e8e8 100%)',
                      boxShadow: `
                        0 20px 60px rgba(0, 0, 0, 0.4), 
                        inset 0 1px 0 rgba(255, 255, 255, 0.9),
                        0 0 0 1px rgba(255, 255, 255, 0.1),
                        0 0 20px rgba(147, 51, 234, 0.1)
                      `
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin mr-3" />
                          Verzenden...
                        </>
                      ) : (
                        <>
                          Verstuur bericht
                          <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    
                    {/* Shimmer effect */}
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    )}
                  </Button>
                </div>

                {/* Disclaimer */}
                <p className="text-center text-premium-silver/60 text-sm font-light italic pt-4">
                  We respecteren uw privacy en nemen binnen 24 uur contact op.
                </p>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
