export const state = () => ({
  trash: [],
  categories: [],
})

export const mutations = {
  SET_TRASH(state, trash) {
    state.trash = trash
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async fetchTrash({ commit, state }) {
    try {
      const response = await this.$axios.get('rest/v1/trash')
      console.log('Response from server:', response.data)
      if (response.status === 200) {
        // Menambahkan kategori "Uncategorized" untuk data yang memiliki kategori null
        const trashWithCategories = response.data.map((item) => ({
          ...item,
          category: item.category || 'Uncategorized',
        }))

        commit('SET_TRASH', trashWithCategories)
        console.log('Trash in state:', state.trash)

        // Mendapatkan daftar unik dari kategori
        const categories = [
          ...new Set(trashWithCategories.map((item) => item.category)),
        ]
        commit('SET_CATEGORIES', categories)
        console.log('Categories in state:', state.categories)
      } else {
        console.error('Failed to fetch data. Status:', response.status)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  },
}
