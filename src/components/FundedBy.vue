<script setup>
import content from '@/assets/content.yml';
</script>
<template>
<h4>{{ content.funded_by.title }}</h4>
<div class="card-group">
    <div class="card">
        <div class="card-body">
            <img src="@/assets/cihr-logo.png" class="card-img-top " alt="CIHR-IGH Logo">
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <img src="@/assets/zonmw-logo.png" class="card-img-top" alt="ZonMw Logo">
        </div>
    </div>
</div>
</template>