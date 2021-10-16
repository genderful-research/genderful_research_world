<script setup>
import content from '@/assets/content.yml';
import marked from "marked"
import FundedBy from '../components/FundedBy.vue';
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
          <FundedBy/>
       </div>
    </div>
  </div>

</template>
