<template>
  <Detail :item="$store.getters.getAuthorById($route.params.id)"/>
</template>

<script>
import Detail from '@/components/Detail.vue'
export default {
  components: {
    Detail
  }
}
</script>

<style scoped>
</style>
