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
    <div v-if="road" class="row">
      <div class="col-md-6">
        <h1>{{ content[road].title }}</h1>
        <p>{{ content.research.body }}</p>
        <ResearchRoad :road="road" :location="location" />
      </div>
      <div class="col-md-6">
        <Resources :road="road" :phase="location"/>
      </div>
    </div>
    <div v-else class="row">
      Please select a Research area
    </div>
  </div>
</template>
