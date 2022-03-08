<script setup>
import content from '@/assets/content.yml';
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { Collapse } from 'bootstrap'

onMounted(() => {
  const router = useRouter()
  const menuToggle = document.getElementById('navbarSupportedContent')
  const bsCollapse = new Collapse(menuToggle, {toggle: false})
  router.afterEach(() => {
    bsCollapse.hide()
  })
})

</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img alt="Genderful Research World logo" src="../assets/logo.png" width="100" />
      </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link" to="/definition-door">Definition Door</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/terms-and-definitions">Terms &amp; Definitions</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/quiz">{{ content.navigation.quiz }}</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/research">Research roads</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <router-link class="nav-link" to="/funding">Funding</router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/assembling-teams">Assembling teams</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/case_studies">Case studies</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/literature">Literature</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/">
             <i class="bi bi-map"></i> Back to the map
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>