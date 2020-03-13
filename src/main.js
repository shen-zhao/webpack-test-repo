import Vue from 'vue'
import App from './App.vue'
import { install } from '@mc/phone-pc-sdk'
// import { install } from '@mc/phone-pc-sdk/lib/esm.vue.js'

Vue.use(install)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
