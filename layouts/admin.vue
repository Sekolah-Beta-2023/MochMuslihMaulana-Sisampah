<template>
  <div id="app">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
// Memanggil component sesuai lokasi masing - masing file
import TheHeader from '~/components/HeaderAdmin.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  // Dideklarasikan agar dapat diakses oleh template
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
<style></style>
