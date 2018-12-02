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
      pages: []
    }),
    mutations: {
      SET_RELEASES(state, releases) {
        state.releases = releases
      },
      SET_PAGES(state, pages) {
        state.pages = pages
      }
    },
    actions: {
      async fetchReleases({ commit }) {
        const { data } = await apiClient.get('/release/')
        commit('SET_RELEASES', data)
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
      }
    }
  })
}

export default createStore
