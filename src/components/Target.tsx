
import { X, Check } from 'lucide-react';

const Target = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-premium-gray via-premium-black to-premium-gray-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Voor <span className="text-gradient">wie?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Niet voor */}
          <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-6 h-6 text-red-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Niet voor:</h3>
            <ul className="text-premium-silver/90 space-y-3 text-left">
              <li>• Quick fix zoekers</li>
              <li>• Budget-first beslissers</li>
              <li>• AI-skeptici</li>
              <li>• Eenmalige project hunters</li>
            </ul>
          </div>

          {/* Wel voor */}
          <div className="p-8 rounded-2xl border border-green-500/20 bg-green-500/5">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Wel voor:</h3>
            <ul className="text-premium-silver/90 space-y-3 text-left">
              <li>• Visionaire founders</li>
              <li>• Innovatieve B2B bedrijven</li>
              <li>• Agency owners met ambitie</li>
              <li>• Strategische consultants</li>
            </ul>
          </div>
        </div>

        <p className="text-premium-silver/80 text-lg mt-12 italic">
          "Als u op zoek bent naar partners die uw business écht begrijpen, 
          dan bent u op de juiste plek."
        </p>
      </div>
    </section>
  );
};

export default Target;
