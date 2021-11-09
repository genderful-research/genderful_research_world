<script setup>
import content from '@/assets/content.yml';
import marked from "marked"
import FundedBy from '../components/FundedBy.vue';
import Map from '../components/Map.vue';
import Modal1 from '../components/Modal.vue';
import { Modal } from 'bootstrap'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  const aModal =  new Modal(document.getElementById('modal'), {})
  if(! store.getters.viewed_explanation){
    aModal.show()
    store.commit("setExplanationViewed")
  }
  
})
</script>

<template>
  <Map/>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>{{ content.home.title }}</h1>
        <p>{{ content.home.subtitle }}</p>
        <div v-html="marked(content.home.intro_body)"></div>
      </div>
       <div class="col-md-4">
          <FundedBy/>
       </div>
    </div>
  </div>
  <Modal1 :content="content.explanation"/>
</template>
