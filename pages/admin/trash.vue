<template>
  <div class="py-4 mt-5">
    <div class="container">
      <!-- Content-->
      <div class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Begin Page Content -->
          <div class="container-fluid mt-3">
            <!-- Page Heading -->

            <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <h1 class="h3 mb-0 text-gray-800">Daftar Sampah</h1>
            </div>
            <!-- DataTales-->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <b-button class="btn btn-success" @click="addTrashModal"
                  >Tambah Sampah</b-button
                >
              </div>
              <br />

              <div class="card-body">
                <div class="table-responsive">
                  <table
                    id="dataTable"
                    class="table table-bordered"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Gambar</th>
                        <th>Nama</th>
                        <th>Kategori</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(trash, index) in $store.state.trash.trash"
                        :key="trash.id"
                      >
                        <td class="align-middle text-center">
                          {{ index + 1 }}
                        </td>
                        <td>
                          <img
                            :src="trash.image"
                            class="card-img-top img-fluid"
                            alt=""
                            :style="{ width: '100px', height: '100px' }"
                          />
                        </td>
                        <td class="align-middle">
                          {{ trash.name }}
                        </td>
                        <td class="align-middle">{{ trash.category }}</td>
                        <td class="align-middle">
                          <router-link
                            :to="{
                              name: 'user-detailTrash',
                              params: { trashId: trash.id },
                            }"
                            class="btn btn-info"
                          >
                            View
                          </router-link>

                          <b-button
                            class="btn btn-success"
                            @click="editTrashModal(trash)"
                            >Edit</b-button
                          >
                          <b-button
                            class="btn btn-danger"
                            @click="deleteTrashModal(trash)"
                            >Hapus</b-button
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->
      </div>
      <!-- End of Content -->
    </div>
    <!-- End of Page-->

    <!-- Include TrashModal.vue component -->
    <TrashModal
      :edited-trash="editedTrash"
      :delete-trash="deleteTrash"
      :categories="categories"
    />
  </div>
</template>

<script>
import TrashModal from '~/components/TrashModal.vue'
export default {
  components: { TrashModal },

  layout(context) {
    return 'admin'
  },

  data() {
    return {
      categories: [],
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
      deleteTrash: {
        id: null,
        image: null,
        name: '',
      },
    }
  },

  async fetch() {
    await this.$store.dispatch('trash/fetchTrash')
    await this.$store.dispatch('trash/fetchCategories')
    this.trash = this.$store.state.trash.trash
    this.categories = this.$store.state.trash.categories
  },

  methods: {
    addTrashModal() {
      console.log('Metode addTrash dijalankan')
      console.log('Selected Category:', this.newTrash.category)
      this.categories = this.$store.state.trash.categories
      this.$bvModal.show('addTrashModal')
    },
    editTrashModal(trash) {
      console.log('Clicked Trash:', trash)

      this.editedTrash.id = trash.id
      this.editedTrash.image = trash.image || null // Menambahkan nilai default atau null
      this.editedTrash.name = trash.name
      this.editedTrash.description = trash.description
      this.editedTrash.category = trash.category
      console.log('Edited Trash After Changes:', this.editedTrash)

      // Pastikan bahwa id tidak null
      if (trash && trash.id !== null && trash.id !== undefined) {
        this.editedTrash.id = trash.id
        console.log('Setting editedTrash in editTrashModal:', this.editedTrash)

        this.$bvModal.show('editTrashModal')
      } else {
        console.error('Invalid Trash ID')
      }
    },

    deleteTrashModal(trash) {
      if (trash && trash.id !== null && trash.id !== undefined) {
        this.deleteTrash.id = trash.id
        this.deleteTrash.image = trash.image || null // Menambahkan nilai default atau null
        this.deleteTrash.name = trash.name
        console.log('Delete Trash ID:', this.deleteTrash.id)
        this.$bvModal.show('deleteTrashModal')
      } else {
        console.error('Invalid Trash ID')
      }
    },
  },
}
</script>
