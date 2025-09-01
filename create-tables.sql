-- ScailUp Marketing - Supabase Lead Management Schema
-- Create leads table for contact form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_email TEXT NOT NULL,
  your_name TEXT,
  phone_number TEXT,
  country TEXT,
  company_size TEXT,
  primary_product_interest TEXT,
  message TEXT,
  source TEXT DEFAULT 'ScailUp Marketing Contact Form',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create lead_interactions table for follow-up tracking
CREATE TABLE IF NOT EXISTS lead_interactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  interaction_type TEXT NOT NULL CHECK (interaction_type IN ('email', 'call', 'meeting', 'note')),
  interaction_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notes TEXT,
  created_by TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(company_email);
CREATE INDEX IF NOT EXISTS idx_lead_interactions_lead_id ON lead_interactions(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_interactions_date ON lead_interactions(interaction_date);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_interactions ENABLE ROW LEVEL SECURITY;

-- Create policies for leads table
-- Allow public to insert new leads (for contact form)
CREATE POLICY "Allow public insert on leads" ON leads
  FOR INSERT 
  WITH CHECK (true);

-- Allow authenticated users to view all leads
CREATE POLICY "Allow authenticated select on leads" ON leads
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Allow authenticated users to update leads
CREATE POLICY "Allow authenticated update on leads" ON leads
  FOR UPDATE 
  USING (auth.role() = 'authenticated');

-- Create policies for lead_interactions table
-- Allow authenticated users full access to interactions
CREATE POLICY "Allow authenticated all on lead_interactions" ON lead_interactions
  FOR ALL 
  USING (auth.role() = 'authenticated');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at on leads table
CREATE TRIGGER update_leads_updated_at 
  BEFORE UPDATE ON leads 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Create a view for lead analytics
CREATE OR REPLACE VIEW lead_analytics AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  COUNT(*) as total_leads,
  COUNT(*) FILTER (WHERE status = 'new') as new_leads,
  COUNT(*) FILTER (WHERE status = 'contacted') as contacted_leads,
  COUNT(*) FILTER (WHERE status = 'qualified') as qualified_leads,
  COUNT(*) FILTER (WHERE status = 'closed') as closed_leads,
  source
FROM leads 
GROUP BY DATE_TRUNC('day', created_at), source
ORDER BY date DESC;

-- Grant access to the analytics view
GRANT SELECT ON lead_analytics TO authenticated;

-- Success message
SELECT 'Supabase Lead Management schema created successfully!' as message;