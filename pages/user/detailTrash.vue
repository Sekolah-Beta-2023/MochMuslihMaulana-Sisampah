<template>
  <div class="py-4 mt-5">
    <div class="container">
      <div class="title mt-5 mb-3 text-center">
        <router-link to="/admin/trash">
          <button class="btn btn-secondary mb-3">Kembali</button>
        </router-link>
        <h1>{{ trash.name }}</h1>
      </div>

      <div class="row mb-3 align-items-center justify-content-center">
        <div
          v-if="trash"
          class="align-items-center h-100 mx-auto"
          style="width: 30rem"
        >
          <img
            :src="trash.image"
            class="card-img-top h-100"
            :alt="trash.name"
          />
          <div class="card-body">
            <p class="card-text">Kategori : {{ trash.category }}</p>
            <p class="card-text">Deskripsi : {{ trash.description }}</p>
          </div>
        </div>
        <div v-else>Error...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'user'
  },
  computed: {
    trash() {
      const trashId = this.$route.params.trashId
      return (
        this.$store.state.trash.trash.find((trash) => trash.id === trashId) ||
        null
      )
    },
  },
}
</script>
