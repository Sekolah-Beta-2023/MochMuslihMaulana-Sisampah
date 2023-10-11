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
          <b-form-select
            id="kategoriSampah"
            v-model="newTrash.category"
            :options="
              categories.map((category) => ({
                value: category.id,
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
          <b-form-input
            id="editKategoriSampah"
            v-model="newEditedTrash.category"
            required
          ></b-form-input>
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
      <b-button variant="danger" @click="deleteTrash">Hapus</b-button>
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
        image: null,
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

        // Pastikan bahwa this.newTrash.category tidak null atau undefined
        if (this.newTrash.category) {
          formData.append('category', JSON.stringify(this.newTrash.category))
        }

        // Panggil aksi untuk membuat sampah baru di toko (store)
        await this.$store.dispatch('trash/createTrash', formData)

        // Reset data sampah baru setelah berhasil disimpan
        this.newTrash = {
          name: '',
          description: '',
          category: '',
        }

        // Sembunyikan modal setelah pembuatan sampah baru berhasil
        this.$bvModal.hide('addTrashModal')

        // Tampilkan pemberitahuan sukses
        this.$bvToast.toast('Sampah berhasil ditambahkan!', {
          title: 'Sukses',
          autoHideDelay: 5000,
          variant: 'success',
        })
      } catch (error) {
        console.error('Error creating trash:', error)

        if (error.response) {
          // Tanggapan dari server dengan status selain 2xx
          console.error('Server responded with:', error.response.data)
          console.error('Status code:', error.response.status)
        } else if (error.request) {
          // Permintaan terkirim tetapi tidak ada tanggapan (mungkin tidak ada koneksi internet)
          console.error('No response from server:', error.request)
        } else {
          // Kesalahan lainnya
          console.error('Error:', error.message)
        }
      }
    },
  },
}
</script>
