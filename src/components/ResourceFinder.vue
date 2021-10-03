<script setup>
    import resources from '@/assets/resources.yml';
    import {ref, computed} from 'vue'

    const resourceFilterSelected = ref([])

    // Todo: get these automatically
    const resourceFilterOptions = [
        {item: 'Introduction and terminology', name: 'Introduction and terminology'},
        {item: 'Research Question and Design', name: 'Research Question and Design'},
        {item: 'Study population and sample size', name: 'Study population and sample size'},
        {item: 'Data Collection and Analysis', name: 'Data Collection and Analysis'},
        {item: 'Data Interpretation and Translation to Practice', name: 'Data Interpretation and Translation to Practice'},
        {item: 'Funding', name: 'Funding'},
        {item: 'Team Assembly', name: 'Team Assembly'},
        {item: 'Case Studies', name: 'Case Studies'},
    ]
    const filteredResults = computed(() => resources.filter(resource => {
            return resourceFilterSelected.value.includes(resource['Research Phase'])
    }))
</script>

<template>
<div class="row">
    <div class="col">
        <h3>Search Results</h3>
        <div v-for="resource in filteredResults" :key="resource">
            <h4>{{ resource["Description"] }}</h4>
            <p>Research phase: {{ resource["Research Phase"] }}</p>
            <p><a :href="resource['Resource Suggestions']">{{ resource["Resource Suggestions"] }}</a></p>
        </div>
    </div>
    <div class="col">
        <h2>Resource Filter</h2>
        <b-form-checkbox-group
            v-model="resourceFilterSelected"
            :options="resourceFilterOptions"
            stacked
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
        ></b-form-checkbox-group>
    </div>
</div>
</template>
