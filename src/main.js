import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
// import '@/assets/css/buefy.scss'
import '@/assets/css/style.scss'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import Components from './components'

Vue.use(Buefy)
Vue.config.productionTip = false

for (const key in Components) {
  Vue.component(key, Components[key])
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
