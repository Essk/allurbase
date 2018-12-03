<template>
  <div>
    <h1>Authors</h1>
    <ArchiveCard
      v-for="author in $store.state.authors"
      :key="author.id"
      :title="author.title.rendered"
      :content="author.content.rendered"
    >
      <div slot="card-meta">
        <ul>
          <li v-for="release in $store.getters.getReleasesByAuthor(author.id) " :key="release.id">
            <nuxt-link :to="'/releases/'+release.id">{{ release.title.rendered }}</nuxt-link>
          </li>
        </ul>
      </div>
    </ArchiveCard>
  </div>
</template>
    

  

<script>
import ArchiveCard from '@/components/ArchiveCard.vue'

export default {
  name: 'AuthorArchive',
  components: {
    ArchiveCard
  }
}
</script>

<style scoped>
</style>
