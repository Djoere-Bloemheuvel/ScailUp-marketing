import { motion } from 'framer-motion';

const PricingSection = () => {
  return (
    <section className="relative bg-black py-24 lg:py-40 overflow-hidden ambient">
      {/* Ambient Background Lights - Service Colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main service orbs - matching the 3 agents */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/40 to-pink-600/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/40 to-blue-400/40 rounded-full blur-3xl opacity-65"></div>
        <div className="absolute top-1/3 right-1/4 w-88 h-88 bg-gradient-to-r from-blue-400/35 to-purple-500/35 rounded-full blur-3xl opacity-55 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        
        {/* Secondary ambient glows - service color combinations */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-400/15 via-purple-500/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-br from-blue-500/25 to-blue-400/25 rounded-full blur-2xl opacity-75 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-tr from-purple-500/22 to-pink-600/22 rounded-full blur-2xl opacity-80 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Corner service glows */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-xl opacity-45"></div>
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-blue-500/30 to-transparent rounded-full blur-xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-tr from-blue-400/25 to-transparent rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-600/25 to-transparent rounded-full blur-xl opacity-45"></div>
        
        {/* Subtle fade to black overlays */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="relative w-full z-20 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          

          {/* Single Large Container - Vercel Style - Responsive */}
          <div className="border border-white/5 sm:border-2 rounded-xl sm:rounded-2xl overflow-hidden bg-[#0a0a0a] shadow-[0_0_20px_rgba(192,192,192,0.08)] sm:shadow-[0_0_30px_rgba(192,192,192,0.12)]">
            
            {/* Top Section - 3 Pricing Blocks */}
            <div className="flex">
              
              {/* Block 1: Pilot */}
              <div className="flex-1 min-w-0 border-r border-white/5 flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-white/5 to-white/10 border-b border-white/10 px-4 sm:px-6 py-4 sm:py-5 text-center flex-shrink-0">
                  <h3 className="text-white font-bold text-lg sm:text-xl">Start your Lead Engine</h3>
                  <p className="text-white/60 text-sm mt-1">Voor starters</p>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                  {/* Price */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">€997</span>
                      <span className="text-white/60 text-base sm:text-lg">/maand</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Perfect om te starten</h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                      Test de kracht van geautomatiseerde leadgeneratie. Ideaal voor kleine teams.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 min-h-0">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">500 leads per maand</span>
                          <span className="text-white/60 text-xs sm:text-sm">Gekwalificeerde prospects</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">Email automation</span>
                          <span className="text-white/60 text-xs sm:text-sm">5 gepersonaliseerde sequences</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">LinkedIn outreach</span>
                          <span className="text-white/60 text-xs sm:text-sm">Basic connectie requests</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">Setup & ondersteuning</span>
                          <span className="text-white/60 text-xs sm:text-sm">Onboarding + email support</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300">
                      Start pilot
                    </button>
                  </div>
                </div>
              </div>

              {/* Block 2: Lead Engine */}
              <div className="flex-1 min-w-0 border-r border-white/5 flex flex-col">
                
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/10 border-b border-blue-400/20 px-4 sm:px-6 py-4 sm:py-5 text-center flex-shrink-0">
                  <h3 className="text-white font-bold text-lg sm:text-xl">Grow Your Lead Engine</h3>
                  <p className="text-white/60 text-sm mt-1">Meest populair</p>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                  {/* Price */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">€2.497</span>
                      <span className="text-white/60 text-base sm:text-lg">/maand</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Voor groeiende teams</h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                      Volledige Lead Engine. Meer leads, betere kwaliteit, volledig geautomatiseerd.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 min-h-0">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500/40 to-blue-400/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">1.000 leads per maand</span>
                          <span className="text-white/60 text-xs sm:text-sm">Premium database + AI scoring</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500/40 to-blue-400/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">Email-to-meeting automatie</span>
                          <span className="text-white/60 text-xs sm:text-sm">Volledige follow-up tot afspraak</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500/40 to-blue-400/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">LinkedIn op autopilot</span>
                          <span className="text-white/60 text-xs sm:text-sm">Geavanceerde outreach sequences</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500/40 to-blue-400/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">Advanced analytics</span>
                          <span className="text-white/60 text-xs sm:text-sm">ROI tracking + CRM sync</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 shadow-xl">
                      Start nu
                    </button>
                  </div>
                </div>
              </div>

              {/* Block 3: Enterprise */}
              <div className="flex-1 min-w-0 flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-400/10 border-b border-purple-400/20 px-4 sm:px-6 py-4 sm:py-5 text-center flex-shrink-0">
                  <h3 className="text-white font-bold text-lg sm:text-xl">Enterprise</h3>
                  <p className="text-white/60 text-sm mt-1">Op maat</p>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                  {/* Price */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Custom</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Voor enterprise organisaties</h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                      Onbeperkte mogelijkheden, volledig naar jouw wensen. White-label + dedicated support.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 min-h-0">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">Unlimited alles</span>
                          <span className="text-white/60 text-xs sm:text-sm">Leads, campaigns, integraties, users</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">White-label platform</span>
                          <span className="text-white/60 text-xs sm:text-sm">Jouw branding, onze technologie</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">Custom development</span>
                          <span className="text-white/60 text-xs sm:text-sm">API access + maatwerk integraties</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-medium text-sm sm:text-base block">Enterprise support</span>
                          <span className="text-white/60 text-xs sm:text-sm">Dedicated team + SLA garanties</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300">
                      Neem contact op
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilot Banner Section */}
            <div className="border-t border-white/5">
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 border-b border-emerald-400/20 px-4 sm:px-6 py-4 sm:py-5 text-center flex-shrink-0">
                <h3 className="text-white font-bold text-lg sm:text-xl">14-Dagen Pilot</h3>
                <p className="text-white/60 text-sm mt-1">Geen risico</p>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center">
                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline gap-2 mb-3 justify-center">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">€497</span>
                    <span className="text-white/60 text-base sm:text-lg">eenmalig</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Full power ervaring</h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Als je geen meeting boekt en ontevreden bent krijg je geld terug. Test alle features 14 dagen lang.
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 min-h-0 mb-6">
                  <ul className="space-y-3 flex flex-wrap gap-6 justify-center">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-emerald-500/30 to-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-white font-medium text-sm sm:text-base block">2.000 leads</span>
                        <span className="text-white/60 text-xs sm:text-sm">Gekwalificeerde prospects</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-emerald-500/30 to-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-white font-medium text-sm sm:text-base block">2.000 emails</span>
                        <span className="text-white/60 text-xs sm:text-sm">Gepersonaliseerde campagnes</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-emerald-500/30 to-emerald-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-white font-medium text-sm sm:text-base block">200 LinkedIn berichten</span>
                        <span className="text-white/60 text-xs sm:text-sm">Professionele outreach</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-white/10">
                  <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-bold transition-all duration-300 shadow-xl">
                    Start je Pilot
                  </button>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-white/5 sm:border-t-2"></div>

            {/* Middle Section - Empty */}
            <div className="pt-12 sm:pt-14 lg:pt-16 xl:pt-20 px-4 sm:px-6 lg:px-8 xl:px-12 pb-4 sm:pb-6 lg:pb-8 xl:pb-12">
              {/* Empty content area */}
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-white/5 sm:border-t-2"></div>

            {/* Raycast-style Benefits Section */}
            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                
                {/* Left: Main Message */}
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    Het gaat niet om tijd besparen.
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/60 leading-tight">
                    Het gaat erom dat je nooit meer het gevoel hebt dat je tijd verspilt.
                  </p>
                  
                  <div className="mt-6 sm:mt-8">
                    <button className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      Start Automation
                    </button>
                  </div>
                </div>

                {/* Right: Benefits Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { title: 'Snel.', desc: 'Deploy AI in seconden.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { title: 'Ergonomisch.', desc: 'AI first.', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z' },
                    { title: 'Natuurlijk.', desc: 'Pure prestaties.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
                    { title: 'Betrouwbaar.', desc: '99.8% uptime.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
                  ].map((benefit) => (
                    <div key={benefit.title} className="bg-black/40 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-200">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                        </svg>
                      </div>
                      <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">{benefit.title}</h4>
                      <p className="text-white/60 text-xs sm:text-sm">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;