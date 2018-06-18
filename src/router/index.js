import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
