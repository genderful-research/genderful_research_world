<script setup>
import { ref } from 'vue'
import Phase from './Phase.vue';
import DefinitionDoor from './DefinitionDoor.vue';

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ msg }}</h1>
        <p>The interactive sex and gender resource platform for biomedical and health scientists.</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <b-card>
          <h3>What are you looking for?</h3>
          <b-button>Sex*/gender in biomedical research</b-button>
          <b-button variant="danger">Sex and gender in health research</b-button>
          <b-button>Sex and gender integration in assembling research teams</b-button>
          <b-button>Sex and gender integration when applying for funding</b-button>
        </b-card>
      </div>
      <div class="col">
        <Phase/>
      </div>
    </div>
        <div class="row">
      <div class="col">
       <DefinitionDoor/>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</template>

