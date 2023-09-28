<template>
  <div class="py-4 mt-5">
    <div class="container">
      <div class="title mt-4">
        <h5>Daftar Artikel</h5>
      </div>

      <div class="row mb-3 align-items-center">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div v-for="(article, index) in articles" :key="index">
            <!-- Tampilkan data sampah yang akan disetor di sini -->
            <div class="card">
              <div class="card-body">
                <div class="card h-50">
                  <img
                    :src="article.img"
                    :alt="article.title"
                    class="img-fluid"
                  />
                </div>
                <h5 class="card-title mt-3">{{ article.title }}</h5>
                <p class="card-text">
                  {{ truncateText(article.content, 100) }}
                </p>
                <p class="card-text"></p>

                <p class="card-text">
                  <router-link :to="'/artikel/' + cleanUrl(article.title)">
                    Baca Selengkapnya
                  </router-link>
                </p>
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
      articles: [
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
      ],
    }
  },
  methods: {
    cleanUrl(title) {
      return encodeURIComponent(title.toLowerCase().replace(/ /g, '-'))
    },
    // Memotong Text Content artikel menjadi pendek
    truncateText(text, length) {
      if (text && text.length > length) {
        return text.substring(0, length) + '...'
      }
      return text
    },
  },
}
</script>
