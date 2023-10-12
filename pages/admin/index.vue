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
              <h1 class="h3 mb-0 text-gray-800">Setoran Sampah</h1>
            </div>
            <!-- DataTales-->
            <div class="card shadow mb-4">
              <!-- <div class="card-header py-3">
                <button
                  type="button"
                  class="btn btn-success"
                  data-toggle="modal"
                  data-target="#setorTrash"
                >
                  Setor Sampah
                </button>
              </div> -->
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
                        <th>User</th>
                        <th>Sampah</th>
                        <th>Total Berat</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(carts, index) in $store.state.trash.carts"
                        :key="carts.user"
                      >
                        <td class="align-middle text-center">
                          {{ index + 1 }}
                        </td>
                        <td class="align-middle">Parno</td>
                        <td class="align-middle">Botol Plastik</td>
                        <td class="align-middle">{{ carts.weight }} Kg</td>
                        <td>
                          <a
                            href="detailcustomer.php?id=<?= $idc; ?>"
                            class="btn btn-info"
                            >View</a
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
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'admin'
  },

  data() {
    return {
      // carts: [],
    }
  },

  async fetch() {
    await this.$store.dispatch('trash/fetchTrash')
    await this.$store.dispatch('trash/fetchCategories')
    await this.$store.dispatch('trash/fetchCarts')

    this.trash = this.$store.state.trash.trash
    this.categories = this.$store.state.trash.categories
    this.carts = this.$store.state.trash.carts
    console.log('Carts:', this.carts)
  },

  methods: {
    addTrashModal() {
      console.log('Metode addTrash dijalankan')
      console.log('Selected Category:', this.newTrash.category)
      this.categories = this.$store.state.trash.categories
      this.$bvModal.show('addTrashModal')
    },
  },
}
</script>
