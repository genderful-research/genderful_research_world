<script setup>
import content from '@/assets/content.yml';
import ResearchRoad from "../components/ResearchRoad.vue";
import marked from "marked"
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ content.home.title }}</h1>
        <p>{{ content.home.subtitle }}</p>
        <div v-html="marked(content.home.intro_body)"></div>
      </div>
       <div class="col-4">
          <ResearchRoad/>
       </div>
    </div>
  </div>

</template>
