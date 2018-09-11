import createApp from './app'
import createBabel from './babel'
import createBus from './bus'
import createConfig from './config'
import {
  createESLintRc,
  createESLintIgnore
} from './eslint'
import createGitignore from './gitignore'
import createIndexHtml from './index-html'
import createIndexVue from './index-vue'
import createMain from './main'
import createPackage from './package'
import createRouter from './router'
import createTemplate from './template'
import createUtil from './util'
import {
  createWebpackBase,
  createWebpackDev,
  createWebpackProd
} from './webpack'

export default function (opts) {
  createApp(opts)
  createBabel(opts)
  createBus(opts)
  createConfig(opts)
  createESLintRc(opts)
  createESLintIgnore(opts)
  createGitignore(opts)
  createIndexHtml(opts)
  createIndexVue(opts)
  createMain(opts)
  createPackage(opts)
  createRouter(opts)
  createTemplate(opts)
  createUtil(opts)
  createWebpackBase(opts)
  createWebpackDev(opts)
  createWebpackProd(opts)
}
