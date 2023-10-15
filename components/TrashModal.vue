<!-- TrashModal.vue -->
<template>
  <div>
    <!-- Modal Tambah Sampah -->

    <b-modal id="addTrashModal" title="Tambah Sampah" hide-footer>
      <!-- Form untuk menambah sampah -->
      <form @submit.prevent="addTrash">
        <!-- <b-form-group label="Foto Sampah" label-for="imageSampah">
          <b-form-file
            id="imageSampah"
            v-model="newTrash.image"
            required
            accept="image/*"
          ></b-form-file>
        </b-form-group>
        <br /> -->

        <b-form-group label="Nama Sampah" label-for="namaSampah">
          <b-form-input
            id="namaSampah"
            v-model="newTrash.name"
            required
          ></b-form-input>
        </b-form-group>
        <br />

        <b-form-group label="Deskripsi Sampah" label-for="descriptionSampah">
          <b-form-textarea
            id="descriptionSampah"
            v-model="newTrash.description"
            required
          ></b-form-textarea>
        </b-form-group>
        <br />

        <b-form-group label="Kategori Sampah" label-for="kategoriSampah">
          <b-form-select
            id="kategoriSampah"
            v-model="newTrash.selectedCategoryIndex"
            :options="
              categories.map((category, index) => ({
                value: index,
                text: category.name,
              }))
            "
            required
          ></b-form-select>
        </b-form-group>
        <br />
        <!-- Tombol untuk menyimpan sampah -->
        <b-button type="submit" variant="success">Simpan</b-button>
      </form>
    </b-modal>

    <!-- Modal Edit Sampah -->
    <b-modal
      id="editTrashModal"
      :title="`Edit Sampah ${editedTrash.name}`"
      hide-footer
    >
      <!-- Form untuk mengedit sampah -->
      <form @submit.prevent="editTrash">
        <b-form-group label="Foto Sampah" label-for="editImageSampah">
          <b-form-file
            id="editImageSampah"
            v-model="newEditedTrash.image"
            accept="image/*"
          ></b-form-file>
        </b-form-group>
        <br />

        <b-form-group label="Nama Sampah" label-for="editNamaSampah">
          <b-form-input
            id="editNamaSampah"
            v-model="newEditedTrash.name"
            required
          ></b-form-input>
        </b-form-group>
        <br />

        <b-form-group
          label="Deskripsi Sampah"
          label-for="editDescriptionSampah"
        >
          <b-form-textarea
            id="editDescriptionSampah"
            v-model="newEditedTrash.description"
            required
          ></b-form-textarea>
        </b-form-group>
        <br />

        <b-form-group label="Kategori Sampah" label-for="editKategoriSampah">
          <b-form-select
            id="editKategoriSampah"
            v-model="newEditedTrash.selectedCategoryIndex"
            :options="
              categories.map((category, index) => ({
                value: index,
                text: category.name,
              }))
            "
            required
          ></b-form-select>
        </b-form-group>
        <br />
        <!-- Tombol untuk menyimpan perubahan sampah -->
        <b-button type="submit" variant="success">Simpan Perubahan</b-button>
      </form>
    </b-modal>

    <!-- Modal Delete Sampah -->
    <b-modal :id="'deleteTrashModal'" title="Hapus Sampah" hide-footer>
      <div class="modal-body">
        Apakah yakin untuk menghapus {{ deleteTrash.name }} ?
      </div>

      <!-- Tombol untuk menyimpan perubahan sampah -->
      <b-button variant="danger" @click="confirmDeleteTrash(deleteTrash)"
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
    editedTrash: {
      type: Object,
      default: () => ({
        id: null,
        image: null,
        name: '',
        description: '',
        category: '',
      }),
    },

    deleteTrash: {
      type: Object,
      default: () => ({
        id: null,
        image: null,
        name: '',
        description: '',
        category: '',
      }),
    },
  },
  data() {
    return {
      newTrash: {
        // image: null,
        name: '',
        description: '',
        category: '',
      },
      newEditedTrash: {
        image: null,
        name: '',
        description: '',
        category: '',
      },
    }
  },
  mounted() {
    console.log('Mounted - trashToDelete:', this.deleteTrash)
    if (this.editedTrash) {
      this.newEditedTrash = {
        image: this.editedTrash.image || null,
        name: this.editedTrash.name,
        description: this.editedTrash.description,
        category: this.editedTrash.category,
      }
    } else {
      console.error('Invalid editedTrash data')
    }
  },
  methods: {
    async addTrash() {
      try {
        // Membuat objek FormData
        const formData = new FormData()
        formData.append('name', this.newTrash.name)
        formData.append('description', this.newTrash.description)

        // Pastikan bahwa this.newTrash.selectedCategoryIndex tidak null atau undefined
        if (
          this.newTrash.selectedCategoryIndex !== null &&
          this.newTrash.selectedCategoryIndex !== undefined
        ) {
          const selectedCategory =
            this.categories[this.newTrash.selectedCategoryIndex]
          // Ubah cara menambahkan category ke FormData sesuai dengan kebutuhan server
          formData.append('category', selectedCategory.name)
        }

        // Panggil aksi untuk membuat sampah baru di toko (store)
        await this.$store.dispatch('trash/createTrash', {
          name: this.newTrash.name,
          description: this.newTrash.description,
          category: this.categories[this.newTrash.selectedCategoryIndex].name,
        })

        // Reset data sampah baru setelah berhasil disimpan
        this.newTrash = {
          name: '',
          description: '',
          selectedCategoryIndex: null,
        }

        // Sembunyikan modal setelah pembuatan sampah baru berhasil
        this.$bvModal.hide('addTrashModal')

        // Tampilkan pemberitahuan sukses
        this.$bvToast.toast('Sampah berhasil ditambahkan!', {
          title: 'Sukses',
          autoHideDelay: 5000,
          variant: 'success',
        })

        console.log(
          'After selecting category:',
          this.newTrash.selectedCategoryIndex
        )
      } catch (error) {
        console.error('Error creating trash:', error)
        // ...
      }
    },
    async editTrash() {
      try {
        const response = await this.$axios.patch(
          `rest/v1/trash?id=eq.${this.editedTrash.id}`,
          {
            name: this.newEditedTrash.name,
            description: this.newEditedTrash.description,
            category:
              this.categories[this.newEditedTrash.selectedCategoryIndex].name,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        if (response.status === 200) {
          // Jika penyuntingan berhasil, perbarui store
          this.$store.commit('UPDATE_TRASH', {
            id: this.editedTrash.id,
            data: this.newEditedTrash,
          })
        }
        this.$bvModal.hide('editTrashModal')
      } catch (error) {}
    },

    async deletedTrash(id) {
      try {
        console.log('Deleting trash with ID:', id)

        if (id !== null) {
          const response = await this.$axios.delete(`rest/v1/trash?id=eq.${id}`)

          console.log('Delete response:', response)

          if (response.status === 204) {
            // Jika status 204 (No Content), anggap sebagai berhasil
            this.$store.commit('DELETE_TRASH', { id })
            this.$bvModal.hide('deleteTrashModal')
            this.$bvToast.toast('Sampah berhasil dihapus!', {
              title: 'Sukses',
              autoHideDelay: 5000,
              variant: 'success',
            })
          } else {
            console.error('Gagal menghapus sampah. Status:', response.status)
          }
        } else {
          console.error('ID sampah tidak valid (null)')
        }
      } catch (error) {
        console.error('Error deleting trash:', error)
      }
    },
    confirmDeleteTrash() {
      // Memastikan bahwa deleteTrash dipanggil hanya jika trashToDelete memiliki ID yang valid
      if (this.deleteTrash.id !== null) {
        this.deletedTrash(this.deleteTrash.id)
      } else {
        console.error('ID sampah tidak valid ya (null)')
      }
    },
  },
}
</script>
