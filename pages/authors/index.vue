<template>
  <ArchiveTemplate :items="$store.state.authors" title="Authors">
    <ArchiveCard
      slot-scope="{ item }"
      :title="item.title.rendered"
      :content="item.content.rendered"
    >
      <div slot="card-meta">
        <span>Worked on:</span>
        <ul>
          <li v-for="release in $store.getters.getReleasesByAuthor(item.id) " :key="release.id">
            <nuxt-link :to="'/releases/'+release.id">{{ release.title.rendered }}</nuxt-link>
          </li>
        </ul>
      </div>
    </ArchiveCard>
  </ArchiveTemplate>
</template>

<script>
import ArchiveCard from '@/components/ArchiveCard.vue'
import ArchiveTemplate from '@/components/ArchiveTemplate.vue'

export default {
  name: 'AuthorArchive',
  components: {
    ArchiveCard,
    ArchiveTemplate
  }
}
</script>

<style scoped>
</style>
