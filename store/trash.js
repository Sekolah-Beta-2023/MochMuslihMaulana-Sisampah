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
      // Update data sampah de ngan data baru
      state.trash.splice(index, 1, { ...state.trash[index], ...data })
    }
  },
  UPDATE_CATEGORY(state, { name, data }) {
    // Cari indeks kategori yang sesuai
    const index = state.categories.findIndex(
      (category) => category.name === name
    )
    if (index !== -1) {
      // Update data kategori dengan data baru
      state.categories.splice(index, 1, { ...state.categories[index], ...data })
    }
  },
  DELETE_TRASH(state, payload) {
    const idToDelete = payload.id
    state.trash = state.trash.filter((trash) => trash.id !== idToDelete)
  },
  DELETE_CATEGORY(state, name) {
    // Remove the category with the specified name
    state.categories = state.categories.filter(
      (category) => category.name !== name
    )
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

  async createTrash({ commit, state }, trashData) {
    try {
      const response = await this.$axios.post('rest/v1/trash', trashData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 201) {
        // Jika pembuatan data berhasil, perbarui store
        const newTrash = response.data
        commit('SET_TRASH', [...state.trash, newTrash])
        return { status: 201 } // Mengembalikan status berhasil
      } else {
        console.error('Gagal membuat sampah. Status:', response.status)
        return { status: response.status } // Mengembalikan status gagal
      }
    } catch (error) {
      console.error('Error creating trash:', error)
      return { status: error.response.status } // Mengembalikan status server error
    }
  },
  async editTrash({ commit, state }, payload) {
    try {
      const response = await this.$axios.patch(
        ` rest/v1/trash?id=eq.${payload.id}`,
        payload.data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
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
  async deleteTrash({ commit }, id) {
    try {
      const response = await this.$axios.delete(`rest/v1/trash?id=eq.${id}`)

      if (response.status === 200) {
        // Jika penghapusan berhasil, panggil mutation untuk menghapus sampah
        commit('DELETE_TRASH', id)
      } else {
        console.error('Failed to delete trash. Status:', response.status)
      }
    } catch (error) {
      console.error('Error deleting trash:', error)
    }
  },

  async createCategory({ commit, state }, newCategory) {
    try {
      const response = await this.$axios.post('rest/v1/categories', newCategory)
      if (response && response.status === 201) {
        // Jika penambahan berhasil, perbarui state dengan kategori baru
        commit('SET_CATEGORIES', [...state.categories, response.data])
        return { status: 201 } // Mengembalikan status berhasil
      } else {
        console.error(
          'Gagal menambah kategori. Status:',
          response ? response.status : 'Undefined Response'
        )
        return { status: response ? response.status : undefined } // Mengembalikan status gagal
      }
    } catch (error) {
      console.error('Error menambah kategori:', error)
      return { status: error.response ? error.response.status : undefined } // Mengembalikan status server error
    }
  },
  async editCategory({ commit, state }, payload) {
    try {
      const response = await this.$axios.patch(
        `rest/v1/categories?name=eq.${payload.name}`,
        payload.data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        // Jika penyuntingan berhasil, perbarui store
        commit('UPDATE_CATEGORY', { name: payload.name, data: payload.data })
        console.log('Categories in state after edit:', state.categories)
      } else {
        console.error('Failed to edit category. Status:', response.status)
      }
    } catch (error) {
      console.error('Error editing category:', error)
    }
  },
  async deleteCategory({ commit }, name) {
    try {
      const response = await this.$axios.delete(
        `rest/v1/categories?name=eq.${name}`
      )

      if (response.status === 204) {
        // If deletion is successful, call mutation to delete the category from the store
        commit('DELETE_CATEGORY', name)
      } else {
        console.error('Failed to delete category. Status:', response.status)
      }
    } catch (error) {
      console.error('Error deleting category:', error)
    }
  },
}
