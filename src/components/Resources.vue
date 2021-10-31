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
        <h6>{{ resource["title"] }}</h6>
        <p>🔗 <a target="_blank" :href="resource['url']">Link to the resource</a></p>
    </div>
</template>
