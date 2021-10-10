<script setup>
import content from '@/assets/content.yml';
import marked from "marked"
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
          <div v-html="marked(content.about.intro_body)"></div>
      </div>
    </div>
  </div>
</template>