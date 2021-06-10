import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi (context, data) {
    const body = {}
    const config = { headers: { } }
    return axios.post(`${API_URL}/users`, body, config)
  },
  setName ({ commit }, name) {
    commit('SET_NAME', name)
  }
}
