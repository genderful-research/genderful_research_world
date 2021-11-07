<script setup>
import marked from "marked"
import {defineProps} from "vue"
defineProps({
  title: String,
  content: String,
})
</script>
<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-6" >
          <h1>{{ title }}</h1>
          <div v-html="marked(content)"></div>
      </div>
      <div class="col-md-6" >
      </div>
    </div>
  </div>
</template>