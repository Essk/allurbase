<template>
  <div>
    <h1>{{ title }}</h1>

    <article v-for="item in items" :key="item">
      <slot :item="item"/>
    </article>
  </div>
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
