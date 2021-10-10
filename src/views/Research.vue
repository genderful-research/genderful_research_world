<script setup>
import content from '@/assets/content.yml';
// import marked from "marked"
import defineProps from "vue"
defineProps({
  research_type: String,
  areas: Array
})

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ content[research_type]["title"] }}</h1>
        <p>{{ content[research_type]["intro"] }}</p>
      </div>
      <div class="col">
          <h2>Research area</h2>
            {{ areas }}
            <b-card bg-variant="light" header="Resources on the relevance">
                <ul>
                    <li>One</li>
                    <li>Two</li>
                </ul>
            </b-card>
            <b-card bg-variant="light" header="Resources on the best practices">
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </b-card>
      </div>
    </div>
  </div>
</template>
