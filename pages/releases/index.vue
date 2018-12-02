<template>
  <div>
    <h1>Releases</h1>
    <div>
      <article v-for="release in releases" :key="release.id">
        <nuxt-link :to="'/releases/'+release.id">
          <h2>{{ release.title.rendered }}</h2>
        </nuxt-link>
        <p>released on {{ release.release_date }}</p>by
        <ul>
          <li v-for="author in release.authors" :key="author.id">{{ author.author.post_title }}</li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
import releaseService from '@/services/releaseService.js'
export default {
  asyncData({ params }) {
    return releaseService
      .getReleases()
      .then(response => {
        return { releases: response.data }
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

<style scoped>
</style>
