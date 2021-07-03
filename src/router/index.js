import Vue from 'vue'
import VueRouter from 'vue-router'
import Courses from '../views/Courses.vue'
import Mahasiswa from '../views/Mahasiswa.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/mahasiswa',
    name: 'Mahasiswa',
    component: Mahasiswa
  }
]

const router = new VueRouter({
  routes
})

export default router
