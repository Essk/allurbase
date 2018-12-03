<template>
  <div>
    <h1>Releases</h1>
    <article v-for="release in $store.state.releases" :key="release.id">
      <nuxt-link :to="{name: 'releases-id', params: { id:release.id} }">{{ release.title.rendered }}</nuxt-link>
    </article>
  </div>
</template>
    

  

<script>
export default {}
</script>

<style scoped>
</style>
