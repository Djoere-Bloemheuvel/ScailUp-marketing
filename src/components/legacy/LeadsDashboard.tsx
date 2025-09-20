import { useState, useEffect } from 'react';
import { leadService, Lead, supabase } from '@/lib/supabase';
import { Users, Mail, Phone, Calendar, Filter, Search, Download, Eye, Edit3, CheckCircle, Clock, MessageSquare, AlertCircle, Bell, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LeadAnalytics from './LeadAnalytics';

const LeadsDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, qualified: 0, closed: 0 });
  const [notifications, setNotifications] = useState<{id: string, message: string, time: Date}[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentView, setCurrentView] = useState<'leads' | 'analytics'>('leads');

  // Status colors and icons
  const statusConfig = {
    new: { color: 'text-blue-400 bg-blue-400/10', icon: AlertCircle, label: 'Nieuw' },
    contacted: { color: 'text-yellow-400 bg-yellow-400/10', icon: MessageSquare, label: 'Benaderd' },
    qualified: { color: 'text-purple-400 bg-purple-400/10', icon: CheckCircle, label: 'Gekwalificeerd' },
    closed: { color: 'text-green-400 bg-green-400/10', icon: CheckCircle, label: 'Gesloten' }
  };

  useEffect(() => {
    fetchLeads();
    fetchStats();

    // Set up real-time subscription for new leads
    const subscription = supabase
      .channel('leads-channel')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'leads'
        },
        (payload) => {
          const newLead = payload.new as Lead;
          setLeads(prevLeads => [newLead, ...prevLeads]);
          
          // Add notification
          const notification = {
            id: newLead.id || Math.random().toString(),
            message: `Nieuwe lead: ${newLead.your_name || newLead.company_email}`,
            time: new Date()
          };
          setNotifications(prev => [notification, ...prev.slice(0, 4)]); // Keep only 5 notifications
          
          // Refresh stats
          fetchStats();
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'leads'
        },
        (payload) => {
          const updatedLead = payload.new as Lead;
          setLeads(prevLeads => 
            prevLeads.map(lead => 
              lead.id === updatedLead.id ? updatedLead : lead
            )
          );
          
          // Add notification for status changes
          const notification = {
            id: updatedLead.id || Math.random().toString(),
            message: `Lead status gewijzigd: ${updatedLead.your_name || updatedLead.company_email}`,
            time: new Date()
          };
          setNotifications(prev => [notification, ...prev.slice(0, 4)]);
          
          // Refresh stats
          fetchStats();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    filterLeads();
  }, [leads, searchTerm, statusFilter]);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const data = await leadService.getLeads();
      setLeads(data);
      setError(null);
    } catch (err) {
      setError('Fout bij het laden van leads');
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const data = await leadService.getLeadStats();
      setStats(data);
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const filterLeads = () => {
    let filtered = [...leads];

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(lead => 
        lead.company_email?.toLowerCase().includes(term) ||
        lead.your_name?.toLowerCase().includes(term) ||
        lead.message?.toLowerCase().includes(term)
      );
    }

    setFilteredLeads(filtered);
  };

  const updateLeadStatus = async (id: string, newStatus: Lead['status']) => {
    try {
      await leadService.updateLeadStatus(id, newStatus);
      // Refresh leads and stats
      fetchLeads();
      fetchStats();
    } catch (err) {
      console.error('Error updating lead status:', err);
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Email', 'Naam', 'Telefoon', 'Bedrijfsgrootte', 'Product Interest', 'Bericht', 'Status', 'Datum'].join(','),
      ...filteredLeads.map(lead => [
        lead.company_email || '',
        lead.your_name || '',
        lead.phone_number || '',
        lead.company_size || '',
        lead.primary_product_interest || '',
        lead.message?.replace(/,/g, ';') || '',
        lead.status || '',
        new Date(lead.created_at || '').toLocaleDateString('nl-NL')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Onbekend';
    return new Date(dateString).toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p>Leads laden...</p>
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
              <h1 className="text-4xl font-bold mb-2">Lead Management</h1>
              <p className="text-gray-400">Beheer en volg al je inbound leads</p>
            </div>
            
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Bell className="w-6 h-6" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-4 border-b border-gray-800">
                      <h3 className="font-medium text-white">Notificaties</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-4 text-center text-gray-400">
                          Geen nieuwe notificaties
                        </div>
                      ) : (
                        notifications.map((notification, index) => (
                          <div key={notification.id} className="p-4 border-b border-gray-800 last:border-b-0">
                            <p className="text-sm text-white">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {notification.time.toLocaleTimeString('nl-NL')}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                    {notifications.length > 0 && (
                      <div className="p-3 border-t border-gray-800">
                        <button
                          onClick={() => setNotifications([])}
                          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Alle notificaties wissen
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setCurrentView('leads')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === 'leads'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Users className="w-4 h-4" />
              Leads
            </button>
            <button
              onClick={() => setCurrentView('analytics')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === 'analytics'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Analytics
            </button>
          </div>
        </div>

        {/* Conditional Content */}
        {currentView === 'analytics' ? (
          <LeadAnalytics />
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Totaal</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          
          {Object.entries(statusConfig).map(([status, config]) => {
            const Icon = config.icon;
            const count = stats[status as keyof typeof stats];
            return (
              <div key={status} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{config.label}</p>
                    <p className="text-2xl font-bold">{count}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${config.color.split(' ')[0]}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Zoek op email, naam of bericht..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Alle statussen</option>
            {Object.entries(statusConfig).map(([status, config]) => (
              <option key={status} value={status}>{config.label}</option>
            ))}
          </select>

          {/* Export Button */}
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Download className="w-5 h-5" />
            Export CSV
          </button>
        </div>

        {/* Leads Table */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Contact</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Bedrijf Info</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Bericht</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Datum</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Acties</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                        {searchTerm || statusFilter !== 'all' ? 'Geen leads gevonden met deze filters' : 'Nog geen leads ontvangen'}
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead, index) => {
                      const StatusIcon = statusConfig[lead.status as keyof typeof statusConfig]?.icon || Clock;
                      const statusColor = statusConfig[lead.status as keyof typeof statusConfig]?.color || 'text-gray-400 bg-gray-400/10';
                      
                      return (
                        <motion.tr
                          key={lead.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                        >
                          <td className="px-4 py-4">
                            <div>
                              <p className="font-medium">{lead.your_name || 'Geen naam'}</p>
                              <p className="text-sm text-blue-400">{lead.company_email}</p>
                              {lead.phone_number && (
                                <p className="text-sm text-gray-400">{lead.phone_number}</p>
                              )}
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
                          <td className="px-4 py-4 max-w-xs">
                            <p className="text-sm text-gray-300 truncate" title={lead.message}>
                              {lead.message || 'Geen bericht'}
                            </p>
                          </td>
                          <td className="px-4 py-4">
                            <select
                              value={lead.status || 'new'}
                              onChange={(e) => updateLeadStatus(lead.id!, e.target.value as Lead['status'])}
                              className={`px-3 py-1 rounded-full text-xs font-medium border-none outline-none ${statusColor}`}
                            >
                              {Object.entries(statusConfig).map(([status, config]) => (
                                <option key={status} value={status} className="bg-gray-800 text-white">
                                  {config.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-400">
                            {formatDate(lead.created_at)}
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex gap-2">
                              <button
                                className="p-1 text-gray-400 hover:text-blue-400 transition-colors"
                                title="Bekijk details"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                className="p-1 text-gray-400 hover:text-green-400 transition-colors"
                                title="Bewerk"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>

            {/* Summary */}
            <div className="mt-6 text-center text-gray-400">
              <p>Totaal {filteredLeads.length} van {leads.length} leads getoond</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadsDashboard;