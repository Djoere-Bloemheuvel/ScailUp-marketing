import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cwgbgvulfiwbydpinbqf.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3Z2JndnVsZml3YnlkcGluYnFmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjI5MTk2NywiZXhwIjoyMDcxODY3OTY3fQ.lVuGHu7oOzkGLlvgioJ_cl2CbG5mXIW7_EDbqMTm7XU';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testAndCreateTables() {
  console.log('🔍 Checking if leads table exists...');
  
  // Test if leads table exists by trying to select from it
  const { data: existingData, error: selectError } = await supabase
    .from('leads')
    .select('id')
    .limit(1);
    
  if (selectError && selectError.code === 'PGRST116') {
    console.log('❌ Leads table does not exist. Creating tables...');
    
    // Create the leads table using SQL
    const { data: createResult, error: createError } = await supabase.rpc('exec_sql', {
      sql: `
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
      `
    });
    
    if (createError) {
      console.error('❌ Error creating table:', createError);
    } else {
      console.log('✅ Leads table created successfully!');
    }
  } else if (selectError) {
    console.error('❌ Error checking table:', selectError);
  } else {
    console.log('✅ Leads table already exists!');
    console.log(`📊 Current leads count: ${existingData?.length || 0}`);
  }
  
  // Test a simple query
  const { data: testData, error: testError } = await supabase
    .from('leads')
    .select('*')
    .limit(5);
    
  if (testError) {
    console.error('❌ Error querying leads:', testError);
  } else {
    console.log(`✅ Successfully queried leads table. Found ${testData?.length || 0} leads.`);
    if (testData && testData.length > 0) {
      console.log('📝 Sample lead:', testData[0]);
    }
  }
}

testAndCreateTables().catch(console.error);