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
import { getConfigByGroup } from '@/api/config'

Vue.use(Storage)
Vue.use(Buefy)
Vue.config.productionTip = false

for (const key in Components) {
  Vue.component(key, Components[key])
}

// 加载系统配置
getConfigByGroup('system').then(res => {
  const systemCfg = {}
  res.config.map(cfg => {
    systemCfg[cfg.key] = cfg.value
  })
  Vue.prototype.$systemCfg = systemCfg
  Vue.prototype.assetsURL = function (src) {
    if (!src) {
      src = systemCfg.default_avatar
    }
    if (src.startsWith('http')) {
      return src
    }
    return config.assetsURL + src
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
