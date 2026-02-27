import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Pricing from '../views/Pricing.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'
import ViewMembers from '../views/ViewMembers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/view-members',
      name: 'ViewMembers',
      component: ViewMembers,
    },
  ],
  scrollBehavior(stand, homepage, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  }
})

export default router
