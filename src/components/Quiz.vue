<script setup>
import quiz from '@/assets/quiz.yml';
import { defineProps, toRefs } from "vue"
import Question from './Question.vue';
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps({
  section: String,
})
const { section } = toRefs(props);
const title = quiz[section.value].title
// Add numbers
let counter = 1
const questions = quiz[section.value].questions.map((obj) => {
      obj.number = counter++
      return obj
    })
store.commit("setNumberOfQuestions", {section: section.value, length: questions.length})

const currentQuestionNumber = () => store.getters.currentQuestionNumber(section.value)
const currentQuestion = (number) => questions.find(obj => { return obj.number === number })
</script>

<template>
    <h4>{{ title }}</h4>
    <transition name="fade">
        <Question :section="section" :item="currentQuestion(currentQuestionNumber())"/>
    </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>