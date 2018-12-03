<template>
  <div>
    <h1>hi</h1>
    <pre>{{ $store.getters.getReleaseById($route.params.id) }}</pre>
  </div>
</template>

<script>
import axios from 'axios'
export default {}
</script>

<style scoped>
</style>
