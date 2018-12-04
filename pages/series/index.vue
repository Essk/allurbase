<template>
  <ArchiveTemplate :items="$store.state.series" title="Series">
    <ArchiveCard
      slot-scope="{ item }"
      :title="item.title.rendered"
      :content="item.content.rendered"
      :id="item.id"
      detail-slug="/series"
    >
      <div slot="card-meta">
        <span>Releases in this series:</span>

        <ul>
          <li v-for="release in $store.getters.getReleasesBySeries(item.id) " :key="release.id">
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
