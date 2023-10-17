<template>
  <section class="gradient-custom bg-success">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typeEmailX">Email</label>
                  <input
                    id="typeEmailX"
                    type="email"
                    class="form-control form-control-lg"
                  />
                </div>

                <div class="form-outline form-white mb-4">
                  <label class="form-label" for="typePasswordX">Password</label>
                  <input
                    id="typePasswordX"
                    type="password"
                    class="form-control form-control-lg"
                  />
                </div>

                <p class="small mb-5 pb-lg-2">
                  <a class="text-white-50" href="#!">Forgot password?</a>
                </p>

                <router-link
                  to="/admin"
                  class="btn btn-primary btn-lg px-5"
                  @click="handleLogin"
                >
                  Login
                </router-link>

                <div
                  class="d-flex justify-content-center text-center mt-4 pt-1"
                >
                  <a href="#!" class="text-white"
                    ><i class="fab fa-facebook-f fa-lg"></i
                  ></a>
                  <a href="#!" class="text-white"
                    ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
                  ></a>
                  <a href="#!" class="text-white"
                    ><i class="fab fa-google fa-lg"></i
                  ></a>
                </div>
              </div>

              <div>
                <p class="mb-0">
                  Don't have an account?
                  <a href="/user/register" class="text-white-50 fw-bold"
                    >Sign Up</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { signIn } from '~/utils/auth'

export default {
  data() {
    return {
      email: '', // Menyimpan nilai email dari formulir
      password: '', // Menyimpan nilai password dari formulir
    }
  },
  methods: {
    async handleLogin() {
      const { email, password } = this // Mendapatkan nilai email dan password dari data komponen

      const { user, error } = await signIn(email, password)

      if (error) {
        console.error('Login failed:', error.message)
        // Handle error, misalnya menampilkan pesan kesalahan ke pengguna
      } else {
        console.log('Login success:', user)
        // Redirect atau lakukan tindakan lain setelah login berhasil
      }
    },
  },
}
</script>
