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
                  <b-dropdown-item @click="setCategory('Organik')"
                    >Organik</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item @click="setCategory('Plastik')"
                    >Plastik</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item @click="setCategory('Kertas')"
                    >Kertas</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item @click="setCategory('Kaca')"
                    >Kaca</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item @click="setCategory('B3')"
                    >B3</b-dropdown-item
                  >
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
            :editable="false"
            @setor="addToSetorTrash"
          />
        </div>
        <div class="mb-5 mt-5 border-bottom"></div>
        <div class="title mb-3 mt-3">
          <h5>Sampah yang akan di setor :</h5>
        </div>
        <div class="row mb-3 mt-3 align-items-center">
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
</template>

<script>
import CardItem from '@/components/Card/CardItem.vue'

export default {
  components: {
    CardItem,
  },
  layout(context) {
    return 'custom'
  },
  data() {
    return {
      searchQuery: '',
      category: '',
      trash: [
        {
          name: 'Botol Plastik',
          description: 'ini keterangan dari sampah botol plastik',
          category: 'Plastik',
          showForm: false,
        },
        {
          name: 'Botol Kaca',
          description: 'ini keterangan dari sampah botol kaca',
          category: 'Kaca',
          showForm: false,
        },
      ],
      setorTrash: [],
    }
  },
  computed: {
    resultQuery() {
      let filteredTrash = this.trash

      if (this.searchQuery) {
        filteredTrash = filteredTrash.filter((item) => {
          return item.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        })
      }

      if (this.category) {
        filteredTrash = filteredTrash.filter((item) => {
          return item.category === this.category
        })
      }

      return filteredTrash
    },
  },
  methods: {
    setCategory(selectedCategory) {
      this.category = selectedCategory
    },
  },
}
</script>
