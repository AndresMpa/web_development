<script>
const API_URL = " http://127.0.0.1:8000/"

export default {
  data: () => ({
    books: [],
  }),

  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const url = `${API_URL}`
      this.books = await (await fetch(url)).json()
      console.log(this.books)
    },
  }
}
</script>

<template>
    <ul v-for="item in books">
        <li>
            Book name: {{item}}
        </li>
    </ul>
</template>