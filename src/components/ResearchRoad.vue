<script setup>
import content from '@/assets/content.yml';
</script>

<template>
    <h4>Research Road</h4>
    <ul class="timeline">
        <li v-for="phase in content.phases" :key="phase.id">
            <h5>{{ phase.name }}</h5>
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
    background: #d4d9df;
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
    border: 3px solid #22c0e8;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
</style>