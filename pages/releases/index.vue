<template>
  <ArchiveTemplate
    :items="releases"
    :copy="'Nunc vel tellus diam. Donec vel rhoncus libero. Phasellus molestie pharetra leo eget tristique. Etiam et ultrices tellus. Praesent vulputate ultrices eros in accumsan. Suspendisse congue semper eros id tempor. Sed libero risus, egestas eu enim vitae, ullamcorper bibendum justo. Phasellus imperdiet est sit amet quam condimentum, ac tempor mi pretium. Quisque faucibus egestas lorem nec facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus.' "
    :with-sidebar="true"
    title="Releases"
  >
    <ArchiveCard
      slot-scope="{ item }"
      :title="item.title.rendered"
      :content="item.content.rendered"
      :id="item.id"
      detail-slug="/releases"
    >
      <template slot="card-subheader">
        <span class="h5">{{ releaseDue(item.release_date) ? 'Released' : 'Due' }}:</span>
        <span
          class="h3"
        >{{ releaseDue(item.release_date) ? releaseDate(item.release_date) : dueDate(item.release_date, item.due_date_specificity) }}</span>
      </template>
      <template slot="card-meta">
        <span>By:</span>
        <ul>
          <li v-for="author in item.authors" :key="author.author">
            <nuxt-link
              :to="'/authors/'+author.author"
            >{{ $store.getters.getAuthorById(author.author).title.rendered }}</nuxt-link>
          </li>
        </ul>
      </template>
    </ArchiveCard>
  </ArchiveTemplate>
</template>
    

  

<script>
import parse from 'date-fns/parse'
import compareDesc from 'date-fns/compare_desc'
import format from 'date-fns/format'
import ArchiveCard from '@/components/ArchiveCard.vue'
import ArchiveTemplate from '@/components/ArchiveTemplate.vue'
import { mapState } from 'vuex'

export default {
  name: 'ReleseArchive',
  components: {
    ArchiveCard,
    ArchiveTemplate
  },

  async fetch({ store }) {
    //console.log(this.frontPage)
    await store.dispatch('getReleases')
    await store.dispatch('getAuthors')
  },
  computed: {
    ...mapState({
      releases: state => {
        return state.releases
      },
      authors: state => {
        return state.authors
      }
    })
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
