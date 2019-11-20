import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import ShopList from '@/components/shopList/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld ,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index ,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/shopList',
      name: 'ShopList',
      component: ShopList ,
      meta: {
        title: '首页'
      }
    },
  ]
})
