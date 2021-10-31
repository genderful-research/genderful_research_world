<script setup>
    import resources from '@/assets/resources.csv'
    import content from '@/assets/content.yml'
    import {defineProps, computed, toRefs} from 'vue'
    const props = defineProps({
        road: String,
        phase: String,
    })
    const { phase, road } = toRefs(props);

    const filteredResults = computed(() => resources.filter(resource => {
        if (road.value) {
            return resource['phase'] === phase.value && resource[road.value]
        }
        return resource['phase'] === phase.value
    }))

    const getIcon = (resource) => content.resource_types[resource.type] ? content.resource_types[resource.type].icon : "bi-question-diamond"
    const getText = (resource) => content.resource_types[resource.type] ? content.resource_types[resource.type].text : "Unknown"

</script>

<template>

    <h3>Relevant resources</h3>
    <div v-for="resource in filteredResults" :key="resource">
        <div class="card mb-3">
            <div class="card-header">
                <i :class="getIcon(resource)"></i>
                {{ getText(resource) }}
            </div>
            <div class="card-body">
            <h5 class="card-title">{{ resource.title }}</h5>
            <p class="card-text">{{ resource.description }}</p>
            <a target="_blank" class="btn btn-secondary stretched-link" :href="resource.url">View</a>
            </div>
        </div>
    </div>
</template>
