import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import data from '../utils/orgs-data'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataTable.vue')
  },
  {
    path: '/:org',
    name: 'Org',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrgHome.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!['Login', 'Admin'].includes(to.name) && !Object.prototype.hasOwnProperty.call(data, to.params.org)){
    next({ name: 'Login' })
  }
  else next()
})

export default router
