
import ContactForm from '../ContactForm';

interface ContactFormContainerProps {
  onSuccess: () => void;
}

const ContactFormContainer = ({ onSuccess }: ContactFormContainerProps) => {
  return (
    <main className="flex-1">
      <div 
        className="relative rounded-3xl p-8 sm:p-10 backdrop-blur-xl"
        style={{
          background: `
            linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%),
            radial-gradient(ellipse 400px 200px at 0% 0%, rgba(20, 184, 166, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 300px 150px at 100% 100%, rgba(34, 211, 238, 0.06) 0%, transparent 50%)
          `,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: `
            0 20px 40px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(20, 184, 166, 0.1)
          `
        }}
      >
        {/* Subtle inner glow */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 600px 300px at 50% 0%, rgba(20, 184, 166, 0.02) 0%, transparent 70%)',
          }}
        />
        
        <div className="relative z-10">
          <ContactForm onSuccess={onSuccess} />
        </div>

        {/* Apple-style highlight accents */}
        <div className="absolute top-4 left-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
        <div className="absolute top-4 left-4 w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        
        <div className="absolute bottom-4 right-4 w-8 h-px bg-gradient-to-l from-teal-400/30 to-transparent" />
        <div className="absolute bottom-4 right-4 w-px h-8 bg-gradient-to-t from-teal-400/30 to-transparent" />
      </div>
    </main>
  );
};

export default ContactFormContainer;
