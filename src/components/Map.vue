<script setup>
// Created map elements with https://zaneray.com/responsive-image-map/
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { onMounted } from 'vue'
import mapItems from '@/assets/map.yml'


onMounted(() => {
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new Popover(popoverTriggerEl)
    })
})
</script>
<template>
<div class="container">
    <div class="row">
        <div class="col" style="position: relative">
            <img class="img-fluid" src="@/assets/map.png">
            <a href="" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Research question and design" title="Biomedical research road" style="position: absolute; left: 22.18%; top: 24.32%; width: 7.69%; height: 7.03%; z-index: 2;"></a>
            <a href="" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Research question and design" title="Health research road" style="position: absolute; left: 84.81%; top: 24.93%; width: 7.69%; height: 7.03%; z-index: 2;"></a>
            <a v-for="item in mapItems" :key="item.left"
                data-bs-toggle="popover"
                data-bs-trigger="hover"
                :title="item.title"
                :href="item.href"
                :data-bs-content="item.body"
                :style="{ position: 'absolute', left: item.left + '%', top: item.top + '%', width: item.width + '%', height: item.height + '%', 'z-index': 2 }"
                ></a>
        </div>
    </div>
</div>

</template>

