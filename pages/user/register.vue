<template>
  <section class="gradient-custom bg-success">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                <p class="text-white-50 mb-5">
                  Please enter your personal data
                </p>

                <form>
                  <!-- 2 column grid layout with text inputs for the first and last names -->
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="form3Example1"
                          >First name</label
                        >
                        <input
                          id="form3Example1"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="form3Example2"
                          >Last name</label
                        >
                        <input
                          id="form3Example2"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3"
                      >Email address</label
                    >
                    <input
                      id="form3Example3"
                      type="email"
                      class="form-control"
                    />
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4"
                      >Password</label
                    >
                    <input
                      id="form3Example4"
                      type="password"
                      class="form-control"
                    />
                  </div>

                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-center mb-4">
                    <input
                      id="form2Example33"
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      checked
                    />
                    <label class="form-check-label" for="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>

                  <!-- Register buttons -->
                  <div class="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>

              <div>
                <p class="mb-0">
                  Have an account?
                  <a href="/admin/login" class="text-white-50 fw-bold"
                    >Sign In</a
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
