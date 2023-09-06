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
      <img src="/image/bottle-plastic.svg" class="card-img-top" alt="" />
      <div class="card-body">
        <div class="mb-3">
          <h5 class="card-title">{{ trash.name }}</h5>

          <label for="exampleFormControlInput1" class="form-label">Berat</label>
          <input
            id="exampleFormControlInput1"
            type="number"
            class="form-control"
            placeholder="kg"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Keterangan</label
          >
          <textarea
            id="exampleFormControlTextarea1"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
        <div class="button-wrapper d-flex">
          <button class="btn btn-primary me-2">Setor</button>
          <button class="btn btn-outline-secondary" @click="closeForm">
            Cancel
          </button>
        </div>
      </div>
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
    }
  },
  methods: {
    openForm() {
      this.showForm = true
    },
    closeForm() {
      this.showForm = false
    },
  },
}
</script>
