<template>
  <div>
    <h1>hi</h1>
    <pre>{{ $store.getters.getReleaseById($route.params.id) }}</pre>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  fetch({ store, params }) {
    console.log(params)
    return axios
      .get('http://allurbase.local/wp-json/wp/v2/release/')
      .then(res => {
        store.commit('SET_RELEASES', res.data)
      })
  },
  created() {}
}
</script>

<style scoped>
</style>
