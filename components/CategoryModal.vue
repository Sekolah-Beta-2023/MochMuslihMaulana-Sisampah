<!-- CategoryModal.vue -->
<template>
  <div>
    <!-- Modal Tambah Sampah -->
    <b-modal id="addCategoryModal" title="Tambah Category Sampah" hide-footer>
      <!-- Form untuk menambah sampah -->
      <form @submit.prevent="addCategory">
        <b-form-group label="Nama Category" label-for="categorySampah">
          <b-form-input
            id="categorySampah"
            v-model="newCategory.name"
            required
          ></b-form-input>
        </b-form-group>
        <br />

        <br />
        <!-- Tombol untuk menyimpan sampah -->
        <b-button type="submit" variant="success">Simpan</b-button>
      </form>
    </b-modal>

    <!-- Modal Edit Sampah -->
    <b-modal
      id="editCategoryModal"
      :title="`Edit Category ${editedCategory.name}`"
      hide-footer
    >
      <!-- Form untuk mengedit sampah -->
      <form @submit.prevent="editCategory">
        <b-form-group label="Nama Category" label-for="editCategorySampah">
          <b-form-input
            id="editCategorySampah"
            v-model="newEditedCategory.name"
            required
          ></b-form-input>
        </b-form-group>
        <br />

        <br />
        <!-- Tombol untuk menyimpan perubahan sampah -->
        <b-button type="submit" variant="success">Simpan Perubahan</b-button>
      </form>
    </b-modal>

    <!-- Modal Delete Sampah -->
    <b-modal :id="'deleteCategoryModal'" title="Hapus Category " hide-footer>
      <div class="modal-body">
        Apakah yakin untuk menghapus
        {{ deleteCategory.name }} ?
      </div>

      <!-- Tombol untuk menyimpan perubahan sampah -->
      <b-button variant="danger" @click="confirmDeleteCategory(deleteCategory)"
        >Hapus</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    editedCategory: {
      type: Object,
      default: () => ({
        name: '',
      }),
    },

    deleteCategory: {
      type: Object,
      default: () => ({
        name: '',
      }),
    },
  },
  data() {
    return {
      newCategory: {
        name: '',
      },
      newEditedCategory: {
        name: '',
      },
    }
  },
  mounted() {
    if (this.editedCategory) {
      this.newEditedCategory = {
        name: this.editedCategory.name,
      }
    } else {
      console.error('Invalid editedCategory data')
    }
  },

  methods: {
    addCategory() {
      // Panggil action Vuex untuk menambahkan kategori baru
      this.$store.dispatch('trash/createCategory', {
        name: this.newCategory.name,
      })

      // Tutup modal setelah menambahkan kategori
      this.$bvModal.hide('addCategoryModal')
    },
    editCategory() {
      if (this.newEditedCategory.name) {
        this.$store
          .dispatch('trash/editCategory', {
            name: this.editedCategory.name,
            data: this.newEditedCategory,
          })
          .then((response) => {
            console.log('Response from editCategory action:', response)

            // Tutup modal setelah menyimpan perubahan
            this.$bvModal.hide('editCategoryModal')
          })
          .catch((error) => {
            console.error('Error editing category:', error)
          })
      } else {
        console.error('Invalid category name')
      }
    },

    confirmDeleteCategory(category) {
      // Logika untuk mengkonfirmasi dan menghapus kategori
      this.$store.dispatch('trash/deleteCategory', category.name)
      // Tutup modal setelah menghapus
      this.$bvModal.hide('deleteCategoryModal')
    },
  },
}
</script>
