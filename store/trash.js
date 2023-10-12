export const state = () => ({
  trash: [],
  categories: [],
  carts: [],
})

export const mutations = {
  SET_TRASH(state, trash) {
    state.trash = trash
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_CARTS(state, carts) {
    state.carts = carts
  },
  UPDATE_TRASH(state, { id, data }) {
    // Cari indeks sampah yang sesuai
    const index = state.trash.findIndex((trash) => trash.id === id)
    if (index !== -1) {
      // Update data sampah dengan data baru
      state.trash.splice(index, 1, { ...state.trash[index], ...data })
    }
  },
}

export const actions = {
  async fetchTrash({ commit, state }) {
    try {
      const response = await this.$axios.get('rest/v1/trash')
      console.log('Response from server:', response.data)
      if (response.status === 200) {
        commit('SET_TRASH', response.data)
        console.log('Trash in state:', state.trash)
      } else {
        console.error('Failed to fetch data. Status:', response.status)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  },
  async fetchCategories({ commit, state }) {
    try {
      const response = await this.$axios.get('rest/v1/categories')
      console.log('Response from server for categories:', response.data)
      if (response.status === 200) {
        commit('SET_CATEGORIES', response.data)
        console.log('Categories in state:', state.categories)
      } else {
        console.error('Failed to fetch categories. Status:', response.status)
      }
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  },
  async fetchCarts({ commit, state }) {
    try {
      const response = await this.$axios.get('rest/v1/carts')
      console.log('Response from server for carts:', response.data)
      if (response.status === 200) {
        commit('SET_CARTS', response.data)
        console.log('Carts in state:', state.carts)
      } else {
        console.error('Failed to fetch carts. Status:', response.status)
      }
    } catch (error) {
      console.error('Error fetching carts:', error)
    }
  },

  async createTrash({ commit, state }, payload) {
    try {
      const response = await this.$axios.post('rest/v1/trash', payload.data)

      if (response.status === 201) {
        // Jika pembuatan data berhasil, perbarui store
        const newTrash = response.data
        commit('SET_TRASH', [...state.trash, newTrash])
        console.log('Trash in state after create:', state.trash)
      } else {
        console.error('Failed to create trash. Status:', response.status)
      }
    } catch (error) {
      console.error('Error creating trash:', error)
    }
  },
  async editTrash({ commit, state }, payload) {
    try {
      const response = await this.$axios.put(
        `rest/v1/trash/${payload.id}`,
        payload.data
      )

      if (response.status === 200) {
        // Jika penyuntingan berhasil, perbarui store
        commit('UPDATE_TRASH', { id: payload.id, data: payload.data })
        console.log('Trash in state after edit:', state.trash)
      } else {
        console.error('Failed to edit trash. Status:', response.status)
      }
    } catch (error) {
      console.error('Error editing trash:', error)
    }
  },
}
