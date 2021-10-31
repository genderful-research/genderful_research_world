<script setup>
    import content from '@/assets/content.yml';
    const buttons = [
        [
            {content: content.team_assembly, url: "/assembling-teams"},
            {content: content.funding, url: "/funding"},
        ],
        [
            {content: content.biomedical, url: "/research/biomedical"},
            {content: content.health, url: "/research/health"},
        ],
    ]
</script>

<template>
  <div v-for="row in buttons" :key="row[0]" class="row">
    <div v-for="col in row" :key="col[0]" class="col-sm-6">
      <div class="card text-dark bg-warning mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ col.content.title }}</h5>
          <p class="card-text">{{ col.content.info }}</p>
          <router-link class="btn btn-primary" :to="col.url">Go</router-link>
        </div>
      </div>
    </div>
  </div>
</template>