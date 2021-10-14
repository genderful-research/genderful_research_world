import { createStore } from 'vuex'

export default createStore({
  state: {
    answers: []
  },
  mutations: {
    setAnswer (state, item) {
      state.answers[item.question] = item
    }
  },
  actions: {
    addAnswer ({ state, commit }, item) {
      console.log(item)
      console.log(state.answers)
      commit('setAnswer', item)
    }
  },
  modules: {
  }
})
