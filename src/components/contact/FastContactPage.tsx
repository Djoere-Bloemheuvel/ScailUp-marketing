
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import LightweightBackground from './LightweightBackground';
import OptimizedContactForm from './OptimizedContactForm';

const FastContactPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (formData: any) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
  };

  return (
    <>
      <SEOHead
        title="Contact - Buildrs.AI | Plan uw AI Transformatie"
        description="Neem contact op met Buildrs.AI voor een persoonlijk gesprek over uw AI-project. Premium AI-oplossingen op maat voor visionairs."
        keywords="contact, AI consultatie, plan deepdive, Buildrs.AI, AI project"
      />
      
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Lightweight Background */}
        <LightweightBackground />
        
        {/* Back Button - Top Left */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="fixed top-8 left-8 z-50 text-white hover:text-premium-silver transition-colors duration-300 bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-full px-6 py-3"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Terug naar home
        </Button>

        {/* Main Content */}
        <div className="relative z-30 min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto w-full">
            
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Plan een deepdive
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-premium-silver/90 leading-relaxed font-light max-w-3xl mx-auto">
                Laten we uw AI-visie bespreken en een op maat gemaakte roadmap creëren voor uw digitale transformatie.
              </p>
            </div>

            {/* Optimized Contact Form Container */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative rounded-3xl p-8 md:p-12" style={{
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.04) 100%)
                `,
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 32px 64px rgba(0, 0, 0, 0.3), 0 16px 32px rgba(20, 184, 166, 0.05)'
              }}>
                <OptimizedContactForm 
                  onSubmit={handleFormSubmit}
                  isSubmitting={isSubmitting}
                />
              </div>

              {/* Subtle reflection effect */}
              <div className="absolute top-full left-8 right-8 h-32 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10 scale-y-[-1] origin-top blur-sm"
                  style={{
                    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.04) 100%)`,
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FastContactPage;
