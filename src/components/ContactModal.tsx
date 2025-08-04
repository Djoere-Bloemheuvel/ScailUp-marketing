
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Mail, Phone, Calendar } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 bg-transparent border-none overflow-hidden">
        {/* Glassmorphic container */}
        <div className="relative">
          {/* Background with blur effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 backdrop-blur-3xl rounded-3xl" />
          
          {/* Ambient lighting effects */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
          
          {/* Border with premium gradient */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-white/10 to-white/5">
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-black/40 to-black/60" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            {/* Header */}
            <DialogHeader className="mb-8 text-center">
              <DialogTitle className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Plan je AI-deepdive
              </DialogTitle>
              <p className="text-lg text-premium-silver/80 leading-relaxed max-w-lg mx-auto">
                Ontdek hoe AI jouw business kan transformeren. We bespreken concrete mogelijkheden en maken een stappenplan.
              </p>
            </DialogHeader>

            {/* Contact options */}
            <div className="space-y-4 mb-8">
              {/* Email option */}
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-blue-500/30 rounded-2xl transition-all duration-300" />
                
                <div className="relative p-6 flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">Direct contact</h3>
                    <p className="text-premium-silver/70">Stuur een email voor een snelle reactie</p>
                  </div>
                  <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    →
                  </div>
                </div>
              </div>

              {/* Phone option */}
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-green-500/30 rounded-2xl transition-all duration-300" />
                
                <div className="relative p-6 flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">Persoonlijk gesprek</h3>
                    <p className="text-premium-silver/70">Bel direct voor een persoonlijke bespreking</p>
                  </div>
                  <div className="text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    →
                  </div>
                </div>
              </div>

              {/* Calendar option */}
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-purple-500/30 rounded-2xl transition-all duration-300" />
                
                <div className="relative p-6 flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">Plan een afspraak</h3>
                    <p className="text-premium-silver/70">Kies een moment dat jou uitkomt</p>
                  </div>
                  <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    →
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => console.log('Start deepdive clicked')}
              >
                Start de deepdive
              </Button>
              
              <Button 
                variant="outline"
                className="flex-1 text-premium-silver hover:text-white px-6 py-4 text-lg font-semibold rounded-xl border-white/20 hover:border-white/40 transition-all duration-300 bg-white/5 hover:bg-white/10"
                onClick={onClose}
              >
                Misschien later
              </Button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm group"
          >
            <X className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Subtle animated particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{
              animationDelay: '0s',
              animationDuration: '4s'
            }} />
            <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{
              animationDelay: '2s',
              animationDuration: '3s'
            }} />
            <div className="absolute bottom-1/3 left-2/3 w-0.5 h-0.5 bg-cyan-400/60 rounded-full animate-pulse" style={{
              animationDelay: '3s',
              animationDuration: '4s'
            }} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
