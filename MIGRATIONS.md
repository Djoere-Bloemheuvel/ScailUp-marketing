# Database Migrations Guide

This document explains how to manage database migrations for the Buildrs marketing website.

## Overview

We use a hybrid approach combining Drizzle ORM schema definitions with manual SQL migrations due to disk space constraints.

## File Structure

```
src/
├── db/
│   ├── schema.ts      # Drizzle schema definitions
│   └── migrate.sql    # SQL migration file
└── lib/
    └── supabaseServer.ts  # Supabase client (current implementation)
```

## Current Setup

### 1. Schema Definition (`src/db/schema.ts`)
Contains the Drizzle ORM schema definition for the `leads` table with proper TypeScript types.

### 2. Migration SQL (`src/db/migrate.sql`)
Contains the actual SQL statements to create the database structure with:
- Table creation
- Indexes for performance
- Row Level Security (RLS) policies
- Documentation comments

## How to Run Migrations

### Step 1: Access Supabase Dashboard
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `mvkvzehtbqtpxeknfava`
3. Navigate to SQL Editor

### Step 2: Execute Migration
1. Copy the contents of `src/db/migrate.sql`
2. Paste into a new SQL query in Supabase
3. Click "Run" to execute the migration

### Step 3: Verify Migration
Check that the following were created:
- `leads` table with all columns
- Indexes on email, created_at, source, utm_source, utm_campaign
- RLS policies enabled

## Database Schema

### Leads Table
| Column | Type | Required | Description |
|--------|------|----------|-------------|
| id | UUID | Yes | Primary key (auto-generated) |
| name | VARCHAR(255) | Yes | Lead's full name |
| email | VARCHAR(255) | Yes | Lead's email address |
| company | VARCHAR(255) | No | Company name |
| message | TEXT | No | Lead's message |
| source | VARCHAR(255) | Yes | Page where lead was captured |
| utm_source | VARCHAR(255) | No | UTM source parameter |
| utm_medium | VARCHAR(255) | No | UTM medium parameter |
| utm_campaign | VARCHAR(255) | No | UTM campaign parameter |
| utm_term | VARCHAR(255) | No | UTM term parameter |
| utm_content | VARCHAR(255) | No | UTM content parameter |
| created_at | TIMESTAMP | Yes | Auto-generated timestamp |

## Security

### Row Level Security (RLS)
The table has RLS enabled with two policies:
1. **Service Role**: Full access for backend operations
2. **Anonymous Insert**: Allows form submissions from website

### Environment Variables Required
```env
SUPABASE_URL=https://mvkvzehtbqtpxeknfava.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Future Improvements

When disk space allows, consider:
1. Installing full Drizzle Kit for automated migrations
2. Setting up migration versioning system
3. Adding database seeding capabilities
4. Implementing schema validation checks

## Troubleshooting

### Migration Fails
- Check Supabase project permissions
- Verify service role key is valid
- Ensure no syntax errors in SQL

### Form Submissions Not Working
- Verify RLS policies are active
- Check environment variables
- Test API endpoint manually

### Performance Issues
- Monitor index usage
- Add additional indexes if needed
- Consider partitioning for large datasets

## Testing

To test the migration:
1. Run the migration SQL in Supabase
2. Test form submission on `/marketing-bureau`
3. Check data appears in Supabase dashboard
4. Verify n8n webhook receives data

## Backup Strategy

Before running migrations:
1. Export existing data if any
2. Test migration on development database first
3. Keep backup of current schema
4. Document any manual changes made