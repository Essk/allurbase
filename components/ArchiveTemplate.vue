<template>
  <main class="archive container">
    <h1>{{ title }}</h1>

    <article v-for="item in items" :key="item.id">
      <slot :item="item"/>
    </article>
  </main>
</template>

<script>
export default {
  name: 'ArchiveTemplate',
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
</style>
