/*
 * 路由菜单模块
 * 命名空间为menu
 */
const state = {
  routerList: {
    a: 1
  }
}

// 类似页面的计算属性
const getters = {
  routerList: state => {
    return state.routerList
  }
}

// actions
const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
