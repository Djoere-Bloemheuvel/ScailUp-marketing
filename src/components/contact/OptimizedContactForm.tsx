
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectDetails: string;
}

interface OptimizedContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting: boolean;
}

const OptimizedContactForm = ({ onSubmit, isSubmitting }: OptimizedContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectDetails: ''
    });
  };

  return (
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
  );
};

export default OptimizedContactForm;
