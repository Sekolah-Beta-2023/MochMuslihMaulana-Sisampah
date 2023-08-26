<template>
  <div class="py-4">
    <div class="container">
      <div class="title border-bottom">
        <h5>Setor Sampah</h5>
      </div>
      <div class="list-sampah">
        <div
          class="item-sampah d-flex align-items-center border-bottom pt-3 pb-4"
        >
          <input id="sampah" type="checkbox" name="status" class="me-2" />
          <div class="title-sampah">Sampah Organik</div>
        </div>
      </div>
      <div class="action py-2">
        <button type="submit" class="btn btn-primary btn-block">Setor</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style></style>

<!-- <template>
  <div id="app">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
// Memanggil component sesuai lokasi masing - masing file
import Header from '@/components/TheHeader.vue'
import Footer from '@/components/TheFooter.vue'
export default {
  // Dideklarasikan agar dapat diakses oleh template
  components: {
    Header,
    Footer,
  },
}
</script>
<style></style> -->
