<template>
  <div>
    <h1>{{ release.title.rendered }}</h1>
  </div>
</template>

<script>
import releaseService from '@/services/releaseService.js'
export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },
  asyncData({ params }) {
    return releaseService
      .getRelease(params.id)
      .then(response => {
        return { release: response.data }
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

<style scoped>
</style>
