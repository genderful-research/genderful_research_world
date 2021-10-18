<script setup>
  import NavBar from '@/components/NavBar.vue';
  import { useRouter } from 'vue-router'

  // For github pages: handle redirect from 404.html
  const path = localStorage.getItem('path');
  if(path) {
    const router = useRouter()
    localStorage.removeItem('path');
    router.push({path: path})
  }
</script>

<template>
  <NavBar/>
  <router-view/>
</template>
