<script setup>
import marked from "marked"
import {defineProps} from "vue"
defineProps({
  content: Object,
})
</script>
<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col">
        <h1>{{ content.title }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-7" >
          <div v-html="marked(content.body)"></div>
      </div>
      <div class="col-md-5" >
        <div v-html="marked(content.column_2)"></div>
      </div>
    </div>
  </div>
</template>