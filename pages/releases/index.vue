<template>
  <div>
    <h1>Releases</h1>
    <article v-for="release in $store.state.releases" :key="release.id">
      <nuxt-link :to="{name: 'releases-id', params: { id:release.id} }">{{ release.title.rendered }}</nuxt-link>
    </article>
  </div>
</template>
    

  

<script>
import axios from 'axios'
export default {
  fetch({ store, params }) {
    return axios
      .get('http://allurbase.local/wp-json/wp/v2/release/')
      .then(res => {
        store.commit('SET_RELEASES', res.data)
      })
  }
}
</script>

<style scoped>
</style>
