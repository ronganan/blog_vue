import Vue from 'vue'
import Router from 'vue-router'
import login from 'pages/user/login'
import home from 'pages/home'
import record from 'pages/record'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: "登录"
      }
    },{
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: "首页"
      }
    },{
      path: '/record',
      name: 'record',
      component: record,
      meta: {
        title: "记录"
      }
    },{
      path: "*", // 错误路由
      redirect: "/login/" //重定向
    }
  ]
})
