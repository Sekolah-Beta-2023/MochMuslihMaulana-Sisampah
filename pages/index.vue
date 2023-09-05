<template>
  <div class="py-4">
    <div class="container">
      <div class="title border-bottom">
        <h5>Setor Sampah</h5>
      </div>

      <div class="list-sampah">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div v-for="(item, index) in trash" :key="index" class="col">
            <div
              v-if="!item.showForm"
              class="card h-100"
              @click="item.showForm = !item.showForm"
            >
              <img src="bottle-plastic.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">
                  {{ item.description }}
                </p>
              </div>
            </div>
            <div v-else class="card h-100">
              <img src="bottle-plastic.png" class="card-img-top" alt="" />
              <div class="card-body">
                <div class="mb-3">
                  <h5 class="card-title">{{ item.name }}</h5>

                  <label for="exampleFormControlInput1" class="form-label"
                    >Berat</label
                  >
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
                  <button
                    class="btn btn-outline-secondary"
                    @click="item.showForm = !item.showForm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout(context) {
    return 'custom'
  },
  data() {
    return {
      trash: [
        {
          name: 'Botol Plastik',
          description: 'keterangan dari sampah',
          showForm: false,
        },
        {
          name: 'Botol Kaca',
          description: 'keterangan dari sampah',
          showForm: false,
        },
      ],
    }
  },
}
</script>
