import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lobby from '../views/Lobby.vue'
import Scoreboard from '../views/Scoreboard.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game',
    name: 'lobby',
    component: Lobby
  },
  {
    path: '/scoreboard',
    name: 'scoreboard',
    component: Scoreboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
