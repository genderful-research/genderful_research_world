<template>
    <h3>Which research phase are you in?</h3>
    <div>
    <b-form-checkbox
        v-for="(phase, index) in availablePhases"
        :key="index"
        v-model="selectedPhases"
        :value="phase"
    >
        {{ phase }}
    </b-form-checkbox>
    </div>
    <div class="mt-2">Selected: <strong>{{ concatSelectedPhases}}</strong></div>
</template>

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const availablePhases = [
        'Funding',
        'Study population and sample size',
        'Data analysis',
        'Data collection and follow-up',
        'Interpretation and translation to medical and health practice',
        'Research question and study design',
    ]
  const selectedPhases = ref([])

  const concatSelectedPhases = computed(() => {
    return selectedPhases.value.join(', ')
  })
</script>