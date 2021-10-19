<script setup>
import quiz from '@/assets/quiz.yml';
import Question from './Question.vue';
</script>

<template>
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