<template>
  <b-media>
    <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"/>
    <h5 class="mt-0">{{ title }}</h5>
    <div v-html="content"/>
    <div class="archive-card__meta">
      <slot name="card-meta"/>
    </div>
  </b-media>
</template>

<script>
export default {
  name: 'ArchiveCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>
