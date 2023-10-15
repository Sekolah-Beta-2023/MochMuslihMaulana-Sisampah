<!-- Category.vue -->
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
              <h1 class="h3 mb-0 text-gray-800">Kategori Sampah</h1>
            </div>
            <!-- DataTales-->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <b-button class="btn btn-success" @click="addCategoryModal"
                  >Tambah Category</b-button
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
                        <th>No</th>
                        <th>Nama Kategori</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(category, index) in $store.state.trash
                          .categories"
                        :key="category.name"
                      >
                        <td>{{ index + 1 }}</td>
                        <td>{{ category && category.name }}</td>
                        <td>
                          <b-button
                            class="btn btn-success"
                            @click="editCategoryModal(category)"
                            >Edit</b-button
                          >
                          <b-button
                            class="btn btn-danger"
                            @click="deleteCategoryModal(category)"
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

    <CategoryModal
      :edited-category="editedCategory"
      :delete-category="deleteCategory"
    />
  </div>
</template>

<script>
import CategoryModal from '~/components/CategoryModal.vue'

export default {
  components: { CategoryModal },
  layout(context) {
    return 'admin'
  },
  data() {
    return {
      addCategory: { name: '' },
      editedCategory: { name: '' },
      deleteCategory: { name: '' },
    }
  },
  async fetch() {
    await this.$store.dispatch('trash/fetchCategories')
  },
  methods: {
    addCategoryModal(category) {
      this.addCategory = { ...category }
      console.log('addCategory:', this.addCategory)
      this.$bvModal.show('addCategoryModal')
    },
    editCategoryModal(category) {
      this.editedCategory = { ...category }
      console.log('editedCategory:', this.editedCategory)
      this.$bvModal.show('editCategoryModal')
    },
    deleteCategoryModal(category) {
      this.deleteCategory = { ...category }
      console.log('deleteCategory:', this.deleteCategory)
      this.$bvModal.show('deleteCategoryModal')
    },
  },
}
</script>
