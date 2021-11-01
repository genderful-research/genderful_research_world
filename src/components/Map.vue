<script setup>
// Created map elements with https://zaneray.com/responsive-image-map/
import { Popover } from 'bootstrap'
import { onMounted, onBeforeUnmount } from 'vue'
import mapItems from '@/assets/map.yml'

let popoverList = []
onMounted(() => {
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new Popover(popoverTriggerEl)
    })
})
onBeforeUnmount(() => {
    // Hide popovers when unmounting
    popoverList.forEach((item) => item.hide())
})
</script>
<template>
<div class="container-fluid" style="max-width:2100px">
    <div class="row">
        <div class="col" style="position: relative">
            <img class="img-fluid" src="@/assets/map.png">
            <router-link v-for="item in mapItems" :key="item.left"
                data-bs-toggle="popover"
                data-bs-trigger="hover"
                :title="item.title"
                :to="item.href"
                :data-bs-content="item.body"
                :style="{ position: 'absolute', left: item.left + '%', top: item.top + '%', width: item.width + '%', height: item.height + '%', 'z-index': 2 }"
                ></router-link>
        </div>
    </div>
</div>

</template>

