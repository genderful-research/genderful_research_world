<script setup>
import content from '@/assets/content.yml';
import ResearchRoad from '../components/ResearchRoad.vue';
// import marked from "marked"
import {defineProps} from "vue"
import Resources from '../components/Resources.vue';
defineProps({
  road: String,
  location: String,
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>{{ content.research.title }}</h1>
        <p>{{ content.research.body }}</p>
      </div>
      <div class="col">
        <ResearchRoad :road="road" :location="location" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Resources :road="road" :phase="location"/>
      </div>
    </div>
  </div>
</template>
