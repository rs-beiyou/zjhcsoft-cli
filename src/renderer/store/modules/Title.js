const state = {
  title: ''
}

const mutations = {
  UPDATE_TITLE (state, title) {
    state.title = `${title}-zjhcsoft`
  }
}

const actions = {
  UPDATE_TITLE ({ commit }) {
    commit('UPDATE_TITLE')
  }
}

export default {
  state,
  mutations,
  actions
}
