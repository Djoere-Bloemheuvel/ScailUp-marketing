
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CinematicBackground from '@/components/hero/CinematicBackground';
import SEOHead from '@/components/SEOHead';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectDetails: ''
    });
  };

  return (
    <>
      <SEOHead
        title="Contact - Buildrs.AI | Plan uw AI Transformatie"
        description="Neem contact op met Buildrs.AI voor een persoonlijk gesprek over uw AI-project. Premium AI-oplossingen op maat voor visionairs."
        keywords="contact, AI consultatie, plan deepdive, Buildrs.AI, AI project"
      />
      
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Cinematic Background */}
        <CinematicBackground hideGlassContainer={true} />
        
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

            {/* Premium Contact Form */}
            <div className="relative max-w-2xl mx-auto">
              {/* Glassmorphic Form Container */}
              <div className="relative rounded-3xl p-8 md:p-12" style={{
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.04) 100%),
                  radial-gradient(ellipse 600px 300px at 0% 0%, rgba(20, 184, 166, 0.02) 0%, transparent 50%),
                  radial-gradient(ellipse 400px 200px at 100% 100%, rgba(34, 211, 238, 0.015) 0%, transparent 50%)
                `,
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: `
                  0 32px 64px rgba(0, 0, 0, 0.3),
                  0 16px 32px rgba(20, 184, 166, 0.05),
                  0 8px 16px rgba(34, 211, 238, 0.03),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.05)
                `
              }}>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-white font-medium text-lg">
                        Naam *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/8 transition-all duration-300 rounded-xl h-14 text-lg"
                        placeholder="Uw volledige naam"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-white font-medium text-lg">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/8 transition-all duration-300 rounded-xl h-14 text-lg"
                        placeholder="naam@bedrijf.nl"
                      />
                    </div>
                  </div>

                  {/* Company and Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-white font-medium text-lg">
                        Bedrijf
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/8 transition-all duration-300 rounded-xl h-14 text-lg"
                        placeholder="Uw bedrijfsnaam"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-white font-medium text-lg">
                        Telefoon
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/8 transition-all duration-300 rounded-xl h-14 text-lg"
                        placeholder="+31 6 12345678"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3">
                    <Label htmlFor="projectDetails" className="text-white font-medium text-lg">
                      Projectdetails *
                    </Label>
                    <Textarea
                      id="projectDetails"
                      name="projectDetails"
                      required
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/8 transition-all duration-300 rounded-xl min-h-[120px] text-lg resize-none"
                      placeholder="Vertel ons over uw AI-visie, huidige uitdagingen en gewenste resultaten..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black hover:bg-premium-silver-light transition-all duration-300 px-8 py-6 text-xl font-semibold rounded-2xl group disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: isSubmitting ? 'rgba(255, 255, 255, 0.7)' : 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                        boxShadow: '0 12px 40px rgba(255, 255, 255, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                          Verzenden...
                        </div>
                      ) : (
                        <span className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                          Verstuur bericht
                          <Send className="ml-3 h-6 w-6" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Subtle reflection effect */}
              <div className="absolute top-full left-8 right-8 h-32 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10 scale-y-[-1] origin-top blur-sm"
                  style={{
                    background: `
                      linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.04) 100%),
                      radial-gradient(ellipse 600px 300px at 0% 0%, rgba(20, 184, 166, 0.02) 0%, transparent 50%),
                      radial-gradient(ellipse 400px 200px at 100% 100%, rgba(34, 211, 238, 0.015) 0%, transparent 50%)
                    `,
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

export default Contact;
