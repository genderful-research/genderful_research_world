<script setup>
import marked from "marked"
import {defineProps} from "vue"
defineProps({
  title: String,
  content: String,
})
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
          <h1>{{ title }}</h1>
          <div v-html="marked(content)"></div>
      </div>
    </div>
  </div>
</template>