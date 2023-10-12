<template>
  <div class="py-4 mt-5">
    <div class="container">
      <div class="title mt-5 mb-3 text-center">
        <button class="btn btn-secondary mb-3" @click="$router.go(-1)">
          Kembali
        </button>
      </div>

      <div class="row mb-3 align-items-center">
        <div v-for="article in articles" :key="article.id">
          <div v-if="article.id == paramId">
            <img :src="article.img" :alt="article.title" class="img-fluid" />
            <h1 class="mt-3">
              {{ article.title }}
            </h1>
            <p class="card-text mt-3">{{ article.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'user'
  },
  data() {
    return {
      paramId: this.$route.params.id,
    }
  },
  computed: {
    articles() {
      return [
        {
          id: 1,
          title: 'Judul Artikel 1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?',
          img: 'https://images.unsplash.com/photo-1649282806617-c51bb282899c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        {
          id: 2,

          title: 'Judul Artikel 2',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?',
          img: 'https://images.unsplash.com/photo-1635732646038-0a1a2fe3f2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        },
        {
          id: 3,

          title: 'Judul Artikel 3',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor explicabo sint quos exercitationem fugiat reiciendis assumenda. Ad quia veritatis, dolor odit, voluptas numquam modi porro eius reprehenderit ullam tenetur?',
          img: 'https://images.unsplash.com/photo-1640006807976-a6127e9d6fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        },
      ]
    },
  },
}
</script>
