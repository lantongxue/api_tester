const state = {
  main: {
    method: 'GET',
    url: ''
  }
}

const mutations = {
  setData (state, data) {
    state.main = data
  }
}

const actions = {
  setData ({ commit }, data) {
    // do something async
    commit('setData', data)
  }
}

export default {
  state,
  mutations,
  actions
}
