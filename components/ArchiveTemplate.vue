<template>
  <main class="archive container">
    <PageIntro :title="title" :copy="copy" :with-sidebar="withSidebar"/>

    <article v-for="item in items" :key="item.id">
      <slot :item="item"/>
    </article>
  </main>
</template>

<script>
import PageIntro from '@/components/PageIntro.vue'
export default {
  name: 'ArchiveTemplate',
  components: {
    PageIntro
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    copy: {
      type: String,
      default: ''
    },
    withSidebar: {
      type: Boolean,
      default: false
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
