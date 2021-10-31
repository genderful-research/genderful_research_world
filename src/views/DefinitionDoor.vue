<script setup>
import marked from "marked"
import {defineProps} from "vue"
import DefinitionDoor1 from "../components/svg/DefinitionDoor.vue";
defineProps({
  title: String,
  content: String,
})
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="container">
          <div class="row">
            <div class="col-md-6" >
              <h1>{{ title }}</h1>
              <div v-html="marked(content)"></div>
            </div>
            <div class="col-md-6" >
              <DefinitionDoor1/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.container-fluid{
  background: #008EB0;
  color: white;
}
</style>