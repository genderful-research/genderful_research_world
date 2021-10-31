<script setup>
    import resources from '@/assets/resources.csv';
    import {defineProps, computed, toRefs} from 'vue'
    const props = defineProps({
        road: String,
        phase: String,
    })
    const { phase } = toRefs(props);
    console.log(resources)


    const filteredResults = computed(() => resources.filter(resource => {
        console.log(phase.value)
            return resource['phase'] == phase.value
    }))
</script>

<template>

    <h3>Relevant resources</h3>
    <div v-for="resource in filteredResults" :key="resource">
        <div class="card mb-3">
            <div class="card-body">
            <h5 class="card-title">{{ resource.title }}</h5>
            <p class="card-text">{{ resource.description }}</p>
            <a target="_blank" class="btn btn-primary stretched-link" :href="resource.url">View</a>
            </div>
        </div>
    </div>
</template>
