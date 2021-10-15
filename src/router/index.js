import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import content from '@/assets/content.yml';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('../views/Quiz.vue')
  },
  {
    path: '/funding',
    name: content.navigation.funding,
    component: () => import('../views/Default.vue'),
    props: {
      title: content.funding.title,
      content: content.funding.body,
    }
  },
  {
    path: '/assembling_teams',
    name: content.navigation.funding,
    component: () => import('../views/Default.vue'),
    props: {
      title: content.team_assembly.title,
      content: content.team_assembly.body,
    }
  },  
  {
    path: '/research/biomedical',
    name: 'Biomedical Research',
    component: () => import('../views/Research.vue'),
    props: {
      research_type: "biomedical_research",
      areas: ["In vitro", "In vivo"]
    }
  },
  {
    path: '/research/health',
    name: 'Health Research',
    component: () => import('../views/Research.vue'),
    props: { 
      research_type: "health_research",
      areas: ["Clinical", "Population"]
    }
  },
  {
    path: '/case_studies',
    name: content.case_studies.title,
    component: () => import('../views/Default.vue'),
    props: {
      title: content.case_studies.title,
      content: content.case_studies.body,
    }
  },
  {
    path: '/about',
    name: content.navigation.about,
    component: () => import('../views/Default.vue'),
    props: {
      title: content.about.title,
      content: content.about.body,
    }
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
