<template>
  <div class="py-4 mt-5">
    <div class="container">
      <div class="title mt-5 mb-3 text-center">
        <h2>{{ article.title }}</h2>
      </div>

      <div class="row mb-3 align-items-center">
        <div v-if="article">
          <img :src="article.img" :alt="article.title" class="img-fluid" />
          <p class="card-text mt-3">{{ article.content }}</p>
        </div>
        <div v-else>Artikel tidak ditemukan.</div>
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
      article: null,
    }
  },
  computed: {
    articles() {
      return [
        {
          title: 'Judul Artikel 1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?',
          img: 'https://images.unsplash.com/photo-1649282806617-c51bb282899c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        {
          title: 'Judul Artikel 2',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?',
          img: 'https://images.unsplash.com/photo-1635732646038-0a1a2fe3f2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        },
        {
          title: 'Judul Artikel 3',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?',
          img: 'https://images.unsplash.com/photo-1640006807976-a6127e9d6fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        },
      ]
    },
  },
  created() {
    const judulArtikel = this.$route.params.judulArtikel
    this.article = this.articles.find(
      (article) => this.cleanUrl(article.title) === judulArtikel
    )
  },
  methods: {
    cleanUrl(title) {
      return title.toLowerCase().replace(/ /g, '-')
    },
  },
}
</script>
