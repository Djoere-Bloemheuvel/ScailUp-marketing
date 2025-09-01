import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, FileText, Eye, Calendar, Search, Plus, Edit, Trash2, Globe, Target, Users, UserPlus, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadService, Lead } from '@/lib/supabase';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'landing' | 'social' | 'email';
  status: 'draft' | 'published' | 'scheduled';
  views: number;
  publishDate: string;
  seoScore: number;
  keywords: string[];
}

const MarketingDashboard = () => {
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<'overview' | 'content' | 'leads'>('overview');
  const [stats, setStats] = useState({
    totalContent: 0,
    publishedContent: 0,
    totalViews: 0,
    avgSeoScore: 0,
    scheduledContent: 0,
    totalLeads: 0,
    newLeads: 0,
    leadConversion: 0
  });

  const contentTypes = {
    blog: { label: 'Blog Posts', icon: FileText, color: 'text-blue-400' },
    landing: { label: 'Landing Pages', icon: Globe, color: 'text-green-400' },
    social: { label: 'Social Media', icon: Users, color: 'text-purple-400' },
    email: { label: 'Email Campaigns', icon: Target, color: 'text-orange-400' }
  };

  const statusConfig = {
    draft: { label: 'Concept', color: 'bg-gray-600 text-gray-300' },
    published: { label: 'Gepubliceerd', color: 'bg-green-600 text-green-100' },
    scheduled: { label: 'Ingepland', color: 'bg-blue-600 text-blue-100' }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch real leads data
      const leadsData = await leadService.getLeads({ limit: 50 });
      setLeads(leadsData);

      // Mock content data
      const mockContent: ContentItem[] = [
        {
          id: '1',
          title: 'AI Automatisering voor B2B Sales - Complete Gids',
          type: 'blog',
          status: 'published',
          views: 1250,
          publishDate: '2025-01-15',
          seoScore: 85,
          keywords: ['AI automatisering', 'B2B sales', 'lead generatie']
        },
        {
          id: '2',
          title: 'ScailUp Lead Engine Landing Page',
          type: 'landing',
          status: 'published',
          views: 850,
          publishDate: '2025-01-10',
          seoScore: 92,
          keywords: ['lead engine', 'AI leads', 'automatisering']
        },
        {
          id: '3',
          title: 'LinkedIn Outreach Campagne Q1',
          type: 'social',
          status: 'scheduled',
          views: 0,
          publishDate: '2025-02-01',
          seoScore: 78,
          keywords: ['LinkedIn', 'outreach', 'B2B']
        }
      ];

      setContentItems(mockContent);
      
      // Calculate combined stats
      const recentLeads = leadsData.filter(lead => 
        new Date(lead.created_at || '').getTime() > Date.now() - (7 * 24 * 60 * 60 * 1000)
      );
      
      const stats = {
        totalContent: mockContent.length,
        publishedContent: mockContent.filter(item => item.status === 'published').length,
        totalViews: mockContent.reduce((sum, item) => sum + item.views, 0),
        avgSeoScore: Math.round(mockContent.reduce((sum, item) => sum + item.seoScore, 0) / mockContent.length),
        scheduledContent: mockContent.filter(item => item.status === 'scheduled').length,
        totalLeads: leadsData.length,
        newLeads: recentLeads.length,
        leadConversion: leadsData.length > 0 ? Math.round((leadsData.filter(l => l.status === 'closed').length / leadsData.length) * 100) : 0
      };
      setStats(stats);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSeoScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p>Dashboard laden...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Marketing Dashboard</h1>
              <p className="text-gray-400">Overzicht van content, leads en marketing prestaties</p>
            </div>
            <button 
              onClick={fetchData}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Vernieuwen
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setCurrentView('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Overzicht
            </button>
            <button
              onClick={() => setCurrentView('leads')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === 'leads'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              Inbound Leads ({stats.totalLeads})
            </button>
            <button
              onClick={() => setCurrentView('content')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === 'content'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              Content
            </button>
          </div>
        </div>

        {/* Overview View */}
        {currentView === 'overview' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Inbound Leads</p>
                    <p className="text-3xl font-bold">{stats.totalLeads}</p>
                    <p className="text-blue-100 text-sm">{stats.newLeads} nieuwe deze week</p>
                  </div>
                  <UserPlus className="w-10 h-10 text-blue-200" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Conversie Rate</p>
                    <p className="text-3xl font-bold">{stats.leadConversion}%</p>
                    <p className="text-green-100 text-sm">Lead naar klant</p>
                  </div>
                  <Target className="w-10 h-10 text-green-200" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">Content Views</p>
                    <p className="text-3xl font-bold">{stats.totalViews.toLocaleString()}</p>
                    <p className="text-purple-100 text-sm">Totale weergaves</p>
                  </div>
                  <Eye className="w-10 h-10 text-purple-200" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-6 text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm font-medium">SEO Score</p>
                    <p className="text-3xl font-bold">{stats.avgSeoScore}%</p>
                    <p className="text-orange-100 text-sm">Gemiddeld</p>
                  </div>
                  <BarChart3 className="w-10 h-10 text-orange-200" />
                </div>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Recent Leads */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-blue-400" />
                  Recente Inbound Leads
                </h3>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {leads.slice(0, 5).map((lead, index) => (
                    <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {(lead.your_name || lead.company_email)?.[0]?.toUpperCase() || '?'}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-white">{lead.your_name || 'Geen naam'}</p>
                          <p className="text-sm text-gray-400">{lead.company_email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          lead.status === 'new' ? 'bg-blue-600 text-blue-100' :
                          lead.status === 'contacted' ? 'bg-yellow-600 text-yellow-100' :
                          lead.status === 'qualified' ? 'bg-purple-600 text-purple-100' :
                          'bg-green-600 text-green-100'
                        }`}>
                          {lead.status === 'new' ? 'Nieuw' :
                           lead.status === 'contacted' ? 'Contact' :
                           lead.status === 'qualified' ? 'Gekwalificeerd' : 'Gesloten'}
                        </span>
                      </div>
                    </div>
                  ))}
                  {leads.length === 0 && (
                    <div className="text-center py-8 text-gray-400">
                      <UserPlus className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Nog geen leads ontvangen</p>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => setCurrentView('leads')}
                  className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Alle Leads Bekijken
                </button>
              </motion.div>

              {/* Content Performance */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-400" />
                  Top Content
                </h3>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {contentItems
                    .filter(item => item.status === 'published')
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 3)
                    .map((item, index) => (
                    <div key={item.id} className="p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white truncate">{item.title}</h4>
                        <span className="text-sm text-gray-400">{item.views} views</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.type === 'blog' ? 'bg-blue-600 text-blue-100' :
                          item.type === 'landing' ? 'bg-green-600 text-green-100' :
                          item.type === 'social' ? 'bg-purple-600 text-purple-100' :
                          'bg-orange-600 text-orange-100'
                        }`}>
                          {contentTypes[item.type].label}
                        </span>
                        <span className={`text-sm font-medium ${getSeoScoreColor(item.seoScore)}`}>
                          SEO: {item.seoScore}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentView('content')}
                  className="mt-4 w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                >
                  Alle Content Beheren
                </button>
              </motion.div>
            </div>
          </>
        )}

        {/* Leads View */}
        {currentView === 'leads' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
          >
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <UserPlus className="w-6 h-6 text-blue-400" />
              Alle Inbound Leads ({stats.totalLeads})
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 border-b border-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Contact</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Bedrijf</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Datum</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Bericht</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr key={lead.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {(lead.your_name || lead.company_email)?.[0]?.toUpperCase() || '?'}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-white">{lead.your_name || 'Geen naam'}</p>
                            <p className="text-sm text-blue-400">{lead.company_email}</p>
                            {lead.phone_number && (
                              <p className="text-sm text-gray-400">{lead.phone_number}</p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm">
                          {lead.company_size && (
                            <p className="text-gray-300">Grootte: {lead.company_size}</p>
                          )}
                          {lead.primary_product_interest && (
                            <p className="text-gray-300">Interest: {lead.primary_product_interest}</p>
                          )}
                          {lead.country && (
                            <p className="text-gray-400">Land: {lead.country}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          lead.status === 'new' ? 'bg-blue-600 text-blue-100' :
                          lead.status === 'contacted' ? 'bg-yellow-600 text-yellow-100' :
                          lead.status === 'qualified' ? 'bg-purple-600 text-purple-100' :
                          'bg-green-600 text-green-100'
                        }`}>
                          {lead.status === 'new' ? 'Nieuw' :
                           lead.status === 'contacted' ? 'Benaderd' :
                           lead.status === 'qualified' ? 'Gekwalificeerd' : 'Gesloten'}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-400">
                        {new Date(lead.created_at || '').toLocaleDateString('nl-NL')}
                      </td>
                      <td className="px-4 py-4 max-w-xs">
                        <p className="text-sm text-gray-300 truncate" title={lead.message}>
                          {lead.message || 'Geen bericht'}
                        </p>
                      </td>
                    </tr>
                  ))}
                  {leads.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-4 py-12 text-center text-gray-400">
                        <UserPlus className="w-16 h-16 mx-auto mb-4 opacity-30" />
                        <p className="text-lg font-medium mb-2">Nog geen leads ontvangen</p>
                        <p>Leads van het contactformulier verschijnen hier automatisch</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Content View */}
        {currentView === 'content' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-400" />
                Content Management
              </h2>
              
              <div className="space-y-4">
                {contentItems.map((item, index) => (
                  <div key={item.id} className="p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          item.type === 'blog' ? 'bg-blue-600' :
                          item.type === 'landing' ? 'bg-green-600' :
                          item.type === 'social' ? 'bg-purple-600' :
                          'bg-orange-600'
                        }`}>
                          {React.createElement(contentTypes[item.type].icon, { className: 'w-5 h-5 text-white' })}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{item.title}</h3>
                          <p className="text-sm text-gray-400">{contentTypes[item.type].label}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[item.status].color}`}>
                          {statusConfig[item.status].label}
                        </span>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">{item.views}</span>
                        </div>
                        <span className={`text-sm font-medium ${getSeoScoreColor(item.seoScore)}`}>
                          {item.seoScore}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.keywords.map((keyword, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MarketingDashboard;