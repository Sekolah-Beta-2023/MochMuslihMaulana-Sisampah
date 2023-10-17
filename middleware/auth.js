// middleware/auth.js
export default function ({ app, redirect }) {
  // Cek apakah pengguna sudah login
  if (!app.$supabase.auth.user()) {
    // Jika belum, redirect ke halaman login
    return redirect('/login')
  }
}
