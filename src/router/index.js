import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RedirectsView from '../views/RedirectsView.vue'
import HostnamesView from '../views/HostnamesView.vue'
import MonitorView from '../views/MonitorView.vue'
import URLShortnerView from '../views/URLShortnerView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/redirects',
      name: 'redirects',
      component: RedirectsView
    },
    {
      path: '/hostnames',
      name: 'hostnames',
      component: HostnamesView
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: MonitorView
    },
    {
      path: '/urlshortner',
      name: 'urlshortner',
      component: URLShortnerView
    },
  ]
})

export default router
