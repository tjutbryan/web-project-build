import Vue from 'vue'
import VueRouter from 'vue-router'
import JokesAPI from '../views/JokesAPI.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'JokeAPI',
    component: JokesAPI
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
