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
                        <td>{{ index + 1 }}</td>
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
    <TrashModal />
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
      editedTrash: {
        id: null,
        image: null,
        name: '',
        description: '',
        category: '',
      },
      deleteTrash: {
        id: null,
        // tambahkan properti lain jika diperlukan
      },
    }
  },

  async fetch() {
    await this.$store.dispatch('trash/fetchTrash')
  },

  mounted() {},
  methods: {
    addTrashModal() {
      this.$bvModal.show('addTrashModal')
    },
    editTrashModal(trash) {
      console.log('Clicked Trash:', trash)
      this.editedTrash.id = trash.id
      console.log('Edited Trash ID:', this.editedTrash.id.toString())

      this.editedTrash.image = trash.image
      this.editedTrash.name = trash.name
      this.editedTrash.description = trash.description
      this.editedTrash.category = trash.category

      console.log('After setting editedTrash:', this.editedTrash)

      this.$bvModal.show('editTrashModal-' + this.editedTrash.id.toString())
      console.log('After showing modal')
    },

    deleteTrashModal(trash) {
      this.deleteTrash.id = trash.id
      console.log('Delete Trash ID:', this.deleteTrash.id)
      this.$bvModal.show('deleteTrashModal-' + this.deleteTrash.id.toString())
    },
  },
}
</script>
