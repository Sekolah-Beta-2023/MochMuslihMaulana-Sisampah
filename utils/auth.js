// utils/auth.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_API
const supabaseKey = process.env.SUPABASE_KEY

// Inisialisasi klien Supabase
export const supabase = createClient(supabaseUrl, supabaseKey)

// Fungsi untuk melakukan sign in
export const signIn = async (email, password) => {
  try {
    const { user, error } = await supabase.auth.signIn({
      email, // Ganti dengan parameter email yang sesuai
      password, // Ganti dengan parameter password yang sesuai
    })

    return { user, error }
  } catch (error) {
    return { error }
  }
}

// Fungsi untuk melakukan sign out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()

    return { error }
  } catch (error) {
    return { error }
  }
}
