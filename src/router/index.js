import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // component: About
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
  },
  {
    path: '/meteo',
    name: 'METEO',
    // component: About
    component: () => import(/* webpackChunkName: "Meteo" */ '../views/Meteo.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
