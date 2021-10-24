<script setup>
// Created map elements with https://zaneray.com/responsive-image-map/
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { onMounted } from 'vue'
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
                          <a
    href="/definition-door"
    data-bs-toggle="popover"
    data-bs-trigger="hover"
    title="Definition door"
    style="
      position: absolute;
      left: 34.52%;
      top: 11.5%;
      width: 13.23%;
      height: 13.06%;
      z-index: 2;
    "
  ></a
  ><a
    href="/funding"
    data-bs-toggle="popover"
    data-bs-trigger="hover"
    title="Funding"
    style="
      position: absolute;
      left: 23.93%;
      top: 38.96%;
      width: 12.6%;
      height: 12.7%;
      z-index: 2;
    "
  ></a
  ><a
    href="/research/biomedical"
    data-bs-toggle="popover"
    data-bs-trigger="hover"
    title="Biomedical Research alley"
    style="
      position: absolute;
      left: 15.92%;
      top: 56.95%;
      width: 16.02%;
      height: 12.7%;
      z-index: 2;
    "
  ></a
  ><a
    href="/research/health"
    data-bs-toggle="popover"
    data-bs-trigger="hover"
    title="Medical Research mountains"
    style="
      position: absolute;
      left: 78.37%;
      top: 34.23%;
      width: 15.58%;
      height: 12.7%;
      z-index: 2;
    "
  ></a
  ><a
    href="/assembling_teams"
    data-bs-toggle="popover"
    data-bs-trigger="hover"
    data-bs-content="Check out the resources for assembling teams"
    title="Team assembly campsite"
    style="
      position: absolute;
      left: 41.55%;
      top: 47.71%;
      width: 16.36%;
      height: 18.14%;
      z-index: 2;
    "
  ></a>
        </div>
    </div>
</div>

</template>

