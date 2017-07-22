import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'
import fastclick from 'fastclick'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
