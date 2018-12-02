import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://allurbase.local/wp-json/wp/v2/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getReleases() {
    return apiClient.get('/release/')
  },
  getRelease(id) {
    return apiClient.get('/release/' + id)
  }
}
