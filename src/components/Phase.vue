<template>
    <h2>Which research phase are you in?</h2>
    <div>
    <b-form-checkbox
        v-for="(car, index) in availableCars"
        :key="index"
        v-model="selectedCars"
        :value="car"
    >
        {{ car }}
    </b-form-checkbox>
    </div>
    <div class="mt-2">Selected: <strong>{{ concatSelectedCars}}</strong></div>
</template>

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const availableCars = [
        'Funding',
        'Study population and sample size',
        'Data analysis',
        'Data collection and follow-up',
        'Interpretation and translation to medical and health practice',
        'Research question and study design',
    ]
  const selectedCars = ref([])

  const concatSelectedCars = computed(() => {
    return selectedCars.value.join(', ')
  })
</script>