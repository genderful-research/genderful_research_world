<script setup>
  import marked from "marked"
  import content from '@/assets/content.yml';
  import {defineProps} from "vue"
  import DefinitionDoor1 from "../components/svg/DefinitionDoor.vue";
  import CardLinks from "../components/CardLinks.vue";
  defineProps({
    title: String,
    body: String,
  })
  const buttons = [
      [
          {content: content.team_assembly, url: "/assembling-teams"},
          {content: content.funding, url: "/funding"},
      ],
      [
          {content: content.biomedical, url: "/research/biomedical"},
          {content: content.health, url: "/research/health"},
      ],
  ]

</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="container">
          <div class="row">
            <div class="col-md-6" >
              <h1>{{ title }}</h1>
              <div v-html="marked(body)"></div>
              <CardLinks :buttons="buttons"/>
            </div>
            <div class="col-md-6" >
              <DefinitionDoor1 />
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