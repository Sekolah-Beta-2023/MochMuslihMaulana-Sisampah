<template>
  <!-- Section: Design Block -->
  <section class="text-center">
    <!-- Background image -->
    <div
      class="p-5 bg-image"
      style="
        background-image: url('https://images.unsplash.com/photo-1592890278983-18616401d4ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80');
        height: 300px;
      "
    ></div>
    <!-- Background image -->

    <div
      class="card mx-4 mx-md-5 shadow-5-strong"
      style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
      "
    >
      <div class="card-body py-5 px-md-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <h2 class="fw-bold mb-5">Sign up now</h2>
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
                <input id="form3Example3" type="email" class="form-control" />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4">Password</label>
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
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>
