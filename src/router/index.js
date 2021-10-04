import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './Home'
import About from './About'
import MovieSear from './MovieSear'

Vue.use(VueRouter)

const routes = [
  {
    name:'index',
    path:'/',
    component:Home
  },
  {
    name:'about',
    path:'/about',
    component:About
  },
  {
    name:'movie',
    path:'/movie',
    component:MovieSear
  },

  
]

export default new VueRouter({  
  routes //routes:routes 와 동일
})
