import Vue from 'vue'
import VueRouter from 'vue-router'
import Courses from '../views/Courses.vue'
import Mahasiswa from '../views/Mahasiswa.vue'
import regisD from '../views/regisD.vue'
import regisM from '../views/regisM.vue'
import regisP from '../views/regisP.vue'
import loginP from '../views/loginP.vue'
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
  },
  {
    path: '/',
    component: regisP
  },
  {
    path: '/login',
    component: loginP
  },
  {
    path: '/regisD',
    component: regisD
  },
  {
    path: '/regisM',
    component: regisM
  }
]

const router = new VueRouter({
  routes
})

export default router
