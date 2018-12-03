<template>
  <main>
    <h1>{{ $store.state.frontPage.post_title }}</h1>
    <div v-html="$store.state.frontPage.post_content"/>
  </main>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style>
</style>
