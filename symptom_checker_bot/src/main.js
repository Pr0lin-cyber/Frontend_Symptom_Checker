import Vue from 'vue'
import App from './App.vue'
import router from "@/Router/index";
import wb from './registerServiceWorker'
import vuetify from './plugins/vuetify'

Vue.prototype.$workbox = wb;
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')