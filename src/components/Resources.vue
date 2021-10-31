<script setup>
    import resources from '@/assets/resources.csv';
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
    const typeToIcon = (type) => {
        const iconList = {
            factsheet: "bi-check-square",
            article: "bi-newspaper",
            infographic: "bi-image",
            video: "bi-camera-video",
            guideline: "bi-card-text",
        }
        return iconList[type]
    }
</script>

<template>

    <h3>Relevant resources</h3>
    <div v-for="resource in filteredResults" :key="resource">
        <div class="card mb-3">
            <div class="card-body">
            <h5 class="card-title">{{ resource.title }} <i style="font-size: 2rem" :class="typeToIcon(resource.type)"></i></h5>
            <p class="card-text">{{ resource.description }}</p>
            <p class="card-text">{{ resource.type }}</p>
            <a target="_blank" class="btn btn-primary stretched-link" :href="resource.url">View</a>
            </div>
        </div>
    </div>
</template>
