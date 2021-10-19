<script setup>
import Quiz from '../components/Quiz.vue';
import { computed } from "vue"
import { useStore } from 'vuex'
const store = useStore()
const totalAnswered = computed(() => store.getters.totalAnswered)
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Quiz</h1>
        <p>Are you sure you know it all? Test yourself</p>
        <p>
          Total answered: {{ totalAnswered }}
          <b-button v-if="totalAnswered" @click.stop="this.$store.commit('resetQuiz')">Reset quiz</b-button>
        </p>

      </div>
    </div>
  </div>
  <Quiz/>
</template>