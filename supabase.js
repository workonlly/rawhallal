import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://akqmahrvurcswatrffln.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

console.log('Supabase configuration:');
console.log('URL:', supabaseUrl);
console.log('Key exists:', !!supabaseKey);
console.log('Key preview:', supabaseKey?.substring(0, 20) + '...');

if (!supabaseKey) {
  console.error('NEXT_PUBLIC_SUPABASE_KEY is not set in environment variables')
  console.error('Please create a .env.local file with: NEXT_PUBLIC_SUPABASE_KEY=your_supabase_anon_key')
}

const supabase = createClient(supabaseUrl, supabaseKey || '')

export default supabase;