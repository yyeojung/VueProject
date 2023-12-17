import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingSample from '../views/DataBindingSample.vue'
import DataAttribute from '../views/DataAttribute.vue'
import DataSample02 from '../views/DataSample02.vue'
import Event from '../views/Event.vue'
import Components from '../views/Components.vue'
import Slot from '../views/Slot.vue'
import Provide from '../views/Provide.vue'
import Calculator from '../views/Calculator.vue'
import Vuex from '../views/Vuex.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'databinding',
    component: DataBinding
  },
  {
    path: '/dataHtml',
    name: 'dataHtml',
    component: DataBindingHtml
  },
  {
    path: '/DataBindingSample',
    name: 'DataBindingSample',
    component: DataBindingSample
  },
  {
    path: '/dataAttribute',
    name: 'dataAttribute',
    component: DataAttribute
  },
  {
    path: '/DataSample02',
    name: 'DataSample02',
    component: DataSample02
  },
  {
    path: '/Event',
    name: 'Event',
    component: Event
  },
  {
    path: '/Components',
    name: 'Components',
    component: Components
  },
  {
    path: '/Slot',
    name: 'Slot',
    component: Slot
  },
  {
    path: '/Provide',
    name: 'Provide',
    component: Provide
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/Vuex',
    name: 'Vuex',
    component: Vuex
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
