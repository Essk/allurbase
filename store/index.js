import Vuex from 'vuex'

const apiBase =
  process.env.NODE_ENV === 'development'
    ? 'http://allurbase.local/wp-json'
    : 'https://dev.essk.co.uk/wp-json'
console.log(apiBase)
const isEmpty = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      releases: [],
      pages: [],
      authors: [],
      frontPage: {},
      ip: ''
    }),
    mutations: {
      SET_RELEASES(state, releases) {
        state.releases = releases
      },
      SET_PAGES(state, pages) {
        state.pages = pages
      },
      SET_AUTHORS(state, authors) {
        state.authors = authors
      },
      SET_SERIES(state, series) {
        state.series = series
      },
      SET_FP(state, page) {
        state.frontPage = page
      },
      SET_IP(state, ip) {
        state.ip = ip
      }
    },
    actions: {
      async nuxtServerInit({ commit }, { app }) {},
      async getFp({ commit, state }) {
        if (isEmpty(state.frontPage)) {
          await this.$axios
            .get(apiBase + '/aub-config/front-page/')
            .then(res => {
              if (res.status === 200) {
                commit('SET_FP', res.data)
              }
            })
        }
      },
      async getPages({ commit, state }) {
        if (isEmpty(state.pages)) {
          await this.$axios.get(apiBase + '/wp/v2/pages/').then(res => {
            if (res.status === 200) {
              commit('SET_PAGES', res.data)
            }
          })
        }
      },
      async getReleases({ commit, state }) {
        //console.log()
        if (state.releases.length === 0) {
          await this.$axios.get(apiBase + '/wp/v2/release/').then(res => {
            if (res.status === 200) {
              commit('SET_RELEASES', res.data)
            }
          })
        }
      },
      async getAuthors({ commit, state }) {
        if (state.authors.length === 0) {
          await this.$axios.get(apiBase + '/wp/v2/author/').then(res => {
            if (res.status === 200) {
              commit('SET_AUTHORS', res.data)
            }
          })
        }
      }
    },
    getters: {
      getReleases: state => {
        return state.releases
      },
      getReleaseById: state => id => {
        return state.releases.find(r => {
          return parseInt(r.id) === parseInt(id)
        })
      },
      getPageById: state => id => {
        return state.pages.find(p => {
          return p.id === id
        })
      },
      getFrontPage: state => {
        return state.frontPage
      },
      getReleasesByAuthor: state => authorId => {
        return state.releases.filter(r => {
          return r.authors
            .map(authorObj => {
              return authorObj.author
            })
            .includes(authorId)
        })
      },
      getReleasesBySeries: state => seriesId => {
        return state.releases.filter(r => {
          if (r.hasOwnProperty('series')) {
            return r.series
              .map(seriesObj => {
                return seriesObj.series
              })
              .includes(seriesId)
          }
          return false
        })
      },
      getAuthorById: state => id => {
        return state.authors.find(a => {
          return parseInt(a.id) === parseInt(id)
        })
      }
    }
  })
}

export default createStore
