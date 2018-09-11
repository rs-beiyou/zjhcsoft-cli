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
      path: '/standard',
      name: 'standard',
      component: resolve => {
        require(['@/pages/standard'], resolve)
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
