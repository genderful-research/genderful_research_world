<script setup>
    import resources from '@/assets/resources.yml';
    import {defineProps, computed, toRefs} from 'vue'
    const props = defineProps({
        road: String,
        phase: String,
    })
    const { phase } = toRefs(props);
    console.log(phase.value)


    const filteredResults = computed(() => resources.filter(resource => {
        console.log(phase.value)
            return resource['Research Phase'] == phase.value
    }))
</script>

<template>

    <h3>Relevant resources</h3>
    <div v-for="resource in filteredResults" :key="resource">
        <h6>{{ resource["Description"] }}</h6>
        <p>🔗 <a target="_blank" :href="resource['Resource Suggestions']">Link to the resource</a></p>
    </div>
</template>
