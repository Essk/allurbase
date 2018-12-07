<template>
  <main>
    <h1>{{ frontPage.post_title }}</h1>
    <div v-html="frontPage.post_content"/>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store }) {
    //console.log(this.frontPage)
    await store.dispatch('getFp')
    // await store.dispatch('getPages')
  },
  computed: {
    ...mapState({
      frontPage: state => {
        return state.frontPage
      }
    })
  }
}
</script>

<style>
</style>
