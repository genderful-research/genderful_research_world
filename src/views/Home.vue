<script setup>
import content from '@/assets/content.yml';
import marked from "marked"
import FundedBy from '../components/FundedBy.vue';
import Map from '../components/Map.vue';
</script>

<template>
  <Map/>
  <div class="container py-4">
    <div class="row">
      <div class="col-md-8">
        <h1>{{ content.home.title }}</h1>
        <p>{{ content.home.subtitle }}</p>
        <div v-html="marked(content.home.intro_body)"></div>
      </div>
       <div class="col-md-4">
          <FundedBy/>
       </div>
    </div>
  </div>
</template>
