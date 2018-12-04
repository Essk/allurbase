<template>
  <ArchiveTemplate :items="$store.state.releases" title="Releases">
    <ArchiveCard
      slot-scope="{ item }"
      :title="item.title.rendered"
      :content="item.content.rendered"
    >
      <div slot="card-meta">
        <span>By:</span>
        <ul>
          <li v-for="author in item.authors" :key="author.id">
            <nuxt-link :to="'/authors/'+author.author.ID">{{ author.author.post_title }}</nuxt-link>
          </li>
        </ul>
        <span>{{ releaseDue(item.release_date) ? 'Released on' : 'Release due' }}:</span>
        <span>{{ releaseDue(item.release_date) ? releaseDate(item.release_date) : dueDate(item.release_date, item.due_date_specificity) }}</span>
      </div>
    </ArchiveCard>
  </ArchiveTemplate>
</template>
    

  

<script>
import parse from 'date-fns/parse'
import compareDesc from 'date-fns/compare_desc'
import format from 'date-fns/format'
import ArchiveCard from '@/components/ArchiveCard.vue'
import ArchiveTemplate from '@/components/ArchiveTemplate.vue'

export default {
  name: 'ReleseArchive',
  components: {
    ArchiveCard,
    ArchiveTemplate
  },
  methods: {
    releaseDue: date_str => {
      return compareDesc(new Date(), parse(date_str)) < 0
    },
    releaseDate: date_str => {
      return format(parse(date_str), 'MMM D YYYY')
    },
    dueDate: (date_str, due_format) => {
      //return due_format
      switch (due_format) {
        case 'date':
          return format(parse(date_str), 'MMM D YYYY')
          break
        case 'year':
          return format(parse(date_str), 'YYYY')
          break
        case 'quarter':
          return format(parse(date_str), '[Q]Q YYYY')
          break
        case 'month':
        default:
          return format(parse(date_str), 'MMM YYYY')
      }
    }
  }
}
</script>

<style scoped>
</style>
