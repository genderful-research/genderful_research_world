<script setup>
import marked from "marked"
import {defineProps} from "vue"
import Resources from "../components/Resources.vue";
defineProps({
  title: String,
  content: String,
  phase: String,
})
</script>
<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-md-6" >
          <h1>{{ title }}</h1>
          <div v-html="marked(content)"></div>
      </div>
      <div class="col-md-6" >
        <Resources :phase="phase"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.container-fluid{
  background: #a9d18e;
}
</style>