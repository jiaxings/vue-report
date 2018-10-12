// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Icon from 'vue-svg-icon/Icon.vue'
import store from './store'
import Icon from 'vue-awesome/components/Icon'
import VModal from 'vue-js-modal'

import 'vue-awesome/icons'
import './main.css'

Vue.use(VModal)
Vue.component('v-icon', Icon)
// Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
