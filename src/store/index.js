import { createStore } from 'vuex'


export default createStore({
  state: {
    answers: {}
  },
  getters: {
    totalAnswered(state) {
      return Object.keys(state.answers).length
    },
    selectedAnswer: (state) => (id) => {
      if (id in state.answers) {
        return state.answers[id]
      }
      return false
    } 
  },
  mutations: {
    setAnswer (state, answer) {
      state.answers[answer.item.id] = {
        selected: answer.answer,
        correct: answer.answer == answer.item.correct_answer,
      }
      state.answers = {...state.answers}
    }
  },
  actions: {
    addAnswer ({ commit }, answer) {
      console.log(answer)
      commit('setAnswer', answer)
    }
  },
  modules: {
  }
})
