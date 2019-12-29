import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './guards' // 导航守卫
import './icons'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
// vuetify 自定义配置
export default new Vuetify({})

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')

/**
 * 静态路由要在vue实例化之前挂载
 */
