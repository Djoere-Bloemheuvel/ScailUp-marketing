import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://cwgbgvulfiwbydpinbqf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3Z2JndnVsZml3YnlkcGluYnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTE5NjcsImV4cCI6MjA3MTg2Nzk2N30.ISnvwVNQ8es49fh5vm1HfmSHDCzXEa1eqiOqVRPBr-Y';

// Create Supabase client with real-time configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});

// Database types for TypeScript
export interface Lead {
  id?: string;
  company_email: string;
  your_name?: string;
  phone_number?: string;
  country?: string;
  company_size?: string;
  primary_product_interest?: string;
  message?: string;
  source?: string;
  status?: 'new' | 'contacted' | 'qualified' | 'closed';
  created_at?: string;
  updated_at?: string;
}

export interface LeadInteraction {
  id?: string;
  lead_id: string;
  interaction_type: 'email' | 'call' | 'meeting' | 'note';
  interaction_date?: string;
  notes?: string;
  created_by?: string;
}

// Lead management functions
export const leadService = {
  // Create a new lead
  async createLead(lead: Omit<Lead, 'id' | 'created_at' | 'updated_at'>): Promise<Lead | null> {
    const { data, error } = await supabase
      .from('leads')
      .insert([{
        ...lead,
        status: lead.status || 'new',
        source: lead.source || 'ScailUp Marketing Contact Form'
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating lead:', error);
      return null;
    }

    return data;
  },

  // Get all leads with optional filters
  async getLeads(filters?: {
    status?: string;
    source?: string;
    limit?: number;
  }): Promise<Lead[]> {
    let query = supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (filters?.status) {
      query = query.eq('status', filters.status);
    }

    if (filters?.source) {
      query = query.eq('source', filters.source);
    }

    if (filters?.limit) {
      query = query.limit(filters.limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching leads:', error);
      return [];
    }

    return data || [];
  },

  // Update lead status
  async updateLeadStatus(id: string, status: Lead['status']): Promise<boolean> {
    const { error } = await supabase
      .from('leads')
      .update({ 
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating lead status:', error);
      return false;
    }

    return true;
  },

  // Add interaction to lead
  async addInteraction(interaction: Omit<LeadInteraction, 'id' | 'interaction_date'>): Promise<boolean> {
    const { error } = await supabase
      .from('lead_interactions')
      .insert([{
        ...interaction,
        interaction_date: new Date().toISOString()
      }]);

    if (error) {
      console.error('Error adding interaction:', error);
      return false;
    }

    return true;
  },

  // Get lead with interactions
  async getLeadWithInteractions(id: string): Promise<Lead & { interactions?: LeadInteraction[] } | null> {
    const { data: lead, error: leadError } = await supabase
      .from('leads')
      .select('*')
      .eq('id', id)
      .single();

    if (leadError) {
      console.error('Error fetching lead:', leadError);
      return null;
    }

    const { data: interactions, error: interactionsError } = await supabase
      .from('lead_interactions')
      .select('*')
      .eq('lead_id', id)
      .order('interaction_date', { ascending: false });

    if (interactionsError) {
      console.error('Error fetching interactions:', interactionsError);
    }

    return {
      ...lead,
      interactions: interactions || []
    };
  },

  // Check for duplicate email
  async checkDuplicateEmail(email: string): Promise<Lead | null> {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .eq('company_email', email)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows found
      console.error('Error checking duplicate email:', error);
      return null;
    }

    return data;
  },

  // Analytics functions
  async getLeadStats(): Promise<{
    total: number;
    new: number;
    contacted: number;
    qualified: number;
    closed: number;
  }> {
    const { data, error } = await supabase
      .from('leads')
      .select('status');

    if (error) {
      console.error('Error fetching lead stats:', error);
      return { total: 0, new: 0, contacted: 0, qualified: 0, closed: 0 };
    }

    const stats = data.reduce((acc, lead) => {
      acc.total++;
      acc[lead.status as keyof typeof acc]++;
      return acc;
    }, { total: 0, new: 0, contacted: 0, qualified: 0, closed: 0 });

    return stats;
  },

  // Get lead analytics by date
  async getLeadAnalytics(days: number = 30) {
    const { data, error } = await supabase
      .from('lead_analytics')
      .select('*')
      .gte('date', new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching lead analytics:', error);
      return [];
    }

    return data || [];
  },

  // Get conversion rates
  async getConversionRates() {
    const { data, error } = await supabase
      .from('leads')
      .select('status, created_at')
      .gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());

    if (error) {
      console.error('Error fetching conversion data:', error);
      return {
        newToContacted: 0,
        contactedToQualified: 0,
        qualifiedToClosed: 0,
        overallConversion: 0
      };
    }

    const totalLeads = data.length;
    const contacted = data.filter(lead => ['contacted', 'qualified', 'closed'].includes(lead.status || '')).length;
    const qualified = data.filter(lead => ['qualified', 'closed'].includes(lead.status || '')).length;
    const closed = data.filter(lead => lead.status === 'closed').length;

    return {
      newToContacted: totalLeads > 0 ? Math.round((contacted / totalLeads) * 100) : 0,
      contactedToQualified: contacted > 0 ? Math.round((qualified / contacted) * 100) : 0,
      qualifiedToClosed: qualified > 0 ? Math.round((closed / qualified) * 100) : 0,
      overallConversion: totalLeads > 0 ? Math.round((closed / totalLeads) * 100) : 0
    };
  },

  // Get lead sources analytics
  async getLeadSources() {
    const { data, error } = await supabase
      .from('leads')
      .select('source')
      .gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());

    if (error) {
      console.error('Error fetching lead sources:', error);
      return {};
    }

    const sources = data.reduce((acc: Record<string, number>, lead) => {
      const source = lead.source || 'Unknown';
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {});

    return sources;
  }
};

// Authentication functions
export const authService = {
  // Sign up a new user
  async signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) {
      console.error('Error signing up:', error);
      return { user: null, error: error.message };
    }
    
    return { user: data.user, error: null };
  },

  // Sign in a user
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      console.error('Error signing in:', error);
      return { user: null, session: null, error: error.message };
    }
    
    return { user: data.user, session: data.session, error: null };
  },

  // Sign out the current user
  async signOut() {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error('Error signing out:', error);
      return { error: error.message };
    }
    
    return { error: null };
  },

  // Get the current user
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error('Error getting current user:', error);
      return { user: null, error: error.message };
    }
    
    return { user, error: null };
  },

  // Get the current session
  async getSession() {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Error getting session:', error);
      return { session: null, error: error.message };
    }
    
    return { session, error: null };
  },

  // Listen to auth state changes
  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  }
};