<script setup>
import { defineProps, toRefs } from "vue"
import marked from "marked"

const props = defineProps({
  content: Object,
})
const { content } = toRefs(props);

</script>
<template>
<div class="modal" tabindex="-1" id="modal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ content.title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" v-html="marked(content.body)">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>