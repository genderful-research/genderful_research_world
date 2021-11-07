<script setup>
import Quiz from '../components/Quiz.vue';
import { computed } from "vue"
import { useStore } from 'vuex'
const store = useStore()
const totalAnswered = computed(() => store.getters.totalAnswered)
const quizAnswered = (section) => store.getters.quizAnswered(section)

const resetQuiz = () => store.commit('resetQuiz')
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Quiz</h1>
        <Quiz :section="'definitions'" />
        <Quiz v-if="quizAnswered('definitions')" :section="'relevance'" />
      </div>
      <div class="col-md-3">
        <p>
          <button class="btn btn-outline-secondary" :disabled="!totalAnswered" @click.stop="resetQuiz">Reset quiz</button>
        </p>
      </div>
    </div>
  </div>
</template>