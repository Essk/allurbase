<template>
  <b-media class="aub-card archive-card" right-align vertical-align="top" variant="red">
    <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"/>
    <nuxt-link :to="detailSlug + '/' + id">
      <h5 class="mt-0">{{ title }}</h5>
    </nuxt-link>

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
    },
    id: {
      type: Number,
      required: true
    },
    detailSlug: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.archive-card__meta {
  display: flex;
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 0 4px;
      &:not(:last-of-type):after {
        content: '|';
        display: inline-block;
        transform: translateX(4px);
      }
    }
  }
}
</style>
