import { createClient } from "@supabase/supabase-js"; 

const supabaseUrl = "https://gtbwpduhcjiktdfrqfvb.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0YndwZHVoY2ppa3RkZnJxZnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MjgzODMsImV4cCI6MjA0MjMwNDM4M30.81EXp0GtAaKgbTmU19dOkWUwY4PfUv-SXBl5vXyWjaY";
export const supabase = createClient(supabaseUrl, supabaseKey);
