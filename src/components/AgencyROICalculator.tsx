import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const AgencyROICalculator = () => {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [results, setResults] = useState({
    weeklySpend: 0,
    yearlySpend: 0,
    yearlySavings: 0,
    roi: 0,
    paybackPeriod: 0
  });

  // AI automation typically saves 70-80% of manual work
  const automationEfficiency = 0.75;
  const averageProjectCost = 25000; // Average custom AI project cost

  useEffect(() => {
    const weeklySpend = teamSize * hoursPerWeek * hourlyRate;
    const yearlySpend = weeklySpend * 52;
    const yearlySavings = yearlySpend * automationEfficiency;
    const roi = ((yearlySavings - averageProjectCost) / averageProjectCost) * 100;
    const paybackPeriod = averageProjectCost / (yearlySavings / 12);

    setResults({
      weeklySpend,
      yearlySpend,
      yearlySavings,
      roi,
      paybackPeriod
    });
  }, [teamSize, hoursPerWeek, hourlyRate]);

  return (
    <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 sm:p-8">
      
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
          <Calculator className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">ROI Calculator</h3>
          <p className="text-gray-400 text-sm">Bereken je besparing in 30 seconden</p>
        </div>
      </div>

      {/* Input Controls */}
      <div className="space-y-6 mb-8">
        
        {/* Team Size */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-400" />
              <label className="text-white font-medium text-sm">Team grootte</label>
            </div>
            <span className="text-blue-400 font-semibold">{teamSize} personen</span>
          </div>
          <input
            type="range"
            min="2"
            max="20"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((teamSize - 2) / 18) * 100}%, #374151 ${((teamSize - 2) / 18) * 100}%, #374151 100%)`
            }}
          />
        </div>

        {/* Hours per Week */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <label className="text-white font-medium text-sm">Uren/week aan repetitief werk</label>
            </div>
            <span className="text-purple-400 font-semibold">{hoursPerWeek}h</span>
          </div>
          <input
            type="range"
            min="5"
            max="40"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${((hoursPerWeek - 5) / 35) * 100}%, #374151 ${((hoursPerWeek - 5) / 35) * 100}%, #374151 100%)`
            }}
          />
        </div>

        {/* Hourly Rate */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-green-400" />
              <label className="text-white font-medium text-sm">Gemiddeld uurtarief</label>
            </div>
            <span className="text-green-400 font-semibold">€{hourlyRate}</span>
          </div>
          <input
            type="range"
            min="30"
            max="150"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #10b981 0%, #10b981 ${((hourlyRate - 30) / 120) * 100}%, #374151 ${((hourlyRate - 30) / 120) * 100}%, #374151 100%)`
            }}
          />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-4">
            <div className="text-blue-400 text-sm font-medium mb-1">Huidige kosten</div>
            <div className="text-white text-xl font-bold">€{results.yearlySpend.toLocaleString()}</div>
            <div className="text-gray-400 text-xs">per jaar</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-4">
            <div className="text-green-400 text-sm font-medium mb-1">Jaarlijkse besparing</div>
            <div className="text-white text-xl font-bold">€{results.yearlySavings.toLocaleString()}</div>
            <div className="text-green-400 text-xs">+{Math.round(automationEfficiency * 100)}% efficiency</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-purple-400 text-sm font-medium mb-1">ROI na 1 jaar</div>
              <div className="text-white text-2xl font-bold">
                {results.roi > 0 ? '+' : ''}{Math.round(results.roi)}%
              </div>
              <div className="text-gray-400 text-xs">
                Terugverdientijd: {results.paybackPeriod.toFixed(1)} maanden
              </div>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div 
        className="mt-6 pt-6 border-t border-gray-700"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.location.href = '/contact';
            }
          }}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center"
        >
          Plan je €{Math.round(results.yearlySavings / 1000)}K besparing
        </button>
      </motion.div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid #1f2937;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid #1f2937;
        }
      `}</style>
    </div>
  );
};

export default AgencyROICalculator;