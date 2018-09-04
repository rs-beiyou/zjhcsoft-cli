const state = {
  title: ''
}

const mutations = {
  UPDATE_TITLE (state, title) {
    state.title = `${title}-zjhcsoft`
  }
}

const actions = {
  someAsyncTask ({
    commit
  }) {
    commit('UPDATE_TITLE')
  }
}

export default {
  state,
  mutations,
  actions
}
