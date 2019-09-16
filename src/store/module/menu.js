/*
 * 路由菜单模块
 * 命名空间为menu
 */
import { asyncRoutes, constantRoutes } from '@/router/index'
import router from './../../router/index'

const state = {
  routes: [], // 所有的路由
  addRoutes: [] // 添加的路由
}

// 类似页面的计算属性
const getters = {
  routerList: state => {
    return state.routerList
  }
}

// actions
const actions = {
  addRoutes ({ commit }) {
    commit('SET_ROUTES', asyncRoutes)
    router.addRoutes(asyncRoutes)
  }
}

const mutations = {
  // 设置 addRoutes routes
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
