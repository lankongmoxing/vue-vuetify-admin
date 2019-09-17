import router from './router/index'
import store from './store/index'

/**
 * 路由前置守卫
 * 拦截路由跳转，判断权限
 * next() 之后的语句还会执行
 * next() 中的 replace 属性：默认 false 。设置成 true ，浏览器导航不会留下from当前路由记录，当页面刷新或者权限变更的时候调用
 * { ...to } 对象的结构赋值
 * vuex 的 actions 方法是异步调用的。用then等待
 */
router.beforeEach(async (to, from, next) => {
  // 如果访问登录页面，则直接跳转
  if (to.path === '/login') {
    next()
    return
  }

  // 判断是否有token，没有则跳转登录页面
  if (localStorage.token) {
    const role = store.state.menu.addRoutes && store.state.menu.addRoutes.length !== 0
    if (role) {
      next()
    } else {
      const asyncRoutes = await store.dispatch('menu/addRoutes')
      router.addRoutes(asyncRoutes)
      next({ ...to, replace: true })
    }
  } else {
    next({
      path: '/login'
    })
  }
})

/**
 * 完整的导航解析流程
 * 1. 导航被触发。
 * 2. 在失活的组件里调用离开守卫。
 * 3. 调用全局的 beforeEach 守卫。
 * 4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
 * 5. 在路由配置里调用 beforeEnter。
 * 6. 解析异步路由组件。
 * 7. 在被激活的组件里调用 beforeRouteEnter。
 * 8. 调用全局的 beforeResolve 守卫 (2.5+)。
 * 9. 导航被确认。
 * 10. 调用全局的 afterEach 钩子。
 * 11. 触发 DOM 更新。
 * 12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
 */
