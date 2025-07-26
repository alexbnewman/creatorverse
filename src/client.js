import { createClient } from '@supabase/supabase-js';

const URL = 'https://zeolbgcvmunhqydwgbna.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inplb2xiZ2N2bXVuaHF5ZHdnYm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0OTQ0ODUsImV4cCI6MjA2OTA3MDQ4NX0.7ifavNuXtW1WaWdCcQYt7oWkMH4gkyB0jAKb8WqN2gk';

export const supabase = createClient(URL, API_KEY);
