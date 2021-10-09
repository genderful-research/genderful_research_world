import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Quiz.vue')
  },
  {
    path: '/research/biomedical',
    name: 'Biomedical Research',
    component: () => import('../views/Research.vue'),
    props: { 
      title: "Biomedical Research",
      areas: ["In vitro", "In vivo"]
    }
  },
  {
    path: '/research/health',
    name: 'Health Research',
    component: () => import('../views/Research.vue'),
    props: { 
      title: "Health Research",
      areas: ["Clinical", "Population"]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
