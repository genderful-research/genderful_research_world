<script setup>
    import resources from '@/assets/resources.csv'
    import content from '@/assets/content.yml'
    import {computed, reactive} from 'vue'

    const filter = reactive({road:'all', phase: 'all'})
    const filteredResults = computed(() => resources.filter(resource => {
        if (filter.road !== 'all') {
            return resource['phase'] === filter.phase && resource[filter.road]
        }
        return true
        // return resource['phase'] === filter.phase
    }))

    const getIcon = (resource) => content.resource_types[resource.type] ? content.resource_types[resource.type].icon : "bi-question-diamond"
    const getText = (resource) => content.resource_types[resource.type] ? content.resource_types[resource.type].text : "Unknown"

</script>

<template>
<div class="container pt-4">
    <div class="row">
        <div class="col-md-6">
            <h3>Literature lake</h3>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item" v-for="(resource, index) in filteredResults" :key="resource">
                    <h2 class="accordion-header" :id="'heading' + index">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index">
                         {{ resource.title }}
                    </button>
                    </h2>
                    <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    {{ resource.description }}
                                </div>
                                <div class="col">
                                    <a :href="resource.url" target="_blank">
                                        <i :class="getIcon(resource)"></i>&nbsp;
                                        {{ getText(resource) }}
                                    </a><br>
                                    Source: {{ resource.source }}<br>
                                    <template v-if="resource.health == 'x'">
                                        Health research<br>
                                    </template>
                                    <template v-if="resource.biomedical == 'x'">
                                        Biomedical research<br>
                                    </template>
                                    <template v-if="resource.in_vivo == 'x'">
                                        In vivo<br>
                                    </template>
                                    <template v-if="resource.in_vitro == 'x'">
                                        In vitro<br>
                                    </template>

                                    Phase: {{ resource.phase }}

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
