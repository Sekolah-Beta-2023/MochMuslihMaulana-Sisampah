<template>
  <div class="py-4 mt-5">
    <div class="container">
      <div class="title">
        <h5>Setor Sampah</h5>
      </div>

      <div class="list-sampah">
        <div class="row mb-3 mt-3 align-items-center">
          <div class="col">
            <div class="form-outline">
              <input
                v-model="searchQuery"
                type="text"
                class="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group">
              <div class="input-group-append">
                <b-dropdown variant="success">
                  <template #button-content> Kategori </template>
                  <b-dropdown-item
                    v-for="(category, index) in $store.state.trash.categories"
                    :key="index"
                    @click="setCategory(category)"
                  >
                    {{ category }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <CardItem
            v-for="(item, index) in resultQuery"
            :key="index"
            :trash="item"
            @addToSetor="addToSetorTrash"
          />
        </div>
        <div class="mb-5 mt-5 border-bottom"></div>
        <div class="title mb-3 mt-3">
          <h5>Sampah yang akan di setor :</h5>
        </div>
        <div class="row mb-3 mt-3 align-items-center">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="(item, index) in setorTrash" :key="index" class="col">
              <!-- Tampilkan data sampah yang akan disetor di sini -->
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text">Berat: {{ item.berat }} kg</p>
                  <p class="card-text">Keterangan: {{ item.keterangan }}</p>
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
import CardItem from '@/components/Card/CardItem.vue'

export default {
  components: {
    CardItem,
  },
  layout(context) {
    return 'user'
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: [],
      setorTrash: [],
    }
  },
  async fetch() {
    await this.$store.dispatch('trash/fetchTrash')
  },
  computed: {
    trash() {
      return this.$store.state.trash.trash
    },

    resultQuery() {
      let filteredTrash = this.trash

      if (this.searchQuery) {
        filteredTrash = filteredTrash.filter((item) => {
          return item.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        })
      }

      if (this.selectedCategory && this.selectedCategory.length > 0) {
        filteredTrash = filteredTrash.filter((item) => {
          return this.selectedCategory.includes(item.category)
        })
      }

      return filteredTrash
    },
  },

  methods: {
    setCategory(selectedCategory) {
      this.selectedCategory = selectedCategory
    },

    addToSetorTrash(trash, berat, keterangan) {
      const setorTrashItem = {
        name: trash.name,
        berat,
        keterangan,
      }
      this.setorTrash.push(setorTrashItem)
    },
  },
}
</script>
