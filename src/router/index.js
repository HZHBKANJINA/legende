import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/oldhome',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'Pocetna',
    component: () => import( '../views/NovaPocetna.vue')
  },
  {
    path: '/podorasackanjina',
    name: 'Podorasac-Kanjina',
    component: () => import( '../views/PodorasacKanjina.vue')
  },
  {
    path: '/ovcarirepovica',
    name: 'Ovcari-Repovica',
    component: () => import( '../views/OvcariRepovica.vue')
  },
  {
    path: '/grad',
    name: 'Grad',
    component: () => import( '../views/GradView.vue')
  },
  {
    path: '/orahovicaklis',
    name: 'Orahovica-Klis',
    component: () => import( '../views/OrahovicaKlis.vue')
  },
  {
    path: '/sela',
    name: 'Ostala sela',
    component: () => import( '../views/SelaView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
