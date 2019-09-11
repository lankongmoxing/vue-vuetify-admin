import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

// module
import menu from './module/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu
  },
  getters
})
