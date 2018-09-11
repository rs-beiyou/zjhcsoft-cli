const state = {
  step: 'Add'
}

const mutations = {
  UPDATE_STEP (state, step) {
    state.step = step
  }
}

const actions = {
  UPDATE_STEP ({ commit }, step) {
    commit('UPDATE_STEP', step)
  }
}

export default {
  state,
  mutations,
  actions
}
