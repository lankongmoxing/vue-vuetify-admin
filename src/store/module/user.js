const state = {}

const mutations = {}

const actions = {
  /**
   * 登录页面调用，向服务端发起登录请求
   * @param {*} store
   * @param {*} data 账号名/密码
   * 从服务端拉取 token 和 用户权限
   */
  login (store, data) {
    return new Promise((resolve) => {
      // 设置token
      const token = new Date().getTime()
      localStorage.token = token
      // 设置权限
      const menu = [{
        name: '表格',
        path: '/table'
      }]
      localStorage.menu = JSON.stringify(menu)
      resolve()
    })
  }
}

export default {
  namespaced: true, // 命名空间，更具有封装性
  state,
  mutations,
  actions
}
