import { createClient } from '@supabase/supabase-js'

export const pruebaSupabase = {
    template: `<h1>Pruebas Supabase</h1>`,
    script: async()=>{
        console.log('purebas supabase');
        const supabaseUrl = 'https://tdjmmdhdryhhicpmeywq.supabase.co'
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkam1tZGhkcnloaGljcG1leXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU3ODQ0MzgsImV4cCI6MjAwMTM2MDQzOH0._VDx5Udws5RnYSunf3KW2liRSfbxC9zA6hSFKfNuHvk'
        const supabase = createClient(supabaseUrl, supabaseKey)
        
        //Consulta a la tabla perfiles
        const verTodosLosPerfiles = async ()=>{
        
            let { data: perfiles, error } = await supabase
            .from('perfiles')
            .select('*')
            return perfiles
            
            
        }
        let datos = await verTodosLosPerfiles(); 
        console.log(datos);
        
        //await agregarPerfil()
        datos = await verTodosLosPerfiles(); 
        console.log(datos)
        const registro = async ()=>{
            //USER SIGNUP
            let { data, error } = await supabase.auth.signUp({
              email: 'pereirahidalgosergio@fpllefia.com',
              password: '123456'
            })
            console.log("Registro")
          }
          //registro()
          const agregarPerfil = async ()=>{
            //INSERT A ROW
            const { data, error } = await supabase
            .from('perfiles')
            .insert([
                { nombre: 'ejemplo'},
            ])
            }
            //await agregarPerfil(registro)
          const login = async ()=>{
            //USER LOGIN
                let { data, error } = await supabase.auth.signInWithPassword({
                email: 'carrebola@fpllefia.com',
                password: '123456'
                })
            }
            
            const logout = async ()=>{
                //USER LOGOUT
                let { error } = await supabase.auth.signOut()
            }
        }
        
        
        
          
}