import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
// import '@/assets/css/buefy.scss'
import '@/assets/css/style.scss'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import Components from './components'
import Storage from 'vue-ls'
import { config } from '@/utils/request'

Vue.use(Storage)
Vue.use(Buefy)
Vue.config.productionTip = false

for (const key in Components) {
  Vue.component(key, Components[key])
}

Vue.prototype.assetsURL = function (src) {
  if (!src) {
    return 'http://wx4.sinaimg.cn/mw600/0085KTY1gy1gd66pwrkqij30hs0hsgmb.jpg'
  }
  if (src.startsWith('http')) {
    return src
  }
  return config.assetsURL + src
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
