<script setup>
import Quiz from '../components/Quiz.vue';
import { computed } from "vue"
import { useStore } from 'vuex'
const store = useStore()
const totalAnswered = computed(() => store.getters.totalAnswered)
const resetQuiz = () => store.commit('resetQuiz')
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Quiz</h1>
        <Quiz :section="'definitions'" />
      </div>
      <div class="col-md-3">
        <p>
          Total answered: {{ totalAnswered }}
          <b-button :disabled="!totalAnswered" @click.stop="resetQuiz">Reset quiz</b-button>
        </p>
      </div>
    </div>
  </div>
</template>