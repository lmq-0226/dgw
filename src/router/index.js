import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve=>(require(["@/components/index"],resolve))
    },
    // 头部导航栏
    {
      path: '/',
      name: 'nav',
      component: resolve=>(require(["@/comment/nav"],resolve))
    }
  ]
})
