<script setup>
import content from '@/assets/content.yml';
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
          <div v-html="this.marked(content.about.intro_body)"></div>
      </div>
    </div>
  </div>
</template>