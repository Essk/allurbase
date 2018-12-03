import Vuex from 'vuex'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://allurbase.local/wp-json/wp/v2/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      releases: [],
      pages: [],
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
      SET_FP(state, page) {
        state.frontPage = page
      },
      SET_IP(state, ip) {
        state.ip = ip
      }
    },
    actions: {
      async fetchReleases({ commit }) {
        const { data } = await apiClient.get('/release/')
        commit('SET_RELEASES', data)
      },
      async nuxtServerInit({ commit }, { app }) {
        // just in as a canary while I figure out how all this fits together
        const ip = await app.$axios.$get('http://icanhazip.com')
        commit('SET_IP', ip)

        // the data I care about
        const releaseRes = await app.$axios.$get(
          'http://allurbase.local/wp-json/wp/v2/release/'
        )
        const pageRes = await app.$axios.$get(
          'http://allurbase.local/wp-json/wp/v2/pages/'
        )
        const fpRes = await app.$axios.$get(
          'http://allurbase.local/wp-json/aub-config/front-page/'
        )
        commit('SET_RELEASES', releaseRes)
        commit('SET_PAGES', pageRes)
        commit('SET_FP', fpRes)
      }
    },
    getters: {
      getReleases: state => {
        return state.releases
      },
      getReleaseById: state => id => {
        return state.releases.find(r => {
          return r.id === id
        })
      },
      getPageById: state => id => {
        return state.pages.find(p => {
          return p.id === id
        })
      },
      getFrontPage: state => {
        return state.frontPage
      }
    }
  })
}

export default createStore
