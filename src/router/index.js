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
    component: () => import('../views/InfoResource.vue'),
    props: {
      title: content.funding.title,
      content: content.funding.body,
      phase: "funding",
    }
  },
  {
    path: '/assembling-teams',
    component: () => import('../views/InfoResource.vue'),
    props: {
      title: content.team_assembly.title,
      content: content.team_assembly.body,
      phase: "assembling-teams"
    }
  },  
  {
    path: '/research/:road/:location',
    component: () => import('../views/Research.vue'),
    props: true,
  },
  {
    path: '/research/:road',
    component: () => import('../views/Research.vue'),
  },
  {
    path: '/research',
    component: () => import('../views/Research.vue'),
  },
  {
    path: '/case_studies',
    component: () => import('../views/InfoResource.vue'),
    props: {
      title: content.case_studies.title,
      content: content.case_studies.body,
      phase: "case-studies"

    }
  },
  {
    path: '/about',
    component: () => import('../views/Default.vue'),
    props: {
      title: content.about.title,
      content: content.about.body,
    }
  },  
  {
    path: '/definition-door',
    component: () => import('../views/DefinitionDoor.vue'),
    props: {
      title: content.definition_door.title,
      content: content.definition_door.body,
    }
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
