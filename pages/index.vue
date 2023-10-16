<template>
  <div>
    <!-- Jumbotron with background image -->
    <div
      class="jumbotron jumbotron-fluid d-flex align-items-center position-relative"
      :style="{
        backgroundImage:
          'url(\'https://images.unsplash.com/photo-1582408921715-18e7806365c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80\')',
        backgroundSize: 'cover',
        height: '100vh',
      }"
    >
      <div
        class="overlay position-absolute w-100 h-100 bg-dark"
        style="opacity: 0.7"
      ></div>

      <div class="container px-5 text-light position-relative">
        <h1 class="display-4">Sisampah Sistem Pengelolaan Sampah</h1>
        <p class="lead">
          Mengurangi dampak negatif sampah, mendorong daur ulang, dan mengurangi
          volume sampah yang mencemari lingkungan.
        </p>
        <div class="mt-4">
          <router-link to="/user" class="btn btn-success btn-lg me-3"
            >Setor Sampah</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // ... (component options)
}
</script>
