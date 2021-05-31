// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import ElementUI from 'element-ui'
import util from './utils/util'
import Vuex from 'vuex'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(ElementUI)
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store(store)

  Vue.prototype.$util = util
  Vue.component('Layout', DefaultLayout)
}
