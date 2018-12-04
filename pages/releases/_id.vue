<template>
  <div>
    <Detail :item="$store.getters.getReleaseById($route.params.id)"/>
  </div>
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
