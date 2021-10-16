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
      <div class="col-md-8" >
          <h1>{{ title }}</h1>
          <div v-html="marked(content)"></div>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</template>