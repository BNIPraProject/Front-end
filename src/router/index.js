import Vue from 'vue'
import VueRouter from 'vue-router'
import Courses from '../views/CoursesD.vue'
import Mahasiswa from '../views/Mahasiswa.vue'
import CoursesM from '../views/CoursesM.vue'
import CoursesMe from '../views/CoursesMe.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'courses',
    component: Courses
  },
  {
    path: '/mahasiswa',
    name: 'Mahasiswa',
    component: Mahasiswa
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/courses',
    name: 'coursesm',
    component: CoursesM
  },
  {
    path: '/coursesme',
    name: 'coursesme',
    component: CoursesMe
  },
]

const router = new VueRouter({
  routes
})

export default router
