
import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ContactModalTriggerProps {
  children?: React.ReactNode;
  variant?: 'default' | 'cta' | 'link';
  className?: string;
}

const ContactModalTrigger = ({ 
  children, 
  variant = 'default', 
  className = '' 
}: ContactModalTriggerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Default content based on variant
  const getDefaultContent = () => {
    switch (variant) {
      case 'cta':
        return (
          <Button 
            className={`group relative bg-white text-black hover:bg-premium-silver transition-all duration-500 px-12 py-8 text-xl font-semibold rounded-xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 shadow-xl ${className}`}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}
          >
            <span className="relative z-10 flex items-center text-black">
              <MessageCircle className="mr-3 h-6 w-6" />
              Contact
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out" />
          </Button>
        );
      case 'link':
        return (
          <button 
            className={`text-premium-silver hover:text-white transition-colors duration-300 font-medium ${className}`}
          >
            Contact
          </button>
        );
      default:
        return (
          <Button 
            variant="outline" 
            className={`bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 ${className}`}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Contact
          </Button>
        );
    }
  };

  return (
    <>
      <div onClick={handleOpenModal} className="cursor-pointer">
        {children || getDefaultContent()}
      </div>
      
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
      
      {/* SEO fallback - hidden contact link */}
      <div className="sr-only">
        <a href="mailto:contact@buildrs.ai" aria-label="Contact via email">
          Contact Buildrs.AI
        </a>
      </div>
    </>
  );
};

export default ContactModalTrigger;
