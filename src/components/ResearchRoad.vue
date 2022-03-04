<script setup>
import content from '@/assets/content.yml';
import {defineProps} from "vue"
defineProps({
  road: String,
  location: String,
})
</script>

<template>
    <ul class="timeline">
        <li v-for="phase in content.phases" :key="phase.id" :class="{active: phase.id == location}">
            <router-link 
                class="btn btn-large btn-secondary"
                :class="{active: phase.id == location}"
                :to="'/research/'+road+'/'+phase.id">{{ phase.name }}
            </router-link>
            <p>{{ phase.summary }}</p>
        </li>
    </ul>
</template>

<style scoped>
ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: ' ';
    background: #548235;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #548235;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
    margin-top: 8px;
}
ul.timeline > li.active:before {
    background: #548235;
}
.btn.active{
        background: #548235;
        color: white;
}
</style>