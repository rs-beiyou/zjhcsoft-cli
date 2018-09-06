import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => {
        require(['@/pages/home'], resolve)
      }
    },
    {
      path: '/webapp',
      name: 'webapp',
      component: resolve => {
        require(['@/pages/webapp'], resolve)
      }
    }, {
      path: '/cordova',
      name: 'cordova',
      component: resolve => {
        require(['@/pages/cordova'], resolve)
      }
    },
    {
      path: '/resource',
      name: 'resource',
      component: resolve => {
        require(['@/pages/resource'], resolve)
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
