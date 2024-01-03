import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZGJhbmp3cXZnZHlvZXVwcWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNTY5NzQsImV4cCI6MjAxODczMjk3NH0.zD2Ylxsx1t-TUhjaj1Jt7VMWAGEFNdaf9Y7bFSIa85w";
const supabaseUrl = "https://wsdbanjwqvgdyoeupqih.supabase.co";
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
