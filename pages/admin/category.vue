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
              <div class="card-header py-3">
                <button
                  type="button"
                  class="btn btn-success"
                  data-toggle="modal"
                  data-target="#addCategory"
                >
                  Tambah Kategory
                </button>
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
                        <th>No</th>
                        <th>Nama Kategori</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>
                          <a
                            href="detailcustomer.php?id=<?= $idc; ?>"
                            class="btn btn-info"
                            >View</a
                          >
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-toggle="modal"
                            data-target="#edit<?= $idc; ?>"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-toggle="modal"
                            data-target="#hapus<?= $idc; ?>"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>
                          <a
                            href="detailcustomer.php?id=<?= $idc; ?>"
                            class="btn btn-info"
                            >View</a
                          >
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-toggle="modal"
                            data-target="#edit<?= $idc; ?>"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-toggle="modal"
                            data-target="#hapus<?= $idc; ?>"
                          >
                            Hapus
                          </button>
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
  mounted() {},
}
</script>
