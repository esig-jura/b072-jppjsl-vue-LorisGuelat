import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import FicheSabreView from '../views/FicheSabreView.vue'
import ServiceClientView from '../views/ServiceClientView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
      path: '/service-client',
      name: 'service-client',
      component: ServiceClientView
    },
    {
      path: '/sabre/:id',
      name: 'sabre',
      component: FicheSabreView,
      props: true
    }
  ]
})

export default router
