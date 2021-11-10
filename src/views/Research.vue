<script setup>
import content from '@/assets/content.yml';
import ResearchRoad from '../components/ResearchRoad.vue';
import CardLinks from "../components/CardLinks.vue";
import {defineProps, toRefs, onUpdated} from "vue"
import Resources from '../components/Resources.vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  road: String,
  location: String,
})
const { road, location } = toRefs(props);
const updateLocation = () => {
  if (road.value && !location.value) {
    router.push('/research/' + road.value + '/research-question')
  }
}
updateLocation()
onUpdated(() => {
  updateLocation()
})

const buttons = [
      [
          {content: content.biomedical, url: "/research/biomedical"},
          {content: content.health, url: "/research/health"},
      ],
  ]

</script>

<template>
  <div class="container py-4">
    <div v-if="road" class="row">
      <div class="col-md-6">
        <h1>{{ content[road].title }}</h1>
        <p>{{ content[road].body }}</p>
        <ResearchRoad :road="road" :location="location" />
      </div>
      <div class="col-md-6">
        <Resources :road="road" :phase="location"/>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-md-6">
        <h1>Research</h1>
        <p>{{ content.research.body }}</p>
        <CardLinks :buttons="buttons"/>
      </div>
    </div>
  </div>
</template>
