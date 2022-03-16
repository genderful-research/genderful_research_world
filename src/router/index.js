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
    path: '/terms-and-definitions',
    name: 'Terms & Definitions',
    component: () => import('../views/InfoResource.vue'),
    props: {
      title: content.terms_and_definitions.title,
      content: content.terms_and_definitions.body,
      phase: "terms-and-definitions",
    }
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('../views/Quiz.vue'),
    props: {
      title: content.quiz.title,
      content: content.quiz.body,
    }
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
    path: '/research/:road(health|biomedical)?/:location?',
    component: () => import('../views/Research.vue'),
    props: true,
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
      content: content.about
    }
  },  
  {
    path: '/instructions',
    component: () => import('../views/Default.vue'),
    props: {
      content: content.instructions
    }
  },  
  {
    path: '/definition-door',
    component: () => import('../views/DefinitionDoor.vue'),
    props: {
      title: content.definition_door.title,
      body: content.definition_door.body,
    }
  },  
  {
    path: '/literature',
    component: () => import('../views/Literature.vue'),
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
