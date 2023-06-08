import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'https://tdjmmdhdryhhicpmeywq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkam1tZGhkcnloaGljcG1leXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU3ODQ0MzgsImV4cCI6MjAwMTM2MDQzOH0._VDx5Udws5RnYSunf3KW2liRSfbxC9zA6hSFKfNuHvk'

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
