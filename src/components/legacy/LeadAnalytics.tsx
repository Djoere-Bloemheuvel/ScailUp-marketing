import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Users, Target, Calendar, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { leadService } from '@/lib/supabase';

interface AnalyticsData {
  date: string;
  total_leads: number;
  new_leads: number;
  contacted_leads: number;
  qualified_leads: number;
  closed_leads: number;
  source: string;
}

const LeadAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [conversionRates, setConversionRates] = useState({
    newToContacted: 0,
    contactedToQualified: 0,
    qualifiedToClosed: 0,
    overallConversion: 0
  });
  const [leadSources, setLeadSources] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState(30);

  useEffect(() => {
    fetchAnalytics();
  }, [selectedPeriod]);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const [analytics, conversions, sources] = await Promise.all([
        leadService.getLeadAnalytics(selectedPeriod),
        leadService.getConversionRates(),
        leadService.getLeadSources()
      ]);

      setAnalyticsData(analytics);
      setConversionRates(conversions);
      setLeadSources(sources);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate trends
  const calculateTrend = (data: AnalyticsData[], field: keyof AnalyticsData) => {
    if (data.length < 2) return 0;
    
    const recent = data.slice(-7).reduce((sum, item) => sum + (item[field] as number || 0), 0);
    const previous = data.slice(-14, -7).reduce((sum, item) => sum + (item[field] as number || 0), 0);
    
    if (previous === 0) return 0;
    return Math.round(((recent - previous) / previous) * 100);
  };

  const totalLeadsTrend = calculateTrend(analyticsData, 'total_leads');
  const closedLeadsTrend = calculateTrend(analyticsData, 'closed_leads');

  if (loading) {
    return (
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Period Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Analytics & Rapportage</h2>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(Number(e.target.value))}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={7}>Laatste 7 dagen</option>
          <option value={30}>Laatste 30 dagen</option>
          <option value={90}>Laatste 90 dagen</option>
        </select>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-lg p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Totale Leads</p>
              <p className="text-2xl font-bold text-white">
                {analyticsData.reduce((sum, item) => sum + item.total_leads, 0)}
              </p>
              <div className="flex items-center mt-2">
                {totalLeadsTrend >= 0 ? (
                  <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                )}
                <span className={`text-sm ${totalLeadsTrend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {Math.abs(totalLeadsTrend)}%
                </span>
              </div>
            </div>
            <Users className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900 rounded-lg p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Gesloten Deals</p>
              <p className="text-2xl font-bold text-white">
                {analyticsData.reduce((sum, item) => sum + item.closed_leads, 0)}
              </p>
              <div className="flex items-center mt-2">
                {closedLeadsTrend >= 0 ? (
                  <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                )}
                <span className={`text-sm ${closedLeadsTrend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {Math.abs(closedLeadsTrend)}%
                </span>
              </div>
            </div>
            <Target className="w-8 h-8 text-green-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 rounded-lg p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Conversie Ratio</p>
              <p className="text-2xl font-bold text-white">{conversionRates.overallConversion}%</p>
              <p className="text-xs text-gray-400 mt-2">Lead naar gesloten deal</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900 rounded-lg p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Gem. per Dag</p>
              <p className="text-2xl font-bold text-white">
                {selectedPeriod > 0 ? 
                  Math.round(analyticsData.reduce((sum, item) => sum + item.total_leads, 0) / selectedPeriod) 
                  : 0
                }
              </p>
              <p className="text-xs text-gray-400 mt-2">Nieuwe leads per dag</p>
            </div>
            <Calendar className="w-8 h-8 text-yellow-400" />
          </div>
        </motion.div>
      </div>

      {/* Conversion Funnel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-900 rounded-lg p-6 border border-gray-800"
      >
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5" />
          Conversie Funnel
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-lg p-4 mb-2">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">Nieuwe Leads</p>
            </div>
            <div className="h-2 bg-blue-600 rounded"></div>
          </div>
          <div className="text-center">
            <div className="bg-yellow-600 text-white rounded-lg p-4 mb-2">
              <p className="text-2xl font-bold">{conversionRates.newToContacted}%</p>
              <p className="text-sm">Benaderd</p>
            </div>
            <div 
              className="h-2 bg-yellow-600 rounded"
              style={{ width: `${conversionRates.newToContacted}%` }}
            ></div>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 text-white rounded-lg p-4 mb-2">
              <p className="text-2xl font-bold">{conversionRates.contactedToQualified}%</p>
              <p className="text-sm">Gekwalificeerd</p>
            </div>
            <div 
              className="h-2 bg-purple-600 rounded"
              style={{ width: `${conversionRates.contactedToQualified}%` }}
            ></div>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-lg p-4 mb-2">
              <p className="text-2xl font-bold">{conversionRates.qualifiedToClosed}%</p>
              <p className="text-sm">Gesloten</p>
            </div>
            <div 
              className="h-2 bg-green-600 rounded"
              style={{ width: `${conversionRates.qualifiedToClosed}%` }}
            ></div>
          </div>
        </div>
      </motion.div>

      {/* Lead Sources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-900 rounded-lg p-6 border border-gray-800"
      >
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <PieChart className="w-5 h-5" />
          Lead Bronnen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(leadSources).map(([source, count], index) => {
            const total = Object.values(leadSources).reduce((sum, val) => sum + val, 0);
            const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
            
            return (
              <div key={source} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ 
                      backgroundColor: `hsl(${index * 60}, 70%, 50%)` 
                    }}
                  ></div>
                  <span className="text-gray-300">{source}</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">{count}</p>
                  <p className="text-gray-400 text-sm">{percentage}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Daily Trend Chart - Simplified text representation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-900 rounded-lg p-6 border border-gray-800"
      >
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Dagelijkse Trends (Laatste 7 dagen)
        </h3>
        <div className="space-y-2">
          {analyticsData.slice(-7).map((day, index) => (
            <div key={day.date} className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">
                {new Date(day.date).toLocaleDateString('nl-NL', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-blue-400 text-sm">{day.total_leads} leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-green-400 text-sm">{day.closed_leads} gesloten</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LeadAnalytics;