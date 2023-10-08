<!-- TrashModal.vue -->
<template>
  <div>
    <!-- Modal Tambah Sampah -->

    <b-modal id="addTrashModal" title="Tambah Sampah" hide-footer>
      <!-- Form untuk menambah sampah -->
      <form @submit.prevent="addTrash">
        <b-form-group label="Foto Sampah" label-for="imageSampah">
          <b-form-file
            id="imageSampah"
            v-model="newTrash.image"
            required
            accept="image/*"
          ></b-form-file>
        </b-form-group>
        <br />

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
          <b-form-input
            id="kategoriSampah"
            v-model="newTrash.category"
            required
          ></b-form-input>
        </b-form-group>
        <br />
        <!-- Tombol untuk menyimpan sampah -->
        <b-button type="submit" variant="success">Simpan</b-button>
      </form>
    </b-modal>

    <!-- Modal Edit Sampah -->
    <b-modal
      :id="'editTrashModal-' + editedTrash.id"
      :title="`Edit Sampah ${editedTrash.id}`"
      hide-footer
    >
      <!-- Form untuk mengedit sampah -->
      <form @submit.prevent="editTrash">
        <b-form-group label="Foto Sampah" label-for="editImageSampah">
          <b-form-file
            id="editImageSampah"
            v-model="editedTrash.image"
            accept="image/*"
          ></b-form-file>
        </b-form-group>
        <br />

        <b-form-group label="Nama Sampah" label-for="editNamaSampah">
          <b-form-input
            id="editNamaSampah"
            v-model="editedTrash.name"
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
            v-model="editedTrash.description"
            required
          ></b-form-textarea>
        </b-form-group>
        <br />

        <b-form-group label="Kategori Sampah" label-for="editKategoriSampah">
          <b-form-input
            id="editKategoriSampah"
            v-model="editedTrash.category"
            required
          ></b-form-input>
        </b-form-group>
        <br />
        <!-- Tombol untuk menyimpan perubahan sampah -->
        <b-button type="submit" variant="success">Simpan Perubahan</b-button>
      </form>
    </b-modal>

    <!-- Modal Delete Sampah -->
    <b-modal
      :id="'deleteTrashModal-' + deleteTrash.id"
      title="Hapus Sampah"
      hide-footer
    >
      <div class="modal-body">
        Apakah yakin untuk menghapus {{ deleteTrash.id }}? ?
      </div>

      <!-- Tombol untuk menyimpan perubahan sampah -->
      <b-button variant="danger" @click="deleteTrash">Hapus</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTrash: {
        image: null,
        name: '',
        description: '',
        category: '',
      },
      editedTrash: {
        id: null,
        image: null,
        name: '',
        description: '',
        category: '',
      },
    }
  },
  mounted() {
    console.log('TrashModal mounted. Edited Trash:', this.editedTrash)
  },
  methods: {
    addTrash() {
      console.log('Data yang akan disimpan:', this.newTrash)
      // Panggil aksi untuk menambah sampah ke store atau API
      this.$store.dispatch('trash/addTrash', this.newTrash)

      // Reset form
      this.resetForm('addTrashModal')
    },

    editTrash() {
      console.log('Edit Trash method called.')
      console.log('Data in editTrash method:', this.editedTrash)
      // Panggil aksi untuk mengedit sampah ke store atau API
      this.$store.dispatch('trash/editTrash', {
        id: this.editedTrash.id,
        data: this.editedTrash,
      })

      console.log('Trying to show modal...')
      this.$bvModal.show('editTrashModal-' + this.editedTrash.id.toString())

      // Reset form
      // this.resetForm('editTrashModal-' + this.editedTrash.id.toString())
    },

    deleteTrash() {
      console.log('Data in deleteTrash method:', this.deleteTrash)
      // Panggil aksi untuk menghapus sampah ke store atau API
      this.$store.dispatch('trash/deleteTrash', this.deleteTrash.id)
      // Reset form dan tutup modal
      this.resetForm('deleteTrashModal-' + this.deleteTrash.id)
    },
  },
}
</script>
