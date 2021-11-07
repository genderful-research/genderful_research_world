import { createStore } from 'vuex'

export default createStore({
  state: {
    answers: {},
    currentQuestionNumber: {definitions: 1, relevance: 1},
    numberOfQuestions: {definitions: 0, relevance: 0},
  },
  getters: {
    totalAnswered(state) {
      return Object.keys(state.answers).length
    },
    quizAnswered: (state) => (section) => {
      return state.currentQuestionNumber[section] > state.numberOfQuestions[section]
    },
    selectedAnswer: (state) => (id) => {
      if (id in state.answers) {
        return state.answers[id]
      }
      return false
    },
    currentQuestionNumber: (state) => (section) => {
      return state.currentQuestionNumber[section]
    },
    getMaxQuestions: (state) => (section) => {
      return state.numberOfQuestions[section]
    },
    getScore: (state) => (section) => {
      let goodAnswers = 0
      for (const answer in state.answers) {
        if (answer.startsWith(section) && state.answers[answer].correct) {
          goodAnswers = goodAnswers + 1
        }
      }
      return Math.round((goodAnswers / state.numberOfQuestions[section]) * 100)
    },
  },
  mutations: {
    setAnswer (state, answer) {
      state.answers[answer.item.id] = {
        selected: answer.answer,
        correct: answer.answer == answer.item.correct_answer,
      }
      state.answers = {...state.answers}
    },
    restoreAnswers(state, answers) {
      state.answers = answers
    },
    resetQuiz(state) {
      state.answers = {}
      state.currentQuestionNumber = {definitions: 1, relevance: 1}
    },
    updateQuestionNumber(state, section) {
      state.currentQuestionNumber[section] = state.currentQuestionNumber[section] + 1
    },
    setNumberOfQuestions(state, payload) {
      state.numberOfQuestions[payload.section] = payload.length
    }
  },
  actions: {
    addAnswer ({ state, commit }, answer) {
      commit('setAnswer', answer)
      localStorage.setItem('quiz', JSON.stringify(state.answers));
    }
  },
  modules: {
  }
})
