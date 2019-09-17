/*
 * 路由菜单模块
 * 命名空间为menu
 */
import { asyncRoutes, constantRoutes } from '@/router/index'

const state = {
  routes: [], // 所有的路由
  addRoutes: [] // 添加的路由
}

// 类似页面的计算属性
const getters = {
  routes: state => {
    return state.routes
  }
}

// actions
const actions = {
  addRoutes ({ commit }) {
    return new Promise((resolve) => {
      commit('SET_ROUTES', asyncRoutes)
      resolve(asyncRoutes)
    })
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
  namespaced: true, // 命名空间，更具有封装性
  state,
  getters,
  actions,
  mutations
}
