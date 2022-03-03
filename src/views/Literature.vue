<script setup>
    import resources from '@/assets/resources.csv'
    import content from '@/assets/content.yml'
    import {computed, reactive} from 'vue'
    import marked from "marked"

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
<div class="container-fluid py-4">
    <div class="row">
        <div class="col-md-6 content">
            <h3>{{content.literature.title}}</h3>
            <div v-html="marked(content.literature.body)"/>
        </div>
         <div class="col-md-6">
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

<style scoped>
div.container-fluid {
    background-color: #008EB0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%233f9e28' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%2324aa57' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%233f9e28' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23229c4a' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%233f9e28' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23208e3d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%233f9e28' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%231d8131' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%233f9e28' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23197424' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%233f9e28' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23146718' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
div.content, div.content h3
{
    color: whitesmoke;
}
</style>