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
  <div class="container pt-4">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <h1>Quiz
          <button class="btn btn-outline-secondary float-end" :disabled="!totalAnswered" @click.stop="resetQuiz">
            <i class="bi-recycle"/> Reset quiz
          </button>
        </h1>

        <Quiz :section="'definitions'" />
        <Quiz v-if="quizAnswered('definitions')" :section="'relevance'" />
      </div>
    </div>
  </div>
</template>