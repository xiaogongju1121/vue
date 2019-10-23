import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './mock'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Element);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
