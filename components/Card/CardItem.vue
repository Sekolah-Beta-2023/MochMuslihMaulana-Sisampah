<template>
  <div>
    <div v-if="!showForm" class="card h-100" @click="openForm">
      <img src="/image/bottle-plastic.svg" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ trash.name }}</h5>
        <p class="card-text">
          {{ trash.description }}
        </p>
      </div>
    </div>
    <div v-else class="card h-100">
      <form @submit.prevent="submitSetorForm">
        <img src="/image/bottle-plastic.svg" class="card-img-top" alt="" />
        <div class="card-body">
          <div class="mb-3">
            <h5 class="card-title">{{ trash.name }}</h5>

            <label for="beratInput" class="form-label">Berat</label>
            <input
              id="beratInput"
              v-model="berat"
              type="number"
              class="form-control"
              placeholder="kg"
            />
          </div>
          <div class="mb-3">
            <label for="keteranganInput" class="form-label">Keterangan</label>
            <textarea
              id="keteranganInput"
              v-model="keterangan"
              class="form-control"
              rows="3"
            ></textarea>
          </div>
          <div class="button-wrapper d-flex">
            <button type="submit" class="btn btn-primary me-2">Setor</button>
            <button class="btn btn-outline-secondary" @click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trash: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showForm: false,
      berat: '', // Data berat dari form
      keterangan: '', // Data keterangan dari form
    }
  },
  methods: {
    openForm() {
      this.showForm = true
    },
    closeForm() {
      this.showForm = false
      this.berat = '' // Membersihkan berat setelah form ditutup
      this.keterangan = '' // Membersihkan keterangan setelah form ditutup
    },

    submitSetorForm() {
      if (this.berat && this.keterangan) {
        const setorTrashItem = {
          name: this.trash.name,
          berat: this.berat,
          keterangan: this.keterangan,
        }
        this.$emit(
          'addToSetor',
          setorTrashItem,
          setorTrashItem.berat,
          setorTrashItem.keterangan
        )
        this.closeForm()
      } else {
        alert('Mohon isi berat dan keterangan terlebih dahulu.')
      }
    },
  },
}
</script>
