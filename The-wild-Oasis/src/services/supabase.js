
import { createClient } from '@supabase/supabase-js'

 export const supabaseUrl = 'https://pyqerxrmpbfaowfdfwvt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cWVyeHJtcGJmYW93ZmRmd3Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NjQ3MjEsImV4cCI6MjA3MTM0MDcyMX0.nUn1lLUctLv_vqI5QnUGla9VW9pnghPGjr_q1SNR3DU";
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase ;