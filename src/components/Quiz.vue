<script setup>
import quiz from '@/assets/quiz.yml';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
          <h3>{{ quiz.general.definition.question }}</h3>
          <p>
              
          </p>
    {{ quiz }}
      </div>
    </div>
    </div>
</template>