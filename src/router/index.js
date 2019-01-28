import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/pages/welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录/注册',
      component: welcome
    }
  ]
})
