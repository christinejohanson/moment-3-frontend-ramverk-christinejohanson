import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//importera snowboardlist view och info view
import SnowboardlistView from "../views/SnowboardlistView.vue"
import InfoView from "../views/InfoView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: HomeView
    },
    //path till listan och infosidan
    {
      path: '/snowboardlista',
      name: 'snowboardlista',
      component: SnowboardlistView
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView
    }
  ]
})

export default router
