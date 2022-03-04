<script setup>
  import NavBar from '@/components/NavBar.vue';
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
import Footer from './components/Footer.vue';

  // For github pages: handle redirect from 404.html
  const path = localStorage.getItem('path');
  if(path) {
    const router = useRouter()
    localStorage.removeItem('path');
    console.log("restoring: " + path)
    router.replace({path: path})
  }
  // Retrieve previous stored answers
  const store = useStore()
  const quiz = localStorage.getItem('quiz');
  if (quiz) {
    store.commit("restoreAnswers", JSON.parse(quiz))
  }
</script>

<template>
  <NavBar/>
  <router-view/>
  <Footer/>
</template>

<style>
  div.card-header{
    background-color: #548235;
    color: white;
  }
  div.card{
    border-color: #548235;
  }
</style>