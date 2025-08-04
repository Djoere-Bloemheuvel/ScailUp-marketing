
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
      <DialogContent className="max-w-5xl p-0 bg-transparent border-none overflow-hidden">
        {/* Enhanced Glassmorphic container with premium blur */}
        <div className="relative">
          {/* Multi-layered background with enhanced blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/85 to-black/95 backdrop-blur-[40px] rounded-3xl" />
          
          {/* Enhanced ambient lighting effects */}
          <div className="absolute top-8 left-8 w-48 h-48 bg-blue-500/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-8 right-8 w-56 h-56 bg-purple-500/12 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/3 w-44 h-44 bg-emerald-500/08 rounded-full blur-[110px]" />
          
          {/* Premium glassmorphic border with enhanced gradients */}
          <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-white/25 via-white/10 to-white/5">
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-black/30 to-black/50" />
          </div>
          
          {/* Inner glow for depth */}
          <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01]" />
          
          {/* Content */}
          <div className="relative z-10 p-12 md:p-16">
            {/* Header with enhanced typography */}
            <DialogHeader className="mb-12 text-center">
              <DialogTitle className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Plan je AI-deepdive
              </DialogTitle>
              <p className="text-xl md:text-2xl text-premium-silver/90 leading-relaxed max-w-2xl mx-auto font-light">
                Ontdek hoe AI jouw business kan transformeren. We bespreken concrete mogelijkheden en maken een stappenplan.
              </p>
            </DialogHeader>

            {/* Enhanced contact options with better spacing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Email option */}
              <div className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 border border-white/15 group-hover:border-blue-500/40 rounded-3xl transition-all duration-500" />
                <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] rounded-3xl transition-all duration-500" />
                
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-2">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">Direct contact</h3>
                      <p className="text-premium-silver/80 leading-relaxed">Stuur een email voor een snelle reactie</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone option */}
              <div className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 border border-white/15 group-hover:border-green-500/40 rounded-3xl transition-all duration-500" />
                <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] rounded-3xl transition-all duration-500" />
                
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-2">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">Persoonlijk gesprek</h3>
                      <p className="text-premium-silver/80 leading-relaxed">Bel direct voor een persoonlijke bespreking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendar option */}
              <div className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.03]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 border border-white/15 group-hover:border-purple-500/40 rounded-3xl transition-all duration-500" />
                <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] rounded-3xl transition-all duration-500" />
                
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-2">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">Plan een afspraak</h3>
                      <p className="text-premium-silver/80 leading-relaxed">Kies een moment dat jou uitkomt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="flex-1 max-w-xs bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] backdrop-blur-sm"
                onClick={() => console.log('Start deepdive clicked')}
              >
                Start de deepdive
              </Button>
              
              <Button 
                variant="outline"
                className="flex-1 max-w-xs text-premium-silver hover:text-white px-8 py-6 text-xl font-semibold rounded-2xl border-2 border-white/25 hover:border-white/50 transition-all duration-500 bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-sm transform hover:scale-[1.02]"
                onClick={onClose}
              >
                Misschien later
              </Button>
            </div>
          </div>

          {/* Enhanced close button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 flex items-center justify-center transition-all duration-300 backdrop-blur-sm group z-20"
          >
            <X className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Enhanced animated particles with more variety */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" style={{
              animationDelay: '0s',
              animationDuration: '4s'
            }} />
            <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse" style={{
              animationDelay: '1.5s',
              animationDuration: '3.5s'
            }} />
            <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse" style={{
              animationDelay: '2.8s',
              animationDuration: '4.2s'
            }} />
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-emerald-400/45 rounded-full animate-pulse" style={{
              animationDelay: '3.2s',
              animationDuration: '3.8s'
            }} />
            <div className="absolute bottom-1/4 left-1/2 w-0.5 h-0.5 bg-pink-400/50 rounded-full animate-pulse" style={{
              animationDelay: '1.2s',
              animationDuration: '4.5s'
            }} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
