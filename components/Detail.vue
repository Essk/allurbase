<template>
  <main>
    <h1>{{ item.title.rendered }}</h1>
    <div v-html="item.content.rendered"/>
    <div class="detail-related">
      <slot :related="related"/>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    item: {
      type: Object,
      required: true
    },
    related: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
</style>
