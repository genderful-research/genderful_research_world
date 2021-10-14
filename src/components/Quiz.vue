<script setup>
import quiz from '@/assets/quiz.yml';
// import {ref} from 'vue'
import Question from './Question.vue';
// const buttonsSelected = ref()
// const question = {
//     text: "Do you know what sex and gender are?",
//     id: "one",
// }


</script>

<template>
{{ this.$store }}
  <div class="container">
    <div class="row">
      <div class="col">
          <div v-for="section in quiz" :key="section.title">
              <h4>{{ section.title }}</h4>
              <p v-for="item in section.questions" :key="item.question">
                  <Question :item="item"/>
              </p>
          </div>
      </div>
    </div>
    </div>
</template>