import writeFile from '../writeFile'

export default function (opts) {
  let vuex = ''
  let vuexUse = ''
  let store = ''
  let storeSet = ''

  if (opts.data.store.indexOf('vuex') > -1) {
    vuex = "import Vuex from 'vuex'"
    vuexUse = 'Vue.use(Vuex)'
    store = `
        const store = new Vuex.Store({
            state: {
                
            },
            getters: {
                
            },
            mutations: {
                
            },
            actions: {
                
            }
        })
        `
    storeSet = 'store: store,'
  }

  const file = `
      import Vue from 'vue'
      import iView from 'iview'
      import VueRouter from 'vue-router'
      import Routers from './router'
      ${vuex}
      import Util from './libs/util'
      import App from './app.vue'
      import 'iview/dist/styles/iview.css'
      
      Vue.use(VueRouter)
      ${vuexUse}
      Vue.use(iView)
      
      
      // 路由配置
      const RouterConfig = {
          mode: 'history',
          routes: Routers
      }
      const router = new VueRouter(RouterConfig)
      
      router.beforeEach((to, from, next) => {
          iView.LoadingBar.start()
          Util.title(to.meta.title)
          next()
      })
      
      router.afterEach(() => {
          iView.LoadingBar.finish()
          window.scrollTo(0, 0)
      })
      
      ${store}
      
      new Vue({
          el: '#app',
          router: router,${storeSet}
          render: h => h(App)
      })
    `
  writeFile({
    directory: `${opts.directory}/src`,
    fileName: 'main.js',
    data: file,
    success () {
      opts.log.main = 2
    },
    error () {
      opts.log.main = 3
    }
  })
}
