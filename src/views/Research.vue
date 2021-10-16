<script setup>
import content from '@/assets/content.yml';
import ResearchRoad from '../components/ResearchRoad.vue';
// import marked from "marked"

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>{{ content.research.title }}</h1>
        <p>{{ content.research.body }}</p>
      </div>
      <div class="col">
        <ResearchRoad/>
      </div>
    </div>
  </div>
</template>
