import Vue from 'vue'
import VueRouter from 'vue-router'

import './plugins/vuetify'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
